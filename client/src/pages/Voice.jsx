import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
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
        <div className="glass-card-gold p-6">
          <p className="text-3xl">🎙️</p>
          <h2 className="mt-3 text-2xl font-bold text-navy">Thank you</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate/75">
            Your voice is now part of the Youth Digital Governance Brief. Live data that can be
            submitted to UIGF 2026 thematic input.
          </p>
          <button onClick={goToBrief} className="btn-primary mt-6 w-full">
            View Live Brief
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout step={3}>
      <PageHeader
        label="Voice"
        title="Pulse Poll"
        subtitle={`Question ${index + 1} of ${pollQuestions.length}`}
      />

      <div className="content-card mb-6">
        <p className="text-base font-medium leading-relaxed text-navy">{question.question}</p>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => submitAnswer(option)}
            disabled={submitting}
            className={`poll-option ${selected === option ? "poll-option-selected" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
    </Layout>
  );
}
