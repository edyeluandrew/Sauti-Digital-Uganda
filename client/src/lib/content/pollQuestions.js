export const pollQuestions = [
  {
    id: "poll_01",
    question: "Should AI-generated political content be clearly labelled before it is shared online?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    id: "poll_02",
    question: "Should mobile apps be required to explain what personal data they collect before you sign up?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    id: "poll_03",
    question: "Should Uganda invest more in teaching digital literacy in schools and universities?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    id: "poll_04",
    question: "Should there be stronger penalties for sharing someone's private photos or videos without consent?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    id: "poll_05",
    question: "Should young people have a formal seat at Uganda's Internet Governance Forum (UYIGF) discussions?",
    options: ["Yes", "No", "Not sure"],
  },
];

export const recommendationTemplates = {
  poll_01: {
    Yes: "Youth recommend mandatory labelling of AI-generated political content.",
    No: "Youth do not currently support mandatory AI content labelling.",
    "Not sure": "Youth are undecided on mandatory AI content labelling — more awareness needed.",
  },
  poll_02: {
    Yes: "Youth support mandatory data transparency before app sign-up.",
    No: "Youth do not prioritise mandatory pre-sign-up data explanations.",
    "Not sure": "Youth are uncertain about mandatory app data transparency requirements.",
  },
  poll_03: {
    Yes: "Youth call for increased investment in school and university digital literacy.",
    No: "Youth do not see increased digital literacy investment as the top priority.",
    "Not sure": "Youth are split on prioritising digital literacy investment in education.",
  },
  poll_04: {
    Yes: "Youth support stronger penalties for non-consensual sharing of private media.",
    No: "Youth do not support stronger penalties for private media sharing at this time.",
    "Not sure": "Youth need more dialogue on penalties for non-consensual media sharing.",
  },
  poll_05: {
    Yes: "Youth advocate for formal youth representation at UYIGF.",
    No: "Youth do not currently advocate for a formal UYIGF youth seat.",
    "Not sure": "Youth are undecided on formal UYIGF youth representation.",
  },
};
