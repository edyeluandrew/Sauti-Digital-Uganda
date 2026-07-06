export default function SubmitGuide() {
  return (
    <div className="content-card mb-6">
      <p className="section-label">Submit to policymakers</p>
      <p className="mt-1 font-bold text-navy">How this brief reaches UIGF</p>
      <ol className="mt-3 space-y-3 text-sm leading-relaxed text-slate/75">
        <li className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
            1
          </span>
          Youth complete Voice polls. Responses aggregate here in real time.
        </li>
        <li className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
            2
          </span>
          Download the PDF or copy the brief text. Both contain live counts and recommendations.
        </li>
        <li className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
            3
          </span>
          <span>
            Submit via{" "}
            <a
              href="https://uigf.ug/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-navy underline decoration-gold/50"
            >
              UIGF 2026 Thematic Inputs
            </a>{" "}
            or present at UYIGF as youth consultation evidence.
          </span>
        </li>
      </ol>
    </div>
  );
}
