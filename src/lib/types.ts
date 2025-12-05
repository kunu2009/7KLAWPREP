
export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  topic: string;
}

export interface Note {
  topic: string;
  category: 'Constitution' | 'Legal Aptitude' | 'Legal Maxims' | 'General Knowledge' | 'English' | 'Current Affairs' | 'Logical Reasoning';
  content: string;
  links: { title: string; url: string }[];
}

export interface StudyEvent {
  date: Date;
  title: string;
  description: string;
}

export interface TopicProgress {
  attempted: number;
  correct: number;
}

export interface ProgressState {
  attempted: number;
  correct: number;
  history: { [mcqId: string]: 'correct' | 'incorrect' };
  // Streak tracking
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string | null;
  // Topic-wise breakdown (Error DNA / Weakness Heatmap)
  topicProgress: { [topic: string]: TopicProgress };
}

export interface Flashcard {
  id: string;
  term: string;
  definition: string;
  topic: string;
}

export interface Reel {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  steps: {
    title: string;
    content: string;
  }[];
}

export interface CaseSimulation {
  id: string;
  title: string;
  scenario: string;
  playerRole: string;
}

// ==================== CLAT Study Tools Types ====================

export interface PassageDrill {
  id: string;
  passage: string;
  wordCount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'english' | 'legal' | 'logical' | 'gk';
  questions: MCQ[];
  recommendedTime: number; // in seconds
}

export interface LegalDrill {
  id: string;
  principle: string;
  factSituation: string;
  options: string[];
  correctAnswer: number;
  reasoning: string;
  topic: string;
  iracBreakdown: {
    issue: string;
    rule: string;
    application: string;
    conclusion: string;
  };
}

export interface LegalMaxim {
  id: string;
  latin: string;
  meaning: string;
  example: string;
  topic: string;
  relatedCases?: string[];
}

export interface ComparisonTable {
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

export interface GKOneLiner {
  id: string;
  statement: string;
  category: 'events' | 'appointments' | 'awards' | 'laws' | 'schemes' | 'international' | 'sports' | 'science';
  date: string;
  importance: 'high' | 'medium' | 'low';
}

export interface BrainDumpTopic {
  id: string;
  title: string;
  category: string;
  officialNotes: string[];
  keyPoints: string[];
}

export interface CaseLaw {
  id: string;
  caseName: string;
  citation: string;
  year: number;
  facts: string;
  issue: string;
  judgment: string;
  principle: string;
  oneLiner: string;
  topic: string;
}
