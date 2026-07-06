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
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div className="hero-card mb-6 lg:mb-0">
          <p className="relative section-label !text-gold/90">Uganda Youth</p>
          <p className="relative mt-1 text-sm font-medium text-gold sm:text-base">
            Sauti · Eddoboozi · Your Voice
          </p>
          <h2 className="relative mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
            Internet Governance Platform
          </h2>
          <p className="relative mt-3 max-w-prose text-sm leading-relaxed text-white/75 sm:text-base">
            Learn, spot digital harms, share your voice, and export a governance brief for UIGF.
          </p>

          {count !== null && (
            <div className="relative mt-5">
              <span className="stat-pill">
                <span className="text-lg font-bold text-gold">{count}</span>
                youth have shared their voice
              </span>
            </div>
          )}
        </div>

        <div className="mb-8 rounded-2xl border border-gold/25 bg-white p-5 shadow-card sm:p-6 lg:mb-0">
          <p className="section-label">Why Sauti is different</p>
          <p className="mt-2 text-sm leading-relaxed text-slate/80 sm:text-base">
            Most teams build awareness apps. Sauti produces a{" "}
            <strong className="font-bold text-navy">live Youth Digital Governance Brief</strong> from real
            youth data, ready for UIGF thematic input.
          </p>
        </div>
      </div>

      <GovernancePulse />
      <UyigfAlignment />

      <section className="mb-8 w-full">
        <p className="section-label">The full loop</p>
        <h3 className="page-title mt-1">Four steps to make your voice count</h3>
        <div className="mt-4 responsive-grid-2">
          {differentiators.map((desc, i) => (
            <div key={desc} className="loop-card h-full">
              <span className="loop-num">{i + 1}</span>
              <p className="pt-1.5 text-sm leading-relaxed text-slate/80 sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SautiFaq />

      <div className="action-bar">
        <button onClick={handleStart} disabled={loading} className="btn-primary">
          {loading ? "Starting..." : "Start"}
        </button>
        <button onClick={() => navigate("/brief")} className="btn-secondary">
          View live brief
        </button>
      </div>
    </Layout>
  );
}
