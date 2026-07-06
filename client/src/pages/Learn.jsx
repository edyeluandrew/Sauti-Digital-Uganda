import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { api } from "../lib/api";
import { learnCards } from "../lib/content/learnCards";
import { getSessionId } from "../lib/session";

function speakCard(card) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const text = `${card.title}. ${card.body}`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-UG";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

export default function Learn() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const card = learnCards[index];
  const isLast = index === learnCards.length - 1;

  async function finish() {
    const sessionId = getSessionId();
    if (sessionId) {
      try {
        await api.updateSession(sessionId, { completed_learn: true });
      } catch {
        /* continue */
      }
    }
    navigate("/spot-it");
  }

  function next() {
    if (isLast) finish();
    else setIndex((i) => i + 1);
  }

  return (
    <Layout step={1}>
      <p className="mb-2 text-sm font-medium text-gold">Learn / Yiga</p>
      <h2 className="mb-1 text-xl font-bold text-navy">{card.title}</h2>
      {card.luganda && <p className="mb-2 text-sm italic text-navy/70">{card.luganda}</p>}
      <p className="mb-4 text-sm text-slate/60">
        Card {index + 1} of {learnCards.length}
      </p>

      <div className="content-card mb-4">
        <p className="mb-4 leading-relaxed">{card.body}</p>
        <div className="rounded-xl bg-cream p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-navy">Uganda example</p>
          <p className="text-sm leading-relaxed text-slate/80">{card.example}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => speakCard(card)}
        className="btn-secondary mb-6 w-full text-sm"
      >
        🔊 Listen to this card (audio)
      </button>

      <div className="flex gap-3">
        {index > 0 && (
          <button onClick={() => setIndex((i) => i - 1)} className="btn-secondary flex-1">
            Back
          </button>
        )}
        <button onClick={next} className="btn-primary flex-1">
          {isLast ? "Test Yourself" : "Next"}
        </button>
      </div>
    </Layout>
  );
}
