"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Scale, 
  Search,
  Star,
  Copy,
  Check,
  FileText,
  ChevronDown,
  ChevronUp,
  Bookmark
} from "lucide-react";

interface BareActSection {
  id: string;
  section: string;
  title: string;
  content: string;
  keywords: string[];
  isImportant: boolean;
}

interface BareAct {
  id: string;
  name: string;
  shortName: string;
  year: number;
  description: string;
  sections: BareActSection[];
}

const bareActsData: BareAct[] = [
  {
    id: "constitution",
    name: "Constitution of India",
    shortName: "COI",
    year: 1950,
    description: "Fundamental law of the land. Part III (Fundamental Rights) and Part IV (DPSPs) most tested.",
    sections: [
      {
        id: "art12",
        section: "Article 12",
        title: "Definition of State",
        content: "In this Part, unless the context otherwise requires, \"the State\" includes the Government and Parliament of India and the Government and the Legislature of each of the States and all local or other authorities within the territory of India or under the control of the Government of India.",
        keywords: ["state", "government", "authority", "fundamental rights"],
        isImportant: true
      },
      {
        id: "art13",
        section: "Article 13",
        title: "Laws inconsistent with Fundamental Rights",
        content: "(1) All laws in force immediately before commencement of Constitution, inconsistent with Part III, void to extent of inconsistency. (2) State shall not make any law taking away or abridging FRs - void to extent of contravention. (3) \"Law\" includes ordinance, order, bye-law, rule, regulation, notification, custom.",
        keywords: ["void", "inconsistent", "judicial review", "pre-constitutional"],
        isImportant: true
      },
      {
        id: "art14",
        section: "Article 14",
        title: "Equality before law",
        content: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
        keywords: ["equality", "discrimination", "reasonable classification", "rule of law"],
        isImportant: true
      },
      {
        id: "art15",
        section: "Article 15",
        title: "Prohibition of discrimination",
        content: "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. The Constitution also permits special provisions for women, children, socially and educationally backward classes, SCs and STs.",
        keywords: ["discrimination", "religion", "race", "caste", "sex", "reservation"],
        isImportant: true
      },
      {
        id: "art16",
        section: "Article 16",
        title: "Equality of opportunity in public employment",
        content: "There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State, subject to constitutionally valid reservations.",
        keywords: ["public employment", "equality of opportunity", "reservation", "state services"],
        isImportant: true
      },
      {
        id: "art19",
        section: "Article 19",
        title: "Protection of certain rights regarding freedom",
        content: "(1) All citizens have the right to: (a) freedom of speech and expression; (b) assemble peaceably and without arms; (c) form associations or unions; (d) move freely throughout India; (e) reside and settle in any part of India; (g) practice any profession, or carry on any occupation, trade or business.",
        keywords: ["freedom", "speech", "expression", "assembly", "association", "movement", "profession"],
        isImportant: true
      },
      {
        id: "art20",
        section: "Article 20",
        title: "Protection in respect of conviction for offenses",
        content: "No person shall be convicted for an act not an offense at the time of commission (no ex post facto criminal law), nor be prosecuted and punished for the same offense more than once (double jeopardy), nor be compelled to be a witness against himself (self-incrimination).",
        keywords: ["ex post facto", "double jeopardy", "self-incrimination", "criminal safeguards"],
        isImportant: true
      },
      {
        id: "art21",
        section: "Article 21",
        title: "Protection of life and personal liberty",
        content: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
        keywords: ["life", "liberty", "procedure established by law", "due process", "dignity"],
        isImportant: true
      },
      {
        id: "art22",
        section: "Article 22",
        title: "Protection against arrest and detention",
        content: "A person arrested must be informed of grounds of arrest, has right to consult and be defended by a legal practitioner, and must be produced before nearest Magistrate within 24 hours. Special provisions exist for preventive detention.",
        keywords: ["arrest", "detention", "24 hours", "legal counsel", "preventive detention"],
        isImportant: true
      },
      {
        id: "art21a",
        section: "Article 21A",
        title: "Right to Education",
        content: "The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine. (Inserted by 86th Amendment, 2002)",
        keywords: ["education", "children", "free", "compulsory", "86th amendment"],
        isImportant: true
      },
      {
        id: "art32",
        section: "Article 32",
        title: "Remedies for enforcement of Fundamental Rights",
        content: "(1) Right to move Supreme Court for enforcement of FRs is guaranteed. (2) SC has power to issue directions, orders, writs including habeas corpus, mandamus, prohibition, quo warranto, certiorari. (4) This right shall not be suspended except as provided by Constitution.",
        keywords: ["writs", "supreme court", "habeas corpus", "mandamus", "heart and soul"],
        isImportant: true
      },
      {
        id: "art226",
        section: "Article 226",
        title: "Power of High Courts to issue writs",
        content: "(1) Every High Court shall have power to issue directions, orders or writs including habeas corpus, mandamus, prohibition, quo warranto, certiorari for enforcement of FRs and for any other purpose.",
        keywords: ["high court", "writs", "wider jurisdiction", "any other purpose"],
        isImportant: true
      },
      {
        id: "art39a",
        section: "Article 39A",
        title: "Equal justice and free legal aid",
        content: "The State shall secure that the operation of the legal system promotes justice on a basis of equal opportunity, and shall provide free legal aid to ensure opportunities for securing justice are not denied because of economic or other disabilities.",
        keywords: ["legal aid", "equal justice", "DPSP", "access to justice"],
        isImportant: true
      },
      {
        id: "art368",
        section: "Article 368",
        title: "Power of Parliament to amend Constitution",
        content: "(1) Parliament may amend by way of addition, variation or repeal any provision. (2) Amendment by Bill passed in each House by majority of total membership and not less than 2/3 of members present and voting. Some provisions require ratification by 1/2 of State Legislatures.",
        keywords: ["amendment", "basic structure", "special majority", "ratification"],
        isImportant: true
      }
    ]
  },
  {
    id: "ipc",
    name: "Indian Penal Code / Bharatiya Nyaya Sanhita",
    shortName: "IPC/BNS",
    year: 1860,
    description: "Substantive criminal law. Defines offenses and punishments. Now replaced by BNS, 2023.",
    sections: [
      {
        id: "s299",
        section: "Section 299/100",
        title: "Culpable homicide",
        content: "Whoever causes death by doing an act with intention of causing death, OR with intention of causing such bodily injury as is likely to cause death, OR with knowledge that likely to cause death, commits culpable homicide.",
        keywords: ["culpable homicide", "intention", "knowledge", "bodily injury"],
        isImportant: true
      },
      {
        id: "s300",
        section: "Section 300/101",
        title: "Murder",
        content: "Culpable homicide is murder if: (1) Act done with intention of causing death; (2) Act done with intention of causing bodily injury known to be likely to cause death; (3) Act done with intention of causing bodily injury sufficient in ordinary course of nature to cause death; (4) Act so imminently dangerous that it must in all probability cause death.",
        keywords: ["murder", "intention", "sufficient in ordinary course", "imminently dangerous"],
        isImportant: true
      },
      {
        id: "s304a",
        section: "Section 304A/106",
        title: "Death by negligence",
        content: "Whoever causes death by rash or negligent act not amounting to culpable homicide shall be punished with imprisonment up to 2 years, or fine, or both.",
        keywords: ["negligence", "rash", "death", "not culpable homicide"],
        isImportant: true
      },
      {
        id: "s34",
        section: "Section 34/3(5)",
        title: "Acts done by several persons in furtherance of common intention",
        content: "When a criminal act is done by several persons in furtherance of common intention of all, each person is liable for that act as if it were done by him alone.",
        keywords: ["common intention", "joint liability", "group offense", "participation"],
        isImportant: true
      },
      {
        id: "s120b",
        section: "Section 120B/61",
        title: "Criminal conspiracy",
        content: "When two or more persons agree to do an illegal act, or a legal act by illegal means, they may be guilty of criminal conspiracy. Punishment depends on gravity and object of conspiracy.",
        keywords: ["conspiracy", "agreement", "illegal act", "joint planning"],
        isImportant: true
      },
      {
        id: "s306",
        section: "Section 306/108",
        title: "Abetment of suicide",
        content: "If any person commits suicide, whoever abets commission of such suicide shall be punished with imprisonment up to 10 years and liable to fine.",
        keywords: ["abetment", "suicide", "instigation"],
        isImportant: true
      },
      {
        id: "s378",
        section: "Section 378/303",
        title: "Theft",
        content: "Whoever intending to take dishonestly any moveable property out of possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
        keywords: ["theft", "dishonest intention", "moveable property", "without consent"],
        isImportant: true
      },
      {
        id: "s375",
        section: "Section 375/63",
        title: "Rape (core definition)",
        content: "Defines circumstances under which sexual acts constitute rape, centering on absence of valid consent and statutory protection in law. Age and consent principles are strictly applied.",
        keywords: ["rape", "consent", "sexual offense", "women protection"],
        isImportant: true
      },
      {
        id: "s390",
        section: "Section 390/309",
        title: "Robbery",
        content: "When theft is robbery: If in committing theft, or in carrying away property obtained by theft, offender voluntarily causes or attempts to cause death, hurt, or wrongful restraint, or fear of instant death, instant hurt, or instant wrongful restraint.",
        keywords: ["robbery", "theft", "hurt", "fear", "force"],
        isImportant: true
      },
      {
        id: "s420",
        section: "Section 420/318",
        title: "Cheating and dishonestly inducing delivery of property",
        content: "Whoever cheats and thereby dishonestly induces person deceived to deliver any property, or to make, alter, destroy valuable security, shall be punished with imprisonment up to 7 years and fine.",
        keywords: ["cheating", "fraud", "deception", "property"],
        isImportant: true
      }
    ]
  },
  {
    id: "crpc",
    name: "Code of Criminal Procedure / BNSS",
    shortName: "CrPC/BNSS",
    year: 1973,
    description: "Procedural law for criminal courts. Governs investigation, arrest, bail, trial. Now BNSS, 2023.",
    sections: [
      {
        id: "s41",
        section: "Section 41/35",
        title: "When police may arrest without warrant",
        content: "Police officer may arrest without warrant: (a) Person committing cognizable offense in presence; (b) Against whom reasonable complaint/credible information exists; (c) Proclaimed offender; (d) In possession of stolen property; (e) Obstructs police officer; (f) Escaped from lawful custody; (g) Suspected deserter from Armed Forces.",
        keywords: ["arrest", "without warrant", "cognizable", "police officer"],
        isImportant: true
      },
      {
        id: "s50",
        section: "Section 50/47",
        title: "Person arrested to be informed of grounds and bail",
        content: "Every police officer arresting without warrant shall communicate full particulars of the offense or other grounds for arrest. In bailable offenses, the person must be informed of right to bail.",
        keywords: ["grounds of arrest", "right to bail", "communication of arrest", "fair procedure"],
        isImportant: true
      },
      {
        id: "s57",
        section: "Section 57/58",
        title: "Person arrested not to be detained more than 24 hours",
        content: "No police officer shall detain an arrested person for longer than 24 hours without special order of a Magistrate, excluding time necessary for journey to Magistrate.",
        keywords: ["24 hours", "illegal detention", "magistrate", "custody safeguards"],
        isImportant: true
      },
      {
        id: "s154",
        section: "Section 154/173",
        title: "Information in cognizable cases (FIR)",
        content: "Every information relating to commission of cognizable offense, if given orally, shall be reduced to writing by officer in charge of police station. Read over to informant, signed by informant, entered in a book. Copy given to informant free of cost.",
        keywords: ["FIR", "first information report", "cognizable", "police station"],
        isImportant: true
      },
      {
        id: "s161",
        section: "Section 161/180",
        title: "Examination of witnesses by police",
        content: "Police officer making investigation may examine orally any person supposed to be acquainted with facts. Such person bound to answer all questions except those tending to expose him to criminal charge.",
        keywords: ["examination", "witnesses", "investigation", "self-incrimination"],
        isImportant: false
      },
      {
        id: "s167",
        section: "Section 167/187",
        title: "Procedure for investigation not completed in 24 hours",
        content: "Accused produced before Magistrate. If investigation cannot be completed in 24 hours and there are grounds for believing accusation is well-founded, Magistrate may authorize detention (15 days if any magistrate, total 60/90 days judicial custody).",
        keywords: ["remand", "custody", "24 hours", "60 days", "90 days", "default bail"],
        isImportant: true
      },
      {
        id: "s173",
        section: "Section 173/193",
        title: "Report of police officer on completion of investigation (Chargesheet)",
        content: "As soon as investigation completed, officer in charge shall forward report to Magistrate. Report shall set forth names, nature of information, names of persons who appear to be acquainted with facts, whether accused in custody, whether evidence sufficient.",
        keywords: ["chargesheet", "final report", "police report", "prosecution"],
        isImportant: true
      },
      {
        id: "s436",
        section: "Section 436/478",
        title: "Bail in bailable offenses",
        content: "When person accused of bailable offense is arrested or detained, he shall be released on bail. But if he is indigent and unable to furnish surety within a week, he may be released on personal bond.",
        keywords: ["bail", "bailable offense", "right to bail", "surety"],
        isImportant: true
      },
      {
        id: "s437",
        section: "Section 437/480",
        title: "Bail in non-bailable offenses",
        content: "Person accused of non-bailable offense may be released on bail by court if: (a) Not reasonable grounds for believing he committed offense; OR (b) Appears to be under 16 years, woman, sick, infirm.",
        keywords: ["non-bailable", "discretionary bail", "anticipatory", "conditions"],
        isImportant: true
      },
      {
        id: "s438",
        section: "Section 438/482",
        title: "Anticipatory Bail",
        content: "When any person has reason to believe he may be arrested on accusation of non-bailable offense, he may apply to High Court or Sessions Court for direction that in event of arrest he shall be released on bail.",
        keywords: ["anticipatory bail", "pre-arrest bail", "apprehension", "sessions court"],
        isImportant: true
      }
    ]
  },
  {
    id: "evidence",
    name: "Indian Evidence Act / BSA",
    shortName: "IEA/BSA",
    year: 1872,
    description: "Law relating to relevance and admissibility of evidence. Now replaced by BSA, 2023.",
    sections: [
      {
        id: "s3",
        section: "Section 3/2",
        title: "Definitions - Evidence, Fact, Document",
        content: "Evidence: (1) Statements made by witnesses - oral evidence; (2) Documents and electronic records produced - documentary evidence. Fact: Thing capable of being perceived by senses or any mental condition. Document: Any matter expressed on any substance.",
        keywords: ["evidence", "oral", "documentary", "fact", "document"],
        isImportant: true
      },
      {
        id: "s17",
        section: "Section 17/15",
        title: "Admission",
        content: "An admission is a statement, oral or documentary or contained in electronic form, which suggests any inference as to any fact in issue or relevant fact, and which is made by any person under circumstances hereinafter mentioned.",
        keywords: ["admission", "statement", "inference", "against interest"],
        isImportant: true
      },
      {
        id: "s24",
        section: "Section 24/22",
        title: "Confession caused by inducement, threat, or promise",
        content: "Confession made by accused is irrelevant if: Made under inducement, threat or promise having reference to charge, proceeding from person in authority, and sufficient in opinion of court to give accused grounds for supposing he would gain advantage or avoid evil.",
        keywords: ["confession", "inducement", "threat", "promise", "irrelevant"],
        isImportant: true
      },
      {
        id: "s32",
        section: "Section 32/26",
        title: "Statements by persons who cannot be called as witnesses",
        content: "Statements of a person who is dead or cannot be found may be relevant in specific situations, including statements as to cause of death and circumstances of transaction resulting in death.",
        keywords: ["dying declaration", "relevancy", "deceased witness", "cause of death"],
        isImportant: true
      },
      {
        id: "s25",
        section: "Section 25/23",
        title: "Confession to police officer not to be proved",
        content: "No confession made to a police officer shall be proved as against a person accused of any offense.",
        keywords: ["confession", "police officer", "inadmissible"],
        isImportant: true
      },
      {
        id: "s27",
        section: "Section 27/25",
        title: "Discovery information from accused",
        content: "When any fact is deposed to as discovered in consequence of information received from a person accused of any offense, in custody of police officer, so much of such information, whether it amounts to confession or not, as relates distinctly to the fact thereby discovered, may be proved.",
        keywords: ["discovery", "information", "accused in custody", "fact discovered"],
        isImportant: true
      },
      {
        id: "s45",
        section: "Section 45/39",
        title: "Opinion of experts",
        content: "When court has to form an opinion upon a point of foreign law, science, art, identity of handwriting or finger impressions, the opinions of persons specially skilled in such foreign law, science, art are relevant facts. Such persons are called experts.",
        keywords: ["expert", "opinion", "skilled person", "science", "handwriting"],
        isImportant: true
      },
      {
        id: "s101",
        section: "Section 101/104",
        title: "Burden of proof",
        content: "Whoever desires any court to give judgment as to any legal right or liability dependent on existence of facts which he asserts, must prove those facts exist. When a person is bound to prove existence of any fact, burden of proof lies on that person.",
        keywords: ["burden of proof", "assertion", "prove", "legal right"],
        isImportant: true
      },
      {
        id: "s106",
        section: "Section 106/108",
        title: "Burden of proving fact especially within knowledge",
        content: "When any fact is especially within the knowledge of any person, the burden of proving that fact is upon him.",
        keywords: ["special knowledge", "burden", "exclusive knowledge"],
        isImportant: true
      }
    ]
  },
  {
    id: "contract",
    name: "Indian Contract Act",
    shortName: "ICA",
    year: 1872,
    description: "Law relating to contracts. Foundation of commercial and civil transactions.",
    sections: [
      {
        id: "s2",
        section: "Section 2",
        title: "Definitions - Offer, Acceptance, Promise, Agreement",
        content: "(a) Proposal/Offer: When one person signifies to another his willingness to do or abstain from doing anything with a view to obtaining assent. (b) When person to whom proposal is made signifies assent thereto, proposal is said to be accepted and becomes a promise. (e) Every promise and every set of promises forming consideration for each other is an agreement.",
        keywords: ["offer", "acceptance", "promise", "agreement", "proposal"],
        isImportant: true
      },
      {
        id: "s10",
        section: "Section 10",
        title: "Valid Contract",
        content: "All agreements are contracts if they are made by free consent of parties competent to contract, for a lawful consideration and with a lawful object, and are not expressly declared to be void.",
        keywords: ["valid contract", "free consent", "competent", "lawful consideration", "lawful object"],
        isImportant: true
      },
      {
        id: "s11",
        section: "Section 11",
        title: "Who are competent to contract",
        content: "Every person is competent to contract who is of age of majority, of sound mind, and not disqualified from contracting by any law to which he is subject.",
        keywords: ["competency", "majority", "sound mind", "disqualification"],
        isImportant: true
      },
      {
        id: "s14",
        section: "Section 14",
        title: "Free Consent",
        content: "Consent is said to be free when it is not caused by: (1) Coercion (Section 15); (2) Undue influence (Section 16); (3) Fraud (Section 17); (4) Misrepresentation (Section 18); (5) Mistake (Section 20, 21, 22).",
        keywords: ["free consent", "coercion", "undue influence", "fraud", "misrepresentation", "mistake"],
        isImportant: true
      },
      {
        id: "s27-ica",
        section: "Section 27",
        title: "Agreement in restraint of trade",
        content: "Every agreement by which anyone is restrained from exercising a lawful profession, trade or business of any kind is, to that extent, void, subject to recognized statutory exceptions.",
        keywords: ["restraint of trade", "void agreements", "public policy", "business"],
        isImportant: true
      },
      {
        id: "s23",
        section: "Section 23",
        title: "Unlawful consideration and object",
        content: "Consideration or object of an agreement is unlawful if: (a) Forbidden by law; (b) Would defeat provisions of any law; (c) Fraudulent; (d) Involves injury to person or property of another; (e) Court regards it as immoral or opposed to public policy.",
        keywords: ["unlawful", "forbidden", "fraudulent", "immoral", "public policy"],
        isImportant: true
      },
      {
        id: "s73",
        section: "Section 73",
        title: "Compensation for breach",
        content: "When a contract has been broken, party who suffers by such breach is entitled to receive compensation for any loss or damage caused to him thereby, which naturally arose in usual course of things from such breach, or which parties knew was likely to result.",
        keywords: ["damages", "compensation", "breach", "natural consequence", "remoteness"],
        isImportant: true
      }
    ]
  },
  {
    id: "tpa",
    name: "Transfer of Property Act",
    shortName: "TPA",
    year: 1882,
    description: "Core property-transfer statute for immovable property transactions.",
    sections: [
      {
        id: "tpa-s5",
        section: "Section 5",
        title: "Transfer of property defined",
        content: "Transfer of property means an act by which a living person conveys property, in present or future, to one or more other living persons, or to himself and one or more other living persons.",
        keywords: ["transfer", "living person", "conveyance", "immovable property"],
        isImportant: true
      },
      {
        id: "tpa-s52",
        section: "Section 52",
        title: "Lis pendens",
        content: "During pendency of a suit concerning rights to immovable property, the property cannot be transferred or otherwise dealt with to affect rights of other party under any decree or order.",
        keywords: ["lis pendens", "pending litigation", "immovable property", "transfer restriction"],
        isImportant: true
      },
      {
        id: "tpa-s53a",
        section: "Section 53A",
        title: "Part performance",
        content: "Where transferee has taken possession in part performance of a contract and is willing to perform his part, transferor is debarred from enforcing rights inconsistent with contract, subject to statutory conditions.",
        keywords: ["part performance", "possession", "equity", "contract"],
        isImportant: true
      },
      {
        id: "tpa-s54",
        section: "Section 54",
        title: "Sale",
        content: "Sale is transfer of ownership in exchange for a price paid, promised, or part-paid and part-promised. For tangible immovable property above prescribed value, a registered instrument is required.",
        keywords: ["sale", "ownership", "price", "registered instrument"],
        isImportant: true
      },
      {
        id: "tpa-s58",
        section: "Section 58",
        title: "Mortgage",
        content: "Mortgage is transfer of an interest in specific immovable property for securing payment of money advanced, existing or future debt, or performance of an engagement giving rise to pecuniary liability.",
        keywords: ["mortgage", "security", "interest in property", "debt"],
        isImportant: true
      }
    ]
  },
  {
    id: "sra",
    name: "Specific Relief Act",
    shortName: "SRA",
    year: 1963,
    description: "Provides equitable remedies such as specific performance and injunctions.",
    sections: [
      {
        id: "sra-s10",
        section: "Section 10",
        title: "Specific performance of contracts",
        content: "Specific performance may be enforced subject to provisions of the Act where monetary compensation is not an adequate remedy and legal requirements are fulfilled.",
        keywords: ["specific performance", "equitable remedy", "contract enforcement"],
        isImportant: true
      },
      {
        id: "sra-s14",
        section: "Section 14",
        title: "Contracts not specifically enforceable",
        content: "Certain contracts are not specifically enforceable, including those depending on personal qualifications or those that are determinable by nature.",
        keywords: ["not enforceable", "determinable contracts", "personal service"],
        isImportant: true
      },
      {
        id: "sra-s16",
        section: "Section 16",
        title: "Personal bars to relief",
        content: "Specific performance cannot be enforced in favor of a person who has not performed or has not been ready and willing to perform essential terms of the contract.",
        keywords: ["ready and willing", "personal bar", "plaintiff conduct"],
        isImportant: true
      },
      {
        id: "sra-s20",
        section: "Section 20",
        title: "Substituted performance",
        content: "Where contract is breached, party may have performance completed through a third party or own agency and recover expenses from defaulting party, subject to statutory conditions.",
        keywords: ["substituted performance", "breach", "recovery of expenses"],
        isImportant: false
      },
      {
        id: "sra-s34",
        section: "Section 34",
        title: "Declaratory decrees",
        content: "Any person entitled to any legal character or right as to property may seek a declaration from court, and court may make such declaration where appropriate.",
        keywords: ["declaration", "legal character", "property rights", "civil remedy"],
        isImportant: true
      }
    ]
  }
];

export default function BareActsPage() {
  const [activeAct, setActiveAct] = useState<string>("constitution");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [bookmarkedSections, setBookmarkedSections] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const toggleBookmark = (id: string) => {
    const newBookmarked = new Set(bookmarkedSections);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarkedSections(newBookmarked);
  };

  const copyToClipboard = async (content: string, id: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentAct = bareActsData.find(act => act.id === activeAct);

  const filteredSections = currentAct?.sections.filter(section => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      section.section.toLowerCase().includes(query) ||
      section.title.toLowerCase().includes(query) ||
      section.content.toLowerCase().includes(query) ||
      section.keywords.some(k => k.toLowerCase().includes(query))
    );
  }) || [];

  const bookmarkedItems = bareActsData.flatMap(act => 
    act.sections.filter(s => bookmarkedSections.has(s.id)).map(s => ({...s, actName: act.shortName}))
  );

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-5xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <Scale className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Bare Acts Reference</h1>
            <p className="text-muted-foreground">Key provisions from important Indian statutes</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search sections, titles, keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-amber-600" />
              <span className="text-sm text-muted-foreground">Acts</span>
            </div>
            <p className="text-2xl font-bold mt-1">{bareActsData.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Sections</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {bareActsData.reduce((acc, act) => acc + act.sections.length, 0)}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-muted-foreground">Important</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {bareActsData.reduce((acc, act) => acc + act.sections.filter(s => s.isImportant).length, 0)}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Bookmark className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-muted-foreground">Bookmarked</span>
            </div>
            <p className="text-2xl font-bold mt-1">{bookmarkedSections.size}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeAct} onValueChange={setActiveAct}>
        <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-6 h-auto">
          {bareActsData.map((act) => (
            <TabsTrigger 
              key={act.id} 
              value={act.id} 
              className="text-xs md:text-sm py-2"
            >
              {act.shortName}
            </TabsTrigger>
          ))}
        </TabsList>

        {bareActsData.map((act) => (
          <TabsContent key={act.id} value={act.id}>
            {/* Act Info */}
            <Card className="mb-6 bg-gradient-to-br from-slate-500/10 to-slate-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{act.name}</CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="mr-2">{act.year}</Badge>
                  {act.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Sections */}
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-3">
                {filteredSections.map((section) => {
                  const isExpanded = expandedSections.has(section.id);
                  const isBookmarked = bookmarkedSections.has(section.id);

                  return (
                    <Card 
                      key={section.id} 
                      className={`transition-all ${isBookmarked ? 'border-purple-500/30 bg-purple-500/5' : ''}`}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 cursor-pointer" onClick={() => toggleExpand(section.id)}>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="secondary" className="font-mono">
                                {section.section}
                              </Badge>
                              {section.isImportant && (
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                              )}
                            </div>
                            <CardTitle className="text-base">{section.title}</CardTitle>
                          </div>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => toggleBookmark(section.id)}
                            >
                              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'text-purple-500 fill-purple-500' : 'text-muted-foreground'}`} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => copyToClipboard(`${section.section}: ${section.title}\n\n${section.content}`, section.id)}
                            >
                              {copiedId === section.id ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Copy className="h-4 w-4 text-muted-foreground" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => toggleExpand(section.id)}
                            >
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>

                      {isExpanded && (
                        <CardContent className="pt-0">
                          <div className="p-3 rounded-lg bg-muted/50 mb-3">
                            <p className="text-sm leading-relaxed">{section.content}</p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {section.keywords.map((keyword, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}

                {filteredSections.length === 0 && (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No sections found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>

      {/* Bookmarked Quick Access */}
      {bookmarkedItems.length > 0 && (
        <Card className="mt-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bookmark className="h-5 w-5 text-purple-600" />
              Bookmarked Sections ({bookmarkedItems.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {bookmarkedItems.map((item) => (
                <Badge 
                  key={item.id} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-secondary/80"
                  onClick={() => {
                    setActiveAct(item.id.startsWith('art') ? 'constitution' : 
                                 item.id.startsWith('s') && parseInt(item.section.split('/')[0].replace('Section ', '')) < 200 ? 
                                 (item.actName === 'ICA' ? 'contract' : 'ipc') : 
                                 item.actName === 'CrPC/BNSS' ? 'crpc' : 
                                 item.actName === 'IEA/BSA' ? 'evidence' : 'constitution');
                    setExpandedSections(new Set([item.id]));
                  }}
                >
                  {item.actName} - {item.section}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
