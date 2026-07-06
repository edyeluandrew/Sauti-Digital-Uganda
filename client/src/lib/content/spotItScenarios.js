export const spotItScenarios = [
  {
    id: "spot_01",
    type: "whatsapp",
    label: "WhatsApp Forward",
    harmCategory: "misinformation",
    redFlags: ["Urgency", "Forward-to-unlock", "Shortened link"],
    content:
      "URGENT: Ministry of Health announces FREE COVID booster for all Ugandans. Forward to 10 groups to activate your voucher. Link: bit.ly/ug-health-boost",
    correctAnswer: "fake",
    explanation:
      "Harm: Misinformation. Real government health notices do not ask you to forward messages to unlock benefits. The shortened link and urgency are classic manipulation red flags.",
  },
  {
    id: "spot_02",
    type: "govt",
    label: "Government Directive",
    harmCategory: "impersonation",
    redFlags: ["Unofficial domain (.com not .go.ug)", "Artificial deadline", "No UCC/telecom channel"],
    content:
      "Republic of Uganda — Ministry of Finance. All citizens must register SIM cards again by Friday or face disconnection. Register at sim-reregister-ug.com",
    correctAnswer: "fake",
    explanation:
      "Harm: Impersonation. Official directives come through UCC, telecom providers, or verified .go.ug domains — not random .com sites.",
  },
  {
    id: "spot_03",
    type: "social",
    label: "Social Media Post",
    harmCategory: "impersonation",
    redFlags: ["Sensational audio", "No original source", "AI voice cloning risk"],
    content:
      "BREAKING: MP recorded saying he will shut down all universities next term — viral audio on X and TikTok. Comments say 'sounds exactly like him.'",
    correctAnswer: "fake",
    explanation:
      "Harm: Deepfake / impersonation. AI voice cloning can replicate speech patterns. Without verified source, treat sensational audio as unverified — don't share.",
  },
  {
    id: "spot_04",
    type: "app",
    label: "Loan App Permissions",
    harmCategory: "data_exploitation",
    redFlags: ["Excessive permissions", "SMS + contacts for small loan", "Data minimisation breach"],
    content:
      "QuickCash UG wants access to: Contacts, SMS, Call logs, Location, Camera. Required to approve your 50,000 UGX loan.",
    correctAnswer: "fake",
    explanation:
      "Harm: Data exploitation. Under Uganda's Data Protection Act, apps should only request necessary data. Excessive permissions often mean your data is being harvested or sold.",
  },
  {
    id: "spot_05",
    type: "social",
    label: "Verified Official Account",
    harmCategory: "legitimate",
    redFlags: [],
    content:
      "@UCC_Official (verified): Reminder: SIM card registration remains mandatory under the Registration of Persons Act. Update details at your licensed telecom service centre.",
    correctAnswer: "real",
    explanation:
      "Legitimate. Verified official account, no urgency tricks, no suspicious links. Learning what real looks like helps you spot fakes faster.",
  },
  {
    id: "spot_06",
    type: "sms",
    label: "Mobile Money SMS",
    harmCategory: "financial_scam",
    redFlags: ["Random sender number", "Too-good-to-be-true amount", "External link"],
    content:
      "MTN MoMo: You have received UGX 2,000,000. Claim at http://mtn-momo-reward.co.ug before expiry. (Sender: random number, not MTN shortcode)",
    correctAnswer: "fake",
    explanation:
      "Harm: Financial scam. MTN does not notify winnings via random numbers with external links. Real MoMo alerts use the official app or recognised shortcodes.",
  },
  {
    id: "spot_07",
    type: "social",
    label: "TikTok Thumbnail",
    harmCategory: "misinformation",
    redFlags: ["Watch before deleted", "Unverified account", "No official attribution"],
    content:
      "President announces free internet for all students — watch before deleted!!! Unverified account, no news outlet attribution, exaggerated facial movements.",
    correctAnswer: "fake",
    explanation:
      "Harm: Misinformation / manipulated media. 'Watch before deleted' is a manipulation tactic. Major policy news comes through official government channels.",
  },
  {
    id: "spot_08",
    type: "email",
    label: "Cybersecurity Advisory",
    harmCategory: "legitimate",
    redFlags: [],
    content:
      "From security@nita.go.ug: NITA-U Cybersecurity Advisory — Phishing campaign targeting government email accounts. Do not click links in unsolicited emails. Report to helpdesk@nita.go.ug.",
    correctAnswer: "real",
    explanation:
      "Legitimate. Real .go.ug domain, no password or money request, informational tone, verifiable contact. This is how official cyber advisories look.",
  },
  {
    id: "spot_09",
    type: "whatsapp",
    label: "Private Photos Leak",
    harmCategory: "privacy_violation",
    redFlags: ["Non-consensual sharing", "Group forwarding", "No victim consent"],
    content:
      "WhatsApp group message: 'Leaked photos of [classmate] — forward fast before admin deletes!!!' Shared without the person's permission. Already spreading across 3 school groups.",
    correctAnswer: "fake",
    explanation:
      "Harm: Privacy violation. Sharing private photos without consent is a digital harm — and illegal under Uganda's Computer Misuse Act and Data Protection Act. Do not forward; report to admin or 116 child helpline.",
  },
];

export { spotItChecklist } from "./digitalHarms.js";
