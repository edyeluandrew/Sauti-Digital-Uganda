import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { api } from "../lib/api";
import { learnCards } from "../lib/content/learnCards";
import { getSessionId } from "../lib/session";

function speakCard(card) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`${card.title}. ${card.body}`);
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

  return (
    <Layout step={1}>
      <PageHeader
        label="Learn / Yiga"
        title={card.title}
        subtitle={`Card ${index + 1} of ${learnCards.length}`}
      />

      {card.luganda && (
        <p className="-mt-4 mb-4 text-sm italic text-navy/60">{card.luganda}</p>
      )}

      <div className="content-card mb-4">
        <p className="leading-relaxed text-slate/85">{card.body}</p>
        <div className="mt-4 rounded-xl bg-cream p-4">
          <p className="section-label !text-navy/50">Uganda example</p>
          <p className="mt-1 text-sm leading-relaxed text-slate/75">{card.example}</p>
        </div>
      </div>

      <button type="button" onClick={() => speakCard(card)} className="btn-secondary mb-6 w-full text-sm">
        Listen to this card
      </button>

      <div className="flex gap-3">
        {index > 0 && (
          <button onClick={() => setIndex((i) => i - 1)} className="btn-secondary flex-1">
            Back
          </button>
        )}
        <button onClick={() => (isLast ? finish() : setIndex((i) => i + 1))} className="btn-primary flex-1">
          {isLast ? "Test Yourself" : "Next"}
        </button>
      </div>
    </Layout>
  );
}
