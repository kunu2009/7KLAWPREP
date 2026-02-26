# 7K Law Prep Project Audit (AIR-1 Readiness)

**Date:** 26 Feb 2026  
**Objective:** Evaluate whether the current product is strong enough to reliably help produce an AIR-1 CLAT student, and whether the app is old-fashioned/complex vs modern/minimalist.

**Execution checklist:** See `docs/EXECUTION_CHECKLIST_AIR1_2026-Q1.md`

---

## 1) Executive Verdict

### Short answer
- **You are strong on breadth of content and tool variety.**
- **You are not yet AIR-1 execution-ready as a system.**
- The app is **feature-rich but cognitively heavy**; not exactly old-fashioned, but currently **too crowded** for elite focus workflows.

### Readiness score (current)
- **Content readiness:** 8.5/10
- **Practice system readiness:** 7/10
- **Adaptive coaching readiness:** 4/10
- **AI trust/readiness (citations + grounding):** 3.5/10
- **UX minimalism for high performers:** 5.5/10
- **Overall AIR-1 system readiness:** **6/10**

> Interpretation: A very capable CLAT prep app, but still missing the precision loop needed for consistent top-1 outcomes.

---

## 2) What You Already Have (Strong Assets)

## A) High coverage + strong volume
Evidence from docs and data:
- `docs/ENHANCEMENT_SUMMARY.md`: 672+ content items, MCQs/flashcards/reels significantly expanded.
- `src/lib/data.ts`: very large, structured in-app corpus (MCQs, notes, flashcards, reels, career paths, case simulations).
- `docs/research.md`: many CLAT tools marked implemented.

What this means:
- You already have enough content depth for serious prep.
- Students can practice across multiple formats (MCQ, drill, notes, case diary, revision formats).

## B) Broad CLAT tool ecosystem
Evidence:
- Routes under `src/app/(app)/...` show 35+ modules.
- Sidebar + tools grid expose specialized drills and wellness modules.

What this means:
- Product differentiation is strong; this is not a thin app.

## C) Good component/system foundation
Evidence:
- Next.js + TypeScript + Tailwind + shadcn/radix style primitives.
- Reusable UI patterns and standardized route structure.
- Feature toggles + zen mode already exist (`src/context/feature-toggles.tsx`).

What this means:
- You can modernize quickly without rewriting the whole stack.

---

## 3) What You Lack (Critical Gaps for AIR-1 Outcome)

## A) Weak adaptive intelligence loop (most important)
Current state:
- Progress is mostly localStorage-based (`src/context/progress-context.tsx`).
- Topic tracking exists, but no robust competency model, no cross-device identity graph, no high-quality prediction loop.

Why this blocks AIR-1:
- AIR-1 prep needs tight diagnose → prescribe → practice → re-evaluate cycles.
- Without stronger adaptive looping, students do “more work,” not always “better work.”

## B) AI is not grounded enough for high-stakes trust
Current state:
- AI flows are mostly prompt-based generation (`src/ai/flows/*.ts`) with no explicit retrieval citations in the answer flow.
- `answer-law-questions.ts` is generic and does not enforce authoritative citation output.

Why this blocks AIR-1:
- Top-rank prep requires source-grounded correctness and verifiability.
- Non-cited legal answers increase hallucination risk and confidence errors.

## C) Information architecture is overloaded
Current state:
- Many tools shown together in sidebar/dashboard (`src/components/app-sidebar.tsx`, `src/components/study-tools-drawer.tsx`, `src/app/(app)/page.tsx`).

Why this blocks AIR-1:
- Elite aspirants need fewer choices per session and clear “today’s mission.”
- Too many visible options increases decision fatigue and weakens deep-work consistency.

## D) Competitive exam realism not fully systematized
Likely missing/underdeveloped in current codebase:
- Full exam-condition simulation rigor and section-level timing adaptation.
- Strong post-mock coaching pipeline (error taxonomy + auto-remedial plan + deadlines).
- Benchmarking against topper trajectory patterns at scale.

## E) Personalization depth is still basic
Current state:
- Profile fields are present (year/type), zen mode exists.
- But no deep persona-aware orchestration of daily tasks (Fresher vs Dropper vs Working aspirant) with dynamic intensity.

---

## 4) Is the App Old-Fashioned or Hard to Use?

### Honest assessment
- **Not old-fashioned technically.** The stack and components are modern.
- **Partly hard to use at peak ambition level** because of high feature density and fragmented navigation.

### UX diagnosis
- **Strength:** rich cards, modern iconography, dark/light support, clear section styling.
- **Weakness:** too many equally emphasized entry points; too little guided sequence.
- **Net:** modern visual layer on top of an overloaded task model.

---

## 5) What “AIR-1 Ready” Product Should Add Next

## Must-have System Upgrades (P0)
1. **Precision Coaching Engine**
   - Unified competency graph per micro-skill.
   - Daily plan generated from weaknesses + exam date + available time.
2. **Grounded AI Layer**
   - Retrieval-backed answers from verified sources.
   - Mandatory citations + confidence tags + “verify” UX.
3. **Post-Mock Recovery Protocol**
   - Auto error classification (conceptual/comprehension/careless/time).
   - 48-hour corrective sprint with measurable closure.
4. **Mission-first Home**
   - Replace broad dashboard emphasis with one primary CTA: “Start Today’s AIR-1 Session”.

## Must-have UX Simplification (P0/P1)
1. **Three-mode IA:** Learn / Practice / Analyze (everything else inside these buckets).
2. **Progressive disclosure:** advanced tools hidden until triggered by need.
3. **Default minimal home:** only 3–5 cards above the fold.
4. **Single “Command/Search” entry:** jump to any tool/content without browsing menu walls.

---

## 6) Minimalist but Feature-Rich Redesign Direction

### Principle
Keep feature richness in capability, but not in first-screen complexity.

### Practical architecture
- **Layer 1 (Daily):** Today’s target, one guided session, one recovery action.
- **Layer 2 (Weekly):** Mock trends, weak clusters, revision wheel.
- **Layer 3 (Library):** full tool set and all content archives.

### UI outcome
- New users feel simplicity.
- Power users still unlock full depth.
- Top performers stay in flow instead of hopping tools.

---

## 7) 30-60-90 Day Recommendation

## 30 days (focus + trust)
- Introduce mission-first home screen.
- Reduce default sidebar sections to core clusters.
- Add citation-ready AI response schema for assistant/summarizer.

## 60 days (adaptivity)
- Build competency mapping from existing progress + error logs.
- Auto-generate daily/weekly personalized study plan.
- Add post-mock corrective workflow.

## 90 days (topper engine)
- Predictive readiness model per section.
- Intensive AIR-1 track (high discipline mode) with strict routines.
- Add longitudinal dashboards for mentor/audit reviews.

---

## 8) Final Conclusion

You are **already a strong CLAT prep platform** with high content and broad tools.  
To become a **true AIR-1 manufacturing system**, you need to shift from “many features” to **precision coaching + grounded AI + minimal high-focus UX**.

If you execute that shift, this can become one of the best self-prep systems for top-100 and potentially AIR-1 outcomes.

---

## Appendix: Files reviewed for this audit

- `README.md`
- `docs/blueprint.md`
- `docs/plan.md`
- `docs/research.md`
- `docs/ENHANCEMENT_SUMMARY.md`
- `package.json`
- `src/app/(app)/layout.tsx`
- `src/app/(app)/page.tsx`
- `src/app/(app)/mcqs/page.tsx`
- `src/app/(app)/settings/page.tsx`
- `src/components/app-sidebar.tsx`
- `src/components/study-tools-drawer.tsx`
- `src/context/feature-toggles.tsx`
- `src/context/progress-context.tsx`
- `src/ai/genkit.ts`
- `src/ai/flows/answer-law-questions.ts`
- `src/ai/flows/courtroom-agent.ts`
- `src/ai/flows/generate-visual-law.ts`
- `src/ai/flows/summarize-legal-text.ts`
- `src/lib/data.ts`
