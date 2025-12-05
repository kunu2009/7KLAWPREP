"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Scale, 
  Users, 
  Globe,
  ChevronDown,
  ChevronUp,
  Star,
  History
} from "lucide-react";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  significance: string;
  category: "constitutional" | "landmark" | "legislative" | "international";
  isImportant: boolean;
}

const timelineData: Record<string, TimelineEvent[]> = {
  constitutional: [
    {
      id: "c1",
      year: "1773",
      title: "Regulating Act",
      description: "First step by British Parliament to regulate East India Company's affairs in India. Established Supreme Court at Calcutta.",
      significance: "Foundation of constitutional development in India. First attempt to centralize administration.",
      category: "constitutional",
      isImportant: true
    },
    {
      id: "c2",
      year: "1784",
      title: "Pitt's India Act",
      description: "Created Board of Control to supervise Company's civil and military affairs. Established dual government system.",
      significance: "Brought Company under British government control for first time.",
      category: "constitutional",
      isImportant: false
    },
    {
      id: "c3",
      year: "1833",
      title: "Charter Act of 1833",
      description: "Made Governor-General of Bengal as Governor-General of India. Created Law Commission (Macaulay).",
      significance: "Centralization of administration. Beginning of codification of Indian laws.",
      category: "constitutional",
      isImportant: true
    },
    {
      id: "c4",
      year: "1858",
      title: "Government of India Act",
      description: "Crown took over governance from East India Company. Secretary of State for India appointed.",
      significance: "End of Company rule. Direct British Crown rule began.",
      category: "constitutional",
      isImportant: true
    },
    {
      id: "c5",
      year: "1861",
      title: "Indian Councils Act",
      description: "Beginning of representative institutions. Indians admitted to Legislative Councils as non-official members.",
      significance: "First step towards democratic governance in India.",
      category: "constitutional",
      isImportant: false
    },
    {
      id: "c6",
      year: "1909",
      title: "Indian Councils Act (Morley-Minto)",
      description: "Introduced separate electorates for Muslims. Expanded Legislative Councils.",
      significance: "Sowed seeds of partition. Communal representation began.",
      category: "constitutional",
      isImportant: true
    },
    {
      id: "c7",
      year: "1919",
      title: "Government of India Act (Montagu-Chelmsford)",
      description: "Introduced Dyarchy at provincial level. Bicameral legislature at center.",
      significance: "First step towards responsible government. Preamble declared progressive realization of responsible government.",
      category: "constitutional",
      isImportant: true
    },
    {
      id: "c8",
      year: "1935",
      title: "Government of India Act",
      description: "Federal structure proposed. Provincial autonomy introduced. All-India Federation (never implemented).",
      significance: "Longest Act. 75% borrowed in Indian Constitution. Framework for governance.",
      category: "constitutional",
      isImportant: true
    },
    {
      id: "c9",
      year: "1946",
      title: "Cabinet Mission Plan",
      description: "Proposed three-tier federal structure. Rejected by Muslim League leading to Direct Action Day.",
      significance: "Last attempt to keep India united. Failure led to partition.",
      category: "constitutional",
      isImportant: true
    },
    {
      id: "c10",
      year: "1947",
      title: "Indian Independence Act",
      description: "Created two dominions - India and Pakistan. Constituent Assembly became sovereign body.",
      significance: "End of British rule. India became independent on August 15, 1947.",
      category: "constitutional",
      isImportant: true
    },
    {
      id: "c11",
      year: "1950",
      title: "Constitution of India",
      description: "Came into effect on January 26. Dr. B.R. Ambedkar was Chairman of Drafting Committee.",
      significance: "World's longest written constitution. Establishes sovereign socialist secular democratic republic.",
      category: "constitutional",
      isImportant: true
    }
  ],
  landmark: [
    {
      id: "l1",
      year: "1950",
      title: "A.K. Gopalan v. State of Madras",
      description: "Preventive detention challenged. SC adopted narrow interpretation of Article 21.",
      significance: "Due process rejected. Procedure established by law accepted. Later overruled by Maneka Gandhi.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l2",
      year: "1951",
      title: "Champakam Dorairajan Case",
      description: "Communal reservation in educational institutions struck down.",
      significance: "Led to First Constitutional Amendment adding Article 15(4).",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l3",
      year: "1967",
      title: "Golaknath v. State of Punjab",
      description: "Parliament cannot amend Fundamental Rights under Article 368.",
      significance: "Froze Fundamental Rights from amendment. Overruled by Kesavananda Bharati.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l4",
      year: "1973",
      title: "Kesavananda Bharati v. State of Kerala",
      description: "Parliament can amend any part of Constitution but cannot alter Basic Structure.",
      significance: "Most important constitutional case. Basic Structure Doctrine established. 7:6 majority.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l5",
      year: "1978",
      title: "Maneka Gandhi v. Union of India",
      description: "Right to travel abroad under Article 21. Procedure must be fair, just, and reasonable.",
      significance: "Expanded Article 21. Overruled A.K. Gopalan. Due process via Article 14, 19, 21 nexus.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l6",
      year: "1980",
      title: "Minerva Mills v. Union of India",
      description: "42nd Amendment provisions struck down. Harmony between FRs and DPSPs.",
      significance: "Confirmed Basic Structure. Limited amending power. Balance between Parts III and IV.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l7",
      year: "1992",
      title: "Indra Sawhney v. Union of India",
      description: "Mandal Commission case. 50% ceiling on reservations. Creamy layer concept.",
      significance: "Defined OBC reservations. 50% limit (except extraordinary circumstances). Creamy layer exclusion.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l8",
      year: "1993",
      title: "Supreme Court Advocates-on-Record Association",
      description: "Second Judges Case. Collegium system for judicial appointments.",
      significance: "CJI's recommendation has primacy. Collegium of 3 senior judges. Major shift in appointment process.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l9",
      year: "1994",
      title: "S.R. Bommai v. Union of India",
      description: "President's Rule under Article 356 must be subject to judicial review.",
      significance: "Limited misuse of Article 356. Secularism is Basic Structure. Floor test required.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l10",
      year: "2014",
      title: "NALSA v. Union of India",
      description: "Recognized transgender persons as third gender.",
      significance: "Third gender recognition. Rights under Articles 14, 15, 16, 19, 21. Social justice landmark.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l11",
      year: "2017",
      title: "Puttaswamy v. Union of India",
      description: "Right to Privacy is a fundamental right under Article 21.",
      significance: "Overruled M.P. Sharma and Kharak Singh. Privacy is intrinsic to life and liberty.",
      category: "landmark",
      isImportant: true
    },
    {
      id: "l12",
      year: "2018",
      title: "Navtej Singh Johar v. Union of India",
      description: "Section 377 IPC decriminalized consensual homosexual acts.",
      significance: "LGBTQ+ rights recognized. Right to sexual orientation under Article 21.",
      category: "landmark",
      isImportant: true
    }
  ],
  legislative: [
    {
      id: "lg1",
      year: "1860",
      title: "Indian Penal Code",
      description: "Drafted by Lord Macaulay. Comprehensive criminal code for India.",
      significance: "Foundation of criminal law. Still in force with amendments (now BNS, 2023).",
      category: "legislative",
      isImportant: true
    },
    {
      id: "lg2",
      year: "1872",
      title: "Indian Evidence Act",
      description: "Law relating to evidence in judicial proceedings.",
      significance: "Governs admissibility of evidence. Foundation of trial procedure (now BSA, 2023).",
      category: "legislative",
      isImportant: true
    },
    {
      id: "lg3",
      year: "1872",
      title: "Indian Contract Act",
      description: "Law relating to contracts in India.",
      significance: "Foundation of commercial law. Defines offer, acceptance, consideration, contracts.",
      category: "legislative",
      isImportant: true
    },
    {
      id: "lg4",
      year: "1882",
      title: "Transfer of Property Act",
      description: "Law relating to transfer of immovable property.",
      significance: "Governs sale, mortgage, lease, gift of property.",
      category: "legislative",
      isImportant: false
    },
    {
      id: "lg5",
      year: "1908",
      title: "Civil Procedure Code",
      description: "Procedural law for civil courts.",
      significance: "Governs civil suits, appeals, execution. Framework for civil justice.",
      category: "legislative",
      isImportant: true
    },
    {
      id: "lg6",
      year: "1973",
      title: "Code of Criminal Procedure",
      description: "Procedural law for criminal courts. Replaced 1898 Code.",
      significance: "Governs investigation, trial, bail, appeals. Criminal justice framework (now BNSS, 2023).",
      category: "legislative",
      isImportant: true
    },
    {
      id: "lg7",
      year: "2005",
      title: "Right to Information Act",
      description: "Citizens' right to access government information.",
      significance: "Transparency in governance. Landmark for democratic accountability.",
      category: "legislative",
      isImportant: true
    },
    {
      id: "lg8",
      year: "2013",
      title: "Companies Act",
      description: "Law governing formation and regulation of companies.",
      significance: "Modern corporate law framework. CSR provisions introduced.",
      category: "legislative",
      isImportant: false
    },
    {
      id: "lg9",
      year: "2016",
      title: "Insolvency and Bankruptcy Code",
      description: "Unified framework for insolvency and bankruptcy.",
      significance: "Major economic reform. Time-bound resolution. NCLT jurisdiction.",
      category: "legislative",
      isImportant: true
    },
    {
      id: "lg10",
      year: "2023",
      title: "Bharatiya Nyaya Sanhita",
      description: "Replaces Indian Penal Code, 1860.",
      significance: "Criminal law modernization. New offenses like terrorism, organized crime.",
      category: "legislative",
      isImportant: true
    }
  ],
  international: [
    {
      id: "i1",
      year: "1945",
      title: "United Nations Charter",
      description: "Established the United Nations. India is founding member.",
      significance: "International peace and security. Human rights framework. Security Council structure.",
      category: "international",
      isImportant: true
    },
    {
      id: "i2",
      year: "1948",
      title: "Universal Declaration of Human Rights",
      description: "30 articles on human rights. Not legally binding but morally authoritative.",
      significance: "Foundation of human rights law. Influenced Indian Fundamental Rights.",
      category: "international",
      isImportant: true
    },
    {
      id: "i3",
      year: "1966",
      title: "ICCPR & ICESCR",
      description: "International Covenant on Civil and Political Rights & Economic, Social, Cultural Rights.",
      significance: "Binding human rights treaties. India ratified ICCPR in 1979.",
      category: "international",
      isImportant: true
    },
    {
      id: "i4",
      year: "1969",
      title: "Vienna Convention on Law of Treaties",
      description: "Law governing treaties between states.",
      significance: "Pacta sunt servanda. Treaty interpretation rules. India signed but not ratified.",
      category: "international",
      isImportant: false
    },
    {
      id: "i5",
      year: "1979",
      title: "CEDAW",
      description: "Convention on Elimination of All Forms of Discrimination Against Women.",
      significance: "Women's rights treaty. India ratified in 1993 with reservations.",
      category: "international",
      isImportant: true
    },
    {
      id: "i6",
      year: "1989",
      title: "Convention on Rights of the Child",
      description: "Comprehensive children's rights treaty.",
      significance: "India ratified in 1992. Led to juvenile justice reforms.",
      category: "international",
      isImportant: true
    },
    {
      id: "i7",
      year: "1995",
      title: "WTO Established",
      description: "World Trade Organization replaced GATT.",
      significance: "India is founding member. TRIPS, GATS, dispute settlement mechanism.",
      category: "international",
      isImportant: true
    },
    {
      id: "i8",
      year: "2015",
      title: "Paris Agreement",
      description: "Climate change agreement. Limit warming to 1.5-2°C.",
      significance: "India's climate commitments. Nationally Determined Contributions (NDCs).",
      category: "international",
      isImportant: true
    }
  ]
};

const categoryConfig = {
  constitutional: {
    label: "Constitutional Development",
    icon: BookOpen,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  landmark: {
    label: "Landmark Cases",
    icon: Scale,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  legislative: {
    label: "Legislative Milestones",
    icon: Users,
    color: "bg-green-500/10 text-green-600 border-green-500/20"
  },
  international: {
    label: "International Law",
    icon: Globe,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
  }
};

export default function TimelinePage() {
  const [activeTab, setActiveTab] = useState<string>("constitutional");
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());
  const [showImportantOnly, setShowImportantOnly] = useState(false);
  const [learnedEvents, setLearnedEvents] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedEvents(newExpanded);
  };

  const toggleLearned = (id: string) => {
    const newLearned = new Set(learnedEvents);
    if (newLearned.has(id)) {
      newLearned.delete(id);
    } else {
      newLearned.add(id);
    }
    setLearnedEvents(newLearned);
  };

  const getCurrentEvents = () => {
    const events = timelineData[activeTab] || [];
    if (showImportantOnly) {
      return events.filter(e => e.isImportant);
    }
    return events;
  };

  const events = getCurrentEvents();
  const totalImportant = events.filter(e => e.isImportant).length;
  const learnedCount = events.filter(e => learnedEvents.has(e.id)).length;

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-5xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-indigo-500/10">
            <History className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Legal Timeline</h1>
            <p className="text-muted-foreground">Master important dates and events in Indian legal history</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Total Events</span>
            </div>
            <p className="text-2xl font-bold mt-1">{events.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-muted-foreground">Important</span>
            </div>
            <p className="text-2xl font-bold mt-1">{totalImportant}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">Learned</span>
            </div>
            <p className="text-2xl font-bold mt-1">{learnedCount}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-muted-foreground">Progress</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {events.length > 0 ? Math.round((learnedCount / events.length) * 100) : 0}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant={showImportantOnly ? "default" : "outline"}
          size="sm"
          onClick={() => setShowImportantOnly(!showImportantOnly)}
          className="gap-2"
        >
          <Star className="h-4 w-4" />
          {showImportantOnly ? "Showing Important Only" : "Show Important Only"}
        </Button>
        <Badge variant="outline" className="text-xs">
          {activeTab && categoryConfig[activeTab as keyof typeof categoryConfig]?.label}
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          {Object.entries(categoryConfig).map(([key, config]) => {
            const Icon = config.icon;
            return (
              <TabsTrigger key={key} value={key} className="gap-1 text-xs md:text-sm">
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{config.label.split(" ")[0]}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.keys(categoryConfig).map((category) => (
          <TabsContent key={category} value={category}>
            <ScrollArea className="h-[600px] pr-4">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-0.5 bg-border" />

                {/* Events */}
                <div className="space-y-4">
                  {getCurrentEvents().map((event, index) => {
                    const config = categoryConfig[event.category];
                    const isExpanded = expandedEvents.has(event.id);
                    const isLearned = learnedEvents.has(event.id);

                    return (
                      <div key={event.id} className="relative flex gap-4">
                        {/* Year */}
                        <div className="w-[50px] md:w-[70px] text-right shrink-0">
                          <Badge 
                            variant="outline" 
                            className={`font-mono font-bold ${event.isImportant ? 'bg-yellow-500/10 border-yellow-500/30' : ''}`}
                          >
                            {event.year}
                          </Badge>
                        </div>

                        {/* Timeline Dot */}
                        <div className={`absolute left-[55px] md:left-[75px] w-3 h-3 rounded-full border-2 ${
                          isLearned 
                            ? 'bg-green-500 border-green-600' 
                            : event.isImportant 
                              ? 'bg-yellow-500 border-yellow-600' 
                              : 'bg-background border-muted-foreground'
                        }`} style={{ top: '6px' }} />

                        {/* Event Card */}
                        <Card className={`flex-1 ml-4 transition-all ${isLearned ? 'border-green-500/30 bg-green-500/5' : ''}`}>
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <CardTitle className="text-base md:text-lg">{event.title}</CardTitle>
                                  {event.isImportant && (
                                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                  )}
                                </div>
                                <CardDescription className="text-sm">
                                  {event.description}
                                </CardDescription>
                              </div>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => toggleLearned(event.id)}
                                >
                                  <CheckCircle2 className={`h-4 w-4 ${isLearned ? 'text-green-500' : 'text-muted-foreground'}`} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => toggleExpand(event.id)}
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
                              <div className={`p-3 rounded-lg ${config.color} border`}>
                                <p className="text-sm font-medium mb-1">CLAT Significance:</p>
                                <p className="text-sm">{event.significance}</p>
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Reference */}
      <Card className="mt-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Quick Memory Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-background/50">
              <p className="font-medium text-blue-600">Constitutional Acts Pattern:</p>
              <p className="text-muted-foreground">1773 → 1858 → 1919 → 1935 → 1947 → 1950</p>
              <p className="text-xs text-muted-foreground mt-1">Company → Crown → Dyarchy → Federation → Independence → Republic</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50">
              <p className="font-medium text-purple-600">Landmark Case Evolution:</p>
              <p className="text-muted-foreground">Gopalan → Golaknath → Kesavananda → Maneka</p>
              <p className="text-xs text-muted-foreground mt-1">Narrow Art.21 → FR Frozen → Basic Structure → Expanded Rights</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50">
              <p className="font-medium text-green-600">Criminal Law Codes:</p>
              <p className="text-muted-foreground">IPC (1860) → CrPC (1973) → BNS/BNSS (2023)</p>
              <p className="text-xs text-muted-foreground mt-1">All based on Macaulay's codification project</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50">
              <p className="font-medium text-orange-600">Human Rights Timeline:</p>
              <p className="text-muted-foreground">UN (1945) → UDHR (1948) → ICCPR (1966)</p>
              <p className="text-xs text-muted-foreground mt-1">India ratified ICCPR in 1979</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
