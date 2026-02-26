# 7K Law Prep — AIR-1 Execution Checklist (Q1 2026)

**Goal:** Move from feature-rich CLAT app to AIR-1-grade precision coaching system.  
**Duration:** 12 weeks (3 phases)  
**Definition of done:** P0 is complete and measurable; P1 is launched to pilot users; P2 is in controlled rollout.

---

## Phase 1 (Weeks 1-4) — P0: Focus + Trust Foundation

## 1) Mission-first home (replace overloaded dashboard emphasis)
- [x] Add primary CTA block: **Start Today’s AIR-1 Session** on home page.
- [x] Show only 3 core cards above fold: Today Plan, Weakest Skill, Last Mock Recovery.
- [x] Move secondary tools behind “View All Tools” drawer.
- [ ] Add “Session complete” state with next recommended action.

**Acceptance criteria**
- [ ] New user can start first guided session in < 10 seconds.
- [ ] Home page has <= 5 primary interactive elements above fold.

## 2) Navigation simplification (minimalist but feature-rich)
- [x] Re-cluster routes into 3 buckets in sidebar: **Learn / Practice / Analyze**.
- [x] Keep Wellness and AI under contextual entry points (not equal-weight top-level spam).
- [x] Add global command/search launcher for fast jump.

**Acceptance criteria**
- [ ] Sidebar top-level items reduced by at least 50%.
- [ ] Any tool reachable in <= 2 interactions.

## 3) Grounded AI v1 (assistant + summarizer)
- [x] Upgrade answer schema to include: `answer`, `sources[]`, `confidence`, `verificationNote`.
- [x] Add retrieval layer from verified internal corpus before generation.
- [x] Render source chips in UI with section/title labels.
- [x] Add refusal/fallback for low-confidence legal claims.

**Acceptance criteria**
- [ ] 100% AI responses show either citations or explicit low-confidence fallback.
- [ ] No uncited definitive legal advice-style statements.

## 4) Instrumentation baseline
- [x] Track events: home CTA click, session started/completed, tool hops, AI citation click.
- [ ] Add dashboard for: session completion rate, average tool hops/session, AI citation coverage.

**Acceptance criteria**
- [ ] Event tracking verified in dev and prod.
- [ ] Weekly analytics report available.

---

## Phase 2 (Weeks 5-8) — P1: Adaptivity Engine

## 5) Competency map + weakness graph
- [ ] Define micro-skills taxonomy for CLAT sections.
- [ ] Map each MCQ/drill item to one or more micro-skills.
- [ ] Compute skill confidence score per user.

**Acceptance criteria**
- [ ] Every practice item has a skill tag.
- [ ] User profile shows top 5 weak micro-skills.

## 6) Daily adaptive planner
- [ ] Build algorithm: input = exam date + available time + weakness scores + recent mistakes.
- [ ] Generate daily sequence: warmup → core drills → revision → cooldown.
- [ ] Add dynamic intensity mode (Fresher/Dropper/Working).

**Acceptance criteria**
- [ ] Plan auto-refreshes daily.
- [ ] Skipped tasks are rescheduled intelligently within 48h.

## 7) Post-mock recovery protocol
- [ ] Auto-classify errors: conceptual, comprehension, careless, time-pressure.
- [ ] Create mandatory 48-hour remedial sprint after each mock.
- [ ] Track “error closure rate” (resolved vs repeated mistakes).

**Acceptance criteria**
- [ ] Each mock generates actionable remedial plan automatically.
- [ ] Repeat-error rate trend visible in Analyze view.

---

## Phase 3 (Weeks 9-12) — P2: AIR-1 Performance Layer

## 8) Predictive readiness model
- [ ] Build section-wise readiness score from last N tests and micro-skill confidence.
- [ ] Add confidence intervals and stability trend (improving/flat/declining).
- [ ] Surface “AIR-1 risk flags” (accuracy volatility, time collapses, unfinished sections).

**Acceptance criteria**
- [ ] Readiness score updates after each major assessment.
- [ ] Users get clear “next best action” tied to score change.

## 9) High-discipline AIR-1 track
- [ ] Add optional strict mode: fewer choices, fixed daily protocol, mandatory review loop.
- [ ] Add consistency contracts: streak-quality (not just streak-length).
- [ ] Add weekly performance review summary.

**Acceptance criteria**
- [ ] AIR-1 track users complete higher % of planned sessions than baseline cohort.

## 10) Reliability and quality hardening
- [ ] Add test coverage for planner logic, error classifier, and AI response schema.
- [ ] Add content freshness checks for current affairs windows.
- [ ] Add route performance budgets for key pages.

**Acceptance criteria**
- [ ] No blocking regression in core learning flow.
- [ ] Key routes remain performant under realistic data size.

---

## Weekly Operating Checklist (repeat each week)
- [ ] Ship 1 measurable learner-outcome improvement (not just UI polish).
- [ ] Review top 20 repeated student mistakes.
- [ ] Validate AI citation quality on a fixed legal benchmark set.
- [ ] Remove one source of UX friction from start-session flow.
- [ ] Publish one internal “what changed + learner impact” note.

---

## KPI Targets for Q1 End
- [ ] Session completion rate: +25%
- [ ] Average tool hops/session: -30%
- [ ] AI citation coverage: >= 95%
- [ ] Repeat-error rate after mock recovery: -20%
- [ ] Weekly active learners with 3+ productive days: +20%

---

## Suggested File-Level Implementation Order
1. `src/app/(app)/page.tsx` — mission-first home and CTA flow.
2. `src/components/app-sidebar.tsx` — Learn/Practice/Analyze simplification.
3. `src/components/study-tools-drawer.tsx` — secondary tools relocation.
4. `src/ai/flows/answer-law-questions.ts` — grounded schema + citations.
5. `src/ai/flows/summarize-legal-text.ts` — grounded summary schema.
6. `src/app/(app)/assistant/page.tsx` — source rendering + confidence UX.
7. `src/context/progress-context.tsx` (+ data layer) — adaptive metrics foundation.

---

## Immediate Next Sprint (start now)
- [x] Sprint 1 Task 1: Implement mission-first dashboard skeleton.
- [x] Sprint 1 Task 2: Simplify sidebar IA to Learn/Practice/Analyze.
- [x] Sprint 1 Task 3: Add citation fields to assistant flow and UI.
- [x] Sprint 1 Task 4: Instrument core events and verify analytics.
