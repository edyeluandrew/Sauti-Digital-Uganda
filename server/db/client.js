import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("Warning: DATABASE_URL is not set. API database calls will fail.");
}

export const sql = connectionString ? neon(connectionString) : null;
