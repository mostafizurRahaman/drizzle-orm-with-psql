import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: "127.0.0.1",
    user: "postgres",
    password: "mostafiz",
    database: "drizzle_practice",
    ssl: false,
  },
});
