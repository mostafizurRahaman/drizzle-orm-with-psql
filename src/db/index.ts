import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { countries } from "../schema";

export const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "mostafiz",
  database: "drizzle_practice",
  ssl: false,
});

export const db = drizzle(client, {
  schema: {
    countries,
  },
});


