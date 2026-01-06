import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.string().optional(),
  // DATABASE_URL is required for production and local development migrations
  DATABASE_URL: z.string().url(),
  // add any other secrets / config keys here
  // For example: MY_API_KEY: z.string().optional(),
  MY_API_KEY: z.string().optional(),
});

const parsed = envSchema.parse(process.env);

export const config = {
  NODE_ENV: parsed.NODE_ENV,
  PORT: parsed.PORT ? parseInt(parsed.PORT, 10) : 5000,
  DATABASE_URL: parsed.DATABASE_URL,
  MY_API_KEY: parsed.MY_API_KEY,
};

export type Config = typeof config;
