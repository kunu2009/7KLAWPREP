export interface DailyCurrentAffairsItem {
  category:
    | "Law"
    | "Judgments"
    | "National"
    | "International"
    | "Maharashtra"
    | "Economy"
    | "Science-Tech"
    | "Environment"
    | "Sports"
    | "Awards"
    | "Crime";
  headline: string;
  detail: string;
}

export interface DailyCurrentAffairsDay {
  id: string;
  date: string;
  dayLabel: string;
  items: DailyCurrentAffairsItem[];
}

export const jan2026DailyCurrentAffairs: DailyCurrentAffairsDay[] = [
  {
    id: "daily-2026-01-01",
    date: "2026-01-01",
    dayLabel: "1 Jan 2026",
    items: [
      { category: "Law", headline: "Criminal procedure digital filing review begins", detail: "Law ministry initiated a quarterly review of e-filing readiness in district courts and prosecution offices." },
      { category: "Judgments", headline: "High Court reiterates bail as rule in minor economic offences", detail: "A division bench emphasized proportionality and delay concerns while deciding interim bail in a non-violent financial case." },
      { category: "National", headline: "Union ministries release annual outcome targets", detail: "Departments published first-quarter outcome indicators for welfare delivery, infrastructure, and grievance redress." },
      { category: "International", headline: "India participates in regional maritime security dialogue", detail: "Delegates focused on anti-piracy coordination, search-and-rescue protocols, and secure shipping lanes." },
      { category: "Maharashtra", headline: "State urban transport integration plan announced", detail: "Maharashtra transport authorities proposed multimodal ticketing pilots for Mumbai-Pune metropolitan corridors." },
      { category: "Economy", headline: "GST analytics cells begin Q4 compliance drives", detail: "Tax authorities launched targeted compliance outreach for small and mid-size enterprises." },
      { category: "Science-Tech", headline: "Public digital infrastructure interoperability workshop held", detail: "Officials reviewed standards for secure API integration across state service platforms." },
      { category: "Environment", headline: "City-level winter air quality monitoring expanded", detail: "Additional low-cost sensors were deployed for ward-level pollutant trend mapping." },
      { category: "Sports", headline: "National coaching framework update released", detail: "Sports bodies issued revised athlete development benchmarks for junior and senior circuits." },
      { category: "Awards", headline: "Call for nominations opened for civilian honours support portal", detail: "Digital nomination assistance desks were announced for rural applicants." },
      { category: "Crime", headline: "Interstate cyber fraud taskforce conducts coordinated raids", detail: "Police teams in multiple states executed warrants linked to phishing and mule-account rings." }
    ]
  },
  {
    id: "daily-2026-01-02",
    date: "2026-01-02",
    dayLabel: "2 Jan 2026",
    items: [
      { category: "Law", headline: "Model mediation rules discussed with states", detail: "A consultative meeting examined standardized mediation timelines in civil and commercial disputes." },
      { category: "Judgments", headline: "Court stresses timely compensation in motor accident claims", detail: "A bench directed faster disbursal protocols and digital status tracking for claimants." },
      { category: "National", headline: "Public grievance dashboard gets district-level expansion", detail: "The central dashboard integrated additional district nodes for real-time pending-case visibility." },
      { category: "International", headline: "India-ASEAN business council meets on logistics links", detail: "Talks included customs facilitation, port modernization, and supply chain resilience." },
      { category: "Maharashtra", headline: "State announces drought-resilience micro-irrigation package", detail: "Agriculture department outlined district-level subsidy windows for efficient irrigation systems." },
      { category: "Economy", headline: "MSME credit guarantee utilization review released", detail: "Data highlighted demand concentration in manufacturing clusters and service-sector uptake." },
      { category: "Science-Tech", headline: "AI ethics training module introduced for public officials", detail: "Pilot training covers explainability, bias auditing, and citizen grievance handling." },
      { category: "Environment", headline: "Wetland restoration action plans updated", detail: "State environment boards submitted revised timelines for urban wetland rejuvenation." },
      { category: "Sports", headline: "National women’s hockey camp calendar notified", detail: "Federation announced pre-tournament conditioning and high-performance support phases." },
      { category: "Awards", headline: "Classical arts fellowship shortlist published", detail: "Cultural ministry released category-wise shortlists with regional representation data." },
      { category: "Crime", headline: "Narcotics enforcement tracks synthetic drug distribution hubs", detail: "Agencies mapped intercity transit channels and initiated seizure-led disruption strategy." }
    ]
  },
  {
    id: "daily-2026-01-03",
    date: "2026-01-03",
    dayLabel: "3 Jan 2026",
    items: [
      { category: "Law", headline: "Legal aid clinic strengthening circular issued", detail: "Authorities directed monthly outreach camps in underserved blocks and prison legal cells." },
      { category: "Judgments", headline: "Court reiterates rights of undertrial prisoners", detail: "Order called for periodic jail review boards and faster production through video conferencing." },
      { category: "National", headline: "Skill mission centers mapped to district industry plans", detail: "National skilling ecosystem announced tighter alignment with local hiring demand." },
      { category: "International", headline: "Bilateral education mobility talks progress", detail: "Officials discussed mutual credit frameworks and student visa facilitation protocols." },
      { category: "Maharashtra", headline: "Mumbai coastal resilience audit tabled", detail: "Audit addressed drainage upgrades, tide-risk zones, and emergency evacuation planning." },
      { category: "Economy", headline: "Retail inflation trend briefing released", detail: "Policy note tracked food-price moderation and transport-cost transmission patterns." },
      { category: "Science-Tech", headline: "Semiconductor design challenge for startups launched", detail: "Innovation mission announced prototyping support and mentorship for fabless teams." },
      { category: "Environment", headline: "Solar rooftop adoption report released", detail: "Urban local bodies reported improved adoption in residential clusters with net metering." },
      { category: "Sports", headline: "National athletics talent ID meets begin", detail: "Regional trials started with expanded sports-science assessment protocols." },
      { category: "Awards", headline: "Science communication awards jury panel announced", detail: "Panel includes academics, editors, and public engagement practitioners." },
      { category: "Crime", headline: "Economic offences wing files charge sheet in procurement fraud case", detail: "Investigators submitted digital evidence records and transaction trail analysis." }
    ]
  },
  {
    id: "daily-2026-01-04",
    date: "2026-01-04",
    dayLabel: "4 Jan 2026",
    items: [
      { category: "Law", headline: "Draft witness protection implementation note circulated", detail: "State home departments received model SOPs for risk categorization and relocation support." },
      { category: "Judgments", headline: "Bench emphasizes reasoned administrative orders", detail: "Court set aside a departmental action citing lack of speaking order and procedural fairness." },
      { category: "National", headline: "Rural road connectivity review takes stock", detail: "Quarterly report measured completion pace, contractor accountability, and quality checks." },
      { category: "International", headline: "India participates in climate finance consultations", detail: "Delegation highlighted adaptation funding access and technology transfer requirements." },
      { category: "Maharashtra", headline: "Nagpur mobility pilot for integrated bus ticketing starts", detail: "Pilot links digital payment systems and route optimization for city commuters." },
      { category: "Economy", headline: "Export facilitation desks expanded to tier-2 clusters", detail: "Commerce bodies launched support cells for compliance, documentation, and market access." },
      { category: "Science-Tech", headline: "Public health data interoperability standards revised", detail: "Health-tech working group released structured data formats for district systems." },
      { category: "Environment", headline: "Forest fire preparedness advisories issued", detail: "Risk mapping and local response teams were activated ahead of dry-season hotspots." },
      { category: "Sports", headline: "Para-sports training grants disbursal cycle opened", detail: "Athlete support includes assistive equipment and competition travel assistance." },
      { category: "Awards", headline: "Literary translation grant winners announced", detail: "Selections covered multiple Indian languages with focus on legal-literacy texts." },
      { category: "Crime", headline: "Anti-human trafficking units launch rescue operations", detail: "Joint teams coordinated with NGOs for victim support and rehabilitation protocols." }
    ]
  },
  {
    id: "daily-2026-01-05",
    date: "2026-01-05",
    dayLabel: "5 Jan 2026",
    items: [
      { category: "Law", headline: "Commercial courts caseflow digitization review held", detail: "High courts reviewed pendency dashboards and e-summons performance indicators." },
      { category: "Judgments", headline: "Court upholds transparency in municipal contracting", detail: "Judgment reinforced disclosure norms and objective criteria in civic tender evaluation." },
      { category: "National", headline: "National nutrition mission progress data updated", detail: "District-level indicators showed mixed outcomes in maternal and child health metrics." },
      { category: "International", headline: "India-Gulf logistics corridor talks continue", detail: "Maritime logistics, warehousing linkages, and customs digitization remained key agenda items." },
      { category: "Maharashtra", headline: "Pune smart water metering pilot expanded", detail: "Urban utility authorities added new wards for leak detection and demand management." },
      { category: "Economy", headline: "Banking outreach targets revised for financial inclusion", detail: "Rural banking correspondents received updated service-delivery benchmarks." },
      { category: "Science-Tech", headline: "Cyber hygiene campaign launched in universities", detail: "CERT-linked modules introduced phishing awareness and incident reporting drills." },
      { category: "Environment", headline: "Urban biodiversity parks policy advisory issued", detail: "State-level guidance covered native species, restoration methods, and citizen stewardship." },
      { category: "Sports", headline: "National badminton circuit schedule released", detail: "Calendar includes youth and senior tournaments with ranking-linked qualification points." },
      { category: "Awards", headline: "Public service innovation award entries invited", detail: "Applications sought district-level governance innovations with measurable impact." },
      { category: "Crime", headline: "Financial cybercrime helpline reports increased recovery rates", detail: "Police nodal teams improved response time for freezing fraudulent transactions." }
    ]
  },
  {
    id: "daily-2026-01-06",
    date: "2026-01-06",
    dayLabel: "6 Jan 2026",
    items: [
      { category: "Law", headline: "State legal services authorities publish outreach calendar", detail: "Monthly legal-awareness camps announced for labour, tenancy, and women’s rights issues." },
      { category: "Judgments", headline: "Court clarifies principles in preventive detention review", detail: "Bench reiterated strict procedural compliance and communication of detention grounds." },
      { category: "National", headline: "Disaster preparedness drills scheduled across high-risk districts", detail: "NDMA-linked planning includes evacuation routes, emergency medical nodes, and command rehearsals." },
      { category: "International", headline: "Multilateral digital governance session includes India position paper", detail: "Paper emphasized trusted data flows, interoperability, and rights-based safeguards." },
      { category: "Maharashtra", headline: "Konkan coastal erosion mitigation plans discussed", detail: "Technical teams reviewed sea-wall, mangrove, and sediment-management options." },
      { category: "Economy", headline: "Public procurement e-marketplace performance note released", detail: "Report highlighted faster vendor onboarding and reduced bid-cycle timelines." },
      { category: "Science-Tech", headline: "National EV charging interoperability standards workshop", detail: "Regulators and industry coordinated on connector standards and settlement protocols." },
      { category: "Environment", headline: "Groundwater stress mapping update published", detail: "Priority blocks identified for recharge interventions and cropping advisories." },
      { category: "Sports", headline: "Grassroots football coaching accreditation drive launched", detail: "State associations began new certification rounds for school-level coaches." },
      { category: "Awards", headline: "Youth innovation awards state nominations finalized", detail: "Shortlisted teams span clean energy, agri-tech, and accessibility-focused solutions." },
      { category: "Crime", headline: "Special court monitoring in organized crime trials intensified", detail: "Case management protocols were updated to improve witness scheduling and security." }
    ]
  },
  {
    id: "daily-2026-01-07",
    date: "2026-01-07",
    dayLabel: "7 Jan 2026",
    items: [
      { category: "Law", headline: "Consultation on tenancy dispute fast-track mechanisms held", detail: "Urban development and law departments reviewed model dispute-redress frameworks." },
      { category: "Judgments", headline: "Court reiterates environmental clearance compliance standards", detail: "Order required strict adherence to conditional approvals and periodic monitoring reports." },
      { category: "National", headline: "Rural digital service centers receive capacity upgrade package", detail: "Program expands citizen-service availability for certificates, payments, and grievance filing." },
      { category: "International", headline: "South Asian health cooperation dialogue convened", detail: "Delegates discussed disease surveillance interoperability and emergency response coordination." },
      { category: "Maharashtra", headline: "State education board outlines exam process integrity controls", detail: "Authorities added biometric attendance and digital chain-of-custody safeguards." },
      { category: "Economy", headline: "Industrial corridor project progress dashboard updated", detail: "Data showed phased progress in land readiness, utilities, and investor onboarding." },
      { category: "Science-Tech", headline: "Public AI sandbox receives new governance guidelines", detail: "Framework includes audit logs, risk scoring, and mandatory human oversight thresholds." },
      { category: "Environment", headline: "Urban flood-control infrastructure maintenance cycle begins", detail: "Municipal bodies started desilting, drain restoration, and pump-station readiness checks." },
      { category: "Sports", headline: "Women’s cricket domestic camp support expanded", detail: "High-performance units added injury-prevention and analytics support systems." },
      { category: "Awards", headline: "National language technology challenge winners announced", detail: "Projects recognized for legal translation and accessibility tooling in Indian languages." },
      { category: "Crime", headline: "Digital fraud syndicate charge framing begins in special court", detail: "Proceedings advanced on evidence clusters related to app-based loan harassment networks." }
    ]
  },
  {
    id: "daily-2026-01-08",
    date: "2026-01-08",
    dayLabel: "8 Jan 2026",
    items: [
      { category: "Law", headline: "Consumer dispute e-hearing protocol standardized", detail: "Consumer commissions adopted scheduling and record-format standards for remote hearings." },
      { category: "Judgments", headline: "Bench stresses parity in compensation calculation", detail: "Judicial order called for non-arbitrary compensation methodology across similarly placed claimants." },
      { category: "National", headline: "Women and child protection coordination review conducted", detail: "Interdepartmental meeting aligned shelter, legal aid, and counseling referral pathways." },
      { category: "International", headline: "Trade facilitation working group discusses standards harmonization", detail: "Focus remained on conformity assessment and reducing non-tariff barriers." },
      { category: "Maharashtra", headline: "State announces district innovation grants for local governance", detail: "Grants target waste management, civic tech, and public grievance efficiency pilots." },
      { category: "Economy", headline: "Public sector capex utilization statement released", detail: "Spending trends highlighted transport, power, and urban infrastructure concentration." },
      { category: "Science-Tech", headline: "Data governance fellowship programme for civil servants launched", detail: "Curriculum includes privacy principles, anonymization methods, and impact assessment." },
      { category: "Environment", headline: "Air quality compliance audits begin for industrial belts", detail: "Pollution boards initiated stack-emission checks and consent-condition verification rounds." },
      { category: "Sports", headline: "National wrestling support calendar revised", detail: "Preparatory camps aligned with international event timelines and recovery protocols." },
      { category: "Awards", headline: "Police service excellence award longlist published", detail: "Criteria include investigation quality, conviction support, and victim assistance performance." },
      { category: "Crime", headline: "Wildlife crime control operations report issued", detail: "Task units recorded seizures and interstate coordination outcomes in trafficking hotspots." }
    ]
  },
  {
    id: "daily-2026-01-09",
    date: "2026-01-09",
    dayLabel: "9 Jan 2026",
    items: [
      { category: "Law", headline: "E-governance legal compliance checklist adopted by departments", detail: "Departments received standardized checklists for notice, hearing, and record obligations in digital workflows." },
      { category: "Judgments", headline: "Court underscores transparency in public recruitment disputes", detail: "Order directed publication of normalized scores and objective grievance windows." },
      { category: "National", headline: "Affordable housing implementation review updated", detail: "Review assessed beneficiary verification and project completion bottlenecks across states." },
      { category: "International", headline: "India joins regional cybersecurity confidence-building session", detail: "Session covered incident disclosure channels and cross-border cooperation templates." },
      { category: "Maharashtra", headline: "Maharashtra school safety compliance audit begins", detail: "Audit includes building standards, evacuation preparedness, and emergency communication systems." },
      { category: "Economy", headline: "MSME digital invoicing adoption data released", detail: "Survey showed growth in formalization but uneven adoption in micro-enterprise clusters." },
      { category: "Science-Tech", headline: "Telemedicine quality standards advisory updated", detail: "Guidance clarified prescription records, referral escalation, and patient-consent documentation." },
      { category: "Environment", headline: "Coastal zone management public consultation held", detail: "Stakeholders discussed livelihood concerns, hazard mapping, and conservation obligations." },
      { category: "Sports", headline: "Athlete mental wellness support framework expanded", detail: "National federations were advised to provide trained counsellor access during camps." },
      { category: "Awards", headline: "Public administration awards portal opens district nominations", detail: "District collectors invited to submit innovations with measurable governance outcomes." },
      { category: "Crime", headline: "Special investigation teams crack online exam cheating racket", detail: "Arrests and device seizures followed digital forensics and payment trail analysis." }
    ]
  },
  {
    id: "daily-2026-01-10",
    date: "2026-01-10",
    dayLabel: "10 Jan 2026",
    items: [
      { category: "Law", headline: "State-level judicial infrastructure coordination meeting held", detail: "Officials reviewed courtroom modernization, accessibility, and digital records infrastructure." },
      { category: "Judgments", headline: "Bench highlights timely compliance with tribunal orders", detail: "Court cautioned authorities against delayed implementation and repetitive litigation." },
      { category: "National", headline: "Civil defence preparedness guidelines updated", detail: "Preparedness note emphasizes citizen drills, communication chains, and district command integration." },
      { category: "International", headline: "India’s delegation engages in maritime law capacity workshop", detail: "Workshop addressed enforcement cooperation, port-state controls, and legal harmonization." },
      { category: "Maharashtra", headline: "Maharashtra public transport safety audit report tabled", detail: "Audit covered fleet fitness, emergency response, and driver training compliance." },
      { category: "Economy", headline: "State investment facilitation cell publishes single-window metrics", detail: "Report measured approval timelines, grievance disposal, and sector-wise investor uptake." },
      { category: "Science-Tech", headline: "Govt-backed language AI pilot expands legal text translation", detail: "Pilot tools now include multilingual summaries for citizen-facing legal awareness material." },
      { category: "Environment", headline: "Urban tree census methodology framework released", detail: "New protocol standardizes geotagging, species classification, and maintenance accountability." },
      { category: "Sports", headline: "National games preparation assessment completed", detail: "Sports authorities reviewed venue readiness, athlete logistics, and anti-doping preparedness." },
      { category: "Awards", headline: "National sports excellence nominations verified", detail: "Committees completed eligibility checks and performance dossier validation." },
      { category: "Crime", headline: "Police anti-extortion monitoring cells report coordinated action", detail: "Inter-district units tracked organized extortion complaints and rapid response outcomes." }
    ]
  }
];
