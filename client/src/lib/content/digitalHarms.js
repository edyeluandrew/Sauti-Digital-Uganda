/**
 * How youth spot digital harms — Sauti's TRACE framework
 * T = Trust the source | R = Red flags | A = Ask & verify | C = Consent & data | E = Evidence
 */

export const harmCategories = {
  misinformation: {
    id: "misinformation",
    label: "Misinformation",
    icon: "📢",
    description: "False or misleading information spread to confuse, panic, or manipulate.",
    ugandaExample: "WhatsApp forwards claiming free government benefits if you share to 10 groups.",
    law: "Computer Misuse Act — sharing harmful false content can have legal consequences.",
  },
  impersonation: {
    id: "impersonation",
    label: "Impersonation & Deepfakes",
    icon: "🎭",
    description: "Fake voices, videos, or documents pretending to be someone official or trusted.",
    ugandaExample: "AI-cloned politician audio or fake Ministry letterhead screenshots.",
    law: "Computer Misuse Act — unauthorised impersonation and cyber fraud.",
  },
  financial_scam: {
    id: "financial_scam",
    label: "Financial Scams",
    icon: "💸",
    description: "Tricks to steal mobile money, bank details, or personal financial data.",
    ugandaExample: "Fake MTN MoMo 'you won 2 million' SMS with suspicious links.",
    law: "Penal Code & Computer Misuse Act — fraud and obtaining money by false pretence.",
  },
  data_exploitation: {
    id: "data_exploitation",
    label: "Data Exploitation",
    icon: "📱",
    description: "Apps or services harvesting more personal data than they need.",
    ugandaExample: "Loan apps demanding SMS, contacts, and call logs for a small loan.",
    law: "Data Protection and Privacy Act (2019) — consent and data minimisation.",
  },
  privacy_violation: {
    id: "privacy_violation",
    label: "Privacy Violation",
    icon: "🔒",
    description: "Sharing private photos, videos, or messages without consent.",
    ugandaExample: "Leaked intimate images circulated in WhatsApp groups or on X.",
    law: "Data Protection Act & Computer Misuse Act — non-consensual sharing is criminal.",
  },
  legitimate: {
    id: "legitimate",
    label: "Legitimate & Safe",
    icon: "✅",
    description: "Verified official communication — useful to recognise what real looks like.",
    ugandaExample: "Verified @UCC_Official notice or NITA-U advisory from a .go.ug domain.",
    law: "Knowing real sources helps you reject fakes faster.",
  },
};

export const traceSteps = [
  {
    letter: "T",
    word: "Trust the source",
    tip: "Who sent this? Verified account? Official .go.ug or telecom channel?",
  },
  {
    letter: "R",
    word: "Red flags",
    tip: "Urgency, 'forward to 10 groups', free money, 'watch before deleted' — pause.",
  },
  {
    letter: "A",
    word: "Ask & verify",
    tip: "Check UCC, NITA, ministry sites, or call official helplines before you act.",
  },
  {
    letter: "C",
    word: "Consent & data",
    tip: "Does this app or person need your SMS, photos, or contacts? Say no if unsure.",
  },
  {
    letter: "E",
    word: "Evidence",
    tip: "Can you find the same claim from 2+ trusted sources? No evidence = don't share.",
  },
];

export const spotItChecklist = traceSteps.map((s) => `${s.letter}. ${s.word}: ${s.tip}`);
