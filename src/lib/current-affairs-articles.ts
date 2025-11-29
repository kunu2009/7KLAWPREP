export interface CurrentAffairsArticle {
  id: string;
  title: string;
  date: string; // ISO date or short
  summary: string;
  article: string;
  relevance: string[]; // quick points why it matters for CLAT
  sources: string[];
}

export const currentAffairsArticles: CurrentAffairsArticle[] = [
  {
    id: 'hot-amaravati-fincity',
    title: "Amaravati Declared India\'s First Integrated Financial City",
    date: '2025-11-24',
    summary: "The Union government announced Amaravati as India\'s first Integrated Financial City — a dedicated policy and infrastructure initiative to cluster financial services, fintech, and support services with an aim to deepen capital markets and attract global investment.",
    article: `In November 2025, the Union Finance Ministry formally designated Amaravati as India\'s first Integrated Financial City, an initiative designed to consolidate a wide range of financial-sector institutions, fintech incubators, regulatory sandboxes, and professional services into a single, well-planned urban node. The announcement followed consultations with state authorities and industry stakeholders and sets out a phased plan for infrastructure, tax and regulatory incentives, and digital connectivity.

The scheme envisions a comprehensive regulatory and business ecosystem that brings together exchanges, asset managers, insurance companies, and an innovation corridor for blockchain/fintech startups. The government highlighted improved ease-of-doing-business, access to talent, and international partnerships as key goals. The Amaravati plan also includes capacity-building programmes and a special cadre of financial-sector professionals, with early-stage seed funding for public-private initiatives.

Critics note the need for robust land-use planning, environmental safeguards, and clarity on cross-jurisdictional regulation (state vs central) for licensing and tax incentives. Supporters argue the Integrated Financial City could decentralize financial activity from Mumbai and diversify India\'s regional economic footprint.`,
    relevance: [
      'Public policy design: state and central roles',
      'Regulatory changes impacting financial markets',
      'Questions on federalism and administrative powers',
      'Potential fact-based current-affairs MCQs for CLAT',
    ],
    sources: [
      'Press release, Ministry of Finance (Nov 2025)',
      'Major national newspaper coverage (Nov 2025)'
    ]
  },
  {
    id: 'hot-asia-power-index-2025',
    title: 'Asia Power Index 2025: India Ranks Third',
    date: '2025-11-20',
    summary: "The Lowy Institute\'s Asia Power Index 2025 placed India third in the regional power ranking — a composite measure of military capability, economic resources, resilience, cultural influence and diplomatic engagement.",
    article: `The Lowy Institute\'s Asia Power Index 2025 evaluated 26 countries across fifteen indicators to assess national power in Asia. India placed third, reflecting gains in economic size, defence spending, and diplomatic outreach, while trailing the United States (as a Pacific actor) and China on overall measures.

The report highlighted India\'s continued modernization of defence forces, expanded maritime presence in the Indian Ocean region, and robust services-driven economic growth. It also flagged challenges such as infrastructure gaps, socio-economic inequality, and the need for deeper manufacturing competitiveness. Analysts interpret the ranking as a reflection of India\'s rising international profile, but one that still faces structural bottlenecks to convert potential into global reach.

For policymakers, the index underlines trade-offs between hard power investment and soft-power diplomacy; it may be used as a reference point in debates on defence allocation, strategic partnerships (QUAD, I2U2), and foreign policy priorities.`,
    relevance: [
      'Useful for current affairs and international relations questions',
      'Illustrates indicators used to compare state power',
      'Can appear in reasoning/analytical passages',
    ],
    sources: [
      'Lowy Institute — Asia Power Index 2025',
      'Analysis pieces in national press (Nov 2025)'
    ]
  },
  {
    id: 'hot-riyadh-metro-driverless',
    title: "Riyadh Metro Becomes World\'s Longest Fully Driverless Metro (176 km)",
    date: '2025-11-18',
    summary: 'The Riyadh Metro, a six-line urban rail network spanning 176 km, was recognized as the world\'s longest fully driverless metro system, marking a major milestone in Middle East public transport infrastructure.',
    article: `Riyadh\'s newly completed metro network — part of Saudi Arabia\'s Vision 2030 urban transformation agenda — entered global records in November 2025 as the world\'s longest fully driverless metro. The six-line project, engineered to operate without onboard drivers, emphasizes advanced signalling, automated operation, and integrated mobility hubs.

The metro aims to reduce traffic congestion, improve air quality, and provide inclusive city-wide access. It also represents large-scale international engineering collaboration and financing, with consortiums delivering rolling stock, signalling systems, and smart-city integration. Observers note the regional pattern of infrastructure-driven economic diversification in Gulf states.

For law and policy, the project raises questions about procurement law, public-private partnership models, urban land-use regulations, and legal frameworks for automated transport safety and liability. These legal-technical intersections make the Riyadh metro a useful case for multidisciplinary CLAT passages.`,
    relevance: [
      'Infrastructure policy & PPPs',
      'Regulatory frameworks for autonomous systems',
      'International collaboration and trade links',
    ],
    sources: [
      'Official Riyadh Metro project updates (2025)',
      'International infrastructure news reports (Nov 2025)'
    ]
  },
  {
    id: 'hot-putin-visit-defence-energy',
    title: "Putin\'s India Visit (Dec 2025): Focus on Defence & Energy Cooperation",
    date: '2025-12-04',
    summary: 'Russian President Vladimir Putin was scheduled to visit India in early December 2025 with talks centring on defence cooperation, energy partnerships, and regional strategic issues.',
    article: `President Vladimir Putin\'s state visit to India in December 2025 was arranged around a packed agenda of defence, energy, and strategic discussions. Key items included ongoing armaments co-operation, potential extension of joint manufacturing arrangements, nuclear energy collaboration, and coordination on global security issues.

Officials emphasised longstanding Indo-Russian ties in military technology and nuclear energy, including potential agreements on spares, joint R&D, and reciprocal access for military training and logistics arrangements. The visit also included talks on energy security, including long-term hydrocarbon supply arrangements and collaborations on clean-energy transitions.

Strategically, the meetings occurred against a backdrop of shifting global alliances. Questions about technology transfer, contractual safeguards, and export-control compliance were expected to be part of technical annexes to any defence or energy agreements. Such state visits often produce memoranda of understanding that may be later scrutinised by legislators and legal commentators.`,
    relevance: [
      'International treaty-making and MOUs',
      'Defence procurement law and export controls',
      'Energy security and contract law implications',
    ],
    sources: [
      'Ministry of External Affairs statements (Dec 2025)',
      'Coverage in national dailies (Dec 2025)'
    ]
  },
  {
    id: 'hot-michelangelo-dome',
    title: "Italy Unveils \"Michelangelo Dome\" Multi-domain Defence System",
    date: '2025-11-21',
    summary: 'Italy revealed a new multi-domain defence system developed by Leonardo, called the Michelangelo Dome, aimed at countering missiles, drones, and cyber threats.',
    article: `In November 2025, Italian defence firm Leonardo showcased the \"Michelangelo Dome\" — an integrated multi-domain defence architecture combining missile-defence sensors, anti-drone interceptors, and cyber-defence layers. Positioned as a scalable homeland-defence solution, the system integrates radar, interception, and command-and-control software modules.

The company presented the Dome as adaptable for both domestic homeland security and export markets. The unveiling sparked debate in international policy circles about regional arms dynamics, export controls, and the ethics of automated defensive systems. Legal frameworks governing cross-border sales, compliance with international humanitarian law, and technology transfer safeguards will be crucial for any export contracts.

For CLAT aspirants, the Michelangelo Dome is a study point on contemporary defence procurement, international trade law, and the regulatory architecture that governs dual-use technologies.`,
    relevance: [
      'Export controls and defence procurement law',
      'Ethical and legal issues of automated defence',
      'Trade agreements & international law considerations',
    ],
    sources: [
      'Leonardo official release (Nov 2025)',
      'European defence analysis reports (Nov 2025)'
    ]
  },
  {
    id: 'hot-assam-prerona-scheme',
    title: "Assam\'s 'Prerona' Scheme for Class 10 Students",
    date: '2025-11-15',
    summary: 'The Assam government launched the Prerona Scheme to provide monthly stipends to Class 10 students preparing for board exams, aiming to reduce dropouts and support disadvantaged learners.',
    article: `In mid-November 2025, the Assam state government introduced the Prerona Scheme — a targeted financial support programme that supplies modest monthly stipends to Class 10 students preparing for board examinations. The scheme is designed to disincentivise early school-leaving, reduce economic pressure on vulnerable households, and improve secondary education outcomes.

Officials indicated that eligibility criteria combine household income thresholds with academic attendance records and that disbursement will be routed through direct-benefit transfers to bank accounts. The scheme includes complementary components such as free study materials and mentorship programmes hosted through local education departments.

Legal angles include ensuring compliance with public-finance norms, clarity on beneficiary selection to avoid arbitrariness, and safeguards against exclusion errors. The policy raises questions about state obligations under the Right to Education and progressive realisation of socio-economic rights.`,
    relevance: [
      'Welfare policy and public finance',
      'Rights-based claims in education law',
      'Administrative law: eligibility and transparency safeguards',
    ],
    sources: [
      'Government of Assam: policy release (Nov 2025)',
      'Local news reports (Nov 2025)'
    ]
  },
  {
    id: 'hot-grap-stage3-revoked',
    title: 'GRAP Stage 3 Revoked in Delhi-NCR After Air Quality Improvement',
    date: '2025-11-12',
    summary: 'Authorities lifted GRAP Stage 3 measures in the Delhi-NCR region after air-quality monitors recorded sustained improvements, easing restrictions on construction and vehicular movement.',
    article: `The Graded Response Action Plan (GRAP) is an air-quality intervention framework used in the Delhi-NCR region to impose graduated restrictions when pollution crosses thresholds. In November 2025, authorities announced the revocation of Stage 3 measures — which typically restrict construction activity, increase public-transport connectivity, and impose curbs on industrial emissions — following a period of improved readings across multiple monitors.

Authorities credited favourable meteorological conditions and local mitigation efforts for the improvement, while continuing to warn that improvements can be temporary. The revocation eases certain regulatory burdens on business and construction activity but does not remove the longer-term policy imperative to reduce seasonal pollution sources (crop residue burning, vehicular emissions, industrial particulates).

Legal issues include enforceability of GRAP measures, due-process for affected stakeholders, and environmental law mechanisms for long-term remediation. Such developments are commonly tested in CLAT through policy analysis passages.`,
    relevance: [
      'Environmental law and administrative regulation',
      'Due process concerns for affected industries',
      'IPCC/air-quality science as background for policy questions',
    ],
    sources: [
      'Central Pollution Control Board statements (Nov 2025)',
      'Delhi Government press notes (Nov 2025)'
    ]
  },
  {
    id: 'hot-operation-eagle-force',
    title: 'Operation Eagle Force: Nigerian Drug Cartel Busted',
    date: '2025-11-10',
    summary: 'A multinational law-enforcement operation codenamed Operation Eagle Force resulted in arrests and seizures linked to a Nigerian drug-trafficking cartel operating transnational networks.',
    article: `In early November 2025, law-enforcement agencies across multiple countries coordinated under an operation named \"Eagle Force\" to dismantle a transnational drug-trafficking network with ties to Nigeria. Authorities reported arrests of key operatives, seizures of narcotics consignments, and the disruption of money-laundering channels. The operation highlighted the role of international cooperation, intelligence-sharing, and mutual legal assistance treaties (MLATs) in cross-border crime suppression.

The case emphasises legal instruments such as extradition treaties, asset-freezing orders, and the use of special investigation techniques across jurisdictions. Human-rights groups called for transparency around detainee treatment, and legal counsel for suspects raised procedural challenges concerning search and seizure and admissibility of foreign-sourced evidence.

For CLAT-style legal reasoning, the operation is a good anchor for questions on jurisdiction, MLATs, and intersection of criminal procedure with international law.`,
    relevance: [
      'Extradition and mutual legal assistance',
      'Transnational criminal law and evidence',
      'Human-rights and due-process issues in cross-border policing',
    ],
    sources: [
      'Interpol/press releases (Nov 2025)',
      'International law enforcement briefings (Nov 2025)'
    ]
  },
  {
    id: 'hot-ram-statue-goa',
    title: "PM Modi\'s 77-ft Ram Statue Inauguration in Goa",
    date: '2025-11-08',
    summary: "A 77-foot statue of Lord Ram was inaugurated in Goa as part of a public art and heritage project; the ceremony drew political attention and discussions on cultural policy and state sponsorship of religious symbols.",
    article: `In November 2025, the Prime Minister inaugurated a 77-foot statue of Lord Ram at a coastal site in Goa, framing the monument as part of a cultural-heritage and tourism initiative. The event sparked public discussion — supporters praised the symbolic and tourism potential, while critics raised questions about secularism, use of public funds, and pluralist representation in public monuments.

Legal debates around such monuments typically touch on the use of state resources for projects with religious symbolism, obligations under the secular character of the state, and the regulatory process for land-use and environmental clearances. Municipal and state authorities defended the project on grounds of heritage promotion and local economic benefits.

For CLAT, such events are ripe for passages on constitutional values, state neutrality, and administrative law.`,
    relevance: [
      'Secularism and state sponsorship of monuments',
      'Public-finance use and environmental clearances',
      'Constitutional principles in public policy debates',
    ],
    sources: [
      'Ministry of Culture release (Nov 2025)',
      'National media coverage (Nov 2025)'
    ]
  },
  {
    id: 'hot-deepti-sharma-wpl',
    title: 'Deepti Sharma: Costliest Pick in WPL 2026 Auction',
    date: '2025-11-06',
    summary: 'All-rounder Deepti Sharma emerged as the most expensive player in the WPL 2026 auction, highlighting the commercial growth of women\'s cricket and the market dynamics of sports leagues.',
    article: `The 2026 Women\'s Premier League (WPL) auction saw Deepti Sharma become the most expensive pick, reflecting rising investment in women\'s cricket and growing viewership. The auction prices reflect franchise strategies, brand investment, and a shifting economics where broadcast rights and sponsorship revenue have increased the pool available to teams.

Economic analysis of league auctions explores salary caps, player valuation methods, and collective bargaining arrangements between players and league management. Issues also exist around gender parity in sports pay, franchise responsibilities for player welfare, and anti-corruption rules for sports governance.

CLAT passages can use such stories to frame questions on labour law, contract negotiation, and regulatory governance of sports bodies.`,
    relevance: [
      'Sports law and governance',
      'Labour contracts in franchise sport',
      'Commercial regulation and anti-corruption norms',
    ],
    sources: [
      'WPL auction reports (Nov 2025)',
      'Sports analysis pieces (Nov 2025)'
    ]
  },
  {
    id: 'hot-iitf-44',
    title: '44th India International Trade Fair Concludes in Delhi',
    date: '2025-11-04',
    summary: 'The annual India International Trade Fair showcased trade pavilions, start-ups, and state expos, focusing on export promotion and MSME participation.',
    article: `The 44th India International Trade Fair, held in New Delhi, presented a platform for central and state governments, public-sector undertakings, and private firms to exhibit goods and services. Emphasis was placed on export promotion, MSME exposure, and schemes that support technology transfers and market access.

Several state pavilions highlighted investment opportunities and special incentive packages to attract domestic and foreign investors. Workshops discussed logistics, compliance with export standards, and integration with global value chains. The Fair\'s policy panels often feature discussions relevant to trade law, tariff classification, and sector-specific regulations that affect exporters.

This event is useful for CLAT candidates to understand trade promotion mechanisms, public policy for MSMEs, and legal aspects of exports and regulatory compliance.`,
    relevance: [
      'Trade policy and export promotion',
      'MSME regulation and government schemes',
      'Trade facilitation and legal compliance topics',
    ],
    sources: [
      'Trade fair official reports (Nov 2025)',
      'Commerce Ministry updates'
    ]
  },
  {
    id: 'hot-chanakya-defence-dialogue',
    title: 'Chanakya Defence Dialogue 2025 Hosted by Indian Army',
    date: '2025-11-02',
    summary: 'The Chanakya Defence Dialogue convened military leaders, strategists and academics to discuss evolving security challenges and defence diplomacy.',
    article: `The Chanakya Defence Dialogue 2025, organised by the Indian Army, brought together defence officials, strategic analysts, and academics to debate regional security, counter-terrorism, and emerging technologies in warfare. Topics included maritime security in the Indo-Pacific, technology adoption in defence procurement, and the role of defence diplomacy in strategic partnerships.

Panelists discussed the legal frameworks governing use of force, rules of engagement, and constraints of international humanitarian law in modern conflicts. The conference highlighted the need for doctrinal clarity in domains such as cyber and space, where legal and normative frameworks are still evolving.

For CLAT aspirants, such dialogues provide contemporary contexts for questions on security studies, international law, and defence procurement governance.`,
    relevance: [
      'Security and international law topics',
      'Procurement governance and doctrinal debates',
      'Emerging-domain legal questions (cyber, space)',
    ],
    sources: [
      'Event programme (Nov 2025)',
      'Defence commentary articles'
    ]
  },
  {
    id: 'hot-blue-flag-beaches',
    title: 'India Registers 12 Blue Flag Beaches',
    date: '2025-11-01',
    summary: 'Twelve beaches in India gained the Blue Flag eco-certification, recognising high environmental and safety standards and boosting eco-tourism credentials.',
    article: `In November 2025, twelve Indian beaches were awarded the Blue Flag certification — an international eco-label recognising clean, safe, and sustainable coastal sites. The certification requires adherence to strict criteria on environmental management, safety, and services. The move forms part of India\'s coastal conservation and tourism-quality improvement efforts.

Blue Flag accreditation improves tourist confidence and encourages local authorities to maintain beach cleanliness, waste management systems, and biodiversity conservation measures. Legal implications arise around coastal regulation zone norms, responsibilities for municipal governance, and private vs public provisioning of services.

CLAT-related questions may use this development as a case study in environmental regulation, local governance, and sustainable-development policy instruments.`,
    relevance: [
      'Environmental law and coastal regulation',
      'Sustainable tourism policy and compliance',
      'Administrative responsibilities of local bodies',
    ],
    sources: [
      'UNEP/Blue Flag programme updates (Nov 2025)',
      'Ministry of Environment press notes'
    ]
  },
  {
    id: 'hot-bangladesh-hasina-sentence',
    title: 'Former PM Sheikh Hasina Sentenced to 21 Years (Bangladesh)',
    date: '2025-10-28',
    summary: 'A Bangladeshi court sentenced former Prime Minister Sheikh Hasina to 21 years in a high-profile case, triggering regional political reactions and legal scrutiny.',
    article: `In late October 2025, a court in Bangladesh delivered a 21-year sentence to former Prime Minister Sheikh Hasina in a case that attracted international attention. The verdict produced strong reactions domestically and regionally, with debates on judicial independence, political accountability, and the integrity of legal proceedings.

Observers noted the potential for constitutional and post-conviction remedies, including appeals in higher courts, and the role of international human-rights norms in assessing fairness of trial procedures. The case prompted commentary on the intersection of politics and criminal justice in the region.

For CLAT aspirants, the event is relevant for understanding comparative constitutional processes, principles of due process, and the international human-rights framework.`,
    relevance: [
      'Comparative constitutional law and due process',
      'Political implications of judicial decisions',
      'International human-rights considerations',
    ],
    sources: [
      'International news agencies (Oct-Nov 2025)',
      'Regional analysis pieces'
    ]
  },
  {
    id: 'hot-one-nation-one-election-law-commission',
    title: 'Law Commission Opinion on One Nation One Election',
    date: '2025-10-25',
    summary: 'The Law Commission submitted an opinion on the feasibility and legal implications of synchronising national and state elections — the \"One Nation, One Election\" concept — noting constitutional and logistical challenges.',
    article: `The Law Commission\'s opinion on synchronising national and state elections assessed constitutional amendments required, the potential impact on federalism, and practical issues such as terms of legislatures, staggered dissolutions, and safeguarding minority representation. The Commission \"noted the complexity\" of retrofitting the Constitution for simultaneous polls and emphasised the need for broad political consensus and detailed transitional arrangements.

Key legal hurdles include amending articles relating to dissolution and tenure, managing differential term expiries of state assemblies, and ensuring representation for marginalised groups. The Commission suggested pilot studies and incremental reforms rather than abrupt nationwide implementation.

This document is important for CLAT-level analysis of constitutional amendment procedures, federalism tensions, and democratic institutional design.`,
    relevance: [
      'Constitutional amendment process and federalism',
      'Design of electoral systems and transitional law',
      'Democratic theory and institutional safeguards',
    ],
    sources: [
      'Law Commission opinion (Oct 2025)',
      'Parliamentary debates and commentary'
    ]
  }
];
