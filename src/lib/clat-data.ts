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
  { id: 'gk-50', statement: 'PM CARES Fund created in March 2020 for COVID-19 emergency response', category: 'schemes', date: '2020-03', importance: 'medium' }
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
  }
];
