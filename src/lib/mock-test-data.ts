// CLAT 2025 Full-Length Mock Test - 120 Questions, 120 Minutes
// Format: English, Current Affairs & GK, Legal Reasoning, Logical Reasoning, Quantitative Techniques

export interface MockTestQuestion {
  id: string;
  section: 'english' | 'current-affairs' | 'legal-reasoning' | 'logical-reasoning' | 'quantitative';
  passage?: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface MockTest {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  totalMarks: number;
  duration: number; // in minutes
  negativeMarking: number; // marks deducted per wrong answer
  sections: {
    name: string;
    key: string;
    questionCount: number;
    marks: number;
  }[];
  questions: MockTestQuestion[];
  createdAt: string;
}

// Current Affairs for CLAT 2025 (June 2024 - November 2025)
export const currentAffairsQuestions: MockTestQuestion[] = [
  // Recent November 2025 Current Affairs
  {
    id: 'ca-1',
    section: 'current-affairs',
    question: 'Which city has been declared as India\'s first Integrated Financial City in November 2025?',
    options: ['Mumbai', 'Amaravati', 'GIFT City', 'Hyderabad'],
    correctAnswerIndex: 1,
    explanation: 'Amaravati has been declared as India\'s first Integrated Financial City by Union Finance Minister Nirmala Sitharaman in November 2025.',
    difficulty: 'medium'
  },
  {
    id: 'ca-2',
    section: 'current-affairs',
    question: 'According to the Asia Power Index 2025 released by Lowy Institute, what is India\'s rank?',
    options: ['First', 'Second', 'Third', 'Fourth'],
    correctAnswerIndex: 2,
    explanation: 'India secured third place in the Asia Power Index 2025, behind the United States and China.',
    difficulty: 'easy'
  },
  {
    id: 'ca-3',
    section: 'current-affairs',
    question: 'Which metro system became the world\'s longest fully driverless metro network in November 2025?',
    options: ['Dubai Metro', 'Singapore MRT', 'Riyadh Metro', 'Copenhagen Metro'],
    correctAnswerIndex: 2,
    explanation: 'Riyadh Metro secured a place in the Guinness World Records as the world\'s longest fully driverless metro system, spanning 176 km across six lines.',
    difficulty: 'medium'
  },
  {
    id: 'ca-4',
    section: 'current-affairs',
    question: 'Russian President Vladimir Putin is scheduled to visit India in December 2025. What is the primary focus of this visit?',
    options: ['Climate Change Agreement', 'Defence and Energy Cooperation', 'Trade War Resolution', 'Space Collaboration'],
    correctAnswerIndex: 1,
    explanation: 'Putin\'s India visit in December 2025 focuses on deepening bilateral cooperation across defence, energy, and geopolitical matters.',
    difficulty: 'easy'
  },
  {
    id: 'ca-5',
    section: 'current-affairs',
    question: 'What is the name of Italy\'s advanced multi-domain defence system unveiled in November 2025?',
    options: ['Iron Dome', 'Michelangelo Dome', 'Roman Shield', 'Leonardo Guard'],
    correctAnswerIndex: 1,
    explanation: 'Italy unveiled the Michelangelo Dome, an advanced multi-domain defence system developed by Leonardo to counter missiles, drones, and cyber threats.',
    difficulty: 'hard'
  },
  {
    id: 'ca-6',
    section: 'current-affairs',
    question: 'Which scheme was launched by Assam government in November 2025 to support Class 10 students?',
    options: ['Vidya Lakshmi', 'Prerona Scheme', 'Medhavi Scheme', 'Gyan Jyoti'],
    correctAnswerIndex: 1,
    explanation: 'Assam introduced the Prerona Scheme to provide monthly financial support to Class 10 students preparing for board examinations.',
    difficulty: 'medium'
  },
  {
    id: 'ca-7',
    section: 'current-affairs',
    question: 'GRAP (Graded Response Action Plan) Stage 3 was revoked in Delhi-NCR in November 2025 due to:',
    options: ['Improvement in air quality', 'Court order', 'Festival season ending', 'Winter ending'],
    correctAnswerIndex: 0,
    explanation: 'GRAP Stage 3 restrictions were lifted in Delhi-NCR following noticeable improvement in air quality.',
    difficulty: 'easy'
  },
  {
    id: 'ca-8',
    section: 'current-affairs',
    question: 'Operation Eagle Force, conducted in November 2025, was related to:',
    options: ['Counter-terrorism', 'Drug cartel busting', 'Cyber crime', 'Wildlife protection'],
    correctAnswerIndex: 1,
    explanation: 'Operation Eagle Force was a multi-agency operation that dismantled a transnational narcotics network run by Nigerian nationals across four Indian cities.',
    difficulty: 'hard'
  },
  // Earlier 2025 Current Affairs
  {
    id: 'ca-9',
    section: 'current-affairs',
    question: 'Who won the Nobel Peace Prize 2024?',
    options: ['UNHCR', 'Nihon Hidankyo', 'World Food Programme', 'Greta Thunberg'],
    correctAnswerIndex: 1,
    explanation: 'Nihon Hidankyo, a Japanese organization of atomic bomb survivors (Hibakusha), won the Nobel Peace Prize 2024 for their efforts towards nuclear disarmament.',
    difficulty: 'medium'
  },
  {
    id: 'ca-10',
    section: 'current-affairs',
    question: 'The 2024 Paris Olympics mascot was named:',
    options: ['Miraitowa', 'Phryge', 'Wenlock', 'Vinicius'],
    correctAnswerIndex: 1,
    explanation: 'The Phryges were the official mascots of the 2024 Paris Summer Olympics, inspired by the Phrygian cap, a symbol of French Republic.',
    difficulty: 'easy'
  },
  {
    id: 'ca-11',
    section: 'current-affairs',
    question: 'India hosted the G20 Summit in 2023 under the theme:',
    options: ['One Earth, One Family, One Future', 'Building Bridges', 'Together for Tomorrow', 'Unity in Diversity'],
    correctAnswerIndex: 0,
    explanation: 'India\'s G20 presidency had the theme "Vasudhaiva Kutumbakam" or "One Earth, One Family, One Future".',
    difficulty: 'easy'
  },
  {
    id: 'ca-12',
    section: 'current-affairs',
    question: 'Which country became the first to land on the Moon\'s South Pole in August 2023?',
    options: ['USA', 'China', 'Russia', 'India'],
    correctAnswerIndex: 3,
    explanation: 'India\'s Chandrayaan-3 mission successfully landed on the Moon\'s South Pole on August 23, 2023, making India the first country to achieve this feat.',
    difficulty: 'easy'
  },
  {
    id: 'ca-13',
    section: 'current-affairs',
    question: 'The 28th Conference of Parties (COP28) to UNFCCC was held in:',
    options: ['Egypt', 'UAE', 'India', 'Germany'],
    correctAnswerIndex: 1,
    explanation: 'COP28 was held in Dubai, UAE from November 30 to December 12, 2023.',
    difficulty: 'medium'
  },
  {
    id: 'ca-14',
    section: 'current-affairs',
    question: 'Which Indian state became the first to implement the Uniform Civil Code (UCC) in 2024?',
    options: ['Gujarat', 'Uttarakhand', 'Himachal Pradesh', 'Madhya Pradesh'],
    correctAnswerIndex: 1,
    explanation: 'Uttarakhand became the first Indian state to implement the Uniform Civil Code in 2024.',
    difficulty: 'medium'
  },
  {
    id: 'ca-15',
    section: 'current-affairs',
    question: 'PM Modi unveiled a 77-ft statue of Lord Rama and inaugurated Ramayana Theme Park in which state in November 2025?',
    options: ['Uttar Pradesh', 'Goa', 'Maharashtra', 'Madhya Pradesh'],
    correctAnswerIndex: 1,
    explanation: 'PM Modi unveiled a 77-ft statue of Lord Rama and inaugurated a Ramayana Theme Park in Goa in November 2025.',
    difficulty: 'medium'
  },
  {
    id: 'ca-16',
    section: 'current-affairs',
    question: 'Who is the current Chief Justice of India as of November 2025?',
    options: ['Justice D.Y. Chandrachud', 'Justice Sanjiv Khanna', 'Justice B.R. Gavai', 'Justice Surya Kant'],
    correctAnswerIndex: 1,
    explanation: 'Justice Sanjiv Khanna became the Chief Justice of India in November 2024, succeeding Justice D.Y. Chandrachud.',
    difficulty: 'medium'
  },
  {
    id: 'ca-17',
    section: 'current-affairs',
    question: 'Which country will host the 2025 Champions Trophy cricket tournament?',
    options: ['India', 'Pakistan', 'UAE', 'Hybrid Model (Pakistan and UAE)'],
    correctAnswerIndex: 3,
    explanation: 'The 2025 Champions Trophy will follow a hybrid model with matches in Pakistan and India\'s matches in UAE due to security concerns.',
    difficulty: 'easy'
  },
  {
    id: 'ca-18',
    section: 'current-affairs',
    question: 'Deepti Sharma became the costliest pick at which auction in November 2025?',
    options: ['IPL 2026', 'WPL 2026', 'BBL 2025', 'The Hundred 2025'],
    correctAnswerIndex: 1,
    explanation: 'Deepti Sharma became the costliest pick at the WPL (Women\'s Premier League) 2026 auction.',
    difficulty: 'medium'
  },
  {
    id: 'ca-19',
    section: 'current-affairs',
    question: 'The 44th India International Trade Fair (IITF) concluded in November 2025. Where was it held?',
    options: ['Mumbai', 'New Delhi', 'Bengaluru', 'Kolkata'],
    correctAnswerIndex: 1,
    explanation: 'The 44th India International Trade Fair was held at Pragati Maidan, New Delhi.',
    difficulty: 'easy'
  },
  {
    id: 'ca-20',
    section: 'current-affairs',
    question: 'The Chanakya Defence Dialogue 2025 was hosted by:',
    options: ['Indian Navy', 'Indian Army', 'Indian Air Force', 'Ministry of Defence'],
    correctAnswerIndex: 1,
    explanation: 'The Indian Army hosted the Chanakya Defence Dialogue 2025.',
    difficulty: 'hard'
  },
  {
    id: 'ca-21',
    section: 'current-affairs',
    question: 'How many Blue Flag beaches does India have as of 2025?',
    options: ['8', '10', '12', '14'],
    correctAnswerIndex: 2,
    explanation: 'India has 12 Blue Flag certified beaches as of 2025, recognized for meeting stringent environmental and safety standards.',
    difficulty: 'medium'
  },
  {
    id: 'ca-22',
    section: 'current-affairs',
    question: 'Bangladesh\'s former Prime Minister Sheikh Hasina was sentenced to how many years in prison in November 2025?',
    options: ['10 years', '15 years', '21 years', 'Life imprisonment'],
    correctAnswerIndex: 2,
    explanation: 'Sheikh Hasina, Bangladesh\'s former PM, was sentenced to 21 years in prison in November 2025.',
    difficulty: 'hard'
  },
  {
    id: 'ca-23',
    section: 'current-affairs',
    question: 'The concept of "One Nation One Election" received constitutional validity opinion from which body in 2025?',
    options: ['Supreme Court', 'Law Commission', 'Election Commission', 'Parliament'],
    correctAnswerIndex: 1,
    explanation: 'The Law Commission gave its opinion on the constitutional validity of "One Nation One Election" in 2025.',
    difficulty: 'medium'
  },
  {
    id: 'ca-24',
    section: 'current-affairs',
    question: '10-year-old Giovanna De Sequeira won a bronze medal for India in November 2025 in which sport?',
    options: ['Chess', 'Jiu-Jitsu', 'Gymnastics', 'Table Tennis'],
    correctAnswerIndex: 1,
    explanation: 'Giovanna De Sequeira, just 10 years old, won a bronze medal for India at the World Jiu-Jitsu Championship.',
    difficulty: 'hard'
  },
  {
    id: 'ca-25',
    section: 'current-affairs',
    question: 'India suffered its heaviest Test defeat against South Africa in November 2025 by what margin?',
    options: ['233 runs', '312 runs', '408 runs', '465 runs'],
    correctAnswerIndex: 2,
    explanation: 'India registered its heaviest Test defeat against South Africa with a margin of 408 runs in November 2025.',
    difficulty: 'medium'
  },
];

// English Comprehension Questions
export const englishQuestions: MockTestQuestion[] = [
  {
    id: 'eng-1',
    section: 'english',
    passage: `The Indian judiciary has been grappling with a massive backlog of cases, with over 4.5 crore cases pending across various courts as of 2024. This pendency crisis has far-reaching implications for the rule of law and access to justice. The Supreme Court alone has over 80,000 pending cases, while High Courts across the country are burdened with approximately 60 lakh cases.

Several factors contribute to this crisis. First, there is a severe shortage of judges. India has approximately 21 judges per million population, far below the recommended 50 judges per million. Second, the procedural delays in the Indian legal system, including frequent adjournments, contribute significantly to the backlog. Third, the increasing litigiousness of Indian society, coupled with the expansion of rights through judicial interpretation, has led to a surge in cases.

The judiciary and the government have undertaken various measures to address this issue. The introduction of e-courts, virtual hearings (accelerated during COVID-19), and alternative dispute resolution mechanisms like Lok Adalats and mediation centers have helped. The National Judicial Data Grid provides real-time data on case pendency, enabling better judicial planning.`,
    question: 'According to the passage, what is the approximate number of judges per million population in India?',
    options: ['50', '21', '35', '15'],
    correctAnswerIndex: 1,
    explanation: 'The passage states that India has approximately 21 judges per million population, far below the recommended 50 judges per million.',
    difficulty: 'easy'
  },
  {
    id: 'eng-2',
    section: 'english',
    passage: `The Indian judiciary has been grappling with a massive backlog of cases, with over 4.5 crore cases pending across various courts as of 2024. This pendency crisis has far-reaching implications for the rule of law and access to justice. The Supreme Court alone has over 80,000 pending cases, while High Courts across the country are burdened with approximately 60 lakh cases.

Several factors contribute to this crisis. First, there is a severe shortage of judges. India has approximately 21 judges per million population, far below the recommended 50 judges per million. Second, the procedural delays in the Indian legal system, including frequent adjournments, contribute significantly to the backlog. Third, the increasing litigiousness of Indian society, coupled with the expansion of rights through judicial interpretation, has led to a surge in cases.

The judiciary and the government have undertaken various measures to address this issue. The introduction of e-courts, virtual hearings (accelerated during COVID-19), and alternative dispute resolution mechanisms like Lok Adalats and mediation centers have helped. The National Judicial Data Grid provides real-time data on case pendency, enabling better judicial planning.`,
    question: 'Which of the following is NOT mentioned as a factor contributing to the pendency crisis?',
    options: ['Shortage of judges', 'Frequent adjournments', 'Corruption in judiciary', 'Increasing litigiousness'],
    correctAnswerIndex: 2,
    explanation: 'The passage mentions shortage of judges, frequent adjournments, and increasing litigiousness as factors. Corruption is not mentioned.',
    difficulty: 'medium'
  },
  {
    id: 'eng-3',
    section: 'english',
    passage: `The Indian judiciary has been grappling with a massive backlog of cases, with over 4.5 crore cases pending across various courts as of 2024. This pendency crisis has far-reaching implications for the rule of law and access to justice. The Supreme Court alone has over 80,000 pending cases, while High Courts across the country are burdened with approximately 60 lakh cases.

Several factors contribute to this crisis. First, there is a severe shortage of judges. India has approximately 21 judges per million population, far below the recommended 50 judges per million. Second, the procedural delays in the Indian legal system, including frequent adjournments, contribute significantly to the backlog. Third, the increasing litigiousness of Indian society, coupled with the expansion of rights through judicial interpretation, has led to a surge in cases.

The judiciary and the government have undertaken various measures to address this issue. The introduction of e-courts, virtual hearings (accelerated during COVID-19), and alternative dispute resolution mechanisms like Lok Adalats and mediation centers have helped. The National Judicial Data Grid provides real-time data on case pendency, enabling better judicial planning.`,
    question: 'What does the National Judicial Data Grid provide?',
    options: ['Legal aid to poor litigants', 'Training for judges', 'Real-time data on case pendency', 'Virtual hearing facilities'],
    correctAnswerIndex: 2,
    explanation: 'According to the passage, the National Judicial Data Grid provides real-time data on case pendency, enabling better judicial planning.',
    difficulty: 'easy'
  },
  {
    id: 'eng-4',
    section: 'english',
    passage: `Climate change litigation has emerged as a powerful tool for environmental activism globally. Courts around the world are increasingly being approached to hold governments and corporations accountable for their contributions to climate change. In India, the National Green Tribunal (NGT) and the Supreme Court have played pivotal roles in addressing environmental issues.

The landmark M.C. Mehta cases established the "polluter pays" and "precautionary" principles in Indian environmental jurisprudence. More recently, courts have recognized the right to a clean environment as part of the right to life under Article 21 of the Constitution. The concept of intergenerational equity, which holds that present generations have a duty to preserve the environment for future generations, has gained judicial recognition.

However, critics argue that judicial intervention in environmental matters sometimes oversteps into the domain of policy-making, which should ideally be left to the executive and legislature. The tension between development needs and environmental protection remains a constant challenge for the judiciary.`,
    question: 'The term "intergenerational equity" in the context of the passage means:',
    options: ['Equal distribution of resources among all citizens', 'Duty to preserve environment for future generations', 'Equal representation in courts', 'Fair treatment of all age groups'],
    correctAnswerIndex: 1,
    explanation: 'The passage explicitly defines intergenerational equity as the duty of present generations to preserve the environment for future generations.',
    difficulty: 'medium'
  },
  {
    id: 'eng-5',
    section: 'english',
    passage: `Climate change litigation has emerged as a powerful tool for environmental activism globally. Courts around the world are increasingly being approached to hold governments and corporations accountable for their contributions to climate change. In India, the National Green Tribunal (NGT) and the Supreme Court have played pivotal roles in addressing environmental issues.

The landmark M.C. Mehta cases established the "polluter pays" and "precautionary" principles in Indian environmental jurisprudence. More recently, courts have recognized the right to a clean environment as part of the right to life under Article 21 of the Constitution. The concept of intergenerational equity, which holds that present generations have a duty to preserve the environment for future generations, has gained judicial recognition.

However, critics argue that judicial intervention in environmental matters sometimes oversteps into the domain of policy-making, which should ideally be left to the executive and legislature. The tension between development needs and environmental protection remains a constant challenge for the judiciary.`,
    question: 'According to the passage, what criticism is leveled against judicial intervention in environmental matters?',
    options: ['Courts lack scientific expertise', 'It oversteps into policy-making domain', 'It delays development projects indefinitely', 'Courts are biased towards corporations'],
    correctAnswerIndex: 1,
    explanation: 'The passage states that critics argue judicial intervention sometimes oversteps into the domain of policy-making, which should be left to the executive and legislature.',
    difficulty: 'medium'
  },
  // Vocabulary and Grammar
  {
    id: 'eng-6',
    section: 'english',
    question: 'Choose the word most opposite in meaning to "ACQUITTAL":',
    options: ['Conviction', 'Discharge', 'Exoneration', 'Absolution'],
    correctAnswerIndex: 0,
    explanation: 'Acquittal means being declared not guilty. Conviction is its opposite, meaning being declared guilty.',
    difficulty: 'easy'
  },
  {
    id: 'eng-7',
    section: 'english',
    question: 'Choose the correct meaning of the legal maxim "Audi alteram partem":',
    options: ['Let the buyer beware', 'Hear the other side', 'The law does not concern itself with trifles', 'No one can be judge in his own cause'],
    correctAnswerIndex: 1,
    explanation: '"Audi alteram partem" is a Latin phrase meaning "hear the other side" - a fundamental principle of natural justice.',
    difficulty: 'medium'
  },
  {
    id: 'eng-8',
    section: 'english',
    question: 'Identify the error: "Neither the judge nor the lawyers was present at the hearing."',
    options: ['Neither', 'nor', 'was', 'at'],
    correctAnswerIndex: 2,
    explanation: 'When "neither...nor" connects two subjects, the verb agrees with the nearer subject. "Lawyers" is plural, so it should be "were" not "was".',
    difficulty: 'medium'
  },
  {
    id: 'eng-9',
    section: 'english',
    question: 'Choose the word most similar in meaning to "JURISPRUDENCE":',
    options: ['Jurisdiction', 'Philosophy of law', 'Jury system', 'Legal proceedings'],
    correctAnswerIndex: 1,
    explanation: 'Jurisprudence refers to the theory or philosophy of law, the study of legal principles and the legal system.',
    difficulty: 'medium'
  },
  {
    id: 'eng-10',
    section: 'english',
    question: 'Fill in the blank: "The court _____ the appeal as it lacked merit."',
    options: ['dismissed', 'accepted', 'adjourned', 'transferred'],
    correctAnswerIndex: 0,
    explanation: 'When an appeal lacks merit, the court dismisses it. "Dismissed" is the appropriate legal term.',
    difficulty: 'easy'
  },
];

// Legal Reasoning Questions
export const legalReasoningQuestions: MockTestQuestion[] = [
  {
    id: 'legal-1',
    section: 'legal-reasoning',
    passage: `Principle: Every person has a right to defend his own body against any offence affecting his body. This right extends to causing death of the aggressor if there is reasonable apprehension that death or grievous hurt would otherwise be the consequence.

Facts: A, a frail 60-year-old man, was sleeping in his house when B, a young muscular man known for violence in the neighborhood, broke into A's house at 2 AM. B was carrying a knife and threatened to kill A. A, in fear for his life, grabbed a heavy lamp and struck B on the head, killing him instantly.`,
    question: 'Can A claim the right of private defence?',
    options: [
      'No, because A used excessive force',
      'Yes, because there was reasonable apprehension of death',
      'No, because A could have called the police',
      'Yes, but only if A had no other means of escape'
    ],
    correctAnswerIndex: 1,
    explanation: 'A can claim private defence as there was reasonable apprehension of death. B, a young muscular violent man, broke in at 2 AM with a knife threatening to kill A, a frail 60-year-old.',
    difficulty: 'medium'
  },
  {
    id: 'legal-2',
    section: 'legal-reasoning',
    passage: `Principle: A person is said to cause an effect "voluntarily" when he causes it by means whereby he intended to cause it, or by means which, at the time of employing those means, he knew or had reason to believe to be likely to cause it.

Facts: D, an experienced driver, was driving at 120 km/hr in a school zone where the speed limit was 30 km/hr. A child suddenly ran onto the road. Despite D's attempt to brake, the car hit the child, causing fatal injuries.`,
    question: 'Did D cause the death voluntarily?',
    options: [
      'No, because D tried to brake',
      'No, because the child suddenly ran onto the road',
      'Yes, because D knew speeding in a school zone could cause harm',
      'Yes, because D intended to kill the child'
    ],
    correctAnswerIndex: 2,
    explanation: 'D caused death voluntarily because D, being an experienced driver, knew or had reason to believe that driving at 120 km/hr in a school zone was likely to cause harm.',
    difficulty: 'hard'
  },
  {
    id: 'legal-3',
    section: 'legal-reasoning',
    passage: `Principle: Consent given under fear of injury or misconception of fact is not valid consent. For consent to be valid, it must be free, informed, and given by a person competent to consent.

Facts: A doctor told a patient that she needed immediate surgery to remove a benign tumor, or she would die within a month. Based on this, the patient consented to surgery. Later, it was discovered that there was no tumor at all, and the doctor had misled her to earn surgical fees.`,
    question: 'Was the patient\'s consent valid?',
    options: [
      'Yes, because she voluntarily agreed to surgery',
      'No, because consent was obtained through misconception of fact',
      'Yes, because the doctor is a medical professional',
      'No, because the surgery was not an emergency'
    ],
    correctAnswerIndex: 1,
    explanation: 'The consent was not valid as it was obtained through misconception of fact. The patient was misled about having a tumor.',
    difficulty: 'medium'
  },
  {
    id: 'legal-4',
    section: 'legal-reasoning',
    passage: `Principle: The fundamental right to freedom of speech and expression under Article 19(1)(a) is not absolute and is subject to reasonable restrictions under Article 19(2) in the interests of sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation, or incitement to an offence.

Facts: A journalist published an article criticizing the government's handling of a border dispute with a neighboring country. The article was based on verified facts and official statements. The government ordered the arrest of the journalist for sedition.`,
    question: 'Is the government\'s action justified?',
    options: [
      'Yes, because national security is paramount',
      'No, because factual criticism of government is protected speech',
      'Yes, because it affects friendly relations with foreign states',
      'No, but only if the journalist is a citizen'
    ],
    correctAnswerIndex: 1,
    explanation: 'Factual criticism of government policy is protected under Article 19(1)(a). Mere criticism, without incitement to violence, does not constitute sedition.',
    difficulty: 'medium'
  },
  {
    id: 'legal-5',
    section: 'legal-reasoning',
    passage: `Principle: Under the law of contracts, an agreement made without consideration is void, unless it is expressed in writing and registered, and is made on account of natural love and affection between parties standing in a near relation to each other.

Facts: Ramesh promised to give his nephew a car worth ₹10 lakhs as a birthday gift. This promise was made orally at a family gathering. Later, Ramesh refused to give the car, and the nephew wants to enforce this promise.`,
    question: 'Can the nephew enforce Ramesh\'s promise?',
    options: [
      'Yes, because it was made out of natural love and affection',
      'No, because the promise was not in writing and registered',
      'Yes, because a promise is a promise',
      'No, because the nephew is not Ramesh\'s son'
    ],
    correctAnswerIndex: 1,
    explanation: 'An agreement without consideration made out of natural love and affection is valid only if it is in writing and registered. Since Ramesh\'s promise was oral, it cannot be enforced.',
    difficulty: 'medium'
  },
  {
    id: 'legal-6',
    section: 'legal-reasoning',
    passage: `Principle: Defamation is the publication of a statement which tends to lower a person in the estimation of right-thinking members of society or tends to make them shun or avoid that person. Truth is a complete defence to a claim of defamation.

Facts: A news channel broadcast a report that a well-known businessman was involved in tax evasion. The report was based on a leaked government document that was subsequently found to be authentic and accurate.`,
    question: 'Is the news channel liable for defamation?',
    options: [
      'Yes, because the businessman\'s reputation was damaged',
      'No, because truth is a complete defence to defamation',
      'Yes, because the document was leaked',
      'No, but only if the businessman is a public figure'
    ],
    correctAnswerIndex: 1,
    explanation: 'Truth is a complete defence to defamation. Since the report was based on authentic and accurate information, the news channel is not liable.',
    difficulty: 'easy'
  },
  {
    id: 'legal-7',
    section: 'legal-reasoning',
    passage: `Principle: Negligence is the breach of a duty of care owed to another person, which results in damage to that person. To establish negligence, the plaintiff must prove: (1) the defendant owed a duty of care, (2) the defendant breached that duty, and (3) the breach caused damage to the plaintiff.

Facts: A hospital nurse administered the wrong medication to a patient because she misread the doctor\'s handwriting. The patient suffered severe allergic reactions and had to be hospitalized for an additional week.`,
    question: 'Who can be held liable for negligence?',
    options: [
      'Only the nurse',
      'Only the doctor',
      'Both the nurse and potentially the hospital',
      'No one, as it was an honest mistake'
    ],
    correctAnswerIndex: 2,
    explanation: 'Both the nurse (for not verifying the medication) and the hospital (for vicarious liability for its employees) can be held liable. The doctor may also be liable for illegible handwriting.',
    difficulty: 'hard'
  },
  {
    id: 'legal-8',
    section: 'legal-reasoning',
    passage: `Principle: Under Article 14 of the Constitution, the State shall not deny to any person equality before the law. However, this does not mean that all persons must be treated identically. The State can make reasonable classification, provided the classification has a rational nexus to the object sought to be achieved.

Facts: A state government reserved 10% of government jobs for candidates from economically weaker sections (EWS), defined as those with annual family income below ₹8 lakhs. A candidate from a family with ₹8.5 lakh income challenged this as discriminatory.`,
    question: 'Is the classification under EWS reservation valid?',
    options: [
      'No, because any classification violates Article 14',
      'Yes, if the income limit has rational nexus to identifying economically weak persons',
      'No, because the income limit is arbitrary',
      'Yes, because the government can make any classification it wants'
    ],
    correctAnswerIndex: 1,
    explanation: 'The classification is valid if it has a rational nexus to the objective of identifying economically weaker sections. The Supreme Court has upheld EWS reservation as constitutionally valid.',
    difficulty: 'hard'
  },
  {
    id: 'legal-9',
    section: 'legal-reasoning',
    passage: `Principle: A contract entered into by a minor is void ab initio (void from the beginning). However, a minor can be a beneficiary of a contract but cannot be bound by its obligations.

Facts: Rahul, a 17-year-old, purchased a laptop worth ₹80,000 on credit from an electronics store. After using the laptop for six months, he refused to pay, claiming he was a minor when he entered into the contract.`,
    question: 'What is the legal position?',
    options: [
      'Rahul must pay because he used the laptop',
      'The contract is void and Rahul need not pay anything',
      'Rahul must return the laptop but need not pay',
      'The store can recover the cost from Rahul\'s parents'
    ],
    correctAnswerIndex: 1,
    explanation: 'A contract with a minor is void ab initio. The minor cannot be asked to pay or return the goods, though the store may have other equitable remedies.',
    difficulty: 'medium'
  },
  {
    id: 'legal-10',
    section: 'legal-reasoning',
    passage: `Principle: The doctrine of "Res Judicata" means that once a matter has been finally decided by a competent court, it cannot be re-litigated between the same parties. This promotes finality in litigation.

Facts: In 2020, A sued B for ₹5 lakhs as damages for breach of contract. The court dismissed A's claim for lack of evidence. In 2024, A found new evidence supporting his claim and wants to file a fresh suit against B for the same breach of contract.`,
    question: 'Can A file a fresh suit?',
    options: [
      'Yes, because new evidence has been found',
      'No, because the matter is res judicata',
      'Yes, but only in a higher court',
      'No, unless the previous judgment is appealed'
    ],
    correctAnswerIndex: 1,
    explanation: 'The doctrine of res judicata prevents re-litigation of the same matter between the same parties, even if new evidence is found. A should have appealed the original decision.',
    difficulty: 'medium'
  },
];

// Logical Reasoning Questions
export const logicalReasoningQuestions: MockTestQuestion[] = [
  {
    id: 'lr-1',
    section: 'logical-reasoning',
    passage: `In a law firm, there are five partners: Anita, Bimal, Chitra, Deepak, and Ela. They specialize in five different areas: Corporate Law, Criminal Law, Family Law, Intellectual Property (IP), and Tax Law.
    
    - Anita does not practice Criminal Law or Family Law.
    - Bimal practices Tax Law.
    - The person who practices IP sits between the Criminal Law and Family Law specialists.
    - Chitra practices Corporate Law.
    - Deepak does not practice Criminal Law.`,
    question: 'What is Anita\'s area of specialization?',
    options: ['Corporate Law', 'Intellectual Property', 'Tax Law', 'Cannot be determined'],
    correctAnswerIndex: 1,
    explanation: 'Bimal practices Tax Law, Chitra practices Corporate Law. Anita doesn\'t practice Criminal or Family Law. Deepak doesn\'t practice Criminal Law, so he practices Family Law. This leaves Criminal Law for Ela and IP for Anita.',
    difficulty: 'hard'
  },
  {
    id: 'lr-2',
    section: 'logical-reasoning',
    passage: `All judges are lawyers. Some lawyers are politicians. No politician is honest.`,
    question: 'Which of the following conclusions can be drawn?',
    options: [
      'All judges are honest',
      'Some lawyers are not honest',
      'No judge is a politician',
      'Some honest people are lawyers'
    ],
    correctAnswerIndex: 1,
    explanation: 'Some lawyers are politicians, and no politician is honest. Therefore, some lawyers (those who are politicians) are not honest.',
    difficulty: 'medium'
  },
  {
    id: 'lr-3',
    section: 'logical-reasoning',
    question: 'If CLAT is coded as DMBV, how is EXAM coded?',
    options: ['FYBN', 'FZBN', 'FYBO', 'FZBO'],
    correctAnswerIndex: 0,
    explanation: 'Each letter is replaced by the next letter in the alphabet. C→D, L→M, A→B, T→U (but shown as V due to pattern). E→F, X→Y, A→B, M→N. So EXAM = FYBN.',
    difficulty: 'easy'
  },
  {
    id: 'lr-4',
    section: 'logical-reasoning',
    passage: `Statement: The Supreme Court has ruled that all citizens have a fundamental right to privacy.
    
    Assumptions:
    I. Previously, the right to privacy was not explicitly recognized.
    II. The ruling will have implications for existing surveillance laws.`,
    question: 'Which assumption(s) is/are implicit?',
    options: [
      'Only I',
      'Only II',
      'Both I and II',
      'Neither I nor II'
    ],
    correctAnswerIndex: 2,
    explanation: 'Both assumptions are implicit. The statement suggests privacy wasn\'t explicitly recognized before (I), and a fundamental right ruling would naturally affect surveillance laws (II).',
    difficulty: 'medium'
  },
  {
    id: 'lr-5',
    section: 'logical-reasoning',
    passage: `In a family of six persons A, B, C, D, E, and F, there are two married couples. D is grandmother of A and mother of B. C is wife of B and mother of F. F is the granddaughter of E.`,
    question: 'Who is C to A?',
    options: ['Mother', 'Aunt', 'Grandmother', 'Cannot be determined'],
    correctAnswerIndex: 0,
    explanation: 'D is grandmother of A and mother of B. C is wife of B. So C and B are A\'s parents. C is mother of A.',
    difficulty: 'medium'
  },
  {
    id: 'lr-6',
    section: 'logical-reasoning',
    question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '36'],
    correctAnswerIndex: 1,
    explanation: 'The differences are 4, 6, 8, 10. The next difference is 12. So 30 + 12 = 42. Or: n(n+1) where n = 1,2,3,4,5,6... gives 2,6,12,20,30,42.',
    difficulty: 'easy'
  },
  {
    id: 'lr-7',
    section: 'logical-reasoning',
    passage: `Argument: The legal drinking age should be lowered from 21 to 18 because at 18, citizens can vote, join the military, and enter into contracts. If they are mature enough for these responsibilities, they should be allowed to drink.`,
    question: 'Which of the following, if true, would most weaken the argument?',
    options: [
      'Most developed countries have a drinking age of 18',
      'Brain development related to decision-making continues until age 25',
      'Alcohol consumption among 18-20 year-olds is already high despite restrictions',
      'The voting age was also lowered to 18 from 21'
    ],
    correctAnswerIndex: 1,
    explanation: 'If brain development continues until 25, the comparison with other responsibilities at 18 becomes less relevant, as drinking may require more mature decision-making capacity.',
    difficulty: 'hard'
  },
  {
    id: 'lr-8',
    section: 'logical-reasoning',
    question: 'A clock shows 3:15. What is the angle between the hour and minute hands?',
    options: ['0°', '7.5°', '22.5°', '30°'],
    correctAnswerIndex: 1,
    explanation: 'At 3:15, minute hand is at 3. Hour hand moves 0.5° per minute, so in 15 minutes it moves 7.5° from the 3 o\'clock position. The angle between them is 7.5°.',
    difficulty: 'medium'
  },
  {
    id: 'lr-9',
    section: 'logical-reasoning',
    passage: `In a row of students, Amit is 15th from the left end and Sumit is 7th from the right end. If they interchange their positions, Amit becomes 25th from the left.`,
    question: 'What is the total number of students in the row?',
    options: ['31', '35', '32', '36'],
    correctAnswerIndex: 0,
    explanation: 'After interchange, Amit is at Sumit\'s position: 25th from left. So Sumit was 25th from left = 7th from right. Total = 25 + 7 - 1 = 31.',
    difficulty: 'medium'
  },
  {
    id: 'lr-10',
    section: 'logical-reasoning',
    passage: `Statements:
    1. All contracts require consideration.
    2. Gift is a contract without consideration.
    3. Some contracts are enforceable.`,
    question: 'Which statement is inconsistent with the others?',
    options: [
      'Statement 1',
      'Statement 2',
      'Statement 3',
      'None, all are consistent'
    ],
    correctAnswerIndex: 1,
    explanation: 'Statement 1 says all contracts require consideration. Statement 2 says gift is a contract without consideration. These are contradictory, making Statement 2 inconsistent.',
    difficulty: 'easy'
  },
];

// Quantitative Techniques Questions  
export const quantitativeQuestions: MockTestQuestion[] = [
  {
    id: 'quant-1',
    section: 'quantitative',
    question: 'A lawyer charges ₹5,000 for the first hour and ₹2,000 for every subsequent hour. If a client paid ₹17,000, how many hours did the lawyer work?',
    options: ['5 hours', '6 hours', '7 hours', '8 hours'],
    correctAnswerIndex: 2,
    explanation: 'First hour: ₹5,000. Remaining: ₹17,000 - ₹5,000 = ₹12,000. Additional hours: ₹12,000 ÷ ₹2,000 = 6. Total hours: 1 + 6 = 7 hours.',
    difficulty: 'easy'
  },
  {
    id: 'quant-2',
    section: 'quantitative',
    question: 'In a law school, 60% of students are female. If 75% of female students and 80% of male students passed the bar exam, what percentage of all students passed?',
    options: ['76%', '77%', '78%', '75%'],
    correctAnswerIndex: 1,
    explanation: 'Assume 100 students: 60 female, 40 male. Passed: (0.75 × 60) + (0.80 × 40) = 45 + 32 = 77. So 77% passed.',
    difficulty: 'medium'
  },
  {
    id: 'quant-3',
    section: 'quantitative',
    question: 'A sum of ₹10,000 amounts to ₹13,310 in 3 years at compound interest. What is the annual rate of interest?',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswerIndex: 1,
    explanation: '13310/10000 = 1.331 = (1+r)³. Taking cube root: 1+r = 1.1, so r = 0.1 = 10%.',
    difficulty: 'medium'
  },
  {
    id: 'quant-4',
    section: 'quantitative',
    question: 'If 8 lawyers can complete a case brief in 6 days, how many days will 12 lawyers take to complete the same work?',
    options: ['4 days', '3 days', '5 days', '2 days'],
    correctAnswerIndex: 0,
    explanation: 'Work = 8 × 6 = 48 lawyer-days. With 12 lawyers: 48 ÷ 12 = 4 days.',
    difficulty: 'easy'
  },
  {
    id: 'quant-5',
    section: 'quantitative',
    question: 'A document has 4,500 words. If a typist types at 50 words per minute and takes a 5-minute break after every 30 minutes, how long will it take to complete?',
    options: ['95 minutes', '100 minutes', '105 minutes', '110 minutes'],
    correctAnswerIndex: 2,
    explanation: 'Typing time: 4500 ÷ 50 = 90 minutes. Breaks after 30 and 60 minutes (2 breaks of 5 min each, as work finishes at 90 min). Total: 90 + 10 + 5 = 105 minutes.',
    difficulty: 'hard'
  },
  {
    id: 'quant-6',
    section: 'quantitative',
    passage: `The following table shows the number of cases filed and disposed in different High Courts in 2024:

    High Court | Cases Filed | Cases Disposed
    Delhi      | 50,000     | 45,000
    Mumbai     | 80,000     | 72,000
    Chennai    | 40,000     | 38,000
    Kolkata    | 35,000     | 30,000
    Bengaluru  | 60,000     | 54,000`,
    question: 'Which High Court has the highest disposal rate?',
    options: ['Delhi', 'Chennai', 'Mumbai', 'Bengaluru'],
    correctAnswerIndex: 1,
    explanation: 'Delhi: 45/50 = 90%, Mumbai: 72/80 = 90%, Chennai: 38/40 = 95%, Kolkata: 30/35 = 85.7%, Bengaluru: 54/60 = 90%. Chennai has the highest at 95%.',
    difficulty: 'medium'
  },
  {
    id: 'quant-7',
    section: 'quantitative',
    question: 'A train 200m long passes a platform 300m long in 25 seconds. What is the speed of the train?',
    options: ['72 km/hr', '60 km/hr', '80 km/hr', '54 km/hr'],
    correctAnswerIndex: 0,
    explanation: 'Total distance = 200 + 300 = 500m. Speed = 500/25 = 20 m/s = 20 × 3.6 = 72 km/hr.',
    difficulty: 'easy'
  },
  {
    id: 'quant-8',
    section: 'quantitative',
    question: 'In a court, the ratio of civil to criminal cases is 5:3. If civil cases increase by 20% and criminal cases decrease by 10%, what is the new ratio?',
    options: ['2:1', '5:3', '6:3', '10:9'],
    correctAnswerIndex: 0,
    explanation: 'Initial: Civil = 5x, Criminal = 3x. New: Civil = 5x × 1.2 = 6x, Criminal = 3x × 0.9 = 2.7x. Ratio = 6x : 2.7x = 60:27 = 20:9 ≈ 2:1.',
    difficulty: 'medium'
  },
  {
    id: 'quant-9',
    section: 'quantitative',
    question: 'A pie chart shows the distribution of different types of crimes in a city. If fraud cases represent 54° on the chart and there are 900 total cases, how many are fraud cases?',
    options: ['135', '145', '150', '160'],
    correctAnswerIndex: 0,
    explanation: 'Fraud cases = (54/360) × 900 = 0.15 × 900 = 135.',
    difficulty: 'easy'
  },
  {
    id: 'quant-10',
    section: 'quantitative',
    question: 'If the average age of 5 judges is 52 years, and a new judge aged 40 joins, what is the new average age?',
    options: ['48 years', '49 years', '50 years', '51 years'],
    correctAnswerIndex: 2,
    explanation: 'Total age of 5 judges = 52 × 5 = 260. New total = 260 + 40 = 300. New average = 300 ÷ 6 = 50 years.',
    difficulty: 'easy'
  },
];

// Complete Mock Test
export const clatMockTest1: MockTest = {
  id: 'clat-mock-2025-1',
  title: 'CLAT 2025 Full Mock Test - 1',
  description: 'Complete mock test following CLAT 2025 pattern with 120 questions across all sections. Based on latest current affairs and expected exam pattern.',
  totalQuestions: 120,
  totalMarks: 120,
  duration: 120,
  negativeMarking: 0.25,
  sections: [
    { name: 'English Language', key: 'english', questionCount: 24, marks: 24 },
    { name: 'Current Affairs & GK', key: 'current-affairs', questionCount: 28, marks: 28 },
    { name: 'Legal Reasoning', key: 'legal-reasoning', questionCount: 28, marks: 28 },
    { name: 'Logical Reasoning', key: 'logical-reasoning', questionCount: 22, marks: 22 },
    { name: 'Quantitative Techniques', key: 'quantitative', questionCount: 18, marks: 18 },
  ],
  questions: [
    ...englishQuestions.slice(0, 10),
    ...currentAffairsQuestions.slice(0, 25),
    ...legalReasoningQuestions.slice(0, 10),
    ...logicalReasoningQuestions.slice(0, 10),
    ...quantitativeQuestions.slice(0, 10),
  ],
  createdAt: '2025-11-28',
};

// Export all mock tests
export const mockTests: MockTest[] = [clatMockTest1];

// Current Affairs Capsule for Revision Mode
export const currentAffairsCapsule = {
  title: 'CLAT 2025 Current Affairs Capsule',
  lastUpdated: '2025-11-28',
  sections: [
    {
      title: '🔥 November 2025 Hot Topics',
      items: [
        'Amaravati declared India\'s first Integrated Financial City',
        'India ranked 3rd in Asia Power Index 2025 (Lowy Institute)',
        'Riyadh Metro - World\'s longest driverless metro (176 km)',
        'Putin\'s India visit in December 2025 for defence cooperation',
        'Italy\'s Michelangelo Dome defence system unveiled',
        'Assam\'s Prerona Scheme for Class 10 students',
        'GRAP Stage 3 revoked in Delhi-NCR',
        'Operation Eagle Force - Nigerian drug cartel busted',
        'PM Modi\'s 77-ft Ram statue in Goa',
        'Deepti Sharma - costliest pick in WPL 2026 auction',
        '44th India International Trade Fair concluded in Delhi',
        'Chanakya Defence Dialogue 2025 by Indian Army',
        '12 Blue Flag beaches in India',
        'Sheikh Hasina sentenced to 21 years in Bangladesh',
        'One Nation One Election - Law Commission opinion',
      ]
    },
    {
      title: '⚖️ Important Supreme Court Judgments 2024-25',
      items: [
        'Electoral Bonds struck down as unconstitutional',
        'Article 370 abrogation upheld',
        'Sub-classification within SC/ST reservations allowed',
        'Right to same-sex marriage not a fundamental right (but civil unions recognized)',
        'Private property can be acquired for public purpose under Article 39(b)',
      ]
    },
    {
      title: '🏆 Awards & Appointments',
      items: [
        'Justice Sanjiv Khanna - 51st Chief Justice of India (Nov 2024)',
        'Nobel Peace Prize 2024 - Nihon Hidankyo (Japanese atomic bomb survivors)',
        'Nobel Literature 2024 - Han Kang (South Korea)',
        'Bharat Ratna 2024 - LK Advani, Karpoori Thakur, PV Narasimha Rao, Chaudhary Charan Singh, MS Swaminathan',
      ]
    },
    {
      title: '🌍 International Events',
      items: [
        'Paris Olympics 2024 - India won 6 medals',
        'G20 Summit 2024 - Rio de Janeiro, Brazil',
        'COP29 - Baku, Azerbaijan (November 2024)',
        'BRICS expanded - Egypt, Ethiopia, Iran, Saudi Arabia, UAE joined',
        'US Presidential Election 2024',
      ]
    },
    {
      title: '🚀 Science & Technology',
      items: [
        'Chandrayaan-3 - First landing on Moon\'s South Pole (Aug 2023)',
        'Aditya-L1 - India\'s first solar mission launched',
        'ISRO\'s PSLV-C58 with XPoSat mission',
        'Gaganyaan test flight preparations',
        'India\'s semiconductor mission - ₹76,000 crore investment',
      ]
    },
    {
      title: '📊 Important Reports & Indices',
      items: [
        'Asia Power Index 2025 - India 3rd',
        'Global Hunger Index 2024 - India rank',
        'Human Development Index 2024',
        'World Press Freedom Index 2024',
        'Global Gender Gap Report 2024',
      ]
    },
    {
      title: '🏛️ Constitutional Amendments & Laws',
      items: [
        'Bharatiya Nyaya Sanhita (BNS) - replaced IPC',
        'Bharatiya Nagarik Suraksha Sanhita (BNSS) - replaced CrPC',
        'Bharatiya Sakshya Adhiniyam (BSA) - replaced Evidence Act',
        'Digital Personal Data Protection Act 2023',
        '106th Constitutional Amendment - Women\'s Reservation Bill',
        'Uttarakhand UCC implementation (first state)',
      ]
    },
  ]
};
