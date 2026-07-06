import { useState } from "react";

const faqs = [
  {
    q: "What is internet governance?",
    a: "How Uganda decides rules for the internet — AI policy, data protection, cybersecurity, and digital rights. Sauti helps youth learn and contribute.",
  },
  {
    q: "What is TRACE?",
    a: "Trust the source · Red flags · Ask & verify · Consent & data · Evidence. Five steps to spot digital harms before you share or click.",
  },
  {
    q: "What is the Youth Digital Governance Brief?",
    a: "A live summary of youth poll answers and recommendations — downloadable as PDF or copied for UIGF 2026 thematic input.",
  },
  {
    q: "Eddoboozi ly'omuwendo ki? / What is Sauti?",
    a: "Sauti (Swahili) na Eddoboozi (Luganda) bitegeeza 'voice'. Omuvubuka ayiga, alondoola obulabe ku yintaneeti, n'awaayo endowooza ye mu bufuzi bwa yintaneeti.",
  },
];

export default function SautiFaq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="mb-8 w-full text-left">
      <p className="mb-1 text-sm font-medium text-gold">Ask Sauti</p>
      <h3 className="mb-3 text-lg font-bold text-navy">Quick answers — no AI, always accurate</h3>
      <div className="space-y-2">
        {faqs.map((item, i) => (
          <div key={item.q} className="overflow-hidden rounded-xl bg-white shadow-card">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-navy"
            >
              {item.q}
              <span className="text-gold">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <p className="border-t border-navy/5 px-4 py-3 text-sm leading-relaxed text-slate/80">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
