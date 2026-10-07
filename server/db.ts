import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "./config";

let pool: Pool | undefined;
let db: any;

try {
  if (config.DATABASE_URL) {
    pool = new Pool({
      connectionString: config.DATABASE_URL,
      ssl: config.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
    });
    db = drizzle(pool);
  } else {
    console.warn("[AI Studio] DATABASE_URL not set — using in-memory mock fallback");
    const noOp = {
      findMany: async () => [],
      findFirst: async () => null,
      findUnique: async () => null,
      create: async (d: any) => d?.data ?? {},
      update: async (d: any) => d?.data ?? {},
      delete: async () => ({}),
    };
    db = new Proxy({}, {
      get: (_, prop) => prop === "query" ? new Proxy({}, { get: () => noOp }) : async () => [],
    });
  }
} catch (e) {
  console.warn("[AI Studio] Database connection error — using fallback", e);
  const noOp = {
    findMany: async () => [],
    findFirst: async () => null,
    findUnique: async () => null,
    create: async (d: any) => d?.data ?? {},
    update: async (d: any) => d?.data ?? {},
    delete: async () => ({}),
  };
  db = new Proxy({}, {
    get: (_, prop) => prop === "query" ? new Proxy({}, { get: () => noOp }) : async () => [],
  });
}

export { db, pool };
