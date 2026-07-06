export default function SubmitGuide() {
  return (
    <div className="content-card mb-6 border-l-gold text-left">
      <p className="mb-2 font-semibold text-navy">How this brief reaches policymakers</p>
      <ol className="space-y-2 text-sm text-slate/80">
        <li className="flex gap-2">
          <span className="font-bold text-gold">1.</span>
          Youth complete Voice polls — responses aggregate here in real time.
        </li>
        <li className="flex gap-2">
          <span className="font-bold text-gold">2.</span>
          Download the PDF — it contains live counts and youth recommendations.
        </li>
        <li className="flex gap-2">
          <span className="font-bold text-gold">3.</span>
          Copy brief text or download PDF, then submit via{" "}
          <a
            href="https://uigf.ug/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline"
          >
            UIGF 2026 Thematic Inputs
          </a>{" "}
          or present at UYIGF as youth consultation evidence.
        </li>
      </ol>
    </div>
  );
}
