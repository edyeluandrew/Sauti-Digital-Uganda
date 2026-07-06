import { jsPDF } from "jspdf";
import { harmCategories } from "./content/digitalHarms";
import { pollQuestions, recommendationTemplates } from "./content/pollQuestions";
import { spotItScenarios } from "./content/spotItScenarios";

function getMajority(results, questionId) {
  const filtered = results.filter((r) => r.question_id === questionId);
  if (!filtered.length) return null;
  return filtered.reduce((a, b) => (a.count >= b.count ? a : b));
}

export function generateBriefPdf({ pollData, quizStats, sessionCount }) {
  const doc = new jsPDF();
  const date = new Date().toLocaleDateString("en-UG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  doc.setFillColor(11, 37, 69);
  doc.rect(0, 0, 210, 32, "F");
  doc.setTextColor(244, 180, 0);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Youth Digital Governance Brief", 14, 18);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Sauti Digital Uganda | UIGF 2026 Thematic Input Process", 14, 26);

  doc.setTextColor(30, 41, 59);
  doc.setFontSize(11);
  let y = 44;

  doc.setFont("helvetica", "bold");
  doc.text("Executive Summary", 14, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const summary = `This brief summarises live youth consultation data collected via Sauti Digital Uganda on ${date}. Total poll respondents: ${pollData.total_respondents}. Total platform sessions: ${sessionCount}. Sauti combines digital-harm literacy training (TRACE method) with pulse polls on AI governance, data protection, and digital rights — producing evidence suitable for UIGF/UYIGF policy dialogue.`;
  const summaryLines = doc.splitTextToSize(summary, 182);
  doc.text(summaryLines, 14, y);
  y += summaryLines.length * 5 + 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Key Findings — Youth Policy Positions", 14, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);

  for (const q of pollQuestions) {
    const qResults = pollData.results.filter((r) => r.question_id === q.id);
    const total = qResults.reduce((sum, r) => sum + r.count, 0);

    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFont("helvetica", "bold");
    const qLines = doc.splitTextToSize(q.question, 182);
    doc.text(qLines, 14, y);
    y += qLines.length * 4 + 3;
    doc.setFont("helvetica", "normal");

    if (!total) {
      doc.text("No responses yet.", 18, y);
      y += 8;
      continue;
    }

    for (const r of qResults) {
      const pct = Math.round((r.count / total) * 100);
      doc.text(`• ${r.answer}: ${r.count} (${pct}%)`, 18, y);
      y += 5;
    }
    y += 4;
  }

  if (y > 220) {
    doc.addPage();
    y = 20;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Youth Recommendations", 14, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);

  for (const q of pollQuestions) {
    const majority = getMajority(pollData.results, q.id);
    if (!majority) continue;
    const rec = recommendationTemplates[q.id]?.[majority.answer];
    if (!rec) continue;
    const lines = doc.splitTextToSize(`• ${rec}`, 182);
    doc.text(lines, 14, y);
    y += lines.length * 5 + 2;
  }

  if (quizStats?.summary?.participants) {
    y += 6;
    if (y > 240) {
      doc.addPage();
      y = 20;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Digital Harm Literacy (Spot It)", 14, y);
    y += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const literacy = `${quizStats.summary.participants} youth practiced spotting digital harms with ${quizStats.summary.avg_score_pct || 0}% average accuracy using the TRACE method.`;
    doc.text(doc.splitTextToSize(literacy, 182), 14, y);
    y += 12;

    const harmTypes = [...new Set(spotItScenarios.map((s) => s.harmCategory))].filter(
      (h) => h !== "legitimate"
    );
    doc.text("Harm categories covered: " + harmTypes.map((h) => harmCategories[h]?.label).join(", "), 14, y);
    y += 10;
  }

  if (y > 250) {
    doc.addPage();
    y = 20;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Submission Note", 14, y);
  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const note =
    "This document is generated from live youth consultation data and may be submitted as thematic input to the Uganda Internet Governance Forum (UIGF) 2026 or presented as youth evidence at UYIGF. Source: Sauti Digital Uganda — Team Digital Voices Uganda.";
  doc.text(doc.splitTextToSize(note, 182), 14, y);

  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text("Team Digital Voices Uganda | uigf.ug | UYIGF 2026 Hackathon", 14, 285);

  doc.save(`Sauti_Youth_Governance_Brief_${date.replace(/\s/g, "_")}.pdf`);
}
