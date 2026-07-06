import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GovernancePulse from "../components/GovernancePulse";
import Layout from "../components/Layout";
import SautiFaq from "../components/SautiFaq";
import UyigfAlignment from "../components/UyigfAlignment";
import { differentiators } from "../lib/content/uyigfAlignment";
import { api } from "../lib/api";
import { ensureSession } from "../lib/session";

export default function Landing() {
  const navigate = useNavigate();
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.getSessionCount()
      .then((data) => setCount(data.total_sessions))
      .catch(() => setCount(0));
  }, []);

  async function handleStart() {
    setLoading(true);
    try {
      await ensureSession(api);
      navigate("/learn");
    } catch {
      navigate("/learn");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout showNav={false}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 mt-8 w-full rounded-3xl bg-navy p-8 text-white shadow-card">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gold">Uganda Youth</p>
          <p className="mb-1 text-xs font-medium text-gold">Sauti · Eddoboozi — Your Voice</p>
          <h2 className="mb-4 text-3xl font-bold leading-tight">Internet Governance Platform</h2>
          <p className="text-sm leading-relaxed text-white/80">
            A youth consultation instrument — learn, spot digital harms, share your voice, export a governance brief for UIGF.
          </p>
        </div>

        <div className="mb-6 w-full rounded-xl border border-gold/30 bg-gold/10 p-4 text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy">Why Sauti is different</p>
          <p className="text-sm text-slate/80">
            Most teams will build awareness apps. Sauti produces a <strong className="text-navy">live Youth Digital Governance Brief</strong> — real data youth generate, ready for UIGF thematic input.
          </p>
        </div>

        {count !== null && (
          <p className="mb-6 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-card">
            <span className="text-gold">{count}</span> youth have shared their voice
          </p>
        )}

        <GovernancePulse />

        <UyigfAlignment />

        <div className="mb-4 w-full text-left">
          <p className="mb-2 text-sm font-semibold text-navy">The full loop</p>
        </div>

        <div className="mb-8 grid w-full gap-3 text-left">
          {differentiators.map((desc, i) => (
            <div key={desc} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                {i + 1}
              </span>
              <p className="text-sm text-slate/80">{desc}</p>
            </div>
          ))}
        </div>

        <SautiFaq />

        <button onClick={handleStart} disabled={loading} className="btn-primary w-full text-lg">
          {loading ? "Starting..." : "Start"}
        </button>

        <button onClick={() => navigate("/brief")} className="mt-4 text-sm font-medium text-navy underline">
          View live brief
        </button>
      </div>
    </Layout>
  );
}
