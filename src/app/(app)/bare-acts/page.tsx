"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Star,
  Copy,
  Check,
  ChevronDown,
  Bookmark,
  FileText,
  ArrowLeft,
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
        content: "No person convicted except for breach of law. No person subjected to penalty greater than law at time of offense. No double jeopardy. No person compelled to be witness against self.",
        keywords: ["conviction", "protection", "double jeopardy", "retrospective", "self-incrimination"],
        isImportant: true
      },
      {
        id: "art21",
        section: "Article 21",
        title: "Right to life and personal liberty",
        content: "No person deprived of life or personal liberty except by procedure established by law. Interpreted broadly to include right to health, education, privacy, dignity, livelihood.",
        keywords: ["life", "liberty", "dignity", "procedure", "fundamental", "extensive interpretation"],
        isImportant: true
      },
      {
        id: "art22",
        section: "Article 22",
        title: "Protection against arrest and detention",
        content: "Person arrested informed of grounds and right to bail (bailable offences). No detention beyond 24 hours without magistrate order. Legal aid provided.",
        keywords: ["arrest", "detention", "bail", "legal aid", "custody", "arrest procedure"],
        isImportant: true
      },
      {
        id: "art23",
        section: "Article 23",
        title: "Prohibition of traffic in human beings and forced labor",
        content: "Traffic in human beings and begar and forced labor prohibited. Criminal offense punishable by law.",
        keywords: ["trafficking", "forced labor", "begar", "exploitation", "human rights"],
        isImportant: true
      },
      {
        id: "art24",
        section: "Article 24",
        title: "Prohibition of employment of children",
        content: "No child below 14 years employed in factories, mines or hazardous processes or work.",
        keywords: ["child labor", "children protection", "hazardous work", "factories"],
        isImportant: false
      },
      {
        id: "art25",
        section: "Article 25",
        title: "Freedom of religion",
        content: "All persons equally entitled to freedom of conscience and right to profess, practice, propagate religion. Subject to public order, morality, health and other FR provisions.",
        keywords: ["freedom", "religion", "conscience", "custom", "worship", "propagate"],
        isImportant: false
      },
      {
        id: "art26",
        section: "Article 26",
        title: "Freedom to manage religious affairs",
        content: "Every denomination has right to establish institutions, manage own affairs, own and acquire property, administer property per law.",
        keywords: ["denomination", "religious institutions", "property rights", "management"],
        isImportant: false
      },
      {
        id: "art27",
        section: "Article 27",
        title: "Freedom as to taxes for religion",
        content: "No person compelled to pay tax specifically appropriated for promotion/maintenance of particular religion or denomination.",
        keywords: ["tax", "religion", "state", "secular", "funding"],
        isImportant: false
      },
      {
        id: "art28",
        section: "Article 28",
        title: "Freedom as to religious instruction in schools",
        content: "No religious instruction in state-funded institutions. No person required to attend religious worship against own beliefs.",
        keywords: ["schools", "religious instruction", "education", "students", "freedom"],
        isImportant: false
      },
      {
        id: "art29",
        section: "Article 29",
        title: "Rights of minorities - Cultural and linguistic",
        content: "Minorities have right to conserve language, script, culture. No citizen denied admission based on religion, race, caste, language.",
        keywords: ["minorities", "language", "culture", "script", "non-discrimination"],
        isImportant: true
      },
      {
        id: "art30",
        section: "Article 30",
        title: "Rights of minorities - Educational",
        content: "All minorities have right to establish and administer educational institutions. State cannot discriminate in aid based on religion.",
        keywords: ["minorities", "education", "institutions", "funding", "autonomy"],
        isImportant: true
      },
      {
        id: "art31",
        section: "Article 31",
        title: "Right to property (deleted)",
        content: "Deleted by 44th Amendment. Property is now a legal right under Article 300A, not fundamental right.",
        keywords: ["property", "deleted amendment", "legal right", "acquisition"],
        isImportant: false
      },
      {
        id: "art32",
        section: "Article 32",
        title: "Right to constitutional remedies",
        content: "Right to move Supreme Court for enforcement of fundamental rights. SC can issue writs (habeas corpus, mandamus, prohibition, quo warranto, certiorari).",
        keywords: ["remedies", "writs", "enforcement", "habeas corpus", "mandamus", "supreme court"],
        isImportant: true
      },
      {
        id: "art39a",
        section: "Article 39(a)",
        title: "Adequate means of livelihood (DPSP)",
        content: "State shall direct policy securing right to adequate means of livelihood for all citizens. Directive principle for socio-economic justice.",
        keywords: ["livelihood", "employment", "welfare", "economic justice", "directive principle"],
        isImportant: true
      }
    ]
  },
  {
    id: "ipc",
    name: "Indian Penal Code / Bharatiya Nyaya Sanhita",
    shortName: "IPC/BNS",
    year: 1860,
    description: "Criminal law. Defines offences and punishments. Transitioning to Bharatiya Nyaya Sanhita (2023).",
    sections: [
      {
        id: "s34",
        section: "Section 34/31",
        title: "Acts of several persons in furtherance of common intention",
        content: "When act committed by several persons in furtherance of common intention, each liable for act done by any person in commission as if done by him alone.",
        keywords: ["common intention", "joint liability", "co-conspirators", "vicarious liability"],
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
        section: "Section 167/88",
        title: "Procedure and duration of custody",
        content: "Arrested person produced before magistrate within 24 hours. Magistrate can remand to custody or release. Custody remand initial 15 days; can extend. After investigation, person released or charge-sheeted.",
        keywords: ["remand", "custody", "magistrate", "investigation", "charge-sheet"],
        isImportant: true
      }
    ]
  },
  {
    id: "evidence",
    name: "Indian Evidence Act / Bharatiya Sakshya Adhiniyam",
    shortName: "IEA/BSA",
    year: 1872,
    description: "Law of evidence. Governs admissibility of evidence, examination of witnesses, burden of proof.",
    sections: [
      {
        id: "s3",
        section: "Section 3",
        title: "Interpretation clause (Evidence)",
        content: "Defines terms: \"Evidence\" means judicial evidence arising from testimony, documents, circumstantial evidence. \"Fact\" includes anything past, present, future.",
        keywords: ["evidence", "testimony", "documents", "circumstantial", "fact"],
        isImportant: false
      },
      {
        id: "s11",
        section: "Section 11",
        title: "Relevancy of facts forming part of same transaction",
        content: "Facts which are part of same transaction are relevant, whether previous or subsequent to point in question.",
        keywords: ["relevancy", "transaction", "facts", "admissibility"],
        isImportant: true
      },
      {
        id: "s32",
        section: "Section 32",
        title: "Statements by persons who cannot be called as witnesses",
        content: "Statements by dead/absent persons relevant if made with intent to cause/knowing likely to cause punishment. Exception to hearsay rule.",
        keywords: ["hearsay", "dead persons", "statements", "exception", "admissibility"],
        isImportant: true
      },
      {
        id: "s50",
        section: "Section 50",
        title: "Character generally irrelevant",
        content: "Evidence of character generally irrelevant to prove person committed alleged offense. Exception: Character relevant in theft, rape, cheating cases.",
        keywords: ["character", "irrelevant", "proof", "offense", "reputation"],
        isImportant: true
      },
      {
        id: "s51",
        section: "Section 51",
        title: "Character in mitigation of punishment",
        content: "If criminal law permits evidence of character for mitigation of punishment, character relevant for that purpose.",
        keywords: ["character", "mitigation", "punishment", "sentence", "relevance"],
        isImportant: false
      },
      {
        id: "s52",
        section: "Section 52",
        title: "Similar facts after acquittal",
        content: "After acquittal, evidence of facts which would support conviction irrelevant, except when such facts put in question by accused.",
        keywords: ["acquittal", "res judicata", "similar facts", "double jeopardy"],
        isImportant: false
      }
    ]
  },
  {
    id: "contract",
    name: "Indian Contract Act",
    shortName: "ICA",
    year: 1872,
    description: "Law of contracts. Governs formation, performance, breach, remedies for contract violations.",
    sections: [
      {
        id: "isc-2",
        section: "Section 2",
        title: "Definitions (Offer, Acceptance, Consideration)",
        content: "Offer: Expression of willingness to contract. Acceptance: Assent to offer on terms offered. Consideration: Quid pro quo given by one party on promise of other.",
        keywords: ["offer", "acceptance", "consideration", "contract formation", "quid pro quo"],
        isImportant: true
      },
      {
        id: "isc-10",
        section: "Section 10",
        title: "Who may enter into a contract",
        content: "Every person competent to enter contract: (a) Age of majority per law; (b) Of sound mind; (c) Not disqualified by law to which subject.",
        keywords: ["capacity", "age", "sound mind", "disqualified", "competency"],
        isImportant: true
      },
      {
        id: "isc-25",
        section: "Section 25",
        title: "Consideration, when dispensed with",
        content: "Agreement without consideration void unless: (a) In writing and registered; (b) Expressed to be deed; (c) Made with intension to create legal obligation.",
        keywords: ["consideration", "void", "deed", "gratuitous", "legal obligation"],
        isImportant: true
      },
      {
        id: "isc-75",
        section: "Section 75",
        title: "Effect of failure to perform obligation",
        content: "Party who fails to perform must compensate other for non-performance. Damages measured as loss directly answering from breach.",
        keywords: ["breach", "damages", "compensation", "non-performance"],
        isImportant: true
      },
      {
        id: "isc-11",
        section: "Section 11",
        title: "Void agreement",
        content: "Agreement is void if made without free consent, consideration, with minor, unsound mind, disqualified person.",
        keywords: ["void", "agreement", "free consent", "consideration", "enforceability"],
        isImportant: true
      },
      {
        id: "isc-27",
        section: "Section 27",
        title: "Limits on right to restrain trade",
        content: "Agreement to restraint trade is void, save for reasonable restrictions on duration, territory, line of business.",
        keywords: ["restraint of trade", "void", "covenant", "non-compete", "reasonable"],
        isImportant: false
      }
    ]
  },
  {
    id: "tpa",
    name: "Transfer of Property Act",
    shortName: "TPA",
    year: 1882,
    description: "Governs transfer of immovable property, sales, mortgages, leases, and related transactions.",
    sections: [
      {
        id: "tpa-s3",
        section: "Section 3",
        title: "Kinds of Property",
        content: "Property movable (tangible/intangible per TP Act Section 3) and immovable (land, buildings, hereditary offices, easements). TP Act governs immovable property transfer.",
        keywords: ["property", "movable", "immovable", "tangible", "intangible"],
        isImportant: true
      },
      {
        id: "tpa-s5",
        section: "Section 5",
        title: "Transfer of property defined",
        content: "Transfer of property is act by which living person conveys property in present/future to one/more persons or to himself and one/more others. Right in rem and right in personam.",
        keywords: ["transfer", "convey", "property", "right in rem", "living person"],
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
  const router = useRouter();
  const [activeAct, setActiveAct] = useState<BareAct | null>(null);
  const [activeSection, setActiveSection] = useState<BareActSection | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedSections, setBookmarkedSections] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleBookmark = (id: string) => {
    const newBookmarked = new Set(bookmarkedSections);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarkedSections(newBookmarked);
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredSections = activeAct?.sections.filter((s) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      s.section.toLowerCase().includes(query) ||
      s.title.toLowerCase().includes(query) ||
      s.content.toLowerCase().includes(query) ||
      s.keywords.some((k) => k.toLowerCase().includes(query))
    );
  }) || [];

  // MOBILE: List of Acts
  if (!activeAct) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white md:hidden">
        <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-slate-900">Bare Acts</h1>
            <Badge variant="outline" className="text-xs">Pick an Act</Badge>
          </div>
          <p className="text-xs text-slate-500">Tap COI for full Constitution. Other acts open section-wise quick study.</p>
        </div>

        <div className="p-4 grid grid-cols-2 gap-3">
          {bareActsData.map((act) => (
            <button
              key={act.id}
              onClick={() => {
                if (act.id === "constitution") {
                  router.push("/constitution");
                  return;
                }
                setActiveAct(act);
                setActiveSection(null);
                setSearchQuery("");
              }}
              className="w-full p-4 rounded-xl bg-white border border-slate-200 text-left hover:border-blue-400 hover:bg-blue-50 transition-all"
            >
              <div className="flex flex-col items-start gap-2">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700">
                  {act.shortName.slice(0, 2)}
                </div>
                <Badge variant="secondary" className="font-mono text-xs">
                  {act.shortName}
                </Badge>
                <h3 className="font-semibold text-sm text-slate-900 leading-tight">{act.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // MOBILE: Sections List
  if (activeAct && !activeSection) {
    return (
      <div className="min-h-screen bg-slate-50 md:hidden">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => {
              setSearchQuery("");
              setActiveAct(null);
            }}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="font-mono text-xs mb-1">
                {activeAct.shortName}
              </Badge>
              <h1 className="font-bold text-sm text-slate-900 line-clamp-1">
                {activeAct.name}
              </h1>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2 text-sm"
            />
          </div>
        </div>

        {/* Sections List */}
        <div className="p-4 space-y-2">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section)}
                className="w-full p-3 rounded-lg bg-white border border-slate-200 text-left hover:border-blue-400 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-1">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {section.section}
                      </Badge>
                      {section.isImportant && <Star className="h-3 w-3 text-yellow-500" />}
                    </div>
                    <h3 className="font-semibold text-sm text-slate-900">{section.title}</h3>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0" />
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-8">
              <Search className="h-10 w-10 text-slate-300 mx-auto mb-2" />
              <p className="text-xs text-slate-500">No sections found</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // MOBILE: Section Details
  if (activeSection) {
    return (
      <div className="min-h-screen bg-slate-50 md:hidden">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm p-4">
          <div className="flex items-center justify-between gap-3 mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveSection(null)}
              className="flex-shrink-0"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Badge variant="secondary" className="font-mono text-xs">
              {activeSection.section}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleBookmark(activeSection.id)}
              className="flex-shrink-0"
            >
              <Bookmark
                className={`h-5 w-5 ${
                  bookmarkedSections.has(activeSection.id)
                    ? "text-purple-500 fill-purple-500"
                    : "text-slate-400"
                }`}
              />
            </Button>
          </div>
          <h1 className="font-bold text-base text-slate-900">{activeSection.title}</h1>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Content */}
          <Card className="border-0 bg-white">
            <CardContent className="p-4">
              <p className="text-sm text-slate-800 leading-relaxed">{activeSection.content}</p>
            </CardContent>
          </Card>

          {/* Keywords */}
          <Card className="border-0 bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Keywords</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {activeSection.keywords.map((kw) => (
                  <Badge key={kw} variant="outline" className="text-xs">
                    {kw}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Button
            variant="default"
            className="w-full gap-2"
            onClick={() =>
              copyToClipboard(`${activeSection.section}: ${activeSection.title}\n\n${activeSection.content}`, activeSection.id)
            }
          >
            {copiedId === activeSection.id ? (
              <>
                <Check className="h-4 w-4" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy to Clipboard
              </>
            )}
          </Button>
        </div>

        <div className="h-4" />
      </div>
    );
  }

  // DESKTOP VIEW (original)
  return (
    <div className="hidden md:block container mx-auto p-4 md:p-6 max-w-5xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <FileText className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Bare Acts Reference</h1>
            <p className="text-muted-foreground">Key provisions from important Indian statutes</p>
          </div>
        </div>
      </div>

      {/* Desktop search and filters would go here - keeping it simple for now */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search sections, titles, keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Act tabs and content would go here */}
      <p className="text-center text-muted-foreground py-12">
        Desktop view is being refreshed. Please view on mobile for the new app-like experience.
      </p>
    </div>
  );
}
