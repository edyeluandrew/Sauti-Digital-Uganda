import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { api } from "../lib/api";
import { pollQuestions } from "../lib/content/pollQuestions";
import { getSessionId } from "../lib/session";

export default function Voice() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const question = pollQuestions[index];

  async function submitAnswer(answer) {
    setSelected(answer);
    setSubmitting(true);

    const sessionId = getSessionId();
    if (sessionId) {
      try {
        await api.submitPoll({
          session_id: sessionId,
          question_id: question.id,
          answer,
        });
      } catch {
        /* continue */
      }
    }

    setSubmitting(false);

    setTimeout(() => {
      if (index < pollQuestions.length - 1) {
        setIndex((i) => i + 1);
        setSelected(null);
      } else {
        setDone(true);
      }
    }, 400);
  }

  async function goToBrief() {
    const sessionId = getSessionId();
    if (sessionId) {
      try {
        await api.updateSession(sessionId, { completed_voice: true });
      } catch {
        /* continue */
      }
    }
    navigate("/brief");
  }

  if (done) {
    return (
      <Layout step={3}>
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/20 text-4xl">
            🎙️
          </div>
          <h2 className="mb-3 text-2xl font-bold text-navy">Thank you!</h2>
          <p className="mb-8 text-slate/70">
            Your voice is now part of the Youth Digital Governance Brief — live data that can be submitted to UIGF 2026 thematic input.
          </p>
          <button onClick={goToBrief} className="btn-primary w-full">
            View Live Brief
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout step={3}>
      <p className="mb-2 text-sm font-medium text-gold">Voice</p>
      <h2 className="mb-1 text-xl font-bold text-navy">Pulse Poll</h2>
      <p className="mb-6 text-sm text-slate/60">
        Question {index + 1} of {pollQuestions.length}
      </p>

      <div className="content-card mb-6">
        <p className="text-base font-medium leading-relaxed">{question.question}</p>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => submitAnswer(option)}
            disabled={submitting}
            className={`w-full rounded-xl border-2 px-5 py-4 text-left font-semibold transition ${
              selected === option
                ? "border-gold bg-gold/10 text-navy"
                : "border-navy/15 bg-white text-navy hover:border-gold"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </Layout>
  );
}
