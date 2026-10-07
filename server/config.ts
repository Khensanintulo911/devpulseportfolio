import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.string().optional(),
  DATABASE_URL: z.string().optional(),
  MY_API_KEY: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);
const envData = parsed.success ? parsed.data : {
  NODE_ENV: "development" as const,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  MY_API_KEY: process.env.MY_API_KEY,
};

export const config = {
  NODE_ENV: envData.NODE_ENV,
  PORT: envData.PORT ? parseInt(envData.PORT, 10) : 3000,
  DATABASE_URL: envData.DATABASE_URL,
  MY_API_KEY: envData.MY_API_KEY,
};

export type Config = typeof config;
