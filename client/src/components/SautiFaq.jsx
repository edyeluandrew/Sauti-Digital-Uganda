import { useState } from "react";

const faqs = [
  {
    q: "What is internet governance?",
    a: "How Uganda decides rules for the internet: AI policy, data protection, cybersecurity, and digital rights. Sauti helps youth learn and contribute.",
  },
  {
    q: "What is TRACE?",
    a: "Trust the source. Red flags. Ask and verify. Consent and data. Evidence. Five steps to spot digital harms before you share or click.",
  },
  {
    q: "What is the Youth Digital Governance Brief?",
    a: "A live summary of youth poll answers and recommendations. Download as PDF or copy text for UIGF 2026 thematic input.",
  },
  {
    q: "What is Sauti?",
    a: "Sauti (Swahili) and Eddoboozi (Luganda) both mean voice. Youth learn, spot harms online, and share views on internet governance.",
  },
];

export default function SautiFaq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="mb-8">
      <p className="section-label">Ask Sauti</p>
      <h3 className="page-title mt-1">Quick answers</h3>
      <p className="page-subtitle">Plain language. No AI chatbot. Always accurate.</p>

      <div className="mt-4 space-y-2">
        {faqs.map((item, i) => (
          <div key={item.q} className="overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-card">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-bold text-navy"
            >
              {item.q}
              <span className="shrink-0 text-gold">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <p className="border-t border-navy/5 px-4 py-3 text-sm leading-relaxed text-slate/75">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
