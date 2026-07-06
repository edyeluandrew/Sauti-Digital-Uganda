import { buildHarmStats } from "../lib/uigfExport";

export default function HarmStats({ quizStats }) {
  const items = buildHarmStats(quizStats);

  if (!items.length) {
    return (
      <div className="content-card mb-6">
        <p className="mb-1 font-semibold text-navy">Digital Harm Literacy</p>
        <p className="text-sm text-slate/50">No Spot It data yet. Complete Spot It to see harm breakdown.</p>
      </div>
    );
  }

  return (
    <div className="content-card mb-6">
      <p className="mb-1 font-semibold text-navy">Digital Harm Literacy (Spot It)</p>
      <p className="mb-4 text-xs text-slate/60">
        Live accuracy by harm type · {quizStats?.summary?.participants || 0} youth practiced
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-medium">
                {item.icon} {item.label}
              </span>
              <span className="text-slate/60">
                {item.accuracy}% correct ({item.attempts} attempts)
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full border border-white/40 bg-white/30 backdrop-blur-sm">
              <div className="h-full rounded-full bg-navy transition-all" style={{ width: `${item.accuracy}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
