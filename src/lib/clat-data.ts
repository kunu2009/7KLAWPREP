import type { PassageDrill, LegalDrill, LegalMaxim, ComparisonTable, GKOneLiner, BrainDumpTopic, CaseLaw } from './types';

// ==================== PASSAGE DRILLS ====================
export const passageDrills: PassageDrill[] = [
  {
    id: 'passage-1',
    passage: `The doctrine of separation of powers is a fundamental principle in the Constitution of India, though not strictly followed. The Constitution divides the functions of the government into three branches: the Legislature, the Executive, and the Judiciary. Each branch has its own distinct powers and responsibilities. The Legislature is responsible for making laws, the Executive for implementing them, and the Judiciary for interpreting them. This separation ensures that no single branch becomes too powerful and that there are checks and balances within the system. However, in India, there is a functional overlap between these organs, making the separation more flexible than in countries like the United States.`,
    wordCount: 108,
    difficulty: 'easy',
    category: 'legal',
    recommendedTime: 180,
    questions: [
      {
        id: 'p1-q1',
        topic: 'Constitution',
        question: 'According to the passage, what is the primary purpose of separation of powers?',
        options: [
          'To create more government jobs',
          'To ensure no single branch becomes too powerful',
          'To make laws quickly',
          'To reduce government spending'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage states that separation ensures "no single branch becomes too powerful and that there are checks and balances within the system."'
      },
      {
        id: 'p1-q2',
        topic: 'Constitution',
        question: 'How does India\'s separation of powers differ from the United States?',
        options: [
          'India has no separation at all',
          'India has stricter separation',
          'India has more flexible separation with functional overlap',
          'Both countries have identical systems'
        ],
        correctAnswerIndex: 2,
        explanation: 'The passage mentions that "in India, there is a functional overlap between these organs, making the separation more flexible than in countries like the United States."'
      },
      {
        id: 'p1-q3',
        topic: 'Constitution',
        question: 'Which branch is responsible for interpreting laws?',
        options: ['Legislature', 'Executive', 'Judiciary', 'All three equally'],
        correctAnswerIndex: 2,
        explanation: 'The passage clearly states that "the Judiciary for interpreting them [laws]."'
      }
    ]
  },
  {
    id: 'passage-2',
    passage: `Freedom of speech and expression under Article 19(1)(a) of the Indian Constitution is not an absolute right. It is subject to reasonable restrictions under Article 19(2), which include restrictions in the interest of sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation, and incitement to an offence. The Supreme Court has consistently held that while freedom of speech is fundamental to democracy, it must be balanced against other societal interests. The test of reasonableness is applied by courts to determine whether a restriction is constitutionally valid.`,
    wordCount: 104,
    difficulty: 'medium',
    category: 'legal',
    recommendedTime: 180,
    questions: [
      {
        id: 'p2-q1',
        topic: 'Constitution',
        question: 'Which Article provides for restrictions on freedom of speech?',
        options: ['Article 19(1)(a)', 'Article 19(2)', 'Article 21', 'Article 14'],
        correctAnswerIndex: 1,
        explanation: 'The passage states restrictions are provided "under Article 19(2)."'
      },
      {
        id: 'p2-q2',
        topic: 'Constitution',
        question: 'What test do courts apply to check if a restriction is valid?',
        options: ['Popularity test', 'Reasonableness test', 'Majority test', 'Economic test'],
        correctAnswerIndex: 1,
        explanation: 'The passage mentions "The test of reasonableness is applied by courts."'
      },
      {
        id: 'p2-q3',
        topic: 'Constitution',
        question: 'Which of the following is NOT mentioned as a ground for restriction?',
        options: ['Public order', 'Defamation', 'Economic interests', 'Decency or morality'],
        correctAnswerIndex: 2,
        explanation: 'Economic interests are not mentioned in the list of grounds for restriction under Article 19(2).'
      }
    ]
  },
  {
    id: 'passage-3',
    passage: `Climate change poses unprecedented challenges to global governance and international law. The Paris Agreement of 2015 marked a significant milestone in climate diplomacy, with 196 parties adopting a legally binding international treaty. The agreement aims to limit global warming to well below 2 degrees Celsius, preferably to 1.5 degrees, compared to pre-industrial levels. Each country submits Nationally Determined Contributions (NDCs) outlining their climate action plans. However, critics argue that the agreement lacks strong enforcement mechanisms, making compliance largely voluntary. The principle of common but differentiated responsibilities acknowledges that developed nations bear greater historical responsibility for emissions and should lead mitigation efforts.`,
    wordCount: 103,
    difficulty: 'medium',
    category: 'gk',
    recommendedTime: 180,
    questions: [
      {
        id: 'p3-q1',
        topic: 'Current Affairs',
        question: 'What temperature limit does the Paris Agreement aim to achieve?',
        options: ['Below 3°C', 'Below 2°C, preferably 1.5°C', 'Exactly 2°C', 'Below 1°C'],
        correctAnswerIndex: 1,
        explanation: 'The passage states the agreement "aims to limit global warming to well below 2 degrees Celsius, preferably to 1.5 degrees."'
      },
      {
        id: 'p3-q2',
        topic: 'Current Affairs',
        question: 'What are NDCs in the context of the Paris Agreement?',
        options: [
          'National Development Committees',
          'Nationally Determined Contributions',
          'Nuclear Disarmament Clauses',
          'Natural Disaster Controls'
        ],
        correctAnswerIndex: 1,
        explanation: 'NDCs stands for "Nationally Determined Contributions outlining their climate action plans."'
      },
      {
        id: 'p3-q3',
        topic: 'Current Affairs',
        question: 'What is a major criticism of the Paris Agreement?',
        options: [
          'Too few countries signed',
          'Lacks strong enforcement mechanisms',
          'Temperature targets too strict',
          'Only applies to developing nations'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage notes that "critics argue that the agreement lacks strong enforcement mechanisms."'
      }
    ]
  },
  {
    id: 'passage-4',
    passage: `The concept of "mens rea" or guilty mind is fundamental to criminal law. For most crimes, the prosecution must prove not only that the accused committed the act (actus reus) but also that they had the requisite mental state. Different offences require different levels of mens rea: intention (the highest), knowledge, recklessness, or negligence (the lowest). Strict liability offences are an exception where mens rea is not required—the mere commission of the act is sufficient for conviction. These are typically regulatory offences concerning public welfare, such as food safety or traffic violations. The rationale is that requiring proof of mental state would make enforcement impractical for such offences.`,
    wordCount: 109,
    difficulty: 'medium',
    category: 'legal',
    recommendedTime: 180,
    questions: [
      {
        id: 'p4-q1',
        topic: 'Legal Aptitude',
        question: 'What is the highest level of mens rea mentioned in the passage?',
        options: ['Negligence', 'Recklessness', 'Knowledge', 'Intention'],
        correctAnswerIndex: 3,
        explanation: 'The passage states "intention (the highest)" as the highest level of mens rea.'
      },
      {
        id: 'p4-q2',
        topic: 'Legal Aptitude',
        question: 'In strict liability offences, what needs to be proved?',
        options: [
          'Both actus reus and mens rea',
          'Only mens rea',
          'Only the commission of the act',
          'Neither actus reus nor mens rea'
        ],
        correctAnswerIndex: 2,
        explanation: 'The passage explains that in strict liability offences "the mere commission of the act is sufficient for conviction."'
      },
      {
        id: 'p4-q3',
        topic: 'Legal Aptitude',
        question: 'Why are strict liability offences created?',
        options: [
          'To punish criminals more severely',
          'To make enforcement practical for regulatory offences',
          'To reduce court workload',
          'To protect the accused'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage states "requiring proof of mental state would make enforcement impractical for such offences."'
      }
    ]
  },
  {
    id: 'passage-5',
    passage: `Logical reasoning forms the backbone of legal analysis. Deductive reasoning moves from general principles to specific conclusions—if all contracts require consideration, and this agreement lacks consideration, then this is not a valid contract. Inductive reasoning works in reverse, drawing general conclusions from specific observations. Analogical reasoning, commonly used in common law systems, applies principles from decided cases to new situations with similar facts. However, lawyers must be wary of logical fallacies. The "slippery slope" fallacy assumes that one event will inevitably lead to extreme consequences without evidence. Ad hominem attacks target the person making an argument rather than the argument itself, and are considered logically invalid.`,
    wordCount: 107,
    difficulty: 'medium',
    category: 'logical',
    recommendedTime: 180,
    questions: [
      {
        id: 'p5-q1',
        topic: 'Logical Reasoning',
        question: 'Which type of reasoning moves from general principles to specific conclusions?',
        options: ['Inductive', 'Analogical', 'Deductive', 'Circular'],
        correctAnswerIndex: 2,
        explanation: 'The passage states "Deductive reasoning moves from general principles to specific conclusions."'
      },
      {
        id: 'p5-q2',
        topic: 'Logical Reasoning',
        question: 'What is an ad hominem fallacy?',
        options: [
          'Assuming extreme consequences without evidence',
          'Attacking the person instead of the argument',
          'Using circular logic',
          'Drawing wrong analogies'
        ],
        correctAnswerIndex: 1,
        explanation: 'The passage defines ad hominem as attacks that "target the person making an argument rather than the argument itself."'
      },
      {
        id: 'p5-q3',
        topic: 'Logical Reasoning',
        question: 'Analogical reasoning is commonly used in which legal system?',
        options: ['Civil law', 'Common law', 'Religious law', 'Customary law'],
        correctAnswerIndex: 1,
        explanation: 'The passage states analogical reasoning is "commonly used in common law systems."'
      }
    ]
  },
  {
    id: 'passage-6',
    passage: `Artificial Intelligence (AI) and its regulation present novel challenges for legal systems worldwide. The European Union's AI Act, adopted in 2024, is the world's first comprehensive AI law. It classifies AI systems by risk level: unacceptable risk (banned), high risk (heavily regulated), limited risk (transparency requirements), and minimal risk (no regulation). High-risk AI includes systems used in critical infrastructure, education, employment, and law enforcement. The Act imposes obligations on AI developers and deployers, including risk assessments, transparency, and human oversight. Critics argue the Act may stifle innovation, while supporters believe it balances technological progress with fundamental rights protection.`,
    wordCount: 102,
    difficulty: 'hard',
    category: 'gk',
    recommendedTime: 180,
    questions: [
      {
        id: 'p6-q1',
        topic: 'Current Affairs',
        question: 'Which organization passed the world\'s first comprehensive AI law?',
        options: ['United Nations', 'European Union', 'United States', 'India'],
        correctAnswerIndex: 1,
        explanation: 'The passage states "The European Union\'s AI Act, adopted in 2024, is the world\'s first comprehensive AI law."'
      },
      {
        id: 'p6-q2',
        topic: 'Current Affairs',
        question: 'Which category of AI systems are banned under the EU AI Act?',
        options: ['High risk', 'Limited risk', 'Unacceptable risk', 'Minimal risk'],
        correctAnswerIndex: 2,
        explanation: 'The passage mentions "unacceptable risk (banned)" as the category that is prohibited.'
      },
      {
        id: 'p6-q3',
        topic: 'Current Affairs',
        question: 'Which of the following is NOT mentioned as high-risk AI use?',
        options: ['Education', 'Entertainment', 'Law enforcement', 'Employment'],
        correctAnswerIndex: 1,
        explanation: 'Entertainment is not mentioned. The passage lists "critical infrastructure, education, employment, and law enforcement" as high-risk.'
      }
    ]
  },
  {
    id: 'passage-7',
    passage: `The collegium system for judicial appointments in India evolved through a series of Supreme Court judgments. In the First Judges Case (1982), the Court held that the Chief Justice's opinion was merely consultative, giving primacy to the executive. The Second Judges Case (1993) reversed this, establishing that the CJI's recommendation in consultation with two senior judges would be binding. The Third Judges Case (1998) expanded the collegium to five judges. The National Judicial Appointments Commission (NJAC), introduced by the 99th Amendment and NJAC Act 2014, sought to replace the collegium with a broader body including the Law Minister. However, in 2015, the Supreme Court struck down NJAC as unconstitutional, holding it violated judicial independence, a basic feature of the Constitution.`,
    wordCount: 121,
    difficulty: 'hard',
    category: 'legal',
    recommendedTime: 200,
    questions: [
      {
        id: 'p7-q1',
        topic: 'Constitution',
        question: 'Which case gave primacy to the executive in judicial appointments?',
        options: ['Second Judges Case', 'Third Judges Case', 'First Judges Case', 'NJAC Case'],
        correctAnswerIndex: 2,
        explanation: 'The passage states that "In the First Judges Case (1982), the Court held that the CJI\'s opinion was merely consultative, giving primacy to the executive."'
      },
      {
        id: 'p7-q2',
        topic: 'Constitution',
        question: 'How many judges are in the collegium after the Third Judges Case?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correctAnswerIndex: 3,
        explanation: 'The passage states "The Third Judges Case (1998) expanded the collegium to five judges."'
      },
      {
        id: 'p7-q3',
        topic: 'Constitution',
        question: 'Why was NJAC struck down by the Supreme Court?',
        options: ['Lack of parliamentary approval', 'Violated judicial independence', 'Violated federalism', 'Improper procedure'],
        correctAnswerIndex: 1,
        explanation: 'The passage states the Court held NJAC "violated judicial independence, a basic feature of the Constitution."'
      }
    ]
  },
  {
    id: 'passage-8',
    passage: `Contract formation requires offer, acceptance, and consideration. An offer is a clear expression of willingness to contract on specific terms. It must be distinguished from an invitation to treat, which is merely an invitation to make offers. Advertisements, price lists, and goods displayed in shops are generally invitations to treat, not offers. In Carlill v. Carbolic Smoke Ball Co., the court held that a reward advertisement can constitute a unilateral offer to the world at large. Acceptance must be absolute and unconditional—a counter-offer terminates the original offer. The postal rule states that acceptance is complete when posted, not when received, but this rule doesn't apply to instantaneous communication like email or telephone.`,
    wordCount: 115,
    difficulty: 'medium',
    category: 'legal',
    recommendedTime: 180,
    questions: [
      {
        id: 'p8-q1',
        topic: 'Contracts',
        question: 'What is the legal status of goods displayed in a shop?',
        options: ['An offer', 'An acceptance', 'An invitation to treat', 'A counter-offer'],
        correctAnswerIndex: 2,
        explanation: 'The passage states "goods displayed in shops are generally invitations to treat, not offers."'
      },
      {
        id: 'p8-q2',
        topic: 'Contracts',
        question: 'What happens when a counter-offer is made?',
        options: ['Original offer continues', 'Original offer is terminated', 'Both offers remain valid', 'Contract is formed'],
        correctAnswerIndex: 1,
        explanation: 'The passage states "a counter-offer terminates the original offer."'
      },
      {
        id: 'p8-q3',
        topic: 'Contracts',
        question: 'When is postal acceptance complete?',
        options: ['When received', 'When posted', 'When read', 'When acknowledged'],
        correctAnswerIndex: 1,
        explanation: 'The passage states "The postal rule states that acceptance is complete when posted, not when received."'
      }
    ]
  },
  {
    id: 'passage-9',
    passage: `The principle of natural justice represents fundamental rules of judicial procedure. The two primary rules are "audi alteram partem" (hear the other side) and "nemo judex in causa sua" (no one should be judge in their own cause). These principles apply not only to courts but also to administrative and quasi-judicial bodies. The right to a fair hearing includes the right to know the charges, present evidence, cross-examine witnesses, and receive a reasoned decision. However, these principles are not absolute. They may be excluded by express statutory provision, or where their application would obstruct the statutory purpose. In emergencies, preliminary hearings may be dispensed with, subject to post-decisional hearing.`,
    wordCount: 112,
    difficulty: 'medium',
    category: 'legal',
    recommendedTime: 180,
    questions: [
      {
        id: 'p9-q1',
        topic: 'Administrative Law',
        question: 'What does "nemo judex in causa sua" mean?',
        options: ['Hear the other side', 'No one should be judge in their own cause', 'Justice delayed is justice denied', 'Law is supreme'],
        correctAnswerIndex: 1,
        explanation: 'The passage defines it as "no one should be judge in their own cause."'
      },
      {
        id: 'p9-q2',
        topic: 'Administrative Law',
        question: 'To which bodies do principles of natural justice apply?',
        options: ['Only courts', 'Only administrative bodies', 'Courts, administrative and quasi-judicial bodies', 'Only Parliament'],
        correctAnswerIndex: 2,
        explanation: 'The passage states these principles apply "not only to courts but also to administrative and quasi-judicial bodies."'
      },
      {
        id: 'p9-q3',
        topic: 'Administrative Law',
        question: 'When can natural justice principles be excluded?',
        options: ['Never', 'Always', 'By express statute or if application would obstruct statutory purpose', 'Only in criminal cases'],
        correctAnswerIndex: 2,
        explanation: 'The passage mentions they may be excluded "by express statutory provision, or where their application would obstruct the statutory purpose."'
      }
    ]
  },
  {
    id: 'passage-10',
    passage: `Arbitration has emerged as a preferred mode of alternative dispute resolution in commercial matters. The Arbitration and Conciliation Act, 1996, based on the UNCITRAL Model Law, governs arbitration in India. Arbitration can be ad-hoc or institutional, domestic or international. The arbitration agreement must be in writing and can be a separate document or a clause in the main contract. The arbitral tribunal's award is final and binding, subject to limited grounds of challenge under Section 34. The 2015 and 2019 amendments aimed to make Indian arbitration more efficient and aligned with international best practices, introducing time limits and reducing judicial intervention.`,
    wordCount: 103,
    difficulty: 'medium',
    category: 'legal',
    recommendedTime: 180,
    questions: [
      {
        id: 'p10-q1',
        topic: 'Arbitration',
        question: 'What is the basis of India\'s arbitration law?',
        options: ['British Arbitration Act', 'UNCITRAL Model Law', 'American Arbitration Rules', 'ICC Rules'],
        correctAnswerIndex: 1,
        explanation: 'The passage states the Act is "based on the UNCITRAL Model Law."'
      },
      {
        id: 'p10-q2',
        topic: 'Arbitration',
        question: 'What is the nature of an arbitral award?',
        options: ['Advisory only', 'Final and binding with limited challenge grounds', 'Can be freely appealed', 'Valid only if accepted by parties'],
        correctAnswerIndex: 1,
        explanation: 'The passage states "The arbitral tribunal\'s award is final and binding, subject to limited grounds of challenge under Section 34."'
      },
      {
        id: 'p10-q3',
        topic: 'Arbitration',
        question: 'What form must an arbitration agreement take?',
        options: ['Oral only', 'Must be in writing', 'Can be oral or written', 'Must be notarized'],
        correctAnswerIndex: 1,
        explanation: 'The passage clearly states "The arbitration agreement must be in writing."'
      }
    ]
  },
  {
    id: 'passage-11',
    passage: `The doctrine of precedent, also known as stare decisis ("to stand by things decided"), is fundamental to common law systems. Under this doctrine, courts are bound to follow decisions of higher courts within the same hierarchy. In India, Supreme Court decisions are binding on all courts, while High Court decisions bind lower courts within that state. However, precedent is not mechanical. Courts can distinguish cases based on material facts, overrule previous decisions when clearly wrong, or limit the scope of a precedent. Per incuriam decisions (made without considering relevant statutory provisions or binding precedents) need not be followed. Obiter dicta (remarks made in passing) are persuasive but not binding.`,
    wordCount: 110,
    difficulty: 'hard',
    category: 'legal',
    recommendedTime: 200,
    questions: [
      {
        id: 'p11-q1',
        topic: 'Jurisprudence',
        question: 'What does "stare decisis" mean?',
        options: ['Judge in their own cause', 'To stand by things decided', 'Hear the other side', 'No punishment without law'],
        correctAnswerIndex: 1,
        explanation: 'The passage defines it as "to stand by things decided."'
      },
      {
        id: 'p11-q2',
        topic: 'Jurisprudence',
        question: 'What is a "per incuriam" decision?',
        options: ['A unanimous decision', 'A decision made without considering relevant law/precedents', 'A decision by full bench', 'A foreign court decision'],
        correctAnswerIndex: 1,
        explanation: 'The passage states per incuriam decisions are "made without considering relevant statutory provisions or binding precedents."'
      },
      {
        id: 'p11-q3',
        topic: 'Jurisprudence',
        question: 'What is the status of obiter dicta?',
        options: ['Binding on all courts', 'Persuasive but not binding', 'Has no legal value', 'Binding only on lower courts'],
        correctAnswerIndex: 1,
        explanation: 'The passage states "Obiter dicta (remarks made in passing) are persuasive but not binding."'
      }
    ]
  },
  {
    id: 'passage-12',
    passage: `Intellectual property rights have gained significant importance in the modern knowledge economy. India is a signatory to TRIPS (Trade-Related Aspects of Intellectual Property Rights) under WTO. Patents protect inventions for 20 years from filing date. Copyrights protect literary, artistic, and musical works for the author's lifetime plus 60 years. Trademarks protect brand identity and can be renewed indefinitely. Trade secrets receive no registration but protection through confidentiality agreements. Geographical indications protect products originating from specific regions, like Darjeeling Tea or Basmati Rice. The Indian IP regime balances creator rights with public access, including provisions for compulsory licensing and parallel imports in certain circumstances.`,
    wordCount: 106,
    difficulty: 'medium',
    category: 'legal',
    recommendedTime: 180,
    questions: [
      {
        id: 'p12-q1',
        topic: 'IP Law',
        question: 'What is the duration of patent protection in India?',
        options: ['10 years', '20 years from filing', 'Lifetime plus 60 years', 'Indefinitely renewable'],
        correctAnswerIndex: 1,
        explanation: 'The passage states "Patents protect inventions for 20 years from filing date."'
      },
      {
        id: 'p12-q2',
        topic: 'IP Law',
        question: 'What is the copyright duration for an author\'s work?',
        options: ['20 years', '50 years', 'Author\'s lifetime plus 60 years', '70 years from publication'],
        correctAnswerIndex: 2,
        explanation: 'The passage states "Copyrights protect literary, artistic, and musical works for the author\'s lifetime plus 60 years."'
      },
      {
        id: 'p12-q3',
        topic: 'IP Law',
        question: 'Which IP right has no registration requirement?',
        options: ['Patents', 'Trademarks', 'Trade secrets', 'Geographical indications'],
        correctAnswerIndex: 2,
        explanation: 'The passage states "Trade secrets receive no registration but protection through confidentiality agreements."'
      }
    ]
  }
];

// ==================== LEGAL DRILLS (IRAC) ====================
export const legalDrills: LegalDrill[] = [
  {
    id: 'drill-1',
    principle: 'A person is said to commit defamation when they publish any statement that harms the reputation of another person in the eyes of right-thinking members of society.',
    factSituation: 'Arun, a journalist, writes an article stating that Bipin, a businessman, has been evading taxes for years. The article is based on anonymous sources and Arun did not verify the facts. Bipin\'s business suffers as clients stop dealing with him.',
    options: [
      'Arun is liable for defamation as he published unverified statements that harmed Bipin\'s reputation',
      'Arun is not liable as journalists have absolute privilege',
      'Arun is not liable as Bipin is a public figure',
      'Arun is liable only if Bipin can prove actual malice'
    ],
    correctAnswer: 0,
    reasoning: 'Publishing unverified statements that harm reputation constitutes defamation. Journalists do not have absolute privilege and must verify facts before publication.',
    topic: 'Torts',
    iracBreakdown: {
      issue: 'Whether Arun is liable for defamation for publishing unverified statements about Bipin?',
      rule: 'Defamation occurs when a person publishes statements that harm another\'s reputation in the eyes of right-thinking members of society.',
      application: 'Arun published an article with unverified claims about tax evasion. The publication harmed Bipin\'s reputation as clients stopped dealing with him. Arun did not verify the facts before publication.',
      conclusion: 'Arun is liable for defamation as all elements are satisfied - publication, harm to reputation, and lack of verification.'
    }
  },
  {
    id: 'drill-2',
    principle: 'Under the doctrine of vicarious liability, an employer is liable for the wrongful acts of an employee if the act was done in the course of employment.',
    factSituation: 'Ravi, a delivery driver for QuickMart, while returning from a delivery, takes a detour to meet his friend. During this detour, he negligently hits a pedestrian, Sunita. Sunita sues QuickMart for damages.',
    options: [
      'QuickMart is liable as Ravi was their employee',
      'QuickMart is not liable as Ravi was on a personal detour, not in course of employment',
      'QuickMart is liable as they own the vehicle',
      'Both QuickMart and Ravi are equally liable'
    ],
    correctAnswer: 1,
    reasoning: 'The detour for personal purposes takes Ravi outside the scope of employment. Vicarious liability only applies when the act is done "in the course of employment."',
    topic: 'Torts',
    iracBreakdown: {
      issue: 'Whether QuickMart is vicariously liable for Ravi\'s negligent act during his personal detour?',
      rule: 'An employer is vicariously liable for employee\'s wrongful acts only if done in the course of employment.',
      application: 'Ravi took a personal detour to meet his friend. This deviation was for personal purposes, not for QuickMart\'s business. The accident occurred during this unauthorized detour.',
      conclusion: 'QuickMart is not liable as Ravi was not acting in the course of employment when the accident occurred.'
    }
  },
  {
    id: 'drill-3',
    principle: 'Article 21 of the Constitution guarantees the right to life and personal liberty. No person shall be deprived of life or personal liberty except according to procedure established by law.',
    factSituation: 'The Municipal Corporation orders the demolition of slum dwellings without giving prior notice to the residents. The residents are forcibly evicted overnight. They challenge this action as violation of Article 21.',
    options: [
      'The action is valid as the Corporation has power to remove encroachments',
      'The action violates Article 21 as right to shelter is part of right to life',
      'The action is valid as slum dwellers have no legal rights',
      'The action is valid if compensation is paid later'
    ],
    correctAnswer: 1,
    reasoning: 'Right to shelter has been recognized as part of Article 21. Demolition without notice violates due process and the residents\' right to life with dignity.',
    topic: 'Constitution',
    iracBreakdown: {
      issue: 'Whether demolition of slum dwellings without prior notice violates Article 21?',
      rule: 'Article 21 guarantees right to life which includes right to shelter. Deprivation must follow procedure established by law.',
      application: 'The Corporation demolished dwellings without prior notice. No opportunity was given to residents. Right to shelter is recognized as part of right to life.',
      conclusion: 'The action violates Article 21 as it deprives residents of shelter without following due procedure.'
    }
  },
  {
    id: 'drill-4',
    principle: 'A contract made by a minor is void ab initio. However, contracts for necessaries supplied to a minor are enforceable against the minor\'s estate.',
    factSituation: 'Mohit, aged 17, purchases a laptop for ₹80,000 from TechStore, claiming he needs it for his online coaching classes. He pays ₹20,000 as advance. Later, he refuses to pay the balance, citing his minority.',
    options: [
      'Mohit must pay as laptop is a necessary for education',
      'Contract is void, TechStore can only recover the laptop',
      'Mohit must pay as he misrepresented his age',
      'Contract is valid as Mohit initiated it'
    ],
    correctAnswer: 0,
    reasoning: 'Items necessary for education can be considered "necessaries." A laptop for online classes in modern times may qualify as necessary for a student\'s education.',
    topic: 'Contracts',
    iracBreakdown: {
      issue: 'Whether a laptop purchased by a minor for educational purposes is a "necessary"?',
      rule: 'Contracts with minors are void, except for necessaries which are enforceable against the minor\'s estate.',
      application: 'Mohit is a minor (17 years). The laptop was purchased for online coaching classes. In modern context, a laptop for education may qualify as necessary.',
      conclusion: 'The laptop being essential for education likely qualifies as a necessary, making the contract enforceable.'
    }
  },
  {
    id: 'drill-5',
    principle: 'The right to freedom of speech under Article 19(1)(a) includes the right to information. However, this right is subject to reasonable restrictions under Article 19(2).',
    factSituation: 'A citizen files an RTI application seeking information about the salary and assets of a High Court judge. The Public Information Officer rejects it citing that it would affect the independence of judiciary.',
    options: [
      'Rejection is valid as judiciary is exempt from RTI',
      'Rejection is invalid as there is no such exemption in RTI Act',
      'Rejection is valid only for assets information',
      'Rejection depends on whether the judge consents'
    ],
    correctAnswer: 1,
    reasoning: 'The Supreme Court has held that judiciary is not exempt from RTI. Information about judges\' assets is in public interest and denial requires specific exemption under the Act.',
    topic: 'Constitution',
    iracBreakdown: {
      issue: 'Whether information about judges\' salary and assets can be denied under RTI?',
      rule: 'RTI Act applies to all public authorities. Exemptions must be specifically provided under Section 8.',
      application: 'Judiciary is a public authority under RTI. "Independence of judiciary" is not a listed exemption. Information about public servants\' assets promotes transparency.',
      conclusion: 'Rejection is invalid as there is no specific exemption protecting such information.'
    }
  },
  {
    id: 'drill-6',
    principle: 'Self-defense is a valid defense in criminal law. A person has the right to defend themselves, their property, and others from unlawful aggression. However, the force used must be proportionate to the threat faced.',
    factSituation: 'Late at night, Rahul sees a burglar breaking into his house. Rahul picks up a cricket bat and hits the burglar once, knocking him unconscious. After the burglar falls, Rahul continues to beat him, causing serious head injuries. The burglar dies.',
    options: [
      'Rahul is not liable as he was exercising right of private defense',
      'Rahul exceeded his right of private defense by continuing to beat an unconscious person',
      'Rahul is liable for murder as any killing is unlawful',
      'Rahul is not liable as the burglar was a trespasser'
    ],
    correctAnswer: 1,
    reasoning: 'While initial defense was justified, continuing to beat an unconscious person who no longer posed a threat exceeds the right of private defense. The force must be proportionate and stop when the threat ends.',
    topic: 'Criminal Law',
    iracBreakdown: {
      issue: 'Whether Rahul\'s actions fall within the right of private defense?',
      rule: 'Private defense allows proportionate force against unlawful aggression. The right ends when the threat ends.',
      application: 'Initial blow was justified as defense against burglary. However, continuing to beat an unconscious person who posed no further threat exceeded proportionate response.',
      conclusion: 'Rahul exceeded his right of private defense and is liable for the injuries caused after the threat ended.'
    }
  },
  {
    id: 'drill-7',
    principle: 'Under the Indian Evidence Act, a confession made to a police officer is not admissible as evidence (Section 25). However, if a confession leads to discovery of a fact, that portion which relates to the discovery may be proved (Section 27).',
    factSituation: 'Police arrested Anil for theft. During interrogation, Anil confessed to the theft and said, "I hid the stolen jewelry under the mango tree in my backyard." Police recovered the jewelry from that exact location.',
    options: [
      'Both the confession and recovery are admissible',
      'Only the portion "I hid stolen jewelry under mango tree in my backyard" leading to discovery is admissible',
      'Nothing is admissible as confession was to police',
      'Only the recovery is admissible, not any part of the statement'
    ],
    correctAnswer: 1,
    reasoning: 'Under Section 27, the portion of confession that directly leads to discovery of fact is admissible. Here, the statement about hiding location led to actual recovery.',
    topic: 'Evidence',
    iracBreakdown: {
      issue: 'Whether Anil\'s confession to police can be used as evidence?',
      rule: 'Section 25: Confession to police is inadmissible. Section 27: Portion leading to discovery of fact is admissible.',
      application: 'Anil confessed to police (normally inadmissible under S.25). But his statement about hiding location led to actual discovery of jewelry.',
      conclusion: 'The specific portion "I hid stolen jewelry under mango tree in my backyard" is admissible under Section 27.'
    }
  },
  {
    id: 'drill-8',
    principle: 'The Consumer Protection Act, 2019 provides protection against unfair trade practices and deficiency in services. A "consumer" is one who buys goods or hires services for consideration, excluding commercial purposes.',
    factSituation: 'Dr. Sharma, a dentist, purchased a dental chair worth ₹5 lakhs for his clinic. The chair malfunctioned within a month. He filed a complaint before the Consumer Disputes Redressal Forum.',
    options: [
      'Dr. Sharma is a consumer as he purchased goods for consideration',
      'Dr. Sharma is not a consumer as the purchase was for commercial/professional purpose',
      'Dr. Sharma is a consumer only if he bought for personal use at home',
      'Dr. Sharma can file complaint but only in civil court'
    ],
    correctAnswer: 1,
    reasoning: 'Goods purchased for earning livelihood by means of self-employment can be considered for consumer protection. However, equipment for professional practice is generally excluded as commercial purpose.',
    topic: 'Consumer Law',
    iracBreakdown: {
      issue: 'Whether Dr. Sharma qualifies as a "consumer" under Consumer Protection Act?',
      rule: 'Consumer means one who buys goods/services for consideration, excluding commercial purposes. Exception exists for self-employment for livelihood.',
      application: 'Dr. Sharma bought dental chair for professional practice. This is commercial use for business, not personal consumption or self-employment for livelihood.',
      conclusion: 'Dr. Sharma is not a consumer under CPA as purchase was for commercial/professional purpose.'
    }
  },
  {
    id: 'drill-9',
    principle: 'Under the law of nuisance, a person is liable if they unreasonably interfere with another\'s use and enjoyment of land. However, if the plaintiff came to the nuisance (moved to an area where the nuisance already existed), this may be considered in determining liability.',
    factSituation: 'Seema purchased a house near an airport that had been operating for 20 years. She now files a suit claiming the aircraft noise constitutes nuisance affecting her peaceful enjoyment of property.',
    options: [
      'Airport is liable as noise is clearly a nuisance',
      'Airport is not liable as Seema came to the nuisance',
      'Airport is liable only if noise exceeds permitted decibels',
      'Coming to nuisance is not a defense; airport may still be liable'
    ],
    correctAnswer: 3,
    reasoning: 'While "coming to nuisance" is a factor, it is not a complete defense. If the interference is unreasonable, liability may still exist. The airport\'s pre-existence is considered but doesn\'t grant immunity.',
    topic: 'Torts',
    iracBreakdown: {
      issue: 'Whether the airport is liable for nuisance even though Seema purchased the house knowing about aircraft operations?',
      rule: 'Nuisance requires unreasonable interference. Coming to nuisance is a factor but not a complete defense.',
      application: 'Airport operated for 20 years before Seema moved. However, noise may still constitute unreasonable interference with property enjoyment.',
      conclusion: 'Coming to nuisance is not a complete defense; airport may still be liable if interference is unreasonable.'
    }
  },
  {
    id: 'drill-10',
    principle: 'Article 14 of the Constitution guarantees equality before law. However, reasonable classification is permitted if there is an intelligible differentia (distinguishing factor) and rational nexus with the object sought to be achieved.',
    factSituation: 'The government passes a law providing free education only to children whose parents earn less than ₹5 lakh per year. A parent earning ₹5.5 lakh challenges this as violating Article 14.',
    options: [
      'Law is unconstitutional as it creates inequality',
      'Law is valid as it makes reasonable classification with rational nexus to its objective',
      'Law violates Article 21 right to education',
      'Law is discriminatory and arbitrary'
    ],
    correctAnswer: 1,
    reasoning: 'The classification based on income is intelligible differentia. The object of helping economically weaker sections has rational nexus with the income criterion. Such classification is permissible under Article 14.',
    topic: 'Constitution',
    iracBreakdown: {
      issue: 'Whether income-based classification for free education violates Article 14?',
      rule: 'Article 14 permits reasonable classification with intelligible differentia and rational nexus to the objective.',
      application: 'Income criterion is clear differentia. Objective is to help economically weaker sections. There is rational nexus between income limit and the welfare objective.',
      conclusion: 'The law is valid as it makes reasonable classification consistent with Article 14.'
    }
  },
  {
    id: 'drill-11',
    principle: 'The doctrine of frustration discharges a contract when, after its formation, an event occurs which makes performance impossible or radically different from what was contemplated, provided the event was not due to fault of either party.',
    factSituation: 'Ram books a venue for his daughter\'s wedding on December 15. On December 10, the government imposes a lockdown due to pandemic, prohibiting gatherings. The venue owner refuses to refund the advance payment.',
    options: [
      'Ram must pay full amount as contract is binding',
      'Contract is frustrated; both parties are discharged and advance should be returned',
      'Venue owner can keep advance as per contract terms',
      'Ram is at fault for not anticipating lockdown'
    ],
    correctAnswer: 1,
    reasoning: 'Government lockdown is a supervening impossibility not due to either party\'s fault. The contract is frustrated, and under Section 65 of Indian Contract Act, advance payment must be restored.',
    topic: 'Contracts',
    iracBreakdown: {
      issue: 'Whether government lockdown frustrates the venue booking contract?',
      rule: 'Frustration occurs when supervening event makes performance impossible/radically different, through no fault of parties.',
      application: 'Lockdown is supervening event. Holding wedding gathering became illegal/impossible. Neither party was at fault.',
      conclusion: 'Contract is frustrated; advance must be returned under Section 65.'
    }
  },
  {
    id: 'drill-12',
    principle: 'Under criminal law, a person is entitled to the right of private defense of body and property. This right extends to causing death if there is reasonable apprehension of death or grievous hurt.',
    factSituation: 'Late at night, Amit sees Raju attempting to break into his house. Amit shouts warnings, but Raju continues and pulls out what appears to be a gun. In fear, Amit fires his licensed gun, killing Raju. It is later discovered that Raju\'s "gun" was actually a toy.',
    options: [
      'Amit is guilty of murder as he killed an unarmed man',
      'Amit is not liable as he exercised lawful right of private defense based on reasonable apprehension',
      'Amit is guilty of culpable homicide as he should have verified',
      'Amit is guilty of causing death by negligence'
    ],
    correctAnswer: 1,
    reasoning: 'The right of private defense depends on reasonable apprehension at the time of the act, not actual danger. Amit reasonably believed Raju had a real gun and was in danger of death or grievous hurt. The defense is valid even though the gun was fake.',
    topic: 'Criminal Law',
    iracBreakdown: {
      issue: 'Whether Amit can claim private defense when the weapon turned out to be fake?',
      rule: 'Private defense is based on reasonable apprehension of danger at the time of the act, not actual danger.',
      application: 'Amit saw what appeared to be a gun. Night break-in with apparent weapon creates reasonable apprehension of death/grievous hurt. He gave warnings first.',
      conclusion: 'Amit is protected under private defense as apprehension was reasonable under the circumstances.'
    }
  }
];

// ==================== LEGAL MAXIMS ====================
export const legalMaxims: LegalMaxim[] = [
  {
    id: 'maxim-1',
    latin: 'Actus non facit reum nisi mens sit rea',
    meaning: 'An act does not make a person guilty unless there is a guilty mind',
    example: 'A accidentally hits B while playing cricket. A is not criminally liable as there was no intention to harm.',
    topic: 'Criminal Law',
    relatedCases: ['R v. Prince (1875)', 'State of Maharashtra v. M.H. George']
  },
  {
    id: 'maxim-2',
    latin: 'Audi alteram partem',
    meaning: 'Hear the other side; no one should be condemned unheard',
    example: 'Before terminating an employee, the employer must give them an opportunity to explain their conduct.',
    topic: 'Natural Justice',
    relatedCases: ['Maneka Gandhi v. Union of India', 'Ridge v. Baldwin']
  },
  {
    id: 'maxim-3',
    latin: 'Nemo judex in causa sua',
    meaning: 'No one should be a judge in their own cause',
    example: 'A judge must recuse himself from a case if his relative is a party to the dispute.',
    topic: 'Natural Justice',
    relatedCases: ['A.K. Kraipak v. Union of India', 'Dimes v. Grand Junction Canal']
  },
  {
    id: 'maxim-4',
    latin: 'Res ipsa loquitur',
    meaning: 'The thing speaks for itself',
    example: 'A surgeon leaves a surgical instrument inside a patient. The negligence is self-evident.',
    topic: 'Torts',
    relatedCases: ['Byrne v. Boadle', 'Scott v. London Dock Co.']
  },
  {
    id: 'maxim-5',
    latin: 'Volenti non fit injuria',
    meaning: 'To one who volunteers, no harm is done',
    example: 'A spectator injured at a cricket match cannot sue if they voluntarily sat in an area known to be risky.',
    topic: 'Torts',
    relatedCases: ['Hall v. Brooklands Racing Club', 'Smith v. Baker']
  },
  {
    id: 'maxim-6',
    latin: 'Ignorantia juris non excusat',
    meaning: 'Ignorance of law is no excuse',
    example: 'A person cannot claim defense that they did not know selling drugs was illegal.',
    topic: 'Criminal Law'
  },
  {
    id: 'maxim-7',
    latin: 'Ubi jus ibi remedium',
    meaning: 'Where there is a right, there is a remedy',
    example: 'If someone\'s fundamental right is violated, they can approach the Supreme Court under Article 32.',
    topic: 'Constitution',
    relatedCases: ['Ashby v. White']
  },
  {
    id: 'maxim-8',
    latin: 'Res judicata',
    meaning: 'A matter already judged; prevents re-litigation of decided issues',
    example: 'If a court has decided that A owes B ₹10,000, A cannot file another suit claiming he owes nothing.',
    topic: 'Civil Procedure',
    relatedCases: ['Satyadhyan Ghosal v. Deorajin Debi']
  },
  {
    id: 'maxim-9',
    latin: 'Damnum sine injuria',
    meaning: 'Damage without legal injury; no legal remedy available',
    example: 'A opens a school next to B\'s school, causing B to lose students. B has no remedy as competition is lawful.',
    topic: 'Torts',
    relatedCases: ['Gloucester Grammar School Case']
  },
  {
    id: 'maxim-10',
    latin: 'Injuria sine damno',
    meaning: 'Legal injury without actual damage; remedy available',
    example: 'Preventing a qualified voter from voting is actionable even if the preferred candidate won.',
    topic: 'Torts',
    relatedCases: ['Ashby v. White', 'Bhim Singh v. State of J&K']
  },
  {
    id: 'maxim-11',
    latin: 'Caveat emptor',
    meaning: 'Let the buyer beware',
    example: 'A buyer must inspect goods before purchase; seller is not liable for obvious defects.',
    topic: 'Contracts'
  },
  {
    id: 'maxim-12',
    latin: 'Ex turpi causa non oritur actio',
    meaning: 'No action arises from an immoral cause',
    example: 'A contract for illegal gambling cannot be enforced in court.',
    topic: 'Contracts'
  },
  {
    id: 'maxim-13',
    latin: 'Qui facit per alium facit per se',
    meaning: 'He who acts through another acts himself',
    example: 'An employer is liable for the negligent acts of employees done in course of employment.',
    topic: 'Torts'
  },
  {
    id: 'maxim-14',
    latin: 'Dura lex sed lex',
    meaning: 'The law is harsh, but it is the law',
    example: 'Even if a law seems unfair, it must be followed until changed by proper authority.',
    topic: 'Jurisprudence'
  },
  {
    id: 'maxim-15',
    latin: 'Salus populi suprema lex',
    meaning: 'The welfare of the people is the supreme law',
    example: 'During a pandemic, individual rights may be restricted for public health and safety.',
    topic: 'Constitution'
  },
  {
    id: 'maxim-16',
    latin: 'Nullum crimen sine lege',
    meaning: 'No crime without law; an act is not criminal unless prohibited by law',
    example: 'A person cannot be punished for an act that was not an offence when committed.',
    topic: 'Criminal Law',
    relatedCases: ['Article 20(1) of Indian Constitution']
  },
  {
    id: 'maxim-17',
    latin: 'Nulla poena sine lege',
    meaning: 'No punishment without law',
    example: 'Punishment cannot be imposed for an act unless there was a law prescribing the punishment at the time of the act.',
    topic: 'Criminal Law'
  },
  {
    id: 'maxim-18',
    latin: 'Pacta sunt servanda',
    meaning: 'Agreements must be kept; contracts are binding',
    example: 'Once parties enter into a valid contract, they are bound to fulfill their obligations.',
    topic: 'Contracts'
  },
  {
    id: 'maxim-19',
    latin: 'Delegatus non potest delegare',
    meaning: 'A delegate cannot further delegate',
    example: 'If Parliament delegates power to make rules to a Minister, the Minister cannot sub-delegate that power to a subordinate.',
    topic: 'Administrative Law'
  },
  {
    id: 'maxim-20',
    latin: 'Ex nudo pacto non oritur actio',
    meaning: 'No action arises from a bare promise (without consideration)',
    example: 'A promise to give a gift without any consideration is not enforceable.',
    topic: 'Contracts'
  },
  {
    id: 'maxim-21',
    latin: 'Expressio unius est exclusio alterius',
    meaning: 'Expression of one thing excludes another',
    example: 'If a statute lists specific items, other items not listed are presumed to be excluded.',
    topic: 'Interpretation of Statutes'
  },
  {
    id: 'maxim-22',
    latin: 'Ejusdem generis',
    meaning: 'Of the same kind; general words following specific words are limited to same category',
    example: 'If a law mentions "dogs, cats, and other animals," the "other animals" likely refers to domestic pets, not wild animals.',
    topic: 'Interpretation of Statutes'
  },
  {
    id: 'maxim-23',
    latin: 'Noscitur a sociis',
    meaning: 'A word is known by the company it keeps',
    example: 'The meaning of a doubtful word can be determined by reference to surrounding words.',
    topic: 'Interpretation of Statutes'
  },
  {
    id: 'maxim-24',
    latin: 'In pari delicto potior est conditio defendentis',
    meaning: 'In equal fault, the condition of the defendant is better',
    example: 'If both parties are equally at fault in an illegal contract, neither can sue the other.',
    topic: 'Contracts'
  },
  {
    id: 'maxim-25',
    latin: 'Locus standi',
    meaning: 'Right to appear or stand before a court',
    example: 'Only a person whose legal rights are affected has locus standi to file a suit, except in PIL where relaxed.',
    topic: 'Civil Procedure'
  }
];

// ==================== COMPARISON TABLES ====================
export const comparisonTables: ComparisonTable[] = [
  {
    id: 'comp-1',
    title: 'Fundamental Rights vs Directive Principles',
    topicA: 'Fundamental Rights (Part III)',
    topicB: 'Directive Principles (Part IV)',
    rows: [
      { aspect: 'Nature', valueA: 'Justiciable (enforceable in court)', valueB: 'Non-justiciable (not enforceable)' },
      { aspect: 'Origin', valueA: 'Borrowed from US Constitution', valueB: 'Borrowed from Irish Constitution' },
      { aspect: 'Purpose', valueA: 'Political democracy', valueB: 'Social and economic democracy' },
      { aspect: 'Negative/Positive', valueA: 'Negative obligations on State', valueB: 'Positive obligations on State' },
      { aspect: 'Amendments', valueA: 'Can be amended (Art. 368)', valueB: 'Can be amended (Art. 368)' },
      { aspect: 'Conflict', valueA: 'Generally prevail over DPSP', valueB: 'Art. 31C gives precedence in some cases' }
    ]
  },
  {
    id: 'comp-2',
    title: 'Civil Wrong vs Criminal Wrong',
    topicA: 'Civil Wrong (Tort)',
    topicB: 'Criminal Wrong (Crime)',
    rows: [
      { aspect: 'Nature', valueA: 'Wrong against individual', valueB: 'Wrong against society/state' },
      { aspect: 'Parties', valueA: 'Plaintiff vs Defendant', valueB: 'State vs Accused' },
      { aspect: 'Remedy', valueA: 'Compensation/Damages', valueB: 'Punishment (imprisonment/fine)' },
      { aspect: 'Standard of Proof', valueA: 'Preponderance of probability', valueB: 'Beyond reasonable doubt' },
      { aspect: 'Intention', valueA: 'May not be essential', valueB: 'Usually essential (mens rea)' },
      { aspect: 'Compromise', valueA: 'Generally possible', valueB: 'Limited (compoundable offences only)' }
    ]
  },
  {
    id: 'comp-3',
    title: 'Bailable vs Non-Bailable Offences',
    topicA: 'Bailable Offence',
    topicB: 'Non-Bailable Offence',
    rows: [
      { aspect: 'Definition', valueA: 'Listed in First Schedule CrPC or bail as of right', valueB: 'Any other offence' },
      { aspect: 'Bail', valueA: 'Matter of right', valueB: 'Discretion of court' },
      { aspect: 'Police Station Bail', valueA: 'Can be granted by officer in charge', valueB: 'Cannot be granted by police' },
      { aspect: 'Severity', valueA: 'Less serious offences', valueB: 'Serious offences' },
      { aspect: 'Examples', valueA: 'Hurt (S.323 IPC), Cheating', valueB: 'Murder, Rape, Dacoity' },
      { aspect: 'Anticipatory Bail', valueA: 'Not usually required', valueB: 'Can be applied for under S.438' }
    ]
  },
  {
    id: 'comp-4',
    title: 'Void vs Voidable Contracts',
    topicA: 'Void Contract',
    topicB: 'Voidable Contract',
    rows: [
      { aspect: 'Definition', valueA: 'No legal effect from beginning', valueB: 'Valid until avoided by aggrieved party' },
      { aspect: 'Enforceability', valueA: 'Cannot be enforced', valueB: 'Enforceable until rescinded' },
      { aspect: 'Third Party Rights', valueA: 'No rights transferred', valueB: 'Rights may pass to third parties' },
      { aspect: 'Ratification', valueA: 'Cannot be ratified', valueB: 'Can be ratified by aggrieved party' },
      { aspect: 'Examples', valueA: 'Agreement with minor, illegal object', valueB: 'Contract induced by coercion, fraud' },
      { aspect: 'Status', valueA: 'Void ab initio', valueB: 'Valid until avoided' }
    ]
  },
  {
    id: 'comp-5',
    title: 'Lok Sabha vs Rajya Sabha',
    topicA: 'Lok Sabha (Lower House)',
    topicB: 'Rajya Sabha (Upper House)',
    rows: [
      { aspect: 'Members', valueA: 'Maximum 552', valueB: 'Maximum 250' },
      { aspect: 'Election', valueA: 'Direct election by people', valueB: 'Indirect election by MLAs' },
      { aspect: 'Term', valueA: '5 years (can be dissolved)', valueB: 'Permanent (1/3 retire every 2 years)' },
      { aspect: 'Money Bills', valueA: 'Can introduce and pass', valueB: 'Can only suggest amendments (14 days)' },
      { aspect: 'No-Confidence Motion', valueA: 'Can be moved', valueB: 'Cannot be moved' },
      { aspect: 'Presiding Officer', valueA: 'Speaker', valueB: 'Vice-President (ex-officio Chairman)' }
    ]
  },
  {
    id: 'comp-6',
    title: 'Summons Case vs Warrant Case',
    topicA: 'Summons Case',
    topicB: 'Warrant Case',
    rows: [
      { aspect: 'Definition', valueA: 'Offence punishable up to 2 years', valueB: 'Offence punishable with death, life, or >2 years' },
      { aspect: 'Procedure', valueA: 'Summary procedure (simpler)', valueB: 'Regular procedure (detailed)' },
      { aspect: 'Charge', valueA: 'No formal charge required', valueB: 'Formal charge must be framed' },
      { aspect: 'Conviction', valueA: 'On plea of guilty directly', valueB: 'Full trial required even on guilty plea' },
      { aspect: 'Evidence Recording', valueA: 'Less elaborate', valueB: 'Full examination of witnesses' },
      { aspect: 'Examples', valueA: 'Defamation, minor hurt', valueB: 'Murder, robbery, rape' }
    ]
  },
  {
    id: 'comp-7',
    title: 'President vs Governor',
    topicA: 'President of India',
    topicB: 'Governor of State',
    rows: [
      { aspect: 'Election', valueA: 'Elected by Electoral College (MPs + MLAs)', valueB: 'Appointed by President' },
      { aspect: 'Term', valueA: '5 years', valueB: '5 years (holds office during pleasure of President)' },
      { aspect: 'Removal', valueA: 'Impeachment under Article 61', valueB: 'No formal procedure; removed by President' },
      { aspect: 'Qualifications', valueA: 'Citizen, 35 years, eligible for Lok Sabha', valueB: 'Citizen, 35 years' },
      { aspect: 'Pardoning Power', valueA: 'Article 72 - includes death sentence', valueB: 'Article 161 - cannot pardon death sentence' },
      { aspect: 'Emergency Powers', valueA: 'Can proclaim all three emergencies', valueB: 'Recommends President\'s Rule (Art 356)' }
    ]
  },
  {
    id: 'comp-8',
    title: 'Supreme Court vs High Court',
    topicA: 'Supreme Court',
    topicB: 'High Court',
    rows: [
      { aspect: 'Article', valueA: 'Article 124-147', valueB: 'Article 214-231' },
      { aspect: 'Writ Jurisdiction', valueA: 'Article 32 (only for FRs)', valueB: 'Article 226 (FRs + any other purpose)' },
      { aspect: 'Judges', valueA: '34 including CJI', valueB: 'Varies by state' },
      { aspect: 'Appointment', valueA: 'By President on CJI recommendation', valueB: 'By President, CJI consulted, Governor consulted' },
      { aspect: 'Transfer', valueA: 'CJI can be transferred (never done)', valueB: 'Can be transferred by President' },
      { aspect: 'Retirement Age', valueA: '65 years', valueB: '62 years' }
    ]
  },
  {
    id: 'comp-9',
    title: 'Ordinary Bill vs Money Bill',
    topicA: 'Ordinary Bill',
    topicB: 'Money Bill',
    rows: [
      { aspect: 'Introduction', valueA: 'Either House', valueB: 'Only Lok Sabha' },
      { aspect: 'Definition', valueA: 'Any bill not a Money Bill', valueB: 'Article 110 - taxation, borrowing, Consolidated Fund' },
      { aspect: 'Rajya Sabha Power', valueA: 'Equal powers, can amend/reject', valueB: 'Can only suggest amendments within 14 days' },
      { aspect: 'Joint Sitting', valueA: 'Possible under Article 108', valueB: 'Not possible' },
      { aspect: 'Speaker\'s Role', valueA: 'Normal presiding', valueB: 'Certifies as Money Bill (final)' },
      { aspect: 'President\'s Assent', valueA: 'Can return once', valueB: 'Cannot return (prior recommendation taken)' }
    ]
  },
  {
    id: 'comp-10',
    title: 'Fundamental Duties vs Directive Principles',
    topicA: 'Fundamental Duties (Part IVA)',
    topicB: 'Directive Principles (Part IV)',
    rows: [
      { aspect: 'Article', valueA: 'Article 51A (11 duties)', valueB: 'Article 36-51' },
      { aspect: 'Added By', valueA: '42nd Amendment 1976', valueB: 'Original Constitution' },
      { aspect: 'Source', valueA: 'USSR Constitution', valueB: 'Irish Constitution' },
      { aspect: 'Addressed To', valueA: 'Citizens only', valueB: 'State' },
      { aspect: 'Justiciability', valueA: 'Non-justiciable', valueB: 'Non-justiciable' },
      { aspect: 'Nature', valueA: 'Duties of citizens', valueB: 'Obligations of State' }
    ]
  },
  {
    id: 'comp-11',
    title: 'Article 32 vs Article 226',
    topicA: 'Article 32 (Supreme Court)',
    topicB: 'Article 226 (High Court)',
    rows: [
      { aspect: 'Purpose', valueA: 'Only for Fundamental Rights', valueB: 'FRs + any other purpose' },
      { aspect: 'Scope', valueA: 'Narrower', valueB: 'Wider' },
      { aspect: 'Territorial', valueA: 'Whole of India', valueB: 'Within territorial jurisdiction' },
      { aspect: 'Suspendable', valueA: 'Cannot be suspended (Art 359)', valueB: 'Can be suspended during Emergency' },
      { aspect: 'Nature', valueA: 'Fundamental Right itself', valueB: 'Constitutional right, not FR' },
      { aspect: 'Called By Ambedkar', valueA: 'Heart and Soul of Constitution', valueB: 'No such title' }
    ]
  },
  {
    id: 'comp-12',
    title: 'IPC vs BNS (New Criminal Law)',
    topicA: 'Indian Penal Code 1860',
    topicB: 'Bharatiya Nyaya Sanhita 2023',
    rows: [
      { aspect: 'Enacted', valueA: '1860 (British era)', valueB: '2023 (effective July 1, 2024)' },
      { aspect: 'Sections', valueA: '511 sections', valueB: '358 sections' },
      { aspect: 'Sedition', valueA: 'Section 124A', valueB: 'Removed; replaced with offence against sovereignty' },
      { aspect: 'Mob Lynching', valueA: 'No specific provision', valueB: 'Specific offence added' },
      { aspect: 'Terrorism', valueA: 'No definition', valueB: 'Defined under Section 113' },
      { aspect: 'Organized Crime', valueA: 'No specific provision', valueB: 'Defined and criminalized' }
    ]
  },
  {
    id: 'comp-13',
    title: 'Cognizable vs Non-Cognizable Offence',
    topicA: 'Cognizable Offence',
    topicB: 'Non-Cognizable Offence',
    rows: [
      { aspect: 'Definition', valueA: 'Police can arrest without warrant', valueB: 'Police cannot arrest without warrant' },
      { aspect: 'Investigation', valueA: 'Police can investigate without magistrate order', valueB: 'Requires magistrate permission' },
      { aspect: 'FIR', valueA: 'FIR is mandatory', valueB: 'NCR (Non-Cognizable Report) filed' },
      { aspect: 'Seriousness', valueA: 'Generally serious offences', valueB: 'Generally less serious' },
      { aspect: 'Examples', valueA: 'Murder, robbery, rape', valueB: 'Assault, defamation, cheating (some)' },
      { aspect: 'Schedule', valueA: 'Listed in First Schedule CrPC', valueB: 'Listed in First Schedule CrPC' }
    ]
  }
];

// ==================== GK ONE-LINERS ====================
export const gkOneLiners: GKOneLiner[] = [
  // Events
  { id: 'gk-1', statement: 'G20 Summit 2023 was held in New Delhi, India under India\'s presidency', category: 'events', date: '2023-09', importance: 'high' },
  { id: 'gk-2', statement: 'Chandrayaan-3 successfully landed on Moon\'s South Pole on August 23, 2023', category: 'science', date: '2023-08', importance: 'high' },
  { id: 'gk-3', statement: 'Aditya-L1, India\'s first solar mission, was launched on September 2, 2023', category: 'science', date: '2023-09', importance: 'high' },
  { id: 'gk-4', statement: 'India hosted the Cricket World Cup 2023, Australia won the final against India', category: 'sports', date: '2023-11', importance: 'medium' },
  
  // Appointments
  { id: 'gk-5', statement: 'Justice D.Y. Chandrachud is the 50th Chief Justice of India (appointed Nov 2022)', category: 'appointments', date: '2022-11', importance: 'high' },
  { id: 'gk-6', statement: 'Shri Jagdeep Dhankhar is the 14th Vice President of India', category: 'appointments', date: '2022-08', importance: 'high' },
  { id: 'gk-7', statement: 'Smt. Droupadi Murmu is the 15th President of India (first tribal woman President)', category: 'appointments', date: '2022-07', importance: 'high' },
  
  // Laws & Amendments
  { id: 'gk-8', statement: 'Three new criminal laws - BNS, BNSS, BSA - replaced IPC, CrPC, Evidence Act (2023)', category: 'laws', date: '2023-12', importance: 'high' },
  { id: 'gk-9', statement: 'Women\'s Reservation Bill 2023 (Nari Shakti Vandan Adhiniyam) reserves 33% seats for women in Lok Sabha and State Assemblies', category: 'laws', date: '2023-09', importance: 'high' },
  { id: 'gk-10', statement: 'Digital Personal Data Protection Act, 2023 enacted for data privacy in India', category: 'laws', date: '2023-08', importance: 'high' },
  { id: 'gk-11', statement: 'Article 370 abrogated in 2019, J&K reorganized into two Union Territories', category: 'laws', date: '2019-08', importance: 'high' },
  { id: 'gk-12', statement: 'Citizenship Amendment Act (CAA) 2019 provides citizenship to persecuted minorities from Pakistan, Bangladesh, Afghanistan', category: 'laws', date: '2019-12', importance: 'high' },
  
  // Schemes
  { id: 'gk-13', statement: 'PM Vishwakarma Scheme launched for traditional artisans and craftspeople', category: 'schemes', date: '2023-09', importance: 'medium' },
  { id: 'gk-14', statement: 'Ayushman Bharat (PM-JAY) provides health cover of ₹5 lakh per family per year', category: 'schemes', date: '2018-09', importance: 'high' },
  { id: 'gk-15', statement: 'PM Kisan Samman Nidhi provides ₹6,000 per year to farmer families in 3 installments', category: 'schemes', date: '2019-02', importance: 'high' },
  
  // International
  { id: 'gk-16', statement: 'BRICS expanded in 2024 to include Iran, UAE, Saudi Arabia, Egypt, Ethiopia', category: 'international', date: '2024-01', importance: 'high' },
  { id: 'gk-17', statement: 'India-Middle East-Europe Economic Corridor (IMEC) announced at G20 Summit 2023', category: 'international', date: '2023-09', importance: 'high' },
  { id: 'gk-18', statement: 'Russia-Ukraine conflict began in February 2022', category: 'international', date: '2022-02', importance: 'high' },
  { id: 'gk-19', statement: 'Israel-Hamas conflict escalated in October 2023', category: 'international', date: '2023-10', importance: 'high' },
  
  // Awards
  { id: 'gk-20', statement: 'Bharat Ratna 2024 awarded to L.K. Advani, Karpoori Thakur, P.V. Narasimha Rao, Chaudhary Charan Singh, M.S. Swaminathan', category: 'awards', date: '2024-02', importance: 'high' },
  { id: 'gk-21', statement: 'Nobel Peace Prize 2023 awarded to Narges Mohammadi (Iran) for fight against women oppression', category: 'awards', date: '2023-10', importance: 'medium' },
  { id: 'gk-22', statement: 'Dronacharya Award is given to outstanding sports coaches in India', category: 'awards', date: 'ongoing', importance: 'medium' },
  
  // Sports
  { id: 'gk-23', statement: 'Neeraj Chopra won gold in javelin at Tokyo Olympics 2020 (held in 2021)', category: 'sports', date: '2021-08', importance: 'high' },
  { id: 'gk-24', statement: 'India hosted Asian Games 1951 (Delhi) and 1982 (Delhi)', category: 'sports', date: 'historical', importance: 'medium' },
  { id: 'gk-25', statement: 'Paris Olympics 2024 - India won 6 medals (1 Silver, 5 Bronze)', category: 'sports', date: '2024-08', importance: 'high' },
  
  // Science & Tech
  { id: 'gk-26', statement: 'ISRO\'s PSLV is known as the "workhorse" of Indian space program', category: 'science', date: 'ongoing', importance: 'medium' },
  { id: 'gk-27', statement: 'Gaganyaan is India\'s first crewed spaceflight mission (upcoming)', category: 'science', date: '2024', importance: 'high' },
  { id: 'gk-28', statement: 'India\'s first indigenous aircraft carrier INS Vikrant commissioned in 2022', category: 'science', date: '2022-09', importance: 'high' },
  
  // Constitutional Bodies
  { id: 'gk-29', statement: 'Election Commission of India is a constitutional body under Article 324', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-30', statement: 'CAG (Comptroller and Auditor General) is appointed under Article 148', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-31', statement: 'UPSC is established under Article 315 of the Constitution', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-32', statement: 'Finance Commission is constituted under Article 280 every 5 years', category: 'laws', date: 'ongoing', importance: 'high' },
  
  // Economy
  { id: 'gk-33', statement: 'India became 5th largest economy in the world in 2022, surpassing UK', category: 'events', date: '2022', importance: 'high' },
  { id: 'gk-34', statement: 'GST (Goods and Services Tax) implemented in India from July 1, 2017', category: 'laws', date: '2017-07', importance: 'high' },
  { id: 'gk-35', statement: 'RBI was established in 1935, nationalized in 1949', category: 'events', date: 'historical', importance: 'medium' },
  
  // Recent 2024-2025
  { id: 'gk-36', statement: 'General Elections 2024 - BJP-led NDA won, Narendra Modi became PM for 3rd term', category: 'events', date: '2024-06', importance: 'high' },
  { id: 'gk-37', statement: 'One Nation One Election committee headed by former President Ram Nath Kovind submitted report in 2024', category: 'laws', date: '2024', importance: 'high' },
  { id: 'gk-38', statement: 'Unified Pension Scheme (UPS) announced in August 2024 for government employees', category: 'schemes', date: '2024-08', importance: 'high' },
  { id: 'gk-39', statement: 'India\'s population surpassed China to become world\'s most populous country in 2023', category: 'events', date: '2023-04', importance: 'high' },
  { id: 'gk-40', statement: 'Chief Justice Sanjiv Khanna to be the 51st CJI after Justice Chandrachud', category: 'appointments', date: '2024-11', importance: 'high' },
  // Additional 2024-2025 Updates
  { id: 'gk-41', statement: 'New criminal laws BNS, BNSS, BSA came into effect from July 1, 2024', category: 'laws', date: '2024-07', importance: 'high' },
  { id: 'gk-42', statement: 'Waqf Amendment Bill 2024 introduced major reforms in Waqf Board management', category: 'laws', date: '2024', importance: 'high' },
  { id: 'gk-43', statement: 'Supreme Court upheld sub-classification within SC/ST reservations (State of Punjab v. Davinder Singh, 2024)', category: 'laws', date: '2024-08', importance: 'high' },
  { id: 'gk-44', statement: 'Electoral Bonds Scheme struck down as unconstitutional by Supreme Court (Feb 2024)', category: 'laws', date: '2024-02', importance: 'high' },
  { id: 'gk-45', statement: 'Ayodhya Ram Mandir consecration (Pran Pratishtha) held on January 22, 2024', category: 'events', date: '2024-01', importance: 'high' },
  { id: 'gk-46', statement: 'India assumed G20 Presidency on December 1, 2022 and hosted summit in September 2023', category: 'international', date: '2023', importance: 'high' },
  { id: 'gk-47', statement: 'CLAT is conducted by Consortium of NLUs (20 NLUs participate)', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-48', statement: 'Article 142 gives Supreme Court power to pass any order necessary for complete justice', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-49', statement: 'Parliament has 2 sessions minimum - Budget Session (Feb-May) and Monsoon Session (Jul-Aug)', category: 'laws', date: 'ongoing', importance: 'medium' },
  { id: 'gk-50', statement: 'PM CARES Fund created in March 2020 for COVID-19 emergency response', category: 'schemes', date: '2020-03', importance: 'medium' },
  // Latest 2024-2025 Current Affairs for CLAT
  { id: 'gk-51', statement: 'Bharatiya Nyaya Sanhita (BNS) replaced Indian Penal Code 1860', category: 'laws', date: '2024-07', importance: 'high' },
  { id: 'gk-52', statement: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) replaced CrPC 1973', category: 'laws', date: '2024-07', importance: 'high' },
  { id: 'gk-53', statement: 'Bharatiya Sakshya Adhiniyam (BSA) replaced Indian Evidence Act 1872', category: 'laws', date: '2024-07', importance: 'high' },
  { id: 'gk-54', statement: 'Supreme Court has 34 judges including CJI (increased from 31 in 2019)', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-55', statement: 'High Courts in India: Total 25 (Telangana HC established in 2019)', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-56', statement: 'India ranked 129th in Human Development Index 2024 (UNDP)', category: 'international', date: '2024', importance: 'medium' },
  { id: 'gk-57', statement: 'Paris Olympics 2024: India won 6 medals - Manu Bhaker (2 bronze), Neeraj Chopra (silver)', category: 'sports', date: '2024-08', importance: 'high' },
  { id: 'gk-58', statement: 'T20 World Cup 2024 won by India, defeating South Africa in final at Barbados', category: 'sports', date: '2024-06', importance: 'high' },
  { id: 'gk-59', statement: 'Nobel Peace Prize 2024 awarded to Nihon Hidankyo (Japanese atomic bomb survivors organization)', category: 'awards', date: '2024-10', importance: 'high' },
  { id: 'gk-60', statement: 'Nobel Prize in Literature 2024: Han Kang (South Korea) - first Asian woman', category: 'awards', date: '2024-10', importance: 'medium' },
  { id: 'gk-61', statement: 'Nobel Prize in Economics 2024: Daron Acemoglu, Simon Johnson, James Robinson', category: 'awards', date: '2024-10', importance: 'medium' },
  { id: 'gk-62', statement: 'Jnanpith Award 2023: Gulzar (Urdu) and Jagadguru Rambhadracharya (Sanskrit)', category: 'awards', date: '2024', importance: 'medium' },
  { id: 'gk-63', statement: 'Booker Prize 2024: Samantha Harvey for "Orbital"', category: 'awards', date: '2024-11', importance: 'medium' },
  { id: 'gk-64', statement: 'Miss Universe 2024: Victoria Kjær Theilvig (Denmark)', category: 'events', date: '2024-11', importance: 'low' },
  { id: 'gk-65', statement: 'COP29 (Climate Summit) held in Baku, Azerbaijan in November 2024', category: 'international', date: '2024-11', importance: 'high' },
  { id: 'gk-66', statement: 'India became member of UN Security Council as non-permanent member for 2021-22', category: 'international', date: '2021', importance: 'medium' },
  { id: 'gk-67', statement: 'SCO Summit 2024 hosted by Kazakhstan; Pakistan hosted virtual SCO Summit', category: 'international', date: '2024', importance: 'medium' },
  { id: 'gk-68', statement: 'BRICS Summit 2024 held in Kazan, Russia - New members joined', category: 'international', date: '2024-10', importance: 'high' },
  { id: 'gk-69', statement: 'India-UAE CEPA (Comprehensive Economic Partnership Agreement) operational since 2022', category: 'international', date: '2022', importance: 'medium' },
  { id: 'gk-70', statement: 'Article 371: Special provisions for 11 states including NE states, Maharashtra, Gujarat', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-71', statement: 'Lokpal and Lokayuktas Act 2013 - Justice Pinaki Chandra Ghose was first Lokpal (2019)', category: 'laws', date: '2019', importance: 'high' },
  { id: 'gk-72', statement: 'National Green Tribunal (NGT) established in 2010 under NGT Act', category: 'laws', date: '2010', importance: 'medium' },
  { id: 'gk-73', statement: 'Competition Commission of India (CCI) established in 2003, became functional in 2009', category: 'laws', date: '2009', importance: 'medium' },
  { id: 'gk-74', statement: 'National Company Law Tribunal (NCLT) established in 2016 for corporate disputes', category: 'laws', date: '2016', importance: 'medium' },
  { id: 'gk-75', statement: 'Insolvency and Bankruptcy Code 2016 - NCLT is adjudicating authority for companies', category: 'laws', date: '2016', importance: 'high' },
  { id: 'gk-76', statement: 'Mediation Act 2023 - First standalone mediation law in India', category: 'laws', date: '2023', importance: 'high' },
  { id: 'gk-77', statement: 'Jan Vishwas Act 2023 decriminalized 183 offences across 42 Acts', category: 'laws', date: '2023', importance: 'high' },
  { id: 'gk-78', statement: 'Telecommunications Act 2023 replaced Indian Telegraph Act 1885', category: 'laws', date: '2023', importance: 'medium' },
  { id: 'gk-79', statement: 'Press and Registration of Periodicals Act 2023 replaced Press Act 1867', category: 'laws', date: '2023', importance: 'medium' },
  { id: 'gk-80', statement: 'Forest Conservation Amendment Act 2023 - Exempted border areas and strategic projects', category: 'laws', date: '2023', importance: 'medium' },
  { id: 'gk-81', statement: 'Chief Election Commissioner tenure: 6 years or 65 years age, whichever earlier', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-82', statement: 'President of India salary: ₹5 lakh per month (increased in 2018)', category: 'laws', date: '2018', importance: 'medium' },
  { id: 'gk-83', statement: 'Governor salary: ₹3.5 lakh per month', category: 'laws', date: 'ongoing', importance: 'medium' },
  { id: 'gk-84', statement: 'Supreme Court and High Court judges get pension equal to 50% of last drawn salary', category: 'laws', date: 'ongoing', importance: 'medium' },
  { id: 'gk-85', statement: 'Attorney General is appointed under Article 76, holds office during pleasure of President', category: 'laws', date: 'ongoing', importance: 'high' },
  { id: 'gk-86', statement: 'Solicitor General and Additional Solicitor Generals are not constitutional posts', category: 'laws', date: 'ongoing', importance: 'medium' },
  { id: 'gk-87', statement: 'Inter-State Council established under Article 263 (set up in 1990)', category: 'laws', date: '1990', importance: 'medium' },
  { id: 'gk-88', statement: 'Zonal Councils: 5 zones created under States Reorganisation Act 1956', category: 'laws', date: '1956', importance: 'medium' },
  { id: 'gk-89', statement: 'NITI Aayog replaced Planning Commission in 2015', category: 'schemes', date: '2015', importance: 'high' },
  { id: 'gk-90', statement: 'GST Council: Constitutional body under Article 279A, chaired by Union Finance Minister', category: 'laws', date: '2017', importance: 'high' },
  { id: 'gk-91', statement: 'India Stack: Digital public infrastructure - Aadhaar, UPI, DigiLocker, CoWIN', category: 'science', date: 'ongoing', importance: 'medium' },
  { id: 'gk-92', statement: 'UPI transactions crossed 10 billion monthly transactions in 2023', category: 'events', date: '2023', importance: 'medium' },
  { id: 'gk-93', statement: 'Digital India Programme launched on July 1, 2015', category: 'schemes', date: '2015-07', importance: 'medium' },
  { id: 'gk-94', statement: 'Make in India launched on September 25, 2014', category: 'schemes', date: '2014-09', importance: 'medium' },
  { id: 'gk-95', statement: 'Startup India launched on January 16, 2016', category: 'schemes', date: '2016-01', importance: 'medium' },
  { id: 'gk-96', statement: 'Swachh Bharat Mission launched on October 2, 2014 (Gandhi Jayanti)', category: 'schemes', date: '2014-10', importance: 'medium' },
  { id: 'gk-97', statement: 'India declared Open Defecation Free (ODF) on October 2, 2019', category: 'events', date: '2019-10', importance: 'medium' },
  { id: 'gk-98', statement: 'Jal Jeevan Mission launched in 2019 - Har Ghar Jal by 2024', category: 'schemes', date: '2019', importance: 'medium' },
  { id: 'gk-99', statement: 'PM Gati Shakti National Master Plan launched October 2021 for infrastructure', category: 'schemes', date: '2021-10', importance: 'medium' },
  { id: 'gk-100', statement: 'National Education Policy 2020 replaced 34-year-old Education Policy of 1986', category: 'laws', date: '2020', importance: 'high' }
];

// ==================== BRAIN DUMP TOPICS ====================
export const brainDumpTopics: BrainDumpTopic[] = [
  {
    id: 'bd-1',
    title: 'Fundamental Rights (Part III)',
    category: 'Constitution',
    keyPoints: [
      'Articles 12-35 of Indian Constitution',
      '6 Fundamental Rights (originally 7, Right to Property removed by 44th Amendment)',
      'Justiciable - can be enforced through courts',
      'Available against State (Article 12 defines State)',
      'Can be suspended during Emergency (except Art 20 & 21)'
    ],
    officialNotes: [
      'Right to Equality (Art 14-18): Equality before law, prohibition of discrimination, equality of opportunity, abolition of untouchability and titles',
      'Right to Freedom (Art 19-22): Six freedoms under Art 19, Protection against conviction (Art 20), Right to Life (Art 21), Protection against arrest (Art 22)',
      'Right against Exploitation (Art 23-24): Prohibition of trafficking and forced labor, prohibition of child labor',
      'Right to Freedom of Religion (Art 25-28): Freedom of conscience, freedom to manage religious affairs, freedom from religious taxation and instruction',
      'Cultural and Educational Rights (Art 29-30): Protection of minorities\' interests, right to establish educational institutions',
      'Right to Constitutional Remedies (Art 32): Right to approach Supreme Court, Five writs - Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto'
    ]
  },
  {
    id: 'bd-2',
    title: 'Law of Contracts - Essentials',
    category: 'Contracts',
    keyPoints: [
      'Indian Contract Act, 1872',
      'Section 10 - Essential elements of valid contract',
      'Free consent (Sections 13-22)',
      'Lawful consideration and object',
      'Capacity to contract'
    ],
    officialNotes: [
      'Offer and Acceptance: Offer must be definite, acceptance must be absolute and unqualified',
      'Free Consent (S.14): Consent not caused by coercion, undue influence, fraud, misrepresentation, or mistake',
      'Lawful Consideration (S.23): Must not be forbidden by law, defeat provisions of law, fraudulent, injurious, or immoral',
      'Capacity: Parties must be major (18 years), of sound mind, not disqualified by law',
      'Void Agreements (S.24-30): Agreement in restraint of marriage, trade, legal proceedings; wagering agreements',
      'Voidable Contracts: Contracts induced by coercion, undue influence, fraud, misrepresentation - can be avoided by aggrieved party'
    ]
  },
  {
    id: 'bd-3',
    title: 'Writ Jurisdiction',
    category: 'Constitution',
    keyPoints: [
      'Article 32 - Supreme Court (Fundamental Rights only)',
      'Article 226 - High Court (Wider scope - any purpose)',
      'Five types of writs',
      'Right to Constitutional Remedies called "Heart and Soul" of Constitution by Dr. Ambedkar'
    ],
    officialNotes: [
      'Habeas Corpus: "To have the body" - against unlawful detention, can be filed by anyone on behalf of detained person',
      'Mandamus: "We command" - to compel public authority to perform duty, cannot be issued against private persons or President/Governors',
      'Prohibition: Issued by higher court to lower court to prevent exceeding jurisdiction, only against judicial/quasi-judicial bodies',
      'Certiorari: "To be certified" - to quash order of lower court that exceeded jurisdiction, against judicial/quasi-judicial bodies',
      'Quo Warranto: "By what authority" - to question the legality of person holding public office, protects public from usurpers'
    ]
  },
  {
    id: 'bd-4',
    title: 'Doctrine of Basic Structure',
    category: 'Constitution',
    keyPoints: [
      'Kesavananda Bharati v. State of Kerala (1973)',
      'Parliament cannot amend basic structure',
      'Not defined in Constitution - judicial innovation',
      'Applies to Constitutional amendments under Article 368'
    ],
    officialNotes: [
      'Origin: Evolved from Kesavananda Bharati case (13-judge bench, 7:6 majority)',
      'Elements of Basic Structure: Supremacy of Constitution, Republican and Democratic form, Secular character, Separation of powers, Federal character, Sovereignty, Unity and integrity, Parliamentary system, Rule of law, Judicial review, Free and fair elections',
      'Important Cases: Minerva Mills (1980) - Judicial review is basic structure, S.R. Bommai (1994) - Secularism is basic structure, I.R. Coelho (2007) - Laws in 9th Schedule can be reviewed if they violate basic structure',
      'Significance: Prevents authoritarian amendments, protects constitutional identity, balance between rigidity and flexibility'
    ]
  },
  {
    id: 'bd-5',
    title: 'Tort Law Basics',
    category: 'Torts',
    keyPoints: [
      'Civil wrong, remedy is compensation',
      'Elements: Wrongful act, Legal damage, Legal remedy',
      'Distinction from crime and breach of contract',
      'Defenses available'
    ],
    officialNotes: [
      'Definition: A tort is a civil wrong for which the remedy is a common law action for unliquidated damages',
      'Essentials: (1) Wrongful act or omission by defendant, (2) Duty owed to plaintiff, (3) Breach of that duty, (4) Legal damage caused',
      'Damnum sine injuria: Damage without legal injury - no remedy (Gloucester Grammar School case)',
      'Injuria sine damno: Legal injury without damage - remedy available (Ashby v. White)',
      'General Defenses: Volenti non fit injuria, Plaintiff wrongdoer, Inevitable accident, Act of God, Private defense, Statutory authority, Necessity',
      'Vicarious Liability: Employer liable for employee\'s torts in course of employment (Qui facit per alium facit per se)'
    ]
  },
  {
    id: 'bd-6',
    title: 'Emergency Provisions',
    category: 'Constitution',
    keyPoints: [
      'Three types: National (352), State (356), Financial (360)',
      '44th Amendment changes: Internal disturbance removed, written cabinet advice required',
      'Article 352 proclaimed for war, external aggression, armed rebellion',
      'Effects on Fundamental Rights during Emergency'
    ],
    officialNotes: [
      'National Emergency (Art 352): Proclaimed by President on written advice of Cabinet. Needs Parliamentary approval within 1 month. Duration: Initially 6 months, can be extended indefinitely. Art 20 & 21 cannot be suspended.',
      'State Emergency (Art 356): President\'s Rule when constitutional machinery fails. Maximum duration 3 years (with Parliament approval every 6 months). S.R. Bommai case: Judicial review possible, state assembly can be dissolved only after Parliament approval.',
      'Financial Emergency (Art 360): Never proclaimed. President can reduce salaries, direct states on financial matters. Must be approved by Parliament within 2 months.',
      '44th Amendment (1978): Removed "internal disturbance" as ground for Art 352. Required written advice of Cabinet. Art 20 & 21 made non-suspendable. Art 359 cannot suspend enforcement of Art 20 & 21.'
    ]
  },
  {
    id: 'bd-7',
    title: 'Amendment Procedure (Article 368)',
    category: 'Constitution',
    keyPoints: [
      'Three categories of amendments',
      'Simple majority, Special majority, Special majority + state ratification',
      'Basic structure cannot be amended',
      'Key amendments: 1st, 7th, 24th, 42nd, 44th, 52nd, 61st, 73rd, 74th, 86th, 101st'
    ],
    officialNotes: [
      'Simple Majority: Admission of new states, creation of legislative councils, salaries of judges, citizenship, etc.',
      'Special Majority (2/3 of members present and voting + majority of total membership): Most FR amendments, DPSP, election procedures, etc.',
      'Special Majority + Ratification by half states: Federal provisions - Election of President, SC/HC, distribution of powers (List I, II, III), representation of states, Art 368 itself',
      'Important Amendments: 1st (9th Schedule), 24th (affirmed Art 368), 42nd (Mini Constitution), 44th (Restored position), 52nd (Anti-defection), 73rd/74th (Panchayati Raj), 86th (Right to Education), 101st (GST), 103rd (EWS reservation)'
    ]
  },
  {
    id: 'bd-8',
    title: 'Indian Penal Code - Key Offences',
    category: 'Criminal Law',
    keyPoints: [
      'General exceptions (Chapter IV)',
      'Offences against human body (299-377)',
      'Difference between murder and culpable homicide',
      'Hurt and Grievous Hurt'
    ],
    officialNotes: [
      'Section 299: Culpable Homicide - Causing death with intention or knowledge that act is likely to cause death',
      'Section 300: Murder - Culpable homicide is murder if: (1) intention to cause death, (2) intention to cause bodily injury knowing it likely to cause death, (3) intention to cause injury sufficient in ordinary course to cause death, (4) act so imminently dangerous',
      'Exception to Murder: Grave and sudden provocation, Private defense exceeded, Public servant exceeding powers, Sudden fight without premeditation, Consent of victim over 18',
      'Section 304: Punishment for culpable homicide not amounting to murder - Life imprisonment or 10 years + fine',
      'Section 304A: Death by negligence (not amounting to culpable homicide) - 2 years or fine or both',
      'Section 304B: Dowry death - Death within 7 years of marriage, shown she was subjected to cruelty for dowry'
    ]
  },
  {
    id: 'bd-9',
    title: 'Consumer Protection Act 2019',
    category: 'Consumer Law',
    keyPoints: [
      'Replaces Consumer Protection Act 1986',
      'Three-tier redressal mechanism',
      'Definition of consumer, defect, deficiency',
      'Central Consumer Protection Authority (CCPA)'
    ],
    officialNotes: [
      'Consumer: Buys goods/services for consideration (including online). Excludes commercial purposes except self-employment livelihood.',
      'District Commission: Claims up to ₹1 crore (increased from ₹20 lakh)',
      'State Commission: Claims ₹1 crore to ₹10 crore; appeals from District',
      'National Commission: Claims above ₹10 crore; appeals from State',
      'CCPA: Central authority to regulate matters related to violation of consumer rights, unfair trade practices, false advertisements',
      'Product Liability: Manufacturer, service provider, seller liable for harm caused by defective product/service',
      'E-commerce: Now specifically covered; platforms must display country of origin, name of seller'
    ]
  },
  {
    id: 'bd-10',
    title: 'RTI Act 2005',
    category: 'Constitution',
    keyPoints: [
      'Fundamental right derived from Article 19(1)(a)',
      'Two-tier structure: PIO and Appellate Authority',
      'Exemptions under Section 8',
      'Time limits for providing information'
    ],
    officialNotes: [
      'Application: Any citizen can apply. Fee: ₹10 (Central), varies for states. BPL applicants exempted.',
      'Time Limit: 30 days normally, 48 hours if life/liberty involved, 40 days if third party involved',
      'Section 8 Exemptions: National security, commercial confidence, fiduciary relationship, cabinet papers, personal information, pending investigation, etc.',
      'Section 8(2): Information that cannot be denied to Parliament/Legislature cannot be denied to citizen',
      'Information Commissions: Central Information Commission (CIC) and State Information Commissions (SIC)',
      'Penalties: ₹250 per day delay, maximum ₹25,000 for unreasonable denial',
      'Amendment 2019: Salaries and tenures of Information Commissioners to be determined by Central Government'
    ]
  }
];

// ==================== CASE LAWS ====================
export const caseLaws: CaseLaw[] = [
  {
    id: 'case-1',
    caseName: 'Kesavananda Bharati v. State of Kerala',
    citation: 'AIR 1973 SC 1461',
    year: 1973,
    facts: 'Kesavananda Bharati, head of a religious mutt, challenged the Kerala Land Reforms Act which affected the mutt\'s property. The case raised the question of Parliament\'s power to amend the Constitution.',
    issue: 'Whether Parliament\'s power to amend the Constitution under Article 368 is unlimited?',
    judgment: 'By a 7:6 majority, the Supreme Court held that Parliament can amend any part of the Constitution but cannot alter its "basic structure."',
    principle: 'Basic Structure Doctrine - Parliament cannot amend the Constitution in a way that destroys its basic structure.',
    oneLiner: 'Parliament cannot amend the basic structure of the Constitution.',
    topic: 'Constitution',
    category: 'Constitutional Law',
    keywords: ['basic structure', 'Article 368', 'amendment', 'Parliament power'],
    significance: 'Foundation of judicial review over constitutional amendments.',
    importance: 'high'
  },
  {
    id: 'case-2',
    caseName: 'Maneka Gandhi v. Union of India',
    citation: 'AIR 1978 SC 597',
    year: 1978,
    facts: 'Maneka Gandhi\'s passport was impounded by the government without giving her a hearing or reasons. She challenged this under Article 21.',
    issue: 'Whether the right to travel abroad is part of personal liberty under Article 21?',
    judgment: 'The Court held that Article 21 requires procedure to be fair, just, and reasonable. Right to travel abroad is part of personal liberty.',
    principle: 'Article 21 requires procedure established by law to be right, just, fair, and not arbitrary, fanciful, or oppressive.',
    oneLiner: 'Right to life includes right to live with dignity; procedure must be fair, just and reasonable.',
    topic: 'Constitution',
    category: 'Fundamental Rights',
    keywords: ['Article 21', 'personal liberty', 'procedure established by law', 'passport'],
    significance: 'Expanded interpretation of Article 21 to include procedural fairness.',
    importance: 'high'
  },
  {
    id: 'case-3',
    caseName: 'Vishaka v. State of Rajasthan',
    citation: 'AIR 1997 SC 3011',
    year: 1997,
    facts: 'A social worker was gang-raped for trying to prevent child marriage. In absence of legislation, PIL was filed for guidelines against sexual harassment at workplace.',
    issue: 'Whether sexual harassment at workplace violates fundamental rights? What guidelines should exist in absence of legislation?',
    judgment: 'Supreme Court laid down detailed guidelines (Vishaka Guidelines) to prevent sexual harassment at workplace, treating them as law until legislation was passed.',
    principle: 'In absence of domestic law, courts can enforce international conventions and declarations which are not inconsistent with fundamental rights.',
    oneLiner: 'Sexual harassment at workplace violates Articles 14, 15, 19 and 21; Vishaka Guidelines laid down.',
    topic: 'Constitution'
  },
  {
    id: 'case-4',
    caseName: 'Mohori Bibee v. Dharmodas Ghose',
    citation: '(1903) 30 IA 114',
    year: 1903,
    facts: 'Dharmodas Ghose, a minor, mortgaged his property to a money lender. The money lender\'s agent knew about his minority. Later, Dharmodas sued to set aside the mortgage.',
    issue: 'Whether a contract entered into by a minor is void or voidable?',
    judgment: 'Privy Council held that a minor\'s agreement is absolutely void ab initio, not merely voidable.',
    principle: 'An agreement with a minor is void ab initio. Even if minor misrepresents age, contract remains void.',
    oneLiner: 'Contract with minor is void ab initio, not voidable.',
    topic: 'Contracts'
  },
  {
    id: 'case-5',
    caseName: 'Donoghue v. Stevenson',
    citation: '[1932] AC 562',
    year: 1932,
    facts: 'Mrs. Donoghue drank ginger beer from an opaque bottle containing a decomposed snail. She suffered shock and gastroenteritis. The bottle was bought by her friend, so no contract with manufacturer.',
    issue: 'Does a manufacturer owe duty of care to ultimate consumer in absence of contract?',
    judgment: 'House of Lords held manufacturers owe a duty of care to consumers. Established the "neighbour principle."',
    principle: 'Neighbour Principle - You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbour.',
    oneLiner: 'Manufacturer owes duty of care to ultimate consumer; "neighbour principle" established.',
    topic: 'Torts'
  },
  {
    id: 'case-6',
    caseName: 'M.C. Mehta v. Union of India (Oleum Gas Leak)',
    citation: 'AIR 1987 SC 1086',
    year: 1987,
    facts: 'Oleum gas leaked from Shriram Industries in Delhi causing death and injuries. The question was about liability of enterprises engaged in hazardous activities.',
    issue: 'What is the standard of liability for enterprises engaged in inherently dangerous activities?',
    judgment: 'Supreme Court evolved the principle of "Absolute Liability" - no exceptions to strict liability for hazardous industries.',
    principle: 'Absolute Liability - Enterprise engaged in hazardous activity is absolutely liable for harm, no exceptions like act of God or third party apply.',
    oneLiner: 'Absolute liability for hazardous industries - no exceptions allowed.',
    topic: 'Torts'
  },
  {
    id: 'case-7',
    caseName: 'Golaknath v. State of Punjab',
    citation: 'AIR 1967 SC 1643',
    year: 1967,
    facts: 'The Golaknath family\'s land was to be acquired under Punjab land reform laws. They challenged Parliament\'s power to amend fundamental rights.',
    issue: 'Can Parliament amend Fundamental Rights under Article 368?',
    judgment: 'By 6:5 majority, Supreme Court held that Parliament cannot amend Fundamental Rights as they are transcendental and immutable.',
    principle: 'Fundamental Rights cannot be amended by Parliament (later overruled partly by Kesavananda Bharati).',
    oneLiner: 'Parliament cannot amend Fundamental Rights (overruled by Kesavananda Bharati).',
    topic: 'Constitution'
  },
  {
    id: 'case-8',
    caseName: 'Rylands v. Fletcher',
    citation: '(1868) LR 3 HL 330',
    year: 1868,
    facts: 'Fletcher constructed a reservoir on his land. Water escaped through old mine shafts and flooded Rylands\' mine. Fletcher was not negligent.',
    issue: 'Is a person liable for damage caused by escape of dangerous things from his land even without negligence?',
    judgment: 'House of Lords held that a person who brings dangerous things on land is strictly liable for damage if they escape.',
    principle: 'Strict Liability - One who brings dangerous things on land for non-natural use is liable if they escape and cause damage.',
    oneLiner: 'Strict liability for escape of dangerous things brought on land for non-natural use.',
    topic: 'Torts'
  },
  {
    id: 'case-9',
    caseName: 'Ashby v. White',
    citation: '(1703) 2 Ld Raym 938',
    year: 1703,
    facts: 'Ashby, a qualified voter, was wrongfully prevented from voting by White, a returning officer. The candidate Ashby wanted to vote for won anyway.',
    issue: 'Can a person claim damages when his legal right is violated even if no actual damage occurred?',
    judgment: 'Court held that violation of legal right is actionable even without proof of actual damage.',
    principle: 'Injuria sine damno - Violation of legal right is actionable even without actual damage.',
    oneLiner: 'Legal right violated = actionable, even without actual damage (injuria sine damno).',
    topic: 'Torts'
  },
  {
    id: 'case-10',
    caseName: 'S.R. Bommai v. Union of India',
    citation: 'AIR 1994 SC 1918',
    year: 1994,
    facts: 'Several state governments were dismissed under Article 356 (President\'s Rule). The validity of such dismissals was challenged.',
    issue: 'What are the limits of Article 356? Is secularism part of basic structure?',
    judgment: 'Court held secularism is part of basic structure. Article 356 is subject to judicial review. President\'s Rule can be imposed only when constitutional machinery has actually broken down.',
    principle: 'Secularism is part of basic structure. Article 356 is justiciable and subject to judicial review.',
    oneLiner: 'Secularism is basic structure; Article 356 is subject to judicial review.',
    topic: 'Constitution',
    category: 'Constitutional Law',
    keywords: ['secularism', 'basic structure', 'Article 356', 'President\'s Rule'],
    significance: 'Established limits on arbitrary use of Article 356 and confirmed secularism as basic structure.',
    importance: 'high'
  },
  {
    id: 'case-11',
    caseName: 'Indra Sawhney v. Union of India',
    citation: 'AIR 1993 SC 477',
    year: 1992,
    facts: 'Government implemented Mandal Commission recommendations providing 27% reservation for OBCs. This was challenged as violating equality under Article 14.',
    issue: 'Is the 27% OBC reservation valid? What is the ceiling on total reservations?',
    judgment: 'Court upheld OBC reservations but capped total reservations at 50%. Excluded "creamy layer" of OBCs from benefits.',
    principle: 'Total reservation should not exceed 50% except in exceptional circumstances. Creamy layer among backward classes should be excluded.',
    oneLiner: '50% ceiling on reservations; creamy layer excluded from OBC quota.',
    topic: 'Constitution',
    category: 'Fundamental Rights',
    keywords: ['reservation', '50% rule', 'OBC', 'creamy layer', 'Mandal Commission'],
    significance: 'Set the constitutional framework for reservation policy in India.',
    importance: 'high'
  },
  {
    id: 'case-12',
    caseName: 'Olga Tellis v. Bombay Municipal Corporation',
    citation: 'AIR 1986 SC 180',
    year: 1985,
    facts: 'BMC sought to evict pavement dwellers from Bombay streets. Dwellers challenged this as violation of their right to livelihood under Article 21.',
    issue: 'Does right to life under Article 21 include right to livelihood?',
    judgment: 'Court held right to life includes right to livelihood. However, pavement dwellers could be evicted as footpaths are public property, but only after reasonable notice.',
    principle: 'Right to life under Article 21 includes right to livelihood. Eviction must follow due process.',
    oneLiner: 'Right to life includes right to livelihood.',
    topic: 'Constitution',
    category: 'Fundamental Rights',
    keywords: ['Article 21', 'right to livelihood', 'pavement dwellers', 'eviction'],
    significance: 'Expanded scope of Article 21 to include economic rights.',
    importance: 'high'
  },
  {
    id: 'case-13',
    caseName: 'Shreya Singhal v. Union of India',
    citation: 'AIR 2015 SC 1523',
    year: 2015,
    facts: 'Section 66A of IT Act 2000 criminalized sending offensive messages through communication services. It was challenged for being vague and violating free speech.',
    issue: 'Whether Section 66A violates Article 19(1)(a) right to free speech?',
    judgment: 'Supreme Court struck down Section 66A as unconstitutional for being vague and having chilling effect on free speech.',
    principle: 'Vague laws that restrict free speech are unconstitutional. Terms like "offensive" and "annoying" are too subjective for criminal law.',
    oneLiner: 'Section 66A struck down for being vague and violating free speech.',
    topic: 'Constitution',
    category: 'Fundamental Rights',
    keywords: ['Article 19', 'free speech', 'Section 66A', 'IT Act', 'internet freedom'],
    significance: 'Landmark digital rights case protecting online free speech.',
    importance: 'high'
  },
  {
    id: 'case-14',
    caseName: 'Puttaswamy v. Union of India (Privacy)',
    citation: '(2017) 10 SCC 1',
    year: 2017,
    facts: 'Aadhaar scheme was challenged on privacy grounds. Court examined whether right to privacy is a fundamental right.',
    issue: 'Is right to privacy a fundamental right under the Constitution?',
    judgment: 'Nine-judge bench unanimously held that right to privacy is a fundamental right under Article 21. It includes informational privacy, bodily autonomy, and privacy of choice.',
    principle: 'Right to Privacy is a fundamental right protected under Article 21, subject to reasonable restrictions.',
    oneLiner: 'Right to privacy is a fundamental right under Article 21.',
    topic: 'Constitution',
    category: 'Fundamental Rights',
    keywords: ['privacy', 'Article 21', 'Aadhaar', 'fundamental right', 'informational privacy'],
    significance: 'Established privacy as fundamental right; basis for many subsequent judgments on personal autonomy.',
    importance: 'high'
  },
  {
    id: 'case-15',
    caseName: 'Navtej Singh Johar v. Union of India',
    citation: '(2018) 10 SCC 1',
    year: 2018,
    facts: 'Section 377 IPC criminalized "unnatural offences." LGBTQ+ community challenged it as violating dignity, privacy, and equality.',
    issue: 'Whether Section 377 IPC violates fundamental rights of LGBTQ+ persons?',
    judgment: 'Supreme Court partially struck down Section 377, decriminalizing consensual homosexual acts between adults.',
    principle: 'Section 377 insofar as it criminalizes consensual sexual acts between adults is unconstitutional. Sexual orientation is part of privacy and dignity.',
    oneLiner: 'Section 377 (consensual homosexual acts) struck down; LGBTQ+ rights recognized.',
    topic: 'Constitution',
    category: 'Fundamental Rights',
    keywords: ['Section 377', 'LGBTQ+', 'privacy', 'dignity', 'decriminalization'],
    significance: 'Historic judgment for LGBTQ+ rights in India.',
    importance: 'high'
  },
  {
    id: 'case-16',
    caseName: 'Minerva Mills v. Union of India',
    citation: 'AIR 1980 SC 1789',
    year: 1980,
    facts: 'Minerva Mills challenged the 42nd Amendment which gave primacy to DPSPs over Fundamental Rights and made amendments non-justiciable.',
    issue: 'Whether the 42nd Amendment provisions limiting judicial review are constitutional?',
    judgment: 'Supreme Court struck down clauses 4 and 5 of Article 368, holding that judicial review is part of basic structure.',
    principle: 'Judicial review is part of basic structure. Constitution maintains balance between Fundamental Rights and DPSPs - neither is superior.',
    oneLiner: 'Judicial review is basic structure; balance between FR and DPSP is essential.',
    topic: 'Constitution',
    category: 'Constitutional Law',
    keywords: ['42nd Amendment', 'judicial review', 'basic structure', 'Article 368'],
    significance: 'Reaffirmed basic structure doctrine and importance of judicial review.',
    importance: 'high'
  },
  {
    id: 'case-17',
    caseName: 'A.K. Gopalan v. State of Madras',
    citation: 'AIR 1950 SC 27',
    year: 1950,
    facts: 'A.K. Gopalan, a Communist leader, was detained under Preventive Detention Act 1950. He challenged detention under Articles 19, 21, and 22.',
    issue: 'Whether Articles 19, 21, and 22 should be read together or separately?',
    judgment: 'Court held each fundamental right is independent. Article 21 only requires procedure established by law, need not be fair or just.',
    principle: 'Each Fundamental Right operates in its own field independently (Later overruled by Maneka Gandhi case).',
    oneLiner: 'Articles 19, 21, 22 are independent (overruled by Maneka Gandhi).',
    topic: 'Constitution',
    category: 'Fundamental Rights',
    keywords: ['preventive detention', 'Article 21', 'procedure established by law'],
    significance: 'First major FR case; narrow interpretation later overruled.',
    importance: 'high'
  },
  {
    id: 'case-18',
    caseName: 'Shankari Prasad v. Union of India',
    citation: 'AIR 1951 SC 458',
    year: 1951,
    facts: 'First Amendment to Constitution was challenged for abridging Fundamental Rights (inserted Article 31A and 31B).',
    issue: 'Can Parliament amend Fundamental Rights under Article 368?',
    judgment: 'Court held that "law" in Article 13(2) does not include constitutional amendments. Parliament can amend any part including FRs.',
    principle: 'Constitutional amendments are not "law" under Article 13, hence can modify Fundamental Rights.',
    oneLiner: 'Parliament can amend Fundamental Rights; amendments not covered by Article 13.',
    topic: 'Constitution',
    category: 'Constitutional Law',
    keywords: ['First Amendment', 'Article 368', 'Article 13', 'amendment power'],
    significance: 'Established Parliament\'s wide amending power (later modified by Kesavananda).',
    importance: 'medium'
  },
  {
    id: 'case-19',
    caseName: 'I.C. Golaknath v. State of Punjab',
    citation: 'AIR 1967 SC 1643',
    year: 1967,
    facts: 'Punjab land reform laws were challenged. The question was Parliament\'s power to amend Fundamental Rights.',
    issue: 'Can Parliament amend Fundamental Rights?',
    judgment: 'By 6:5 majority, Court held that Parliament cannot amend Fundamental Rights as they are transcendental.',
    principle: 'Fundamental Rights cannot be amended by Parliament (overruled by Kesavananda Bharati).',
    oneLiner: 'FRs cannot be amended (overruled by Kesavananda).',
    topic: 'Constitution',
    category: 'Constitutional Law',
    keywords: ['Fundamental Rights', 'amendment', 'Article 368', 'transcendental'],
    significance: 'Led to 24th Amendment; partly overruled by Kesavananda.',
    importance: 'high'
  },
  {
    id: 'case-20',
    caseName: 'Sajjan Singh v. State of Rajasthan',
    citation: 'AIR 1965 SC 845',
    year: 1965,
    facts: '17th Amendment was challenged which inserted certain state laws in 9th Schedule.',
    issue: 'Whether Parliament can amend Fundamental Rights?',
    judgment: 'Court upheld Shankari Prasad, holding Parliament can amend any part of Constitution including FRs.',
    principle: 'Reaffirmed Parliament\'s power to amend Fundamental Rights.',
    oneLiner: 'Followed Shankari Prasad; Parliament can amend FRs.',
    topic: 'Constitution',
    category: 'Constitutional Law',
    keywords: ['17th Amendment', '9th Schedule', 'amendment power'],
    significance: 'Continued trend of upholding amendment power before Golaknath.',
    importance: 'medium'
  },
  {
    id: 'case-21',
    caseName: 'Waman Rao v. Union of India',
    citation: 'AIR 1981 SC 271',
    year: 1981,
    facts: 'Laws placed in 9th Schedule after Kesavananda Bharati were challenged.',
    issue: 'Whether laws in 9th Schedule after April 24, 1973 can be challenged?',
    judgment: 'Court held laws placed in 9th Schedule after April 24, 1973 can be challenged if they violate basic structure.',
    principle: 'Laws in 9th Schedule after Kesavananda date can be challenged for violating basic structure.',
    oneLiner: 'Post-Kesavananda 9th Schedule laws can be challenged.',
    topic: 'Constitution',
    category: 'Constitutional Law',
    keywords: ['9th Schedule', 'basic structure', 'Kesavananda', 'judicial review'],
    significance: 'Set cutoff date for 9th Schedule protection.',
    importance: 'medium'
  },
  {
    id: 'case-22',
    caseName: 'I.R. Coelho v. State of Tamil Nadu',
    citation: '(2007) 2 SCC 1',
    year: 2007,
    facts: 'Tamil Nadu reservation laws in 9th Schedule were challenged for violating basic structure.',
    issue: 'Whether any law in 9th Schedule can be challenged for violating basic structure?',
    judgment: 'Nine-judge bench held that all laws in 9th Schedule (irrespective of date) can be challenged if they violate basic structure or fundamental rights.',
    principle: 'No law is immune from judicial review if it violates basic structure, even if in 9th Schedule.',
    oneLiner: 'All 9th Schedule laws subject to basic structure test.',
    topic: 'Constitution',
    category: 'Constitutional Law',
    keywords: ['9th Schedule', 'basic structure', 'judicial review', 'fundamental rights'],
    significance: 'Expanded judicial review over 9th Schedule laws.',
    importance: 'high'
  },
  {
    id: 'case-23',
    caseName: 'ADM Jabalpur v. Shivkant Shukla',
    citation: 'AIR 1976 SC 1207',
    year: 1976,
    facts: 'During Emergency (1975-77), habeas corpus petitions by detainees were rejected by High Courts. Question was whether Article 21 can be suspended during Emergency.',
    issue: 'Can the right to life under Article 21 be suspended during Emergency?',
    judgment: 'By 4:1 majority, Court held that during Emergency, no person can move court for enforcement of Article 21. Justice H.R. Khanna dissented.',
    principle: 'During Emergency, even right to life can be suspended (Later overruled by 44th Amendment).',
    oneLiner: 'Article 21 can be suspended in Emergency (overruled by 44th Amendment).',
    topic: 'Constitution',
    category: 'Fundamental Rights',
    keywords: ['Emergency', 'Article 21', 'habeas corpus', 'Khanna dissent'],
    significance: 'Darkest hour of Indian judiciary; led to 44th Amendment protecting Art 20 & 21.',
    importance: 'high'
  },
  {
    id: 'case-24',
    caseName: 'State of West Bengal v. Committee for Protection of Democratic Rights',
    citation: '(2010) 3 SCC 571',
    year: 2010,
    facts: 'State government challenged transfer of investigation to CBI by High Court in a case involving state police.',
    issue: 'Can High Court transfer investigation to CBI without state consent?',
    judgment: 'Supreme Court held that in extraordinary circumstances affecting fundamental rights, High Court can order CBI investigation even without state consent.',
    principle: 'High Courts can order CBI investigation to protect fundamental rights, even against state\'s wish.',
    oneLiner: 'HC can order CBI probe without state consent in exceptional cases.',
    topic: 'Constitution',
    category: 'Criminal Law',
    keywords: ['CBI investigation', 'federalism', 'High Court powers', 'fundamental rights'],
    significance: 'Balanced federalism with protection of fundamental rights.',
    importance: 'medium'
  },
  {
    id: 'case-25',
    caseName: 'Arnesh Kumar v. State of Bihar',
    citation: '(2014) 8 SCC 273',
    year: 2014,
    facts: 'Accused was arrested in a dowry harassment case (Section 498A IPC) without proper procedure.',
    issue: 'Can police arrest without following proper procedure in cognizable offences punishable up to 7 years?',
    judgment: 'Court laid down guidelines that arrest is not mandatory even in cognizable cases. Police must follow checklist before arrest.',
    principle: 'Arrest should be exception, not rule. Section 41 CrPC guidelines must be followed for offences punishable up to 7 years.',
    oneLiner: 'Arrest not mandatory in cognizable cases; Section 41 CrPC checklist must be followed.',
    topic: 'Criminal Law',
    category: 'Criminal Law',
    keywords: ['arrest', 'Section 498A', 'Section 41 CrPC', 'personal liberty'],
    significance: 'Protected against arbitrary arrests; mandatory guidelines for police.',
    importance: 'high'
  }
];
