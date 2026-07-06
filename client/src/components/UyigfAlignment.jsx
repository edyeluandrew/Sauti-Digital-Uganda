import { uyigfObjectives } from "../lib/content/uyigfAlignment";

export default function UyigfAlignment({ compact = false }) {
  if (compact) {
    return (
      <div className="mb-6 rounded-2xl border border-gold/30 bg-gold/5 p-4">
        <p className="section-label">UYIGF 2026</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {uyigfObjectives.map((obj) => (
            <span key={obj.id} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-navy shadow-sm">
              {obj.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="mb-8">
      <p className="section-label">Built for UYIGF 2026</p>
      <h3 className="page-title mt-1">Aligned with hackathon goals</h3>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {uyigfObjectives.map((obj) => (
          <div key={obj.id} className="rounded-2xl border border-navy/8 bg-white p-4 shadow-card">
            <p className="text-sm font-bold text-navy">{obj.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate/65">{obj.how.replace(/—/g, ".")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
