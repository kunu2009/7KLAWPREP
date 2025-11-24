# 7K Law Prep: The "AIR 1" Master Blueprint

> **North Star:** Deliver *one* app that can take a first-time aspirant from zero knowledge to AIR 1 in 12 months—without needing a coaching centre, PDF packs, or YouTube playlists.

---

## 1. Mission, Vision & Success Criteria

| Lens | Statement | How We Measure |
| --- | --- | --- |
| **Mission** | Democratize elite CLAT preparation by combining best-in-class legal content, adaptive AI coaching, and wellness support in one immersive product. | 50K Monthly Active Learners with NPS > 50. |
| **Vision** | Every serious law aspirant opens 7K Law Prep before touching books, notes, or social media. | 30% of CLAT/AILET rank-holders cite 7K in success stories. |
| **Definition of "AIR 1 Ready"** | Student consistently scores 105+ in mocks, knows blind spots, and has exam-mindset tools. | 10K students complete the "AIR 1 Sprint" pathway yearly. |

---

## 2. Market Intelligence Snapshot (Nov 2025)

- **TAM (India):** ~180K CLAT + 110K AILET/SLAT + 400K state law aspirants = 690K yearly serious users.
- **Serviceable Market:** Smartphone-first students in Tier 1-3 cities willing to pay ₹6K–₹18K annually for structured prep (~260K users).
- **Trendlines:**
  - *Hybrid coaching fatigue:* students prefer self-paced digital but demand accountability.
  - *UPI-based micro-payments:* subscription + top-up models now viable.
  - *AI acceptance:* Gemini/GPT use already mainstream for doubt solving; trust needs to be built via transparency and citations.

---

## 3. Competitor Teardown

| Player | USP | Gaps We Exploit |
| --- | --- | --- |
| **LegalEdge Compass** | Deep mock-test ecosystem, faculty credibility, offline centres. | Static apps, limited personalization, heavy reliance on batch timings, expensive (₹25K+). |
| **TopRankers (Quest)** | Video-first pedagogy, influencer-led marketing. | Video bingeing ≠ active practice, poor offline support, minimal analytics. |
| **Testbook / Oliveboard** | Massive question bank, discounted pricing. | Generic legal content, no storytelling, low trust for premium aspirants. |
| **LawSikho / PracticeMock** | Skill-based law upskilling; question packs. | No all-in-one journey, lacks CBSE/ISC relevance, zero gamification. |
| **Smartkeeda** | "Smart Analytics" & suggestion mode. | UI is utilitarian, lacks community/coaching feel. |
| **Qudoo** | Gamified quiz battles. | Lacks depth for full prep; good for revision only. |
| **EduRev** | "Personal Teacher" & structured courses. | Can feel like a content library; less guided. |
| **Telegram/YouTube ecosystems** | Free, community-driven, instant updates. | Noise, misinformation, burnout, inconsistent quality, no accountability. |

**Strategic Edge:** Build *depth* (quality content like LegalEdge) + *personalization* (AI-first) + *community energy* (Telegram/YouTube) inside one cohesive product.

---

## 4. User Archetypes & Pain Points

| Persona | Description | Pain Today | Killer Feature |
| --- | --- | --- | --- |
| **School Topper** | 16-year-old, Tier 1 city, disciplined. | Wants analytics, hates dated UI. | Hyper-detailed progress radar + AI "coach's notes" after each mock. |
| **Drop-Year Warrior** | 18-year-old, Tier 2, retaking CLAT. | Needs focus, fears burnout, limited funds. | Mood Study + daily focus rituals + scholarships for streaks. |
| **Late Bloomer** | College student switching to law. | Short runway, overwhelmed by syllabi. | 90-day crash course roadmap auto-generated. |
| **Working Aspirant** | Part-time prep. | Zero guidance on time slicing. | AI Planner syncing with calendar + "commute mode" audio cues. |

---

## 5. Value Proposition Pyramid

1. **Foundation:** 672+ pieces of verified content (MCQs, flashcards, notes, reels, simulations).
2. **Differentiators:** Adaptive plans, mood-aware study, courtroom simulations, visual law diagrams.
3. **Moat Builders:**
   - Proprietary "Mistake Genome" (metadata of how students err, used for targeted remediations).
   - "Legal Graph" (knowledge graph linking Acts → Sections → Case laws → MCQs → Notes → Flashcards).
   - Community rituals (daily challenge, streak leagues, mentor AMAs).

---

## 6. Product Pillars & Feature Deep-Dive

### 6.1 Knowledge Engine – "Second Brain"
- **Linked Notes:** Every note auto-surfaces connected MCQs, flashcards, case simulations.
- **Visual Law Studio:** AI converts complex doctrines (e.g., Doctrine of Eclipse) into flowcharts/sequence diagrams via Mermaid/JSMind.
- **Case Capsule:** Bite-sized briefs (facts, issues, ratio, dissent) with audio narration for on-the-go learning.

### 6.2 Performance Engine – "Exam Machine"
- **Speed Labs:** 10-minute lightning drills; adaptive timers tighten as accuracy rises.
- **Error DNA:** Tag errors by type (conceptual, comprehension, careless) and show weekly breakdowns.
- **Predictive Rank:** Uses last five mock scores + difficulty normalization to project AIR with 70% confidence interval.

### 6.3 Strategy Engine – "Personal Coach"
- **Blueprint Generator:** Users input target date + available hours; system outputs micro-plan with buffer weeks and revision checkpoints.
- **Weakness Heatmap:** Sunburst visualization per subject → topic → micro-skill.
- **Clutch Mode:** Night-before-exam condensed revision packs + calming routines.

### 6.4 Mindset Engine – "Mental Gym"
- **Mood Study Flow:** Five-question pulse check drives session difficulty, playlist, and reminder style.
- **Balance Board:** Tracks sleep, hydration, screen-time; nudges students with wellness micro-habits.
- **Motivation Vault:** Curated clips from toppers, court moments, legal dramas, playable inside the app.

### 6.5 Control Center – "The Cockpit" (Settings Overhaul)
- **Aspirant Profile:** Set target year, category (Dropper/Fresher) to tune AI advice.
- **Zen Mode:** Toggle to hide anxiety-inducing metrics (Rank/Percentile) during focus hours.
- **Smart Sync:** Auto-download next week's plan when on Wi-Fi for offline study.
- **Notification Tuner:** Granular controls for "Daily Drops" vs "Study Nudges".

---

## 7. AI  Architecture & Research Plan

| Layer | Tech Stack | Outcome |
| --- | --- | --- |
| **LLM Core** | Genkit + Gemini 1.5 Pro, fall back to GPT-4o-mini for creative tasks. | Reliable explanations, multi-turn courtroom sims, summary generation. |
| **Retrieval** | Supabase pgvector + Pinecone hybrid index over `data.ts`, case-law corpus, user history. | Contextual answers referencing exact clauses. |
| **Telemetry** | OpenTelemetry → BigQuery → Metabase dashboards. | Observe latency, hallucination rates, content usage. |
| **Safety** | Zod schema validation, cite primary sources, red-team prompts monthly. | Maintain trust, reduce misinformation risk. |

**Research Backlog:**
1. Evaluate fine-tuning small legal models for offline inference (LLama 3.1 8B).
2. Build "deliberate" chain-of-thought scaffolding for multi-article reasoning.
3. Experiment with speech-to-text for voice doubts (Whisper, native Android).

---

## 8. ContentOps & Quality Playbook

- **Cadence:** Weekly MCQ drops (25), fortnightly notes, monthly mock tests, daily current-affairs digest.
- **Sources:** Supreme Court observer, PIB, PRS, legal blogs, Bare Acts.
- **Workflow:**
  1. Researcher drafts →
  2. Legal SME validates citations →
  3. Pedagogy lead tags difficulty + skills →
  4. AI pipeline generates flashcards/visuals →
  5. Reviewer runs `typecheck` for structure compliance.
- **Tooling:** Notion for pipeline, Git for versioning, Playwright snapshots for UI verification.

---

## 9. 12-Month Roadmap

### Q1 (Foundations & Trust)
- Ship Authentication + profile sync (Firebase Auth + Firestore).
- Migrate static data to hosted DB with seeding scripts.
- Release Smart Notes + Visual Law MVP.
- Launch community beta (500 users) and capture qualitative feedback.

### Q2 (Intelligence & Personalization)
- Integrate AI Doubt Solver with Retrieval-Augmented Generation.
- Deploy Weakness Heatmap + Blueprint Generator.
- Kick off "Mistake Genome" data capture.
- Start leaderboard and streak economy with Firebase RTDB.

### Q3 (Immersion & Scale)
- Courtroom Simulator v1 with branching narratives.
- Speed Labs & Predictive Rank engine.
- Partner with 5 schools for institutional pilot (whitelabel dashboards).
- Release Android app with offline-first sync.

### Q4 (Monetization & Dominance)
- Full-Length Mock Suite + Post-Mortem AI coach.
- Subscription tiers (Free / Pro / Pro+ Mentor on-call).
- National "Legal Marathon" challenge + scholarships.
- CSR partnerships for Tier-3 student sponsorship.

---

## 10. Monetization & Pricing Model

| Tier | Price (INR) | Includes |
| --- | --- | --- |
| **Explorer (Free)** | 0 | Daily MCQ, reels, flashcards, limited AI chat credits, community access. |
| **Pro (₹599/month or ₹5,999/year)** | Core user base | All notes, Smart Planner, unlimited practice, 12 mocks, Visual Law, predictive analytics. |
| **Pro+ Mentor (₹11,999/year)** | Serious aspirants | Everything in Pro + monthly mentor call, priority doubt queue, exclusive internships database. |
| **Institution Pack** | Custom | Dashboard for schools/coaching partners, bulk licenses, offline kits. |

Add-ons: Crash-course packs, current-affairs magazine, printed revision decks.

---

## 11. Growth Loops & Brand Playbook

1. **Performance Loop:** Streak + leaderboard screenshots drive organic social reach.
2. **Content Loop:** Students co-create reel scripts/case sims, credited in-app.
3. **Mentor Loop:** Alumni mentors get referral codes; their mentees unlock extra AI credits.
4. **Community Loop:** In-app "War Rooms" for city-wise squads prepping together.

**Marketing Channels:**
- YouTube shorts (case law explainers), Instagram carousels, LinkedIn founder letters.
- College society tie-ups; sponsor moot courts and debates.
- Podcast with top CLAT achievers discussing study systems.

---

## 12. Operational KPIs & Dashboards

| Area | KPI | Target |
| --- | --- | --- |
| **Learning** | Weekly Active Learners (WAL) | 60% of MAU engage 3+ days/week. |
| **Outcome** | Avg. Mock Score Delta after 4 weeks | +18 points. |
| **AI Quality** | Hallucination incidents / 1K answers | < 2. |
| **Engagement** | Avg. streak length | 14 days. |
| **Revenue** | Free → Paid conversion | 12% quarterly. |
| **Support** | Median query resolution | < 30 mins via AI + human. |

Dashboards in Metabase with alerts piped to Slack/Teams.

---

## 13. Risk Register & Mitigation

| Risk | Impact | Mitigation |
| --- | --- | --- |
| **AI misinformation** | Lowers trust, exam penalties. | Multi-source citations, human review for high-stakes outputs, LLM guardrails. |
| **Regulatory changes (CLAT pattern shift)** | Product misalignment. | Maintain content SWAT team to update within 72 hours; modular content architecture. |
| **Server downtime during mocks** | Churn spike. | Multi-region deployment, auto-scaling, offline mock capability. |
| **Burnout features misused** | Student health risk. | Partner psychologists to vet mindfulness flows, opt-in only. |
| **Copycats** | Feature parity erodes moat. | Double down on data network effects (Mistake Genome) + community experiences. |

---

## 14. Action Plan (Next 30 Days)

1. **Tech:** Ship Firestore integration for progress tracker + set up Supabase vector store.
2. **AI:** Fine-tune prompts for courtroom simulator; run closed beta with 50 users.
3. **Content:** Publish "Current Affairs 360" weekly show inside the app; add 30 new MCQs tagged with difficulty metadata.
4. **Growth:** Launch "Challenge a Friend" referral with UPI cashback mini-rewards.
5. **Ops:** Recruit 10 mentor-law students for inaugural Pro+ cohort.

---

## 15. Closing Narrative

7K Law Prep is no longer a glorified question bank; it is a **digital law school + AI performance lab + wellness companion**. By owning the entire journey—awareness → practice → analytics → mindset—we position ourselves as the *default operating system* for every law aspirant. Execute this blueprint with discipline, and "AIR 1 via 7K" becomes a self-fulfilling prophecy.

---

## 16. Engineering & Delivery Playbook

| Track | Scope | Key Outputs | Tooling |
| --- | --- | --- | --- |
| **Frontend** | Next.js App Router refactors, offline caching, accessibility polish. | Modular feature routes, skeleton UIs, PWA manifest + Service Worker. | Next.js 15, Turbopack, Storybook, Lighthouse CI. |
| **Backend / APIs** | Progress sync, leaderboard APIs, content CMS, AI gateways. | REST/GraphQL endpoints with auth, rate limits, observability hooks. | Firebase Functions, Supabase Edge Functions, tRPC. |
| **AI Platform** | Prompt orchestration, vector indexing, evaluation harness. | Reusable Genkit flows, safety filters, evaluation datasets. | Genkit CLI, Pinecone, LangSmith, Weights & Biases. |
| **Mobile & Offline** | React Native shell / Capacitor, background sync, push. | Download manager, offline mock runner, notification scheduler. | Expo, Workbox, OneSignal. |
| **DevEx** | CI/CD, feature flags, developer guidelines. | One-click preview envs, automated lint/type/test gates, release notes bot. | GitHub Actions, Changesets, LaunchDarkly. |

**Delivery Rituals:** Bi-weekly sprint reviews, monthly architecture council, red/green dashboard visible to entire org.

---

## 17. Data, Analytics & Experimentation

- **Data Lakehouse:** Event ingestion via Segment → BigQuery; structured marts for learning, revenue, reliability.
- **North Star Dashboard:** Time-on-task, mastery gains, wellness compliance, revenue per learner.
- **Experiment Framework:** Holdout groups per persona, sequential testing (AA → AB), guardrails on churn/NPS.
- **Insight Cadence:** Weekly product analytics review, monthly "State of Learner" memo summarizing qualitative + quantitative signals.

---

## 18. QA & Reliability Matrix

| Layer | Tools | Coverage Goal |
| --- | --- | --- |
| **Unit** | Vitest/Jest, React Testing Library | 90% critical paths (MCQ engine, planner math, AI adapters). |
| **Integration** | Playwright, Supabase emulator, Firebase emulator | Planner ↔ calendar, AI chat ↔ retrieval, offline sync ↔ conflicts. |
| **Load & Chaos** | k6, Azure Chaos Studio | Sustain 25K concurrent mock takers; automated failover drills quarterly. |
| **Content QA** | Custom lint rules, human review board | Zero placeholder content, citation accuracy > 99%. |

Release checklist includes accessibility audit, perf budget (<180KB JS per route), and AI hallucination regression tests.

---

## 19. People & Operating Model

- **Core Team (next 6 months):** Head of Product, 3 Full-stack devs, 1 AI engineer, 1 Mobile engineer, 2 Content editors, 1 Community lead, 1 Well-being consultant.
- **Extended Guilds:** Mentor network (law students/alumni), Content SWAT team, Student Advisory Council.
- **Ways of Working:** OKR planning quarterly, async docs-first culture, Friday "demo dome" showcasing learner wins.

---

## 20. Partnerships & Distribution Strategy

1. **Institutions:** Offer white-label dashboards + discounted seats for schools/coaching partners.
2. **Media:** Weekly column with legal news portals summarizing "Legal Angle of the Week" powered by 7K.
3. **Influencers:** Collaborate with CLAT toppers, YouTube educators; revenue-share affiliate links tied to in-app purchases.
4. **CSR & NGOs:** Sponsor underprivileged aspirants; create goodwill + talent pipeline.

---

## 21. Compliance, Security & Trust

| Area | Requirement | Action |
| --- | --- | --- |
| **Data Protection** | DPDP Act 2023, GDPR-lite expectations. | Privacy-by-design checklists, consent screens, data deletion within 72 hours. |
| **Academic Integrity** | Avoid leaked question papers, maintain licensing. | Content provenance logs, legal vetting before publishing sensitive material. |
| **AI Transparency** | Explainability and opt-out. | Label AI-generated answers, show sources, provide manual escalation path. |
| **Payments** | RBI/UPI compliance. | Razorpay/Stripe with e-mandate support, GST invoicing automated. |

---

## 22. Financial Model & Budget Guardrails

- **Runway Assumptions:** 18-month horizon, ₹1.8 crore budget, CAC cap ₹900/user.
- **Cost Buckets:** 35% talent, 25% marketing, 15% infra/AI tokens, 10% content licensing, 15% contingency.
- **Revenue Goals:** ₹3 crore ARR by FY27; break-even at 12K Pro subscribers.
- **Investor Storyline:** Showcase data network effects (Mistake Genome), high LTV via Pro+ mentorship, defensibility from school partnerships.

---

## 23. 90-Day Execution Calendar

| Week | Milestone |
| --- | --- |
| 1-2 | Ship Firestore progress sync, run usability tests on Planner MVP. |
| 3-4 | Launch Visual Law alpha, start telemetry instrumentation, publish marketing teaser. |
| 5-6 | Roll out AI Doubt Solver beta to 200 users, capture CSAT, tune prompts. |
| 7-8 | Release Speed Labs + Error DNA dashboards, open leaderboard soft launch. |
| 9-10 | Courtroom Simulator closed beta, add voice note ingestion. |
| 11-12 | Full marketing blitz, referral program + scholarship announcement, prep for mock suite pilot. |

---

## 24. Living Document Ritual

- Review & update this plan the first Monday of every month.
- Archive prior versions in `docs/plan-history/` with changelog of strategic shifts.
- Tie each roadmap item to Jira/Linear issues for traceability.
- Celebrate shipped milestones publicly (Discord, newsletter) to keep community invested.

---

## 25. Feature Brainstorm & Competitive Gap Matrix

| Capability Cluster | 7K Law Prep Today | LegalEdge / TopRankers | Testbook / Aggregators | Telegram/YouTube Communities | Opportunity & Next Steps |
| --- | --- | --- | --- | --- | --- |
| **Core Content Depth** | 672+ curated items, verified, linked. | Extensive mocks & PDFs but siloed. | Large quantity, low curation. | Random quality, fast updates. | Keep curation edge; add rapid news micro-updates to match community speed. |
| **Adaptive Practice** | Planned (Speed Labs, Error DNA). | Fixed schedules, manual feedback. | Rule-based quizzes. | None. | Ship adaptive engine ASAP—key differentiator. |
| **AI Doubt Resolution** | Genkit flows under integration. | Human faculty chat windows. | Generic chatbot with FAQ answers. | Crowdsourced replies. | Launch AI Tutor with citations to trump both speed & trust. |
| **Gamification** | Mood Study, upcoming streaks/leagues. | Limited badges. | Leaderboards only. | Community shout-outs. | Build seasonal leagues + city wars to own engagement. |
| **Mindset & Wellness** | Unique Balance Board + rituals. | Offline coaching occasionally covers. | Ignored. | Peer pressure, no structure. | Double down—brand identity as balanced prep platform. |
| **Courtroom Simulation** | In development; AI-driven narratives. | Not offered. | Not offered. | Roleplay threads occasionally. | Launch early to cement novelty; market heavily. |
| **Visual Learning** | Visual Law Studio roadmap. | PDF diagrams only. | Static images. | Fan-made charts. | Provide shareable visuals; embed watermark for virality. |
| **Offline / Low Bandwidth** | PGLite + offline mocks planned. | Centres provide offline only. | Heavy apps, poor offline. | Dependent on Telegram downloads. | Nail offline-first to win Tier-2/3 trust. |
| **Community & Mentorship** | War Rooms, mentor loops planned. | Alumni groups in WhatsApp. | Minimal. | Massive but noisy. | Curate verified mentors + moderated chats; highlight success stories. |
| **Pricing Flexibility** | Freemium + Pro tiers defined. | High-price bundles. | Deep discounts. | Free. | Offer UPI mini top-ups + scholarships to bridge gap between free and premium. |

**Brainstorm Bucket List (next-gen ideas):**
- "Legal Spotify": AI builds dynamic playlists of content (MCQs + reels + notes) for a specific weak spot.
- "Study Buddy AI": pairs two aspirants with complementary strengths, orchestrates joint sessions.
- "Mock Court Livestream": community watches AI-driven moot, chats in real time, answers polls.
- "Evidence Locker": drag-and-drop judgments/PDFs, app summarizes and extracts possible questions.
- "Focus Bounties": users place micro-bets of coins to finish tasks, refunded with bonus if they complete.

---

## 26. Master Feature Backlog & Change Log

### Tier 0 – Non-Negotiables (Must land in next two sprints)
1. **Firestore Progress Sync:** Persist attempted/correct counters, streaks, planner events.
2. **Visual Law Alpha:** Render AI-generated diagrams for 10 flagship doctrines inside notes.
3. **AI Doubt Solver v1:** Text-only, cites MCQ/Note IDs, logs feedback loop for prompt tuning.
4. **Telemetry Baseline:** Capture page views, AI latency, errors with OpenTelemetry.
5. **Settings "Control Center":** Implement Profile, Zen Mode, and Notification tuning.

### Tier 1 – Growth Catalysts (Quarter commitment)
5. **Speed Labs + Error DNA dashboards.**
6. **Mood Study → Recommendation bridge** (mood influences content + reminders).
7. **Leaderboards & Referral Challenges** with Firebase RTDB + DeepLinks.
8. **Courtroom Simulator Beta** with three branching cases.
9. **Offline Mock Runner** using Service Worker + IndexedDB bundles.

### Tier 2 – Moat Builders (6-12 month horizon)
10. **Mistake Genome Analytics** with personalized prescriptions.
11. **Mentor Marketplace & Office Hours scheduler.**
12. **Institution Dashboard** with aggregated metrics, seat management, custom content upload.
13. **Voice Doubt Intake** (Whisper) with summarization + follow-up prompts.
14. **Legal Graph Explorer** UI to navigate Acts → Cases → Questions visually.

### Change / Gap Tracker

| Area | Current Gap | Owner | Planned Fix |
| --- | --- | --- | --- |
| User data persistence | Progress resets on refresh. | Backend squad | Firestore sync + optimistic updates. |
| Search relevance | Keyword only. | AI Platform | Vector search + semantic reranking. |
| Mock availability | No full-length tests yet. | Content Ops | Release 2 mocks/month starting Q2. |
| Android experience | Webview reliance. | Mobile | Expo native shell + push notifications. |
| Support SLAs | Manual responses via email. | Ops | In-app ticketing + AI triage bot. |

Keep this backlog synced with Linear; revisit priorities during monthly plan review.

