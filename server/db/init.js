import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL is required. Copy server/.env.example to server/.env");
  process.exit(1);
}

const sql = neon(connectionString);

const statements = [
  `CREATE TABLE IF NOT EXISTS sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    user_agent TEXT,
    completed_learn BOOLEAN DEFAULT FALSE,
    completed_spot_it BOOLEAN DEFAULT FALSE,
    completed_voice BOOLEAN DEFAULT FALSE
  )`,
  `CREATE TABLE IF NOT EXISTS quiz_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES sessions(id),
    scenario_id TEXT NOT NULL,
    user_answer TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS poll_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES sessions(id),
    question_id TEXT NOT NULL,
    answer TEXT NOT NULL,
    answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(session_id, question_id)
  )`,
];

async function init() {
  for (const statement of statements) {
    await sql(statement);
    console.log("OK:", statement.split("\n")[0]);
  }
  console.log("Database tables ready.");
}

init().catch((err) => {
  console.error("Init failed:", err.message);
  process.exit(1);
});
