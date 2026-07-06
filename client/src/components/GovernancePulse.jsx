import { governancePulseItems, statusStyles } from "../lib/content/governancePulse";

export default function GovernancePulse({ compact = false }) {
  return (
    <section className={compact ? "mb-6" : "mb-8 w-full"}>
      <div className="mb-3 text-left">
        <p className="text-sm font-medium text-gold">Governance Pulse</p>
        <h3 className="text-lg font-bold text-navy">
          {compact ? "Curated governance tracker" : "Curated tracker — Uganda's digital governance"}
        </h3>
        {!compact && (
          <p className="mt-1 text-sm text-slate/70">
            Active forums and consultations (updated by Team Digital Voices) — then add your voice through Sauti.
          </p>
        )}
      </div>

      <div className={`grid gap-3 ${compact ? "" : ""}`}>
        {governancePulseItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-navy/10 bg-white p-4 text-left shadow-card transition hover:border-gold hover:shadow-md"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[item.status]}`}>
                {item.statusLabel}
              </span>
              <span className="text-xs text-slate/50">{item.org}</span>
            </div>

            <p className="mb-1 font-semibold text-navy group-hover:text-navy-light">{item.title}</p>
            <p className={`text-sm leading-relaxed text-slate/70 ${compact ? "line-clamp-2" : ""}`}>
              {item.description}
            </p>
            {item.lastUpdated && (
              <p className="mt-1 text-xs text-slate/40">Updated: {item.lastUpdated}</p>
            )}

            <p className="mt-3 text-sm font-semibold text-gold">
              {item.action} →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
