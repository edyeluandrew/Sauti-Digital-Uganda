import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GovernancePulse from "../components/GovernancePulse";
import Layout from "../components/Layout";
import SautiFaq from "../components/SautiFaq";
import UyigfAlignment from "../components/UyigfAlignment";
import { loopSteps } from "../lib/content/uyigfAlignment";
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
      <section className="hero-editorial mb-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="trust-badge">UYIGF 2026</span>
            <span className="trust-badge">Uganda Youth</span>
          </div>

          <p className="relative text-sm font-semibold text-gold sm:text-base">
            Sauti · Eddoboozi · Your Voice
          </p>
          <h2 className="display-title relative mt-2 max-w-3xl">
            Uganda Youth Internet Governance Platform
          </h2>
          <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Learn digital governance, spot harms with TRACE, share your policy views, and export a
            live brief for UIGF.
          </p>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={handleStart} disabled={loading} className="btn-primary">
              {loading ? "Starting..." : "Start the journey"}
            </button>
            <button
              onClick={() => navigate("/brief")}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/25 px-6 py-3.5 font-display text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10 sm:text-base"
            >
              View live brief
            </button>
          </div>

          {count !== null && (
            <div className="relative mt-6">
              <span className="stat-pill">
                <span className="font-display text-lg font-extrabold text-gold">{count}</span>
                youth voices captured
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="section-divider">
        <div className="surface-accent">
          <p className="section-label">Why Sauti is different</p>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate/80 sm:text-base">
            Most teams build awareness apps. Sauti produces a{" "}
            <strong className="font-semibold text-navy">live Youth Digital Governance Brief</strong>{" "}
            from real youth data, ready for UIGF thematic input.
          </p>
        </div>
      </section>

      <section className="section-divider">
        <p className="section-label">How it works</p>
        <h3 className="page-title">Four steps. One voice that counts.</h3>
        <p className="page-subtitle">
          Clear pathways like top civic platforms. Each step builds toward a policy-ready output.
        </p>
        <div className="mt-6 responsive-grid-2">
          {loopSteps.map((step, i) => (
            <div key={step.title} className="step-card h-full">
              <div className="flex items-center gap-3">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="font-display text-base font-bold text-navy">{step.title}</h4>
              </div>
              <p className="text-sm leading-relaxed text-slate/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <GovernancePulse />
      <UyigfAlignment />
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
