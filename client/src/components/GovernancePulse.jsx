import { governancePulseItems, statusStyles } from "../lib/content/governancePulse";

export default function GovernancePulse({ compact = false }) {
  return (
    <section className={compact ? "mb-6" : "mb-8"}>
      <p className="section-label">Governance Pulse</p>
      <h3 className="page-title mt-1">
        {compact ? "Governance tracker" : "What is happening in Uganda"}
      </h3>
      {!compact && (
        <p className="page-subtitle">
          Active forums and consultations. Follow a process, then add your voice through Sauti.
        </p>
      )}

      <div className="mt-4 space-y-3">
        {governancePulseItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-navy/8 bg-white p-4 shadow-card transition hover:border-gold/50"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${statusStyles[item.status]}`}>
                {item.statusLabel}
              </span>
              <span className="text-xs text-slate/45">{item.org}</span>
            </div>

            <p className="mb-1 font-bold text-navy group-hover:text-navy-light">{item.title}</p>
            <p className={`text-sm leading-relaxed text-slate/65 ${compact ? "line-clamp-2" : ""}`}>
              {item.description}
            </p>
            {item.lastUpdated && (
              <p className="mt-2 text-[11px] text-slate/40">Updated {item.lastUpdated}</p>
            )}

            <p className="mt-3 text-sm font-bold text-gold">{item.action} →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
