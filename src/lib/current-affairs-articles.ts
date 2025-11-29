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
  },

  // ⚖️ Important Supreme Court Judgments 2024-25
  {
    id: 'sc-electoral-bonds',
    title: 'Electoral Bonds Scheme Struck Down as Unconstitutional',
    date: '2024-02-15',
    summary: 'The Supreme Court declared the Electoral Bonds scheme unconstitutional, holding that it violated the right to information and undermined transparency in political funding.',
    article: `In a landmark judgment delivered in February 2024, a five-judge Constitution Bench of the Supreme Court struck down the Electoral Bonds scheme introduced in 2018. The Court held that the scheme violated Article 19(1)(a) - the right to information - by allowing anonymous donations to political parties.

The majority opinion emphasized that transparency in electoral funding is essential for a functioning democracy. The Court rejected the government argument that donor anonymity was necessary to protect contributors from political victimization.

The judgment directed the State Bank of India to stop issuing bonds and furnish complete details of all bonds purchased and redeemed to the Election Commission of India.

Key legal principles established include: Right to information about political funding is a fundamental right under Article 19(1)(a); Anonymity in political donations is antithetical to democratic transparency; The 2017 amendments to the Companies Act removing the cap on corporate donations were also struck down.`,
    relevance: [
      'Fundamental Rights - Article 19(1)(a) interpretation',
      'Electoral law and political party funding',
      'Proportionality doctrine in constitutional adjudication',
      'Role of transparency in democracy',
    ],
    sources: [
      'Association for Democratic Reforms v. Union of India (2024)',
      'Supreme Court of India judgment'
    ]
  },
  {
    id: 'sc-article-370',
    title: 'Article 370 Abrogation Upheld by Supreme Court',
    date: '2023-12-11',
    summary: 'The Supreme Court upheld the constitutional validity of the 2019 abrogation of Article 370, which granted special status to Jammu and Kashmir, while directing restoration of statehood.',
    article: `In December 2023, a five-judge Constitution Bench unanimously upheld the abrogation of Article 370, which had granted special autonomous status to Jammu and Kashmir since 1950. The Court held that Article 370 was always intended to be a temporary provision and that the President had the power to declare it inoperative.

The Court upheld the President power under Article 370(3) to declare the article inoperative, even when the Constituent Assembly of J&K no longer existed. The bifurcation of the state into two Union Territories was upheld, though the Court directed that statehood be restored to Jammu and Kashmir at the earliest.

The Court also directed that elections to the J&K Legislative Assembly be held by September 30, 2024. The judgment has significant implications for federalism, the scope of Article 370, and the powers of Parliament to reorganize states.`,
    relevance: [
      'Constitutional law - federal structure',
      'Presidential powers and Article 370',
      'State reorganization under Article 3',
      'Historical context of J&K accession',
    ],
    sources: [
      'In Re: Article 370 of the Constitution (2023)',
      'Supreme Court Constitution Bench'
    ]
  },
  {
    id: 'sc-sc-st-subclassification',
    title: 'Sub-classification Within SC/ST Reservations Permitted',
    date: '2024-08-01',
    summary: 'A seven-judge Constitution Bench ruled that states can sub-classify Scheduled Castes and Scheduled Tribes for more equitable distribution of reservation benefits.',
    article: `In August 2024, a seven-judge Constitution Bench of the Supreme Court, by a 6:1 majority, held that states have the power to sub-classify Scheduled Castes and Scheduled Tribes to ensure that the benefits of reservation reach the most marginalized within these categories.

The judgment overruled the 2004 decision in E.V. Chinnaiah v. State of Andhra Pradesh, which had held that the SC/ST lists prepared under Articles 341 and 342 constitute homogeneous classes that cannot be sub-divided by states.

Key holdings include: Sub-classification is permissible - States can identify the more backward among SCs/STs and provide them preferential treatment within the reservation quota. Any sub-classification must be based on quantifiable data demonstrating that certain sub-groups are more backward. Sub-classification does not amount to disturbing the Presidential lists of SCs/STs.`,
    relevance: [
      'Reservation policy and Articles 15, 16',
      'Articles 341 and 342 - SC/ST lists',
      'Federalism and state powers',
      'Substantive equality doctrine',
    ],
    sources: [
      'State of Punjab v. Davinder Singh (2024)',
      'Supreme Court seven-judge bench'
    ]
  },
  {
    id: 'sc-same-sex-marriage',
    title: 'Same-Sex Marriage: Not a Fundamental Right, But Civil Unions Recognized',
    date: '2023-10-17',
    summary: 'The Supreme Court declined to legalize same-sex marriage but recognized the rights of queer couples to cohabit, access joint bank accounts, and be free from discrimination.',
    article: `In October 2023, a five-judge Constitution Bench delivered a nuanced verdict on petitions seeking legal recognition for same-sex marriages. While the Court declined to read a right to marry into the Constitution for same-sex couples, it made significant observations protecting LGBTQ+ rights.

The Court held 3:2 that there is no fundamental right to marry under the Constitution. Marriage is a statutory institution regulated by personal laws. However, all five judges agreed that queer couples have the right to cohabit and that the state cannot discriminate against them.

The Court directed the government to establish a committee to examine extending certain benefits to queer couples - such as joint bank accounts, nomination rights, and medical decision-making authority. The judgment leaves the door open for legislative action while providing interim protections.`,
    relevance: [
      'Article 14 and 21 - equality and dignity',
      'Personal laws vs. fundamental rights',
      'Judicial restraint vs. activism debate',
      'LGBTQ+ rights jurisprudence',
    ],
    sources: [
      'Supriyo v. Union of India (2023)',
      'Supreme Court Constitution Bench'
    ]
  },
  {
    id: 'sc-article-39b-property',
    title: 'Private Property Can Be Material Resources Under Article 39(b)',
    date: '2024-11-05',
    summary: 'A nine-judge bench ruled that private property can be considered material resources of the community under Article 39(b), enabling state acquisition for public distribution.',
    article: `In November 2024, a nine-judge Constitution Bench addressed whether material resources of the community in Article 39(b) includes privately owned property. By an 8:1 majority, the Court held that it does, but with important qualifications.

Article 39(b), a Directive Principle, mandates that the ownership and control of the material resources of the community are so distributed as best to subserve the common good.

Key holdings: Private property is included - The Court overruled the narrow interpretation and held that private resources can be material resources of the community if they are essential for community welfare. However, this is not automatic acquisition - The state must demonstrate that the resource is material to community welfare, redistribution serves the common good, and acquisition follows due process with fair compensation.`,
    relevance: [
      'Directive Principles and Fundamental Rights',
      'Property rights post-44th Amendment',
      'Land acquisition law',
      'Socialist principles in the Constitution',
    ],
    sources: [
      'Property Owners Association v. State of Maharashtra (2024)',
      'Supreme Court nine-judge bench'
    ]
  },

  // 🏆 Awards & Appointments
  {
    id: 'award-cji-khanna',
    title: 'Justice Sanjiv Khanna Appointed 51st Chief Justice of India',
    date: '2024-11-11',
    summary: 'Justice Sanjiv Khanna was sworn in as the 51st Chief Justice of India, succeeding Justice D.Y. Chandrachud, with a tenure until May 2025.',
    article: `Justice Sanjiv Khanna was sworn in as the 51st Chief Justice of India on November 11, 2024, following the retirement of Justice D.Y. Chandrachud. His tenure will last until May 13, 2025.

Justice Khanna was born on May 14, 1960, and enrolled as an advocate in 1983. He practiced primarily in the Delhi High Court, handling civil, criminal, revenue, and constitutional matters. He was appointed as an Additional Judge of the Delhi High Court in 2005 and became a permanent judge in 2006. He was elevated to the Supreme Court on January 18, 2019.

Notable Judgments include: Electoral Bonds case (2024) - part of the unanimous bench striking down the scheme; Article 370 case (2023) - upheld the abrogation; EVM-VVPAT verification case - authored the judgment declining 100% verification.`,
    relevance: [
      'Judicial appointments and collegium system',
      'Supreme Court functioning',
      'Constitutional courts - structure and leadership',
    ],
    sources: [
      'Supreme Court of India official records',
      'Government notification (Nov 2024)'
    ]
  },
  {
    id: 'award-nobel-peace-2024',
    title: 'Nobel Peace Prize 2024: Nihon Hidankyo (Japanese Atomic Bomb Survivors)',
    date: '2024-10-11',
    summary: 'The 2024 Nobel Peace Prize was awarded to Nihon Hidankyo, the Japanese organization of atomic bomb survivors (Hibakusha), for their efforts toward nuclear disarmament.',
    article: `The Norwegian Nobel Committee awarded the 2024 Nobel Peace Prize to Nihon Hidankyo, the Japan Confederation of A- and H-Bomb Sufferers Organizations, recognizing decades of advocacy by atomic bomb survivors (Hibakusha) for nuclear disarmament.

Founded in 1956, Nihon Hidankyo unites survivors of the Hiroshima and Nagasaki atomic bombings of August 1945. The organization has worked tirelessly to share testimonies of nuclear devastation, advocate for support for survivors, and campaign for the abolition of nuclear weapons worldwide.

The Committee highlighted that Hibakusha testimony has been instrumental in establishing a nuclear taboo - the norm against nuclear weapon use that has held since 1945. Their personal accounts of suffering have shaped global public opinion and influenced international treaties, including the Treaty on the Prohibition of Nuclear Weapons (TPNW, 2017).`,
    relevance: [
      'International humanitarian law',
      'Nuclear non-proliferation treaties',
      'Human rights advocacy and civil society',
      'International organizations and norm-building',
    ],
    sources: [
      'Nobel Prize official announcement (Oct 2024)',
      'Nihon Hidankyo official records'
    ]
  },
  {
    id: 'award-nobel-literature-2024',
    title: 'Nobel Prize in Literature 2024: Han Kang (South Korea)',
    date: '2024-10-10',
    summary: 'South Korean author Han Kang became the first Korean and first Asian woman to win the Nobel Prize in Literature, honored for her intense poetic prose.',
    article: `The Swedish Academy awarded the 2024 Nobel Prize in Literature to Han Kang, the acclaimed South Korean author, for her intense poetic prose that confronts historical traumas and exposes the fragility of human life.

Born in 1970 in Gwangju, South Korea, Han Kang is the daughter of novelist Han Seung-won. She studied Korean literature at Yonsei University and began her literary career in 1993. Her breakthrough international success came with The Vegetarian (2007), which won the Man Booker International Prize in 2016.

Major Works include: The Vegetarian - explores a woman radical rejection of violence through vegetarianism; Human Acts - a searing account of the 1980 Gwangju Uprising massacre; The White Book - a meditation on grief and loss. Han Kang is the first Korean laureate and only the 18th woman to receive the Literature Nobel.`,
    relevance: [
      'Cultural affairs and literary recognition',
      'Korean history - Gwangju Uprising context',
      'General awareness for CLAT',
    ],
    sources: [
      'Nobel Prize official announcement (Oct 2024)',
      'Swedish Academy citation'
    ]
  },
  {
    id: 'award-bharat-ratna-2024',
    title: 'Bharat Ratna 2024: Five Recipients Including LK Advani',
    date: '2024-02-09',
    summary: 'Five leaders received Bharat Ratna in 2024: LK Advani, Karpoori Thakur, PV Narasimha Rao, Chaudhary Charan Singh, and MS Swaminathan (four posthumously).',
    article: `In February 2024, the Government of India announced Bharat Ratna, the nation highest civilian honor, for five distinguished leaders - the largest cohort in a single year since 1999.

Recipients: Lal Krishna Advani (b. 1927) - veteran BJP leader and former Deputy Prime Minister; Karpoori Thakur (1924-1988, posthumous) - former CM of Bihar, known as Jan Nayak for championing OBC rights; PV Narasimha Rao (1921-2004, posthumous) - former PM who spearheaded the 1991 economic liberalization; Chaudhary Charan Singh (1902-1987, posthumous) - farmer leader and former PM who advocated agrarian reforms; MS Swaminathan (1925-2023, posthumous) - Father of India Green Revolution.

Constitutional Basis: Bharat Ratna is governed by Article 18(1), which permits the state to confer awards for military or academic distinction.`,
    relevance: [
      'National honors and constitutional provisions',
      'Modern Indian political history',
      'Economic liberalization history',
      'Agricultural policy and Green Revolution',
    ],
    sources: [
      'Government of India Gazette notifications (Feb 2024)',
      'Press Information Bureau'
    ]
  },

  // 🌍 International Events
  {
    id: 'intl-paris-olympics-2024',
    title: 'Paris Olympics 2024: India Wins 6 Medals',
    date: '2024-08-11',
    summary: 'India achieved its best-ever Olympic performance with 6 medals at Paris 2024, including historic achievements in shooting and wrestling.',
    article: `The Paris 2024 Summer Olympics (July 26 - August 11) marked India most successful Olympic campaign, with athletes winning six medals across multiple disciplines.

Medal Winners: Manu Bhaker - Bronze (Shooting, 10m Air Pistol Women) - historic first, ended India 12-year shooting medal drought; Manu Bhaker & Sarabjot Singh - Bronze (Shooting, 10m Air Pistol Mixed Team) - Bhaker became the first Indian to win two medals in a single Olympic edition since 1900; Swapnil Kusale - Bronze (Shooting, 50m Rifle 3 Positions Men); Neeraj Chopra - Silver (Athletics, Javelin Throw) - defending champion settled for silver with 89.45m; Aman Sehrawat - Bronze (Wrestling, 57kg Freestyle Men) - at 21, became the youngest Indian Olympic wrestling medalist; Indian Hockey Team - Bronze (Men Hockey) - back-to-back Olympic bronze after Tokyo 2020.`,
    relevance: [
      'Sports achievements and national developments',
      'General knowledge for competitive exams',
    ],
    sources: [
      'International Olympic Committee records',
      'Indian Olympic Association'
    ]
  },
  {
    id: 'intl-g20-rio-2024',
    title: 'G20 Summit 2024: Rio de Janeiro, Brazil',
    date: '2024-11-18',
    summary: 'Brazil hosted the G20 Summit in Rio de Janeiro with focus on fighting hunger, sustainable development, and global governance reform.',
    article: `Brazil hosted the 19th G20 Leaders Summit in Rio de Janeiro on November 18-19, 2024, marking the first South American host since Argentina in 2018. President Lula da Silva prioritized fighting hunger, inequality, and climate action.

Key Outcomes: Global Alliance Against Hunger and Poverty launched with initial commitments from 82 countries; Leaders endorsed discussions on international cooperation for taxing billionaires; Climate finance discussions focused on scaling climate finance for developing countries ahead of COP29; The declaration supported reform of the UN Security Council to include permanent representation for Africa and Latin America.

India Role: Prime Minister Modi participated actively, highlighting India G20 presidency achievements (2023) and advocating for Global South representation. Brazil handed over the G20 presidency to South Africa for 2025 - the first African nation to host.`,
    relevance: [
      'International organizations and summits',
      'Global governance and UN reform',
      'India foreign policy engagements',
    ],
    sources: [
      'G20 Brasil official communique',
      'Ministry of External Affairs (India)'
    ]
  },
  {
    id: 'intl-cop29-baku',
    title: 'COP29: UN Climate Summit in Baku, Azerbaijan',
    date: '2024-11-22',
    summary: 'COP29 in Baku focused on climate finance, with contentious negotiations over the New Collective Quantified Goal (NCQG) for funding from developed to developing nations.',
    article: `The 29th Conference of the Parties (COP29) to the UN Framework Convention on Climate Change was held in Baku, Azerbaijan, from November 11-22, 2024. Dubbed the Finance COP, the summit centered on establishing a new climate finance goal.

Key Outcomes: New Collective Quantified Goal (NCQG) - parties agreed on a new goal of 300 billion dollars annually by 2035 from developed to developing countries, up from the 100 billion dollar target set in 2009. Progress was made on operationalizing international carbon markets under Article 6. Building on COP28 breakthrough, discussions continued on operationalizing the Loss and Damage Fund.

India Position: India emphasized common but differentiated responsibilities and called for developed nations to take the lead in emissions reductions while supporting developing country transitions.`,
    relevance: [
      'International environmental law',
      'Paris Agreement and climate governance',
      'India climate policy positions',
    ],
    sources: [
      'UNFCCC official records',
      'COP29 Azerbaijan presidency'
    ]
  },
  {
    id: 'intl-brics-expansion',
    title: 'BRICS Expansion: Five New Members Join in 2024',
    date: '2024-01-01',
    summary: 'BRICS expanded to include Egypt, Ethiopia, Iran, Saudi Arabia, and UAE, significantly reshaping the bloc economic and geopolitical weight.',
    article: `Effective January 1, 2024, BRICS expanded from five to ten members with the addition of Egypt, Ethiopia, Iran, Saudi Arabia, and the United Arab Emirates. The expansion was decided at the 15th BRICS Summit in Johannesburg (August 2023).

New Members: Saudi Arabia - World largest oil exporter; UAE - Major trade and financial hub; Egypt - Largest Arab country by population, controls Suez Canal; Iran - Major oil reserves, geopolitically significant; Ethiopia - Fastest-growing African economy.

Significance: Expanded BRICS represents approximately 46% of global population and 36% of global GDP (PPP). The bloc now includes world largest oil producers. Key initiatives include New Development Bank expansion and discussions on common currency/payment mechanisms to reduce dollar dependence.

India Position: India has been cautiously supportive, seeking to balance BRICS engagement with its strategic partnerships with Western nations.`,
    relevance: [
      'International organizations and groupings',
      'Global economic governance',
      'India foreign policy - multi-alignment',
    ],
    sources: [
      '15th BRICS Summit Declaration (2023)',
      'Official announcements from member states'
    ]
  },

  // 🚀 Science & Technology
  {
    id: 'scitech-chandrayaan3',
    title: 'Chandrayaan-3: India Lands on Moon South Pole',
    date: '2023-08-23',
    summary: 'ISRO Chandrayaan-3 successfully soft-landed on the Moon south pole, making India the first nation to achieve this feat and only the fourth to land on the Moon.',
    article: `On August 23, 2023, India achieved a historic milestone when Chandrayaan-3 Vikram lander successfully touched down on the Moon south polar region, making India the first country to land near the lunar south pole and the fourth nation (after the USA, USSR, and China) to successfully soft-land on the Moon.

Mission Details: Launch - July 14, 2023, from Satish Dhawan Space Centre, Sriharikota; Launch Vehicle - LVM3-M4; Landing Site - 69.37 degrees S, 32.35 degrees E near Shiv Shakti Point. Components included Propulsion Module, Vikram Lander, and Pragyan Rover (26 kg, 6-wheeled rover that traveled approximately 100 meters on the lunar surface).

Scientific Achievements: Confirmed presence of sulfur near south pole; Measured lunar surface temperature variations; Analyzed elemental composition of lunar soil; Detected seismic activity (moonquakes). Mission budget was approximately Rs 615 crore (around 75 million dollars).`,
    relevance: [
      'Science and technology achievements',
      'Space policy and ISRO programs',
      'National developments for current affairs',
    ],
    sources: [
      'ISRO official mission updates',
      'Government of India announcements'
    ]
  },
  {
    id: 'scitech-aditya-l1',
    title: 'Aditya-L1: India First Solar Mission',
    date: '2023-09-02',
    summary: 'ISRO launched Aditya-L1, India first space-based solar observatory, to study the Sun from the Lagrange Point 1 (L1) - about 1.5 million km from Earth.',
    article: `On September 2, 2023, ISRO launched Aditya-L1, India first dedicated solar observation mission, from Sriharikota. The spacecraft reached its destination - the Sun-Earth Lagrange Point 1 (L1) - on January 6, 2024, after a journey of about 127 days.

Mission Objectives: Study solar corona, chromosphere, and photosphere; Understand coronal heating and solar wind acceleration; Observe Coronal Mass Ejections (CMEs) and solar flares; Study space weather and its effects on Earth.

L1 is a point in space approximately 1.5 million km from Earth toward the Sun where gravitational forces balance, allowing a spacecraft to remain in a stable orbit with continuous solar observation without eclipses.

Payloads include 7 instruments: VELC (Visible Emission Line Coronagraph), SUIT (Solar Ultraviolet Imaging Telescope), ASPEX, PAPA, SoLEXS, HEL1OS, and Magnetometer. Cost was approximately Rs 400 crore (48 million dollars).`,
    relevance: [
      'Space science and ISRO achievements',
      'Science and technology current affairs',
    ],
    sources: [
      'ISRO official mission page',
      'Scientific publications'
    ]
  },
  {
    id: 'scitech-semiconductor-mission',
    title: 'India Semiconductor Mission: Rs 76,000 Crore Investment',
    date: '2024-02-29',
    summary: 'India approved major semiconductor fabrication and assembly plants with Rs 76,000 crore in investments, aiming to establish domestic chip manufacturing capacity.',
    article: `In February 2024, the Union Cabinet approved three major semiconductor projects with a total investment of approximately Rs 1.26 lakh crore, of which the government will contribute about Rs 76,000 crore through the India Semiconductor Mission (ISM).

Approved Projects: Tata Electronics Fab in Dholera, Gujarat - India first semiconductor fabrication plant with Powerchip (Taiwan) partnership, investment Rs 91,000 crore, capacity 50,000 wafers per month; Tata Electronics ATMP in Morigaon, Assam - Assembly, Testing, Marking, and Packaging facility, investment Rs 27,000 crore; CG Power ATMP in Sanand, Gujarat - partnership with Renesas (Japan), investment Rs 7,600 crore.

The India Semiconductor Mission, launched in 2021, offers 50% capital support for semiconductor fabs, up to 50% support for display fabs, and Design Linked Incentive (DLI) scheme for chip design. Semiconductors are critical for electronics, defense, and emerging technologies.`,
    relevance: [
      'Industrial policy and manufacturing',
      'Strategic sectors and supply chains',
      'Government schemes and incentives',
    ],
    sources: [
      'Cabinet approval notification (Feb 2024)',
      'India Semiconductor Mission website'
    ]
  },

  // 📊 Important Reports & Indices
  {
    id: 'report-global-hunger-index',
    title: 'Global Hunger Index 2024: India Ranking and Concerns',
    date: '2024-10-10',
    summary: 'India ranked 105th out of 127 countries in the Global Hunger Index 2024, with a serious hunger level, sparking debate over methodology and government response.',
    article: `The Global Hunger Index (GHI) 2024, published by Concern Worldwide and Welthungerhilfe, ranked India 105th among 127 countries assessed, with a score indicating serious hunger levels.

India Score Composition based on four indicators: Undernourishment - Proportion of population with insufficient caloric intake (13.7%); Child Stunting - Children under 5 with low height-for-age (31.7%); Child Wasting - Children under 5 with low weight-for-height (18.7%); Child Mortality - Under-5 mortality rate (2.9%).

Key Findings: India child wasting rate (18.7%) is among the highest globally; Neighboring countries like Bangladesh (84th), Nepal (68th), and Sri Lanka (39th) ranked higher. The Indian government has consistently criticized the GHI methodology, arguing sample size is too small and government food security programs (PDS, PM-POSHAN) are not adequately considered.`,
    relevance: [
      'Social development indicators',
      'Food security and nutrition policy',
      'International rankings and reports',
    ],
    sources: [
      'Global Hunger Index 2024 Report',
      'Government of India response'
    ]
  },

  // 🏛️ Constitutional Amendments & Laws
  {
    id: 'law-new-criminal-laws',
    title: 'New Criminal Laws: BNS, BNSS, and BSA Replace Colonial Codes',
    date: '2024-07-01',
    summary: 'Three new criminal laws - Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam - came into force, replacing the IPC, CrPC, and Evidence Act.',
    article: `On July 1, 2024, India implemented three new criminal laws, replacing colonial-era statutes that had governed criminal justice for over 160 years:

Bharatiya Nyaya Sanhita (BNS) - Replaces IPC (1860): Terrorism defined (Section 113) - First statutory definition in general criminal law; Organized Crime (Section 111) - New provisions targeting syndicates; Sedition replaced - Section 124A IPC removed, new Section 152 covers acts endangering sovereignty; Community Service introduced as punishment for minor offenses; Mob Lynching - New provision with enhanced punishment.

Bharatiya Nagarik Suraksha Sanhita (BNSS) - Replaces CrPC (1973): Zero FIR mandated at any police station regardless of jurisdiction; Timelines prescribed - Maximum 90 days for investigation completion; Electronic evidence procedures for digital evidence collection; Trials in absentia permitted for proclaimed offenders; Videography mandatory for search and seizure operations.

Bharatiya Sakshya Adhiniyam (BSA) - Replaces Evidence Act (1872): Electronic records treated at par with physical documents; Primary evidence - Electronic records admissible without certification in certain cases.`,
    relevance: [
      'Criminal law and procedure - central to CLAT',
      'Recent legislative changes',
      'Fundamental rights implications',
    ],
    sources: [
      'Gazette of India notifications',
      'Ministry of Home Affairs advisories'
    ]
  },
  {
    id: 'law-women-reservation',
    title: '106th Constitutional Amendment: Women Reservation in Legislatures',
    date: '2023-09-28',
    summary: 'The Constitution (106th Amendment) Act reserves 33% of seats in Lok Sabha and state assemblies for women, to be implemented after delimitation post-2026 Census.',
    article: `The Constitution (106th Amendment) Act, 2023 - also called the Nari Shakti Vandan Adhiniyam - reserves one-third of seats in the Lok Sabha and state legislative assemblies for women. The Bill was passed with near-unanimous support in both Houses in September 2023.

Key Provisions: Article 330A (New) - Reserves 1/3rd seats in Lok Sabha for women; Article 332A (New) - Reserves 1/3rd seats in State Assemblies for women; Rotation - Reserved seats will rotate after each delimitation; SC/ST Quota - 1/3rd of SC/ST reserved seats will be for women from those communities; Duration - 15 years from commencement, extendable by Parliament.

Implementation Timeline: The reservation will take effect only after a Census is conducted (first after 2021 - likely 2026 or later), delimitation exercise is completed, and reserved constituencies are identified. This means implementation may not occur until elections in the early 2030s.

Not Covered: The amendment does not extend reservation to the Rajya Sabha or Legislative Councils.`,
    relevance: [
      'Constitutional amendments - procedure and substance',
      'Reservation policy and Article 15/16',
      'Women rights and representation',
      'Delimitation and Census process',
    ],
    sources: [
      'Constitution (106th Amendment) Act, 2023',
      'Parliamentary proceedings'
    ]
  },
  {
    id: 'law-uttarakhand-ucc',
    title: 'Uttarakhand Implements Uniform Civil Code (UCC) - First State',
    date: '2024-02-07',
    summary: 'Uttarakhand became the first state in independent India to enact a Uniform Civil Code, standardizing laws on marriage, divorce, inheritance, and live-in relationships.',
    article: `On February 7, 2024, the Uttarakhand Legislative Assembly passed the Uniform Civil Code (UCC) Bill, making it the first state in independent India to enact comprehensive uniform laws governing personal matters across all religions.

Key Provisions: Marriage - Minimum age 21 (men), 18 (women), mandatory registration within 60 days, polygamy prohibited for all communities; Divorce - Uniform grounds including cruelty, desertion, adultery, mandatory 6-month reconciliation period; Inheritance - Equal rights for sons and daughters, Class I heirs get equal shares; Live-in Relationships - Mandatory registration within 30 days, failure to register attracts up to 3 months imprisonment or Rs 25,000 fine; Adoption - Uniform adoption law for all communities.

Exemptions: Scheduled Tribes (as per Article 142); Matters covered by existing central laws.

Constitutional Basis: Article 44 (Directive Principle) enjoins the state to endeavour to secure a Uniform Civil Code. While not justiciable, courts have repeatedly urged implementation.`,
    relevance: [
      'Article 44 and Directive Principles',
      'Personal laws vs. uniform code debate',
      'Federal structure - state legislative powers',
      'Fundamental rights and DPSP balance',
    ],
    sources: [
      'Uttarakhand Uniform Civil Code, 2024',
      'Legislative Assembly proceedings'
    ]
  },
  {
    id: 'law-dpdp-act',
    title: 'Digital Personal Data Protection Act 2023',
    date: '2023-08-11',
    summary: 'India enacted its first comprehensive data protection law, establishing rights for data principals and obligations for data fiduciaries handling personal data.',
    article: `The Digital Personal Data Protection Act (DPDP Act) received presidential assent on August 11, 2023, marking India first comprehensive legislation on personal data protection after years of deliberation.

Key Concepts: Data Principal - Individual whose personal data is being processed; Data Fiduciary - Entity that determines purpose and means of data processing; Data Processor - Entity processing data on behalf of fiduciary; Consent Manager - Registered entity helping principals manage consent.

Rights of Data Principals: Right to access information about data processing; Right to correction and erasure of personal data; Right to grievance redressal; Right to nominate another person in case of death/incapacity.

Obligations of Data Fiduciaries: Process data only for lawful purposes with consent; Ensure data accuracy and security; Delete data when purpose is fulfilled; Notify breaches to the Board and affected individuals.

Data Protection Board: New adjudicatory body to handle complaints; Can impose penalties up to Rs 250 crore per violation. Cross-Border Transfers are permitted to countries not blacklisted by the government.`,
    relevance: [
      'Right to privacy and Article 21',
      'Technology law and regulations',
      'Consumer rights and data protection',
      'Compliance and corporate governance',
    ],
    sources: [
      'Digital Personal Data Protection Act, 2023',
      'Government notifications'
    ]
  }
];
