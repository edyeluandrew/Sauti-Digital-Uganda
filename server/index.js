import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { sql } from "./db/client.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.CLIENT_URL || true,
}));
app.use(express.json());

function requireDb(_req, res, next) {
  if (!sql) {
    return res.status(503).json({ error: "Database not configured. Set DATABASE_URL in server/.env" });
  }
  next();
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, db: Boolean(sql) });
});

app.post("/api/sessions", requireDb, async (req, res) => {
  try {
    const userAgent = req.body.user_agent || req.headers["user-agent"] || null;
    const rows = await sql`
      INSERT INTO sessions (user_agent)
      VALUES (${userAgent})
      RETURNING id, created_at
    `;
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/sessions/count", requireDb, async (_req, res) => {
  try {
    const rows = await sql`SELECT COUNT(*)::int AS total_sessions FROM sessions`;
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.patch("/api/sessions/:id", requireDb, async (req, res) => {
  try {
    const { id } = req.params;
    const { completed_learn, completed_spot_it, completed_voice } = req.body;

    const rows = await sql`
      UPDATE sessions SET
        completed_learn = COALESCE(${completed_learn ?? null}, completed_learn),
        completed_spot_it = COALESCE(${completed_spot_it ?? null}, completed_spot_it),
        completed_voice = COALESCE(${completed_voice ?? null}, completed_voice)
      WHERE id = ${id}::uuid
      RETURNING id, completed_learn, completed_spot_it, completed_voice
    `;

    if (!rows.length) {
      return res.status(404).json({ error: "Session not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/quiz", requireDb, async (req, res) => {
  try {
    const { session_id, scenario_id, user_answer, is_correct } = req.body;

    if (!session_id || !scenario_id || !user_answer || typeof is_correct !== "boolean") {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const rows = await sql`
      INSERT INTO quiz_responses (session_id, scenario_id, user_answer, is_correct)
      VALUES (${session_id}::uuid, ${scenario_id}, ${user_answer}, ${is_correct})
      RETURNING id, scenario_id, is_correct, answered_at
    `;
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/quiz/stats", requireDb, async (_req, res) => {
  try {
    const rows = await sql`
      SELECT scenario_id,
             COUNT(*)::int AS total,
             SUM(CASE WHEN is_correct THEN 1 ELSE 0 END)::int AS correct_count
      FROM quiz_responses
      GROUP BY scenario_id
      ORDER BY scenario_id
    `;
    const summary = await sql`
      SELECT COUNT(DISTINCT session_id)::int AS participants,
             ROUND(AVG(CASE WHEN is_correct THEN 100.0 ELSE 0.0 END), 1)::float AS avg_score_pct
      FROM quiz_responses
    `;
    res.json({ by_scenario: rows, summary: summary[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/polls", requireDb, async (req, res) => {
  try {
    const { session_id, question_id, answer } = req.body;

    if (!session_id || !question_id || !answer) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const rows = await sql`
      INSERT INTO poll_responses (session_id, question_id, answer)
      VALUES (${session_id}::uuid, ${question_id}, ${answer})
      ON CONFLICT (session_id, question_id)
      DO UPDATE SET answer = EXCLUDED.answer, answered_at = NOW()
      RETURNING id, question_id, answer, answered_at
    `;
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/polls/aggregate", requireDb, async (_req, res) => {
  try {
    const rows = await sql`
      SELECT question_id, answer, COUNT(*)::int AS count
      FROM poll_responses
      GROUP BY question_id, answer
      ORDER BY question_id, count DESC
    `;
    const total = await sql`SELECT COUNT(DISTINCT session_id)::int AS total_respondents FROM poll_responses`;
    res.json({ results: rows, total_respondents: total[0].total_respondents });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sauti API running on http://localhost:${PORT}`);
});
