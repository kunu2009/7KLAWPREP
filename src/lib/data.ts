
import type { MCQ, Note, StudyEvent, Flashcard, Reel, CareerPath, CaseSimulation, VisualLawItem } from './types';

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
  },
  {
    id: 'mcq-25',
    topic: 'Constitution',
    question: 'The words "SOCIALIST SECULAR" were added to the Preamble by which amendment?',
    options: ['42nd Amendment', '44th Amendment', '1st Amendment', '24th Amendment'],
    correctAnswerIndex: 0,
    explanation: 'The words "SOCIALIST" and "SECULAR" were added to the Preamble of the Indian Constitution by the 42nd Amendment Act, 1976.',
  },
  {
    id: 'mcq-26',
    topic: 'Constitution',
    question: 'Under which Article can the President of India declare a financial emergency?',
    options: ['Article 352', 'Article 356', 'Article 360', 'Article 368'],
    correctAnswerIndex: 2,
    explanation: 'Article 360 of the Constitution empowers the President to proclaim a financial emergency if he is satisfied that a situation has arisen whereby the financial stability or credit of India or of any part of the territory thereof is threatened.',
  },
  {
    id: 'mcq-27',
    topic: 'Legal Aptitude',
    question: 'The principle of "Vicarious Liability" is primarily a part of:',
    options: ['Criminal Law', 'Law of Torts', 'Contract Law', 'Constitutional Law'],
    correctAnswerIndex: 1,
    explanation: 'Vicarious liability holds one person responsible for the actions of another. It is a key concept in the Law of Torts, particularly in employer-employee relationships.',
  },
  {
    id: 'mcq-28',
    topic: 'Legal Aptitude',
    question: 'What is the essential element that distinguishes theft from criminal misappropriation?',
    options: ['The value of the property', 'The intention to cause wrongful gain', 'Taking property without the owner\'s consent', 'The type of property involved'],
    correctAnswerIndex: 2,
    explanation: 'In theft, the initial taking of the property is dishonest and without the owner\'s consent. In criminal misappropriation, the offender initially possesses the property legally but then dishonestly converts it for their own use.',
  },
  {
    id: 'mcq-29',
    topic: 'General Knowledge',
    question: 'The "Dandi March" led by Mahatma Gandhi was associated with:',
    options: ['The Non-Cooperation Movement', 'The Quit India Movement', 'The Civil Disobedience Movement', 'The Khilafat Movement'],
    correctAnswerIndex: 2,
    explanation: 'The Dandi March, or Salt March, was a major act of nonviolent civil disobedience that initiated the Civil Disobedience Movement in 1930.',
  },
  {
    id: 'mcq-30',
    topic: 'English',
    question: 'Choose the correct meaning of the idiom "To bite the bullet".',
    options: ['To eat very quickly', 'To get injured', 'To face a difficult situation with courage', 'To reject an offer'],
    correctAnswerIndex: 2,
    explanation: 'The idiom "to bite the bullet" means to decide to do something difficult or unpleasant that one has been putting off or hesitating over.',
  },
  {
    id: 'mcq-31',
    topic: 'Current Affairs',
    question: 'The \'BRICS\' group of emerging economies originally consisted of Brazil, Russia, India, and China. Which country was added later to form "BRICS"?',
    options: ['Singapore', 'South Africa', 'Saudi Arabia', 'Spain'],
    correctAnswerIndex: 1,
    explanation: 'South Africa was formally invited to join the BRIC group in 2010, resulting in the acronym being changed to BRICS.',
  },
  {
    id: 'mcq-32',
    topic: 'Logical Reasoning',
    question: 'In a certain code, "TEACHER" is written as "VGCEJGT". How is "CHILDREN" written in that code?',
    options: ['EJKNEGTP', 'EJKNFTGP', 'EJNFITP', 'EJKNFTGQ'],
    correctAnswerIndex: 1,
    explanation: 'The pattern is +2 for each letter. T(+2)=V, E(+2)=G, A(+2)=C, and so on. Applying this to CHILDREN: C(+2)=E, H(+2)=J, I(+2)=K, L(+2)=N, D(+2)=F, R(+2)=T, E(+2)=G, N(+2)=P. So, EJKNFTGP.',
  },
  {
    id: 'mcq-33',
    topic: 'Constitution',
    question: 'The power of the Supreme Court of India to decide disputes between the Centre and the States falls under its:',
    options: ['Advisory Jurisdiction', 'Appellate Jurisdiction', 'Original Jurisdiction', 'Writ Jurisdiction'],
    correctAnswerIndex: 2,
    explanation: 'Under Article 131, the Supreme Court has original jurisdiction in any dispute between the Government of India and one or more States, or between two or more States.',
  },
  {
    id: 'mcq-34',
    topic: 'Legal Aptitude',
    question: 'Legal Principle: "Quid pro quo" means something in return. A contract is not valid without consideration. Fact: A agrees to sell his house to B for 10 rupees. Is this a valid contract?',
    options: ['No, because 10 rupees is not adequate consideration.', 'Yes, because consideration need not be adequate, but it must be real.', 'No, it is a gift, not a contract.', 'Yes, but it is a voidable contract.'],
    correctAnswerIndex: 1,
    explanation: 'The law states that consideration must be present ("something in return"), but it does not require that the consideration be adequate. As long as some value is exchanged, the contract is valid.',
  },
  {
    id: 'mcq-35',
    topic: 'English',
    question: 'A person who is fluent in many languages is called a:',
    options: ['Linguist', 'Polyglot', 'Orator', 'Bilingual'],
    correctAnswerIndex: 1,
    explanation: 'A polyglot is someone who knows and is able to use several languages. A linguist studies language, but may not speak many.',
  },
  {
    id: 'mcq-36',
    topic: 'Logical Reasoning',
    question: 'Pointing to a girl, Rajan said, "She is the daughter of my mother\'s daughter." How is the girl related to Rajan?',
    options: ['Aunt', 'Niece', 'Cousin', 'Sister'],
    correctAnswerIndex: 1,
    explanation: 'Rajan\'s mother\'s daughter is Rajan\'s sister. The girl is the daughter of Rajan\'s sister. Therefore, the girl is Rajan\'s niece.',
  },
  {
    id: 'mcq-37',
    topic: 'General Knowledge',
    question: 'The Indus Valley Civilization is also known as the:',
    options: ['Mesopotamian Civilization', 'Harappan Civilization', 'Egyptian Civilization', 'Vedic Civilization'],
    correctAnswerIndex: 1,
    explanation: 'The Indus Valley Civilization is also called the Harappan Civilization after Harappa, the first of its sites to be excavated in the 1920s.',
  },
  {
    id: 'mcq-38',
    topic: 'Constitution',
    question: 'The idea of "Directive Principles of State Policy" in the Indian Constitution has been borrowed from the Constitution of:',
    options: ['France', 'USA', 'Ireland', 'UK'],
    correctAnswerIndex: 2,
    explanation: 'The Directive Principles of State Policy are inspired by the Irish Constitution.',
  },
  {
    id: 'mcq-39',
    topic: 'Legal Aptitude',
    question: 'An assault is:',
    options: ['The intentional application of force to another person.', 'An act which causes another person to apprehend the infliction of immediate, unlawful force.', 'A false statement that harms someone\'s reputation.', 'The unlawful confinement of a person.'],
    correctAnswerIndex: 1,
    explanation: 'Assault is an act that creates a reasonable apprehension of immediate harmful or offensive contact. The actual contact itself is called battery.',
  },
  {
    id: 'mcq-40',
    topic: 'English',
    question: 'Find the correctly spelt word.',
    options: ['Accomodate', 'Acommodate', 'Accommodate', 'Acomodate'],
    correctAnswerIndex: 2,
    explanation: 'The correct spelling is "Accommodate", with double \'c\' and double \'m\'.',
  },
  {
    id: 'mcq-41',
    topic: 'Constitution',
    question: "The concept of 'Judicial Review' in India is taken from which country's constitution?",
    options: ['United Kingdom', 'USA', 'Canada', 'Australia'],
    correctAnswerIndex: 1,
    explanation: 'The concept of Judicial Review, the power of the judiciary to examine the constitutionality of legislative enactments and executive orders, was borrowed from the Constitution of the USA.',
  },
  {
    id: 'mcq-42',
    topic: 'Constitution',
    question: 'Who administers the oath of office to the President of India?',
    options: ['The Prime Minister', 'The Speaker of the Lok Sabha', 'The Chief Justice of India', 'The outgoing President'],
    correctAnswerIndex: 2,
    explanation: 'The oath of office to the President of India is administered by the Chief Justice of India, and in their absence, the senior-most judge of the Supreme Court available.',
  },
  {
    id: 'mcq-43',
    topic: 'Constitution',
    question: 'Which schedule of the Indian Constitution deals with the allocation of seats in the Rajya Sabha?',
    options: ['Third Schedule', 'Fourth Schedule', 'Fifth Schedule', 'Sixth Schedule'],
    correctAnswerIndex: 1,
    explanation: 'The Fourth Schedule of the Constitution deals with the allocation of seats for states and union territories in the Rajya Sabha (Council of States).',
  },
  {
    id: 'mcq-44',
    topic: 'Constitution',
    question: 'What is the minimum age for becoming a member of the Lok Sabha?',
    options: ['21 years', '25 years', '30 years', '35 years'],
    correctAnswerIndex: 1,
    explanation: 'According to Article 84(b) of the Indian Constitution, the minimum age for a person to be a member of the Lok Sabha is 25 years.',
  },
  {
    id: 'mcq-45',
    topic: 'Constitution',
    question: 'The total number of members nominated by the President to the Rajya Sabha is:',
    options: ['2', '10', '12', '14'],
    correctAnswerIndex: 2,
    explanation: 'The President of India can nominate 12 members to the Rajya Sabha for their contributions to art, literature, science, and social services. The provision for nominating Anglo-Indians to Lok Sabha has been abolished.',
  },
  {
    id: 'mcq-46',
    topic: 'Constitution',
    question: 'Who is the ex-officio Chairman of the Rajya Sabha?',
    options: ['President of India', 'Vice-President of India', 'Prime Minister of India', 'Speaker of Lok Sabha'],
    correctAnswerIndex: 1,
    explanation: 'The Vice-President of India is the ex-officio Chairman of the Rajya Sabha (Council of States).',
  },
  {
    id: 'mcq-47',
    topic: 'Constitution',
    question: 'Which part of the Indian Constitution deals with the Panchayats?',
    options: ['Part VIII', 'Part IX', 'Part IX-A', 'Part X'],
    correctAnswerIndex: 1,
    explanation: 'Part IX of the Constitution, titled "The Panchayats," was added by the 73rd Constitutional Amendment Act of 1992.',
  },
  {
    id: 'mcq-48',
    topic: 'Constitution',
    question: 'A Money Bill can only be introduced in:',
    options: ['The Rajya Sabha', 'The Lok Sabha', 'Either House of Parliament', 'A joint session of Parliament'],
    correctAnswerIndex: 1,
    explanation: 'As per Article 110 of the Constitution, a Money Bill can only be introduced in the Lok Sabha, and that too on the recommendation of the President.',
  },
  {
    id: 'mcq-49',
    topic: 'Legal Aptitude',
    question: 'The maxim "Ubi jus ibi remedium" means:',
    options: ['No one is a judge in his own cause', 'Where there is a right, there is a remedy', 'The law does not concern itself with trifles', 'An act of God'],
    correctAnswerIndex: 1,
    explanation: 'This legal maxim means that for every legal right that is violated, the law provides a remedy to the injured person.',
  },
  {
    id: 'mcq-50',
    topic: 'Legal Aptitude',
    question: 'What does "pro bono publico" mean?',
    options: ['For the public good', 'In good faith', 'A guilty mind', 'Something for something'],
    correctAnswerIndex: 0,
    explanation: '"Pro bono publico" is a Latin phrase that means "for the public good." It often refers to legal work undertaken voluntarily and without payment.',
  },
  {
    id: 'mcq-51',
    topic: 'Legal Aptitude',
    question: "'Battery' in the Law of Torts is defined as:",
    options: ['Threatening to cause harm', 'The intentional and direct application of force to another person', 'Damaging someone\'s reputation', 'Unlawful entry onto another\'s land'],
    correctAnswerIndex: 1,
    explanation: 'Battery is the actual act of inflicting unlawful physical harm or offensive contact upon a person. It is intentional and non-consensual.',
  },
  {
    id: 'mcq-52',
    topic: 'Legal Aptitude',
    question: 'The principle of "Res Ipsa Loquitur" is used to infer:',
    options: ['Malice', 'Intention', 'Negligence', 'Consent'],
    correctAnswerIndex: 2,
    explanation: '"Res Ipsa Loquitur" means "the thing speaks for itself." It is a doctrine that allows a plaintiff to infer negligence from the very nature of an accident or injury in the absence of direct evidence on how any defendant behaved.',
  },
  {
    id: 'mcq-53',
    topic: 'Legal Aptitude',
    question: "A 'plaintiff' is a person who:",
    options: ['Defends against a lawsuit', 'Files a lawsuit', 'Acts as a judge in a case', 'Is a witness in a case'],
    correctAnswerIndex: 1,
    explanation: 'The plaintiff is the party who initiates a lawsuit (also known as an action) before a court.',
  },
  {
    id: 'mcq-54',
    topic: 'Legal Aptitude',
    question: "An 'injunction' is a court order that:",
    options: ['Awards monetary compensation', 'Declares a law unconstitutional', 'Compels or prevents a specific action', 'Sentences a person to prison'],
    correctAnswerIndex: 2,
    explanation: 'An injunction is a judicial remedy issued in the form of a court order that compels a party to do or refrain from doing specific acts.',
  },
  {
    id: 'mcq-55',
    topic: 'Legal Aptitude',
    question: "The term 'alibi' in criminal law is a:",
    options: ['Type of evidence', 'Confession of guilt', 'Defense of being elsewhere', 'Plea for a lighter sentence'],
    correctAnswerIndex: 2,
    explanation: 'An alibi is a defense in which a defendant claims to have been at another place at the time a crime was committed.',
  },
  {
    id: 'mcq-56',
    topic: 'Legal Aptitude',
    question: "'Slander' is a form of defamation that is communicated through:",
    options: ['Writing', 'Spoken words', 'Gestures', 'All of the above'],
    correctAnswerIndex: 1,
    explanation: 'Defamation is divided into slander (spoken defamation) and libel (written or published defamation).',
  },
  {
    id: 'mcq-57',
    topic: 'General Knowledge',
    question: "Who is the author of 'Arthashastra'?",
    options: ['Kalidasa', 'Vishakhadatta', 'Kautilya', 'Banabhatta'],
    correctAnswerIndex: 2,
    explanation: 'The Arthashastra is an ancient Indian treatise on statecraft, economic policy, and military strategy, attributed to Kautilya (also known as Chanakya).',
  },
  {
    id: 'mcq-58',
    topic: 'General Knowledge',
    question: 'The First Battle of Panipat in 1526 was fought between:',
    options: ['Akbar and Hemu', 'Babur and Ibrahim Lodi', 'Humayun and Sher Shah Suri', 'Ahmed Shah Abdali and the Marathas'],
    correctAnswerIndex: 1,
    explanation: 'The First Battle of Panipat was fought between the invading forces of Babur and the Lodi dynasty, which marked the beginning of the Mughal Empire in India.',
  },
  {
    id: 'mcq-59',
    topic: 'General Knowledge',
    question: 'What is the capital city of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswerIndex: 2,
    explanation: 'While Sydney and Melbourne are larger and more famous, Canberra was chosen as the capital city of Australia in 1908 as a compromise between the two rivals.',
  },
  {
    id: 'mcq-60',
    topic: 'General Knowledge',
    question: 'The Durand Line forms the border between:',
    options: ['India and Pakistan', 'India and Afghanistan', 'Afghanistan and Pakistan', 'India and China'],
    correctAnswerIndex: 2,
    explanation: 'The Durand Line is the international 2,670-kilometer land border between Afghanistan and Pakistan in South-Central Asia.',
  },
  {
    id: 'mcq-61',
    topic: 'General Knowledge',
    question: 'Who was the first Indian to win a Nobel Prize?',
    options: ['C. V. Raman', 'Mother Teresa', 'Amartya Sen', 'Rabindranath Tagore'],
    correctAnswerIndex: 3,
    explanation: 'Rabindranath Tagore was the first Indian (and first non-European) to win the Nobel Prize in Literature in 1913 for his work "Gitanjali".',
  },
  {
    id: 'mcq-62',
    topic: 'General Knowledge',
    question: 'Which planet in our solar system is known as the "Red Planet"?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswerIndex: 1,
    explanation: 'Mars is often called the "Red Planet" because the iron oxide prevalent on its surface gives it a reddish appearance.',
  },
  {
    id: 'mcq-63',
    topic: 'General Knowledge',
    question: 'The scientific study of earthquakes is called:',
    options: ['Geology', 'Seismology', 'Meteorology', 'Volcanology'],
    correctAnswerIndex: 1,
    explanation: 'Seismology is the scientific study of earthquakes and the propagation of elastic waves (seismic waves) through the Earth.',
  },
  {
    id: 'mcq-64',
    topic: 'General Knowledge',
    question: 'Who founded the Mauryan Empire?',
    options: ['Ashoka', 'Bindusara', 'Chandragupta Maurya', 'Bimbisara'],
    correctAnswerIndex: 2,
    explanation: 'The Mauryan Empire was founded in 322 BCE by Chandragupta Maurya, who had overthrown the Nanda Dynasty.',
  },
  {
    id: 'mcq-65',
    topic: 'General Knowledge',
    question: 'The headquarters of UNESCO is located in:',
    options: ['Geneva, Switzerland', 'New York, USA', 'Paris, France', 'Rome, Italy'],
    correctAnswerIndex: 2,
    explanation: 'The headquarters of the United Nations Educational, Scientific and Cultural Organization (UNESCO) is located in Paris, France.',
  },
  {
    id: 'mcq-66',
    topic: 'English',
    question: "What is the one-word substitution for 'a place where birds are kept'?",
    options: ['Aquarium', 'Apiary', 'Aviary', 'Zoo'],
    correctAnswerIndex: 2,
    explanation: 'An aviary is a large cage, building, or enclosure for keeping birds in. An apiary is for bees.',
  },
  {
    id: 'mcq-67',
    topic: 'English',
    question: "What is the synonym for 'obfuscate'?",
    options: ['Clarify', 'Simplify', 'Explain', 'Confuse'],
    correctAnswerIndex: 3,
    explanation: 'To obfuscate means to make something obscure, unclear, or unintelligible. "Confuse" is the closest synonym.',
  },
  {
    id: 'mcq-68',
    topic: 'English',
    question: "What is the antonym for 'benevolent'?",
    options: ['Generous', 'Kind', 'Malevolent', 'Helpful'],
    correctAnswerIndex: 2,
    explanation: 'Benevolent means well-meaning and kindly. Malevolent means having or showing a wish to do evil to others.',
  },
  {
    id: 'mcq-69',
    topic: 'English',
    question: "What does the idiom 'a blessing in disguise' mean?",
    options: ['A solution that is obvious', 'A bad thing that seems good at first', 'A good thing that seemed bad at first', 'Something that is impossible to achieve'],
    correctAnswerIndex: 2,
    explanation: 'The idiom refers to something that appears to be a misfortune at first but turns out to have unexpected benefits.',
  },
  {
    id: 'mcq-70',
    topic: 'English',
    question: 'Choose the correctly spelled word.',
    options: ['Entreprenuer', 'Entrepranur', 'Entrepreneur', 'Entreprenur'],
    correctAnswerIndex: 2,
    explanation: 'The correct spelling for a person who sets up a business, taking on financial risks, is "Entrepreneur".',
  },
  {
    id: 'mcq-71',
    topic: 'English',
    question: "The idiom 'to be in a tight corner' means:",
    options: ['To be in a small room', 'To be in a difficult situation', 'To be very organized', 'To be secretive'],
    correctAnswerIndex: 1,
    explanation: 'Being "in a tight corner" or "in a tight spot" means being in a situation that is hard to get out of.',
  },
  {
    id: 'mcq-72',
    topic: 'English',
    question: 'A person who is indifferent to the pleasures and pains of life is known as a:',
    options: ['Hedonist', 'Ascetic', 'Stoic', 'Epicurean'],
    correctAnswerIndex: 2,
    explanation: 'A stoic is a person who can endure pain or hardship without showing their feelings or complaining.',
  },
  {
    id: 'mcq-73',
    topic: 'English',
    question: "Find the synonym of 'lucid'.",
    options: ['Vague', 'Murky', 'Clear', 'Complicated'],
    correctAnswerIndex: 2,
    explanation: 'Lucid means expressed clearly or easy to understand. "Clear" is a direct synonym.',
  },
  {
    id: 'mcq-74',
    topic: 'Logical Reasoning',
    question: 'Which word does NOT belong with the others?',
    options: ['Guitar', 'Flute', 'Violin', 'Cello'],
    correctAnswerIndex: 1,
    explanation: 'Guitar, Violin, and Cello are string instruments. A flute is a wind instrument.',
  },
  {
    id: 'mcq-75',
    topic: 'Logical Reasoning',
    question: "If 'Book' is to 'Read', then 'Fork' is to:",
    options: ['Cut', 'Eat', 'Spoon', 'Food'],
    correctAnswerIndex: 1,
    explanation: 'A book is an object used for the action of reading. A fork is an object used for the action of eating.',
  },
  {
    id: 'mcq-76',
    topic: 'Logical Reasoning',
    question: 'Complete the series: 3, 7, 15, 31, 63, ?',
    options: ['125', '126', '127', '128'],
    correctAnswerIndex: 2,
    explanation: 'The pattern is (previous number * 2) + 1. (3*2)+1=7, (7*2)+1=15, (15*2)+1=31, (31*2)+1=63, so (63*2)+1=127.',
  },
  {
    id: 'mcq-77',
    topic: 'Logical Reasoning',
    question: "A is B's sister. C is B's mother. D is C's father. How is A related to D?",
    options: ['Grandmother', 'Grandfather', 'Granddaughter', 'Daughter'],
    correctAnswerIndex: 2,
    explanation: "If C is B's mother, and A is B's sister, then C is also A's mother. If D is C's father, then D is A's maternal grandfather. Therefore, A is D's granddaughter.",
  },
  {
    id: 'mcq-78',
    topic: 'Logical Reasoning',
    question: 'Arrange the words in a meaningful sequence: 1. Police 2. Punishment 3. Crime 4. Judge 5. Judgment',
    options: ['3, 1, 4, 5, 2', '3, 1, 2, 4, 5', '1, 2, 3, 4, 5', '3, 1, 5, 4, 2'],
    correctAnswerIndex: 0,
    explanation: 'The logical sequence of events is: A Crime is committed (3), the Police investigate (1), the case goes to a Judge (4), who delivers a Judgment (5), which results in a Punishment (2).',
  },
  {
    id: 'mcq-79',
    topic: 'Logical Reasoning',
    question: "'Odometer' is to 'Mileage' as 'Compass' is to:",
    options: ['Speed', 'Direction', 'Needle', 'Hiking'],
    correctAnswerIndex: 1,
    explanation: 'An odometer is an instrument used to measure mileage (distance). A compass is an instrument used to determine direction.',
  },
  {
    id: 'mcq-80',
    topic: 'Current Affairs',
    question: 'Who won the Wimbledon Men\'s Singles title in 2023?',
    options: ['Novak Djokovic', 'Roger Federer', 'Rafael Nadal', 'Carlos Alcaraz'],
    correctAnswerIndex: 3,
    explanation: 'Carlos Alcaraz of Spain won the 2023 Wimbledon Championships Men\'s Singles title, defeating Novak Djokovic in the final.',
  },
  {
    id: 'mcq-81',
    topic: 'Current Affairs',
    question: 'The term \'Fintech\' is a portmanteau of:',
    options: ['Finance and Technology', 'Final Technique', 'Finish and Text', 'Future Technology'],
    correctAnswerIndex: 0,
    explanation: 'Fintech is a combination of the words "finance" and "technology" and refers to any technology used to improve or automate financial services.',
  },
  {
    id: 'mcq-82',
    topic: 'Current Affairs',
    question: 'Which country successfully landed the Chandrayaan-3 spacecraft on the south pole of the Moon in 2023?',
    options: ['USA', 'China', 'Russia', 'India'],
    correctAnswerIndex: 3,
    explanation: 'India made history by becoming the first country to successfully land a spacecraft, Chandrayaan-3, on the lunar south pole in August 2023.',
  },
  {
    id: 'mcq-83',
    topic: 'Current Affairs',
    question: 'The \'BRICS\' group of emerging economies originally consisted of Brazil, Russia, India, and China. Which country was added later to form "BRICS"?',
    options: ['Singapore', 'South Africa', 'Saudi Arabia', 'Spain'],
    correctAnswerIndex: 1,
    explanation: 'South Africa was formally invited to join the BRIC group in 2010, resulting in the acronym being changed to BRICS.',
  },
  {
    id: 'mcq-84',
    topic: 'Current Affairs',
    question: 'What does \'ChatGPT\' stand for?',
    options: ['Chat Global Protocol Technology', 'Chat Generative Pre-trained Transformer', 'Chat General Purpose Tool', 'Chat Graphical Processing Task'],
    correctAnswerIndex: 1,
    explanation: 'ChatGPT stands for Chat Generative Pre-trained Transformer. It is a large language model-based chatbot developed by OpenAI.',
  },
  {
    id: 'mcq-85',
    topic: 'Current Affairs',
    question: 'The Nobel Peace Prize for 2023 was awarded to Narges Mohammadi for her fight against the oppression of women in which country?',
    options: ['Afghanistan', 'Saudi Arabia', 'Iran', 'Syria'],
    correctAnswerIndex: 2,
    explanation: 'Narges Mohammadi, an imprisoned Iranian human rights activist, was awarded the Nobel Peace Prize 2023 for her work fighting for women\'s rights and democracy in Iran.',
  },
  {
    id: 'mcq-86',
    topic: 'Current Affairs',
    question: "'Operation Ganga' was an initiative by the Indian government to evacuate its citizens from:",
    options: ['Afghanistan', 'Ukraine', 'Sudan', 'Israel'],
    correctAnswerIndex: 1,
    explanation: 'Operation Ganga was an evacuation mission by the Government of India to evacuate its citizens stranded in neighboring countries during the 2022 Russian invasion of Ukraine.',
  },
  {
    id: 'mcq-87',
    topic: 'Current Affairs',
    question: 'Who was appointed as the CEO of YouTube in February 2023?',
    options: ['Susan Wojcicki', 'Sundar Pichai', 'Neal Mohan', 'Satya Nadella'],
    correctAnswerIndex: 2,
    explanation: 'Indian-American executive Neal Mohan was appointed as the new CEO of YouTube in February 2023, succeeding Susan Wojcicki.',
  },
  {
    id: 'mcq-88',
    topic: 'Current Affairs',
    question: 'The 2024 Summer Olympics are scheduled to be held in which city?',
    options: ['Los Angeles', 'Brisbane', 'Tokyo', 'Paris'],
    correctAnswerIndex: 3,
    explanation: 'The 2024 Summer Olympics, officially the Games of the XXXIII Olympiad, are scheduled to take place in Paris, France.',
  },
  {
    id: 'mcq-89',
    topic: 'Constitution',
    question: 'The Eighth Schedule of the Indian Constitution recognizes how many official languages?',
    options: ['18', '20', '22', '24'],
    correctAnswerIndex: 2,
    explanation: 'The Eighth Schedule to the Constitution of India lists the official languages of the Republic of India. It currently recognizes 22 languages.',
  },
  {
    id: 'mcq-90',
    topic: 'Legal Aptitude',
    question: 'In the context of a contract, \'coercion\' as defined by the Indian Contract Act, 1872, involves:',
    options: ['Persuasion', 'Emotional pressure', 'Committing or threatening to commit an act forbidden by the IPC', 'Providing false information'],
    correctAnswerIndex: 2,
    explanation: 'Section 15 of the Indian Contract Act defines coercion as committing, or threatening to commit, any act forbidden by the Indian Penal Code, or the unlawful detaining, or threatening to detain, any property.',
  },
  {
    id: 'mcq-91',
    topic: 'Constitution',
    question: 'Who has the power to promulgate ordinances when the Parliament is not in session?',
    options: ['The Prime Minister', 'The Chief Justice of India', 'The President of India', 'The Speaker of the Lok Sabha'],
    correctAnswerIndex: 2,
    explanation: 'Article 123 of the Constitution grants the President of India the power to promulgate ordinances during the recess of Parliament. These ordinances have the same force and effect as an Act of Parliament.',
  },
  {
    id: 'mcq-92',
    topic: 'Legal Aptitude',
    question: 'The legal maxim "audi alteram partem" means:',
    options: ['No one can be a judge in his own case', 'Let the other side be heard as well', 'The thing speaks for itself', 'An act of God'],
    correctAnswerIndex: 1,
    explanation: 'A fundamental principle of natural justice, "audi alteram partem" means that no person should be judged without a fair hearing in which each party is given the opportunity to respond to the evidence against them.',
  },
  {
    id: 'mcq-93',
    topic: 'English',
    question: 'What does the idiom "to steal someone\'s thunder" mean?',
    options: ['To physically steal something valuable', 'To take credit for someone else\'s work or idea', 'To make a loud noise', 'To scare someone'],
    correctAnswerIndex: 1,
    explanation: 'The idiom means to win praise for oneself by pre-empting someone else\'s attempt to impress.',
  },
  {
    id: 'mcq-94',
    topic: 'General Knowledge',
    question: 'The Saka Era was started by which ruler?',
    options: ['Ashoka', 'Kanishka', 'Harsha', 'Chandragupta Vikramaditya'],
    correctAnswerIndex: 1,
    explanation: 'The Saka Era, which is used as the official civil calendar in India, is believed to have been founded by the Kushan king Kanishka in 78 CE.',
  },
  {
    id: 'mcq-95',
    topic: 'Logical Reasoning',
    question: 'Find the odd one out: January, May, July, November',
    options: ['January', 'May', 'July', 'November'],
    correctAnswerIndex: 3,
    explanation: 'January, May, and July all have 31 days. November has 30 days.',
  },
  {
    id: 'mcq-96',
    topic: 'Constitution',
    question: 'The procedure for the amendment of the Indian Constitution is provided in which article?',
    options: ['Article 360', 'Article 368', 'Article 370', 'Article 356'],
    correctAnswerIndex: 1,
    explanation: 'Article 368 in Part XX of the Constitution of India provides for the procedure for amending the Constitution by the Parliament.',
  },
  {
    id: 'mcq-97',
    topic: 'Legal Aptitude',
    question: 'What is a "tort"?',
    options: ['A criminal offense', 'A breach of contract', 'A civil wrong for which a remedy is usually damages', 'A type of tax'],
    correctAnswerIndex: 2,
    explanation: 'A tort is an act or omission that gives rise to injury or harm to another and amounts to a civil wrong for which courts impose liability. The most common remedy is an award of damages.',
  },
  {
    id: 'mcq-98',
    topic: 'English',
    question: 'A person who hates humankind and avoids human society is called a:',
    options: ['Philanthropist', 'Misanthrope', 'Optimist', 'Altruist'],
    correctAnswerIndex: 1,
    explanation: 'A misanthrope is a person who dislikes humankind and avoids human society. A philanthropist is someone who seeks to promote the welfare of others.',
  },
  {
    id: 'mcq-99',
    topic: 'Logical Reasoning',
    question: 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
    options: ['7', '10', '12', '13'],
    correctAnswerIndex: 1,
    explanation: 'This is an alternating series. The first pattern is 7, 8, 9, ... (add 1). The second pattern is 10, 11, 12, ... (add 1). The next number in the first pattern is 10.',
  },
  {
    id: 'mcq-100',
    topic: 'General Knowledge',
    question: 'Who wrote the Indian National Anthem, "Jana Gana Mana"?',
    options: ['Bankim Chandra Chatterjee', 'Rabindranath Tagore', 'Sarojini Naidu', 'Swami Vivekananda'],
    correctAnswerIndex: 1,
    explanation: 'The Indian National Anthem, "Jana Gana Mana," was composed by Rabindranath Tagore in its original Bengali version.',
  },
  {
    id: 'mcq-101',
    topic: 'Constitution',
    question: 'The concept of a "Union of States" in the Indian Constitution was adopted from which country?',
    options: ['USA (American Model)', 'Australia', 'Canada (Canadian Model)', 'United Kingdom'],
    correctAnswerIndex: 2,
    explanation: 'The phrase "Union of States" has been preferred to "Federation of States" to indicate that the Indian federation is not the result of an agreement by the states to join a federation and that states have no right to secede. This is a key feature of the Canadian model.',
  },
  {
    id: 'mcq-102',
    topic: 'Legal Aptitude',
    question: 'What is the literal meaning of the term "Locus Standi"?',
    options: ['A place of standing', 'A pending suit', 'A friend of the court', 'A matter decided'],
    correctAnswerIndex: 0,
    explanation: 'Locus standi means the right or capacity to bring an action or to appear in a court. Literally, it means a place of standing.',
  },
  {
    id: 'mcq-103',
    topic: 'English',
    question: 'What is the meaning of the idiom "to throw in the towel"?',
    options: ['To start a fight', 'To go to sleep', 'To admit defeat', 'To clean up a mess'],
    correctAnswerIndex: 2,
    explanation: 'The phrase "to throw in the towel" originates from boxing, where a fighter\'s corner would throw a towel into the ring to signal they were conceding the fight. It means to give up.',
  },
  {
    id: 'mcq-104',
    topic: 'General Knowledge',
    question: 'The "Chipko Movement" was primarily concerned with:',
    options: ['Water conservation', 'Forest conservation', 'Soil conservation', 'Wildlife protection'],
    correctAnswerIndex: 1,
    explanation: 'The Chipko movement was a forest conservation movement in India where villagers, especially women, would hug trees to prevent them from being cut down.',
  },
  {
    id: 'mcq-105',
    topic: 'Current Affairs',
    question: 'What is a "Unicorn" in the context of business startups?',
    options: ['A startup with a unique idea', 'A startup that has failed', 'A privately held startup company with a value of over $1 billion', 'A government-funded startup'],
    correctAnswerIndex: 2,
    explanation: 'The term "unicorn" is used in the venture capital industry to refer to a privately held startup company with a valuation of over US$1 billion.',
  },
  {
    id: 'mcq-106',
    topic: 'Logical Reasoning',
    question: 'CUP is to LIP as BIRD is to:',
    options: ['BUSH', 'GRASS', 'FOREST', 'BEAK'],
    correctAnswerIndex: 3,
    explanation: 'A cup is used by touching it to the lips. A bird uses its beak to interact with the world in a similar way (eating, etc.).',
  },
  {
    id: 'mcq-107',
    topic: 'Constitution',
    question: 'What does the "Right to Constitutional Remedies" under Article 32 empower a citizen to do?',
    options: ['To amend the Constitution', 'To move the Supreme Court to enforce their Fundamental Rights', 'To seek advisory opinions from the President', 'To appeal any High Court decision'],
    correctAnswerIndex: 1,
    explanation: 'Article 32 is called the "heart and soul" of the Constitution because it provides a guaranteed remedy for the enforcement of all other Fundamental Rights. A citizen can directly approach the Supreme Court if their rights are violated.',
  },
  {
    id: 'mcq-108',
    topic: 'Legal Aptitude',
    question: 'A "contingent contract" is a contract to do or not to do something, if some event, collateral to such contract, _____ or _____ happen.',
    options: ['does, does not', 'will, will not', 'may, may not', 'should, should not'],
    correctAnswerIndex: 0,
    explanation: 'As per Section 31 of the Indian Contract Act, 1872, a contingent contract is based on the happening or non-happening of a future uncertain event.',
  },
  {
    id: 'mcq-109',
    topic: 'English',
    question: 'A person who can do many different jobs or activities well is called:',
    options: ['Specialist', 'Versatile', 'Amateur', 'Professional'],
    correctAnswerIndex: 1,
    explanation: 'Versatile means being able to adapt or be adapted to many different functions or activities.',
  },
  {
    id: 'mcq-110',
    topic: 'General Knowledge',
    question: 'The first "Law Commission" in independent India was established in which year?',
    options: ['1950', '1952', '1955', '1960'],
    correctAnswerIndex: 2,
    explanation: 'The first Law Commission of independent India was established in 1955, with its first chairman being the then Attorney-General of India, Mr. M. C. Setalvad.',
  }
];

export const notes: Note[] = [
  {
    topic: 'Preamble of the Constitution',
    category: 'Constitution',
    content: `
📘 Summary: The Preamble is the soul of the Indian Constitution. It's an introduction that outlines the core values and objectives of the nation. It declares India as a Sovereign, Socialist, Secular, and Democratic Republic, and aims to provide justice, liberty, equality, and fraternity to all its citizens.

### What is the Preamble?

The Preamble is like the summary or preface of the Constitution. It doesn't give any specific powers, but it sets the tone and direction for the entire legal framework of the country. Think of it as the mission statement for India. The very first words, "WE, THE PEOPLE OF INDIA," signify that the ultimate power lies with the citizens.

### Key Concepts in the Preamble

- Sovereign: This means India is an independent nation, free to conduct its own internal and external affairs without any external interference.
- Socialist: Added by the 42nd Amendment in 1976, this signifies India's goal to achieve socialist ends through democratic means, aiming for social and economic equality and preventing the concentration of wealth.
- Secular: Also added by the 42nd Amendment, this means the state does not have its own religion and treats all religions equally. Citizens are free to practice any religion of their choice.
- Democratic Republic: India has a government elected by the people (democratic) and the head of the state, the President, is also elected, not a hereditary monarch (republic).

### Objectives of the Constitution

The Preamble clearly states its goals to secure for every citizen:
- Justice: Not just in court, but also social (no discrimination) and economic (no wealth gap).
- Liberty: Freedom of thought, expression, belief, faith, and worship.
- Equality: Everyone is equal before the law (equality of status) and should have equal chances to succeed (equality of opportunity).
- Fraternity: Promoting a sense of brotherhood among all Indians, ensuring the dignity of every individual and the unity of the nation.

### Is the Preamble Part of the Constitution?

For a long time, there was a debate on this. But in the famous Kesavananda Bharati v. State of Kerala (1973) case, the Supreme Court declared that the Preamble is indeed a part of the Constitution. It can be amended, but its 'basic features' cannot be changed.

🧠 Quick Recap:
- The Preamble is the introduction to the Constitution.
- It defines India as a Sovereign, Socialist, Secular, Democratic Republic.
- Its goals are Justice, Liberty, Equality, and Fraternity.
- It was amended once in 1976 to add 'Socialist', 'Secular', and 'Integrity'.
- The Supreme Court confirmed it is a part of the Constitution.
`,
    links: [{ title: 'Kesavananda Bharati v. State of Kerala', url: 'https://en.wikipedia.org/wiki/Kesavananda_Bharati_v._State_of_Kerala' }],
  },
  {
    topic: 'Fundamental Rights (Art 12-35)',
    category: 'Constitution',
    content: `
📘 Summary: Fundamental Rights, found in Part III of the Constitution, are the basic rights guaranteed to every citizen of India. They are considered essential for the development of an individual's personality and to protect them from state overreach. These rights are legally enforceable (justiciable), meaning you can go to court if they are violated.

### The Six Categories of Fundamental Rights

Originally, there were seven Fundamental Rights, but the Right to Property was removed and made a legal right. Now, there are six main categories:

1. Right to Equality (Articles 14-18):
    - Art. 14: Equality before law and equal protection of laws. Everyone is equal in the eyes of the law.
    - Art. 15: Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.
    - Art. 16: Equality of opportunity in matters of public employment.
    - Art. 17: Abolition of Untouchability.
    - Art. 18: Abolition of titles (like 'Raja', 'Nawab'), except for military and academic ones.

2. Right to Freedom (Articles 19-22):
    - Art. 19: Guarantees six key freedoms: (i) speech and expression, (ii) assembly, (iii) association, (iv) movement, (v) residence, and (vi) profession.
    - Art. 20: Protection in respect of conviction for offences (e.g., no double jeopardy).
    - Art. 21: Protection of Life and Personal Liberty. This is one of the most important rights and has been interpreted very broadly by the Supreme Court to include the right to privacy, right to clean environment, etc.
    - Art. 22: Protection against arrest and detention in certain cases.

3. Right against Exploitation (Articles 23-24):
    - Art. 23: Prohibition of traffic in human beings and forced labour.
    - Art. 24: Prohibition of employment of children in factories, etc.

4. Right to Freedom of Religion (Articles 25-28):
    - Guarantees freedom of conscience and the right to profess, practice, and propagate religion.

5. Cultural and Educational Rights (Articles 29-30):
    - Protects the interests of minorities by giving them the right to conserve their distinct language, script, or culture, and to establish their own educational institutions.

6. Right to Constitutional Remedies (Article 32):
    - This is the right to move the Supreme Court to enforce the other Fundamental Rights. Dr. Ambedkar called it the "heart and soul of the Constitution." The court can issue writs (orders) to protect these rights.

🧠 Quick Recap:
- Fundamental Rights are in Part III of the Constitution.
- They are justiciable (enforceable by courts).
- The six rights are: Equality, Freedom, Against Exploitation, Freedom of Religion, Cultural & Educational Rights, and Constitutional Remedies.
- Article 21 (Right to Life) and Article 32 (Constitutional Remedies) are particularly significant.
`,
    links: [{ title: 'All about Fundamental Rights', url: 'https://byjus.com/ias/fundamental-rights/' }],
  },
  {
    topic: 'Directive Principles of State Policy (DPSP)',
    category: 'Constitution',
    content: `
📘 Summary: The Directive Principles of State Policy (DPSP), found in Part IV (Articles 36-51) of the Constitution, are a set of guidelines or principles for the government to follow when making laws and policies. Unlike Fundamental Rights, they are not enforceable by courts, but they are considered fundamental to the governance of the country.

### The Goal of DPSPs

The main aim of DPSPs is to create a "welfare state". A welfare state is a system where the government plays a key role in protecting and promoting the economic and social well-being of its citizens. While Fundamental Rights ensure political democracy, DPSPs aim for social and economic democracy.

### Classification of DPSPs

For better understanding, DPSPs are generally classified into three categories:

1. Socialistic Principles: These principles are aimed at achieving social and economic justice.
    - Example: Article 39 directs the state to secure adequate means of livelihood for all citizens, ensure equal pay for equal work for men and women, and prevent the concentration of wealth in a few hands.

2. Gandhian Principles: These principles are based on the ideals of Mahatma Gandhi.
    - Example: Article 40 directs the state to organize village panchayats (local self-government). Other principles include promoting cottage industries, prohibiting the consumption of intoxicating drinks, and preventing the slaughter of cows.

3. Liberal-Intellectual Principles: These principles represent the ideas of modern liberalism.
    - Example: Article 44 directs the state to secure for all citizens a Uniform Civil Code (UCC). Article 48A directs the state to protect and improve the environment. Article 51 aims to promote international peace and security.

### DPSP vs. Fundamental Rights

This is a classic debate in Indian constitutional law.
- Enforceability: Fundamental Rights are justiciable (you can go to court), while DPSPs are non-justiciable.
- Nature: Fundamental Rights are mostly negative, as they prohibit the state from doing certain things. DPSPs are positive, as they require the state to do certain things.
- Conflict: The Supreme Court has held that while Fundamental Rights are superior, the government should try to implement DPSPs without violating Fundamental Rights. Both are seen as complementary to each other.

🧠 Quick Recap:
- DPSPs are guidelines for the government, found in Part IV of the Constitution.
- They are not enforceable in court (non-justiciable).
- Their main goal is to create a social and economic democracy (a welfare state).
- They are categorized into Socialistic, Gandhian, and Liberal-Intellectual principles.
- Key examples include organizing panchayats (Art. 40) and striving for a Uniform Civil Code (Art. 44).
`,
    links: [],
  },
  {
    topic: 'Fundamental Duties (Art 51A)',
    category: 'Constitution',
    content: `
📘 Summary: Fundamental Duties, listed in Part IV-A (Article 51A) of the Constitution, are a set of moral obligations on all citizens to help promote a spirit of patriotism and uphold the unity of India. These were not part of the original Constitution but were added later. Like DPSPs, they are not enforceable by courts.

### Introduction of Fundamental Duties

The Fundamental Duties were added to the Constitution by the 42nd Amendment Act in 1976. This was done based on the recommendations of the Swaran Singh Committee. The idea was that citizens should not only enjoy rights but also have certain duties towards the nation.

- Original Number: When introduced, there were 10 Fundamental Duties.
- Addition of the 11th Duty: In 2002, through the 86th Amendment Act, one more duty was added.

### The 11 Fundamental Duties

Article 51A states that it shall be the duty of every citizen of India:
1. To abide by the Constitution and respect its ideals and institutions, the National Flag, and the National Anthem.
2. To cherish and follow the noble ideals that inspired our national struggle for freedom.
3. To uphold and protect the sovereignty, unity, and integrity of India.
4. To defend the country and render national service when called upon to do so.
5. To promote harmony and the spirit of common brotherhood amongst all the people of India.
6. To value and preserve the rich heritage of our composite culture.
7. To protect and improve the natural environment including forests, lakes, rivers, and wildlife.
8. To develop the scientific temper, humanism, and the spirit of inquiry and reform.
9. To safeguard public property and to abjure violence.
10. To strive towards excellence in all spheres of individual and collective activity.
11. (Added in 2002) To provide opportunities for education to his child or ward between the age of six and fourteen years.

### Nature and Significance

- Non-Justiciable: The Fundamental Duties cannot be enforced by courts. This means a court cannot issue a writ to compel a citizen to perform a duty.
- Moral & Civic Responsibility: They serve as a constant reminder to the citizens that while enjoying their rights, they also have duties to perform.
- Interpretive Value: The Supreme Court has stated that courts can use Fundamental Duties to help interpret the meaning of laws and constitutional provisions.

🧠 Quick Recap:
- Fundamental Duties are in Part IV-A (Article 51A) of the Constitution.
- They were added by the 42nd Amendment (1976) based on the Swaran Singh Committee's report.
- There are 11 Fundamental Duties in total.
- The 11th duty (on education for children) was added by the 86th Amendment (2002).
- They are not enforceable by courts (non-justiciable).
`,
    links: [],
  },
  {
    topic: 'The President of India',
    category: 'Constitution',
    content: `
📘 Summary: The President of India is the head of the Indian State, as provided by Article 52 of the Constitution. He is the first citizen of India and acts as the symbol of unity, integrity, and solidarity of the nation. While the President holds the highest office, the real executive power is exercised by the Prime Minister and the Council of Ministers.

### Election of the President (Article 54)

The President is elected indirectly, not by the people directly. He is elected by an Electoral College which consists of:
- The elected members of both the Houses of Parliament (Lok Sabha and Rajya Sabha).
- The elected members of the Legislative Assemblies of the states.
- The elected members of the Legislative Assemblies of the Union Territories of Delhi and Puducherry.
Nominated members do not participate in the election.

### Qualifications and Term

- Qualifications (Article 58): To be eligible for election as President, a person must be a citizen of India, have completed 35 years of age, and be qualified for election as a member of the Lok Sabha.
- Term of Office (Article 56): The President holds office for a term of five years from the date on which he enters upon his office.

### Powers of the President

The President's powers can be classified into several categories:
- Executive Powers: All executive actions of the Government of India are formally taken in his name. He appoints the Prime Minister, other ministers, the Attorney General of India, Governors of states, etc.
- Legislative Powers: He is an integral part of the Parliament. He can summon or prorogue the Houses of Parliament and dissolve the Lok Sabha. He can also promulgate ordinances when the Parliament is not in session (Article 123).
- Financial Powers: A money bill can be introduced in the Parliament only with his prior recommendation.
- Judicial Powers: He appoints the Chief Justice and the judges of the Supreme Court and High Courts. He can grant pardons, reprieves, respites, and remissions of punishment (Article 72).
- Military Powers: He is the supreme commander of the defense forces of India.
- Emergency Powers: He can declare three types of emergencies: National Emergency (Article 352), State Emergency (President's Rule, Article 356), and Financial Emergency (Article 360).

### Impeachment (Article 61)

The President can be removed from office for "violation of the Constitution" through a process called impeachment. The process can be initiated by either House of Parliament and requires a special majority (two-thirds of the total membership of the House) to pass.

🧠 Quick Recap:
- The President is the formal head of the state (de jure head).
- Elected indirectly by an Electoral College for a term of 5 years.
- Minimum age for qualification is 35 years.
- Key powers include appointing the PM, promulgating ordinances, and granting pardons.
- Can be removed through impeachment for violation of the Constitution.
`,
    links: [],
  },
  {
    topic: 'The Parliament',
    category: 'Constitution',
    content: `
📘 Summary: The Parliament is the supreme legislative body of the Republic of India. According to Article 79, the Parliament consists of the President and the two Houses: the Rajya Sabha (Council of States) and the Lok Sabha (House of the People). It is the place where laws for the country are made, the government's work is scrutinized, and national issues are debated.

### The Two Houses of Parliament

1. Lok Sabha (House of the People):
- Role: It is the lower house and represents the people of India directly.
- Composition: Members are directly elected by the people from territorial constituencies. The maximum strength is 550 members (530 from states and 20 from UTs).
- Term: The normal term of the Lok Sabha is five years, after which it automatically dissolves. It can also be dissolved earlier by the President on the advice of the Prime Minister.
- Special Powers: Money Bills can only be introduced in the Lok Sabha. The Council of Ministers is collectively responsible only to the Lok Sabha.

2. Rajya Sabha (Council of States):
- Role: It is the upper house and represents the states and union territories of India.
- Composition: It has a maximum strength of 250 members. Of these, 238 members are elected by the elected members of state legislative assemblies, and 12 are nominated by the President from people who have special knowledge in fields like literature, science, art, and social service.
- Term: The Rajya Sabha is a permanent body and is not subject to dissolution. One-third of its members retire every two years, and each member has a tenure of six years.
- Special Powers: It can authorize the Parliament to make a law on a subject in the State List (Article 249).

### Functions of the Parliament

- Legislative Function: The primary function is to make laws on subjects mentioned in the Union List and Concurrent List.
- Executive Function (Control over the Executive): The Parliament holds the government accountable through mechanisms like Question Hour, Zero Hour, adjournment motions, and no-confidence motions.
- Financial Function: It passes the annual budget, approves all taxes, and controls the finances of the government.
- Constituent Function: It has the power to amend the Constitution.
- Judicial Function: It can impeach the President, and remove the Vice-President, judges of the Supreme Court and High Courts.

🧠 Quick Recap:
- Parliament consists of the President, Lok Sabha, and Rajya Sabha.
- Lok Sabha is the lower house, directly elected, with a 5-year term.
- Rajya Sabha is the upper house, indirectly elected, and is a permanent body.
- The main functions are law-making, financial control, and holding the government accountable.
- Money bills can only start in the Lok Sabha.
`,
    links: [],
  },
  {
    topic: 'The Supreme Court',
    category: 'Constitution',
    content: `
📘 Summary: The Supreme Court of India is the highest judicial authority in the country. It is the final court of appeal and the ultimate interpreter of the Constitution. Located in New Delhi, its decisions are binding on all other courts in India. It plays a crucial role in safeguarding the fundamental rights of citizens and ensuring that laws passed by the legislature are constitutional.

### Composition and Appointment (Article 124)

- Composition: The Supreme Court consists of the Chief Justice of India (CJI) and a number of other judges, as determined by Parliament. Currently, the sanctioned strength is 34 judges (including the CJI).
- Appointment: The judges of the Supreme Court are appointed by the President of India. The appointment process follows the Collegium System, where a group of the senior-most judges of the Supreme Court, headed by the CJI, recommends names to the government for appointment.

### Independence of the Judiciary

The Constitution has made several provisions to ensure that the judiciary remains independent and free from the influence of the executive and legislative branches. These include:
- Security of tenure for judges (they can only be removed through a difficult process of impeachment).
- Salaries and expenses are charged on the Consolidated Fund of India (not subject to a vote in Parliament).
- Power to punish for its contempt.

### Jurisdiction and Powers

The powers of the Supreme Court can be categorized as follows:
- Original Jurisdiction (Article 131): This allows the Supreme Court to hear certain cases directly for the first time. This includes disputes between the Government of India and one or more states, or between two or more states.
- Writ Jurisdiction (Article 32): The Supreme Court is the protector of Fundamental Rights. It can issue five types of writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto) to enforce these rights.
- Appellate Jurisdiction (Articles 132-136): This is the power to hear appeals against the judgments of lower courts (High Courts). This is the largest part of its work. It can hear appeals in constitutional, civil, and criminal matters. Article 136 grants it the power to grant Special Leave to Appeal (SLP) from any judgment of any court or tribunal.
- Advisory Jurisdiction (Article 143): The President can seek the opinion of the Supreme Court on any question of law or fact of public importance. However, this advice is not binding on the President.
- Judicial Review: This is the power of the court to examine the constitutionality of laws and executive orders. If a law is found to violate the Constitution, the Supreme Court can declare it unconstitutional and void.

🧠 Quick Recap:
- The Supreme Court is the apex court of India.
- Judges are appointed by the President through the Collegium system.
- It is the guardian of the Constitution and Fundamental Rights.
- Its key powers are Original, Writ, Appellate, and Advisory jurisdictions.
- The power of Judicial Review allows it to strike down unconstitutional laws.
`,
    links: [],
  },
  {
    topic: 'Emergency Provisions',
    category: 'Constitution',
    content: `
📘 Summary: Part XVIII (Articles 352-360) of the Indian Constitution contains provisions that allow the central government to assume special powers to deal with extraordinary situations or crises. These are meant to protect the sovereignty, unity, integrity, and security of the country. There are three types of emergencies that can be declared.

### 1. National Emergency (Article 352)

- Grounds for Declaration: The President can declare a national emergency when the security of India or a part of it is threatened by war, external aggression, or armed rebellion. (The term 'armed rebellion' was added by the 44th Amendment, replacing 'internal disturbance').
- Approval: The proclamation must be approved by both Houses of Parliament within one month from the date of its issue.
- Effects:
  - The federal structure of the country becomes unitary. The central government becomes all-powerful and can give executive directions to any state on any matter.
  - Parliament can make laws on subjects in the State List.
  - The life of the Lok Sabha can be extended for one year at a time.
  - Most Importantly: Fundamental Rights under Article 19 are automatically suspended. The President can suspend other Fundamental Rights as well, except for Articles 20 and 21 (Protection in respect of conviction and Right to Life).

### 2. State Emergency / President's Rule (Article 356)

- Grounds for Declaration: The President can declare this emergency in a state if he is satisfied that the state government cannot be carried on in accordance with the provisions of the Constitution. This is also known as the "failure of constitutional machinery."
- Approval: It must be approved by Parliament within two months.
- Effects:
  - The President dismisses the state council of ministers and the state legislative assembly is either suspended or dissolved.
  - The President assumes the functions of the state government, and the Parliament makes laws for the state.
  - This provision is highly controversial and has been criticized for being misused by the central government.

### 3. Financial Emergency (Article 360)

- Grounds for Declaration: The President can proclaim a financial emergency if he is satisfied that the financial stability or credit of India or any part of it is threatened.
- Approval: It must be approved by Parliament within two months.
- Effects:
  - The central government can give financial directions to any state.
  - The President can order the reduction of salaries and allowances of all or any class of persons serving in the state or the Union, including the judges of the Supreme Court and High Courts.
- Status: This type of emergency has never been imposed in India to date.

🧠 Quick Recap:
- Three types of emergencies: National (Art. 352), State (Art. 356), and Financial (Art. 360).
- National Emergency is for war, external aggression, or armed rebellion.
- State Emergency (President's Rule) is for the failure of constitutional machinery in a state.
- Financial Emergency is for threats to financial stability.
- During a National Emergency, most Fundamental Rights can be suspended, except Articles 20 and 21.
`,
    links: [],
  },
  {
    topic: 'Constitutional Amendments',
    category: 'Constitution',
    content: `
📘 Summary: The process of amending the Constitution of India is laid out in Article 368. The Indian Constitution is neither as rigid as the American constitution nor as flexible as the British one; it strikes a balance. This allows the Constitution to adapt to changing times and societal needs while preserving its core principles.

### The Amendment Procedure (Article 368)

1. Initiation: An amendment can only be initiated by introducing a bill for this purpose in either House of Parliament (Lok Sabha or Rajya Sabha), not in state legislatures.
2. Passage: The bill must be passed in each House by a special majority. This means:
    - A majority of the total membership of that House (i.e., more than 50% of the total seats), AND
    - A majority of two-thirds of the members of that House present and voting.
3. President's Assent: After being passed by both Houses, the bill is presented to the President for his assent. The President must give his assent to the bill. He can neither withhold his assent nor return the bill for reconsideration.

### Types of Amendments

There are three ways in which the Constitution can be amended:

1. Amendment by Simple Majority of Parliament:
    - These are not technically considered amendments under Article 368. They deal with matters like the formation of new states, citizenship, rules of procedure in Parliament, etc. They are passed by a simple majority, just like an ordinary law.

2. Amendment by Special Majority of Parliament:
    - This is the primary method under Article 368.
    - Most of the provisions of the Constitution, including Fundamental Rights and Directive Principles of State Policy (DPSP), are amended in this way.

3. Amendment by Special Majority of Parliament and Ratification by Half of the State Legislatures:
    - This is the most rigid method, used for amending the federal features of the Constitution.
    - After the bill is passed by a special majority in Parliament, it must be ratified (approved) by the legislatures of at least half of the states by a simple majority.
    - Examples: Election of the President, powers of the Supreme Court and High Courts, any of the lists in the Seventh Schedule.

### The Basic Structure Doctrine

In the landmark Kesavananda Bharati case (1973), the Supreme Court ruled that while Parliament has the power to amend any part of the Constitution, it cannot alter its "basic structure" or fundamental framework. What constitutes the 'basic structure' is decided by the judiciary on a case-by-case basis, but it includes things like parliamentary democracy, fundamental rights, secularism, and judicial review.

🧠 Quick Recap:
- The amendment procedure is given in Article 368.
- An amendment bill can be introduced in either House of Parliament.
- It requires a 'special majority' for passage.
- For federal provisions, it also needs ratification by half of the states.
- The President must give assent to a constitutional amendment bill.
- Parliament cannot amend the 'basic structure' of the Constitution.
`,
    links: [{ title: 'List of Important Amendments', url: 'https://www.drishtiias.com/to-the-points/Paper2/important-amendments-in-the-indian-constitution-part-1' }],
  },
  {
    topic: 'Panchayati Raj & Municipalities',
    category: 'Constitution',
    content: `
📘 Summary: Panchayati Raj and Municipalities are systems of local self-government in India. They were given constitutional status through the 73rd and 74th Amendment Acts in 1992, respectively. The goal was to decentralize power and involve people at the grassroots level in their own governance and development.

### 73rd Constitutional Amendment Act, 1992 (Panchayati Raj)

This amendment added a new Part IX and the 11th Schedule to the Constitution, giving constitutional status to Panchayati Raj Institutions (PRIs).

- Three-Tier System: It provides for a three-tier system of panchayats in every state:
  1. Gram Panchayat at the village level.
  2. Panchayat Samiti (or Block/Mandal Samiti) at the intermediate/block level.
  3. Zila Parishad at the district level.
- Elections: All members of panchayats at all three levels are elected directly by the people. The chairperson of the intermediate and district levels is elected indirectly from among the elected members.
- Reservation of Seats:
  - Seats are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) in proportion to their population.
  - Not less than one-third of the total number of seats are reserved for women.
- 11th Schedule: This schedule contains 29 functional items for the panchayats, such as agriculture, rural housing, drinking water, roads, and poverty alleviation programs.

### 74th Constitutional Amendment Act, 1992 (Municipalities)

This amendment added a new Part IX-A and the 12th Schedule to the Constitution, dealing with Urban Local Bodies.

- Three Types of Municipalities:
  1. Nagar Panchayat for a transitional area (an area in transition from a rural area to an urban area).
  2. Municipal Council for a smaller urban area.
  3. Municipal Corporation for a larger urban area (like Delhi, Mumbai).
- Elections and Reservations: Similar to panchayats, members are directly elected by the people, and there are provisions for the reservation of seats for SCs, STs, and women.
- 12th Schedule: This schedule contains 18 functional items for the municipalities, such as urban planning, regulation of land use, roads and bridges, and public health.

### Significance

These amendments were a major step towards democratic decentralization in India. They empowered local communities to participate in the planning and implementation of development programs that directly affect their lives.

🧠 Quick Recap:
- 73rd Amendment deals with rural local government (Panchayati Raj).
- 74th Amendment deals with urban local government (Municipalities).
- Both established a three-tier system, direct elections, and reservation for SC/ST and women.
- The 11th Schedule lists the functions of Panchayats (29 items).
- The 12th Schedule lists the functions of Municipalities (18 items).
`,
    links: [],
  },
  {
    topic: 'Introduction to Torts',
    category: 'Legal Aptitude',
    content: `
📘 Summary: The Law of Torts deals with civil wrongs that cause harm or injury to a person or their property. Unlike a crime, which is a wrong against society, a tort is a wrong against an individual. The person who commits the tort is called a "tortfeasor," and the primary remedy for a tort is an award of damages (monetary compensation).

### What is a Tort?

The word "tort" is derived from the Latin word *tortum*, which means "to twist" or "to harm." It refers to a wrongful act or an infringement of a right (other than under contract) leading to legal liability. The main goal of tort law is not to punish the wrongdoer, but to compensate the victim for the loss or injury they have suffered.

### Tort vs. Crime vs. Breach of Contract

- Tort vs. Crime:
  - Wrong Against: A tort is a wrong against an individual; a crime is a wrong against the state/society.
  - Remedy: In tort, the remedy is damages (compensation); in crime, it is punishment (imprisonment, fine).
  - Initiation: A tort case is filed by the injured person (plaintiff); a criminal case is prosecuted by the state.

- Tort vs. Breach of Contract:
  - Duty: In a tort, the duty is fixed by the law and owed to the public at large. In a contract, the duty is fixed by the parties to the contract and is owed only to each other.

### Key Maxims in Tort Law

Two fundamental principles help determine if a tort has been committed:

1. Injuria Sine Damno:
    - Meaning: *Injuria* (legal injury) + *sine* (without) + *damno* (damage/loss). It means the violation of a legal right without causing any actual harm or loss.
    - Actionable? Yes. This is legally actionable because the violation of a legal right is the key element.
    - Example: In *Ashby v. White*, a voter was wrongfully prevented from voting. Even though the candidate he wanted to vote for won, his legal right to vote was violated, and he was entitled to compensation.

2. Damnum Sine Injuria:
    - Meaning: *Damnum* (damage/loss) + *sine* (without) + *injuria* (legal injury). It means causing actual damage or loss to someone without violating any of their legal rights.
    - Actionable? No. This is not legally actionable because no legal right has been infringed.
    - Example: If a school owner opens a new school right next to an existing one, causing the old school to lose students and money. This is lawful competition, and although it causes financial loss (*damnum*), no legal right of the old school owner is violated (*injuria*).

🧠 Quick Recap:
- A tort is a civil wrong against an individual.
- The remedy is usually monetary compensation (damages).
- It is different from a crime (wrong against society) and a breach of contract (duty fixed by parties).
- Injuria Sine Damno: Legal injury without actual damage. This is a valid tort.
- Damnum Sine Injuria: Actual damage without legal injury. This is not a tort.
`,
    links: [],
  },
  {
    topic: 'Negligence',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Negligence is one of the most common and important torts. It occurs when a person fails to exercise the level of care that a "reasonable person" would have exercised in a similar situation, and this failure causes harm to another person. It's about carelessness that results in injury.

### Essential Elements of Negligence

To succeed in a negligence lawsuit, the plaintiff (the injured person) must prove four key elements:

1. Duty of Care: The plaintiff must show that the defendant (the person being sued) owed them a legal duty to take care.
    - The Neighbour Principle: The famous case of Donoghue v. Stevenson (the "snail in the bottle" case) established this principle. You owe a duty of care to your "neighbours" – persons who are so closely and directly affected by your act that you ought to have them in mind when you are acting.
    - Example: A doctor owes a duty of care to their patient. A driver owes a duty of care to other road users.

2. Breach of Duty: The plaintiff must prove that the defendant breached this duty. The standard used is that of a "reasonable person." The court asks: "What would a reasonable, ordinary, prudent person have done in this situation?" If the defendant's conduct falls below this standard, they have breached their duty.
    - Example: A driver texting while driving at high speed has breached their duty to drive carefully.

3. Causation: The plaintiff must show that the defendant's breach of duty was the cause of their injury. This has two parts:
    - Factual Causation: The "but-for" test. The injury would not have happened "but for" the defendant's negligent act.
    - Legal Causation (Remoteness of Damage): The harm must not be too remote a consequence of the breach. The injury must have been a foreseeable result of the negligence.

4. Damages: The plaintiff must have suffered actual, legally recognizable harm, such as physical injury, property damage, or financial loss.

### Defenses to Negligence

A defendant can use certain defenses to avoid or reduce liability:
- Contributory Negligence: This is when the plaintiff's own carelessness contributed to their injury. For example, a person hit by a speeding car was also crossing the road without looking. In this case, the court may reduce the amount of compensation payable by the defendant.
- Volenti Non Fit Injuria (Voluntary Assumption of Risk): This applies when the plaintiff knowingly and voluntarily accepted the risk of harm. For example, a spectator at a cricket match accepts the risk of being hit by a ball.

🧠 Quick Recap:
- Negligence is carelessness that causes harm.
- Four elements must be proven: Duty of Care, Breach of Duty, Causation, and Damages.
- The standard of care is that of a "reasonable person."
- Key case: *Donoghue v. Stevenson* (the neighbour principle).
- Main defenses are Contributory Negligence and Voluntary Assumption of Risk.
`,
    links: [],
  },
  {
    topic: 'Defamation',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Defamation is a tort that protects a person's reputation. It occurs when someone makes a false statement about another person that is communicated to a third party and harms the subject's reputation. The statement can be in written or spoken form.

### Types of Defamation

Defamation is divided into two types:

1. Libel: This is defamation in a permanent form.
    - Examples: Written articles, printed materials (newspapers, magazines), pictures, cartoons, or social media posts.
    - Actionability: Libel is actionable per se, which means the plaintiff does not have to prove they suffered any actual financial loss. The law presumes that a defamatory statement in a permanent form will cause some damage.

2. Slander: This is defamation in a transient (temporary) form.
    - Examples: Spoken words or gestures.
    - Actionability: Slander is generally not actionable per se. The plaintiff must prove that they suffered some specific financial loss or damage as a result of the spoken statement. There are some exceptions where slander is actionable per se (e.g., accusing someone of a serious crime).

### Essentials of Defamation

To prove defamation, the plaintiff must establish three things:
1. The Statement Must Be Defamatory: The statement must be one that would tend to lower the plaintiff in the estimation of right-thinking members of society, or cause them to be shunned or avoided, or expose them to hatred, contempt, or ridicule.
2. The Statement Must Refer to the Plaintiff: The plaintiff must show that the defamatory statement was about them. It doesn't matter if the defendant intended to refer to someone else; if reasonable people would think it refers to the plaintiff, that's enough.
3. The Statement Must Be Published: "Publication" in this context simply means that the statement must be communicated to at least one person other than the plaintiff. If a defamatory letter is sent directly to the plaintiff and no one else sees it, it is not published.

### Defenses to Defamation

A person sued for defamation can use several defenses:
- Justification or Truth: If the statement made is true, it is a complete defense. The law will not protect a reputation that is not deserved.
- Fair Comment: This protects honest expressions of opinion on matters of public interest (e.g., critiquing a book, movie, or politician's performance). The comment must be based on true facts and not be malicious.
- Privilege: Certain statements are protected because the occasion on which they are made is considered more important than protecting reputation. This can be absolute (e.g., statements made in Parliament or court) or qualified (e.g., a former employer giving a reference for an employee).

🧠 Quick Recap:
- Defamation is a false statement that harms someone's reputation.
- Libel is written defamation (permanent form) and is actionable per se.
- Slander is spoken defamation (transient form) and usually requires proof of damage.
- Three essentials: The statement must be defamatory, refer to the plaintiff, and be published.
- Key defenses are Truth, Fair Comment, and Privilege.
`,
    links: [],
  },
  {
    topic: 'Vicarious Liability',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Vicarious Liability is a legal doctrine where one person is held responsible for the wrongful acts (torts) committed by another person. This is a form of "no-fault" liability, meaning the person held liable may not have done anything wrong themselves. The most common example is an employer being held liable for the torts of their employee.

### The Rationale Behind Vicarious Liability

The principle is based on several ideas:
- Respondeat Superior: A Latin maxim meaning "let the master answer."
- Deep Pockets Theory: The employer is usually in a better financial position to compensate the victim than the employee.
- Control: The employer has control over the employee's actions.
- Benefit: The employer benefits from the employee's work, so they should also bear the risks associated with it.

### Key Relationships for Vicarious Liability

Vicarious liability arises in specific legal relationships:

1. Master and Servant (Employer and Employee):
    - This is the most common scenario. An employer is held vicariously liable for the torts committed by their employee, provided the tort was committed "in the course of employment."
    - What is "in the course of employment"? This is the crucial question. It includes acts that are authorized by the employer, as well as wrongful ways of doing an authorized act.
    - Example: If a pizza delivery driver, while rushing to deliver a pizza for his employer, negligently hits a pedestrian, the pizza company (the employer) can be held vicariously liable. However, if the same driver, after his shift, goes to a party and hits someone, the employer is not liable.

2. Principal and Agent:
    - A principal can be held liable for the torts committed by their agent, as long as the agent was acting within the scope of the authority given by the principal.

3. Partners in a Partnership Firm:
    - All partners are jointly and severally liable for a tort committed by any one partner, provided it was done in the ordinary course of the firm's business.

### Independent Contractor vs. Employee

It is important to distinguish between an employee and an independent contractor. An employer is generally not vicariously liable for the torts of an independent contractor.
- Test of Control: An employee works under a contract of service, where the employer has control over *what* work is done and *how* it is done.
- An independent contractor works under a contract for services, where they are hired to do a specific job but have control over how they do it (e.g., hiring a taxi vs. having a chauffeur).

🧠 Quick Recap:
- Vicarious liability means one person is responsible for the tort of another.
- It is a form of no-fault liability.
- The most common example is an employer being liable for an employee's tort.
- The tort must be committed "in the course of employment."
- Employers are generally not liable for the torts of independent contractors.
`,
    links: [],
  },
  {
    topic: 'Trespass',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Trespass is a direct and unlawful interference with a person, their land, or their goods. It is a tort that protects the right to bodily integrity, possession of land, and possession of goods. A key feature of trespass is that it is actionable per se, meaning the plaintiff does not need to prove they suffered any actual damage to bring a lawsuit. The mere act of interference is enough.

### Types of Trespass

Trespass can be categorized into three types:

1. Trespass to Person: This involves any unlawful interference with a person's body or liberty.
- Assault: This is an act that causes another person to reasonably fear that they are about to suffer immediate physical harm. No physical contact is necessary. Example: Pointing a fake gun at someone who believes it is real.
- Battery: This is the intentional and direct application of force to another person without their consent. The force can be as minor as an unwanted touch. Example: Spitting on someone or punching them.
- False Imprisonment: This is the unlawful and total restraint of a person's liberty, preventing them from moving in any direction. The person being imprisoned may not even be aware of it at the time. Example: Locking someone in a room without their consent.

2. Trespass to Land:
- This is the unjustifiable physical interference with the possession of land. It can occur in three ways:
  - Entering upon the land of the plaintiff without permission.
  - Remaining on the land after the right to be there has ended.
  - Placing any material object on the land without permission.
- Key Points:
  - The slightest crossing of the boundary is sufficient.
  - It protects possession, not necessarily ownership. A tenant can sue for trespass, even against the landlord.
  - It is actionable per se.

3. Trespass to Goods (Chattels):
- This is the wrongful interference with goods that are in the possession of another.
- It involves either taking the goods from the plaintiff's possession (trespass to chattels) or destroying or permanently depriving the plaintiff of their goods (conversion).
- Example: Taking someone's book without permission, scratching their car, or stealing their pet.

🧠 Quick Recap:
- Trespass is a direct and unlawful interference.
- It is actionable per se (no proof of damage needed).
- Trespass to Person includes Assault (threat), Battery (contact), and False Imprisonment (restraint).
- Trespass to Land is interference with the possession of land.
- Trespass to Goods is interference with movable property.
`,
    links: [],
  },
  {
    topic: 'Introduction to Contracts',
    category: 'Legal Aptitude',
    content: `
📘 Summary: The Indian Contract Act, 1872, governs the law of contracts in India. A contract is essentially a legally binding agreement between two or more parties. It creates rights and obligations that can be enforced in a court of law. The fundamental principle is that all contracts are agreements, but not all agreements are contracts.

### What is a Contract?

Section 2(h) of the Act defines a contract as "an agreement enforceable by law." This definition has two key components:

1. Agreement: Defined in Section 2(e) as "every promise and every set of promises, forming the consideration for each other." An agreement is formed when one party makes a proposal (offer) and the other party accepts it.
    - Formula: Agreement = Offer + Acceptance

2. Enforceability by Law: For an agreement to become a contract, it must be legally enforceable. This means it must create legal obligations. Social or domestic agreements (e.g., a promise to take a friend to dinner) are generally not considered contracts because the parties do not intend to create legal relations.

### Essentials of a Valid Contract (Section 10)

For an agreement to be enforceable as a contract, it must satisfy the conditions laid out in Section 10 of the Act. These are the essential elements:

1. Offer and Acceptance: There must be a lawful offer by one party and a lawful acceptance of that offer by the other party.
2. Intention to Create Legal Relations: The parties must intend for their agreement to have legal consequences.
3. Lawful Consideration: 'Consideration' means 'something in return' (quid pro quo). Each party must give something and get something.
4. Capacity of Parties: The parties entering into the contract must be legally competent. They must be of the age of majority, of sound mind, and not disqualified by any law.
5. Free Consent: The consent of the parties must be genuine and not obtained through coercion, undue influence, fraud, misrepresentation, or mistake.
6. Lawful Object: The purpose or object of the agreement must be legal. It cannot be fraudulent, immoral, or opposed to public policy.
7. Certainty of Meaning: The terms of the agreement must be clear and not vague or uncertain.
8. Possibility of Performance: The agreement must be capable of being performed. An agreement to do an impossible act is void.
9. Legal Formalities: The contract must comply with any necessary formalities like writing, registration, or stamping, if required by law.

If any of these essential elements are missing, the agreement may be considered void, voidable, or unenforceable.

🧠 Quick Recap:
- Contract = Agreement + Enforceability by Law.
- Agreement = Offer + Acceptance.
- All contracts are agreements, but not all agreements are contracts.
- The essential elements for a valid contract are listed in Section 10 of the Indian Contract Act, 1872.
- These essentials include offer, acceptance, consideration, capacity, free consent, and lawful object.
`,
    links: [],
  },
  {
    topic: 'Offer and Acceptance',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Offer (or proposal) and acceptance are the starting points of any contract. An agreement is formed only when one party makes a clear offer and the other party provides an unconditional acceptance. These are the building blocks that establish mutual assent between the parties.

### Offer (Proposal) - Section 2(a)

An offer is when one person signifies to another their willingness to do or to abstain from doing something, with a view to obtaining the assent of the other. The person making the offer is called the "offeror" or "promisor."

Rules of a Valid Offer:
- Must Create Legal Relations: The offer must be made with the intention to create a legally binding agreement. Social invitations are not legal offers.
- Must Be Certain and Definite: The terms of the offer must be clear. An offer like "I will sell you 100 liters of oil" is vague if the kind of oil is not specified.
- Must Be Communicated: The offer must be communicated to the person to whom it is made (the "offeree").
- Can Be Express or Implied: An express offer is made in words (written or spoken). An implied offer is made by conduct (e.g., a transport company running a bus on a particular route is making an implied offer to carry passengers).
- Offer vs. Invitation to Offer: This is a crucial distinction. An offer, when accepted, becomes a promise. An invitation to offer is just an invitation to the public to make an offer.
  - Examples of Invitation to Offer: Price tags on goods in a shop, restaurant menus, advertisements, and auction notices. When you take an item to the cashier, you are making the offer, which the cashier can then accept.

### Acceptance - Section 2(b)

Acceptance is when the person to whom the proposal is made signifies their assent thereto.

Rules of a Valid Acceptance:
- Must Be Absolute and Unconditional: The acceptance must be of all the terms of the offer, without any changes. If the offeree adds a condition, it is not an acceptance but a counter-offer, which rejects the original offer.
- Must Be Communicated: The acceptance must be communicated to the offeror. Mental acceptance is not enough.
- Must Be in the Prescribed Mode: If the offeror specifies a particular way to accept (e.g., "reply by email"), the acceptance must be in that mode. If no mode is specified, it must be in some usual and reasonable manner.
- Acceptance must be given before the offer lapses or is revoked. An offer can be revoked by the offeror anytime before the communication of acceptance is complete.

🧠 Quick Recap:
- An offer is a clear proposal to enter into an agreement.
- An offer must be distinguished from an "invitation to offer" (e.g., price tags).
- Acceptance is the unconditional agreement to all terms of the offer.
- A conditional acceptance is a counter-offer, which kills the original offer.
- Both offer and acceptance must be properly communicated.
`,
    links: [],
  },
  {
    topic: 'Consideration and Capacity',
    category: 'Legal Aptitude',
    content: `
📘 Summary: For an agreement to be a valid contract, it must be supported by lawful consideration and made by parties who have the legal capacity to contract. Consideration is the 'price' of the promise, while capacity refers to a person's ability to enter into a legally binding agreement.

### Consideration - Section 2(d)

Consideration is a legal term for "something in return" or "quid pro quo." It is the value that each party brings to the agreement. Without consideration, an agreement is generally void.

Rules of Valid Consideration:
1. Must Move at the Desire of the Promisor: The act or promise must be done at the request of the person making the promise.
2. May Move from the Promisee or Any Other Person: In Indian law, consideration can be provided by the promisee or even a third party. This is different from English law, where consideration must move from the promisee only.
3. Can Be Past, Present, or Future:
    - Past Consideration: A promise for a voluntary service done in the past (valid in India).
    - Present (Executed) Consideration: Consideration which moves simultaneously with the promise.
    - Future (Executory) Consideration: A promise to do something in the future.
4. Need Not Be Adequate: The law only requires that consideration must exist; it does not care about whether it is a fair price. An agreement to sell a car worth ₹5 lakhs for ₹1 lakh is valid, as long as the consent was free.
5. Must Be Real and Not Illusory: It must have some value in the eyes of the law. A promise to find treasure by magic is not real consideration.

Exception: "No Consideration, No Contract"
An agreement without consideration is void, but Section 25 provides some exceptions, such as promises made out of natural love and affection.

### Capacity to Contract - Section 11

Section 11 states that every person is competent to contract if they are:
1. Of the Age of Majority: In India, the age of majority is 18 years. Any agreement with a minor (a person below 18) is void ab initio (void from the very beginning). This was established in the landmark case of Mohori Bibee v. Dharmodas Ghose. A minor cannot be forced to honour their agreements.
2. Of Sound Mind: A person is of sound mind if, at the time of making the contract, they can understand its terms and form a rational judgment about its effect on their interests. Agreements with persons of unsound mind (e.g., an insane person) are void.
3. Not Disqualified by Law: Some persons are disqualified from contracting by law, such as alien enemies or convicts undergoing imprisonment.

🧠 Quick Recap:
- Consideration means 'something in return' and is essential for a contract.
- Consideration need not be adequate but must be real.
- Capacity means being legally able to enter a contract.
- Persons without capacity are minors, persons of unsound mind, and those disqualified by law.
- An agreement with a minor is void ab initio.
`,
    links: [],
  },
  {
    topic: 'Free Consent',
    category: 'Legal Aptitude',
    content: `
📘 Summary: For an agreement to be a valid contract, the consent of the parties must be free and genuine. Section 14 of the Indian Contract Act states that consent is considered "free" when it is not caused by certain negative factors. If consent is not free, the contract is usually voidable at the option of the party whose consent was so caused.

### When is Consent Not Free?

Consent is not free if it is obtained through any of the following five elements:

1. Coercion (Section 15):
- What it is: Forcing someone into a contract by committing or threatening to commit any act forbidden by the Indian Penal Code (IPC), or by unlawfully detaining or threatening to detain any property.
- Example: A threatens to shoot B if B does not sell his house to A. B's consent is obtained by coercion.

2. Undue Influence (Section 16):
- What it is: This is more subtle than coercion. It occurs when one party is in a position to dominate the will of the other and uses that dominant position to obtain an unfair advantage.
- Where it happens: This often occurs in relationships where there is a pre-existing trust, such as doctor-patient, lawyer-client, or parent-child. The law presumes undue influence in such relationships.

3. Fraud (Section 17):
- What it is: This involves intentional deception. Fraud includes:
  - Making a statement that you know is false.
  - Actively concealing a fact that you have a duty to disclose.
  - Making a promise with no intention of performing it.
  - Any other act fitted to deceive.
- Key element: The intention is to deceive the other party.

4. Misrepresentation (Section 18):
- What it is: This is making a false statement that you believe to be true. It is an innocent mistake, not intentional deception.
- Key difference from Fraud: In fraud, the person making the statement knows it's false. In misrepresentation, they believe it's true.

5. Mistake (Sections 20-22):
- What it is: An erroneous belief about something.
- Mistake of Fact: If both parties are under a mistake about a fact that is essential to the agreement (bilateral mistake), the agreement is void. For example, A agrees to buy a horse from B, but unknown to both, the horse was already dead at the time of the agreement.
- Mistake of Law: A mistake about the law in force in India is not a valid excuse. Everyone is expected to know the law of their country.

### Effect of Lack of Free Consent

- If consent is caused by Coercion, Undue Influence, Fraud, or Misrepresentation, the contract is voidable at the option of the aggrieved party.
- If consent is caused by a bilateral mistake of fact, the agreement is void.

🧠 Quick Recap:
- Free consent is essential for a valid contract.
- Consent is not free if caused by: Coercion, Undue Influence, Fraud, Misrepresentation, or Mistake.
- Coercion involves threats or force. Undue influence involves dominating someone's will.
- Fraud is intentional deceit; Misrepresentation is an innocent false statement.
- A contract without free consent (except for mistake) is voidable.
- An agreement with a bilateral mistake of fact is void.
`,
    links: [],
  },
  {
    topic: 'Breach of Contract & Remedies',
    category: 'Legal Aptitude',
    content: `
📘 Summary: A breach of contract occurs when one of the parties fails or refuses to perform their obligations under the contract without a lawful excuse. When a breach happens, the law provides several remedies to the aggrieved party (the party who did not breach the contract) to compensate them for the loss.

### Types of Breach

1. Actual Breach: This occurs when a party fails to perform their part of the contract on the due date of performance.
    - Example: A agrees to deliver goods to B on June 1st but fails to do so.

2. Anticipatory Breach: This occurs when a party declares their intention not to perform the contract *before* the performance is due. This can be done through express words or by their conduct.
    - Example: A agrees to deliver goods to B on June 1st. On May 15th, A writes to B saying he will not be delivering the goods.

### Remedies for Breach of Contract

The aggrieved party has the following remedies available:

1. Rescission of the Contract:
- The aggrieved party can treat the contract as cancelled and is freed from all their obligations under it. They can also claim compensation for any losses.

2. Suit for Damages:
- This is the most common remedy. The goal is to provide monetary compensation to the injured party for the loss they have suffered due to the breach.
- The Rule in *Hadley v. Baxendale*: This famous case laid down the rule for calculating damages. The aggrieved party can claim:
  - Ordinary Damages: Losses that arise naturally in the usual course of things from the breach.
  - Special Damages: Losses that the parties knew, at the time of the contract, would likely result from a breach.
- The purpose is compensation, not punishment. So, punitive or exemplary damages are generally not awarded for breach of contract.

3. Suit upon Quantum Meruit:
- This Latin phrase means "as much as is earned" or "as much as one has deserved."
- It allows a party who has done some work under a contract to claim reasonable payment for the work done, especially when the contract is later found to be void or is ended by the other party.

4. Suit for Specific Performance:
- This is a court order directing the breaching party to actually perform the contract as promised.
- This remedy is granted only when damages are not an adequate remedy (e.g., in contracts for the sale of a unique piece of art or a specific piece of land). It is not granted for contracts of personal service (e.g., forcing a singer to sing).

5. Suit for Injunction:
- An injunction is a court order that restrains a person from doing a particular act. It is a preventive remedy, often used to stop a threatened breach of contract.

🧠 Quick Recap:
- A breach occurs when a party fails to perform their contractual obligation.
- The most common remedy is damages (monetary compensation).
- Rescission means cancelling the contract.
- Specific Performance is a court order to perform the contract, granted only in special cases.
- Injunction is a court order to stop someone from doing something.
- Quantum Meruit allows payment for work already done.
`,
    links: [],
  },
  {
    topic: 'Introduction to Criminal Law',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Criminal law is the body of law that relates to crime. It deals with acts that are considered harmful to society as a whole, even if the immediate victim is an individual. The state, on behalf of the public, prosecutes criminal cases. The primary aim of criminal law is to punish the wrongdoer and deter others from committing similar acts.

### The Foundation of Criminal Law

The core principle of criminal liability is encapsulated in the Latin maxim: _Actus non facit reum nisi mens sit rea_.
- Meaning: "An act does not make a person guilty unless the mind is also guilty."
- This means that to establish a crime, the prosecution must prove two essential elements: a guilty act and a guilty mind.

### The Two Elements of a Crime

1. Actus Reus (The Guilty Act):
    - This is the physical component of a crime. It is the wrongful act, omission (failure to act), or state of affairs that is forbidden by law.
    - Example: In the crime of murder, the actus reus is the physical act of killing another person.
    - An actus reus must be a voluntary act. An act done under duress or by reflex is generally not considered voluntary.

2. Mens Rea (The Guilty Mind):
    - This is the mental component of a crime. It refers to the state of mind or intention of the person at the time of committing the act.
    - There are different levels of mens rea:
      - Intention: The highest level. The person has a clear purpose to commit the crime.
      - Knowledge: The person is aware that their actions will almost certainly lead to a prohibited result.
      - Recklessness: The person is aware of an unjustifiable risk but takes it anyway.
      - Negligence: The person fails to perceive a risk that a reasonable person would have seen. This is the lowest level of culpability.
    - Strict Liability Offences: Some minor offences do not require proof of mens rea. These are called strict liability offences (e.g., certain traffic violations).

### Burden and Standard of Proof

- Burden of Proof: In criminal law, the burden of proving the defendant's guilt lies entirely with the prosecution. The accused is presumed innocent until proven guilty.
- Standard of Proof: The prosecution must prove the guilt beyond a reasonable doubt. This is a very high standard, much higher than the "preponderance of probabilities" standard used in civil cases. If there is any reasonable doubt in the judge's mind, the accused must be acquitted.

### Key Statutes in India

- Indian Penal Code (IPC), 1860: This is the primary statute that defines various crimes and prescribes their punishments.
- Code of Criminal Procedure (CrPC), 1973: This lays down the procedure for the investigation, trial, and punishment of criminal offences.
- Indian Evidence Act, 1872: This governs the rules of evidence in court proceedings.

🧠 Quick Recap:
- Criminal law deals with offences against society.
- A crime requires two elements: Actus Reus (guilty act) and Mens Rea (guilty mind).
- The burden of proof is on the prosecution.
- The standard of proof is "beyond a reasonable doubt."
- The accused is always presumed innocent until proven guilty.
`,
    links: [],
  },
  {
    topic: 'General Exceptions (IPC)',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Chapter IV (Sections 76 to 106) of the Indian Penal Code (IPC) is extremely important as it lists several "General Exceptions." These are situations where an act that would normally be considered a crime is not treated as one. These exceptions act as defenses for the accused, and if proven, can completely absolve them of criminal liability.

### Key Defenses under General Exceptions

1. Mistake of Fact (Sections 76 & 79):
- An act is not an offense if it is done by a person who, because of a mistake of fact (not a mistake of law), in good faith, believes they are bound or justified by law to do it.
- Example: A soldier fires on a mob by the order of his superior officer. He has committed no offense.

2. Judicial Acts (Sections 77 & 78):
- Acts done by a Judge when acting judicially, or acts done pursuant to the judgment or order of a court, are not offenses, even if the court did not have the proper jurisdiction, provided the person acting did so in good faith.

3. Accident (Section 80):
- An act is not an offense if it is done by accident or misfortune, without any criminal intention or knowledge, while doing a lawful act in a lawful manner by lawful means and with proper care and caution.
- Example: A person is chopping wood, and the axe-head flies off and kills a person standing by. This is an accident, not a crime.

4. Infancy (Sections 82 & 83):
- Doli Incapax: This means "incapable of doing harm."
- Section 82: Nothing is an offense which is done by a child under seven years of age (absolute immunity).
- Section 83: Nothing is an offense which is done by a child above seven and under twelve years of age, who has not attained sufficient maturity of understanding to judge the nature and consequences of their conduct.

5. Insanity (Section 84 - McNaghten Rule):
- An act is not an offense if, at the time of doing it, the person, by reason of unsoundness of mind, was incapable of knowing the nature of the act, or that what they were doing was either wrong or contrary to law.

6. Intoxication (Sections 85 & 86):
- Involuntary intoxication is a defense. If a person commits an offense because they were intoxicated without their knowledge or against their will, it is not an offense.
- Voluntary intoxication is generally not a defense, but it may be considered to determine the specific intent or knowledge required for a particular crime.

7. Consent (Sections 87-92):
- Harm caused with the consent of the victim is generally not an offense, provided the consent is freely given by a person above 18 years of age. This defense does not apply to acts intended to cause death or grievous hurt.

8. Right of Private Defence (Sections 96-106):
- This is the right to use reasonable force to defend one's own body or property, or the body or property of another person, against an unlawful act. This right is subject to certain restrictions.

🧠 Quick Recap:
- Chapter IV of the IPC provides general defenses against criminal liability.
- Key defenses include Mistake of Fact, Accident, Infancy (under 7 is absolute), and Insanity.
- Involuntary intoxication is a defense, but voluntary intoxication is not.
- The Right of Private Defence allows the use of reasonable force for protection.
`,
    links: []
  },
  {
    topic: 'Offences Against the Body',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Chapter XVI of the Indian Penal Code (IPC) is one of the most significant parts of the code, dealing with offenses affecting the human body. It covers a wide range of crimes, from simple hurt to murder. Understanding the fine distinctions between these offenses is crucial for legal aptitude.

### Culpable Homicide (Section 299) vs. Murder (Section 300)

This is a classic area of confusion. The simplest way to understand it is: "All murders are culpable homicides, but not all culpable homicides are murder." Murder is an aggravated or more severe form of culpable homicide.

- Culpable Homicide (Sec. 299): This is causing death by doing an act with:
  a) The intention of causing death; OR
  b) The intention of causing such bodily injury as is likely to cause death; OR
  c) The knowledge that the act is likely to cause death.
  *(This is a broader category with a lesser degree of intent/knowledge.)*

- Murder (Sec. 300): Culpable homicide becomes murder if the act is done with:
  a) An intention to kill.
  b) An intention to cause bodily injury that the offender knows will likely cause death.
  c) An intention to cause bodily injury which is sufficient in the ordinary course of nature to cause death.
  d) The knowledge that the act is so imminently dangerous that it must, in all probability, cause death, and committing the act without any excuse.
  *(This is a more specific category with a higher degree of intent/knowledge.)*

Exceptions to Murder: Even if an act falls under Section 300, it is treated as culpable homicide not amounting to murder if it falls under one of the five exceptions, such as grave and sudden provocation, or exceeding the right of private defence.

### Other Important Offences

- Hurt (Sec. 319) and Grievous Hurt (Sec. 320):
  - Hurt: Causing bodily pain, disease, or infirmity.
  - Grievous Hurt: A more serious form of hurt, which includes specific injuries like emasculation, permanent loss of sight or hearing, fracture or dislocation of a bone or tooth, etc.

- Wrongful Restraint (Sec. 339) and Wrongful Confinement (Sec. 340):
  - Wrongful Restraint: Obstructing a person from moving in a direction in which they have a right to proceed.
  - Wrongful Confinement: Wrongfully restraining a person in such a manner as to prevent them from proceeding beyond certain circumscribing limits.

- Assault (Sec. 351) and Criminal Force (Sec. 350):
  - Assault: Making a gesture or preparation intending or knowing it to be likely that such gesture will cause a person to apprehend that force is about to be used. (The threat of force).
  - Criminal Force: Intentionally using force on another person without their consent. (The actual use of force).

- Kidnapping (Sec. 361) and Abduction (Sec. 362):
  - Kidnapping: Taking a minor (under 16 for males, 18 for females) or a person of unsound mind out of the keeping of their lawful guardian without consent.
  - Abduction: Forcibly compelling or deceitfully inducing any person to go from any place. Kidnapping is a substantive offence, while abduction is only an offence when coupled with a specific criminal purpose.

🧠 Quick Recap:
- Murder is the aggravated form of Culpable Homicide. The key difference is the degree of intention and knowledge.
- Grievous Hurt is a more serious category of injury than simple Hurt.
- Wrongful Restraint is preventing movement in one direction; Wrongful Confinement is total restraint.
- Assault is the threat of force; Battery (Criminal Force) is the use of force.
- Kidnapping specifically involves a minor or person of unsound mind being taken from a lawful guardian.
`,
    links: []
  },
  {
    topic: 'Offences Against Property',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Chapter XVII of the Indian Penal Code (IPC) deals with offenses against property. These are some of the most common crimes and involve the wrongful gain or loss of property. Understanding the subtle differences between theft, extortion, robbery, and dacoity is a key part of legal reasoning.

### Theft (Section 378)

For an act to be considered theft, five elements must be present:
1. Dishonest Intention: The intention must be to take the property dishonestly.
2. Movable Property: The subject of theft must be movable property (not land or buildings).
3. Out of Possession: The property must be taken out of the possession of another person.
4. Without Consent: The property must be taken without the consent of the person in possession.
5. Moving the Property: The act of theft is complete as soon as the property is moved, even by a small distance.

Example: A sees a book on B's table. A takes the book with the intention of keeping it. A has committed theft.

### Extortion (Section 383)

Extortion involves obtaining property through fear or threats.
- The Act: Intentionally putting any person in fear of any injury (to themselves or someone else).
- The Purpose: Dishonestly inducing the person in fear to deliver any property, valuable security, or anything signed or sealed which may be converted into a valuable security.
- Key Difference from Theft: In theft, property is taken without consent. In extortion, the consent is obtained, but it is obtained wrongfully by putting the person in fear.

Example: A threatens to publish a defamatory statement about B unless B gives him money. A has committed extortion.

### Robbery (Section 390)

Robbery is an aggravated form of either theft or extortion.
- Robbery by Theft: Theft becomes robbery if, in order to commit the theft, the offender voluntarily causes or attempts to cause death, hurt, or wrongful restraint, or fear of instant death, hurt, or wrongful restraint. The violence must be for the purpose of committing the theft.
- Robbery by Extortion: Extortion becomes robbery if the offender, at the time of committing the extortion, is in the presence of the person put in fear, and commits the extortion by putting that person in fear of instant death, instant hurt, or instant wrongful restraint.

### Dacoity (Section 391)

Dacoity is simply robbery on a larger scale.
- The Rule: When five or more persons conjointly commit or attempt to commit a robbery, the offense is called dacoity.
- Every person involved in the act is held liable for dacoity.

### Criminal Misappropriation (Sec. 403) and Criminal Breach of Trust (Sec. 405)

- Criminal Misappropriation: Dishonestly misappropriating or converting to one's own use any movable property. Example: Finding a lost wallet and keeping it instead of trying to find the owner.
- Criminal Breach of Trust: This is more serious. It happens when a person who has been entrusted with property dishonestly misappropriates it. There is a pre-existing relationship of trust. Example: An employee stealing money from their employer.

🧠 Quick Recap:
- Theft: Dishonest taking of movable property without consent.
- Extortion: Obtaining property by putting someone in fear of injury.
- Robbery: Theft or extortion involving immediate violence or threat of violence.
- Dacoity: Robbery committed by five or more people.
- Criminal Breach of Trust is misappropriation by a person who was entrusted with the property.
`,
    links: []
  },
  {
    topic: 'Audi Alteram Partem',
    category: 'Legal Maxims',
    content: `
📘 Summary: *Audi Alteram Partem* is a Latin maxim that means "let the other side be heard" or "hear the other side." It is a fundamental principle of natural justice, ensuring that any legal or administrative decision that affects a person's rights or interests is made only after giving them a fair opportunity to present their case.

### The Core Principle: The Rule of Fair Hearing

The maxim is the foundation of a fair and just legal system. It ensures that proceedings are not one-sided. No one should be condemned unheard. The rule requires that any person who is facing a charge or whose rights are at stake must be given:

1. Notice: The person must be given a clear and proper notice of the case against them. The notice should contain the specific charges or allegations so that the person can prepare their defense. A vague notice is not a valid notice.

2. Opportunity to be Heard: After receiving the notice, the person must be given a reasonable opportunity to present their side of the story. This includes the right to:
    - Present evidence in their favor.
    - Cross-examine the witnesses who are testifying against them.
    - Be represented by a lawyer (in most cases).

### Why is it Important?

- Prevents Arbitrariness: It acts as a check on the arbitrary power of administrative authorities and courts. It ensures that decisions are made based on evidence and arguments from both sides, not on bias or whim.
- Ensures Fairness: A fair hearing is the cornerstone of justice. It gives a person the chance to defend themselves, correct any wrong facts, and explain their conduct.
- Builds Public Trust: When people know that they will be heard fairly before a decision is made, it increases their trust and confidence in the legal and administrative system.

### Where is it Applied?

The principle of *Audi Alteram Partem* is not just limited to courts of law. It applies to a wide range of decision-making bodies, including:
- Administrative Tribunals: Such as tax tribunals or service tribunals.
- Government Departments: When making decisions that affect individuals, like cancelling a license or dismissing an employee.
- Educational Institutions: In disciplinary proceedings against students.
- Domestic Inquiries: Inquiries conducted by employers against their employees.

### Exceptions to the Rule

While the rule is fundamental, there are some rare exceptions where it may not be applied, such as:
- Emergency Situations: Where immediate action is required in the public interest.
- Where it is impracticable to hold a hearing.
- If the application of the rule would serve no purpose (e.g., if the facts are undisputed).

🧠 Quick Recap:
- Meaning: "Hear the other side."
- It is a fundamental principle of natural justice.
- It guarantees the right to a fair hearing.
- Two key components: Notice (knowing the charges) and the Opportunity to be Heard (presenting one's case).
- It applies to courts as well as administrative bodies.
- It prevents arbitrary decisions and ensures fairness.
`,
    links: []
  },
  {
    topic: 'Res Ipsa Loquitur',
    category: 'Legal Maxims',
    content: `
📘 Summary: *Res Ipsa Loquitur* is a Latin maxim that means "the thing speaks for itself." It is a doctrine used in the law of torts, specifically in negligence cases. It allows a plaintiff to establish negligence on the part of the defendant even without direct evidence. The principle applies when the circumstances of the accident are so obvious that negligence can be inferred from the incident itself.

### The Problem it Solves

In a typical negligence case, the plaintiff has the burden of proving that the defendant was negligent. However, sometimes it's impossible for the plaintiff to know exactly what happened. For example, if a person is hit by a barrel falling from a warehouse window, they won't know what the workers inside were doing wrong. This is where *Res Ipsa Loquitur* comes in. It shifts the burden of proof to the defendant to explain how the accident happened without their negligence.

### Conditions for Applying Res Ipsa Loquitur

For this doctrine to apply, the plaintiff must prove three conditions:

1. The Accident Must Be of a Kind That Does Not Ordinarily Occur Without Negligence:
    - The incident must be something that wouldn't have happened if someone hadn't been careless.
    - Example: A plane crash, a surgical instrument left inside a patient's body, or a barrel falling from a building are not things that usually happen without negligence.

2. The Thing Causing the Injury Must Be Under the Exclusive Control of the Defendant:
    - The plaintiff must show that the object or situation that caused the injury was under the defendant's sole control. This links the negligence directly to the defendant.
    - Example: In the case of the falling barrel (*Byrne v. Boadle*), the barrel was under the control of the warehouse owner (the defendant).

3. The Plaintiff Must Not Have Contributed to the Accident:
    - The accident must not have been due to any voluntary action or contribution on the part of the plaintiff. The plaintiff must be a passive victim of the circumstances.

### Effect of the Doctrine

If all three conditions are met, the court can infer that the defendant was negligent. It creates a *prima facie* (at first sight) case of negligence against the defendant. The burden of proof then shifts to the defendant. It is up to the defendant to provide evidence to show that they were, in fact, not negligent and that the accident occurred for some other reason. If they cannot provide a satisfactory explanation, they will be held liable.

🧠 Quick Recap:
- Meaning: "The thing speaks for itself."
- It's a rule of evidence in negligence cases.
- It allows negligence to be inferred from the circumstances of the accident.
- Three conditions:
  1. The accident doesn't normally happen without negligence.
  2. The cause of the accident was under the defendant's exclusive control.
  3. The plaintiff did not contribute to the accident.
- If applied, it shifts the burden of proof to the defendant to prove they were not negligent.
`,
    links: []
  },
  {
    topic: 'Volenti Non Fit Injuria',
    category: 'Legal Maxims',
    content: `
📘 Summary: *Volenti Non Fit Injuria* is a Latin maxim that means "to a willing person, no injury is done." It is a key defense in the law of torts. The principle is that if someone knowingly and voluntarily agrees to accept a risk of harm, they cannot later sue for damages if that harm occurs. It's also known as the defense of "voluntary assumption of risk."

### The Core Principle: Consent to Risk

The defense is based on the idea that a person who has consented to run a risk cannot complain of the resulting injury. This consent can be either express (stated in words) or implied (inferred from conduct).

### Essential Elements for the Defense

For a defendant to successfully use this defense, they must prove two things:

1. Knowledge of the Risk (Scienti):
    - The plaintiff must have had full knowledge of both the nature and the extent of the risk involved. It's not enough for the plaintiff to know there was some risk; they must have understood the specific risk they were facing.
    - Example: A person who knows a wall is old and might fall is aware of a risk.

2. Voluntary Acceptance of the Risk (Volenti):
    - Knowing about the risk is not enough. The plaintiff must have also voluntarily agreed, either expressly or by implication, to accept that risk. This is the consent part.
    - The maxim is *Volenti* non fit injuria, not *Scienti* non fit injuria. Knowledge of the risk is not the same as consent to run the risk.
    - Example: In *Smith v. Baker*, a worker was injured by a stone falling from a crane. He knew there was a risk, but he had complained to his employer about it. The court held that he had not voluntarily consented to the risk, so the defense failed. Continuing to work did not automatically mean he consented to the employer's negligence.

### Limitations and Exceptions

This defense does not apply in all situations:
- Rescue Cases: If a person is injured while trying to rescue someone from a dangerous situation created by the defendant's negligence, the defense of *volenti* cannot be used against the rescuer. The law encourages heroic acts.
- Negligence of the Defendant: The plaintiff must consent to the specific risk of injury, not to the defendant's negligence. A patient consenting to surgery agrees to the risks of the operation, but not to the surgeon's negligence in performing it.
- Statutory Restrictions: In some cases, like industrial safety laws, the defense is not available to employers if an employee is injured due to a breach of a statutory duty.

🧠 Quick Recap:
- Meaning: "To a willing person, no injury is done."
- It's a defense of consent or voluntary assumption of risk in tort law.
- Two requirements: The plaintiff must have (1) full knowledge of the risk and (2) voluntarily agreed to accept it.
- Knowledge of a risk does not automatically mean consent to it.
- The defense does not apply in rescue cases or to a defendant's own negligence.
`,
    links: []
  },
  {
    topic: 'Ubi Jus Ibi Remedium',
    category: 'Legal Maxims',
    content: `
📘 Summary: *Ubi Jus Ibi Remedium* is a fundamental legal maxim that means "where there is a right, there is a remedy." It encapsulates the principle that for every legal right that is violated, the law must provide a mechanism or a solution to enforce that right or to compensate for its violation. A right without a remedy is essentially meaningless.

### The Core Principle: Rights and Remedies are Inseparable

The maxim asserts that the existence of a legal right implies the existence of a legal remedy. If a person's legal rights are infringed, they must have a course of action to go to court and seek enforcement or compensation. The law cannot create a right and then leave the individual helpless when that right is violated.

This principle was famously established in the English case of Ashby v. White (1703).
- Facts: Mr. Ashby, a qualified voter, was wrongfully prevented from voting in an election by a constable, Mr. White. Even though the candidate Ashby wanted to vote for won the election, he sued the constable for interfering with his legal right to vote.
- Court's Decision: The court held that even though Ashby suffered no actual financial loss (as his candidate won), his legal right to vote had been violated. The court famously stated that "if the plaintiff has a right, he must of necessity have a means to vindicate and maintain it... it is a vain thing to imagine a right without a remedy." Thus, a legal injury (*injuria*) had occurred, and a remedy (damages) must be provided.

### Application in Indian Law

The principle of *Ubi Jus Ibi Remedium* is deeply embedded in the Indian legal system.
- The Constitution of India: Article 32 is a prime example of this maxim. It not only guarantees Fundamental Rights but also provides a guaranteed remedy by giving every citizen the right to move the Supreme Court directly for the enforcement of their rights. Dr. Ambedkar called Article 32 the "heart and soul" of the Constitution for this very reason.
- Civil Procedure Code: Section 9 of the Code of Civil Procedure grants civil courts the jurisdiction to try all suits of a civil nature, ensuring that individuals have a forum to enforce their private rights.
- Law of Torts: The entire law of torts is based on providing remedies (usually damages) for the violation of various legal rights, such as the right to reputation, bodily safety, and property.

### Limitations of the Maxim

The maxim is not absolute and has some limitations:
- No Remedy for Moral or Social Wrongs: The maxim applies only to the violation of legal rights. It does not provide remedies for moral or social wrongs that are not recognized by the law.
- When the Right and Remedy are Separated by Law: Sometimes a statute might create a right but explicitly bar any legal remedy in a court of law.
- Breach of a Public Right: In cases of breach of a public right, an individual may not have a personal remedy unless they can show they have suffered a special or particular injury.

🧠 Quick Recap:
- Meaning: "Where there is a right, there is a remedy."
- It means that a legal right is meaningless without a legal way to enforce it.
- Landmark Case: *Ashby v. White*, where a voter was compensated for being denied his right to vote, even with no actual loss.
- In India: The principle is reflected in Article 32 of the Constitution and the general structure of civil and tort law.
- It applies only to the violation of legal rights, not moral or social ones.
`,
    links: []
  },
  {
    topic: 'Actus Non Facit Reum Nisi Mens Sit Rea',
    category: 'Legal Maxims',
    content: `
📘 Summary: This Latin maxim is the cornerstone of criminal law. It translates to "an act does not make a person guilty unless the mind is also guilty." It means that for an act to be considered a crime, it must be a combination of two essential elements: a physical "guilty act" and a mental "guilty mind." A person cannot be punished for a wrongful act alone if they did not have a blameworthy state of mind.

### The Two Elements of a Crime

The maxim breaks down a crime into two components:

1. Actus Reus (The Guilty Act):
- This is the physical element of a crime. It is the external conduct or the result of conduct that the law prohibits.
- *Actus Reus* can be:
  - An Act: A positive action, like stabbing someone.
  - An Omission: A failure to act when there is a legal duty to do so. For example, a parent failing to provide food to their child, leading to the child's death.
  - A State of Affairs: In some rare cases, just being in a certain situation can be the actus reus, like being in possession of illegal drugs.
- The act must be voluntary. An act performed under compulsion or by reflex is generally not considered a valid *actus reus*.

2. Mens Rea (The Guilty Mind):
- This is the mental element of a crime. It refers to the blameworthy state of mind, fault, or intention of the accused at the time of the *actus reus*.
- *Mens Rea* is not a single concept but a range of mental states. The specific *mens rea* required varies from crime to crime. The main levels include:
  - Intention: The highest level of fault. The accused has a clear purpose to bring about the prohibited result.
  - Knowledge: The accused is aware that their actions are certain or highly likely to cause the prohibited result.
  - Recklessness: The accused foresees a risk of harm but decides to take that risk anyway.
  - Negligence: The accused fails to foresee a risk that a reasonable person would have foreseen. This is the lowest level of fault and is used as the basis for *mens rea* only in a few crimes.

### Application and Importance

- The prosecution in a criminal case must prove both the *actus reus* and the *mens rea* beyond a reasonable doubt.
- If either element is missing, the person cannot be convicted of the crime. For example, if someone accidentally hits a pedestrian while driving carefully, the *actus reus* (hitting the person) is present, but the *mens rea* (intention, recklessness) is absent, so it's not a crime (though it could be a civil tort of negligence).

### Exceptions: Strict Liability Offences

There are some exceptions to this rule, known as strict liability offences. These are crimes that do not require proof of *mens rea*. The *actus reus* alone is enough to convict. These are usually minor, regulatory offences created by statute to protect public welfare.
- Examples: Selling adulterated food, certain traffic violations, or industrial pollution offences.

🧠 Quick Recap:
- Meaning: "The act is not guilty unless the mind is guilty."
- A crime requires two parts: Actus Reus (guilty act) and Mens Rea (guilty mind).
- *Actus Reus* is the physical act or omission.
- *Mens Rea* is the mental state of intention, knowledge, or recklessness.
- The prosecution must prove both elements beyond a reasonable doubt.
- Strict Liability Offences are an exception and do not require *mens rea*.
`,
    links: []
  },
  {
    topic: 'Ancient Indian History',
    category: 'General Knowledge',
    content: `
📘 Summary: Ancient Indian History spans from the prehistoric era to the end of the Gupta Empire and the beginning of the early medieval period in the 7th century AD. This era laid the foundations of Indian culture, religion, and society, with major developments like the Indus Valley Civilization, the Vedic age, the rise of empires, and the birth of Buddhism and Jainism.

### Key Periods and Developments

1. Indus Valley Civilization (IVC) / Harappan Civilization (c. 2500-1900 BC):
- A Bronze Age civilization located in the northwestern regions of South Asia.
- Key Features: Known for its sophisticated urban planning, with well-organized cities like Harappa and Mohenjo-Daro. They had advanced drainage systems, baked brick houses, and a system of weights and measures.
- Economy: Primarily based on agriculture and trade.
- Culture: They had a pictographic script (which remains undeciphered) and produced distinctive seals, pottery, and sculptures (like the famous 'Dancing Girl' statue).

2. The Vedic Period (c. 1500-500 BC):
- Named after the Vedas, the foundational texts of Hinduism, composed in Sanskrit.
- Early Vedic Period (Rigvedic Period, c. 1500-1000 BC): Society was largely pastoral and semi-nomadic. The Rigveda is the main source of information for this period. The political unit was the *jana* (tribe).
- Later Vedic Period (c. 1000-500 BC): Society became more agricultural and settled. The concept of large kingdoms (*janapadas*) emerged. The caste system (*varna* system) became more rigid.

3. Rise of Mahajanapadas and New Religions (6th Century BC):
- By the 6th century BC, around 16 large kingdoms or Mahajanapadas (like Magadha, Kosala, Avanti) had emerged.
- This period also saw the rise of two major religions as a reaction against the ritualism of the Vedic religion:
  - Buddhism: Founded by Gautama Buddha.
  - Jainism: Propagated by Mahavira.

4. The Mauryan Empire (c. 322-185 BC):
- The first major empire to unify most of the Indian subcontinent.
- Founder: Chandragupta Maurya, who defeated the Nandas with the help of his advisor, Kautilya (Chanakya), the author of the *Arthashastra*.
- Most Famous Ruler: Ashoka the Great. After the bloody Kalinga War, he converted to Buddhism and dedicated his reign to spreading its message of peace and *Dhamma* (righteous conduct). His edicts, inscribed on pillars and rocks, are a major historical source.

5. The Gupta Empire (c. 320-550 AD):
- Often referred to as the "Golden Age of India" for its remarkable achievements.
- Key Rulers: Chandragupta I, Samudragupta (the "Napoleon of India"), and Chandragupta II (Vikramaditya).
- Achievements: Major advancements were made in science, mathematics (including the decimal system and the concept of zero), astronomy (Aryabhata), literature (Kalidasa), and temple architecture.

🧠 Quick Recap:
- Indus Valley Civilization: Known for urban planning (Harappa, Mohenjo-Daro).
- Vedic Period: Composition of the Vedas, emergence of the caste system.
- 6th Century BC: Rise of Mahajanapadas, Buddhism, and Jainism.
- Mauryan Empire: Founded by Chandragupta Maurya; Ashoka is the most famous ruler.
- Gupta Empire: The "Golden Age" with significant contributions in science and arts.
`,
    links: [],
  },
  {
    topic: 'Medieval Indian History',
    category: 'General Knowledge',
    content: `
📘 Summary: Medieval Indian History typically covers the period from the 8th century to the 18th century, beginning after the fall of the Gupta Empire and ending with the start of British colonization. This era was marked by the rise of powerful regional kingdoms, the arrival of Islamic rule with the Delhi Sultanate and the Mughal Empire, and significant cultural and religious movements.

### Early Medieval Period (c. 750-1200 AD)

- Regional Kingdoms: After the decline of major empires, India was divided into several powerful regional kingdoms.
  - North India: The Gurjara-Pratiharas, Palas, and Rashtrakutas were involved in a three-way struggle for control over Kannauj. Later, the Rajputs (like the Chauhans and Tomars) became prominent.
  - South India: The Cholas, Pandyas, and Cheras were the dominant powers. The Chola dynasty was particularly known for its powerful navy, extensive trade, and magnificent temple architecture (e.g., the Brihadeeswarar Temple).

### The Delhi Sultanate (1206-1526 AD)

This period marked the establishment of Turkish and Afghan rule in North India, with Delhi as the capital. It consisted of five successive dynasties:
1. Slave Dynasty (1206-1290): Founded by Qutb-ud-din Aibak. Iltutmish and Balban were other powerful rulers. Razia Sultana was the only female Muslim ruler of the Sultanate.
2. Khilji Dynasty (1290-1320): Known for the ambitious military campaigns and economic reforms of Alauddin Khilji.
3. Tughlaq Dynasty (1320-1414): Muhammad bin Tughlaq is famous for his controversial experiments, like shifting the capital to Daulatabad and introducing token currency.
4. Sayyid Dynasty (1414-1451): A period of decline.
5. Lodi Dynasty (1451-1526): The last dynasty, which was defeated by Babur.

### The Mughal Empire (1526-1857 AD)

- Founded by Babur after he defeated Ibrahim Lodi in the First Battle of Panipat (1526).
- Key Rulers:
  - Akbar the Great (1556-1605): Known for his policy of religious tolerance (*Sulh-i-Kul*), administrative reforms (*mansabdari* system), and patronage of art and culture.
  - Jahangir (1605-1627): A great patron of painting.
  - Shah Jahan (1628-1658): The "Architect King," famous for building the Taj Mahal, Jama Masjid, and the Red Fort.
  - Aurangzeb (1658-1707): A devout Muslim who expanded the empire to its greatest extent but whose rigid policies contributed to its decline.

### Bhakti and Sufi Movements

- These were religious reform movements that gained prominence during the medieval period.
- Bhakti Movement: Emphasized devotion and love as the means to salvation. Saints like Kabir, Nanak, Mirabai, and Chaitanya preached against caste discrimination and ritualism.
- Sufi Movement: A mystical branch of Islam that preached love, tolerance, and service to humanity.

🧠 Quick Recap:
- The medieval period saw the rise of powerful regional kingdoms like the Cholas and Rajputs.
- The Delhi Sultanate (1206-1526) comprised five dynasties: Slave, Khilji, Tughlaq, Sayyid, and Lodi.
- The Mughal Empire (1526-1857) was founded by Babur. Akbar and Shah Jahan were notable rulers.
- The Bhakti and Sufi movements promoted love and devotion as paths to God.
`,
    links: [],
  },
  {
    topic: 'Modern Indian History',
    category: 'General Knowledge',
    content: `
📘 Summary: Modern Indian History chronicles the period from the decline of the Mughal Empire and the arrival of European powers in the 18th century to India's independence in 1947. This era is defined by the rise of British colonial rule, the Indian people's struggle for freedom, and the eventual partition of the subcontinent.

### The Rise of British Power

- Arrival of European Companies: The Portuguese, Dutch, French, and English came to India for trade. The English East India Company eventually outmaneuvered the others.
- Battle of Plassey (1757): A decisive victory for the British East India Company over the Nawab of Bengal. This marked the beginning of British political dominance in India.
- Battle of Buxar (1764): This victory confirmed British power and gave them the right to collect revenue (*diwani*) in Bengal, Bihar, and Orissa.

### The Revolt of 1857

- Also known as the First War of Indian Independence or the Sepoy Mutiny.
- It was a major, but ultimately unsuccessful, uprising against the rule of the British East India Company.
- Consequence: The British Crown took direct control of India from the Company in 1858, marking the beginning of the British Raj.

### The Indian National Movement (1885-1947)

This was the long struggle for freedom from British rule.
- Formation of the Indian National Congress (INC) in 1885: It started as a platform for educated Indians to voice their grievances but grew into the main vehicle for the freedom struggle.
- Partition of Bengal (1905): A "divide and rule" policy by the British that sparked widespread protests and the Swadeshi Movement.
- The Gandhian Era (1915-1947): Mahatma Gandhi's return to India marked a new phase of mass mobilization based on the principles of non-violence (*satyagraha*).
  - Non-Cooperation Movement (1920-22): The first mass movement led by Gandhi.
  - Civil Disobedience Movement (1930-34): Began with the famous Dandi Salt March, where Gandhi and his followers marched to the sea to make salt, defying the British salt tax.
  - Quit India Movement (1942): A call for immediate British withdrawal from India, with Gandhi giving the slogan "Do or Die."

### Independence and Partition

- After World War II, the British government agreed to grant independence to India.
- The Mountbatten Plan proposed the partition of India into two dominions: India and Pakistan.
- On August 15, 1947, India achieved its independence, but it was accompanied by the tragedy and violence of Partition.

🧠 Quick Recap:
- The Battle of Plassey (1757) marked the start of British political rule.
- The Revolt of 1857 led to the British Crown taking direct control of India.
- The Indian National Congress (INC) was formed in 1885 to lead the freedom struggle.
- Mahatma Gandhi led three major mass movements: Non-Cooperation, Civil Disobedience (Dandi March), and Quit India.
- India gained independence on August 15, 1947, along with the Partition of the country.
`,
    links: [],
  },
  {
    topic: 'Indian Geography',
    category: 'General Knowledge',
    content: `
📘 Summary: Indian geography is the study of India's diverse physical landscape, climate, rivers, and political divisions. Located entirely in the Northern Hemisphere, India is the seventh-largest country by area and is known for its vast range of geographical features, from the towering Himalayas in the north to the sun-drenched coastal plains in the south.

### Location and Extent

- Location: Situated in South Asia, with the Indian Ocean to its south, the Arabian Sea to its southwest, and the Bay of Bengal to its southeast.
- Latitude and Longitude: It lies between 8°4' N and 37°6' N latitude and 68°7' E and 97°25' E longitude.
- Tropic of Cancer (23.5°N): This important line of latitude passes through the middle of the country, dividing it into almost two equal halves.

### Major Physical Divisions

India's landscape can be divided into six main physical divisions:

1. The Himalayan Mountains:
    - A young and geologically active mountain range forming the northern border. It consists of three parallel ranges: the Himadri (Greater Himalayas), Himachal (Lesser Himalayas), and Shivaliks (Outer Himalayas). It is the source of major Indian rivers.

2. The Northern Plains:
    - Also known as the Indo-Gangetic Plains, these are vast, fertile plains formed by the alluvial deposits of three major river systems: the Indus, the Ganga, and the Brahmaputra. This is one of the most densely populated regions in the world.

3. The Peninsular Plateau:
    - A large, triangular-shaped tableland. It is the oldest and most stable landmass of India. It is further divided into the Central Highlands and the Deccan Plateau. It is rich in mineral resources.

4. The Indian Desert (Thar Desert):
    - Located to the west of the Aravalli Hills in Rajasthan. It is a dry, sandy region with very low rainfall.

5. The Coastal Plains:
    - Narrow coastal strips along the edge of the Peninsular Plateau. They are divided into the Western Coastal Plains (along the Arabian Sea) and the Eastern Coastal Plains (along the Bay of Bengal).

6. The Islands:
    - India has two major island groups:
      - Andaman and Nicobar Islands: Located in the Bay of Bengal.
      - Lakshadweep Islands: Located in the Arabian Sea. These are coral islands.

### River Systems

- Himalayan Rivers: These rivers are perennial (flow throughout the year) as they are fed by both rain and melting snow. The main systems are the Indus, the Ganga, and the Brahmaputra.
- Peninsular Rivers: These rivers are mostly seasonal, dependent on monsoon rains. Major west-flowing rivers are the Narmada and the Tapi. Major east-flowing rivers are the Mahanadi, Godavari, Krishna, and Kaveri.

### Climate

- India has a tropical monsoon climate. The climate is heavily influenced by the monsoon winds, which bring seasonal rains, crucial for agriculture.

🧠 Quick Recap:
- India is divided into six major physical divisions: Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains, and Islands.
- The Tropic of Cancer passes through the middle of India.
- The Himalayas are the source of major perennial rivers like the Ganga.
- The Northern Plains are extremely fertile and densely populated.
- India has a tropical monsoon climate.
`,
    links: [],
  },
  {
    topic: 'World Geography',
    category: 'General Knowledge',
    content: `
📘 Summary: World Geography is the study of the Earth's lands, features, inhabitants, and phenomena. For competitive exams, this typically involves knowing about the continents and oceans, major physical features like mountains and rivers, important geographical lines, and the capitals and currencies of key countries.

### Continents and Oceans

- The Seven Continents (by size):
  1. Asia: The largest and most populous continent.
  2. Africa: The second largest, home to the Sahara Desert and the Nile River.
  3. North America: Includes countries like the USA, Canada, and Mexico.
  4. South America: Home to the Amazon Rainforest and the Andes Mountains.
  5. Antarctica: The coldest, driest, and highest continent, covered almost entirely by ice.
  6. Europe: A continent of many countries, connected to Asia (forming Eurasia).
  7. Australia: The smallest continent, often referred to as an "island continent."

- The Five Oceans (by size):
  1. Pacific Ocean: The largest and deepest ocean.
  2. Atlantic Ocean: The second largest, separating the Americas from Europe and Africa.
  3. Indian Ocean: The third largest, named after India.
  4. Southern (or Antarctic) Ocean: The ocean surrounding Antarctica.
  5. Arctic Ocean: The smallest and shallowest, located around the North Pole.

### Major Physical Features

- Longest Mountain Ranges:
  - The Andes (South America) is the longest mountain range in the world.
  - The Rockies (North America).
  - The Himalayas (Asia) contains the world's highest peaks, including Mount Everest.
- Largest Deserts:
  - Antarctic Polar Desert is the largest desert overall.
  - Sahara Desert (Africa) is the largest hot desert.
  - Gobi Desert (Asia).
- Longest Rivers:
  - The Nile (Africa) is traditionally considered the longest river.
  - The Amazon (South America) is the largest river by discharge volume and is sometimes considered the longest.
- Largest Lakes:
  - Caspian Sea is the largest lake by area.
  - Lake Superior is the largest freshwater lake by area.

### Important Imaginary Lines on Earth

- Equator (0° latitude): Divides the Earth into the Northern and Southern Hemispheres.
- Tropic of Cancer (23.5° N latitude): The northernmost point where the sun can be directly overhead.
- Tropic of Capricorn (23.5° S latitude): The southernmost point where the sun can be directly overhead.
- Prime Meridian (0° longitude): Passes through Greenwich, London, and is the starting point for measuring longitude.
- International Date Line (approx. 180° longitude): An imaginary line where the date changes as one travels east or west across it.

🧠 Quick Recap:
- There are seven continents (largest: Asia) and five oceans (largest: Pacific).
- Andes is the longest mountain range; Himalayas is the highest.
- Nile is the longest river; Amazon has the largest volume.
- Sahara is the largest hot desert.
- The Equator divides the Earth into Northern and Southern Hemispheres.
- The Prime Meridian is the starting line for longitude.
`,
    links: [],
  },
  {
    topic: 'Indian Economy Basics',
    category: 'General Knowledge',
    content: `
📘 Summary: Understanding the basics of the Indian economy involves knowing its structure, key concepts, and major institutions. India has a mixed economy, combining elements of both capitalism and socialism. It is one of the world's fastest-growing major economies.

### Sectors of the Indian Economy

The economy is generally divided into three sectors:
1. Primary Sector (Agriculture and Allied Sector): This sector involves the extraction of raw materials. It includes agriculture, forestry, fishing, and mining. While its share in India's GDP has declined, it still employs the largest number of people.
2. Secondary Sector (Industrial Sector): This sector transforms raw materials into finished goods. It includes manufacturing, construction, and electricity generation.
3. Tertiary Sector (Service Sector): This sector provides services rather than goods. It includes activities like trade, transport, banking, insurance, education, healthcare, and IT services. The service sector is the largest contributor to India's GDP.

### Key Economic Concepts

- GDP (Gross Domestic Product): The total monetary value of all final goods and services produced within a country's borders in a specific time period (usually a year). It is the most common measure of a country's economic size.
- Inflation: The rate at which the general level of prices for goods and services is rising, leading to a fall in the purchasing power of currency. High inflation can be harmful to the economy.
- Fiscal Policy: This refers to the use of government spending and taxation to influence the economy. It is managed by the Ministry of Finance. The annual Union Budget is the most important instrument of fiscal policy.
- Monetary Policy: This refers to the actions undertaken by a country's central bank to control the money supply and credit conditions. Its main goals are to control inflation and stabilize the currency. Key tools include the repo rate and reverse repo rate.

### Major Economic Institutions

- Reserve Bank of India (RBI):
  - India's central bank, established in 1935.
  - Its functions include issuing currency, managing monetary policy, acting as a banker to the government and commercial banks, and managing foreign exchange reserves.
- SEBI (Securities and Exchange Board of India):
  - The regulator for the securities and commodity market in India. It aims to protect the interests of investors and regulate stock exchanges.
- NITI Aayog (National Institution for Transforming India):
  - The premier policy "think tank" of the Government of India. It replaced the Planning Commission in 2015. It provides strategic and technical advice to the central and state governments.

🧠 Quick Recap:
- India has a mixed economy with three sectors: Primary (Agriculture), Secondary (Industry), and Tertiary (Services).
- The Service Sector is the largest contributor to GDP.
- GDP measures the total value of goods and services produced.
- Fiscal Policy (budget, taxes) is managed by the government.
- Monetary Policy (interest rates) is managed by the RBI.
- NITI Aayog is the government's policy think tank.
`,
    links: [],
  },
  {
    topic: 'International Organizations',
    category: 'General Knowledge',
    content: `
📘 Summary: International organizations are bodies created by treaties between countries to work on issues of common interest. They play a crucial role in maintaining peace, fostering cooperation, and setting standards on a global scale. Knowing the key organizations, their headquarters, and their main functions is important for general knowledge.

### Key Global Organizations

1. United Nations (UN):
- Founded: 1945, after World War II, to prevent future wars.
- Headquarters: New York, USA.
- Purpose: To maintain international peace and security, promote human rights, foster social and economic development, and provide humanitarian aid.
- Key Organs:
  - General Assembly: The main deliberative body where all 193 member states have an equal vote.
  - Security Council: Responsible for maintaining peace. It has 15 members, including 5 permanent members with veto power (USA, UK, France, Russia, China).
  - International Court of Justice (ICJ): The principal judicial organ, located in The Hague, Netherlands.

2. World Bank Group:
- Headquarters: Washington, D.C., USA.
- Purpose: A group of five institutions that provides loans and grants to the governments of low- and middle-income countries for capital projects. Its official goal is the reduction of poverty.

3. International Monetary Fund (IMF):
- Headquarters: Washington, D.C., USA.
- Purpose: To ensure the stability of the international monetary system. It helps countries with balance of payments problems and acts as a global financial watchdog.

4. World Trade Organization (WTO):
- Headquarters: Geneva, Switzerland.
- Purpose: The only global international organization dealing with the rules of trade between nations. It aims to ensure that trade flows as smoothly, predictably, and freely as possible.

5. World Health Organization (WHO):
- Headquarters: Geneva, Switzerland.
- Purpose: A specialized agency of the UN responsible for international public health.

### Important Regional Organizations

- SAARC (South Asian Association for Regional Cooperation):
  - An organization of South Asian nations. Headquarters in Kathmandu, Nepal.
- ASEAN (Association of Southeast Asian Nations):
  - A political and economic union of 10 member states in Southeast Asia. Headquarters in Jakarta, Indonesia.
- BRICS:
  - An association of five major emerging economies: Brazil, Russia, India, China, and South Africa. It does not have a formal headquarters.
- G20 (Group of Twenty):
  - An international forum for the governments and central bank governors from 19 countries and the European Union. It focuses on international economic cooperation.

🧠 Quick Recap:
- UN: Headquarters in New York; aims for global peace and security.
- World Bank & IMF: Headquarters in Washington, D.C.; focus on financial assistance and stability.
- WTO & WHO: Headquarters in Geneva; focus on trade rules and public health, respectively.
- ICJ (World Court): Headquarters in The Hague, Netherlands.
- SAARC, ASEAN, BRICS, G20 are key regional and economic groupings.
`,
    links: [],
  },
  {
    topic: 'Reading Comprehension Strategies',
    category: 'English',
    content: `
📘 Summary: Reading Comprehension (RC) tests your ability to read a passage of text and understand its main ideas, details, and implications. Success in RC doesn't just depend on your vocabulary, but on strategic reading and analysis. The key is to be an active reader, not a passive one.

### Before You Read: The First Skim

Don't just dive in. Take 30-60 seconds to skim the passage to get a general feel for it.
- Identify the Subject: What is the passage about? Is it history, science, philosophy?
- Look for the Main Idea: Try to find the central theme or argument. It's often in the first or last paragraph.
- Note the Structure: How is the passage organized? Is it comparing two ideas? Describing a problem and solution? Presenting a chronological history? This mental map will help you locate information later.

### While You Read: Active Reading Techniques

Read the passage carefully, engaging with the text.
- Focus on the "Why": Ask yourself why the author wrote each paragraph. What role does it play in the overall argument?
- Paraphrase: Mentally summarize each paragraph in your own words. This ensures you've understood it.
- Pay Attention to Keywords and Punctuation:
  - Transition Words: Words like "however," "therefore," "in contrast," and "for example" are crucial signposts that tell you the relationship between ideas.
  - Punctuation: Colons, semicolons, and dashes often signal explanations or elaborations.
- Identify the Author's Tone: Is the author's tone objective, critical, supportive, skeptical, or something else? Understanding the tone helps answer questions about the author's purpose or attitude.

### Answering the Questions

- Read the Question Carefully: Understand exactly what is being asked. Are you looking for a specific detail, an inference, or the main idea?
- Refer Back to the Passage: Do not rely on your memory. Always go back to the text to find evidence for your answer. The correct answer is always supported by the passage.
- Process of Elimination: Eliminate the answer choices that are clearly wrong.
  - Too Broad: The choice is too general and goes beyond the scope of the passage.
  - Too Narrow: The choice focuses on a minor detail and misses the main point.
  - Contradictory: The choice states the opposite of what is in the passage.
  - Not Mentioned: The choice introduces information that is not in the passage at all.
- Beware of "Extreme" Words: Be cautious of answer choices that use absolute words like "always," "never," "all," or "only." The correct answer is often more nuanced.

🧠 Quick Recap:
- Skim first: Get the main idea and structure before a detailed read.
- Read actively: Understand the purpose of each paragraph and the author's tone.
- Use keywords as signposts to navigate the passage.
- Refer back to the text for every question; don't rely on memory.
- Use the process of elimination to discard incorrect answer choices.
`,
    links: [],
  },
  {
    topic: 'Idioms and Phrases',
    category: 'English',
    content: `
📘 Summary: Idioms and phrases are expressions where the meaning is not predictable from the usual meanings of its constituent elements. They are a form of figurative language that makes communication more colorful and vivid. Understanding common idioms is essential for reading comprehension and verbal ability sections in exams.

### Why Learn Idioms?

- Enrich Vocabulary: They add a new dimension to your language skills.
- Improve Comprehension: Passages in exams often use idiomatic language. Knowing their meaning is crucial to understanding the context.
- Effective Communication: Using idioms correctly can make your own speaking and writing more fluent and natural.

### Common Idioms and Their Meanings

Here is a list of commonly tested idioms with their meanings and an example sentence.

- A piece of cake: Something that is very easy to do.
  - Example: The entrance exam was a piece of cake for her.
- Bite the bullet: To endure a difficult or unpleasant situation with courage.
  - Example: He had to bite the bullet and accept the pay cut.
- Blessing in disguise: Something that seems bad at first but results in something good.
  - Example: Losing that job was a blessing in disguise; it forced me to start my own successful business.
- Cost an arm and a leg: To be very expensive.
  - Example: The new car cost him an arm and a leg.
- Hit the nail on the head: To describe exactly what is causing a situation or problem.
  - Example: You hit the nail on the head when you said the company's problem is its poor management.
- Once in a blue moon: Something that happens very rarely.
  - Example: I only go to the cinema once in a blue moon.
- Spill the beans: To reveal a secret.
  - Example: We were planning a surprise party, but someone spilled the beans.
- To be on the ball: To be quick to understand and react to things.
  - Example: Our new intern is really on the ball.
- Under the weather: To feel ill or sick.
  - Example: I'm feeling a bit under the weather today, so I'm not going to work.
- The ball is in your court: It is up to you to make the next decision or step.
  - Example: I've done everything I can; now the ball is in your court.
- Jump on the bandwagon: To join a popular activity or trend.
  - Example: After the team won the championship, everyone jumped on the bandwagon.
- Break the ice: To initiate conversation in a social setting.
  - Example: He told a few jokes to break the ice at the party.

### How to Learn Idioms

- Context is Key: Don't just memorize a list. Try to understand how idioms are used in sentences.
- Read Widely: Reading books, newspapers, and articles is the best way to encounter idioms in their natural context.
- Group them Thematically: Try grouping idioms by theme (e.g., idioms about money, idioms about happiness).

🧠 Quick Recap:
- Idioms are expressions with a figurative, not literal, meaning.
- They are important for comprehension and effective communication.
- Common idioms include "a piece of cake" (easy), "bite the bullet" (face a difficulty), and "spill the beans" (reveal a secret).
- The best way to learn them is by reading and understanding their use in context.
`,
    links: [],
  },
  {
    topic: 'Grammar: Tenses',
    category: 'English',
    content: `
📘 Summary: Tenses indicate the time when an action or event occurs. Correct usage of tenses is fundamental to constructing clear and grammatically correct sentences. English has three main tenses: Present, Past, and Future, each with four aspects: Simple, Continuous, Perfect, and Perfect Continuous.

### The Three Main Tenses and Their Aspects

1. Present Tense:
- Simple Present: Used for habits, universal truths, facts, and scheduled future events.
  - Example: The sun rises in the east. The train leaves at 5 PM.
- Present Continuous: Used for actions happening at the moment of speaking or for temporary actions.
  - Example: I am reading a book right now. She is working in London this month.
- Present Perfect: Used for actions that have just been completed or for past actions whose effect is still felt in the present.
  - Example: He has finished his homework. I have seen that movie.
- Present Perfect Continuous: Used for actions that started in the past and are still continuing.
  - Example: They have been playing cricket since morning.

2. Past Tense:
- Simple Past: Used for actions that were completed at a specific time in the past.
  - Example: We went to the park yesterday. She graduated in 2020.
- Past Continuous: Used for an action that was ongoing at a certain point in the past.
  - Example: I was watching TV when you called.
- Past Perfect: Used to describe an action that happened before another action in the past (the "past of the past").
  - Example: The patient had died before the doctor arrived. (The death happened first).
- Past Perfect Continuous: Used for an action that started in the past, continued for some time, and then stopped.
  - Example: He had been working at the company for five years before he resigned.

3. Future Tense:
- Simple Future: Used for actions that will take place in the future. Often uses "will" or "shall."
  - Example: I will call you tomorrow.
- Future Continuous: Used for an action that will be ongoing at a certain time in the future.
  - Example: This time tomorrow, I will be traveling to Mumbai.
- Future Perfect: Used for an action that will be completed by a certain time in the future.
  - Example: By next year, she will have completed her degree.
- Future Perfect Continuous: Used for an action that will be in progress over a period of time that will end in the future.
  - Example: By 2025, we will have been living here for ten years.

🧠 Quick Recap:
- Tenses show the time of an action.
- Present Tense is for habits, ongoing actions, and recently completed actions.
- Past Tense is for completed past actions. Use Past Perfect for an action that happened *before* another past action.
- Future Tense is for actions yet to happen.
- Pay attention to time-related keywords (e.g., 'yesterday', 'since', 'tomorrow') to choose the correct tense.
`,
    links: [],
  },
  {
    topic: 'Grammar: Subject-Verb Agreement',
    category: 'English',
    content: `
📘 Summary: Subject-Verb Agreement is a fundamental rule of English grammar. It simply means that a singular subject must take a singular verb, and a plural subject must take a plural verb. Errors in subject-verb agreement are common but can be avoided by correctly identifying the subject of the sentence.

### The Basic Rule

- Singular Subject → Singular Verb: A singular verb usually ends in '-s' in the present tense.
  - Example: The dog barks loudly. He plays the guitar.
- Plural Subject → Plural Verb: A plural verb does not end in '-s' in the present tense.
  - Example: The dogs bark loudly. They play the guitar.

### Common Rules and Tricky Situations

1. Phrases Between Subject and Verb: Ignore phrases that come between the subject and the verb. The verb must agree with the main subject.
    - Example: One of the boys is missing. (The subject is 'One', which is singular).
    - Example: The box of chocolates sits on the table. (The subject is 'box', not 'chocolates').

2. Subjects Joined by 'and': When two or more subjects are joined by 'and', they usually take a plural verb.
    - Example: Rahul and Priya are siblings.

3. Subjects Joined by 'or'/'nor': When two subjects are joined by 'or', 'nor', 'either...or', or 'neither...nor', the verb agrees with the subject that is closer to it.
    - Example: Neither the students nor the teacher is present.
    - Example: Either the teacher or the students are responsible.

4. Indefinite Pronouns: Pronouns like 'each', 'every', 'either', 'neither', 'everyone', 'everybody', 'anyone', 'anybody', 'someone', 'somebody', 'no one', and 'nobody' are singular and require a singular verb.
    - Example: Each of the candidates was interviewed. Everybody knows the answer.

5. Collective Nouns: Nouns that represent a group (e.g., team, committee, family, jury, government) can be singular or plural.
    - Singular: If the group is acting as a single unit.
      - Example: The team is playing well.
    - Plural: If the members of the group are acting as individuals.
      - Example: The jury are divided in their opinions.

6. Sentences Beginning with 'There' or 'Here': The subject follows the verb. Find the subject and make the verb agree with it.
    - Example: There is a problem. There are many problems.

🧠 Quick Recap:
- Singular subjects take singular verbs (usually ending in '-s'). Plural subjects take plural verbs.
- Ignore phrases between the subject and the verb.
- Subjects joined by 'and' are usually plural.
- For subjects joined by 'or'/'nor', the verb agrees with the nearest subject.
- Indefinite pronouns like 'each' and 'everyone' are singular.
- Collective nouns can be singular or plural depending on the context.
`,
    links: [],
  },
  {
    topic: 'Syllogisms',
    category: 'Logical Reasoning',
    content: `
📘 Summary: A syllogism is a form of deductive reasoning where a conclusion is drawn from two given or assumed propositions (statements or premises). These questions test your ability to derive logical conclusions from given information. The key is to accept the given statements as true, even if they seem illogical in the real world, and to use diagrams to find the valid conclusion.

### Components of a Syllogism

- Premises: These are the given statements. There are usually two premises.
- Conclusion: This is a proposition that logically follows from the premises.

### The Venn Diagram Technique

The most reliable way to solve syllogism questions is by using Venn diagrams. A Venn diagram uses circles to represent the categories mentioned in the premises and shows the relationship between them.

Types of Statements and Their Diagrams:

1. All A are B (Universal Affirmative): Draw a smaller circle 'A' completely inside a larger circle 'B'.
    - Statement: All cars are vehicles.

2. No A are B (Universal Negative): Draw two separate circles, 'A' and 'B', that do not touch or overlap at all.
    - Statement: No pen is a pencil.

3. Some A are B (Particular Affirmative): Draw two overlapping circles, 'A' and 'B'. The overlapping area represents 'Some A that are B'.
    - Statement: Some students are singers.

4. Some A are not B (Particular Negative): Draw two overlapping circles. The conclusion is about the part of circle 'A' that does not overlap with 'B'. This is the trickiest to diagram and is often solved by seeing if the opposite conclusion ('All A are B') can be disproven.

### How to Solve a Syllogism Question

Step 1: Draw the Venn Diagram for the Premises:
- Read the given statements and draw a basic Venn diagram that represents the relationships described.

Step 2: Check for Possibility Diagrams (if needed):
- For "Some" and "Some not" statements, there can be multiple ways to draw the diagram. Try to think of all possible diagrams.

Step 3: Evaluate the Conclusions:
- A conclusion is 100% valid only if it holds true in ALL possible diagrams that can be drawn from the premises.
- If a conclusion is true in one diagram but false in another possible diagram, it is considered a possibility, not a definite conclusion.

Example:
- Statements:
  1. All cats are animals.
  2. Some animals are pets.
- Diagram: Draw a 'Cats' circle inside an 'Animals' circle. Then, draw a 'Pets' circle that overlaps with the 'Animals' circle. The 'Pets' circle *could* overlap with 'Cats', or it could overlap only with the part of 'Animals' that is not 'Cats'.
- Conclusions:
  - I. Some cats are pets. (This is a possibility, but not definite. The 'Pets' circle might not touch the 'Cats' circle).
  - II. Some pets are animals. (This is definite. The overlapping area between 'Pets' and 'Animals' guarantees this).

🧠 Quick Recap:
- A syllogism involves drawing a conclusion from two premises.
- Assume the given statements are 100% true.
- Use Venn diagrams to represent the statements.
- A conclusion is only valid if it is true in all possible diagrams.
- Be careful with "Some" statements, as they can lead to multiple possible diagrams.
`,
    links: [],
  },
  {
    topic: 'Blood Relations',
    category: 'Logical Reasoning',
    content: `
📘 Summary: Blood Relations questions test your ability to understand and work out complex family relationships. These questions describe a relationship between two people in a roundabout way, and you need to decipher the correct connection. The key to solving these questions quickly and accurately is to use a family tree diagram.

### Standard Symbols for Family Tree Diagrams

Using a consistent set of symbols is crucial. Here's a widely used system:
- Male: Use a plus sign (+) or a square (□).
- Female: Use a minus sign (-) or a circle (○).
- Married Couple: Use a double horizontal line (↔) or (=) to connect the two.
- Siblings (Brother/Sister): Use a single horizontal line (─) to connect them.
- Generation Gap: Use a vertical line (|) to connect parents to their children.

### Types of Blood Relation Questions

1. Jumbled Descriptions: These are paragraph-based questions describing the relationships between multiple people in a family. You need to draw a complete family tree to answer questions about specific relationships.
    - Example: "In a family of six, P is the brother of Q. R is the father of P. S is the sister of T, who is the daughter of Q. U is the husband of Q. How is S related to R?"
    - Solution: By drawing the tree, you would find that Q is R's daughter-in-law, and T and S are R's granddaughters. So, S is the granddaughter of R.

2. Pointing or Introducing (Direct Speech): In these questions, one person describes another person's relationship to them or someone else.
    - Example: Pointing to a photograph, a man said, "I have no brother or sister, but that man's father is my father's son." Whose photograph was it?
    - Solution:
      - "My father's son" when the speaker has no brother is the speaker himself.
      - So, "that man's father is [the speaker]."
      - Therefore, the photograph is of his son.

3. Coded Relations: These questions use symbols to represent relationships (e.g., 'A + B' means 'A is the father of B'). You need to decode the expression to find the final relationship.
    - Example: If 'P x Q' means 'P is the sister of Q', and 'Q + R' means 'Q is the father of R', what does 'P x Q + R' mean?
    - Solution: P is the sister of Q, and Q is the father of R. This means P is the sister of R's father. Therefore, P is the paternal aunt of R.

### Tips for Solving

- Break down the sentence: Analyze the information piece by piece, starting from the end of the sentence and working backward, especially for the "pointing" type questions.
- Never assume the gender of a person from their name unless it is explicitly stated.
- Draw a neat diagram for every question. It prevents confusion and errors.

🧠 Quick Recap:
- Use a family tree diagram with standard symbols (+ for male, - for female, etc.).
- There are three main types: Jumbled Descriptions, Pointing/Introducing, and Coded Relations.
- For "pointing" questions, start from the end of the statement and work backward.
- Always draw a diagram; don't try to solve it mentally.
`,
    links: [],
  },
  {
    topic: 'Coding-Decoding',
    category: 'Logical Reasoning',
    content: `
📘 Summary: Coding-Decoding is a type of logical reasoning question where a word, letter, or number is represented by a specific code or pattern. Your task is to identify this pattern and use it to decode a given message or code a new one. These questions test your pattern recognition and analytical skills.

### Common Types of Coding-Decoding

1. Letter Coding:
A particular word is coded by arranging its letters in a specific pattern.
- Shifting Letters: Letters are shifted a fixed number of positions forward or backward.
  - Example: If 'TEACHER' is coded as 'VGCEJGT' (each letter is shifted +2), then 'STUDENT' would be coded as 'UVWFGPV'.
- Reversing Letters: The letters of the word are written in reverse order.
  - Example: If 'TEACHER' is coded as 'REHCAET', then 'STUDENT' would be 'TNEDUTS'.
- Opposite Letters: Each letter is replaced by its opposite letter in the alphabet (A↔Z, B↔Y, C↔X, etc.). A simple way to remember opposites is that their position numbers add up to 27 (A=1, Z=26; B=2, Y=25).
  - Example: If 'KING' is coded as 'RMTM', then 'RAIL' would be 'IZRO'.

2. Number/Symbol Coding:
Letters are assigned numerical codes or symbols.
- Fixed Value: Each letter is assigned a specific number or symbol.
  - Example: If in a code, 'MIND' is '*#%?' and 'DARK' is '!@$&', then 'KARIM' would be '&@#*?'.
- Positional Value: The code is based on the letter's position in the alphabet (A=1, B=2, ... Z=26).
  - Example: If 'CAT' is coded as '3120' (C=3, A=1, T=20), then 'DOG' would be '4157'.

3. Substitution Coding (Word Coding):
A word is substituted with another word. These are often called "Chinese coding" questions.
- Example: If 'sky is blue' is '816', 'sea is deep' is '215', and 'sea looks blue' is '824', what is the code for 'blue'?
- Solution:
  - 'is' is common to the first two sentences, and '1' is the common code. So, 'is' = '1'.
  - 'blue' is common to the first and third sentences, and '8' is the common code. So, 'blue' = '8'.
  - 'sea' is common to the second and third sentences, and '2' is the common code. So, 'sea' = '2'.

### Tips for Solving

- Quickly check the pattern: First, check for simple patterns like letter shifting, reversing, or positional values.
- Write down the alphabet: For letter and number coding, it's helpful to write down A-Z and their corresponding numbers (1-26) on your rough sheet.
- Look for repeated letters: In number/symbol coding, if a letter is repeated in the word, its code should also be repeated. This helps confirm the pattern.
- Use elimination: In substitution coding, eliminate the codes for known words to find the code for the unknown word.

🧠 Quick Recap:
- Identify the type of coding: Letter, Number/Symbol, or Substitution.
- Letter Coding: Check for shifting, reversing, or opposite letters.
- Number Coding: Check if the code is based on the letter's position in the alphabet (A=1, B=2...).
- Substitution Coding: Find common words and common codes between sentences to decipher the meaning.
- Writing down the alphabet and their position numbers can save a lot of time.
`,
    links: [],
  },
  {
    topic: 'Critical Reasoning',
    category: 'Logical Reasoning',
    content: `
📘 Summary: Critical Reasoning questions present you with a short argument (a passage) and ask you to analyze it. Unlike reading comprehension, which focuses on what the text says, critical reasoning focuses on the logical structure of the argument itself. You will be asked to identify assumptions, conclusions, inferences, and to find statements that strengthen or weaken the argument.

### Key Components of an Argument

1. Premise(s): These are the pieces of evidence or facts that the author provides as support. They are the "why" of the argument.
2. Conclusion: This is the main point of the argument, which the author is trying to convince you of. The premises are supposed to support the conclusion.
3. Assumption: This is an unstated premise. It's a piece of information that the author takes for granted and does not explicitly state, but which is necessary for the conclusion to follow logically from the premises.

### Common Question Types

1. Identify the Assumption:
- Question: "The argument depends on which of the following assumptions?"
- How to solve: An assumption is a necessary, unstated link between the premise and the conclusion. A good technique is the Negation Test: negate (reverse the meaning of) an answer choice. If the negated statement destroys the argument's logic, then it is the correct assumption.

2. Identify the Conclusion:
- Question: "Which of the following best states the main conclusion of the argument?"
- How to solve: The conclusion is the author's main claim. Look for indicator words like "therefore," "thus," "consequently," or "so." Ask yourself, "What is the author trying to prove?"

3. Strengthen the Argument:
- Question: "Which of the following, if true, would most strengthen the argument?"
- How to solve: Find an answer choice that provides new information that makes the conclusion more likely to be true. It often does this by supporting a key premise or confirming a necessary assumption.

4. Weaken the Argument:
- Question: "Which of the following, if true, would most weaken the argument?"
- How to solve: Find an answer choice that provides new information that makes the conclusion less likely to be true. It often works by attacking the link between the premise and conclusion, or by showing that the assumption is false.

5. Inference:
- Question: "If the statements above are true, which of the following must also be true?"
- How to solve: An inference is something that must be true based *only* on the information given in the passage. It is not a possibility. Do not use any outside knowledge. The correct answer is a logical consequence of the premises.

### Example

- Argument: "The city's traffic has gotten much worse. Therefore, the city should build more roads."
- Assumption: Building more roads will solve the traffic problem.
- Weaken: A study shows that building more roads often leads to "induced demand," attracting more cars and making traffic even worse in the long run.

🧠 Quick Recap:
- An argument consists of a Conclusion supported by Premises.
- An Assumption is an unstated, necessary premise. Use the Negation Test to find it.
- To strengthen an argument, add new supporting evidence.
- To weaken an argument, attack the link between premise and conclusion.
- An Inference must be 100% true based only on the given text.
`,
    links: [],
  },
  {
    topic: 'Major National Events',
    category: 'Current Affairs',
    content: `
📘 Summary: Staying updated with major national events is crucial for any competitive exam. This involves being aware of significant developments in politics, economics, social issues, and governance within India. The focus should be on events that have a wide-ranging impact on the country.

### How to Track National Events

- Read Newspapers: Make it a daily habit to read at least one national newspaper (e.g., The Hindu, The Indian Express). Pay special attention to the front page and the editorial section.
- Follow News Websites/Apps: Use reliable news sources for daily updates.
- Watch News Analysis Programs: Programs that analyze the news of the day can provide deeper insights.
- Monthly Current Affairs Magazines: These are excellent for revision as they consolidate the important news of the month.

### Key Areas to Focus On

1. Political Developments:
- Elections: Keep track of Assembly elections in states and the General Election. Know the winning parties and chief ministers/prime minister.
- Major Appointments: New appointments to key constitutional posts like the President, Vice-President, Chief Justice of India, Attorney General, and heads of important bodies like the Election Commission.
- New Bills and Acts: Be aware of significant legislation passed by the Parliament (e.g., Women's Reservation Bill, changes in criminal laws).

2. Economic News:
- Union Budget and Economic Survey: Understand the major announcements, new schemes, and the government's economic outlook.
- RBI Monetary Policy: Changes in key rates like the repo rate and their impact on the economy.
- Major Economic Indicators: A general idea of India's GDP growth rate, inflation trends, and foreign exchange reserves.

3. Government Schemes and Initiatives:
- Know the purpose and target audience of major government schemes.
- Examples: Pradhan Mantri Jan Dhan Yojana (financial inclusion), Swachh Bharat Abhiyan (cleanliness), Ayushman Bharat (health insurance), Make in India (manufacturing).

4. Judiciary and Landmark Judgments:
- Significant decisions made by the Supreme Court and High Courts that have a national impact (e.g., judgments on fundamental rights, federalism, or major social issues).

5. Social and Environmental Issues:
- Major social movements or protests.
- Government reports on social indicators like health, education, and poverty.
- Significant environmental events, policies, and international commitments (e.g., India's climate change targets).

6. Awards and Honors:
- National awards such as the Bharat Ratna, Padma Vibhushan, Padma Bhushan, and Padma Shri.

🧠 Quick Recap:
- Follow political news, especially elections, key appointments, and new laws.
- Keep track of economic developments like the Union Budget and RBI policies.
- Know the purpose of major government schemes.
- Be aware of landmark Supreme Court judgments.
- Stay informed about significant social and environmental issues.
- A good daily newspaper is your best source.
`,
    links: [],
  },
  {
    topic: 'Key International Summits',
    category: 'Current Affairs',
    content: `
📘 Summary: In an interconnected world, international summits are crucial events where world leaders gather to discuss and coordinate on global issues like economic stability, security, climate change, and trade. For exam purposes, you should know the name of the summit, its member countries, where it was recently held, and its main agenda or outcome.

### Major International Groupings and Summits

1. G20 (Group of Twenty):
- What it is: The premier international forum for economic cooperation among the world's largest economies. Its members represent around 85% of the global GDP.
- Members: 19 countries (including India, USA, China, Russia, UK) and the European Union. The African Union was recently added as a permanent member.
- Recent Summit: The 2023 G20 summit was hosted by India in New Delhi. This is a very important event to study. The theme was 'Vasudhaiva Kutumbakam' or 'One Earth, One Family, One Future'.

2. G7 (Group of Seven):
- What it is: A group of the world's most advanced economies.
- Members: Canada, France, Germany, Italy, Japan, the United Kingdom, and the United States.
- Note: India is not a member but is often invited to G7 summits as an outreach partner.

3. BRICS:
- What it is: An association of five major emerging national economies.
- Members: Brazil, Russia, India, China, and South Africa.
- Recent Development: In 2023, BRICS invited six new countries (Argentina, Egypt, Ethiopia, Iran, Saudi Arabia, and the UAE) to join, significantly expanding the group.

4. SCO (Shanghai Cooperation Organisation):
- What it is: A Eurasian political, economic, and security alliance. It is often seen as a counterweight to Western alliances.
- Members: Includes China, Russia, India, and Pakistan, among others.
- Focus: Combating terrorism, separatism, and extremism, and promoting economic and cultural cooperation.

5. QUAD (Quadrilateral Security Dialogue):
- What it is: A strategic security dialogue.
- Members: United States, Japan, Australia, and India.
- Focus: A key objective is to work for a free, open, and inclusive Indo-Pacific region.

6. COP (Conference of the Parties) to the UNFCCC:
- What it is: The annual United Nations climate change conference.
- Purpose: Countries gather to assess progress in dealing with climate change and to negotiate agreements.
- Example: COP26 in Glasgow and COP27 in Sharm el-Sheikh were recent important conferences.

### What to Look For

When studying a summit, focus on:
- Host Country and City: Where did the summit take place?
- Theme/Slogan: What was the official theme of the summit?
- Major Declarations: What were the key agreements or joint statements released at the end?
- India's Role: What were India's key talking points or contributions?

🧠 Quick Recap:
- G20: Forum for economic cooperation; 2023 summit was held in India.
- G7: Group of advanced economies; India is an invitee, not a member.
- BRICS: Group of emerging economies; expanding with new members.
- SCO: Eurasian security alliance including China, Russia, and India.
- QUAD: Strategic dialogue between US, Japan, Australia, and India for the Indo-Pacific.
- COP: Annual UN conference on climate change.
`,
    links: [],
  },
  {
    topic: 'Recent Landmark Judgments',
    category: 'Current Affairs',
    content: `
📘 Summary: Landmark judgments are decisions by the Supreme Court (and sometimes High Courts) that significantly change the interpretation of the law or establish a new legal principle. These judgments have a far-reaching impact on society and governance. For law entrance exams, it's important to know the name of the case, the core legal issue, and the final ruling of the court.

### How to Approach Landmark Judgments

- Focus on the Principle: Don't get lost in the minor facts. Understand the main legal question the court was answering.
- Know the Case Name: The name of the case (e.g., *Kesavananda Bharati v. State of Kerala*) is important.
- Constitutional Bench: Pay attention to judgments delivered by a larger "Constitutional Bench" (5 or more judges), as they hold greater authority.

### Recent and All-Time Important Landmark Judgments

1. Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) - The Right to Privacy Case:
- Ruling: The Supreme Court unanimously declared that the Right to Privacy is a Fundamental Right, protected as an intrinsic part of the Right to Life and Personal Liberty under Article 21 of the Constitution. This is one of the most important judgments of the last decade.

2. Navtej Singh Johar v. Union of India (2018) - Decriminalization of Homosexuality:
- Ruling: The Supreme Court struck down parts of Section 377 of the Indian Penal Code, thereby decriminalizing consensual homosexual acts between adults. The court held that Section 377 was unconstitutional as it violated the rights to privacy, dignity, and equality.

3. Joseph Shine v. Union of India (2018) - Decriminalization of Adultery:
- Ruling: The Supreme Court struck down Section 497 of the IPC, which criminalized adultery. The court found the law to be archaic and discriminatory against women, as it treated women as the property of their husbands. Adultery, however, can still be a ground for divorce.

4. Indian Young Lawyers Association v. State of Kerala (2018) - The Sabarimala Case:
- Ruling: The Court held that the practice of prohibiting women of menstruating age (10-50 years) from entering the Sabarimala temple was unconstitutional. It violated the principles of equality and non-discrimination.

5. Shayara Bano v. Union of India (2017) - The Triple Talaq Case:
- Ruling: The Supreme Court declared the practice of instant triple talaq (talaq-e-biddat) to be unconstitutional and arbitrary. This later led to Parliament passing a law to criminalize the practice.

### All-Time Classics to Remember

- Kesavananda Bharati v. State of Kerala (1973): Established the "Basic Structure Doctrine," stating that Parliament can amend the Constitution but cannot alter its fundamental framework.
- Maneka Gandhi v. Union of India (1978): Greatly expanded the scope of Article 21 (Right to Life), ruling that "procedure established by law" must be fair, just, and reasonable.

🧠 Quick Recap:
- Puttaswamy Case: Right to Privacy is a Fundamental Right under Article 21.
- Navtej Singh Johar Case: Decriminalized consensual homosexuality (struck down Sec. 377).
- Joseph Shine Case: Decriminalized adultery (struck down Sec. 497).
- Sabarimala Case: Allowed women of all ages to enter the temple.
- Kesavananda Bharati Case: Established the "Basic Structure Doctrine."
- Focus on the case name and the core principle established by the court.
`,
    links: [],
  },
  {
    topic: 'Science, Tech & Space',
    category: 'Current Affairs',
    content: `
📘 Summary: Current affairs in science, technology, and space are a key area for competitive exams. This section covers major achievements by organizations like ISRO, significant developments in fields like defense and artificial intelligence, and important news related to public health. The focus is usually on India's achievements and major global breakthroughs.

### Key Areas in Science and Technology

1. Indian Space Research Organisation (ISRO) Missions:
ISRO's recent successes have been a source of national pride and are very important for exams.
- Chandrayaan-3 (2023): India's third lunar mission. It was a historic success, as India became the fourth country to achieve a soft landing on the Moon and the first country to land near the lunar south pole.
- Aditya-L1: India's first dedicated solar mission to study the Sun. It is placed at a special point in space called Lagrange Point 1 (L1).
- Gaganyaan: India's upcoming human spaceflight mission, which aims to send Indian astronauts into space.
- SSLV (Small Satellite Launch Vehicle): A new rocket developed by ISRO to launch small satellites into Low Earth Orbit.

2. Defense Technology:
Stay updated on the induction of new weapons, ships, and aircraft into the Indian armed forces.
- Fighter Jets: Like the Rafale and the indigenous Tejas.
- Missiles: Different types of missiles like Agni (ballistic), BrahMos (supersonic cruise), and Astra (air-to-air).
- Aircraft Carriers and Submarines: Names of new ships like INS Vikrant (India's first indigenous aircraft carrier) and new submarines.

3. Artificial Intelligence (AI) and Digital Technology:
- Generative AI: The rise of powerful AI models like ChatGPT (from OpenAI) and Bard/Gemini (from Google) is a major global development. Understand what they are and their potential impact.
- 5G Technology: The rollout of 5G services in India and its benefits.
- Supercomputers: India's National Supercomputing Mission and the names of its fastest supercomputers.

4. Health and Biotechnology:
- Vaccines: Development of new vaccines, especially those made in India (e.g., Covaxin).
- Biotechnology: Breakthroughs in areas like gene editing (CRISPR technology).
- Public Health: News related to major diseases, health missions, and new medical technologies.

5. Nobel Prizes in Science:
- Be aware of the winners of the Nobel Prize in Physics, Chemistry, and Medicine each year and the discovery for which they were awarded.

🧠 Quick Recap:
- ISRO: Know about Chandrayaan-3 (lunar south pole landing), Aditya-L1 (solar mission), and Gaganyaan (human spaceflight).
- Defense: Be aware of new jets (Rafale, Tejas), missiles (BrahMos), and ships (INS Vikrant).
- AI: Understand the significance of Generative AI tools like ChatGPT.
- Health: Follow news on vaccines and major medical breakthroughs.
- Keep an eye on the Nobel Prize winners in the science categories.
`,
    links: [],
  },
  {
    topic: 'Citizenship (Art 5-11)',
    category: 'Constitution',
    content: `
📘 Summary: Part II of the Indian Constitution, from Article 5 to Article 11, deals with the subject of citizenship. The Constitution itself only identifies the persons who became citizens of India at its commencement (on January 26, 1950). It gives the power to the Parliament to make further laws on this matter. Based on this power, Parliament enacted the Citizenship Act, 1955.

### Constitutional Provisions (Articles 5-11)

These articles mainly describe who was considered a citizen at the time the Constitution was adopted.
- Article 5: Citizenship by Domicile: A person who had their domicile (permanent home) in India and was born in India, or either of whose parents was born in India, or who had been ordinarily resident in India for not less than five years immediately before the commencement of the Constitution, became a citizen.
- Article 6: Deals with the citizenship of persons who have migrated to India from Pakistan.
- Article 7: Deals with the citizenship of persons who migrated to Pakistan from India but later returned.
- Article 8: Deals with the citizenship of persons of Indian origin residing outside India.
- Article 9: States that no person shall be a citizen of India if they have voluntarily acquired the citizenship of any foreign state. This enforces the principle of single citizenship.
- Article 10: Provides that every person who is a citizen of India shall continue to be such citizen, subject to the provisions of any law made by Parliament.
- Article 11: Empowers the Parliament to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to citizenship.

### The Citizenship Act, 1955

Using its power under Article 11, Parliament passed the Citizenship Act, 1955. This Act has been amended several times and provides for how Indian citizenship can be acquired and lost after the commencement of the Constitution.

Acquisition of Citizenship: The Act prescribes five ways of acquiring citizenship:
1. By Birth: Persons born in India on or after January 26, 1950. (This has been made more restrictive by amendments).
2. By Descent: A person born outside India can become a citizen if, at the time of their birth, either of their parents was a citizen of India.
3. By Registration: Certain categories of people (like persons of Indian origin) can apply to be registered as citizens.
4. By Naturalization: A foreigner can acquire citizenship by naturalization if they meet certain qualifications, such as residing in India for a specified period and having good character.
5. By Incorporation of Territory: If any foreign territory becomes a part of India, the Government of India specifies the persons who shall be the citizens of India.

Loss of Citizenship: The Act provides for three ways of losing citizenship:
1. Renunciation: Any adult citizen can voluntarily give up their citizenship.
2. Termination: When an Indian citizen voluntarily acquires the citizenship of another country, their Indian citizenship automatically terminates.
3. Deprivation: The government can deprive a citizen of their citizenship in certain cases, such as obtaining citizenship by fraud, showing disloyalty to the Constitution, or being imprisoned in any country for two years.

🧠 Quick Recap:
- Part II (Articles 5-11) of the Constitution deals with citizenship.
- India follows the principle of single citizenship.
- The Citizenship Act, 1955 governs the acquisition and loss of citizenship.
- Acquisition is by Birth, Descent, Registration, Naturalization, and Incorporation of Territory.
- Loss is by Renunciation, Termination, and Deprivation.
`,
    links: []
  },
  {
    topic: 'Writs in Indian Constitution',
    category: 'Constitution',
    content: `
📘 Summary: Writs are written orders from a higher court (the Supreme Court or a High Court) to a lower court or a government authority to do something or to stop doing something. They are a powerful tool for judicial review and are essential for the enforcement of Fundamental Rights. Article 32 of the Constitution, which gives the right to move the Supreme Court to issue these writs, was called the "very heart and soul" of the Constitution by Dr. B.R. Ambedkar.

### The Power to Issue Writs

- Supreme Court (Article 32): The Supreme Court can issue writs for the enforcement of Fundamental Rights only.
- High Courts (Article 226): High Courts can issue writs not only for the enforcement of Fundamental Rights but also for "any other purpose," which means for the enforcement of any other legal right. Therefore, the writ jurisdiction of the High Courts is wider than that of the Supreme Court.

### The Five Types of Writs

There are five types of writs that the courts can issue:

1. Habeas Corpus:
- Literal Meaning: "To have the body of."
- Purpose: This is a writ used to protect personal liberty. It is an order issued by the court to a person who has detained another person, to produce the body of the latter before it. The court then examines the cause and legality of the detention. If the detention is found to be illegal, the court sets the detained person free. It is a powerful check against unlawful and arbitrary detention.

2. Mandamus:
- Literal Meaning: "We command."
- Purpose: This writ is issued by a court to a lower court, tribunal, or a public authority, ordering it to perform a public or statutory duty that it has failed or refused to perform. It cannot be issued against a private individual or body.

3. Prohibition:
- Literal Meaning: "To forbid."
- Purpose: This writ is issued by a higher court to a lower court or tribunal to prevent the latter from exceeding its jurisdiction or usurping a jurisdiction that it does not possess. It is issued while the proceedings are still pending in the lower court. It is a preventive writ.

4. Certiorari:
- Literal Meaning: "To be certified" or "to be informed."
- Purpose: This writ is issued by a higher court to a lower court or tribunal to transfer a case pending with the latter to itself or to quash the order of the latter in a case. It is issued on grounds of excess of jurisdiction, lack of jurisdiction, or error of law. Unlike Prohibition, which is preventive, Certiorari is both preventive and curative.

5. Quo Warranto:
- Literal Meaning: "By what authority or warrant?"
- Purpose: This writ is issued by the court to inquire into the legality of a person's claim to a public office. It prevents the illegal usurpation of a public office by a person. If the claim is found to be invalid, the court can order the person to be removed from the office.

🧠 Quick Recap:
- Writs are court orders for the enforcement of rights.
- Supreme Court (Art. 32) issues writs for Fundamental Rights.
- High Courts (Art. 226) have a wider writ jurisdiction.
- Habeas Corpus: Protects against illegal detention.
- Mandamus: Commands a public authority to do its duty.
- Prohibition: Forbids a lower court from exceeding jurisdiction (preventive).
- Certiorari: Quashes an order of a lower court (curative).
- Quo Warranto: Questions the authority of a person holding a public office.
`,
    links: []
  },
  {
    topic: 'Nuisance in Tort Law',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Nuisance is a tort that deals with the unlawful interference with a person's use or enjoyment of their land, or with a right over, or in connection with it. It is an injury to a person's right to the comfortable and convenient use of their property. The interference must be unreasonable.

### Types of Nuisance

There are two main types of nuisance:

1. Public Nuisance:
- Definition: A public nuisance is an act or omission that materially affects the reasonable comfort and convenience of the life of a class of people or the public at large. It is a crime under Section 268 of the Indian Penal Code.
- Examples: Obstructing a public highway, storing explosives in a residential area, or creating loud noises or foul smells that affect an entire neighborhood.
- Who can sue? Since it's a crime against the public, a lawsuit is usually brought by the Advocate General or by two or more persons with the permission of the court. A private individual can only sue for public nuisance if they can prove that they have suffered special damage over and above what was suffered by the general public.

2. Private Nuisance:
- Definition: A private nuisance is an unreasonable and unlawful interference with a person's use or enjoyment of their own land. The interference is with the rights of a specific individual, not the public.
- Examples:
  - Encroachment on the neighbor's land.
  - Causing vibrations that damage a neighbor's house.
  - Allowing smoke, fumes, or loud noise to escape from your property onto your neighbor's property.
  - Overhanging tree branches.

### Essentials of Private Nuisance

To succeed in a case of private nuisance, the plaintiff must prove three things:

1. Unreasonable Interference: The interference must be unreasonable from the perspective of a reasonable person. The law does not protect people who are overly sensitive. The court will balance the rights of the defendant to use their property as they wish against the rights of the plaintiff to enjoy their property without interference. Factors like the locality, the duration of the interference, and the defendant's motive are considered.
    - Example: Running a loud factory in an industrial area might be reasonable, but running the same factory in a quiet residential area would be unreasonable.

2. Interference with the Use or Enjoyment of Land: The interference must be related to the plaintiff's use of their land. This can be either:
    - Injury to property itself (e.g., vibrations causing cracks in walls).
    - Injury to comfort or health (e.g., noise, smells, smoke).

3. Damage: The plaintiff must show that they have suffered some damage or harm as a result of the interference.

### Defenses to Nuisance

- Prescription: If a private nuisance has been peacefully carried on for 20 years without interruption, the defendant acquires a legal right (an easement) to continue it. This defense is not available for public nuisance.
- Statutory Authority: If the act causing the nuisance is authorized by a statute (a law passed by Parliament), it is a valid defense.

🧠 Quick Recap:
- Nuisance is an unreasonable interference with the use or enjoyment of land.
- Public Nuisance affects the public at large and is a crime. A private person can only sue if they suffer special damage.
- Private Nuisance affects an individual's land.
- To prove private nuisance, you need to show unreasonable interference.
- Key defenses are Prescription and Statutory Authority.
`,
    links: []
  },
  {
    topic: 'Strict and Absolute Liability',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Strict Liability and Absolute Liability are principles in tort law that impose liability on a person even if they were not negligent or at fault. These are exceptions to the general rule that a person is only liable for the harm they cause intentionally or negligently. They are applied in situations involving unusually dangerous activities or substances.

### Strict Liability

This principle was established in the famous English case of Rylands v. Fletcher (1868).

- The Rule: "The person who, for his own purposes, brings on his land and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril, and if he does not do so, is prima facie answerable for all the damage which is the natural consequence of its escape."
- In simpler terms: If you keep a dangerous thing on your land and it escapes and causes harm, you are liable, even if you were not careless.

Essentials for Strict Liability:
1. Dangerous Thing: The defendant must have brought a dangerous thing onto their land. A "dangerous" thing is something that is likely to cause harm if it escapes (e.g., large quantities of water, gas, electricity, explosives).
2. Escape: The thing must escape from the defendant's property to an area outside their control.
3. Non-natural Use of Land: The defendant must have used the land in a way that is not ordinary or natural. Storing water in a reservoir for a mill was considered a non-natural use in *Rylands v. Fletcher*.

Exceptions (Defenses) to Strict Liability:
The defendant can avoid liability if they can prove one of these exceptions:
- Plaintiff's own fault.
- Act of God: An extraordinary natural event that could not have been predicted or prevented (e.g., an unprecedented earthquake).
- Consent of the Plaintiff.
- Act of a Third Party: If the escape was caused by the unforeseeable act of a stranger.
- Statutory Authority.

### Absolute Liability

This is a more stringent version of the strict liability rule, developed by the Supreme Court of India in the case of M.C. Mehta v. Union of India (1987), also known as the Oleum Gas Leak case.

- The Rule: If an enterprise is engaged in a hazardous or inherently dangerous activity and harm results to anyone on account of an accident in the operation of such activity, the enterprise is absolutely and strictly liable to compensate all those who are affected by the accident.
- No Exceptions: The Supreme Court deliberately removed the exceptions that were available under the strict liability rule. The court argued that an enterprise engaged in such dangerous activities has a duty to ensure that no harm befalls anyone, and it cannot escape liability by pleading any of the exceptions from *Rylands v. Fletcher*.
- Deep Pockets Principle: The Court also stated that the amount of compensation should be based on the size and capacity of the enterprise, so it has a deterrent effect.

🧠 Quick Recap:
- Strict Liability (*Rylands v. Fletcher*): If you keep a dangerous thing that escapes and causes harm, you are liable even without fault.
- Essentials for Strict Liability: Dangerous thing, Escape, Non-natural use of land.
- Strict Liability has several exceptions, like Act of God.
- Absolute Liability (*M.C. Mehta* case): A stricter rule developed in India for enterprises in hazardous activities.
- Under Absolute Liability, there are no exceptions. The enterprise is fully liable to compensate for any harm caused.
`,
    links: []
  },
  {
    topic: 'Void vs. Illegal Agreements',
    category: 'Legal Aptitude',
    content: `
📘 Summary: In contract law, both void and illegal agreements are unenforceable in court. However, there is a crucial distinction between them. While all illegal agreements are void, the reverse is not true: not all void agreements are illegal. The key difference lies in their nature and their effect on related (collateral) transactions.

### Void Agreements

- Definition: A void agreement is defined in Section 2(g) of the Indian Contract Act as "an agreement not enforceable by law."
- Nature: A void agreement has no legal effect from the very beginning (*void ab initio*). It is a nullity and does not create any legal rights or obligations between the parties.
- Why are they void? An agreement can be void because it lacks one of the essential elements of a valid contract.
  - Examples:
    - An agreement with a minor (*Mohori Bibee* case).
    - An agreement made under a bilateral mistake of a material fact.
    - An agreement without consideration (with some exceptions).
    - An agreement with an unlawful object or consideration.
    - An agreement in restraint of marriage, trade, or legal proceedings.
- Is it a Crime? A void agreement is not necessarily forbidden by law or punishable. It's just that the law will not help the parties enforce it. For example, an agreement with a minor is void, but it's not a criminal act.

### Illegal Agreements

- Definition: An illegal agreement is one whose object or consideration is forbidden by law, or is of such a nature that, if permitted, it would defeat the provisions of any law, or is fraudulent, or involves injury to the person or property of another, or the court regards it as immoral or opposed to public policy (Section 23).
- Nature: An illegal agreement is not only void but is also unlawful and forbidden. These agreements are against the fundamental principles of law and public policy.
- Examples:
  - An agreement to commit a crime, like murder or theft.
  - An agreement to bribe a public servant.
  - An agreement that involves trading with an enemy country.

### The Key Distinction: Effect on Collateral Agreements

This is the most important difference between the two. A collateral agreement is a secondary or related agreement that depends on the main agreement.

- Effect of Void Agreements: If the main agreement is void (but not illegal), any collateral agreements related to it are still valid and enforceable.
  - Example: A borrows money from B to pay a wagering debt (a wager is a void agreement). The agreement between A and B to repay the loan is a collateral transaction, and it is perfectly valid. B can sue A to recover the money.

- Effect of Illegal Agreements: If the main agreement is illegal, any collateral agreements related to it are also tainted with illegality and are therefore void.
  - Example: A borrows money from B to purchase illegal drugs. The main agreement (purchasing drugs) is illegal. The collateral agreement (the loan from B to A) is also void. B cannot sue A to recover the money if B knew about the illegal purpose of the loan.

🧠 Quick Recap:
- Void Agreement: Not enforceable by law, but not necessarily forbidden.
- Illegal Agreement: Forbidden by law and against public policy.
- The Golden Rule: All illegal agreements are void, but not all void agreements are illegal.
- Collateral Agreements: Collateral agreements to a VOID agreement are VALID.
- Collateral Agreements: Collateral agreements to an ILLEGAL agreement are also VOID.
`,
    links: []
  },
  {
    topic: 'Bailment and Pledge',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Bailment and Pledge are two special types of contracts governed by the Indian Contract Act, 1872. Both involve the transfer of possession of goods from one person to another, but for different purposes. A pledge is a specific kind of bailment where goods are delivered as security for a loan or the performance of a promise.

### Bailment (Sections 148-171)

- Definition (Sec. 148): "A bailment is the delivery of goods by one person to another for some purpose, upon a contract that they shall, when the purpose is accomplished, be returned or otherwise disposed of according to the directions of the person delivering them."
- Parties:
  - Bailor: The person who delivers the goods.
  - Bailee: The person to whom the goods are delivered.
- Key Features:
  1. Delivery of Possession: There must be a transfer of possession of goods (not ownership).
  2. For a Specific Purpose: The delivery must be for a particular reason (e.g., for repair, for safekeeping, for use).
  3. Return of Goods: There is an agreement that the goods will be returned after the purpose is achieved.
- Examples:
  - Giving your car to a mechanic for repair.
  - Lending a book to a friend.
  - Leaving your luggage in a cloakroom.

Duties of a Bailee:
- To take reasonable care of the goods bailed.
- Not to make any unauthorized use of the goods.
- To return the goods after the purpose is fulfilled.

### Pledge (or Pawn) (Sections 172-181)

- Definition (Sec. 172): "The bailment of goods as security for payment of a debt or performance of a promise is called 'pledge'."
- Parties:
  - Pawnor (or Pledger): The person who delivers the goods as security (the borrower).
  - Pawnee (or Pledgee): The person to whom the goods are delivered as security (the lender).
- Key Features:
  - It is a special kind of bailment.
  - The purpose of the delivery is always to act as security for a debt or a promise.
- Example: Taking a loan from a bank by giving your gold jewelry as security. This is a pledge. You are the pawnor, and the bank is the pawnee.

### Key Differences: Bailment vs. Pledge

| Basis | Bailment | Pledge |
| :--- | :--- | :--- |
| Purpose | Can be for any purpose (e.g., repair, use, safekeeping). | Is always for securing a debt or performance of a promise. |
| Right to Sell | The bailee has no right to sell the goods. They can only retain them (exercise a lien). | If the pawnor fails to repay the debt, the pawnee has a right to sell the goods after giving reasonable notice. |
| Right to Use | The bailee may use the goods, depending on the terms of the bailment. | The pawnee has no right to use the goods pledged. |
| Relationship| All pledges are bailments. | Not all bailments are pledges. |

🧠 Quick Recap:
- Bailment is the delivery of goods for a specific purpose, with the condition that they will be returned. (e.g., giving a shirt for dry cleaning).
- Pledge is a special type of bailment where goods are delivered as security for a loan. (e.g., giving gold for a loan).
- The main difference is the purpose of the delivery.
- In a pledge, the pawnee (lender) has the right to sell the goods if the pawnor (borrower) defaults on the payment. A bailee does not have this right.
`,
    links: []
  },
  {
    topic: 'Right of Private Defence',
    category: 'Legal Aptitude',
    content: `
📘 Summary: The Right of Private Defence, covered in Sections 96 to 106 of the Indian Penal Code (IPC), is the right of a person to use reasonable force to protect themselves, others, or their property from an imminent threat of unlawful harm. This right is based on the natural instinct of self-preservation. The law does not expect a person to run away when attacked; it allows them to stand their ground and defend themselves.

### The Core Principle (Section 96 & 97)

- Section 96: "Nothing is an offense which is done in the exercise of the right of private defence." This means that any harm caused while lawfully exercising this right is not a crime.
- Section 97: The right extends to defending:
  1. One's own body and the body of any other person against any offense affecting the human body.
  2. The property, whether movable or immovable, of oneself or of any other person, against acts like theft, robbery, mischief, or criminal trespass.

### Key Limitations on the Right

The right of private defence is not absolute. It is subject to several important restrictions outlined in Section 99:

1. No Right Against a Public Servant: There is no right of private defence against an act done by a public servant acting in good faith under the color of their office, even if the act is not strictly justifiable by law.
2. No Right if There is Time to Recourse to Public Authorities: The law does not allow you to take the law into your own hands if there is a safe and reasonable opportunity to get help from the police or other public authorities. The threat must be imminent.
3. Force Must Be Proportionate: The harm inflicted in self-defence must not be more than what is necessary to repel the attack. You cannot use a cannon to kill a mosquito. The force used must be reasonable and proportionate to the threat faced.

### When the Right Extends to Causing Death

While the force must be proportionate, the law recognizes that in some extremely dangerous situations, the right of private defence can extend to voluntarily causing the death of the assailant.

- For Defence of Body (Section 100): This right extends to causing death when facing an assault that reasonably causes the apprehension of:
  - Death.
  - Grievous hurt.
  - Rape.
  - Unnatural lust.
  - Kidnapping or abduction.
  - Wrongfully confining a person under circumstances which may cause him to apprehend that he will be unable to have recourse to the public authorities for his release.

- For Defence of Property (Section 103): This right extends to causing death in cases of:
  - Robbery.
  - House-breaking by night.
  - Mischief by fire on any building, tent or vessel, which is used as a human dwelling or as a place for the custody of property.
  - Theft, mischief, or house-trespass, under such circumstances as may reasonably cause apprehension that death or grievous hurt will be the consequence.

🧠 Quick Recap:
- The Right of Private Defence allows using reasonable force to protect person and property.
- It is available for defending oneself, others, and property.
- Limitations: No right if there is time to get help from the police, and the force used must be proportionate.
- The right can extend to causing death in very specific and dangerous situations, like robbery or an assault that threatens death or grievous hurt.
`,
    links: []
  },
  {
    topic: 'Criminal Conspiracy',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Criminal Conspiracy, defined in Section 120A of the Indian Penal Code (IPC), is an offense where two or more persons agree to commit a crime. The essence of this offense is the agreement itself. It allows the law to intervene at an early stage before the planned crime is actually committed.

### Definition of Criminal Conspiracy (Section 120A)

A criminal conspiracy occurs when two or more persons agree to do, or cause to be done:
1. An illegal act; or
2. An act which is not illegal, by illegal means.

The term "illegal act" here covers everything that is an offense, is prohibited by law, or furnishes ground for a civil action.

### Key Elements of the Offense

- Agreement: The most crucial element is the agreement between two or more persons. There must be a meeting of minds to do the unlawful act. This agreement can be express or implied.
- Overt Act:
  - If the agreement is to commit a serious offense (punishable with death, life imprisonment, or rigorous imprisonment for two years or more), the agreement itself is enough to constitute the crime. No overt act (an act done in furtherance of the conspiracy) is required to be proven.
  - If the agreement is to commit a minor offense or a legal act by illegal means, then the agreement alone is not enough. At least one overt act must be done by one or more of the conspirators in pursuance of the agreement.

### Punishment for Criminal Conspiracy (Section 120B)

The punishment depends on the nature of the act conspired:
- Conspiracy to commit a serious offense: If the conspiracy is to commit an offense punishable with death, life imprisonment, or rigorous imprisonment for two years or more, the conspirator will be punished in the same manner as if they had abetted that offense.
- Other conspiracies: For any other criminal conspiracy, the punishment is imprisonment for a term not exceeding six months, or a fine, or both.

### Why is Conspiracy a Separate Crime?

- Group Danger: A group of people planning a crime is considered more dangerous than an individual acting alone. A group can plan more complex crimes and provide mutual encouragement.
- Early Intervention: The law of conspiracy allows the police to intervene and make arrests at the planning stage itself, before the actual crime is committed and harm is done to society.

### Proof of Conspiracy

Proving a conspiracy can be difficult because the agreement is often made in secret. Therefore, a conspiracy can be proved by:
- Direct Evidence: Such as a confession or testimony from one of the co-conspirators.
- Circumstantial Evidence: The agreement can be inferred from the conduct of the parties, the circumstances of the case, and the acts done by them.

🧠 Quick Recap:
- Criminal Conspiracy is an agreement between two or more people to do an illegal act.
- The agreement itself is the core of the offense.
- For serious crimes, the agreement alone is punishable. For minor crimes, an overt act is also required.
- It is a separate offense that allows law enforcement to act at the planning stage.
- It can be proven by direct or circumstantial evidence.
`,
    links: []
  },
  {
    topic: 'UN Security Council',
    category: 'General Knowledge',
    content: `
📘 Summary: The United Nations Security Council (UNSC) is one of the six principal organs of the United Nations and is charged with the primary responsibility for maintaining international peace and security. Its powers, outlined in the UN Charter, are significant and include the establishment of peacekeeping operations, the imposition of international sanctions, and the authorization of military action. Its decisions (resolutions) are legally binding on all UN member states.

### Composition of the Security Council

The Security Council is composed of 15 members:

1. Five Permanent Members (P5):
- These are the five major Allied powers that won World War II. They are:
  - China
  - France
  - Russia
  - The United Kingdom
  - The United States
- The Veto Power: The most significant power of the P5 members is the veto. If any one of these five countries casts a negative vote (a veto) on a substantive resolution, the resolution cannot be passed, even if all other 14 members vote in favor. This power is often a source of controversy and can lead to inaction on major global crises.

2. Ten Non-Permanent Members:
- These 10 members are elected by the UN General Assembly for a two-year term.
- The seats are distributed on a regional basis to ensure geographical representation:
  - African Group: 3 seats
  - Asia-Pacific Group: 2 seats
  - Latin American and Caribbean Group: 2 seats
  - Western European and Others Group: 2 seats
  - Eastern European Group: 1 seat
- A country cannot be elected for two consecutive terms.
- India has been elected as a non-permanent member several times.

### Functions and Powers

- To maintain international peace and security in accordance with the principles of the UN.
- To investigate any dispute or situation which might lead to international friction.
- To recommend methods of adjusting such disputes or the terms of settlement.
- To formulate plans for the establishment of a system to regulate armaments.
- To determine the existence of a threat to the peace or act of aggression and to recommend what action should be taken.
- To call on Members to apply economic sanctions and other measures not involving the use of force to prevent or stop aggression.
- To take military action against an aggressor.

### The Debate on UNSC Reforms

There is a long-standing and widespread debate about reforming the Security Council to make it more representative of the 21st-century world.
- Key Demands:
  - Expansion of both permanent and non-permanent seats.
  - Countries like India, Germany, Japan, and Brazil (known as the G4 nations) are major contenders for permanent seats.
  - Calls for representation from Africa and Latin America in the permanent category.
  - Questions over the veto power and proposals to limit its use.
- Challenges: Reforming the UNSC is very difficult as it requires amending the UN Charter, which needs the approval of two-thirds of the member states, including the consent of all five permanent members.

🧠 Quick Recap:
- The UNSC is responsible for maintaining international peace and security.
- It has 15 members: 5 permanent (P5) and 10 non-permanent.
- The P5 members (China, France, Russia, UK, US) have veto power.
- Its resolutions are legally binding on all UN members.
- There is a major global debate on reforming the UNSC to make it more representative, with India being a key contender for a permanent seat.
`,
    links: []
  },
  {
    topic: 'Vocabulary: Homonyms & Homophones',
    category: 'English',
    content: `
📘 Summary: Homonyms, homophones, and homographs are sets of words that can be easily confused due to their similarities in spelling or pronunciation. Understanding the difference between them is essential for accurate reading, writing, and for scoring well in the verbal ability section of exams.

### Homophones: Same Sound, Different Spelling

Homophones are words that are pronounced the same but have different meanings and different spellings.
- Examples:
  - To / Too / Two:
    - *To:* "I am going to the market." (preposition)
    - *Too:* "It is too hot." (also, excessively)
    - *Two:* "I have two pens." (the number 2)
  - There / Their / They're:
    - *There:* "The book is over there." (location)
    - *Their:* "It is their house." (possessive pronoun)
    - *They're:* "They're coming to the party." (contraction of 'they are')
  - Your / You're:
    - *Your:* "Is this your bag?" (possessive pronoun)
    - *You're:* "You're doing a great job." (contraction of 'you are')
  - Principle / Principal:
    - *Principle:* "He is a man of high principles." (a fundamental belief or rule)
    - *Principal:* "The principal of the school is strict." (head of a school; also means main or primary)
  - Cite / Site / Sight:
    - *Cite:* "You must cite your sources." (to quote)
    - *Site:* "This is the construction site." (a location)
    - *Sight:* "The sunset was a beautiful sight." (vision)

### Homonyms: Same Sound, Same Spelling

Homonyms are words that are spelled the same and pronounced the same but have different meanings. The context of the sentence tells you which meaning is intended.
- Examples:
  - Bat:
    - "He was afraid of the bat." (the flying mammal)
    - "The cricketer bought a new bat." (sports equipment)
  - Address:
    - "What is your address?" (location)
    - "I need to address this issue immediately." (to speak to; to deal with)
  - Right:
    - "Take a right turn." (direction)
    - "It is my right to vote." (a legal or moral entitlement)
  - Well:
    - "I hope you are well." (in good health)
    - "He dug a well for water." (a hole in the ground to obtain water)

### Homographs: Same Spelling, Different Pronunciation

Homographs are words that are spelled the same but have different meanings and different pronunciations.
- Examples:
  - Lead:
    - /led/ - "The pipe was made of lead." (the metal)
    - /liːd/ - "She will lead the team." (to guide)
  - Wind:
    - /wɪnd/ - "The wind is blowing hard." (moving air)
    - /waɪnd/ - "Don't forget to wind the clock." (to turn or coil)

🧠 Quick Recap:
- Homophones: Same sound, different spelling (e.g., *see/sea*).
- Homonyms: Same sound, same spelling, different meaning (e.g., *bat/bat*).
- Homographs: Same spelling, different pronunciation, different meaning (e.g., *lead/lead*).
- Context is the key to understanding which word is being used.
`,
    links: []
  },
  {
    topic: 'Series Completion',
    category: 'Logical Reasoning',
    content: `
📘 Summary: Series Completion questions are a common type of logical reasoning problem where you are given a sequence of numbers, letters, or both, with one term missing. Your task is to identify the underlying pattern in the series and find the correct missing term from the given options.

### Types of Series

1. Number Series:
These are the most common type. The pattern can be based on various arithmetic operations.
- Arithmetic Series (Constant Difference): Each term is obtained by adding or subtracting a constant number from the previous term.
  - Example: 2, 5, 8, 11, 14, ? (Pattern: +3) → Answer: 17
- Geometric Series (Constant Ratio): Each term is obtained by multiplying or dividing the previous term by a constant number.
  - Example: 3, 9, 27, 81, ? (Pattern: x3) → Answer: 243
- Square/Cube Series: The terms are squares or cubes of natural numbers.
  - Example: 1, 4, 9, 16, 25, ? (Pattern: 1², 2², 3², 4², 5²) → Answer: 36
- Mixed Series: The series is a combination of different patterns.
  - Example: 2, 3, 5, 7, 11, 13, ? (Pattern: Prime Numbers) → Answer: 17
- Two-Stage/Difference of Difference Series: The difference between consecutive terms itself forms an arithmetic series.
  - Example: 1, 2, 4, 7, 11, 16, ?
    - Differences: +1, +2, +3, +4, +5
    - Next difference will be +6. → Answer: 16 + 6 = 22
- Alternating Series: The series consists of two or more independent sub-series interwoven.
  - Example: 10, 7, 12, 9, 14, 11, ?
    - Series 1: 10, 12, 14, ... (Pattern: +2)
    - Series 2: 7, 9, 11, ... (Pattern: +2)
    - The next term belongs to Series 1. → Answer: 16

2. Alphabet Series:
The pattern is based on the position of letters in the English alphabet.
- Constant Gap: Letters are skipped by a fixed number.
  - Example: A, C, E, G, ? (Pattern: +2 letters) → Answer: I
- Increasing/Decreasing Gap: The number of skipped letters changes in a pattern.
  - Example: A, B, D, G, K, ? (Pattern: +1, +2, +3, +4) → Answer: P

3. Alpha-Numeric Series:
This is a combination of numbers and letters. You need to identify the pattern for the number series and the alphabet series separately.
- Example: Z1A, X2D, V6G, T21J, R88M, ?
  - Letter Pattern 1: Z, X, V, T, R, ... (Pattern: -2) → Next is P
  - Letter Pattern 2: A, D, G, J, M, ... (Pattern: +3) → Next is P
  - Number Pattern: 1, 2, 6, 21, 88, ... (Pattern: x1+1, x2+2, x3+3, x4+4) → Next is 88x5+5 = 445
  - Answer: P445P

### How to Solve
- Look for the obvious first: Check for simple addition, subtraction, multiplication, division, squares, or cubes.
- Calculate the differences: Find the difference between consecutive terms. This often reveals the pattern.
- Check for alternating patterns: If the numbers rise and fall, it's likely an alternating series.
- For alphabet series, it helps to know the positional value of letters (A=1, B=2, etc.).

🧠 Quick Recap:
- Identify the type of series: Number, Alphabet, or Alpha-Numeric.
- For Number Series, check arithmetic, geometric, square/cube, and alternating patterns. Calculating the differences is a powerful technique.
- For Alphabet Series, focus on the gap between letters.
- For Alpha-Numeric Series, solve the number and letter patterns independently.
`,
    links: []
  },
  {
    topic: 'Analogies',
    category: 'Logical Reasoning',
    content: `
📘 Summary: Analogy questions test your ability to recognize the relationship between two words or concepts and then find a similar relationship in another pair of words. The format is usually "A is to B as C is to D." You are given the first pair (A:B) and one word from the second pair (C), and you have to find the word (D) that completes the analogy.

### The Core Task: Identifying the Relationship

The first step is always to find the precise relationship between the first pair of words (A and B). The same relationship must exist between the second pair (C and D).

### Common Types of Relationships

1. Cause and Effect:
    - Example: Virus : Disease :: Hard Work : ?
    - Relationship: A virus causes a disease. Hard work causes success.
    - Answer: Success

2. Part to Whole:
    - Example: Wheel : Car :: Chapter : ?
    - Relationship: A wheel is a part of a car. A chapter is a part of a book.
    - Answer: Book

3. Object and its Function:
    - Example: Pen : Write :: Sword : ?
    - Relationship: The function of a pen is to write. The function of a sword is to slay/fight.
    - Answer: Slay / Fight

4. Synonyms (Words with similar meanings):
    - Example: Huge : Gigantic :: Slim : ?
    - Relationship: Huge and gigantic are synonyms. Slim and slender are synonyms.
    - Answer: Slender

5. Antonyms (Words with opposite meanings):
    - Example: Sad : Happy :: Brave : ?
    - Relationship: Sad is the opposite of happy. Brave is the opposite of cowardly.
    - Answer: Cowardly

6. Worker and Tool:
    - Example: Carpenter : Saw :: Doctor : ?
    - Relationship: A saw is a tool used by a carpenter. A stethoscope is a tool used by a doctor.
    - Answer: Stethoscope

7. Worker and Workplace:
    - Example: Teacher : School :: Doctor : ?
    - Relationship: A teacher works in a school. A doctor works in a hospital.
    - Answer: Hospital

8. Product and Raw Material:
    - Example: Butter : Milk :: Paper : ?
    - Relationship: Butter is made from milk. Paper is made from wood/pulp.
    - Answer: Wood / Pulp

9. Study and Topic:
    - Example: Seismology : Earthquakes :: Botany : ?
    - Relationship: Seismology is the study of earthquakes. Botany is the study of plants.
    - Answer: Plants

10. Intensity: One word is a more intense version of the other.
    - Example: Unhappy : Miserable :: Warm : ?
    - Relationship: Miserable is a more intense form of unhappy. Hot is a more intense form of warm.
    - Answer: Hot

### How to Solve

- Step 1: Formulate a clear sentence that describes the relationship between the first two words. For "Wheel : Car," the sentence is "A wheel is a part of a car."
- Step 2: Apply the same sentence structure to the second pair. "A chapter is a part of a _____."
- Step 3: Choose the answer that fits the sentence perfectly. "A chapter is a part of a book."

🧠 Quick Recap:
- The goal is to identify the relationship in the first pair of words.
- Apply that exact same relationship to the second pair.
- Common relationships include Part-to-Whole, Cause-and-Effect, Worker-and-Tool, and Synonyms/Antonyms.
- Creating a precise sentence to define the relationship is the most effective strategy.
`,
    links: []
  },
  {
    topic: 'Sports Personalities & Events',
    category: 'Current Affairs',
    content: `
📘 Summary: Sports is a dynamic and important part of current affairs. Questions in this section usually focus on major international tournaments, the performance of Indian athletes, key awards, and famous sports personalities. A good understanding of recent events in popular sports is essential.

### Major International Sporting Events

1. The Olympic Games:
- Held every four years (Summer and Winter).
- Things to know: The host city of the most recent and upcoming Olympics, India's medal winners and their respective sports, and the overall medal tally leaders.
- Recent: Tokyo 2020 (held in 2021). Upcoming: Paris 2024.

2. The Commonwealth Games (CWG) and Asian Games:
- Held every four years.
- These are important events to track for India's performance, as India traditionally does very well in them. Know the host cities and India's medal count.

3. Cricket World Cups:
- ICC Men's Cricket World Cup (ODI): Held every four years. Australia won the 2023 edition, defeating India in the final.
- ICC Men's T20 World Cup: Held every two years.
- Indian Premier League (IPL): Know the winner, runner-up, Orange Cap (most runs) winner, and Purple Cap (most wickets) winner for the latest season.

4. Football (Soccer):
- FIFA World Cup: The biggest single-sport event in the world, held every four years. Argentina, led by Lionel Messi, won the 2022 edition.
- Major Leagues: A basic awareness of major European leagues (English Premier League, La Liga) and tournaments (UEFA Champions League) is helpful.

5. Tennis - The Grand Slams:
These are the four major annual tennis tournaments. You should know the winners of the Men's and Women's singles titles.
- Australian Open (Hard Court)
- French Open (Roland Garros) (Clay Court)
- Wimbledon (Grass Court)
- US Open (Hard Court)

6. Other Sports:
- Hockey: Major events like the FIH Hockey World Cup and India's performance.
- Badminton: Achievements of Indian players like P.V. Sindhu and Lakshya Sen in major tournaments like the All England Open.
- Athletics: India's performance in the World Athletics Championships, especially Neeraj Chopra (Javelin Throw).
- Chess: Rise of young Indian Grandmasters like R. Praggnanandhaa.

### Key Sports Awards in India

- Major Dhyan Chand Khel Ratna Award: India's highest sporting honor.
- Arjuna Award: For outstanding performance in sports.
- Dronacharya Award: For outstanding coaches.

🧠 Quick Recap:
- Olympics: Know host cities and India's medal winners (e.g., Neeraj Chopra).
- Cricket: Remember the winners of the latest ODI and T20 World Cups, and the IPL.
- Football: The FIFA World Cup winner (Argentina in 2022).
- Tennis: The winners of the four Grand Slams.
- Indian Awards: Khel Ratna is the highest honor.
- Focus on Indian athletes' achievements in international events.
`,
    links: [],
  },
  {
    topic: 'Sources of Indian Constitution',
    category: 'Constitution',
    content: `
📘 Summary: The framers of the Indian Constitution did not create it in a vacuum. They studied the constitutions of various countries around the world and borrowed and adapted the features that they felt were best suited for India's unique needs and diverse society. While the main structural part is derived from the Government of India Act, 1935, many of its philosophical and political principles have foreign sources.

### Major Sources and Borrowed Features

1. Government of India Act, 1935:
This was the blueprint for the structural part of the Constitution.
- Federal Scheme: The division of powers between the centre and the states.
- Office of the Governor.
- Judiciary: The structure of the Supreme Court and High Courts.
- Public Service Commissions (like UPSC).
- Emergency Provisions.

2. Constitution of the United Kingdom (UK):
- Parliamentary Government: A system where the executive (government) is responsible to the legislature (Parliament).
- Rule of Law: The principle that everyone is equal before the law, and no one is above it.
- Single Citizenship: An Indian is a citizen of India only, not of their state.
- Cabinet System.
- Prerogative Writs (like Mandamus, Habeas Corpus).
- Bicameralism: The presence of two houses of Parliament (Lok Sabha and Rajya Sabha).

3. Constitution of the United States (USA):
- Fundamental Rights: The concept of a list of guaranteed rights for citizens.
- Judicial Review: The power of the courts to examine the constitutionality of laws.
- Independence of Judiciary.
- Impeachment of the President and removal of Supreme Court and High Court judges.
- Preamble.

4. Constitution of Ireland:
- Directive Principles of State Policy (DPSP): The guidelines for the state to follow in governance.
- Method of Election of the President.
- Nomination of members to the Rajya Sabha by the President.

5. Constitution of Canada:
- Federation with a strong Centre: A quasi-federal system where the central government is more powerful than the state governments.
- Vesting of Residuary Powers in the Centre: Powers not mentioned in any list go to the central government.
- Appointment of State Governors by the Centre.

6. Constitution of Australia:
- Concurrent List: A list of subjects on which both the Centre and the states can make laws.
- Freedom of trade, commerce, and intercourse.
- Joint sitting of the two Houses of Parliament to resolve a deadlock.

7. Constitution of Germany (Weimar):
- Suspension of Fundamental Rights during an Emergency.

8. Constitution of South Africa:
- Procedure for Amendment of the Constitution.
- Election of members of the Rajya Sabha.

9. Constitution of the USSR (former Soviet Union):
- Fundamental Duties.
- The ideal of Justice (social, economic, and political) in the Preamble.

🧠 Quick Recap:
- UK: Parliamentary System, Rule of Law, Single Citizenship.
- USA: Fundamental Rights, Judicial Review, Independence of Judiciary.
- Ireland: Directive Principles of State Policy (DPSP).
- Canada: Federation with a strong Centre, Residuary Powers.
- Australia: Concurrent List, Joint Sitting.
- South Africa: Amendment Procedure.
- USSR: Fundamental Duties.
- The structural part is largely from the Government of India Act, 1935.
`,
    links: []
  },
  {
    topic: 'Nemo Judex in Causa Sua',
    category: 'Legal Maxims',
    content: `
📘 Summary: *Nemo judex in causa sua* is a Latin maxim that translates to "no one should be a judge in their own cause." It is a fundamental pillar of natural justice and is also known as the Rule Against Bias. This principle ensures that legal and administrative proceedings are fair, impartial, and free from any personal interest or prejudice on the part of the decision-maker.

### The Core Principle: The Duty to Act Fairly

The essence of this rule is that justice should not only be done but should also be seen to be done. A person adjudicating a matter must be impartial and neutral. If a judge or decision-maker has any interest in the case, it creates a likelihood of bias, which can compromise the fairness of the decision. The law, therefore, disqualifies a person from acting as a judge in a case where they have an interest.

### Types of Bias

The rule against bias covers several types of conflicts of interest:

1. Pecuniary Bias (Financial Interest):
- This is the most straightforward type of bias. If a decision-maker has any financial or monetary interest, however small, in the outcome of the case, they are disqualified from hearing it.
- The law presumes that any financial interest will influence the decision, so there is no need to prove that the decision was actually affected. The likelihood of bias is enough.
- Example: A judge cannot hear a case involving a company in which they own shares.

2. Personal Bias:
- This arises from a relationship between the decision-maker and one of the parties. This relationship can be positive (friendship, family ties) or negative (enmity, rivalry).
- Example: A person cannot be a judge in a case where their own brother is a party. Similarly, a person cannot chair a disciplinary committee against an employee with whom they have a history of personal conflict.

3. Bias as to the Subject Matter (Official Bias):
- This occurs when the decision-maker has a professional or official interest in the subject matter of the dispute. This often happens in administrative law.
- Example: If the head of a government department, who has strong views on a policy and has actively promoted it, later sits as a judge to decide the legality of that same policy, it could be seen as a bias in favor of the subject matter.

### Test for Bias

The test for bias is not whether the decision-maker was actually biased, but whether there was a "real likelihood of bias." The court asks: would a reasonable, fair-minded person, looking at the circumstances, think that there was a danger that the judge might be biased? If the answer is yes, the decision can be set aside.

🧠 Quick Recap:
- Meaning: "No one should be a judge in their own cause."
- It is also known as the Rule Against Bias.
- It ensures fairness and impartiality in decision-making.
- Types of Bias:
  - Pecuniary Bias: Any financial interest disqualifies a judge.
  - Personal Bias: Arises from a relationship (friendship, enmity) with a party.
  - Subject Matter Bias: A pre-existing interest in the issue itself.
- The test is the "real likelihood of bias," not actual bias.
`,
    links: []
  },
  {
    topic: 'Bail',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Bail, in criminal law, is the conditional release of a person accused of a crime from custody while they await their trial. The purpose of bail is to ensure the accused person's presence during the trial, while also protecting their liberty, as they are presumed innocent until proven guilty. The provisions relating to bail are primarily found in the Code of Criminal Procedure (CrPC), 1973.

### Types of Offences and Bail

The CrPC classifies offenses into two categories for the purpose of bail:

1. Bailable Offence:
- These are less serious offenses, defined in the CrPC or listed as 'bailable' in the First Schedule of the CrPC.
- In the case of a bailable offense, granting bail is a matter of right, not discretion.
- The accused person has a right to be released on bail, and the police or the court are bound to grant it upon the accused furnishing a bail bond (with or without sureties).

2. Non-bailable Offence:
- These are more serious offenses (e.g., murder, rape, dacoity).
- In the case of a non-bailable offense, granting bail is a matter of judicial discretion. It is not a right.
- The court will consider several factors before deciding whether to grant bail, including:
  - The seriousness and nature of the accusation.
  - The severity of the punishment if convicted.
  - The risk of the accused absconding or fleeing from justice.
  - The risk of the accused tampering with evidence or threatening witnesses.
  - The character and background of the accused.
- The famous principle often cited by the Supreme Court is "Bail is the rule, and jail is the exception." This means that even in non-bailable cases, courts should lean towards granting bail unless there are strong reasons to deny it.

### Special Types of Bail

1. Anticipatory Bail (Section 438, CrPC):
- This is a unique provision that allows a person who anticipates or apprehends that they may be arrested for a non-bailable offense to apply for bail in advance.
- It is a pre-arrest legal remedy.
- The High Court or the Court of Session can issue a direction that in the event of such an arrest, the person shall be released on bail.
- The court grants anticipatory bail based on the credibility of the information and the nature of the alleged offense.

2. Default Bail (Section 167(2), CrPC):
- This is a right to be released on bail if the police fail to complete their investigation and file the charge sheet within the prescribed time limit.
- The time limit is 60 days for offenses punishable with imprisonment up to 10 years, and 90 days for offenses punishable with death, life imprisonment, or imprisonment for more than 10 years.
- This is an indefeasible right of the accused.

🧠 Quick Recap:
- Bail is the conditional release of an accused person pending trial.
- Bailable Offence: Bail is a right.
- Non-bailable Offence: Bail is at the discretion of the court.
- The general principle is "Bail is the rule, jail is the exception."
- Anticipatory Bail: Bail granted *before* an arrest.
- Default Bail: Granted if the police fail to file the charge sheet within the stipulated time (60/90 days).
`,
    links: []
  },
  {
    topic: 'Alternative Dispute Resolution (ADR)',
    category: 'Legal Aptitude',
    content: `
📘 Summary: Alternative Dispute Resolution (ADR) refers to a variety of methods and processes used to resolve disputes outside the traditional court system (litigation). ADR methods are generally faster, less expensive, more flexible, and less confrontational than going to court. They are designed to help parties find a mutually agreeable solution with the help of a neutral third party.

### Why is ADR Needed?

The traditional court system often suffers from:
- Long Delays: Cases can take years, even decades, to be resolved.
- High Costs: Litigation involves expensive court fees and lawyer fees.
- Formal and Rigid Procedures: Courts follow strict rules of procedure and evidence.
- Adversarial Nature: The courtroom battle often destroys relationships between the parties.

ADR aims to overcome these problems by providing a more cooperative and efficient way to settle disputes.

### Major Forms of ADR

1. Arbitration:
- In arbitration, the parties agree to submit their dispute to a neutral third party, called an arbitrator (or a panel of arbitrators).
- The arbitrator acts like a private judge, hears the evidence and arguments from both sides, and then makes a decision called an award.
- The arbitral award is legally binding and can be enforced in a court of law, just like a court judgment.
- It is a formal process, but more flexible than a court trial.

2. Mediation:
- In mediation, a neutral third party, called a mediator, helps the parties in dispute to reach a mutually acceptable settlement.
- The role of the mediator is to facilitate communication, identify issues, and explore potential solutions.
- The mediator does not impose a decision. The power to make a decision rests entirely with the parties themselves.
- If the parties reach an agreement, it is written down and becomes a binding contract. Mediation is completely voluntary and confidential.

3. Conciliation:
- Conciliation is very similar to mediation. A neutral third party, the conciliator, helps the parties resolve their dispute amicably.
- The main difference is that a conciliator can play a more active role than a mediator. The conciliator can suggest potential solutions and proposals for settlement, whereas a mediator typically refrains from doing so.

4. Lok Adalat:
- Meaning: "People's Court."
- It is a unique system developed in India. It is a forum where disputes pending in a court or at a pre-litigation stage are settled amicably.
- Lok Adalats are presided over by sitting or retired judicial officers and other persons like lawyers or social workers.
- They work on the principle of compromise and settlement.
- The decision of the Lok Adalat is called an award, and it is deemed to be a decree of a civil court and is final and binding on all parties. There is no appeal against the award.

🧠 Quick Recap:
- ADR means resolving disputes outside of the court system.
- It is generally cheaper, faster, and less confrontational than litigation.
- Arbitration: A neutral arbitrator makes a binding decision (award).
- Mediation: A neutral mediator helps the parties reach their own agreement. The mediator does not decide.
- Conciliation: Similar to mediation, but the conciliator can suggest solutions.
- Lok Adalat: A "People's Court" that settles disputes through compromise; its award is final and binding.
`,
    links: []
  },
  {
    topic: 'Public Interest Litigation (PIL)',
    category: 'Constitution',
    content: `
📘 Summary: Public Interest Litigation (PIL) is a legal action initiated in a court of law for the enforcement of public interest or general welfare. Unlike traditional litigation where a person can only sue if their own rights are violated, a PIL can be filed by any public-spirited citizen on behalf of an underprivileged group or the public at large. It is a powerful tool for social justice and was a major innovation by the Indian judiciary.

### The Concept of PIL

The traditional rule for approaching a court is known as 'locus standi', which means only a person whose own rights have been infringed can file a case.
PIL represents a significant relaxation of this rule. The Supreme Court recognized that in a country like India, many people are poor, ignorant, or socially disadvantaged and cannot approach the courts for justice. Therefore, the court allowed any member of the public or a social action group to file a petition on their behalf.

### Origin and Pioneers

The concept of PIL was pioneered in the late 1970s and early 1980s by Justice V. R. Krishna Iyer and Justice P. N. Bhagwati of the Supreme Court of India. They wanted to make the justice system more accessible to the poor and marginalized. Justice Bhagwati even allowed cases to be filed based on simple letters or postcards addressed to the Supreme Court.

### What Constitutes "Public Interest"?

A PIL can be filed on any matter where the interest of the public or a large community is affected. This includes issues such as:
- Environmental Pollution: Cases related to air, water, and noise pollution.
- Human Rights: Violations of the rights of prisoners, bonded laborers, or children.
- Government Accountability: Cases questioning corruption, inefficiency, or arbitrary actions of the government.
- Public Health and Safety: Issues related to road safety, food adulteration, or lack of medical facilities.
- Protection of Cultural Heritage.

### Who Can File a PIL?

Any citizen or social organization can file a PIL. The only condition is that the person filing the petition must be acting in good faith and not for personal gain, private profit, or political motives.

### Misuse of PIL

Over the years, the courts have become cautious about the misuse of PIL. Some people have started filing frivolous PILs for personal publicity or to harass others. The Supreme Court has warned that it will take strict action against those who misuse this important tool and has started imposing costs in such cases.

🧠 Quick Recap:
- PIL stands for Public Interest Litigation.
- It is a lawsuit filed for the protection of public interest.
- It is an exception to the traditional rule of 'locus standi'.
- Any public-spirited citizen can file a PIL on behalf of those who cannot approach the court themselves.
- Pioneered by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer.
- Can be filed on issues like environment, human rights, and government accountability.
- The courts are now strict about preventing the misuse of PIL.
`,
    links: []
  },
  {
    topic: 'Union & State Executive',
    category: 'Constitution',
    content: `
📘 Summary: The executive is the branch of government responsible for implementing and enforcing the laws made by the legislature. In India's parliamentary system, there is an executive at both the Union (central) and State levels. A key feature is the distinction between the nominal executive (the head of state) and the real executive (the head of government).

### The Union Executive (Part V of the Constitution)

The Union Executive consists of:
1. The President:
    - The head of the Indian State (nominal or de jure executive).
    - He is the first citizen and acts as a symbol of the nation.
    - All executive actions are taken in his name. However, he must act on the aid and advice of the Prime Minister and the Council of Ministers.
2. The Vice-President:
    - The second highest constitutional office.
    - Acts as the ex-officio Chairman of the Rajya Sabha.
3. The Prime Minister (PM):
    - The head of the government (real or de facto executive).
    - He is the leader of the party that has a majority in the Lok Sabha.
    - He is the chief advisor to the President and the link between the President and the Council of Ministers.
4. The Council of Ministers (CoM):
    - A body of ministers, headed by the PM, to aid and advise the President.
    - Collective Responsibility: This is the bedrock of the parliamentary system. Article 75 states that the Council of Ministers is collectively responsible to the Lok Sabha. This means they stand or fall together. If a no-confidence motion is passed against the government in the Lok Sabha, the entire council of ministers has to resign.
5. The Attorney General for India:
    - The highest law officer in the country, appointed by the President.

### The State Executive (Part VI of the Constitution)

The structure of the State Executive is parallel to the Union Executive. It consists of:
1. The Governor:
    - The head of the state executive (nominal or de jure executive).
    - Appointed by the President and acts as an agent of the central government.
    - His role is largely ceremonial, and he must act on the aid and advice of the Chief Minister and the State Council of Ministers.
2. The Chief Minister (CM):
    - The head of the state government (real or de facto executive).
    - He is the leader of the majority party in the State Legislative Assembly (Vidhan Sabha).
3. The State Council of Ministers (CoM):
    - Headed by the CM to aid and advise the Governor.
    - They are collectively responsible to the State Legislative Assembly.
4. The Advocate General for the State:
    - The highest law officer in the state, appointed by the Governor.

🧠 Quick Recap:
- The executive branch implements laws.
- Union Executive: President (nominal head) + PM & Council of Ministers (real head).
- State Executive: Governor (nominal head) + CM & Council of Ministers (real head).
- The key principle of the parliamentary system is collective responsibility.
- The Union Council of Ministers is responsible to the Lok Sabha.
- The State Council of Ministers is responsible to the State Legislative Assembly.
`,
    links: []
  },
  {
    topic: 'Union & State Legislature',
    category: 'Constitution',
    content: `
📘 Summary: The legislature is the law-making branch of the government. In India's federal structure, there are legislatures at both the Union (central) level and the State level. The Union legislature is called the Parliament, and it makes laws for the entire country. The State legislatures make laws for their respective states.

### The Union Legislature (The Parliament)

As per Article 79, the Parliament of India consists of the President and two Houses:
1. Lok Sabha (The House of the People):
- This is the lower house. Its members are directly elected by the people based on universal adult franchise.
- It represents the will of the people.
- Term: Five years, but can be dissolved earlier.
- The leader of the majority party in the Lok Sabha becomes the Prime Minister.

2. Rajya Sabha (The Council of States):
- This is the upper house. It represents the states of India.
- Its members are indirectly elected by the elected members of the State Legislative Assemblies.
- Term: It is a permanent body and cannot be dissolved. One-third of its members retire every two years, and each member has a term of six years.
- This structure ensures continuity.

### The State Legislature

The structure of the legislature can vary from state to state.
- Unicameral Legislature: Most states in India have a unicameral system, meaning they have only one house - the Legislative Assembly (Vidhan Sabha).
- Bicameral Legislature: A few states have a bicameral system, meaning they have two houses:
  1. Legislative Assembly (Vidhan Sabha): This is the lower house, similar to the Lok Sabha. Its members are directly elected by the people.
  2. Legislative Council (Vidhan Parishad): This is the upper house, similar to the Rajya Sabha. Its members are indirectly elected and nominated. It is a permanent body.

### Law-Making Process

- A proposed law is called a Bill.
- A Bill has to be passed by both Houses of the legislature (or the single house in a unicameral system) to become an Act (a law).
- After being passed by the legislature, the Bill goes to the President (for Union laws) or the Governor (for state laws) for their assent. The law comes into force only after receiving this assent.

### Division of Law-Making Powers (Seventh Schedule)

The Constitution clearly divides the power to make laws between the Union and the States into three lists:
- Union List: Contains subjects of national importance (e.g., defense, foreign affairs, banking). Only the Parliament can make laws on these subjects.
- State List: Contains subjects of state and local importance (e.g., police, public health, agriculture). Only the State Legislatures can make laws on these subjects.
- Concurrent List: Contains subjects where both the Parliament and State Legislatures can make laws (e.g., education, forests, marriage). If there is a conflict between a central law and a state law on a concurrent subject, the central law will prevail.

🧠 Quick Recap:
- Union Legislature (Parliament): Lok Sabha (lower house, directly elected) + Rajya Sabha (upper house, indirectly elected).
- State Legislature: Can be unicameral (one house) or bicameral (two houses).
- The three lists in the Seventh Schedule divide law-making powers:
  - Union List: For Parliament only.
  - State List: For State Legislatures only.
  - Concurrent List: For both, but Union law prevails in case of conflict.
`,
    links: []
  },
  {
    topic: 'Union & State Judiciary',
    category: 'Constitution',
    content: `
📘 Summary: India has a single, unified, and integrated judicial system. This means that unlike countries like the USA, there is no separate system of federal and state courts. The same system of courts, with the Supreme Court at the top, administers both Union and State laws. The Constitution has also ensured the independence of the judiciary from the executive and legislative branches.

### The Hierarchy of Courts

The Indian judicial system is structured like a pyramid:

1. The Supreme Court of India:
- Position: It is the apex court of the country, the highest court of appeal.
- Location: New Delhi.
- Binding Power: Its decisions and laws are binding on all other courts throughout India (Article 141).
- Key Powers: It is the final interpreter of the Constitution and the guardian of Fundamental Rights. It can issue writs and has original, appellate, and advisory jurisdictions.

2. The High Courts:
- Position: They are the highest judicial bodies in the states. Each state has a High Court, though Parliament can establish a common High Court for two or more states (e.g., the Punjab and Haryana High Court).
- Control: They have the power of superintendence over all courts and tribunals within their territorial jurisdiction.
- Key Powers: Like the Supreme Court, High Courts can also issue writs for the enforcement of Fundamental Rights and other legal rights (Article 226). They hear appeals from lower courts.

3. Subordinate Courts:
- Position: These are the courts at the district and lower levels, functioning below and under the control of the High Courts.
- Structure: The structure and designation of subordinate courts can vary slightly from state to state, but generally includes:
  - Civil Courts:
    - District Court: The highest civil court in a district, presided over by the District Judge.
    - Courts of Sub-Judges, Munsiffs, etc.
  - Criminal Courts:
    - Sessions Court: The highest criminal court in a district, presided over by the Sessions Judge (the District Judge also serves as the Sessions Judge).
    - Courts of Chief Judicial Magistrate, Judicial Magistrate First Class, etc.

### Independence of the Judiciary

The Constitution secures the independence of the judiciary through several provisions:
- Appointment: Judges are appointed through a collegium system, reducing executive influence.
- Security of Tenure: Judges of the Supreme Court and High Courts hold office until they attain the age of retirement (65 and 62 years, respectively) and can only be removed through a very difficult process of impeachment.
- Fixed Service Conditions: Their salaries and allowances are fixed and cannot be reduced to their disadvantage during their term.
- Power to Punish for Contempt: The judiciary has the power to punish anyone for its contempt, ensuring its authority is respected.

🧠 Quick Recap:
- India has a single, integrated judicial system.
- The hierarchy is: Supreme Court > High Courts > Subordinate Courts.
- The Supreme Court is the apex court, and its decisions are binding on all other courts.
- Both the Supreme Court and High Courts can issue writs.
- The Constitution ensures the independence of the judiciary through provisions like security of tenure and fixed salaries.
`,
    links: []
  }
];

export const studyEvents: StudyEvent[] = [
    { date: new Date(new Date().setDate(new Date().getDate() + 1)), title: 'Revise Fundamental Rights', description: 'Go through Articles 12-35 of the Constitution.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 2)), title: 'Practice 50 MCQs on Torts', description: 'Focus on negligence and defamation.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 3)), title: 'Read a newspaper editorial', description: 'Summarize the main arguments and identify logical fallacies.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 4)), title: 'Topic Notes: Contracts', description: 'Cover Offer, Acceptance, and Consideration.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 5)), title: 'Solve 20 Logical Reasoning Puzzles', description: 'Focus on blood relations and syllogisms.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 6)), title: 'Review Legal Maxims Flashcards', description: 'Go through all maxims added so far.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 7)), title: 'Weekly Revision Day', description: 'Revise all topics covered in the past week.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 8)), title: 'Revise DPSP and Fundamental Duties', description: 'Understand the difference and significance of both.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 9)), title: 'Practice 50 MCQs on Criminal Law', description: 'Focus on theft, extortion, and assault.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 10)), title: 'Current Affairs Update', description: 'Read about the last 30 days of national and international news.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 11)), title: 'Topic Notes: Constitutional Bodies', description: 'Study the Election Commission, UPSC, and Finance Commission.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 12)), title: 'Solve 20 English Grammar Questions', description: 'Focus on subject-verb agreement and tenses.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 13)), title: 'Review General Knowledge Flashcards', description: 'Go through history and geography cards.' },
    { date: new Date(new Date().setDate(new Date().getDate() + 14)), title: 'Full-Length Mock Test', description: 'Simulate exam conditions and analyze performance.' }
];

export const flashcards: Flashcard[] = [
  { id: 'fc-1', term: 'Habeas Corpus', definition: 'A writ requiring a person under arrest to be brought before a judge or into court, especially to secure the person\'s release unless lawful grounds are shown for their detention.', topic: 'Legal Writs' },
  { id: 'fc-2', term: 'Mens Rea', definition: 'The intention or knowledge of wrongdoing that constitutes part of a crime, as opposed to the action or conduct of the accused (actus reus).', topic: 'Criminal Law' },
  { id: 'fc-3', term: 'Stare Decisis', definition: 'The legal principle of determining points in litigation according to precedent.', topic: 'Legal Principles' },
  { id: 'fc-4', term: 'Caveat Emptor', definition: 'The principle that the buyer alone is responsible for checking the quality and suitability of goods before a purchase is made. "Let the buyer beware".', topic: 'Contract Law' },
  { id: 'fc-5', term: 'Void ab initio', definition: 'A contract or legal document that is void from the very beginning.', topic: 'Contract Law' },
  { id: 'fc-6', term: 'Doli Incapax', definition: 'A legal presumption that a child under a certain age is incapable of forming criminal intent.', topic: 'Criminal Law' },
  { id: 'fc-7', term: 'Amicus Curiae', definition: 'An impartial adviser, often voluntary, to a court of law in a particular case. Translates to "friend of the court".', topic: 'Legal Roles'},
  { id: 'fc-8', term: 'Ratio Decidendi', definition: 'The rule of law on which a judicial decision is based. It is the legally binding part of a judgment.', topic: 'Legal Principles'},
  { id: 'fc-9', term: 'Mandamus', definition: 'A writ from a superior court to a lower court or government officer commanding them to perform a mandatory public duty. Translates to "we command".', topic: 'Legal Writs' },
  { id: 'fc-10', term: 'Certiorari', definition: 'A writ by which a higher court reviews a decision of a lower court for errors of law. Translates to "to be certified".', topic: 'Legal Writs' },
  { id: 'fc-11', term: 'Quo Warranto', definition: 'A writ requiring a person to show by what authority they exercise a public office. Translates to "by what authority?".', topic: 'Legal Writs' },
  { id: 'fc-12', term: 'Prohibition', definition: 'A writ from a superior court to a lower court or tribunal to prevent it from exceeding its jurisdiction.', topic: 'Legal Writs' },
  { id: 'fc-13', term: 'Actus Reus', definition: 'The wrongful act or omission that comprises the physical component of a crime.', topic: 'Criminal Law' },
  { id: 'fc-14', term: 'Ab Initio', definition: 'From the beginning.', topic: 'Legal Maxims' },
  { id: 'fc-15', term: 'Alibi', definition: 'A defense that the accused was in another place at the time the crime was committed.', topic: 'Criminal Law' },
  { id: 'fc-16', term: 'Bona fide', definition: 'In good faith; genuine.', topic: 'Legal Maxims' },
  { id: 'fc-17', term: 'De facto', definition: 'In fact; in reality. Describes practices that exist in reality, even if not legally recognized.', topic: 'Legal Maxims' },
  { id: 'fc-18', term: 'De jure', definition: 'By law. Describes practices that are legally recognized, regardless of whether they exist in reality.', topic: 'Legal Maxims' },
  { id: 'fc-19', term: 'Ipso facto', definition: 'By the fact itself. A direct consequence of an action.', topic: 'Legal Maxims' },
  { id: 'fc-20', term: 'Lis pendens', definition: 'A pending lawsuit. A written notice that a lawsuit has been filed concerning real estate.', topic: 'Civil Law' },
  { id: 'fc-21', term: 'Modus operandi', definition: 'A particular way or method of doing something, especially one that is characteristic or well-established.', topic: 'Legal Maxims' },
  { id: 'fc-22', term: 'Prima facie', definition: 'Based on the first impression; accepted as correct until proved otherwise.', topic: 'Legal Maxims' },
  { id: 'fc-23', term: 'Quid pro quo', definition: 'Something for something. An exchange of goods or services, where one transfer is contingent upon the other.', topic: 'Contract Law' },
  { id: 'fc-24', term: 'Sine die', definition: '(Of a proceeding) adjourned indefinitely, without a day appointed for resumption.', topic: 'Legal Procedure' },
  { id: 'fc-25', term: 'Sub judice', definition: 'Under judicial consideration and therefore prohibited from public discussion elsewhere.', topic: 'Legal Procedure' },
  { id: 'fc-26', term: 'Suo motu', definition: 'On its own motion. An action by a court without any request by the parties involved.', topic: 'Legal Procedure' },
  { id: 'fc-27', term: 'Ultra vires', definition: 'Beyond the powers. An act which requires legal authority but is done without it.', topic: 'Legal Principles' },
  { id: 'fc-28', term: 'Volenti non fit injuria', definition: 'To a willing person, injury is not done. A defense in tort that a person who knowingly puts themselves at risk cannot sue for damages.', topic: 'Law of Torts' },
  { id: 'fc-29', term: 'Plaintiff', definition: 'A person who brings a case against another in a court of law.', topic: 'Legal Roles' },
  { id: 'fc-30', term: 'Defendant', definition: 'An individual, company, or institution sued or accused in a court of law.', topic: 'Legal Roles' },
  { id: 'fc-31', term: 'Cognizable Offence', definition: 'An offence in which a police officer can arrest without a warrant.', topic: 'Criminal Law' },
  { id: 'fc-32', term: 'Non-cognizable Offence', definition: 'An offence in which a police officer cannot arrest without a warrant.', topic: 'Criminal Law' },
  { id: 'fc-33', term: 'Acquittal', definition: 'A judgment that a person is not guilty of the crime with which they have been charged.', topic: 'Criminal Law' },
  { id: 'fc-34', term: 'Conviction', definition: 'A formal declaration that someone is guilty of a criminal offence, made by the verdict of a jury or the decision of a judge.', topic: 'Criminal Law' },
  { id: 'fc-35', term: 'Affidavit', definition: 'A written statement confirmed by oath or affirmation, for use as evidence in court.', topic: 'Legal Documents' },
  { id: 'fc-36', term: 'Appeal', definition: 'An application to a higher court for a reversal of the decision of a lower court.', topic: 'Legal Procedure' },
  { id: 'fc-37', term: 'Arbitration', definition: 'A form of alternative dispute resolution (ADR), is a way to resolve disputes outside the judiciary courts.', topic: 'Legal Procedure' },
  { id: 'fc-38', term: 'Coercion', definition: 'The practice of persuading someone to do something by using force or threats.', topic: 'Contract Law' },
  { id: 'fc-39', term: 'Damages', definition: 'A sum of money awarded by a court to compensate for loss or injury.', topic: 'Law of Torts' },
  { id: 'fc-40', term: 'Decree', definition: 'An official order that has the force of law.', topic: 'Legal Procedure' },
  { id: 'fc-41', term: 'Estoppel', definition: 'A legal principle that prevents someone from arguing something or asserting a right that contradicts what they previously said or agreed to by law.', topic: 'Legal Principles' },
  { id: 'fc-42', term: 'FIR (First Information Report)', definition: 'A written document prepared by police organizations when they receive information about the commission of a cognizable offence.', topic: 'Criminal Law' },
  { id: 'fc-43', term: 'Injunction', definition: 'A judicial order restraining a person from beginning or continuing an action, or compelling a person to carry out a certain act.', topic: 'Civil Law' },
  { id: 'fc-44', term: 'Indemnity', definition: 'Security or protection against a loss or other financial burden.', topic: 'Contract Law' },
  { id: 'fc-45', term: 'Jurisdiction', definition: 'The official power to make legal decisions and judgments.', topic: 'Legal Principles' },
  { id: 'fc-46', term: 'Libel', definition: 'A published false statement that is damaging to a person\'s reputation; a written defamation.', topic: 'Law of Torts' },
  { id: 'fc-47', term: 'Slander', definition: 'The action or crime of making a false spoken statement damaging to a person\'s reputation.', topic: 'Law of Torts' },
  { id: 'fc-48', term: 'Lien', definition: 'A right to keep possession of property belonging to another person until a debt owed by that person is discharged.', topic: 'Civil Law' },
  { id: 'fc-49', term: 'Litigation', definition: 'The process of taking legal action.', topic: 'Legal Procedure' },
  { id: 'fc-50', term: 'Negligence', definition: 'Failure to take proper care over something, resulting in damage or injury to another.', topic: 'Law of Torts' },
  { id: 'fc-51', term: 'Ordinance', definition: 'A law promulgated by the President/Governor when the Parliament/State Legislature is not in session.', topic: 'Constitutional Law' },
  { id: 'fc-52', term: 'Parole', definition: 'The temporary or permanent release of a prisoner before the expiry of a sentence, on the promise of good behavior.', topic: 'Criminal Law' },
  { id: 'fc-53', term: 'Petition', definition: 'A formal written request, typically one signed by many people, appealing to authority in respect of a particular cause.', topic: 'Legal Procedure' },
  { id: 'fc-54', term: 'Precedent', definition: 'An earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances.', topic: 'Legal Principles' },
  { id: 'fc-55', term: 'Summons', definition: 'An order to appear before a judge or magistrate.', topic: 'Legal Procedure' },
  { id: 'fc-56', term: 'Warrant', definition: 'A document issued by a legal or government official authorizing the police or another body to make an arrest, search premises, or carry out some other action.', topic: 'Criminal Law' },
  { id: 'fc-57', term: 'Secularism', definition: 'The principle of separation of the state from religious institutions.', topic: 'Constitutional Law' },
  { id: 'fc-58', term: 'Sovereignty', definition: 'The supreme power or authority of a state to govern itself or another state.', topic: 'Constitutional Law' },
  { id: 'fc-59', term: 'Republic', definition: 'A state in which supreme power is held by the people and their elected representatives, and which has an elected or nominated president rather than a monarch.', topic: 'Constitutional Law' },
  { id: 'fc-60', term: 'Federalism', definition: 'A system of government in which entities such as states or provinces share power with a national government.', topic: 'Constitutional Law' },
  { id: 'fc-61', term: 'Separation of Powers', definition: 'The division of government responsibilities into distinct branches (legislative, executive, judicial) to limit any one branch from exercising the core functions of another.', topic: 'Constitutional Law' },
  { id: 'fc-62', term: 'Judicial Review', definition: 'The power of a court to review the constitutionality of legislative acts and executive orders.', topic: 'Constitutional Law' },
  { id: 'fc-63', term: 'Double Jeopardy', definition: 'A procedural defence that prevents an accused person from being tried again on the same (or similar) charges following a valid acquittal or conviction.', topic: 'Criminal Law' },
  { id: 'fc-64', term: 'Ex post facto law', definition: 'A law that retroactively changes the legal consequences of actions that were committed before the enactment of the law.', topic: 'Criminal Law' },
  { id: 'fc-65', term: 'Locus standi', definition: 'The right or capacity to bring an action or to appear in a court.', topic: 'Legal Principles' },
  { id: 'fc-66', term: 'Natural Justice', definition: 'Principles of justice that are based on the common-sense notions of fairness, including the right to a fair hearing and the rule against bias.', topic: 'Legal Principles' },
  { id: 'fc-67', term: 'Obiter Dicta', definition: 'A judge\'s incidental expression of opinion, not essential to the decision and not legally binding as a precedent. "A saying by the way".', topic: 'Legal Principles' },
  { id: 'fc-68', term: 'Res judicata', definition: 'A matter that has been adjudicated by a competent court and therefore may not be pursued further by the same parties. "A matter decided".', topic: 'Civil Law' },
  { id: 'fc-69', term: 'Vicarious Liability', definition: 'A situation where someone is held responsible for the actions or omissions of another person.', topic: 'Law of Torts' },
  { id: 'fc-70', term: 'Tortfeasor', definition: 'A person who commits a tort (a civil wrong).', topic: 'Law of Torts' },
  { id: 'fc-71', term: 'Trespass', definition: 'Unlawful interference with one\'s person, property, or rights.', topic: 'Law of Torts' },
  { id: 'fc-72', term: 'Nuisance', definition: 'An act which is harmful or offensive to the public or a member of it and for which there is a legal remedy.', topic: 'Law of Torts' },
  { id: 'fc-73', term: 'Pacta Sunt Servanda', definition: 'Agreements must be kept. A fundamental principle of international and contract law.', topic: 'Contract Law' },
  { id: 'fc-74', term: 'Assault', definition: 'An act that creates an apprehension in another of an imminent, harmful, or offensive contact.', topic: 'Law of Torts' },
  { id: 'fc-75', term: 'Battery', definition: 'The actual intentional striking of someone, with intent to harm, or in a rude and insolent manner even if the injury is slight.', topic: 'Law of Torts' },
  { id: 'fc-76', term: 'Bailment', definition: 'A legal relationship in common law where physical possession of personal property is transferred from one person (the bailor) to another (the bailee).', topic: 'Contract Law' },
  { id: 'fc-77', term: 'Consideration', definition: 'The benefit that each party receives, or expects to receive when entering into a contract. It is a necessary element of a valid contract.', topic: 'Contract Law' },
  { id: 'fc-78', term: 'Duress', definition: 'Threats, violence, constraints, or other action used to coerce someone into doing something against their will or better judgment.', topic: 'Contract Law' },
  { id: 'fc-79', term: 'Frustration of Contract', definition: 'A situation where unforeseen events make the performance of a contract impossible, illegal, or radically different from what was intended.', topic: 'Contract Law' },
  { id: 'fc-80', term: 'Misrepresentation', definition: 'A false statement of fact made by one party to another, which has the effect of inducing that party into the contract.', topic: 'Contract Law' },
  { id: 'fc-81', term: 'Offer', definition: 'A definite promise to be bound provided that certain specified terms are accepted.', topic: 'Contract Law' },
  { id: 'fc-82', term: 'Acceptance', definition: 'An unconditional agreement to all the terms of an offer.', topic: 'Contract Law' },
  { id: 'fc-83', term: 'Specific Performance', definition: 'A court order which requires a party to perform a specific act, usually what is stated in a contract.', topic: 'Contract Law' },
  { id: 'fc-84', term: 'Plea Bargaining', definition: 'An agreement between a defendant and a prosecutor, in which the defendant agrees to plead guilty to a particular charge in return for some concession from the prosecutor.', topic: 'Criminal Law' },
  { id: 'fc-85', term: 'Extortion', definition: 'The practice of obtaining something, especially money, through force or threats.', topic: 'Criminal Law' },
  { id: 'fc-86', term: 'Theft', definition: 'Dishonestly taking any movable property out of the possession of any person without that person\'s consent.', topic: 'Criminal Law' },
  { id: 'fc-87', term: 'Robbery', definition: 'Theft by force or by threatening force.', topic: 'Criminal Law' },
  { id: 'fc-88', term: 'Dacoity', definition: 'Robbery committed by five or more persons.', topic: 'Criminal Law' },
  { id: 'fc-89', term: 'Culpable Homicide', definition: 'The act of causing death with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death.', topic: 'Criminal Law' },
  { id: 'fc-90', term: 'Murder', definition: 'A more severe form of culpable homicide, committed with specific intentions like intent to kill or cause bodily injury sufficient in the ordinary course of nature to cause death.', topic: 'Criminal Law' },
  { id: 'fc-91', term: 'Kidnapping', definition: 'Taking or enticing away a minor or a person of unsound mind out of the keeping of the lawful guardian without their consent.', topic: 'Criminal Law' },
  { id: 'fc-92', term: 'Abduction', definition: 'Forcibly or by deceitful means compelling a person to go from any place.', topic: 'Criminal Law' },
  { id: 'fc-93', term: 'Attorney', definition: 'A person appointed to act for another in business or legal matters; a lawyer.', topic: 'Legal Roles' },
  { id: 'fc-94', term: 'Advocate', definition: 'A person who puts a case on someone else\'s behalf. In India, a legal professional who is registered with the Bar Council.', topic: 'Legal Roles' },
  { id: 'fc-95', term: 'Public Prosecutor', definition: 'A law officer who conducts criminal proceedings on behalf of the state or in the public interest.', topic: 'Legal Roles' },
  { id: 'fc-96', term: 'Bail', definition: 'The temporary release of an accused person awaiting trial, sometimes on condition that a sum of money is lodged to guarantee their appearance in court.', topic: 'Criminal Law' },
  { id: 'fc-97', term: 'Adjournment', definition: 'The postponement of a court session or hearing until another date or time.', topic: 'Legal Procedure' },
  { id: 'fc-98', term: 'Charge Sheet', definition: 'A final report prepared by the police after investigating a case. It contains all the charges against the accused.', topic: 'Criminal Law' },
  { id: 'fc-99', term: 'Testimony', definition: 'A formal written or spoken statement, especially one given in a court of law.', topic: 'Legal Procedure' },
  { id: 'fc-100', term: 'Fundamental Rights', definition: 'A group of rights that have been recognized by a high degree of protection from encroachment. These are the rights which are fundamental for the development of any human being.', topic: 'Constitutional Law' },
  { id: 'fc-101', term: 'Directive Principles', definition: 'Guidelines for the central and state governments of India, to be kept in mind while framing laws and policies. They are not enforceable by any court.', topic: 'Constitutional Law' },
  { id: 'fc-102', term: 'Amendment', definition: 'A formal or official change made to a law, contract, constitution, or other legal document.', topic: 'Constitutional Law' },
  { id: 'fc-103', term: 'Impeachment', definition: 'A formal process in which an official is accused of unlawful activity, the outcome of which may include the removal of that official from office.', topic: 'Constitutional Law' },
  { id: 'fc-104', term: 'Defamation', definition: 'The action of damaging the good reputation of someone; slander or libel.', topic: 'Law of Torts' },
  { id: 'fc-105', term: 'Plaint', definition: 'The first document filed in a civil suit, which states the plaintiff\'s claim and the relief sought.', topic: 'Civil Law' },
  { id: 'fc-106', term: 'Written Statement', definition: 'The defendant\'s reply to the plaint, in which they admit or deny the allegations.', topic: 'Civil Law' },
  { id: 'fc-107', term: 'Will', definition: 'A legal document by which a person expresses their wishes as to how their property is to be distributed at death.', topic: 'Family Law' },
  { id: 'fc-108', term: 'Perjury', definition: 'The offence of willfully telling an untruth or making a misrepresentation under oath.', topic: 'Criminal Law' }
];

export const reels: Reel[] = [
  {
    id: 'reel-1',
    title: 'Actus Reus',
    content: 'The "guilty act." It is the physical component of a crime. No act, no crime!',
    icon: 'Gavel',
  },
  {
    id: 'reel-2',
    title: 'Mens Rea',
    content: 'The "guilty mind." It is the mental element, the intention to commit a crime.',
    icon: 'BrainCircuit',
  },
  {
    id: 'reel-3',
    title: 'Ubi Jus Ibi Remedium',
    content: 'A famous maxim meaning "Where there is a right, there is a remedy." The law will provide a way to enforce a right.',
    icon: 'ShieldCheck',
  },
  {
    id: 'reel-4',
    title: 'Article 14: Equality',
    content: 'The State shall not deny to any person equality before the law or the equal protection of the laws within India.',
    icon: 'Scale',
  },
  {
    id: 'reel-5',
    title: 'Article 21: Heart of Rights',
    content: 'No person shall be deprived of their life or personal liberty except according to the procedure established by law.',
    icon: 'HeartPulse',
  },
  {
    id: 'reel-6',
    title: 'Preamble Keywords',
    content: 'Sovereign, Socialist, Secular, Democratic, Republic. Remember the order!',
    icon: 'BookMark',
  },
  {
    id: 'reel-7',
    title: 'Libel vs. Slander',
    content: 'Libel is written defamation (permanent). Slander is spoken defamation (transient). Both harm reputation!',
    icon: 'MessagesSquare',
  },
  {
    id: 'reel-8',
    title: 'Vicarious Liability',
    content: 'Holding one person responsible for the actions of another, like an employer for an employee\'s torts.',
    icon: 'Users',
  },
  {
    id: 'reel-9',
    title: 'What makes a contract?',
    content: 'Offer + Acceptance + Consideration + Intention to create legal relations = A valid contract.',
    icon: 'FileSignature',
  },
  {
    id: 'reel-10',
    title: 'Void vs. Voidable',
    content: 'A void contract is invalid from the start. A voidable contract is valid until one party chooses to cancel it.',
    icon: 'FileX2',
  },
  {
    id: 'reel-11',
    title: 'Theft vs. Extortion',
    content: 'Theft is taking property without consent. Extortion is getting property by threatening harm.',
    icon: 'AlertTriangle',
  },
  {
    id: 'reel-12',
    title: 'Writ of Habeas Corpus',
    content: 'A powerful writ that means "You may have the body." It protects against unlawful detention.',
    icon: 'Link',
  },
  {
    id: 'reel-13',
    title: 'Basic Structure Doctrine',
    content: 'Parliament can amend the Constitution, but it cannot alter its "basic structure." A landmark ruling from Kesavananda Bharati case.',
    icon: 'Building',
  },
  {
    id: 'reel-14',
    title: 'Donoghue v Stevenson',
    content: 'The famous "snail in the bottle" case that established the modern concept of negligence and the "neighbour principle".',
    icon: 'Bug',
  },
  {
    id: 'reel-15',
    title: 'Res Ipsa Loquitur',
    content: 'A maxim meaning "the thing speaks for itself." Used in torts when negligence is obvious from the facts.',
    icon: 'Pointer',
  },
  {
    id: 'reel-16',
    title: 'Quid Pro Quo',
    content: 'A Latin phrase meaning "something for something." It\'s the foundation of consideration in a contract.',
    icon: 'GitCommit',
  },
  {
    id: 'reel-17',
    title: 'Doli Incapax',
    content: 'A presumption in criminal law that a child under a certain age is incapable of having criminal intent.',
    icon: 'Baby',
  },
  {
    id: 'reel-18',
    title: 'Federalism in India',
    content: 'India is "quasi-federal," a union of states with a strong central government, combining federal and unitary features.',
    icon: 'Library',
  },
  {
    id: 'reel-19',
    title: '42nd Amendment',
    content: 'Known as the "Mini-Constitution" for its vast changes, it added "Socialist," "Secular," and "Integrity" to the Preamble.',
    icon: 'FileEdit',
  },
  {
    id: 'reel-20',
    title: 'President vs. Governor Pardon',
    content: 'The President can pardon a death sentence (Article 72), but a Governor cannot (Article 161).',
    icon: 'UserCheck',
  },
  {
    id: 'reel-21',
    title: 'Double Jeopardy',
    content: 'You cannot be tried for the same crime twice. Protected under Article 20(2) of the Constitution.',
    icon: 'CopyX',
  },
  {
    id: 'reel-22',
    title: 'Right to Privacy',
    content: 'Declared a Fundamental Right under Article 21 by the Supreme Court in the Puttaswamy case.',
    icon: 'EyeOff',
  },
  {
    id: 'reel-23',
    title: 'PIL: Public Interest Litigation',
    content: 'Allows any public-spirited citizen to file a lawsuit on behalf of a group that cannot do so themselves.',
    icon: 'UsersRound',
  },
  {
    id: 'reel-24',
    title: 'Lok Adalat',
    content: 'The "People\'s Court." A form of alternative dispute resolution where disputes are settled by compromise.',
    icon: 'Handshake',
  },
  {
    id: 'reel-25',
    title: 'Ordinance Power',
    content: 'The President (Art. 123) and Governor (Art. 213) can issue laws when Parliament/Legislature is not in session.',
    icon: 'PenSquare',
  },
  {
    id: 'reel-26',
    title: 'Nemo judex in causa sua',
    content: 'A key principle of natural justice: "No one should be a judge in their own cause." Rule against bias!',
    icon: 'ShieldBan',
  },
  {
    id: 'reel-27',
    title: 'Audi alteram partem',
    content: 'Another principle of natural justice: "Let the other side be heard." Right to a fair hearing.',
    icon: 'Ear',
  },
  {
    id: 'reel-28',
    title: 'Bailment',
    content: 'Temporarily transferring possession of goods to another person for a specific purpose (e.g., giving a watch for repair).',
    icon: 'Package',
  },
  {
    id: 'reel-29',
    title: 'Pledge',
    content: 'A type of bailment where goods are delivered as security for a loan. Think "pawn shop".',
    icon: 'Lock',
  },
  {
    id: 'reel-30',
    title: 'Contingent Contract',
    content: 'A contract that depends on the happening or non-happening of a future event (e.g., an insurance contract).',
    icon: 'HelpCircle',
  },
  {
    id: 'reel-31',
    title: 'Adultery is Not a Crime',
    content: 'The Supreme Court struck down Section 497 of the IPC, decriminalizing adultery. It remains a ground for divorce.',
    icon: 'HeartCrack',
  },
  {
    id: 'reel-32',
    title: 'Directive Principles',
    content: 'These are goals and guidelines for the state, but unlike Fundamental Rights, they are not enforceable in court.',
    icon: 'Goal',
  },
  {
    id: 'reel-33',
    title: 'First Woman SC Judge',
    content: 'Justice M. Fathima Beevi was the first woman appointed to the Supreme Court of India in 1989.',
    icon: 'PersonStanding',
  },
  {
    id: 'reel-34',
    title: 'Joint Sitting of Parliament',
    content: 'Called by the President (Art. 108) to resolve a deadlock on a bill between Lok Sabha and Rajya Sabha.',
    icon: 'Combine',
  },
  {
    id: 'reel-35',
    title: 'Money Bill',
    content: 'Can only be introduced in the Lok Sabha. The Speaker decides if a bill is a Money Bill or not.',
    icon: 'IndianRupee',
  },
  {
    id: 'reel-36',
    title: 'Concurrent List',
    content: 'Subjects on which both the Union and State governments can make laws (e.g., education, forests).',
    icon: 'List',
  },
  {
    id: 'reel-37',
    title: 'Assault vs. Battery',
    content: 'Assault is the threat of force. Battery is the actual use of force.',
    icon: 'Wind',
  },
  {
    id: 'reel-38',
    title: 'Nuisance',
    content: 'Unlawful interference with a person\'s use or enjoyment of their land.',
    icon: 'VolumeX',
  },
  {
    id: 'reel-39',
    title: 'Absolute Liability',
    content: 'A strict legal standard for hazardous activities. No exceptions if harm occurs!',
    icon: 'Skull',
  },
  {
    id: 'reel-40',
    title: 'Attorney General of India',
    content: 'The highest law officer in the country, appointed by the President. Has the right to speak in Parliament.',
    icon: 'Briefcase',
  },
  {
    id: 'reel-41',
    title: 'Zero Hour in Parliament',
    content: 'The time immediately following the Question Hour. An Indian parliamentary innovation.',
    icon: 'Hourglass',
  },
  {
    id: 'reel-42',
    title: 'Uniform Civil Code',
    content: 'A DPSP under Article 44, aiming for one law for all citizens in personal matters like marriage and divorce.',
    icon: 'BookUser',
  },
  {
    id: 'reel-43',
    title: 'Right to Vote',
    content: 'A constitutional right under Article 326. The voting age was lowered from 21 to 18 by the 61st Amendment.',
    icon: 'Vote',
  },
  {
    id: 'reel-44',
    title: 'Sources of Law',
    content: 'Primary sources include legislation, precedents (judgments), and customs.',
    icon: 'BookOpenCheck',
  },
  {
    id: 'reel-45',
    title: 'Anticipatory Bail',
    content: 'Bail granted to a person in anticipation of an arrest. A pre-arrest legal remedy.',
    icon: 'ShieldAlert',
  },
  {
    id: 'reel-46',
    title: 'FIR: First Information Report',
    content: 'Information recorded by the police about a cognizable offence. It sets the criminal law process in motion.',
    icon: 'FileText',
  },
  {
    id: 'reel-47',
    title: 'Res Judicata',
    content: 'A legal doctrine meaning "a matter decided." Prevents the same case from being tried again.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'reel-48',
    title: 'What is a "Will"?',
    content: 'A legal document declaring a person\'s wishes regarding the disposal of their property after death.',
    icon: 'ScrollText',
  },
  {
    id: 'reel-49',
    title: 'Indemnity',
    content: 'A contract to save a party from loss caused by the conduct of the promisor or any other person.',
    icon: 'FileHeart',
  },
  {
    id: 'reel-50',
    title: 'Guarantee',
    content: 'A contract to perform the promise or discharge the liability of a third person in case of their default.',
    icon: 'ThumbsUp',
  },
];

export const careerRoadmaps: CareerPath[] = [
  {
    id: 'cr-1',
    title: 'The Judiciary',
    description: 'Path to becoming a judge in the Indian judicial system.',
    steps: [
      { title: 'Step 1: Law Degree (LLB)', content: 'Complete a 3-year or 5-year LLB program from a recognized university.' },
      { title: 'Step 2: Qualify for Judicial Services Examination', content: 'Appear for the competitive exam conducted by state public service commissions. Eligibility often requires a few years of practice as an advocate.' },
      { title: 'Step 3: Become a Civil Judge / Magistrate', content: 'Upon clearing the exam and interview, you start as a Civil Judge (Junior Division) or Judicial Magistrate.' },
      { title: 'Step 4: Promotion & Higher Judiciary', content: 'Through seniority and performance, you can be promoted to Senior Civil Judge, District Judge, and potentially be elevated to the High Court and Supreme Court.' }
    ]
  },
  {
    id: 'cr-2',
    title: 'Corporate Law',
    description: 'Advising businesses on their legal rights, responsibilities, and obligations.',
    steps: [
      { title: 'Step 1: Law Degree (LLB)', content: 'A strong academic record in a 5-year integrated program from a top National Law University (NLU) or a 3-year LLB from a reputable institution is highly valued.' },
      { title: 'Step 2: Internships', content: 'Gain practical experience through multiple internships at corporate law firms, companies, and with senior advocates during your law school years.' },
      { title: 'Step 3: Specialize', content: 'Develop expertise in areas like Mergers & Acquisitions (M&A), Corporate Finance, Intellectual Property (IP), or Compliance. An LLM in a specialized field can be beneficial.' },
      { title: 'Step 4: Join a Law Firm or Company', content: 'Start as an associate in a law firm or as an in-house counsel for a company. Networking and continuous learning are key to growth.' }
    ]
  },
  {
    id: 'cr-3',
    title: 'Litigation',
    description: 'Representing clients in civil or criminal court proceedings.',
    steps: [
      { title: 'Step 1: Law Degree (LLB)', content: 'Obtain your law degree and enroll with your state Bar Council.' },
      { title: 'Step 2: Clear the All India Bar Examination (AIBE)', content: 'Pass the AIBE within two years of enrollment to receive your "Certificate of Practice".' },
      { title: 'Step 3: Join a Senior Advocate or Law Firm', content: 'Work as a junior under a senior advocate to learn courtroom craft, drafting, and client management. This is the most crucial phase for learning.' },
      { title: 'Step 4: Build Your Own Practice', content: 'After gaining sufficient experience (usually 5-7 years), you can start handling your own cases and build an independent practice. Strong oratory and analytical skills are essential.' }
    ]
  },
  {
    id: 'cr-4',
    title: 'Civil Services (UPSC)',
    description: 'Using a law degree to enter administrative services like IAS, IPS, or IFS.',
    steps: [
      { title: 'Step 1: Law Degree (LLB)', content: 'A law degree provides a strong foundation in polity, governance, and social justice, which are key components of the UPSC syllabus.' },
      { title: 'Step 2: Prepare for UPSC Civil Services Exam', content: 'Choose Law as an optional subject, as your degree gives you a significant advantage. Focus on General Studies, current affairs, and essay writing.' },
      { title: 'Step 3: Clear Prelims, Mains, and Interview', content: 'The exam is a three-stage process. Consistent and dedicated preparation is required to succeed.' },
      { title: 'Step 4: Join the Service', content: 'Upon selection, you will undergo training at LBSNAA (for IAS) or other respective academies and then join the government as a civil servant.' }
    ]
  }
];

export const caseSimulations: CaseSimulation[] = [
  {
    id: 'cs-1',
    title: 'The Cheque Bounce Case',
    scenario: 'Your client, Mr. Sharma, gave a cheque of ₹50,000 to Mr. Gupta for goods supplied. The cheque was dishonored due to "insufficient funds". Mr. Gupta sent a legal notice, but Mr. Sharma could not pay within the stipulated time. The case is now in court.',
    playerRole: 'You are the defense lawyer for Mr. Sharma. Your goal is to defend him against the charge under Section 138 of the Negotiable Instruments Act.',
  },
  {
    id: 'cs-2',
    title: 'The Trespass Dispute',
    scenario: 'Your client, Mrs. Verma, owns a residential property. Her neighbor, Mr. Singh, has constructed a shed that partially extends over her property line by two feet. Repeated requests to remove the encroachment have been ignored.',
    playerRole: 'You are the lawyer for Mrs. Verma. Your goal is to argue for an injunction to have the shed removed and claim damages for trespass.',
  },
];

export const revisionTopics: string[] = [
  'Constitution',
  'Legal Aptitude',
  'General Knowledge',
  'English',
  'Logical Reasoning',
  'Current Affairs',
  'Legal Maxims'
];

export const visualLawItems: VisualLawItem[] = [
  {
    id: 'vl-1',
    title: 'How a Bill Becomes an Act',
    description: 'A visual flowchart explaining the journey of a bill through both houses of the Indian Parliament to become a law.',
    category: 'Constitution',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'parliament law'
  },
  {
    id: 'vl-2',
    title: 'Hierarchy of Indian Courts',
    description: 'A diagram showing the structure of the Indian judicial system, from the Supreme Court to the subordinate courts.',
    category: 'Constitution',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'court hierarchy'
  },
  {
    id: 'vl-3',
    title: 'Elements of a Valid Contract',
    description: 'A mind map illustrating the essential components required for an agreement to be a legally enforceable contract.',
    category: 'Legal Aptitude',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'contract flowchart'
  },
  {
    id: 'vl-4',
    title: 'The Process of a Criminal Trial',
    description: 'A step-by-step flowchart of a criminal trial in India, from the filing of an FIR to the final judgment.',
    category: 'Legal Aptitude',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'trial process'
  }
];




