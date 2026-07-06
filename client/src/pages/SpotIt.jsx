import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { api } from "../lib/api";
import { harmCategories, spotItChecklist, traceSteps } from "../lib/content/digitalHarms";
import { spotItScenarios } from "../lib/content/spotItScenarios";
import { getSessionId } from "../lib/session";

const typeStyles = {
  whatsapp: "bg-[#25D366]/10 border-[#25D366]",
  govt: "bg-navy/5 border-navy",
  social: "bg-blue-50 border-blue-400",
  app: "bg-purple-50 border-purple-400",
  sms: "bg-yellow-50 border-yellow-500",
  email: "bg-slate-100 border-slate-400",
};

export default function SpotIt() {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [finished, setFinished] = useState(false);
  const scenario = spotItScenarios[index];
  const harm = harmCategories[scenario.harmCategory];

  async function handleAnswer(answer) {
    const isCorrect = answer === scenario.correctAnswer;
    if (isCorrect) setScore((s) => s + 1);

    setFeedback({ isCorrect, explanation: scenario.explanation });

    const sessionId = getSessionId();
    if (sessionId) {
      try {
        await api.submitQuiz({
          session_id: sessionId,
          scenario_id: scenario.id,
          user_answer: answer,
          is_correct: isCorrect,
        });
      } catch {
        /* continue */
      }
    }
  }

  function next() {
    if (index < spotItScenarios.length - 1) {
      setIndex((i) => i + 1);
      setFeedback(null);
    } else {
      setFinished(true);
    }
  }

  async function goToVoice() {
    const sessionId = getSessionId();
    if (sessionId) {
      try {
        await api.updateSession(sessionId, { completed_spot_it: true });
      } catch {
        /* continue */
      }
    }
    navigate("/voice");
  }

  if (showIntro) {
    return (
      <Layout step={2}>
        <PageHeader
          label="Spot It"
          title="How youth spot digital harms"
          subtitle="Scams, fake news, data theft, and privacy violations. Use TRACE before you trust, share, or click."
        />

        <div className="mb-6 space-y-2">
          {traceSteps.map((step) => (
            <div key={step.letter} className="loop-card !p-3">
              <span className="loop-num">{step.letter}</span>
              <div>
                <p className="text-sm font-bold text-navy">{step.word}</p>
                <p className="text-xs leading-relaxed text-slate/65">{step.tip}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => setShowIntro(false)} className="btn-primary w-full">
          Start spotting harms
        </button>
      </Layout>
    );
  }

  if (finished) {
    return (
      <Layout step={2}>
        <PageHeader label="Spot It" title="Your results" subtitle="Digital harms spotted correctly" />
        <p className="-mt-4 mb-6 text-4xl font-black text-navy">
          {score}<span className="text-xl font-bold text-slate/40">/{spotItScenarios.length}</span>
        </p>

        <div className="content-card mb-4">
            <p className="mb-3 font-semibold text-navy">Harm types you practiced:</p>
            <div className="flex flex-wrap gap-2">
              {[...new Set(spotItScenarios.map((s) => s.harmCategory))]
                .filter((id) => id !== "legitimate")
                .map((id) => (
                  <span key={id} className="rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
                    {harmCategories[id].icon} {harmCategories[id].label}
                  </span>
                ))}
            </div>
          </div>

        <div className="content-card mb-6">
          <p className="mb-3 font-bold text-navy">Your TRACE checklist</p>
            <ul className="space-y-2">
              {spotItChecklist.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
        </div>

        <button onClick={goToVoice} className="btn-primary w-full">
          Share Your Voice
        </button>
      </Layout>
    );
  }

  return (
    <Layout step={2}>
      <PageHeader
        label="Spot It"
        title="Spot the digital harm"
        subtitle={`Scenario ${index + 1} of ${spotItScenarios.length} · Score ${score}`}
      />

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-gold">
          {harm.icon} {harm.label}
        </span>
        {scenario.redFlags?.map((flag) => (
          <span key={flag} className="rounded-full bg-alert/10 px-2.5 py-0.5 text-xs font-medium text-alert">
            {flag}
          </span>
        ))}
      </div>

      <div className={`mb-6 rounded-2xl border-l-4 bg-white p-5 shadow-card ${typeStyles[scenario.type]}`}>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy/60">{scenario.label}</p>
        <p className="whitespace-pre-line text-sm leading-relaxed">{scenario.content}</p>
      </div>

      <p className="mb-4 text-sm font-medium text-slate/60">Is this safe to trust and share?</p>

      {!feedback ? (
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => handleAnswer("real")} className="btn-secondary">
            Safe / Real
          </button>
          <button
            onClick={() => handleAnswer("fake")}
            className="rounded-xl bg-alert px-6 py-3 font-semibold text-white transition hover:brightness-110"
          >
            Harmful / Fake
          </button>
        </div>
      ) : (
        <div>
          <div
            className={`mb-4 rounded-xl p-4 ${feedback.isCorrect ? "bg-success/10 text-success" : "bg-alert/10 text-alert"}`}
          >
            <p className="mb-1 font-bold">{feedback.isCorrect ? "Correct!" : "Not quite"}</p>
            <p className="text-sm text-slate">{feedback.explanation}</p>
            {harm.law && scenario.harmCategory !== "legitimate" && (
              <p className="mt-2 text-xs text-slate/70">
                <strong>Uganda context:</strong> {harm.law}
              </p>
            )}
          </div>
          <button onClick={next} className="btn-primary w-full">
            {index < spotItScenarios.length - 1 ? "Next Scenario" : "See Results"}
          </button>
        </div>
      )}
    </Layout>
  );
}
