# Sauti — Judge Q&A Playbook
**Team Digital Voices Uganda | UYIGF 2026 Hackathon**

Use this to answer judges, pre-screening, and registration. One voice, one story.

---

## THE ONE LINE (say this everywhere)

> **"We built a youth consultation instrument for Uganda's internet governance — not another awareness app. Sauti trains youth to spot digital harms, captures their policy views, and exports a live brief submittable to UIGF."**

---

## THE WINNING STORY (60 seconds)

| Beat | What you say |
|------|----------------|
| **Problem** | Youth drive Uganda's digital life but are excluded from internet governance policy. |
| **Insight** | Awareness apps don't produce governance evidence policymakers can use. |
| **Solution** | Sauti = Learn → Spot harms (TRACE) → Voice → Live Brief → PDF for UIGF. |
| **Proof** | *[Live demo]* Teammate answers poll → Brief updates → download PDF. |
| **Close** | Your voice. Uganda's digital future. Team Digital Voices Uganda. |

---

## CORE POSITIONING (how we beat the crowd)

| Most teams submit | We submit |
|-------------------|-----------|
| Cards + quiz | Cards + **TRACE harm training** |
| Chatbot | **Live aggregated brief** |
| Static / mocked data | **Real Neon DB + PDF from live data** |
| Generic digital rights | **Uganda scenarios** (UCC, MoMo, loan apps, WhatsApp) |
| "Raises awareness" | **"Submittable to UIGF 2026 thematic input"** |

**Meta-insight to win the room:**
> *"Internet governance fails when youth are informed but never heard. Sauti is the hearing mechanism."*

---

# JUDGE-BY-JUDGE: QUESTIONS THEY ASK → OUR ANSWERS

---

## 1. ISOC Uganda — Internet Governance Expert

**They care about:** IGF process, multistakeholder dialogue, youth as stakeholders not spectators.

| Likely question | Our answer |
|-----------------|------------|
| What is internet governance in your project? | It's how Uganda decides AI policy, data protection, cybersecurity, and digital rights — and whether youth have a seat at that table. Sauti connects youth learning to live UIGF consultation. |
| How is this different from digital literacy? | Literacy teaches individuals. Sauti produces **collective youth input** — a governance brief that enters the IGF process. |
| Does this connect to UIGF? | Yes. Governance Pulse tracks active UIGF/UYIGF processes. The Brief PDF is framed for **UIGF 2026 Thematic Input** submission. |
| Could this scale regionally? | Yes. TRACE + pulse polls + brief export is replicable for Africa IGF and East Africa Youth IGF — Uganda-first, region-ready. |

**Positioning line:**
> *"Sauti is a lightweight youth consultation layer for Uganda's IGF ecosystem — instrumenting participation, not replacing ISOC's work."*

**Demo move:** Brief page → Submit Guide → Download PDF → *"This is how youth become stakeholders, not spectators."*

---

## 2. RENU — University & Research

**They care about:** Real tech, deployability, methodological rigor.

| Likely question | Our answer |
|-----------------|------------|
| Is this real or a mockup? | Real. React frontend, Express API, Neon Postgres. Every poll and quiz answer is stored and aggregated live. |
| How is the brief generated? | Live SQL aggregation of poll responses + template-based recommendations from majority answers. No LLM — deterministic and demo-safe. |
| Can universities use this? | Yes. Deployable in computer labs, law clinics, or UgSIG cohorts. TRACE is a teachable framework. |
| What's your data model? | Three tables: sessions, quiz_responses, poll_responses. Anonymous sessions, deduplicated polls per user. |

**Positioning line:**
> *"Sauti is deployable civic-tech infrastructure — any campus team can host it. The brief comes from live queries, not hallucinations."*

**Demo move:** Two phones answer same poll → refresh Brief → counts change. *"That's live data."*

---

## 3. FemTech Law Initiative

**They care about:** Consent, privacy, gendered harms, Ugandan law.

| Likely question | Our answer |
|-----------------|------------|
| How do you address women's digital safety? | Spot It includes **privacy violation** (leaked photos) and **data exploitation** (loan apps harvesting SMS/contacts). Voice polls capture views on non-consensual sharing penalties. |
| Which laws do you reference? | **Data Protection and Privacy Act (2019)** and **Computer Misuse Act** — named in harm feedback after each scenario. |
| Is TRACE relevant to consent? | Yes. **C = Consent & data** — does this app or person need your photos, SMS, or contacts? |
| Why not a chatbot for legal advice? | We train **recognition and policy voice**, not automated legal advice. The output is youth positions for governance dialogue. |

**Positioning line:**
> *"Digital governance isn't abstract for young women — it's leaked photos and coercive data collection. Sauti grounds that in Ugandan law and captures youth policy views on enforcement."*

**Demo move:** spot_09 (leaked photos) or spot_04 (loan app) → name the law → poll on privacy penalties.

---

## 4. Ministry of ICT — National Digital Governance

**They care about:** UIGF 2026 theme, national priorities, policy relevance.

| Likely question | Our answer |
|-----------------|------------|
| How does this support "Building Uganda's Digital Governance Together"? | Sauti operationalises **youth participation** in that goal — structured input on AI, data protection, and digital literacy investment. |
| What policy output do you produce? | A **Youth Digital Governance Brief** — aggregated poll results + recommendations, submittable to UIGF thematic input. |
| Is this only for students? | No. Any Ugandan youth under 30 — students, young professionals, community innovators. |
| What happens after the hackathon? | Reusable every UYIGF cycle — schools, hubs, and annual youth forums can run fresh consultations. |

**Positioning line:**
> *"Sauti produces structured youth positions ministries can reference — the same direction as UIGF Week and UYIGF."*

**Demo move:** Governance Pulse (UIGF 2026) → Voice poll on AI labelling → Brief recommendation.

---

## 5. UCC — Telecom & Consumer Protection

**They care about:** Verifying official vs fake communications.

| Likely question | Our answer |
|-----------------|------------|
| How do youth spot fake government/telecom messages? | TRACE **T = Trust the source**. Scenarios include fake SIM re-registration sites vs real **@UCC_Official** notices. |
| What about mobile money scams? | spot_06 — fake MoMo SMS with random sender and external links. Red flags: urgency, unofficial sender, click-to-claim. |
| Do you teach what's real? | Yes. Two **legitimate** scenarios (UCC, NITA-U) so youth learn what official communication looks like. |

**Positioning line:**
> *"Before youth govern the internet, they must discern UCC and licensed providers from impersonation. Sauti teaches both sides."*

**Demo move:** spot_05 (real UCC) vs spot_02 (fake govt directive) — compare red flags.

---

## 6. AI Governance Expert (2026 centre theme)

**They care about:** Governing AI, not just using AI.

| Likely question | Our answer |
|-----------------|------------|
| Where is AI in your solution? | **Applied AI literacy** — spotting deepfakes, cloned audio, manipulated video. Plus a poll on **labelling AI-generated political content**. |
| Why no AI chatbot? | Intentional. Chatbots explain; they don't produce **governance evidence**. We chose verification skill + policy output over AI gimmicks. |
| How is this AI governance? | Youth learn to navigate an AI-saturated info environment AND state their views on how AI content should be regulated. |

**Positioning line:**
> *"UYIGF 2026 centres AI — we focused on what youth actually face: cloned politician audio. Sauti trains verification and captures views on AI regulation."*

**Demo move:** spot_03 (deepfake audio) → Voice poll on AI content labelling.

---

## 7. Hackathon Operations / Practical Judge

**They care about:** Does it work on stage?

| Likely question | Our answer |
|-----------------|------------|
| Show us the full flow. | Start → Learn (skip or 1 card) → Spot It (1 scenario) → Voice → Brief → PDF. Under 3 minutes. |
| What if the internet fails? | Core flow works on deployed URL; we have a screen recording backup. |
| Is data mocked? | No. Zero responses = zero on the brief. Live answers = live charts. |

**Positioning line:**
> *"Every button works. Every answer hits the database. The PDF reflects what you just submitted."*

**Demo move:** Full loop on phone. Backup video ready.

---

## 8. META-JUDGE — What actually decides the winner

| Signal | Our answer in one phrase |
|--------|--------------------------|
| Problem-solution fit | Closes IG awareness gap + engagement + localized content — all three. |
| Differentiation | Only team with **live brief export** for UIGF. |
| Tangible output | PDF with real counts and recommendations. |
| Uganda specificity | UCC, NITA, MoMo, WhatsApp, loan apps, DPPA. |
| Live proof | Multi-phone poll demo. |
| UI | Functional mobile-first — polish is Phase 2. |

---

# REGISTRATION FORM — COPY/PASTE

**Team name:** Team Digital Voices Uganda

**Project name:** Sauti — Uganda Youth Internet Governance Platform

**200-word summary:** See `HACKATHON_WIN_GUIDE.md` or `uyigfAlignment.js` → `registration.summary200`

---

# DEMO SCRIPT (DO NOT CHANGE ORDER)

```
1. Landing (15s)  — counter + "consultation instrument, not awareness app"
2. Spot It (45s) — 1 scenario, name harm + law
3. Voice (30s)   — teammate answers on second phone
4. Brief (90s)   — refresh → charts moved → Submit Guide → download PDF
```

**Spend 60% of time on Brief.**

---

# TEAM ROLES (if 3+ members)

| Role | Job |
|------|-----|
| **Presenter** | Pitch + Spot It + Brief |
| **Live proofer** | Answers poll on phone when presenter says "watch" |
| **Backup** | Screen recording, answers judge Q&A from this doc |

---

# IF THEY PUSH BACK

| Pushback | Response |
|----------|----------|
| "This is just a quiz app." | "Quizzes don't export policy briefs. Watch the Brief update live." |
| "Where's the AI?" | "AI governance means governing AI harms — deepfakes, cloned audio, labelling policy. We train that." |
| "Why no Luganda?" | "Phase 2. We prioritised governance output and demo reliability for this prototype." |
| "How is this new?" | "U-Report polls. CIPESA trains fakes. Nobody combines both into a UIGF-submittable brief." |
| "UI is basic." | "We shipped a full loop with real data in days. The innovation is the consultation instrument." |

---

# TONIGHT — FINAL CHECKLIST

- [ ] Register at [uigf.ug](https://uigf.ug/) before **7 July 2026**
- [ ] Attach team PDF + `Sauti_Digital_Uganda_Project_Spec.pdf`
- [ ] Screen-record full demo on phone
- [ ] Rehearse Brief demo with 2 phones
- [ ] Each member reads **their judge section** above once

---

**You're positioned. Go register. Go win.**

*Team Digital Voices Uganda — Sauti Digital Uganda*
