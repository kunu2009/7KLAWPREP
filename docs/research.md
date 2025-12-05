# 7K Law Prep - Study Tools Research Document

> **Mission:** Transform 7K Law Prep into the ultimate CLAT preparation platform with comprehensive study tools designed for maximum retention, exam readiness, and user engagement.

---

## 📊 IMPLEMENTATION STATUS (Updated: December 5, 2025)

### ✅ COMPLETED FEATURES (25 tools)
| # | Feature | Route | Status |
|---|---------|-------|--------|
| 1.1 | Passage Sprint Trainer | `/passage-sprint` | ✅ Done |
| 1.2 | Legal Reasoning Drill (IRAC) | `/legal-drill` | ✅ Done |
| 1.3 | Question-Type Drills | `/question-types` | ✅ Done |
| 1.4 | CLAT Daily 25 | `/daily-25` | ✅ Done |
| 1.5 | Speed Reading Strip | `/speed-reading` | ✅ Done |
| 1.6 | GK One-Liners | `/gk-oneliners` | ✅ Done |
| 1.7 | Error Analysis Tool | `/error-log` | ✅ Done |
| 1.8 | Vocabulary-in-Context Drill | `/vocab-context` | ✅ Done |
| 1.9 | Logical Reasoning Pattern Bank | `/lr-patterns` | ✅ Done |
| 1.13 | Fact vs. Opinion Sorter | `/fact-opinion` | ✅ Done |
| 1.15 | Parajumble Trainer | `/parajumble` | ✅ Done |
| 2.1 | Mind-Maps & Concept Maps | `/mind-maps` | ✅ Done |
| 2.2 | Case Diary | `/case-diary` | ✅ Done |
| 2.3 | One-Page Notes / Rapid Revision | `/quick-revision` | ✅ Done |
| 2.4 | Comparative Tables | `/comparisons` | ✅ Done |
| 2.5 | Brain-Dump Mode | `/brain-dump` | ✅ Done |
| 2.6 | Legal Maxims Bank | `/maxims` | ✅ Done |
| 2.7 | Bare Acts Reference | `/bare-acts` | ✅ Done |
| 3.11 | Legal Timeline Builder | `/timeline` | ✅ Done |
| 4.1 | Mini Tests | `/mini-test` | ✅ Done |
| - | MCQ Practice | `/mcqs` | ✅ Done |
| - | Flashcards | `/flashcards` | ✅ Done |
| - | Study Planner | `/planner` | ✅ Done |
| - | Progress Tracker | `/progress` | ✅ Done |
| - | Mock Tests | `/mock-test` | ✅ Done |

### 🟡 OPTIONAL ENHANCEMENTS (Low Priority - Post CLAT)
| # | Feature | Route | Priority |
|---|---------|-------|----------|
| 1.10 | Inference Builder Tool | - | 🟢 LOW |
| 1.11 | Find the Principle Exercise | - | 🟢 LOW |
| 1.12 | Legal Conditions Trainer | - | 🟢 LOW |
| 1.14 | Author's Attitude Detector | - | 🟢 LOW |
| 1.22 | Mixed Stamina Test | - | 🟢 LOW |

---

## 📋 Table of Contents

1. [Priority Tier 1: CLAT-Specific Tools (HIGH PRIORITY - IMMEDIATE)](#priority-tier-1-clat-specific-tools-high-priority---immediate)
2. [Priority Tier 2: Core Study Enhancement Tools](#priority-tier-2-core-study-enhancement-tools)
3. [Priority Tier 3: Knowledge Management Tools](#priority-tier-3-knowledge-management-tools)
4. [Priority Tier 4: Practice & Assessment Tools](#priority-tier-4-practice--assessment-tools)
5. [Priority Tier 5: Gamification & Engagement Tools](#priority-tier-5-gamification--engagement-tools)
6. [Implementation Roadmap](#implementation-roadmap)
7. [Technical Considerations](#technical-considerations)
8. [Research-Backed Learning Strategies](#research-backed-learning-strategies)

---

## 🚨 Priority Tier 1: CLAT-Specific Tools (HIGH PRIORITY - IMMEDIATE)

> **These features should be implemented FIRST as CLAT is approaching. Focus on passage-based learning, legal reasoning, and exam simulation.**

### 1.1 Passage Sprint Trainer ⭐⭐⭐
**Priority: CRITICAL | Effort: Medium | Impact: Maximum**

CLAT is entirely passage-based. This is the #1 feature.

**Features:**
- Passages of varying lengths (150–350 words)
- Auto-starting timer when passage loads
- 5 MCQs per passage
- Post-completion analytics:
  - Time taken per passage
  - Accuracy percentage
  - Weak question type identification
  - Reading speed (WPM)

**Technical Implementation:**
```
Route: /passage-sprint
Components: PassageCard, TimerDisplay, QuestionSet, ResultsAnalysis
Data Structure:
{
  id: string,
  passage: string,
  wordCount: number,
  difficulty: 'easy' | 'medium' | 'hard',
  category: 'english' | 'legal' | 'logical' | 'gk',
  questions: MCQ[],
  recommendedTime: number // in seconds
}
```

---

### 1.2 Legal Reasoning Drill (IRAC Micro-Problems) ⭐⭐⭐
**Priority: CRITICAL | Effort: Medium | Impact: Maximum**

**Features:**
- Mini legal principle display
- 3-4 line fact situation
- User selects answer + writes 1-line reasoning
- IRAC format training (Issue, Rule, Application, Conclusion)

**Data Structure:**
```
{
  id: string,
  principle: string,
  factSituation: string,
  options: string[],
  correctAnswer: number,
  reasoning: string,
  iracBreakdown: {
    issue: string,
    rule: string,
    application: string,
    conclusion: string
  }
}
```

---

### 1.3 Question-Type Drills ⭐⭐⭐
**Priority: CRITICAL | Effort: Low | Impact: High**

Category-wise CLAT question practice:

| Question Type | Description | Section |
|---------------|-------------|---------|
| Strengthen/Weaken | Arguments that support/undermine conclusion | Logical Reasoning |
| Principle + Fact | Apply principle to given facts | Legal Reasoning |
| Author's Tone | Identify writer's attitude | English |
| Inference | What can be logically concluded | All Sections |
| Assumption | Unstated premise | Logical Reasoning |
| Para-summary | Main idea extraction | English |

**Route:** `/question-types`

---

### 1.4 CLAT Daily 25 (Mixed Questions) ⭐⭐⭐
**Priority: CRITICAL | Effort: Low | Impact: Maximum**

Daily warm-up with mixed questions:
- 5 English Comprehension
- 5 Legal Reasoning
- 5 Logical Reasoning
- 5 GK/Current Affairs
- 5 Quantitative Techniques

**Features:**
- Daily refresh at midnight
- Streak tracking for completion
- Performance comparison with previous days
- Weak section identification

**Route:** `/daily-25`

---

### 1.5 Speed Reading Strip ⭐⭐
**Priority: HIGH | Effort: Low | Impact: High**

**Features:**
- One paragraph at a time display
- Swipe/tap to next paragraph
- Countdown timer at top
- Adjustable speed settings (slow/medium/fast)
- Reading comprehension check at end

**Route:** `/speed-reading`

---

### 1.6 GK One-Liners (Last 12 Months) ⭐⭐⭐
**Priority: CRITICAL | Effort: Low | Impact: High**

**Content Categories:**
- Current Affairs (last 12 months)
- Events & Appointments
- Awards & Recognition
- New Laws & Amendments
- Government Schemes
- International Affairs
- Sports & Culture

**Features:**
- 1000+ one-liners
- Searchable database
- Category filters
- Daily random quiz from one-liners
- Bookmark important items

**Route:** `/gk-oneliners`

---

### 1.7 Error Analysis Tool ⭐⭐
**Priority: HIGH | Effort: Medium | Impact: High**

Auto-detect mistake patterns after solving 10-20 questions:

**Trackable Error Types:**
- Assumption errors
- Fact vs Opinion confusion
- Principle Application mistakes
- Vocabulary-in-context errors
- Time management issues
- Careless mistakes

**Output:** Personalized weakness report with targeted practice suggestions.

---

### 1.8 Vocabulary-in-Context Drill ⭐⭐
**Priority: HIGH | Effort: Low | Impact: Medium**

**Features:**
- CLAT-level passage sentences
- Highlighted word in context
- 4 meaning options
- No dictionary needed - contextual learning
- Word bank for revision

**Route:** `/vocab-context`

---

### 1.9 Logical Reasoning Pattern Bank ⭐⭐
**Priority: HIGH | Effort: Medium | Impact: High**

Pre-loaded reasoning patterns:
- Arrangement (ARR) sequences
- Cause & Effect relationships
- Parallel reasoning
- Paradox identification
- Fill-in-the-blanks logic
- Syllogisms
- Blood relations
- Direction sense

**Practice:** 10 questions at a time per pattern.

---

### 1.10 Inference Builder Tool ⭐⭐
**Priority: HIGH | Effort: Low | Impact: Medium**

**Format:**
- Show a sentence/paragraph
- User identifies:
  - ✅ What CAN be inferred
  - ❌ What CANNOT be inferred
- Explanation reveals logical reasoning

Perfect for English + Legal sections.

---

### 1.11 Find the Principle Exercise ⭐⭐
**Priority: HIGH | Effort: Low | Impact: High**

**Features:**
- Display passage with embedded legal principle
- User identifies:
  - Main legal principle
  - Exception to the rule
  - Test used (reasonability, mens rea, nexus test, etc.)
- Sharpens legal reading skills

---

### 1.12 Legal Conditions Trainer ⭐⭐
**Priority: HIGH | Effort: Low | Impact: Medium**

**Features:**
- Show law principle with multiple conditions
- User identifies:
  - Necessary conditions
  - Sufficient conditions
- CLAT Legal frequently tests conditional reasoning

---

### 1.13 Fact vs. Opinion Sorter ⭐⭐
**Priority: HIGH | Effort: Low | Impact: High**

**Features:**
- 10 statements per set
- User categorizes each as:
  - 📊 Fact (verifiable)
  - 💭 Opinion (subjective)
- Foundation skill for CLAT Logical Reasoning

---

### 1.14 Author's Attitude Detector ⭐⭐
**Priority: HIGH | Effort: Low | Impact: Medium**

**Options:**
- Critical
- Supportive
- Neutral
- Mixed/Ambivalent
- Satirical
- Analytical

CLAT English passages frequently test tone identification.

---

### 1.15 Parajumble Trainer ⭐⭐
**Priority: HIGH | Effort: Low | Impact: Medium**

**Features:**
- 4-6 jumbled sentences
- Drag/tap to arrange correctly
- Timer for speed practice
- CLAT English includes sentence arrangement

---

### 1.16 "Spot the Keyword" Tool ⭐
**Priority: MEDIUM | Effort: Low | Impact: Medium**

**Features:**
- Passage display
- User taps/highlights logical connectors:
  - However, Therefore, Despite
  - On the other hand, Furthermore
  - Consequently, Nevertheless
- Trains logical linking awareness

---

### 1.17 GK Connect-the-Dots ⭐
**Priority: MEDIUM | Effort: Medium | Impact: Medium**

**Features:**
- Show 5 related facts
- User identifies common theme
- CLAT GK passages revolve around central ideas

---

### 1.18 Legal Puzzle Builder ⭐⭐
**Priority: HIGH | Effort: Medium | Impact: High**

**Format (CLAT 2020-2024 style):**
- 4 statements
- 4 conclusions
- User matches correct pairs

---

### 1.19 Reading Comprehension Ladder ⭐
**Priority: MEDIUM | Effort: Medium | Impact: Medium**

**Features:**
- Five passages of increasing difficulty
- Level 1: Simple (150 words)
- Level 5: Complex (400 words)
- Builds stamina + confidence progressively

---

### 1.20 Quick Solve Mode ⭐
**Priority: MEDIUM | Effort: Low | Impact: Medium**

**Features:**
- Questions displayed first (hidden passage)
- Click "Reveal Passage" when needed
- Trains question-first strategy
- Reduces passage re-reading time

---

### 1.21 Reading Stamina Timer ⭐
**Priority: MEDIUM | Effort: Low | Impact: Medium**

**Features:**
- User selects session duration (10/15/20/30 min)
- Random passages until timer ends
- Builds exam stamina
- Track improvement over sessions

---

### 1.22 Mixed Stamina Test ⭐⭐
**Priority: HIGH | Effort: Medium | Impact: High**

**Format:**
- 1 passage (with questions)
- 5 logical reasoning questions
- 5 legal reasoning questions
- 5 GK questions
- 3 quantitative questions

Simulates real CLAT section flow.

---

### 1.23 30-Second GK Flash Test ⭐
**Priority: MEDIUM | Effort: Low | Impact: Medium**

- 10 GK questions
- 30-second countdown per question
- Tests quick recall under pressure

---

### 1.24 Synonym/Antonym Booster ⭐
**Priority: MEDIUM | Effort: Low | Impact: Medium**

- CLAT-level vocabulary words
- 4 MCQs per word (synonym + antonym options)
- Track vocabulary growth

---

### 1.25 Data Interpretation Mini-Sets ⭐
**Priority: MEDIUM | Effort: Medium | Impact: Medium**

- Text-based tables/ASCII charts
- 3-4 quantitative questions per set
- Covers CLAT Quant section needs

---

## 🎯 Priority Tier 2: Core Study Enhancement Tools

### 2.1 Mind-Maps & Concept Maps ⭐⭐⭐
**Priority: HIGH | Effort: High | Impact: Maximum**

**Use Cases:**
- Constitutional law flow
- Procedure steps (Criminal/Civil)
- Conceptual relationships between doctrines
- Hierarchy of courts
- Types of rights/duties

**Technical Implementation:**
- Use Mermaid.js for flowcharts
- Interactive zoom/pan
- Topic-wise map library

**Route:** `/mind-maps`

---

### 2.2 Case Diary (Case Law Bank) ⭐⭐⭐
**Priority: HIGH | Effort: Medium | Impact: High**

**Structure per case:**
| Field | Description |
|-------|-------------|
| Case Name | Full citation |
| Facts | Brief factual summary |
| Issue | Legal question(s) |
| Judgment | Court's decision |
| Principle | Legal rule established |
| One-line Summary | Quick recall hook |

**Features:**
- 5-20 important cases per chapter
- Search by case name, principle, or topic
- Bookmark for revision
- Quiz mode on case facts

**Route:** `/case-diary`

---

### 2.3 One-Page Notes / Rapid Revision Sheets ⭐⭐⭐
**Priority: HIGH | Effort: Medium | Impact: Maximum**

**Per Chapter:**
- 10 bullet points max
- Key definitions
- Important sections/articles
- Landmark cases
- Common mistakes to avoid

Perfect for last-day revision.

**Route:** `/rapid-revision`

---

### 2.4 Comparative Tables ⭐⭐⭐
**Priority: HIGH | Effort: Low | Impact: High**

**Pre-built comparisons:**
| Topic A | vs | Topic B |
|---------|---|---------|
| Fundamental Rights | vs | DPSP |
| Civil Procedure | vs | Criminal Procedure |
| Bailable | vs | Non-Bailable |
| Summons Case | vs | Warrant Case |
| Tort | vs | Crime |
| Constitution | vs | Statute |
| Ratio Decidendi | vs | Obiter Dicta |

**Route:** `/comparisons`

---

### 2.5 Brain-Dump Mode (Blurting) ⭐⭐⭐
**Priority: HIGH | Effort: Low | Impact: Maximum**

**Flow:**
1. User clicks a topic
2. Blank page opens with timer
3. User writes everything they remember
4. Button reveals official notes for comparison
5. Highlights gaps in knowledge

**Research:** Retrieval practice is one of the most effective study techniques according to cognitive science.

**Route:** `/brain-dump`

---

### 2.6 Legal Maxims & Definitions Bank ⭐⭐⭐
**Priority: HIGH | Effort: Low | Impact: High**

**Structure:**
| Maxim | Meaning | Example |
|-------|---------|---------|
| Latin phrase | Plain English | Real case/situation |

**Features:**
- Searchable A-Z list
- 200+ legal terms
- Quiz mode
- Audio pronunciation (optional)

**Route:** `/maxims`

---

### 2.7 Statute Reader (Bare Act Simplified) ⭐⭐
**Priority: HIGH | Effort: High | Impact: High**

**Per Section:**
- Section number
- Exact wording (official text)
- Simple explanation
- 1 relevant case (if applicable)

**Covers:**
- Indian Constitution
- IPC
- CPC
- CrPC
- Evidence Act
- Contract Act
- Specific Relief Act

**Route:** `/bare-acts`

---

### 2.8 Flowcharts & Concept Maps (Static) ⭐⭐
**Priority: HIGH | Effort: Medium | Impact: High**

**Pre-built diagrams:**
- How a bill becomes law
- Hierarchy of courts
- Stages of criminal trial
- Types of rights
- Writ jurisdiction flow
- Appellate structure

Simple SVG/images - no video needed.

---

### 2.9 Written Practice Zone ⭐⭐
**Priority: MEDIUM | Effort: Medium | Impact: High**

**Answer Types:**
- Short notes (3-5 marks)
- Long answers (8-15 marks)
- Case explanations

**Features:**
- Text editor with word count
- Timer option
- Model answers revealed after submission
- Self-grading rubric

**Route:** `/written-practice`

---

### 2.10 Self-Explain / Teach-Back Mode (Feynman Technique) ⭐⭐
**Priority: HIGH | Effort: Low | Impact: Maximum**

**Flow:**
1. Read a law topic or case
2. Close the material
3. Write explanation as if teaching someone
4. Compare with original
5. Identify understanding gaps

**Research:** Feynman technique forces clarity and exposes knowledge gaps.

---

## 📚 Priority Tier 3: Knowledge Management Tools

### 3.1 Reverse Flashcards ⭐
**Priority: MEDIUM | Effort: Low | Impact: Medium**

**Format:**
- Front: Explanation/Definition
- Back: Term/Doctrine/Section

Opposite of normal flashcards - improves recognition.

---

### 3.2 Fill-in-the-Blanks (Section Style) ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

**Example:**
> "Every _____ shall be entitled to _____ unless _____ is present."

Perfect for exact wording retention of bare acts.

---

### 3.3 Keyword Highlighter Practice ⭐
**Priority: LOW | Effort: Medium | Impact: Medium**

**Flow:**
1. Show a legal paragraph
2. User highlights keywords only
3. Reveal solution
4. Compare accuracy

Trains exam writing skills.

---

### 3.4 True/False With Justification ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

Not just T/F - user must add 1-2 line justification.

Improves conceptual clarity.

---

### 3.5 Memory Chain ⭐
**Priority: LOW | Effort: Medium | Impact: Medium**

**Flow:**
1. Show 10 items (rights, doctrines, tests)
2. Hide after 12 seconds
3. User recalls in correct order

Tests sequential memory.

---

### 3.6 Definitions Mix-Up ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

Shuffle definitions and terms - user matches correctly.

**Categories:**
- Legal maxims
- Contract terms
- Constitutional definitions
- Procedural terms

---

### 3.7 Rank Order Challenge ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

User orders items correctly:
- Steps of passing a bill
- Hierarchy of courts
- Stages of investigation
- Appellate process

Very useful for procedural law.

---

### 3.8 Case-Outcome Predictor ⭐⭐
**Priority: MEDIUM | Effort: Medium | Impact: High**

**Flow:**
1. Show only case "facts"
2. User predicts outcome
3. Reveal actual judgment
4. Learn from comparison

Makes learning cases engaging.

---

### 3.9 Statute Navigation Practice ⭐
**Priority: LOW | Effort: Medium | Impact: Medium**

**Flow:**
1. Give chapter name + section range
2. User guesses which section appears where
3. Builds "Bare Act map memory"

---

### 3.10 One-Minute Breakdown ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

**Flow:**
1. Random topic appears
2. User types 1-minute summary
3. Reveal ideal 5-bullet summary
4. Compare and improve

---

### 3.11 Legal Timeline Builder ⭐⭐
**Priority: MEDIUM | Effort: Medium | Impact: High**

**Format:**
| Year | Event | Significance |
|------|-------|--------------|
| 1950 | Constitution enacted | Supreme law |
| 1973 | Kesavananda Bharati | Basic structure |

Great for historical context and memory.

**Route:** `/timeline`

---

### 3.12 Section-Map Cards ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

Small cards showing:
- "Section X deals with…"
- 1-line summary

Helps build memory of sections across subjects.

---

## 🎮 Priority Tier 4: Practice & Assessment Tools

### 4.1 Mini Tests (5 Mark, 10 Mark, Surprise Test) ⭐⭐⭐
**Priority: HIGH | Effort: Low | Impact: High**

**Quick test formats:**
- 5 MCQs
- 5 True/False
- 5 Match the following
- 1 case fact question

Small tests = more engagement.

**Route:** `/mini-tests`

---

### 4.2 Problem-Situation Bank ⭐⭐
**Priority: HIGH | Effort: Medium | Impact: High**

Mini real-life scenarios (2-3 lines):
- "A hits B with a stick… what offence?"
- "Govt restricts speech… which FR violated?"

Boosts application skills.

---

### 4.3 Match-the-Principle Tool ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: Medium**

Two columns:
- Column A: Principles
- Column B: Definitions/Examples

User drags/taps to match.

---

### 4.4 Find the Flaw ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

User reads short argument → selects the flaw:
- Strawman
- Ad hominem
- False analogy
- Circular argument
- Appeal to authority
- Slippery slope

Perfect for Logical Reasoning.

---

### 4.5 Legal Reasoning Steps Trainer (IRAC) ⭐⭐
**Priority: HIGH | Effort: Medium | Impact: High**

5-step template:
1. **I**ssue
2. **R**ule
3. **A**pplication
4. **E**xception
5. **C**onclusion

User fills all steps for practice questions.

---

### 4.6 Contradiction Spotter ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

Provide short legal arguments with one wrong point.
User finds the incorrect point.

Great for precision learning.

---

### 4.7 Topic Sorting Tool ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

Dump 20 mixed words (doctrines, rights, offences, cases).
User categorizes them into topic groups.

---

### 4.8 "Why is this wrong?" Tool ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

Show an incorrect option.
User must identify WHY it is wrong.

Improves elimination skills.

---

### 4.9 Passage Mapping Tool ⭐⭐
**Priority: MEDIUM | Effort: Medium | Impact: High**

User practices marking:
- Main idea
- Supporting idea
- Example
- Counterpoint

Increases reading accuracy massively.

---

### 4.10 Legal Application Marathon ⭐⭐
**Priority: HIGH | Effort: Low | Impact: High**

20 fact-based legal questions in a row, no breaks.
Perfect for Legal speed round practice.

---

### 4.11 Paraphrase Practice ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

Show a sentence → user selects correct paraphrased version.
CLAT uses paraphrasing heavily in English & Legal.

---

### 4.12 Argument Structure Cards ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

Show examples of:
- Premise
- Conclusion
- Counterargument
- Fallacy

User identifies which is which.

CLAT Logical Reasoning gold.

---

### 4.13 "If This, Then That" Logic Cards ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

Small cards for reasoning rules:
- If A → B
- If B false → A false
- If A but B not → contradiction

User applies them to mini questions.

---

### 4.14 Factor-Elimination Tool ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

User eliminates wrong options by marking them red.
Makes MCQ solving structured.

---

### 4.15 Micro-Passages (80-120 words) ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: Medium**

Ultra-short passages with 2 questions each.
Trains speed + attention.

---

### 4.16 Case Snippets (Super Short) ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

Each with:
- 2-line facts
- 1-line judgment
- 1 MCQ based on it

Fast and exam-oriented.

---

### 4.17 Fill-in-the-Principle ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

Show a fact situation but principle is missing.
User picks correct principle from list.

---

### 4.18 Inference Sniper ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

One-sentence inference questions.
Quick, deadly effective.

---

### 4.19 Legal Vocabulary List (200 Words) ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

Static list + mini-quiz:
- Habeas corpus
- Ordinance
- Quasi-judicial
- Tortfeasor
- Res judicata
- Mens rea

All CLAT-relevant vocabulary.

---

### 4.20 GK Grouping Tool ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

User groups items by category:
- Economy
- Science
- International
- Legal

Helps GK retention.

---

## 🏆 Priority Tier 5: Gamification & Engagement Tools

### 5.1 Daily Challenge / Streak System ⭐⭐⭐
**Priority: HIGH | Effort: Medium | Impact: Maximum**

One small task everyday:
- One case
- One maxim
- One mini test
- One flashcard set

Makes the app sticky.

*Already partially implemented via streak tracking.*

---

### 5.2 Keyword Bingo ⭐
**Priority: LOW | Effort: Medium | Impact: Medium**

Per chapter: 15-20 key terms
User clicks terms they studied → builds "completed board"

Helps revision tracking.

---

### 5.3 Formula Sheets / Rule Sheets ⭐⭐
**Priority: MEDIUM | Effort: Low | Impact: High**

Tiny cheat-sheet style pages:
- "How to answer case-based MCQs"
- "How to write a 5-mark law answer"
- "Flow for legal reasoning answers"
- "Time allocation strategy"

Text + small diagrams.

**Route:** `/formula-sheets`

---

### 5.4 Offline Download Pack ⭐⭐
**Priority: MEDIUM | Effort: High | Impact: High**

Downloadable content:
- Notes (PDF)
- Case lists
- Revision sheets
- Maxims bank

Perfect for low-internet students.

*Align with existing offline-first strategy in plan.md.*

---

### 5.5 Personal Subject-Attack Plans ⭐⭐
**Priority: MEDIUM | Effort: Medium | Impact: High**

Per law area (Constitutional, Contracts, Torts, Civil Procedure):
- Topics to cover
- How to summarize
- Number of mock questions
- When to revise

Ensures coverage, avoids randomness.

*Integrate with existing Study Planner.*

---

### 5.6 Structured Revision Cycles ⭐⭐
**Priority: MEDIUM | Effort: Medium | Impact: High**

Manual spaced repetition:
1. Read notes
2. Self-test
3. Rewrite important parts
4. Summarize
5. Repeat periodically

*Enhance existing Revision Wheel feature.*

---

### 5.7 Index/Study Cards (Paper-Based Style) ⭐
**Priority: LOW | Effort: Low | Impact: Medium**

One concept/statute/maxim per card.
Shuffle, sort, self-quiz interface.

Good for law vocabulary.

---

## 🗺️ Implementation Roadmap

### Phase 1: CLAT Emergency Sprint (Days 1-2)
> **Goal:** Maximum exam readiness features

| Day | Features to Ship |
|-----|------------------|
| 1 | Passage Sprint Trainer, CLAT Daily 25, GK One-Liners |
| 2 | Legal Reasoning Drill, Question-Type Drills, Fact vs Opinion Sorter |

### Phase 2: Quick Wins (Week 1)
- Brain-Dump Mode
- Comparative Tables
- Legal Maxims Bank
- Mini Tests
- Speed Reading Strip

### Phase 3: Core Enhancement (Weeks 2-3)
- Case Diary
- One-Page Notes
- Mind-Maps (basic)
- Written Practice Zone
- Error Analysis Tool

### Phase 4: Advanced Features (Month 1)
- Statute Reader
- Legal Timeline Builder
- Flowcharts Library
- Problem-Situation Bank
- Offline Download Pack

### Phase 5: Full Suite (Month 2+)
- All remaining tools
- AI-powered personalization
- Community features

---

## 🔧 Technical Considerations

### Database Schema Additions

```typescript
// New interfaces for research.md tools

interface PassageDrill {
  id: string;
  passage: string;
  wordCount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'english' | 'legal' | 'logical' | 'gk';
  questions: MCQ[];
  recommendedTime: number;
}

interface CaseLaw {
  id: string;
  caseName: string;
  citation: string;
  facts: string;
  issue: string;
  judgment: string;
  principle: string;
  oneLiner: string;
  topic: string;
  year: number;
}

interface LegalMaxim {
  id: string;
  latin: string;
  meaning: string;
  example: string;
  relatedCases?: string[];
}

interface ComparisonTable {
  id: string;
  title: string;
  topicA: string;
  topicB: string;
  rows: {
    aspect: string;
    valueA: string;
    valueB: string;
  }[];
}

interface BrainDumpSession {
  id: string;
  userId: string;
  topic: string;
  userContent: string;
  officialNotes: string;
  gaps: string[];
  timestamp: Date;
}

interface RevisionSheet {
  id: string;
  topic: string;
  category: string;
  bullets: string[];
  keyDefinitions: string[];
  importantSections: string[];
  landmarkCases: string[];
}

interface GKOneLiner {
  id: string;
  statement: string;
  category: 'events' | 'appointments' | 'awards' | 'laws' | 'schemes' | 'international' | 'sports';
  date: string;
  importance: 'high' | 'medium' | 'low';
}

interface ErrorPattern {
  userId: string;
  errorType: 'assumption' | 'fact_opinion' | 'principle_application' | 'vocabulary' | 'time_management' | 'careless';
  frequency: number;
  lastOccurred: Date;
  suggestedPractice: string;
}
```

### New Routes Structure

```
src/app/(app)/
├── passage-sprint/
│   └── page.tsx
├── daily-25/
│   └── page.tsx
├── question-types/
│   └── page.tsx
├── legal-drill/
│   └── page.tsx
├── gk-oneliners/
│   └── page.tsx
├── speed-reading/
│   └── page.tsx
├── brain-dump/
│   └── page.tsx
├── case-diary/
│   └── page.tsx
├── maxims/
│   └── page.tsx
├── comparisons/
│   └── page.tsx
├── rapid-revision/
│   └── page.tsx
├── bare-acts/
│   └── page.tsx
├── mind-maps/
│   └── page.tsx
├── mini-tests/
│   └── page.tsx
├── written-practice/
│   └── page.tsx
├── timeline/
│   └── page.tsx
├── formula-sheets/
│   └── page.tsx
└── error-analysis/
    └── page.tsx
```

### Component Library Additions

```
src/components/
├── passage-card.tsx
├── timer-display.tsx
├── irac-trainer.tsx
├── comparison-table.tsx
├── case-card.tsx
├── maxim-card.tsx
├── brain-dump-editor.tsx
├── revision-sheet.tsx
├── gk-oneliner-list.tsx
├── error-analysis-chart.tsx
├── mind-map-viewer.tsx
├── speed-reader.tsx
├── fact-opinion-sorter.tsx
├── parajumble-trainer.tsx
└── question-type-filter.tsx
```

---

## 📖 Research-Backed Learning Strategies

### 1. Retrieval Practice (Brain-Dump, Self-Testing)
**Research:** Testing yourself on material is more effective than re-reading. The "testing effect" strengthens memory traces.

**Implementation:** Brain-Dump Mode, Mini Tests, Blurting sessions.

### 2. Spaced Repetition
**Research:** Reviewing material at increasing intervals dramatically improves long-term retention.

**Implementation:** Revision Wheel integration, structured revision cycles.

### 3. Interleaving
**Research:** Mixing different topics/question types improves learning compared to blocked practice.

**Implementation:** CLAT Daily 25 (mixed sections), Mixed Stamina Test.

### 4. Elaborative Interrogation
**Research:** Asking "why" and "how" questions deepens understanding.

**Implementation:** True/False with Justification, "Why is this wrong?" tool.

### 5. Dual Coding
**Research:** Combining verbal and visual information enhances memory.

**Implementation:** Mind-Maps, Flowcharts, Visual Law diagrams.

### 6. Concrete Examples
**Research:** Abstract concepts become clearer with specific examples.

**Implementation:** Case Diary, Problem-Situation Bank, Legal Maxims with examples.

### 7. Generation Effect
**Research:** Information is better remembered when self-generated vs. passively read.

**Implementation:** Fill-in-the-blanks, Written Practice Zone, One-Minute Breakdown.

### 8. Desirable Difficulties
**Research:** Making learning slightly harder (without feedback delay) improves retention.

**Implementation:** Speed Reading with timer pressure, Marathon sessions.

---

## 📊 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Passage Speed | +20% improvement in 2 weeks | WPM tracking |
| Accuracy | 80%+ on question-type drills | Auto-calculated |
| Coverage | 100% topics attempted before exam | Progress tracker |
| Retention | 70%+ on revision quizzes | Spaced testing |
| Engagement | 7-day streak maintenance | Streak system |
| Error Reduction | 30% fewer repeated mistakes | Error DNA analysis |

---

## 🎯 Priority Summary for CLAT (Next 2 Days)

### MUST HAVE (Day 1)
1. ✅ Passage Sprint Trainer
2. ✅ CLAT Daily 25
3. ✅ GK One-Liners
4. ✅ Legal Reasoning Drill

### SHOULD HAVE (Day 2)
5. Question-Type Drills
6. Fact vs Opinion Sorter
7. Speed Reading Strip
8. Comparative Tables
9. Brain-Dump Mode

### NICE TO HAVE (Post-Exam)
- All remaining features
- Advanced analytics
- Community features

---

## 📝 Notes for Development Team

1. **Prioritize text-based features** - No video dependencies, faster to implement
2. **Use existing component library** - Leverage `@/components/ui` for consistency
3. **Mobile-first design** - Most users will access on phones
4. **Offline capability** - Students may have poor internet
5. **Progress persistence** - Save all attempts to track improvement
6. **AI integration** - Connect to existing Genkit flows where applicable

---

*Document Version: 1.0*
*Last Updated: December 4, 2025*
*Author: 7K Law Prep Development Team*
