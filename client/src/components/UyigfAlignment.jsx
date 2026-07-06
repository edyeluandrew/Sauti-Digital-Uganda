import { uyigfObjectives } from "../lib/content/uyigfAlignment";

export default function UyigfAlignment({ compact = false }) {
  if (compact) {
    return (
      <div className="mb-6 rounded-xl border border-gold/40 bg-gold/5 p-4 text-left">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy">UYIGF 2026 aligned</p>
        <div className="flex flex-wrap gap-2">
          {uyigfObjectives.map((obj) => (
            <span key={obj.id} className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-navy shadow-sm">
              {obj.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="mb-8 w-full text-left">
      <p className="mb-1 text-sm font-medium text-gold">Built for UYIGF 2026</p>
      <h3 className="mb-4 text-lg font-bold text-navy">Aligned with hackathon objectives</h3>
      <div className="grid gap-2">
        {uyigfObjectives.map((obj) => (
          <div key={obj.id} className="rounded-xl bg-white p-3 shadow-card">
            <p className="text-sm font-semibold text-navy">{obj.label}</p>
            <p className="text-xs text-slate/70">{obj.how}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
