import { harmCategories } from "./content/digitalHarms";
import { pollQuestions, recommendationTemplates } from "./content/pollQuestions";
import { spotItScenarios } from "./content/spotItScenarios";

const scenarioHarmMap = Object.fromEntries(
  spotItScenarios.map((s) => [s.id, s.harmCategory])
);

export function buildHarmStats(quizStats) {
  if (!quizStats?.by_scenario?.length) return [];

  const byHarm = {};
  for (const row of quizStats.by_scenario) {
    const harm = scenarioHarmMap[row.scenario_id];
    if (!harm || harm === "legitimate") continue;
    if (!byHarm[harm]) byHarm[harm] = { attempts: 0, correct: 0 };
    byHarm[harm].attempts += row.total;
    byHarm[harm].correct += row.correct_count;
  }

  return Object.entries(byHarm).map(([id, data]) => ({
    id,
    label: harmCategories[id]?.label || id,
    icon: harmCategories[id]?.icon || "•",
    attempts: data.attempts,
    accuracy: data.attempts ? Math.round((data.correct / data.attempts) * 100) : 0,
  }));
}

function getMajority(results, questionId) {
  const filtered = results.filter((r) => r.question_id === questionId);
  if (!filtered.length) return null;
  return filtered.reduce((a, b) => (a.count >= b.count ? a : b));
}

export function buildUigfSubmissionText({ pollData, quizStats, sessionCount }) {
  const date = new Date().toLocaleDateString("en-UG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const lines = [
    "YOUTH DIGITAL GOVERNANCE BRIEF — SAUTI DIGITAL UGANDA",
    `Generated: ${date}`,
    `Poll respondents: ${pollData.total_respondents} | Sessions: ${sessionCount}`,
    "",
    "KEY YOUTH POSITIONS:",
  ];

  for (const q of pollQuestions) {
    const qResults = pollData.results.filter((r) => r.question_id === q.id);
    const total = qResults.reduce((sum, r) => sum + r.count, 0);
    if (!total) continue;
    lines.push(`\n${q.question}`);
    for (const r of qResults) {
      const pct = Math.round((r.count / total) * 100);
      lines.push(`  - ${r.answer}: ${r.count} (${pct}%)`);
    }
    const majority = getMajority(pollData.results, q.id);
    const rec = majority ? recommendationTemplates[q.id]?.[majority.answer] : null;
    if (rec) lines.push(`  Recommendation: ${rec}`);
  }

  if (quizStats?.summary?.participants) {
    lines.push(
      "",
      `DIGITAL HARM LITERACY: ${quizStats.summary.participants} youth practiced Spot It (${quizStats.summary.avg_score_pct || 0}% avg accuracy).`
    );
  }

  lines.push(
    "",
    "Submitted via Sauti Digital Uganda — Team Digital Voices Uganda",
    "For UIGF 2026 Thematic Input: https://uigf.ug/"
  );

  return lines.join("\n");
}

export async function copyUigfSubmission({ pollData, quizStats, sessionCount }) {
  const text = buildUigfSubmissionText({ pollData, quizStats, sessionCount });
  await navigator.clipboard.writeText(text);
  return text;
}

export function openUigfSubmission() {
  window.open("https://uigf.ug/", "_blank", "noopener,noreferrer");
}
