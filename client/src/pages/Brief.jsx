import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GovernancePulse from "../components/GovernancePulse";
import HarmStats from "../components/HarmStats";
import Layout from "../components/Layout";
import SubmitGuide from "../components/SubmitGuide";
import UyigfAlignment from "../components/UyigfAlignment";
import { api } from "../lib/api";
import { generateBriefPdf } from "../lib/briefGenerator";
import { pollQuestions, recommendationTemplates } from "../lib/content/pollQuestions";
import { copyUigfSubmission, openUigfSubmission } from "../lib/uigfExport";

function PollChart({ question, results }) {
  const qResults = results.filter((r) => r.question_id === question.id);
  const total = qResults.reduce((sum, r) => sum + r.count, 0);

  if (!total) {
    return <p className="text-sm text-slate/50">No responses yet</p>;
  }

  return (
    <div className="space-y-2">
      {qResults.map((r) => {
        const pct = Math.round((r.count / total) * 100);
        return (
          <div key={r.answer}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-medium">{r.answer}</span>
              <span className="text-slate/60">
                {r.count} ({pct}%)
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-navy/10">
              <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Brief() {
  const [pollData, setPollData] = useState({ results: [], total_respondents: 0 });
  const [quizStats, setQuizStats] = useState(null);
  const [sessionCount, setSessionCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const [polls, quiz, sessions] = await Promise.all([
        api.getPollAggregate(),
        api.getQuizStats(),
        api.getSessionCount(),
      ]);
      setPollData(polls);
      setQuizStats(quiz);
      setSessionCount(sessions.total_sessions);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 3000);
    return () => clearInterval(interval);
  }, [loadData]);

  function handleDownload() {
    generateBriefPdf({ pollData, quizStats, sessionCount });
  }

  async function handleCopyForUigf() {
    try {
      await copyUigfSubmission({ pollData, quizStats, sessionCount });
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  }

  function getRecommendations() {
    return pollQuestions
      .map((q) => {
        const qResults = pollData.results.filter((r) => r.question_id === q.id);
        if (!qResults.length) return null;
        const top = qResults.reduce((a, b) => (a.count >= b.count ? a : b));
        return recommendationTemplates[q.id]?.[top.answer] || null;
      })
      .filter(Boolean);
  }

  return (
    <Layout step={4}>
      <p className="mb-2 text-sm font-medium text-gold">Brief</p>
      <h2 className="mb-1 text-xl font-bold text-navy">Youth Digital Governance Brief</h2>
      <p className="mb-6 text-sm text-slate/60">
        Live youth input · near real-time (3s) · submittable to UIGF 2026
      </p>

      {loading && <p className="text-center text-slate/60">Loading live data...</p>}

      {error && (
        <div className="mb-4 rounded-xl bg-alert/10 p-4 text-sm text-alert">
          Could not load data: {error}. Make sure the server is running and DATABASE_URL is set.
        </div>
      )}

      {!loading && (
        <>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-navy p-4 text-center text-white">
              <p className="text-2xl font-bold text-gold">{pollData.total_respondents}</p>
              <p className="text-xs text-white/70">Poll respondents</p>
            </div>
            <div className="rounded-xl bg-white p-4 text-center shadow-card">
              <p className="text-2xl font-bold text-navy">{sessionCount}</p>
              <p className="text-xs text-slate/60">Total sessions</p>
            </div>
          </div>

          <div className="mb-6 space-y-4">
            {pollQuestions.map((q) => (
              <div key={q.id} className="content-card">
                <p className="mb-3 text-sm font-semibold text-navy">{q.question}</p>
                <PollChart question={q} results={pollData.results} />
              </div>
            ))}
          </div>

          {getRecommendations().length > 0 && (
            <div className="content-card mb-6">
              <p className="mb-3 font-semibold text-navy">Youth Recommendations</p>
              <ul className="space-y-2">
                {getRecommendations().map((rec) => (
                  <li key={rec} className="flex gap-2 text-sm">
                    <span className="text-gold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <HarmStats quizStats={quizStats} />

          <SubmitGuide />
          <UyigfAlignment compact />

          <GovernancePulse compact />

          <button onClick={handleDownload} className="btn-primary mb-3 w-full">
            Download Youth Digital Governance Brief (PDF)
          </button>

          <button onClick={handleCopyForUigf} className="btn-secondary mb-3 w-full">
            {copied ? "Copied! Paste into UIGF form" : "Copy brief text for UIGF submission"}
          </button>

          <button onClick={openUigfSubmission} className="mb-3 w-full rounded-xl border-2 border-gold bg-gold/10 py-3 text-sm font-semibold text-navy">
            Open UIGF.ug to submit →
          </button>

          <button onClick={loadData} className="btn-secondary mb-3 w-full">
            Refresh Data
          </button>

          <Link to="/" className="block text-center text-sm font-medium text-navy underline">
            Back to home
          </Link>
        </>
      )}
    </Layout>
  );
}
