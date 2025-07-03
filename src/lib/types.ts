
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
