
import type { MCQ, Note, StudyEvent, Flashcard } from './types';

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
  {
    id: 'mcq-13',
    topic: 'Constitution',
    question: "Which amendment to the Constitution is often called the 'Mini-Constitution'?",
    options: ['42nd Amendment', '44th Amendment', '24th Amendment', '73rd Amendment'],
    correctAnswerIndex: 0,
    explanation: 'The 42nd Amendment Act, 1976, is known as the "Mini-Constitution" because it made widespread and significant changes to the Constitution.',
  },
  {
    id: 'mcq-14',
    topic: 'Legal Aptitude',
    question: 'What is the standard of proof required in a criminal case for the prosecution?',
    options: ['Preponderance of probabilities', 'Beyond a reasonable doubt', 'Clear and convincing evidence', 'Some credible evidence'],
    correctAnswerIndex: 1,
    explanation: 'In criminal law, the prosecution has the burden of proving the defendant\'s guilt "beyond a reasonable doubt," which is the highest standard of proof.',
  },
  {
    id: 'mcq-15',
    topic: 'Current Affairs',
    question: 'India\'s first mission to study the Sun is named:',
    options: ['Surya-1', 'Chandrayaan-3', 'Gaganyaan', 'Aditya-L1'],
    correctAnswerIndex: 3,
    explanation: 'Aditya-L1 is the first Indian space-based observatory-class solar mission to study the Sun.',
  },
  {
    id: 'mcq-16',
    topic: 'Logical Reasoning',
    question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '46'],
    correctAnswerIndex: 1,
    explanation: 'The pattern is n*(n+1): 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30, so the next is 6*7=42.',
  },
  {
    id: 'mcq-17',
    topic: 'General Knowledge',
    question: 'Where is the headquarters of the International Court of Justice located?',
    options: ['New York, USA', 'Geneva, Switzerland', 'The Hague, Netherlands', 'Paris, France'],
    correctAnswerIndex: 2,
    explanation: 'The International Court of Justice (ICJ) has its seat at the Peace Palace in The Hague, Netherlands.',
  },
  {
    id: 'mcq-18',
    topic: 'English',
    question: 'What does the idiom "to hit the nail on the head" mean?',
    options: ['To make a mistake', 'To do or say something exactly right', 'To work very hard', 'To give up'],
    correctAnswerIndex: 1,
    explanation: 'The idiom means to describe a situation or problem with perfect accuracy.',
  },
  {
    id: 'mcq-19',
    topic: 'Constitution',
    question: 'How long did it take the Constituent Assembly to draft the Constitution of India?',
    options: ['1 year, 10 months, 12 days', '2 years, 11 months, 18 days', '3 years, 5 months, 26 days', '4 years, 2 months, 5 days'],
    correctAnswerIndex: 1,
    explanation: 'The Constituent Assembly took 2 years, 11 months, and 18 days to finalize the Indian Constitution.',
  },
  {
    id: 'mcq-20',
    topic: 'Legal Aptitude',
    question: 'The legal term "obiter dicta" refers to:',
    options: ['The legally binding part of a judgment', 'A saying by the way that is not legally binding', 'The final order of the court', 'A previously decided case'],
    correctAnswerIndex: 1,
    explanation: '"Obiter dicta" are remarks or observations made by a judge that are not essential to the decision and are not legally binding as precedent.',
  },
  {
    id: 'mcq-21',
    topic: 'Current Affairs',
    question: 'The G20 Summit in 2023 was hosted by which country?',
    options: ['Brazil', 'South Africa', 'India', 'Indonesia'],
    correctAnswerIndex: 2,
    explanation: 'India hosted the 18th G20 Heads of State and Government Summit in New Delhi in September 2023.',
  },
  {
    id: 'mcq-22',
    topic: 'Logical Reasoning',
    question: 'A man points to a photograph and says, "The lady in the photograph is my nephew\'s maternal grandmother." How is the lady in the photograph related to the man\'s sister who has no other sister?',
    options: ['Cousin', 'Sister-in-law', 'Mother', 'Mother-in-law'],
    correctAnswerIndex: 2,
    explanation: 'My nephew\'s maternal grandmother is my mother. The lady is the man\'s mother.',
  },
  {
    id: 'mcq-23',
    topic: 'English',
    question: 'Choose the correct antonym for "mitigate".',
    options: ['Alleviate', 'Lessen', 'Aggravate', 'Soothe'],
    correctAnswerIndex: 2,
    explanation: 'To mitigate is to make something less severe or painful. To "aggravate" is to make a problem worse, which is the direct opposite.',
  },
  {
    id: 'mcq-24',
    topic: 'General Knowledge',
    question: 'Who was the first woman to become a judge of the Supreme Court of India?',
    options: ['Leila Seth', 'Anna Chandy', 'M. Fathima Beevi', 'Sujata Manohar'],
    correctAnswerIndex: 2,
    explanation: 'Justice M. Fathima Beevi was the first female judge appointed to the Supreme Court of India in 1989.',
  }
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

export const flashcards: Flashcard[] = [
  { id: 'fc-1', term: 'Habeas Corpus', definition: 'A writ requiring a person under arrest to be brought before a judge or into court, especially to secure the person\'s release unless lawful grounds are shown for their detention.', topic: 'Legal Writs' },
  { id: 'fc-2', term: 'Mens Rea', definition: 'The intention or knowledge of wrongdoing that constitutes part of a crime, as opposed to the action or conduct of the accused (actus reus).', topic: 'Criminal Law' },
  { id: 'fc-3', term: 'Stare Decisis', definition: 'The legal principle of determining points in litigation according to precedent.', topic: 'Legal Principles' },
  { id: 'fc-4', term: 'Caveat Emptor', definition: 'The principle that the buyer alone is responsible for checking the quality and suitability of goods before a purchase is made.', topic: 'Contract Law' },
  { id: 'fc-5', term: 'Void ab initio', definition: 'A contract or legal document that is void from the very beginning.', topic: 'Contract Law' },
  { id: 'fc-6', term: 'Doli Incapax', definition: 'A legal presumption that a child under a certain age is incapable of forming criminal intent.', topic: 'Criminal Law' },
  { id: 'fc-7', term: 'Amicus Curiae', definition: 'An impartial adviser, often voluntary, to a court of law in a particular case. Translates to "friend of the court".', topic: 'Legal Roles'},
  { id: 'fc-8', term: 'Ratio Decidendi', definition: 'The rule of law on which a judicial decision is based. It is the legally binding part of a judgment.', topic: 'Legal Principles'},
];
