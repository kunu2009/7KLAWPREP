import type { MCQ, Note, StudyEvent } from './types';

export const mcqs: MCQ[] = [
  {
    id: 'mcq-1',
    topic: 'Constitution',
    question: 'Who is known as the "Father of the Indian Constitution"?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B. R. Ambedkar', 'Sardar Vallabhbhai Patel'],
    correctAnswerIndex: 2,
    explanation: 'Dr. B. R. Ambedkar was the chairman of the Drafting Committee of the Constituent Assembly and played a pivotal role in drafting the Indian Constitution.',
  },
  {
    id: 'mcq-2',
    topic: 'Constitution',
    question: 'The Fundamental Rights in the Indian Constitution are inspired by the Constitution of which country?',
    options: ['USA', 'UK', 'Canada', 'Ireland'],
    correctAnswerIndex: 0,
    explanation: 'The concept of Fundamental Rights was borrowed from the Bill of Rights of the United States Constitution.',
  },
  {
    id: 'mcq-3',
    topic: 'Legal Aptitude',
    question: 'What does the legal principle "actus reus" refer to?',
    options: ['The guilty mind', 'The guilty act', 'The burden of proof', 'The right to remain silent'],
    correctAnswerIndex: 1,
    explanation: '"Actus reus" is a Latin term for the "guilty act." It is the physical element of a crime, as distinguished from the "mens rea" (guilty mind).',
  },
  {
    id: 'mcq-4',
    topic: 'Legal Aptitude',
    question: 'A contract entered into by a minor is considered:',
    options: ['Valid', 'Voidable', 'Void', 'Illegal'],
    correctAnswerIndex: 2,
    explanation: 'As per the Indian Contract Act, 1872, an agreement with a minor is void ab initio, meaning it is void from the very beginning.',
  },
  {
    id: 'mcq-5',
    topic: 'General Knowledge',
    question: 'The book "Discovery of India" was written by:',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Rabindranath Tagore', 'S. Radhakrishnan'],
    correctAnswerIndex: 1,
    explanation: 'Jawaharlal Nehru wrote "The Discovery of India" during his imprisonment at Ahmednagar fort in British India from 1942–1945.',
  },
  {
    id: 'mcq-6',
    topic: 'English',
    question: 'Choose the synonym for "ephemeral".',
    options: ['Eternal', 'Transient', 'Beautiful', 'Strong'],
    correctAnswerIndex: 1,
    explanation: 'Ephemeral means lasting for a very short time. "Transient" is the closest synonym.',
  },
  {
    id: 'mcq-7',
    topic: 'Current Affairs',
    question: 'Who is the current Chief Justice of India? (As of late 2023)',
    options: ['N. V. Ramana', 'U. U. Lalit', 'D. Y. Chandrachud', 'S. A. Bobde'],
    correctAnswerIndex: 2,
    explanation: 'Dhananjaya Y. Chandrachud assumed office as the 50th Chief Justice of India in November 2022.',
  },
  {
    id: 'mcq-8',
    topic: 'Logical Reasoning',
    question: 'If all cats are mammals, and all mammals have hearts, then:',
    options: ['All cats have hearts', 'Some cats have hearts', 'No cats have hearts', 'Cannot be determined'],
    correctAnswerIndex: 0,
    explanation: 'This is a simple syllogism. If A is B, and B is C, then A must be C. Therefore, all cats have hearts.',
  },
  {
    id: 'mcq-9',
    topic: 'Constitution',
    question: 'Which article of the Constitution deals with the Right to Equality?',
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
    correctAnswerIndex: 0,
    explanation: 'Article 14 of the Indian Constitution guarantees to every person the right to equality before the law or the equal protection of the laws within the territory of India.',
  },
  {
    id: 'mcq-10',
    topic: 'Legal Aptitude',
    question: 'The term "defamation" refers to:',
    options: ['Harming someone\'s reputation', 'Physical assault', 'Theft of property', 'Breach of contract'],
    correctAnswerIndex: 0,
    explanation: 'Defamation is the act of communicating false statements about a person that injure the reputation of that person.',
  },
  {
    id: 'mcq-11',
    topic: 'General Knowledge',
    question: 'Which of these is not a permanent member of the UN Security Council?',
    options: ['China', 'France', 'Germany', 'Russia'],
    correctAnswerIndex: 2,
    explanation: 'The permanent members of the UN Security Council are China, France, Russia, the United Kingdom, and the United States. Germany is not a permanent member.',
  },
  {
    id: 'mcq-12',
    topic: 'English',
    question: 'What is the antonym of "garrulous"?',
    options: ['Talkative', 'Loquacious', 'Taciturn', 'Friendly'],
    correctAnswerIndex: 2,
    explanation: '"Garrulous" means excessively talkative. "Taciturn" means reserved or uncommunicative in speech, making it the correct antonym.',
  },
];

export const notes: Note[] = [
  {
    topic: 'Constitution',
    content: `The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers, and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens. Key areas to study include: Preamble, Fundamental Rights & Duties, Directive Principles of State Policy (DPSP), Union & State Legislature, Judiciary, and Emergency provisions.`,
    links: [
      { title: 'Constitution of India (Full Text)', url: 'https://legislative.gov.in/constitution-of-india' },
      { title: 'Important Articles of Indian Constitution', url: 'https://byjus.com/ias/important-articles-in-constitution-of-india/' },
    ],
  },
  {
    topic: 'Legal Aptitude',
    content: `Legal Aptitude tests your problem-solving ability and understanding of legal principles. You'll be given legal principles and a factual situation, and you must apply the principle to the facts. Key topics: Law of Torts (defamation, negligence), Law of Contracts (essentials of a contract, breach), and basic concepts of Criminal Law (actus reus, mens rea).`,
    links: [{ title: 'Introduction to Law of Torts', url: 'https://www.law.cornell.edu/wex/tort' }],
  },
  {
    topic: 'General Knowledge',
    content: `General Knowledge covers a vast area including History, Geography, General Science, and Economics. For law entrance, focus on static GK related to civics, Indian history (especially the freedom struggle), and basic world geography.`,
    links: [{ title: 'Lucent\'s General Knowledge (Book)', url: 'https://www.amazon.in/Lucents-General-Knowledge-S-Pandey/dp/9384761544' }],
  },
  {
    topic: 'English',
    content: `The English section assesses your language proficiency. It typically includes Reading Comprehension, Grammar (Tenses, Articles, Prepositions), Vocabulary (Synonyms, Antonyms), and identifying errors in sentences. A strong reading habit is crucial.`,
    links: [{ title: 'Grammar Exercises', url: 'https://www.perfect-english-grammar.com/grammar-exercises.html' }],
  },
  {
    topic: 'Current Affairs',
    content: `This section focuses on recent events of national and international importance. Follow major newspapers and news portals daily. Pay special attention to significant legal and political developments, major government schemes, and international treaties.`,
    links: [
      { title: 'The Hindu', url: 'https://www.thehindu.com/' },
      { title: 'The Indian Express', url: 'https://indianexpress.com/' },
    ],
  },
  {
    topic: 'Logical Reasoning',
    content: `Logical Reasoning is divided into Analytical Reasoning and Critical Reasoning. Analytical reasoning includes puzzles, arrangements, and sequences. Critical reasoning involves arguments, assumptions, and conclusions. Practice is key to improving speed and accuracy.`,
    links: [{ title: 'Practice Logical Reasoning Questions', url: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/' }],
  },
];

export const studyEvents: StudyEvent[] = [
    {
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        title: 'Revise Fundamental Rights',
        description: 'Go through Articles 12-35 of the Constitution.'
    },
    {
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        title: 'Practice 50 MCQs on Torts',
        description: 'Focus on negligence and defamation.'
    },
    {
        date: new Date(new Date().setDate(new Date().getDate() + 3)),
        title: 'Read a newspaper editorial',
        description: 'Summarize the main arguments.'
    }
];
