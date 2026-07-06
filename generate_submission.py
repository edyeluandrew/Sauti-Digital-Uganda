"""
Generate hackathon submission PDFs for UYIGF 2026.
Run: python generate_submission.py
"""

from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

NAVY = colors.HexColor("#0B2545")
GOLD = colors.HexColor("#F4B400")
SLATE = colors.HexColor("#1E293B")

PROJECT_PDF = "Sauti_Project_Submission_3page.pdf"
TEAM_PDF = "Sauti_Team_Members_List.pdf"

LIVE_APP = "https://sauti-digital-uganda.vercel.app"
LIVE_API = "https://sauti-digital-uganda.onrender.com"
GITHUB = "https://github.com/edyeluandrew/Sauti-Digital-Uganda"


def styles():
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "title", parent=base["Title"], fontSize=20, textColor=NAVY,
            spaceAfter=6, fontName="Helvetica-Bold",
        ),
        "subtitle": ParagraphStyle(
            "subtitle", parent=base["Normal"], fontSize=11, textColor=GOLD,
            spaceAfter=14, fontName="Helvetica-Bold",
        ),
        "h2": ParagraphStyle(
            "h2", parent=base["Heading2"], fontSize=12, textColor=NAVY,
            spaceBefore=12, spaceAfter=6, fontName="Helvetica-Bold",
        ),
        "body": ParagraphStyle(
            "body", parent=base["Normal"], fontSize=10, textColor=SLATE,
            leading=14, spaceAfter=8, alignment=TA_JUSTIFY,
        ),
        "small": ParagraphStyle(
            "small", parent=base["Normal"], fontSize=9, textColor=SLATE,
            leading=12, spaceAfter=4,
        ),
    }


def build_project_pdf():
    s = styles()
    story = []
    doc = SimpleDocTemplate(
        PROJECT_PDF, pagesize=A4,
        rightMargin=2 * cm, leftMargin=2 * cm,
        topMargin=2 * cm, bottomMargin=2 * cm,
    )

    story.append(Paragraph("Sauti — Uganda Youth Internet Governance Platform", s["title"]))
    story.append(Paragraph("Team Digital Voices Uganda · UYIGF 2026 Hackathon Submission", s["subtitle"]))
    story.append(Paragraph(f"Live prototype: {LIVE_APP}", s["small"]))
    story.append(Spacer(1, 10))

    # --- Page 1 content ---
    story.append(Paragraph("1. The problem we are solving", s["h2"]))
    story.append(Paragraph(
        "Most young Ugandans live online — WhatsApp, TikTok, mobile money, loan apps — but very few "
        "know how internet governance actually affects them. Who decides AI rules? What does the Data "
        "Protection Act mean when an app asks for your SMS? When a fake government notice goes viral, "
        "how do you know what to trust?",
        s["body"],
    ))
    story.append(Paragraph(
        "The gap is not just awareness. Youth are rarely heard when policy is written. Forums like UYIGF "
        "and UIGF exist, but there is no simple way for a student in Kampala (or anywhere else) to learn, "
        "practice spotting harms, and have their views collected into something a policymaker can actually use.",
        s["body"],
    ))
    story.append(Paragraph(
        "We built Sauti — Swahili for \"voice\" — to close that gap. Not another quiz app that stops "
        "at \"well done.\" A tool that teaches, tests real judgment, and turns youth input into a live "
        "governance brief.",
        s["body"],
    ))

    story.append(Paragraph("2. What Sauti does", s["h2"]))
    story.append(Paragraph(
        "Sauti is a mobile-first web platform with four connected steps:",
        s["body"],
    ))
    for item in [
        "<b>Learn</b> — Short cards on AI governance, the Data Protection Act, the Computer Misuse Act, cybersecurity, and digital rights. Each card uses a real Uganda example, with Luganda subtitles and optional audio read-aloud.",
        "<b>Spot It</b> — Youth judge realistic scenarios: WhatsApp forwards, fake MoMo SMS, AI-cloned politician audio, loan apps that harvest contacts, and leaked private photos. We teach the TRACE method (Trust the source, Red flags, Ask &amp; verify, Consent &amp; data, Evidence) so spotting harms becomes a habit, not trivia.",
        "<b>Voice</b> — Five quick pulse polls on live issues: AI content labelling, app data transparency, digital literacy in schools, privacy penalties, and youth representation at UYIGF.",
        "<b>Brief</b> — All poll answers aggregate in real time. Anyone can view live charts and download a Youth Digital Governance Brief as PDF, or copy formatted text for UIGF 2026 thematic input.",
    ]:
        story.append(Paragraph(f"• {item}", s["body"]))

    story.append(Paragraph("3. Why we think this is different", s["h2"]))
    story.append(Paragraph(
        "Honest answer: many hackathon teams will build \"learn + quiz + chatbot.\" We chose a harder "
        "problem — producing output. When a young person answers a poll on Sauti, their response is stored "
        "in our database, reflected on the Brief screen within seconds, and included in the downloadable PDF. "
        "That is real consultation data, not a slideshow.",
        s["body"],
    ))
    story.append(Paragraph(
        "We also added Governance Pulse: a curated tracker pointing youth to active UIGF processes, "
        "UYIGF events, and official UCC channels — so they know where governance is happening, not just "
        "what it is.",
        s["body"],
    ))

    story.append(Paragraph("4. Technology (kept simple on purpose)", s["h2"]))
    story.append(Paragraph(
        f"We used React and Tailwind for the frontend (hosted on Vercel), Node/Express for the API "
        f"(hosted on Render), and Neon Postgres for the database. No chatbot API on stage — we did not "
        f"want something that could fail or hallucinate during a live demo. The brief is generated from "
        f"live SQL queries and simple template logic. Code is open at {GITHUB}.",
        s["body"],
    ))

    story.append(Paragraph("5. Who this is for — and what comes next", s["h2"]))
    story.append(Paragraph(
        "Sauti is for Ugandan youth under 30: students, young professionals, school clubs, and anyone "
        "who wants to move from scrolling to contributing. If we win incubation support, we would run "
        "Sauti sessions before each UYIGF cycle — same platform, fresh polls, new brief each year.",
        s["body"],
    ))
    story.append(Paragraph(
        "We are proud that this is built by youth, for youth, with Uganda at the centre — not generic "
        "\"digital citizenship\" content copied from elsewhere. Sauti is our voice. We hope it helps "
        "others find theirs.",
        s["body"],
    ))

    story.append(Spacer(1, 16))
    story.append(Paragraph(
        f"<b>Team:</b> Team Digital Voices Uganda<br/>"
        f"<b>Demo:</b> {LIVE_APP}<br/>"
        f"<b>API health:</b> {LIVE_API}/api/health",
        s["small"],
    ))

    doc.build(story)
    print(f"Created: {PROJECT_PDF}")


def build_team_pdf():
    doc = SimpleDocTemplate(
        TEAM_PDF, pagesize=A4,
        rightMargin=2 * cm, leftMargin=2 * cm,
        topMargin=2 * cm, bottomMargin=2 * cm,
    )
    s = styles()
    story = []

    story.append(Paragraph("UYIGF 2026 Hackathon — Team Members List", s["title"]))
    story.append(Paragraph("Team Digital Voices Uganda · Sauti Digital Uganda", s["subtitle"]))
    story.append(Paragraph(
        "Fill in your real details below before uploading. All members must be under 30 years old.",
        s["body"],
    ))
    story.append(Spacer(1, 12))

    headers = ["#", "Full name", "Age", "Gender", "Phone", "Email", "Institution / Organisation"]
    rows = [
        ["1", "[Team Leader name]", "[age]", "[M/F]", "[phone]", "edyeluandrew1@gmail.com", "[your university / org]"],
        ["2", "[Member 2 name]", "[age]", "[M/F]", "[phone]", "[email]", "[institution]"],
        ["3", "[Member 3 name]", "[age]", "[M/F]", "[phone]", "[email]", "[institution]"],
        ["4", "[Add if needed]", "", "", "", "", ""],
    ]

    data = [headers] + rows
    table = Table(data, colWidths=[0.6 * cm, 3.2 * cm, 1.2 * cm, 1.5 * cm, 2.5 * cm, 3.5 * cm, 3.5 * cm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 7),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.lightgrey),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(table)

    story.append(Spacer(1, 20))
    story.append(Paragraph("<b>Team leader (primary contact)</b>", s["h2"]))
    story.append(Paragraph(
        "Name: [Your full name]<br/>"
        "Role: Team Leader &amp; Coordinator<br/>"
        "Email: edyeluandrew1@gmail.com<br/>"
        "Phone: [Your phone number]<br/>"
        "Location: [District, Uganda — e.g. Kampala]",
        s["body"],
    ))

    story.append(Paragraph(
        "<i>Tip: Export this page to PDF after filling in names, or retype the table in Word/Google Docs "
        "if you prefer. Keep file size under 1 MB for the upload form.</i>",
        s["small"],
    ))

    doc.build(story)
    print(f"Created: {TEAM_PDF}")


if __name__ == "__main__":
    build_project_pdf()
    build_team_pdf()
