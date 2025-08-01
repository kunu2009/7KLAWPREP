
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
  userNotes?: string;
}

export interface StudyEvent {
  date: Date;
  title: string;
  description: string;
}

export interface ProgressState {
  attempted: number;
  correct: number;
  history: { [mcqId: string]: 'correct' | 'incorrect' };
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

export type CurrentAffairsCategory = 
  | 'National Affairs'
  | 'International Affairs'
  | 'Legal & Judicial News'
  | 'Government Schemes & Policies'
  | 'Science & Tech'
  | 'Sports'
  | 'Awards & Rankings'
  | 'Bills, Acts & Amendments'
  | 'Appointments & Resignations'
  | 'Important Days & Events';

export interface CurrentAffairsItem {
  id: string;
  headline: string;
  category: CurrentAffairsCategory;
  summary: string;
  importance: string;
  date: string; // Using string to avoid timezone issues, format "YYYY-MM-DD"
  probableQuestion: string;
}

export interface MonthlyCurrentAffairs {
  month: string; // e.g., "May 2024"
  items: CurrentAffairsItem[];
}

export interface VisualLawItem {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    aiHint: string;
}
