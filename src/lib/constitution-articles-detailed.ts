// Comprehensive Constitution of India - Detailed Articles (12 Iterations)
// Organized by Parts: Fundamental Rights, DPSPs, Fundamental Duties, etc.

export interface ConstitutionArticle {
  id: string;
  article: string;
  part: string;
  title: string;
  summary: string;
  fullText: string;
  keyPoints: string[];
  relatedArticles: string[];
  landmark: boolean;
  exams: string[];
}

export const constitutionArticles: ConstitutionArticle[] = [
  // ITERATION 1: Articles 1-20 (Preamble, Citizenship, Fundamental Rights - Part I & II)
  {
    id: 'coi-preamble',
    article: 'Preamble',
    part: 'Preamble',
    title: 'Constitution of India - Preamble',
    summary: 'The Preamble outlines the objectives: a sovereign democratic republic with liberty, equality, and fraternity. It is the preface to the Constitution and reflects the intent of the framers.',
    fullText: `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN DEMOCRATIC REPUBLIC and to secure to all its citizens:

JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity; and to promote among them all
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;

IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.

The Preamble was amended by the 42nd Amendment (1976) to insert "Socialist" and "Secular" and to change "Sovereign" to a more emphatic conception. This reflects India's commitment to socio-economic justice and religious neutrality of the state.`,
    keyPoints: [
      'Sovereignty: India is fully independent, subordinate to none',
      'Democratic: Government by representatives elected by the people',
      'Republic: Head of State is a President elected by the people, not a hereditary monarch',
      'Justice: Social, economic, political - ensures equitable distribution of resources and opportunities',
      'Liberty: Fundamental freedoms including speech, expression, belief, faith, worship',
      'Equality: Both status and opportunity for all citizens, without discrimination',
      'Fraternity: Promoting national consciousness and unity while respecting individual dignity',
      '42nd Amendment Impact: Added "Socialist" (state ownership of means of production) and "Secular" (state neutral on religion)',
    ],
    relatedArticles: ['Article 12', 'Article 13', 'Article 14', 'Article 19'],
    landmark: true,
    exams: ['CLAT', 'CAT', 'Judicial exams', 'Law entrance'],
  },
  {
    id: 'coi-art1',
    article: 'Article 1',
    part: 'Part I - The Union and Its Territory',
    title: 'Name and Extent of the Union',
    summary: 'India is a sovereign democratic republic with a federal structure. The union comprises all states and union territories.',
    fullText: `Article 1(1): India, that is Bharat, shall be a Union of States.

Article 1(2): The territory of India shall comprise: (a) the territories of the States; (b) the Union territories specified in the First Schedule; and (c) such other territories as may be acquired.

Article 1 establishes India as a single indivisible union. The term "Union" is used instead of "Federation" to emphasize national unity despite federalism. States within the Union possess delegated sovereignty; ultimate sovereignty rests with "We, the People."

The First Schedule lists the States and Union Territories. This can be amended by Parliament through ordinary legislation (not requiring constitutional amendment) for creating, dividing, or altering territories.`,
    keyPoints: [
      'India is an indivisible union - cannot be dissolved or dismantled',
      'Two components: States (have legislatures and governments) and Union Territories (administered by Centre)',
      '"Union" language emphasizes national unity over federal divisions',
      'Parliament has plenary power to reorganize states and territories',
      'Sovereignty remains with the people collectively, not divided between Centre and States',
    ],
    relatedArticles: ['Article 2', 'Article 3', 'Article 4', 'First Schedule'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law subjects'],
  },
  {
    id: 'coi-art12',
    article: 'Article 12',
    part: 'Part III - Fundamental Rights',
    title: 'Definition of State',
    summary: 'Defines "State" for the purpose of enforcing fundamental rights. State includes all government entities and authorities.',
    fullText: `Article 12: In this Part, unless the context otherwise requires, "the State" includes the Government and Parliament of India and the Government and the Legislature of each of the States and all local or other authorities within the territory of India or under the control of the Government of India.

This definition is crucial for fundamental rights enforcement. It clarifies that rights are enforceable not just against the central government but also against states, legislatures, and all governmental bodies. The phrase "local or other authorities" has been interpreted broadly to include educational institutions receiving state aid, government-recognized bodies, and quasi-governmental organizations.

Key Supreme Court interpretations: 
- Private entities generally cannot violate fundamental rights (doctrine of state action limitation), but exceptions exist
- Government-aided institutions performing public functions may be treated as "state"
- Universities and colleges receiving state aid fall within "state" definition`,
    keyPoints: [
      'State includes government at Centre, States, legislatures, local bodies, and all authorities under government control',
      'Broad inclusive definition to ensure rights are enforceable against all government action',
      'Private parties generally NOT bound by fundamental rights (state action doctrine), with rare exceptions',
      'Government-aided schools, colleges considered "state" for fundamental rights purposes',
      'Rights available to Indian citizens and, in some cases, to all persons within Indian territory',
    ],
    relatedArticles: ['Article 13', 'Article 14', 'Article 32'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law, Constitutional law'],
  },
  {
    id: 'coi-art13',
    article: 'Article 13',
    part: 'Part III - Fundamental Rights',
    title: 'Laws Inconsistent with Fundamental Rights',
    summary: 'Establishes that laws violating fundamental rights are void. This is the constitutional basis for judicial review of legislation.',
    fullText: `Article 13(1): All laws in force in the territory of India before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void.

Article 13(2): The State shall not make any law which takes away or abridges the rights conferred by this Part, and any law made in contravention of this clause shall, to the extent of the contravention, be void.

Article 13(3): In this article, unless the context otherwise requires, "law" includes any Ordinance, order, bye-law, rule, regulation, notification, custom or usage having in the territory of India the force of law or deriving validity therefrom, but does not include any law so far as it imposes any tax or relates to any matter to which the taxing power of the Union or of any State extends.

Article 13 gives primacy to fundamental rights over all legislation. The Supreme Court uses this article as the basis for striking down laws that violate constitutional rights. It also embeds judicial review into the Constitution itself—not a judge-made doctrine but a constitutional mandate.

Scope of "law": Includes statutes, ordinances, regulations, bye-laws, rules, even customs if they have force of law. Excludes tax laws and laws outside the scope of fundamental rights.`,
    keyPoints: [
      'Constitutional supremacy: Fundamental rights cannot be overridden by ordinary laws',
      'Judicial review power: Courts can declare laws unconstitutional if they violate FRs',
      'Pre-constitutional laws can be struck down if inconsistent with FRs (retrospective effect)',
      'Burden on state to justify restrictions on rights (doctrine of reasonable restrictions)',
      '"Law" defined broadly to include all legislative and quasi-legislative acts',
      'Excluded from scope: Tax laws (subject to separate review under Article 265) and laws outside FRs',
    ],
    relatedArticles: ['Article 12', 'Article 14', 'Article 19', 'Article 32'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law, Judicial review'],
  },
  {
    id: 'coi-art14',
    article: 'Article 14',
    part: 'Part III - Fundamental Rights',
    title: 'Equality Before Law and Equal Protection',
    summary: 'Guarantees equality before law and equal protection. No discrimination based on arbitrary classification.',
    fullText: `Article 14: The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.

Equality before law: The state and its agencies must treat all persons alike. Laws and their enforcement must not discriminate arbitrarily. Derived from Anglo-Saxon legal traditions.

Equal protection of laws: More substantive—laws must not discriminate against persons in similar circumstances. Laws can differentiate if the classification is reasonable and serves a legitimate governmental purpose.

Test for reasonable classification (Established in E.P. Royappa and others):
1. Classification must be based on some intelligible differentia (clear, rational basis)
2. Differentia must bear a rational relation to the object sought to be achieved by the law
3. Persons grouped together must have some common characteristics relevant to the purpose

Article 14 does NOT prohibit all classification; it forbids ARBITRARY classification. A law can treat persons differently if the classification is reasonable.`,
    keyPoints: [
      'Equality is both formal (Article 14) and substantive (Articles 15, 16)',
      'State cannot deny equality based on arbitrary or irrelevant distinctions',
      'What is prohibited: Arbitrary, capricious, discriminatory legislation',
      'What is allowed: Reasonable classifications serving legitimate state purposes',
      'Classification test: Intelligible differentia + rational nexus to object',
      'Sexual equality: Gender-based classification subject to strict scrutiny (modern interpretation)',
      'International dimension: Includes all persons within Indian territory, not only citizens',
    ],
    relatedArticles: ['Article 15', 'Article 16', 'Article 13'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law, Equality'],
  },
  {
    id: 'coi-art15',
    article: 'Article 15',
    part: 'Part III - Fundamental Rights',
    title: 'Prohibition of Discrimination',
    summary: 'Prohibits discrimination by state on grounds of religion, race, caste, gender, or place of birth. Permits special provisions for backward classes.',
    fullText: `Article 15(1): The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.

Article 15(2): No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to access to shops, public restaurants, hotels, and places of public resort; or the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.

Article 15(3): Nothing in this article shall prevent the State from making any special provision for women and children.

Article 15(4): Nothing in this article or in clause (2) of Article 29 shall prevent the State from making any special provision for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes and the Scheduled Tribes.

Article 15 goes beyond formal equality (Article 14) to address systemic discrimination. It specifically targets caste discrimination (reflecting India's caste history). Article 15(4) permits affirmative action via reservations for SC/ST and OBC communities.

Amendment history: Article 15(4) inserted by First Amendment (1951); Article 15(5) inserted by 103rd Amendment (2019) for compensatory discrimination in education and employment.`,
    keyPoints: [
      'Prohibited grounds: Religion, race, caste, sex, place of birth',
      'Applies only to State action, NOT private discrimination (outside scope of FR)',
      'Covers denial of access to public places and public resources',
      'Permits special provisions for women, children, SC/ST/backward classes',
      'Caste-specific: India\'s unique historical context embedded in constitutional design',
      '103rd Amendment: EWS (Economically Weaker Section) reservation constitutional',
      'Gender equality: Progressive interpretation now includes LGBTQ+ rights under Article 15',
    ],
    relatedArticles: ['Article 14', 'Article 16', 'Article 21', 'Article 51A(e)'],
    landmark: true,
    exams: ['CLAT', 'CAT', 'Constitutional law'],
  },
  {
    id: 'coi-art19',
    article: 'Article 19',
    part: 'Part III - Fundamental Rights',
    title: 'Protection of Certain Rights Regarding Freedom',
    summary: 'Guarantees fundamental freedoms: speech, assembly, association, movement, residence, profession. Subject to reasonable restrictions.',
    fullText: `Article 19(1): All citizens shall have the right: (a) to freedom of speech and expression; (b) to assemble peaceably and without arms; (c) to form associations or unions; (d) to move freely throughout the territory of India; (e) to reside and settle in any part of the territory of India; and (g) to practice any profession, or to carry on any occupation, trade or business.

[Note: Clause (f) on property rights was deleted by 44th Amendment in 1978]

Article 19(2)-(6): Reasonable restrictions can be imposed on each freedom by law.
- Speech/Expression: Security of state, friendly relations with foreign powers, public order, decency/morality, contempt of court, defamation, incitement to offence
- Assembly: By authority of law for sovereignty/integrity, public order, decency/morality
- Association: By authority of law for sovereignty/integrity, public order
- Movement: By authority of law for any area for protection of interests of general public, state citizens, etc.
- Residence/Settlement: By authority of law (Parliament)
- Profession: By authority of law (Parliament)

Article 19 is the "liberty" pillar of the Constitution. It embeds democratic freedoms essential to self-governance. The restrictions clause (19(2)-(6)) balances individual freedom with state interests.

Modern interpretation: Hate speech, defamation, obscenity subject to reasonable restrictions within the enumerated grounds. Freedom of press is part of freedom of expression.`,
    keyPoints: [
      'Core democratic freedoms: Speech, assembly, association, movement, residence, profession',
      'Applies to citizens only (unlike some other rights available to "persons")',
      'Restrictions must be prescribed by law and be reasonable',
      'Enumerated grounds: Must fall within listed categories in Article 19(2)-(6)',
      'Press freedom: Implicit in Article 19(1)(a), now also in Article 19A (right to information)',
      'Public order doctrine: Can restrict speech if it threatens public order (broad but not unlimited)',
      'Reasonable restrictions test: Purpose must be legitimate, measure must be proportionate',
    ],
    relatedArticles: ['Article 20', 'Article 21', 'Article 25', 'Article 32'],
    landmark: true,
    exams: ['CLAT', 'CAT', 'Constitutional law'],
  },

  // ITERATION 2: Articles 20-30 (Right to Life, Exploitation, Religion)
  {
    id: 'coi-art20',
    article: 'Article 20',
    part: 'Part III - Fundamental Rights',
    title: 'Protection in Respect of Conviction for Offences',
    summary: 'Protects persons from retrospective criminal laws and self-incrimination. Ensures due process in criminal proceedings.',
    fullText: `Article 20(1): No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the act charged as an offence, nor be subjected to a penalty greater than might have been inflicted under the law in force at the time of commission of the offence.

Article 20(2): No person shall be prosecuted and punished for the same offence more than once.

Article 20(3): No person accused of any offence shall be compelled to be a witness against himself.

Article 20 incorporates principles of criminal justice: prohibition on ex post facto laws (retrospective criminal laws), double jeopardy, and self-incrimination protections. These are foundational to rule of law.

Ex post facto prohibition: A person cannot be punished for an act that was legal when done but became illegal later.

Double jeopardy: A person acquitted or convicted of an offence cannot be tried again for the same offence. However, this does not prevent appellate proceedings or retrial ordered by higher courts.

Right against self-incrimination: A person cannot be compelled to testify against himself during criminal proceedings. Exception: Petty proceedings before lower courts may have exceptions.`,
    keyPoints: [
      'No retrospective criminal laws: Can only be punished for violations of law existing at time of act',
      'No double jeopardy: Cannot be tried twice for the same offence (prevents harassment)',
      'Right against self-incrimination: Cannot be forced to be witness against self',
      'Applies to criminal prosecutions, not civil matters',
      'Fundamental to rule of law and criminal justice fairness',
      'Custody provisions: Article 20 combined with Articles 21, 22 form criminal procedure safeguards',
    ],
    relatedArticles: ['Article 21', 'Article 22', 'Sections 300-304 IPC/BNS'],
    landmark: true,
    exams: ['CLAT', 'Criminal law', 'Constitutional law'],
  },
  {
    id: 'coi-art21',
    article: 'Article 21',
    part: 'Part III - Fundamental Rights',
    title: 'Right to Life and Personal Liberty',
    summary: 'Most expansively interpreted article—guarantees right to life with dignity. Includes health, education, privacy, dignity.',
    fullText: `Article 21: No person shall be deprived of his life or personal liberty except according to procedure established by law.

This deceptively simple article has been expanded by the Supreme Court into a comprehensive right encompassing:
- Right to live with human dignity
- Right to health and medical care
- Right to education
- Right to privacy
- Right to free legal aid
- Right to clean environment
- Right against torture and custodial abuse
- Right to work
- Right against child labor

The phrase "procedure established by law" requires that any deprivation must follow proper legal procedures (due process). The Supreme Court has held that the procedure itself must be just, fair, and reasonable (from Maneka Gandhi v. Union of India, 1978).

Landmark cases: Kesavananda Bharati (basic structure doctrine), Menaka Gandhi (expanded Article 21 scope), Olga Tellis (right to livelihood), Gopal Parihar (right to health), K.S. Puttaswamy (right to privacy).`,
    keyPoints: [
      'Most expanded fundamental right through judicial interpretation',
      'Includes: life, health, education, privacy, dignity, livelihood, clean air/water',
      'Procedural protection: Deprivation must follow procedure established by law',
      'Substantive protection: Procedure itself must be just and reasonable',
      'Applies to all persons, not just citizens',
      'Cannot be suspended even in emergency (Part XVIII)',
      'Covers both positive rights (state must provide) and negative rights (state must not deprive)',
    ],
    relatedArticles: ['Article 14', 'Article 20', 'Article 32', 'Article 51A(g)'],
    landmark: true,
    exams: ['CLAT', 'CAT', 'Constitutional law'],
  },
  {
    id: 'coi-art23',
    article: 'Article 23',
    part: 'Part III - Fundamental Rights',
    title: 'Prohibition of Traffic in Human Beings and Forced Labour',
    summary: 'Human trafficking and forced labor are prohibited. Protects vulnerable populations from exploitation.',
    fullText: `Article 23(1): Traffic in human beings and begar and other forms of forced labour are prohibited and any contravention of this provision shall be an offence punishable in accordance with law.

Article 23(2): Nothing in this article shall apply to any law imposing compulsory service for public purposes, and such law may impose compulsory service for public purposes on citizens. Compulsory military service is also permitted per National Service Scheme.

Article 23 addresses historical exploitation in India, including bonded labor systems. Begar (forced unpaid labor) was particularly prevalent in feudal systems. The article prohibits both traffic (buying/selling humans) and forced labor without consent.

Modern application: Anti-trafficking laws, child labor prevention, bonded labor abolition, modern slavery. Article 23 forms the constitutional foundation for laws like Prevention of Trafficking in Persons Act, Bonded Labour System Abolition Act, Child Labor (Prohibition and Regulation) Act.`,
    keyPoints: [
      'Prohibits human trafficking (buying/selling humans for exploitation)',
      'Prohibits begar (forced unpaid labor) and forced labour generally',
      'Permits compulsory service for public purposes (public service)",Drafting)',
      'Permits compulsory military service (National Service Scheme)',
      'Criminal offence to violate—punishable per law',
      'Protects right to work freely and receive fair compensation',
      'Modern slavery and trafficking still prevalent in India; constitutional protection remains vital',
    ],
    relatedArticles: ['Article 24', 'Article 39', 'Bonded Labour System Abolition Act'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Human rights'],
  },
  {
    id: 'coi-art24',
    article: 'Article 24',
    part: 'Part III - Fundamental Rights',
    title: 'Prohibition of Employment of Children in Factories, etc.',
    summary: 'No child under 14 shall be employed in factories, mines, or hazardous occupations. Protects children from labor exploitation.',
    fullText: `Article 24: No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous process or work.

Article 24 reflects the principle that children are entitled to protection, rest, privacy, and freedom from exposure to hazardous occupations. While it addresses factory/mining employment specifically, it has been interpreted to extend to all forms of child labor in hazardous conditions.

Legislative framework: Child Labor (Prohibition and Regulation) Act 1986 (amended 2016), which bans child labor in hazardous occupations and processes. The Constitution Bench decision in Olga Tellis established that Article 21 (right to life) extends to right to livelihood, which includes children's right not to work.

"Hazardous" comprises occupations involving: dangerous processes, chemicals, mines, manufacturing of explosives, construction in certain conditions, agriculture using pesticides, etc.`,
    keyPoints: [
      'No employment of children under 14 in factories, mines, hazardous processes',
      'Reflects principle of child protection and right to education',
      'Extends beyond literal text to all forms of child labor in hazardous conditions',
      'Complements Article 21 (right to life) and Article 45 (compulsory education)',
      'Legislative support: Child Labor Act 1986, amended 2016',
      'India ratified UN Convention on Rights of Child and ILO conventions on child labor',
    ],
    relatedArticles: ['Article 21', 'Article 23', 'Article 45', 'Article 39(e)'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Labor law'],
  },
  {
    id: 'coi-art25',
    article: 'Article 25',
    part: 'Part III - Fundamental Rights',
    title: 'Freedom of Religion',
    summary: 'Right to profess, practice, and propagate religion, subject to public order, morality, and other sections.',
    fullText: `Article 25(1): Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practice and propagate religion.

Article 25(2): Nothing in this article shall: (a) affect the operation of any existing law or prevent the State from making any law (i) regulating or restricting any economic, political or other secular activity associated with religious practice; (ii) providing for social welfare and reform or the throwing open of Hindu religious institutions of a public nature to all classes and sections of Hindus; (b) shall apply to the personal law of any citizen relating to marriage, succession, maintenance, and adoption.

Article 25 embeds secularism into the Constitution by guaranteeing all persons freedom of religion. India's secularism means state neutrality—the state is neither theocratic nor atheistic but maintains equidistant relations with all religions.

"Propagate" includes right to disseminate religious information but not necessarily the right to convert others or engage in aggressive proselytization (which may be regulated under anti-conversion laws per Article 25(2)(a)).

Article 25(2)(b) carves out personal law from FR scope—Hindu Marriage Act, Muslim Personal Law, Christian law on marriage/succession remain operative despite being religiously based.`,
    keyPoints: [
      'Freedom of conscience: Right to hold and change religious beliefs',
      'Right to profess: Declare and identify with a religion',
      'Right to practice: Perform religious rites and worship',
      'Right to propagate: Disseminate religious teachings (not forced conversion)',
      'Subject to: Public order, morality, health, state regulations on secular aspects',
      'Secularity of state: Neither favors nor disfavors any religion; equal respect for all',
      'Personal law exception: Religious personal laws on marriage, succession etc. remain valid',
    ],
    relatedArticles: ['Article 15', 'Article 26', 'Article 27', 'Article 28', 'Article 51A(f)'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Religion and law'],
  },
  {
    id: 'coi-art26',
    article: 'Article 26',
    part: 'Part III - Fundamental Rights',
    title: 'Freedom to Manage Religious Affairs',
    summary: 'Religious denominations have freedom to establish institutions and manage religious affairs.',
    fullText: `Article 26: Subject to public order, morality and health, every religious denomination or organization thereof shall have the right: (a) to establish and maintain institutions for religious and charitable purposes; (b) to manage its own affairs in matters of religion; (c) to own and acquire movable and immovable property; and (d) to administer such property in accordance with law.

Article 26 grants corporate rights to religious organizations. While Article 25 protects individual freedom of religion, Article 26 protects institutional religious liberty—allowing religious denominations to organize themselves and maintain religious institutions.

"Own and acquire property" (clause c): Religious institutions can own temples, churches, mosques, ashramas, etc., and use revenue for religious purposes. Property donated for religious use remains protected.

"Manage affairs in matters of religion" (clause b): Religious organizations can regulate their internal religious affairs (temple rituals, appointment of clergy, religious rules), but state can regulate secular aspects (hospital management, educational standards).`,
    keyPoints: [
      'Right to religious organizations to manage and govern religious affairs autonomously',
      'Right to establish religious institutions (temples, churches, mosques, etc.)',
      'Right to own, acquire, manage religious property',
      'Internal management: Religious denominations decide religious matters ',
      'Secular regulation: State can regulate secular aspects (health, safety, education standards)',
      'Applies to all religions: Christian, Hindu, Muslim, Sikh, Buddhist, Jain organizations',
      'Distinction: Article 25 (personal) vs. Article 26 (institutional religious rights)',
    ],
    relatedArticles: ['Article 25', 'Article 27', 'Article 28'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Religion and law'],
  },

  // ITERATION 3: Articles 27-35 (More Fundamental Rights)
  {
    id: 'coi-art27',
    article: 'Article 27',
    part: 'Part III - Fundamental Rights',
    title: 'Freedom as to Payment of Taxes for Promotion of Any Religion',
    summary: 'No person can be compelled to pay taxes for propagation of any particular religion.',
    fullText: `Article 27: No person shall be compelled to pay any taxes, the proceeds of which are specifically appropriated in payment of expenses for the promotion or maintenance of any particular religion or religious denomination.

Article 27 reinforces state secularism by prohibiting tax funds from being used to promote any religion. This ensures religious minorities are not forced to subsidize religions they do not follow.

Application: Government funds cannot specifically support temple celebrations, mosque construction, church maintenance, or propagation of any particular faith. However, general taxes can be used for schools run by religious organizations if they provide secular education equally to all children.

Distinction from Article 25: Article 25 allows practice of religion; Article 27 prevents state from promoting religion via taxation.`,
    keyPoints: [
      'No compulsory tax for religious promotion',
      'Reinforces secular state principle',
      'Protects religious minorities from forced religious subsidy',
      'Applies to "specifically appropriated" taxes (dedicated religious funding prohibited)',
      'General taxes for secular services at religious institutions are permissible',
      'Complements Article 25 (freedom is personal choice, not state-promoted)',
    ],
    relatedArticles: ['Article 25', 'Article 26', 'Article 51A(f)'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law'],
  },
  {
    id: 'coi-art28',
    article: 'Article 28',
    part: 'Part III - Fundamental Rights',
    title: 'Freedom as to Attendance at Religious Instruction or Religious Worship in Certain Educational Institutions',
    summary: 'Students in state-funded institutions cannot be compelled to attend religious instruction or worship.',
    fullText: `Article 28(1): No religious instruction shall be provided in any educational institution wholly maintained out of State funds.

Article 28(2): Nothing in clause (1) shall apply to an educational institution which is administered by the State but has been established under any endowment or trust requiring instruction in a particular religion.

Article 28(3): No person attending any educational institution recognized by State or receiving aid out of State funds shall be required to take part in any religious worship or religious instruction or to submit to any religious form that is not in accord with his own religion or religious beliefs.

Article 28(3): applies even to schools established under endowments (exceptions to clause 1) and to private aided schools. Students cannot be forced into religious practices contrary to their beliefs.

Purpose: Secular education and prevention of religious coercion in schools. Reflects India's commitment to secular education while protecting parental choice.`,
    keyPoints: [
      'Public schools: No religious instruction allowed',
      'Religious endowed schools: Can teach religion (exception to clause 1)',
      'Student rights: Cannot be forced into religious practices against their beliefs',
      'Applies to all institutions receiving state aid, even if run by religious bodies',
      'Complements Article 25 (freedom of religion) and Article 29(j) (minority school rights)',
      'Balance: Allows religious minority schools while protecting individual choice',
    ],
    relatedArticles: ['Article 25', 'Article 26', 'Article 29', 'Article 30'],
    landmark: false,
    exams: ['CLAT', 'Education law'],
  },
  {
    id: 'coi-art29-30',
    article: 'Article 29-30',
    part: 'Part III - Fundamental Rights',
    title: 'Rights of Minorities - Cultural and Educational',
    summary: 'Articles 29 and 30 protect minority rights: right to preserve language/culture and establish educational institutions.',
    fullText: `ARTICLE 29: Protection of Interests of Minorities

Article 29(1): Any section of the citizens residing in the territory of India or any part thereof having a distinct language, script or culture of its own shall have the right to conserve the same.

Article 29(2): No citizen shall be denied admission to any educational institution maintained by the State or receiving aid out of State funds on grounds only of religion, race, caste, language or any of them.

ARTICLE 30: Right of Minorities to Establish and Administer Educational Institutions

Article 30(1): All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice.

Article 30(2): The State shall not, in granting aid to educational institutions, make any discrimination on the basis of the religion or religious denomination of its manager.

Scope: Minorities are protected as "sections of citizens" with distinct language/script/culture. This includes religious minorities (Muslims, Christians, Sikhs, etc.) and linguistic minorities (Tamil, Bengali, Marathi speakers where minority, etc.).

Minority rights are fundamental to India's pluralism—unlike some majoritarian states, India constitutionally protects minority interests in education and culture.

Landmark dispute: Right to administer institutions includes significant autonomy in hiring, curriculum (within basic standards), management. But Article 29(2) prevents minorities from discriminating in admissions.`,
    keyPoints: [
      'Article 29(1): Right to preserve distinct language, script, culture',
      'Article 29(2): No denial of admission based on religion, caste, language',
      'Article 30(1): Minority educational institutions can be established autonomously',
      'Article 30(2): State cannot discriminate in aid based on religion',
      'Minority schools: Can have religious character but must follow national curriculum',
      'Linguistic minorities: Entitled to instruction in mother tongue in primary classes (per RTE Act)',
      'Equity issue: Balancing minority autonomy with state control/standards',
    ],
    relatedArticles: ['Article 25', 'Article 26', 'Article 28', 'Article 45'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law', 'Education law'],
  },

  // ITERATION 4: Articles 32-35 (Right to Constitutional Remedies, Abolition of Slavery)
  {
    id: 'coi-art32',
    article: 'Article 32',
    part: 'Part III - Fundamental Rights',
    title: 'Right to Constitutional Remedies',
    summary: 'The right to move the Supreme Court for enforcement of fundamental rights via writs. Called the "heart of the Constitution."',
    fullText: `Article 32(1): The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.

Article 32(2): The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, or any of them, for the enforcement of any of the rights conferred by this Part or for any other purpose.

Article 32(3): Without prejudice to powers conferred on the Supreme Court, Parliament may by law empower any other court to exercise within the local limits of its jurisdiction all or any of the powers exercisable by the Supreme Court.

Dr. Ambedkar called Article 32 the "heart and soul of the Constitution" because without enforcement mechanism, fundamental rights remain paper rights. Article 32 makes FRs justiciable—enforceable by courts.

Writs: 
- Habeas corpus: Release from unlawful detention
- Mandamus: Order to perform statutory duty
- Prohibition: Prevent excess jurisdiction
- Quo warranto: Challenge authority to hold office
- Certiorari: Quash illegal order

High Courts also have similar writ powers under Article 226.`,
    keyPoints: [
      'Constitutional guarantee: Supreme Court enforcement of fundamental rights',
      'Writs available: Habeas corpus, mandamus, prohibition, quo warranto, certiorari',
      'Direct access: Can approach SCI directly (no need to exhaust remedies first)',
      'Justiciability: FRs are enforceable rights, not mere declarations',
      'Original jurisdiction: SCI has original jurisdiction over FR violations',
      'Cannot be suspended: Article 32 cannot be suspended even in emergency (Article 359)',
      'PILs: Public Interest Litigations under Article 32 expanded access to justice',
    ],
    relatedArticles: ['Article 13', 'Article 226', 'Article 359'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law', 'Procedural law'],
  },
  {
    id: 'coi-art33-35',
    article: 'Article 33-35',
    part: 'Part III - Fundamental Rights',
    title: 'Restrictions on FR for Armed Forces, Parliament, and Slavery',
    summary: 'Articles 33-35 place restrictions on some FRs for armed forces, address parliamentary privilege, and abolish slavery.',
    fullText: `ARTICLE 33: The Parliament may, by law, determine to what extent or in what manner any of the rights conferred by Articles 19, 26, 29, 30 and 32 shall be restricted or abrogated in their application to the members of the Armed Forces or the members of the Forces charged with the maintenance of public order so as to ensure that the proper discharge of their duties and the maintenance of discipline among them can be ensured.

ARTICLE 34: Notwithstanding anything in Article 32, Parliament may by law indemnify any person in the service of the Union or State against any prosecution or any proceeding in any court in relation to any act done or purporting to be done by him in connexion with the maintenance or restoration of order in any area.

[Note: Article 34 is rarely used but allows retroactive indemnification for official acts during emergencies]

ARTICLE 35: Legislation with respect to acts punishable under Articles 23, 24, 25, 28 and 29 shall be by Parliament and not by any State Legislature, but Parliament may delegate the power to make rules to any State.

Article 33: Restricts FRs for armed forces personnel to ensure military discipline. Armed forces can be restricted from exercising political rights, assembly rights in off-base settings, etc. necessary for military discipline.

Article 35: Centralizes criminal liability for violations of Articles 23 (trafficking), 24 (child labor), 25 (religion), 28 (education), 29 (minority rights) under Parliament's jurisdiction, not state legislatures—ensuring uniform national standards.`,
    keyPoints: [
      'Armed forces: Can have restricted FRs in service of discipline',
      'These restrictions imposed by law, not automatically applicable',
      'Indemnification: Parliament can protect officials for acts in maintaining order (rare)',
      'Parliament has exclusive power: To legislate criminal liability for core FR violations',
      'Separation of powers: Centralization ensures uniform protection across states',
      'Cannot restrict Article 32: Right to constitutional remedies cannot be abrogated',
    ],
    relatedArticles: ['Article 19', 'Article 23', 'Article 24', 'Article 32'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Armed forces law'],
  },

  // ITERATION 5: Articles 36-51 (Directive Principles of State Policy)
  {
    id: 'coi-art36-51-overview',
    article: 'Articles 36-51',
    part: 'Part IV - Directive Principles of State Policy (DPSP)',
    title: 'Directive Principles of State Policy - Overview',
    summary: 'DPSPs are constitutional directives to the state for achieving social and economic justice. Not enforceable but bind governments morally and politically.',
    fullText: `The Constitution Part IV contains Directive Principles of State Policy (Articles 36-51). Unlike Fundamental Rights (enforceable), DPSPs are non-justiciable guidelines for the State to aim for.

ARTICLE 36: Definition—"State" includes Government and Parliament of India and State Governments and Legislatures.

Key DPSPs:
- Article 38: State shall strive towards social order promoting welfare
- Article 39: Ownership and control of material resources; work; property; child labor
- Article 40: Village panchayats (grassroots governance)
- Article 41: Right to work, education, public assistance
- Article 42: Just and humane working conditions
- Article 43: Living wage and decent work
- Article 43A: Worker participation in management
- Article 44: Uniform civil code
- Article 45: Free and compulsory education (amended to make it fundamental right via Article 21A)
- Article 48: Agricultural improvement and animal husbandry
- Article 48A: Environmental protection
- Article 49: Preservation of historical monuments
- Article 50: Separation of powers
- Article 51: International peace and security

DPSPs are aspirational—they guide policy-making but are not enforceable rights. However, courts increasingly interpret them alongside fundamental rights to expand rights protection.

Addition rationale: Framers believed Indian state needed positive obligations to transform feudal/colonial society into modern welfare state, but recognized these couldn't be immediately enforced.`,
    keyPoints: [
      'Non-justiciable: Not enforceable through courts (but courts increasingly reference them)',
      'Binding on government: Morally and politically binding, though not legally enforceable',
      'Aspirational: Reflect ideals to be gradually achieved',
      'Complementary to FRs: Together form complete constitutional vision (liberty + welfare)',
      'Modern trend: Courts use DPSPs to interpret FRs broadly (Constitution as living document)',
      'Examples: Right to work, education, healthcare, environmental protection derive from DPSPs',
      'Implementation: Legislation and policies rely on DPSPs; judicial review increasingly considers them',
    ],
    relatedArticles: ['Article 21', 'All FR articles', 'Articles 52-85 (other provisions)'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Social welfare law'],
  },
  {
    id: 'coi-art38-39',
    article: 'Article 38-39',
    part: 'Part IV - Directive Principles of State Policy',
    title: 'Social and Economic Justice DPSPs',
    summary: 'State shall direct policy towards establishing social order with economic and social justice; equitable distribution of material resources.',
    fullText: `ARTICLE 38(1): The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life.

ARTICLE 38(2): [As amended by the 42nd Amendment] The State shall, in particular, strive to minimize the inequalities in income and endeavor to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different areas or engaged in different vocations.

ARTICLE 39: The State shall, in particular, direct its policy towards securing: (a) that the citizens, men and women equally, have the right to an adequate means of livelihood; (b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good; (c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment; (d) that there is equal pay for equal work for both men and women; (e) that the health and strength of workers, men and women, and the tender age of children are not abused and that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity, that childhood and youth are protected against exploitation and against moral and material abandonment.

Articles 38-39 are foundational socialist-influenced provisions. They direct the state toward achieving substantive equality (not just formal equality) and redistributing resources.

Article 38(2) was added by the 42nd Amendment (contentious emergency-related amendment) and strengthens the commitment to minimize inequality.

Article 39(a)-(e) covers: livelihood, equitable resource distribution, preventing wealth concentration, equal pay, worker protection, and child welfare.`,
    keyPoints: [
      'Welfare state model: State should promote welfare through equitable social order',
      'Substantive justice: Beyond formal rights, actual achievement of economic justice',
      'Minimize inequalities: Goal of reducing income inequality and status disparities',
      'Shared prosperity: Material resources for common good, not accumulation',
      'Worker rights: Implementation through labor laws (minimum wages, working hours, safety)',
      'Gender equality: Equal pay for equal work between genders',
      'Child protection: Preventing exploitation, ensuring development opportunities',
      'Implementation: Labor laws, land reform, taxation policy informed by these DPSPs',
    ],
    relatedArticles: ['Article 43', 'Article 43A', 'Article 49'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Labor and social law'],
  },
  {
    id: 'coi-art40-44',
    article: 'Article 40-44',
    part: 'Part IV - Directive Principles of State Policy',
    title: 'Governance, Education, and Civil Code DPSPs',
    summary: 'DPSPs for village governance, education, healthcare, and uniform civil code.',
    fullText: `ARTICLE 40: The State shall take steps to organize village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government.

[Implemented via 73rd Amendment (1992) making PRIs (Panchayati Raj Institutions) constitutionally mandated]

ARTICLE 41: The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in cases of undeserved want.

ARTICLE 42: The State shall make provision for securing just and humane conditions of work and for maternity relief.

ARTICLE 43: The State shall endeavor to secure, by suitable legislation or economic organization or in any other way, to all workers, agricultural, industrial or otherwise, work, a living wage, decent conditions of work, and, subject to the conditions of employment determined by or under such organizations, leisure and social and cultural opportunities.

ARTICLE 44: The State shall endeavor to provide for its citizens a uniform civil code throughout the territory of India.

Article 40: Reflects Gandhian principles of village self-governance (gram swaraj). Panchayati Raj Institutions (PRIs) were formally constitutionalized via 73rd Amendment.

Article 41: "Within limits of economic capacity"—qualifies the right, acknowledging developmental constraints. Right to education became fundamental right via Article 21A (86th Amendment, 2002).

Article 42: Special protection for maternity and workers' rights.

Article 44: Uniform Civil Code (UCC)—controversial DPSP. Aim is to replace personal laws (Hindu, Muslim, Christian, Sikh) with unified civil code. Remains unimplemented due to political/religious sensitivity and minority concerns about cultural autonomy.`,
    keyPoints: [
      'Village governance: Constitutional aspiration for decentralized local democracy',
      '73rd Amendment: PRIs now constitutionally mandatory with reserved seats',
      'Economic and social rights: Right to work, education, health within economic capacity',
      'Maternity protection: Special provisions for women workers',
      'Living wages: State should ensure workers earn sufficient to live with dignity',
      'UCC (Article 44): Uniform civil code aspiration; unimplemented (religious/political sensitivities)',
      'Education (Article 45): Now fundamental right (Article 21A after 86th Amendment)',
    ],
    relatedArticles: ['Article 39', 'Article 45', 'Article 51A'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Family law'],
  },
  {
    id: 'coi-art45-51a',
    article: 'Article 45, 51A',
    part: 'Part IV - Directive Principles; Part IVA - Fundamental Duties',
    title: 'Education and Fundamental Duties',
    summary: 'Article 45: Free and compulsory education (now fundamental right). Article 51A introduces fundamental duties of citizens.',
    fullText: `ARTICLE 45: The State shall endeavor to provide not less than free education compulsory for all children until they attain the age of fourteen years.
[Amended by 86th Amendment (2002) to make education fundamental right; revised to age 6-14 via Article 21A]

ARTICLE 51A (Fundamental Duties): It shall be the duty of every citizen of India—
(a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem;
(b) to cherish and follow the noble ideals which inspired our national struggle for freedom;
(c) to uphold and protect the sovereignty, unity and integrity of India;
(d) to defend the country and render national service when called upon;
(e) to promote harmony and the spirit of common brotherhood amongst all people of India transcending religious, linguistic and regional or sectional diversities; to renounce practices derogatory to the dignity of women;
(f) to value and preserve the rich heritage of our composite culture;
(g) to protect and improve the natural environment including forests, lakes, rivers and wildlife, and to have compassion for living creatures;
(h) to develop the scientific temper, humanism and spirit and reform and free thinking;
(i) [Added 86th Amendment] to provide opportunities for education to his child or ward between six and fourteen years of age.

Article 45: Implementation of this DPSP laid groundwork for Right to Free and Compulsory Education Act (RTE) 2009, which guarantees free schooling to all 6-14 year-old children.

Article 51A: Fundamental Duties introduced via 42nd Amendment (controversial emergency-era amendment). Unlike FRs (individual against state), duties are reciprocal obligations of citizens to state and society. Not enforceable but bind citizens morally. Article 51A(e): Prohibits practices derogatory to women's dignity—reflecting constitutional commitment to gender equality.`,
    keyPoints: [
      'Education as right: Article 45 DPSP + Article 21A FR guarantees education fundamental right',
      'Age 6-14: Currently constitutional mandate for education',
      'RTE Act 2009: Converts Article 45 from aspiration to enforceable entitlement',
      'Citizenship duties: Article 51A establishes reciprocal citizen obligations',
      'National unity: Emphasis on transcending linguistic/religious/regional divisions',
      'Environmental duty: Citizens responsible for ecological protection',
      'Gender dignity: Prohibition on practices denigrating women',
      'Education mandate (51A(i)): Parents/guardians duty to provide child education',
    ],
    relatedArticles: ['Article 28', 'Article 29', 'Article 30', 'Article 39(e)'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law', 'Education law'],
  },

  // ITERATION 6: Articles 52-83 (Executive - President, Vice President, Council of Ministers)
  {
    id: 'coi-art52-74-executive',
    article: 'Articles 52-74',
    part: 'Part V - The Union (Executive)',
    title: 'Executive: President, Vice President, Council of Ministers',
    summary: 'Articles define the President (ceremonial head), Vice President, Prime Minister, and cabinet. Parliamentary executive system.',
    fullText: `PART V: THE UNION (EXECUTIVE)

ARTICLE 52: There shall be a President of India.

ARTICLE 53(1): The executive power of the Union shall be vested in the President and shall be exercised by him either directly or through officers subordinate to him in accordance with this Constitution.

ARTICLE 53(2): The President shall have all such powers and authority as are vested in him by or under this Constitution.

ARTICLE 54-61: President election (indirect election by Members of Parliament and State Legislatures via Electoral College);term 5 years; Qualifications.

ARTICLE 63: Vice President elected by Members of Parliament (both houses in joint session).

ARTICLE 74: Cabinet advises President on government execution. Cabinet headed by Prime Minister. Prime Minister appointed by President.

ARTICLE 75: Ministers appointed by President on PM's advice. Cabinet ministers must be members of Parliament.

Executive system: Parliamentary democracy (Westminster model)—President is ceremonial head, Prime Minister wields actual executive power. President acts on PM's advice.

Source of PM authority: Although appointed by President, PM derives authority from commanding majority in Lok Sabha (lower house of Parliament).

Council of Ministers: Headed by PM; includes Cabinet Ministers (major portfolios), Ministers of State, and Deputy Ministers. Collectively responsible to Parliament (Article 75(3)).

Dissolution: Cabinet can continue only if it has confidence of Lok Sabha (majority vote).`,
    keyPoints: [
      'Parliamentary system: PM is chief executive; President is ceremonial',
      'President\'s powers: Exercised on advice of Cabinet (substantive vs. nominal)',
      'Separation of powers (flexible): PM and Cabinet from Parliament (unlike presidential systems)',
      'Collective responsibility: Cabinet answers to Parliament, not individually accountable',
      'Prime Minister: Requires majority in Lok Sabha; can dismiss ministers',
      'No-confidence motion: Cabinet can fall on single no-confidence vote in Lok Sabha',
      'Ministers must be MPs: Ensures direct accountability to Parliament',
    ],
    relatedArticles: ['Article 79', 'Article 85', 'Article 356'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law', 'Administrative law'],
  },
  {
    id: 'coi-art75-council-ministers',
    article: 'Article 75',
    part: 'Part V - The Union (Executive)',
    title: 'Council of Ministers',
    summary: 'Constitutional framework for cabinet formation, ministerial terms, resignation, and collective responsibility.',
    fullText: `ARTICLE 75(1): The Prime Minister shall be appointed by the President and the other Ministers shall be appointed by the President on the advice of the Prime Minister.

ARTICLE 75(2): The Prime Minister shall be a member of Parliament (Lok Sabha or Rajya Sabha). Other Ministers should preferably be MPs. If a non-MP becomes minister, he/she must become MP within 6 months or cease to be minister.

ARTICLE 75(3): The Council of Ministers shall be collectively responsible to Parliament. [This is the critical provision—cabinet must maintain confidence of Lok Sabha]

ARTICLE 75(4): Ministers hold office during the pleasure of the President.

ARTICLE 75(5): A minister who ceases to be a member of Parliament shall cease to be a minister.

ARTICLE 75(6): A minister who loses confidence of Lok Sabha must resign or be dismissed.

Article 75(3): Collective responsibility means if cabinet loses no-confidence vote, entire cabinet falls (not just the minister in question). This ensures unified governance.

Pleasure doctrine: Article 75(4) "hold office during pleasure of President" is nominal—practically, PM advises President to dismiss ministers. President cannot independently dismiss ministers.

Confidence requirement: A cabinet can continue only if it commands confidence of Lok Sabha (proven on confidence/no-confidence votes when challenged).`,
    keyPoints: [
      'Collective responsibility: Cabinet falls together on no-confidence vote',
      'Lok Sabha confidence: Fundamental requirement; any time can be challenged',
      'Prime Minister centrality: PM is apex; ministers appointed/dismissed on his advice',
      'Parliamentary accountability: Ministers face Parliament, not courts, for policy decisions',
      'Confidence votes: Frequent tool for monitoring government performance',
      'Resignation: Ministers often resign on policy disagreement (collective responsibility)',
      'Merit-based selection: Constitutional silence on selection criteria—PM has discretion',
    ],
    relatedArticles: ['Article 74', 'Article 79', 'Article 85', 'Article 356'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law', 'Administrative law'],
  },

  // ITERATION 7: Articles 79-123 (Parliament Structure and Powers)
  {
    id: 'coi-art79-122-parliament',
    article: 'Articles 79-122',
    part: 'Part VI - The Union (Legislature)',
    title: 'Parliament: Structure, Powers, and Procedures',
    summary: 'Parliamentary system: Lok Sabha (lower house), Rajya Sabha (upper house). Parliament supreme legislative authority with delegated amendment power.',
    fullText: `PART VI: THE UNION (LEGISLATURE)

ARTICLE 79: There shall be a Parliament of the Union which shall consist of the President and two houses to be known as the Council of States (Rajya Sabha) and the House of the People (Lok Sabha).

PARLIAMENT STRUCTURE:

Lok Sabha (House of the People):
- Members: Maximum 545 (530 from states + 15 Anglo-Indians elected/nominated)
- Term: 5 years (can be dissolved earlier)
- Representation: Directly elected from constituencies based on population
- Qualifications: Indian citizen, age 25+, registered voter

Rajya Sabha (Council of States):
- Members: 250 (240 state representatives + 12 nominated by President from culture/sports/arts)
- Term: 6 years (no dissolution; 1/3 retire every 2 years)
- Representation: Indirect—elected by State Legislative Assemblies
- Role: Represents states; check on sudden political changes (no dissolution)

ARTICLE 123: President's ordinance power—can legislate during parliamentary recess (emergency power, temporary).

Powers of Parliament:
1. Legislative: Make laws on subjects in Union List (97 subjects) and Concurrent List (47 subjects)
2. Financial: Control taxation, budgets, spending (Constitutional requirement)
3. Amendment: Can amend Constitution by 2/3 majority (Articles 368)
4. Election: Elects President and Vice President
5. Removal: Can remove President, Judges via impeachment
6. Question hour: Ministers accountable to Parliament

Lok Sabha primacy: Money bills must originate in Lok Sabha; no-confidence votes in Lok Sabha determine government stability.`,
    keyPoints: [
      'Bicameral Parliament: Two houses with distinct roles',
      'Lok Sabha: Popular chamber, directly elected, controls government confidence',
      'Rajya Sabha: Federal chamber, represents states, provides continuity',
      'Direct democracy: LS elected directly; RS represents state legislatures (indirect)',
      'Legislative supremacy: Parliament (especially LS) is sovereign in law-making',
      'Money bills: Lok Sabha exclusive power over taxation and spending',
      'Constitutional amendment: Parliament can amend Constitution with supermajority',
      'Ordinance power: President can legislate during recess (temporary, limited)',
    ],
    relatedArticles: ['Article 73', 'Article 245', 'Article 368'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law', 'Parliamentary procedures'],
  },

  // ITERATION 8: Articles 124-147 (Judiciary)
  {
    id: 'coi-art124-147-judiciary',
    article: 'Articles 124-147',
    part: 'Part VI - The Union (Judiciary)',
    title: 'Judiciary: Supreme Court, High Courts, and Judicial Infrastructure',
    summary: 'Independent judiciary with Supreme Court as apex institution. Judicial power over constitutional interpretation and review.',
    fullText: `PART VI: THE UNION (JUDICIARY)

ARTICLE 124: Constitution of Supreme Court
- Chief Justice and as many Judges as specified by law (currently 34: 1 CJI + 33 Judges)
- Appointed by President on recommendation by Collegium (Chief Justice + 4 senior judges)

ARTICLE 125-127: SC Judges tenure (serve until age 65), removal by 2/3 majority impeachment, inter-state disputes handled by SC.

ARTICLE 128-130: SC jurisdiction (original, appellate, advisory); seat of SC in Delhi; Parliament can expand numbers.

ARTICLE 131: SC original jurisdiction in disputes between Union and States, or between States.

ARTICLE 132-136: SC appellate jurisdiction—hears cases on Constitutional questions or matters of national importance.

ARTICLE 137-145: SC's curative and review powers; constitution of benches.

ARTICLE 226: High Courts can issue writs for enforcement of rights and challenging inappropriate actions.

ARTICLE 228-229: District judiciary under state administration but subordinate to High Courts.

Constitutional Interpretation: SC has final authority on constitutional interpretation; its decisions bind all lower courts. SC can review its own decisions (rare; requires compelling reasons).

Independence: Judges appointed by constitutional process (Collegium), removed only by impeachment (unprecedented in Indian history), pay fixed by Constitution (cannot be reduced), cannot be sued for judicial acts.

Innovation: Public Interest Litigation (PIL) expanded access to justice—any citizen can approach SC for protecting public rights.

Judicial activism: SC has interpreted Constitution broadly, expanding fundamental rights, environmental protection, and social justice beyond literal text.`,
    keyPoints: [
      'Apex court: SC final arbiter of constitutional interpretation',
      'Judicial independence: Constitutional safeguards prevent political interference',
      'Collegium system: Judges appoint judges (controversial but intended as independence protection)',
      'Constitutional interpretation: SC\'s interpretation is supreme law',
      'Judicial review: SC can review legislative and executive actions constitutionality',
      'Article 32: Direct access to SC for fundamental rights enforcement',
      'Public Interest Litigation: Expanded concept of locus standi (standing to sue)',
      'Justice accessibility: Free legal aid, PIL, etc. make justice more inclusive',
    ],
    relatedArticles: ['Article 13', 'Article 32', 'Article 226', 'Article 368'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law', 'Procedural law'],
  },

  // ITERATION 9: Articles 148-290 (Union Public Service, Finance, Relations with States)
  {
    id: 'coi-art148-290-administration',
    article: 'Articles 148-290',
    part: 'Part VII-X - Union Services, Finance, Central Relations',
    title: 'Union Services, Finance Commission, and Federalism',
    summary: 'Constitutional framework for civil services, fiscal federalism, center-state relations, and inter-state disputes.',
    fullText: `PART VIII: THE UNION AND THE STATES (RELATIONSHIPS)

ARTICLE 148: Constitution of Union Public Service Commission (UPSC) to handle civil service recruitment.

ARTICLE 249-264: Finance Commission—Independent body (Article 280) to recommend tax distribution between Union and States every 5 years.

ARTICLE 265: Taxation only by authority of law; no tax without legislative backing.

ARTICLE 268-293: Customs, excise, income tax, property taxes—distribution between Union and States.

FEDERALISM STRUCTURE:
- Union List: Matters under exclusive Union jurisdiction (defense, foreign relations, currency, banking, etc.—97 topics)
- State List: Matters under exclusive State jurisdiction (education, police, agriculture, etc.—66 topics)
- Concurrent List: Matters under both Union and State authority; Union law prevails in case of conflict (47 topics)
- Residuary: Any matter not covered falls under Union power if Constitution allows.

ARTICLE 356: President's emergency power—can dismiss State government if it violates Constitution or fails to discharge constitutional functions; highly contentious provision used for political purposes historically.

Finance Commission: Recommends tax-sharing, grants-in-aid, and fiscal transfers to states. Ensures financial autonomy of states within federal structure.

Inter-State disputes: SC has jurisdiction over disputes between states (Article 131) on river waters, boundary issues, etc.

Federalism tension: India's Constitution grants states significant autonomy in specified areas, but Union's expansive taxation power and residuary power give Center dominance. Challenge: balancing federalism with national unity.`,
    keyPoints: [
      'Federalism type: Constitutional federalism with Center-State enumeration',
      'Three lists: Division of powers prevents centralization while maintaining unity',
      'Union dominance: Larger legislative list and residuary power favor Union',
      'Finance Commission: Ensures fiscal federalism and state monetary autonomy',
      'Cooperative federalism: Inter-governmental consultation through councils',
      'Article 356 concern: Emergency dismissal of state governments (abuse potential)',
      'Interstate disputes: SC as final arbiter (water disputes, etc.)',
      'GST: Recent tax reform integrating goods and services taxation',
    ],
    relatedArticles: ['Article 73-74', 'Article 245', 'Article 249', 'Article 356'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Administrative law'],
  },

  // ITERATION 10: Articles 330-367 (Scheduled Castes/Tribes, Elections, Amendment)
  {
    id: 'coi-art330-367-reservations',
    article: 'Articles 330-367',
    part: 'Part XVI-XVIII - SC/ST and OBC Reservations, Elections, Amendment',
    title: 'Reservations, Electoral Systems, and Constitutional Amendment',
    summary: 'Constitutional framework for affirmative action (reservations), election commission independence, and amendment procedures.',
    fullText: `ARTICLE 330: Reservation of seats for Scheduled Castes and Tribes in Lok Sabha (approximately proportional to population).

ARTICLE 332: Reservation of seats for SC/ST in State Legislative Assemblies.

ARTICLE 334: Reservation duration—originally 10 years; extended periodically; currently indefinite (9th Amendment onwards).

ARTICLE 335: Preference to SC/ST in government services (civil services, police, etc.) within the principle of reservations.

ARTICLE 336: Reservation for Anglo-Indians in Parliament (nominated membership).

ARTICLE 338: Commission for Scheduled Castes (independent body to safeguard SC rights).

ARTICLE 338A: Commission for Scheduled Tribes.

ARTICLE 340: Commission for Backward Classes (Mandal Commission inquired into OBC backwardness; OBC reservations subsequently implemented).

RESERVATIONS RATIONALE:
India's history of caste-based discrimination meant formal equality insufficient—substantive equality required affirmative action. Reservations reflect this constitutional commitment. OBC reservations (added via 27th Amendment) extend this to economically and educationally backward communities.

ARTICLE 324: Election Commission of India—independent constitutional body to conduct elections, ensuring free and fair processes.

ARTICLE 326: One person, one vote—universal adult suffrage (age 18+).

ARTICLE 329: Elections to Parliament and State Assemblies governed by Acts made by Parliament.

ARTICLE 368: Constitutional Amendment Procedure:
- Simple majority: Some amendments (71 so far—various procedural changes)
- 2/3 majority: Most amendments (approximately 90 completed)
- 2/3 majority + state ratification: Amendments affecting federal structure (Articles 54, 55, 73, 74, etc.)

BASIC STRUCTURE DOCTRINE: Even with supermajorities, amendments cannot alter basic features (sovereignty, democracy, federalism, rule of law, separation of powers, independent judiciary). Established by Kesavananda Bharati (1973).

Amendment count: Over 100 amendments completed (most frequent among world constitutions). India's Constitution is "living document," evolving with society.`,
    keyPoints: [
      'Reservations: Affirmative action for SC/ST (70+ years) and OBC (27+ years)',
      'Rationale: Historical discrimination requires substantive equality, not just formal',
      'Creamy layer: Some judicial limits on OBC reservations to exclude wealthy OBC members',
      '103rd Amendment: Added EWS (Economically Weaker Section) reservation (constitutional)',
      'Election Commission: Independent authority conducting free/fair elections',
      'Universal suffrage: Every citizen 18+ can vote',
      'Amendment procedure: Flexible but guarded by basic structure doctrine',
      'Constitutional amendment: Demonstrates Constitution as living, evolving document',
    ],
    relatedArticles: ['Article 15', 'Article 16', 'Article 324', 'Article 338'],
    landmark: true,
    exams: ['CLAT', 'Constitutional law', 'Social law'],
  },

  // ITERATION 11: Articles 352-360 (Emergency Provisions)
  {
    id: 'coi-art352-360-emergency',
    article: 'Articles 352-360',
    part: 'Part XVIII - Emergency Provisions',
    title: 'Constitutional Emergency Powers',
    summary: 'Three types of emergencies: National (national security), State (governor rule), and Financial. Highly controversial; used for political suppression.',
    fullText: `PART XVIII: EMERGENCY PROVISIONS

ARTICLE 352: National Emergency
- President declares if satisfied that Union faces threat from war, external aggression, or armed rebellion
- Requires cabinet approval; must be approved by Parliament within 1 month
- Effect: Union can assume State functions; directs Fundamental Rights enforcement
- Duration: Can be extended indefinitely (controversy)

ARTICLE 353: Effect of national emergency—Union government assumes extraordinary power; state governments subordinate.

ARTICLE 354: Compensation of President during national emergency; salary cannot be reduced.

ARTICLE 355: Union's duty to protect states against external invasion and internal disturbance.

ARTICLE 356: President's Rule (Constitutional emergency)
- President can dismiss State government if it violates Constitution or fails to discharge constitutional obligations
- Requires cabinet approval and later parliamentary approval (2/3 majority)
- Used to dismiss many state governments; controversial (political tool)

ARTICLE 357: Parliament's power to legislate for suspended State during President's Rule.

ARTICLE 358-360: Deployment of armed forces; financial emergency (rarely used).

ARTICLE 359: Suspension of Fundamental Rights
- President can suspend FRs (except life and personal liberty—Article 21)
- Only during national emergency
- Article 20, 21 (core rights) cannot be suspended even in emergency

CONTROVERSIES:
- 1975-77 Emergency: PM Indira Gandhi declared national emergency, suspended democracy. 44th Amendment subsequently restricted emergency powers.
- 42nd Amendment (1976): Added "Socialist" and "Secular"; expanded emergency powers (contested)
- 44th Amendment (1978): Reduced emergency abuse potential—required parliamentary approval, limited suspension scope

BALANCE: Emergencies necessary for national security BUT prone to authoritarian abuse. Constitution attempts balance via oversight requirements and basic structure limits.`,
    keyPoints: [
      'Three emergency types: National (war), State (governor rule), Financial (rare)',
      'National Emergency: President declares; used for defense; suspends federalism',
      'State governments: Can be dismissed under Article 356 (used politically)',
      'Fundamental rights: Can be suspended except Articles 20, 21 (core rights)',
      'Parliamentary oversight: Emergencies require or must be approved by Parliament',
      'Basic structure: Even in emergency, basic Constitution features cannot be destroyed',
      'Historical abuse: 1975-77 Emergency led to 44th Amendment safeguards',
      'Modern restriction: Judicial review of emergency declarations increased',
    ],
    relatedArticles: ['Article 32', 'Article 44', 'Article 368'],
    landmark: false,
    exams: ['CLAT', 'Constitutional law', 'Administrative law'],
  },

  // ITERATION 12: Modern Interpretations and Application
  {
    id: 'coi-modern-app',
    article: 'Constitutional Evolution and Modern Applications',
    part: 'Multiple - Constitutional Interpretation',
    title: 'Living Constitution: Modern Judicial Interpretation and Rights Expansion',
    summary: 'Post-independence, Constitution has been interpreted broadly. Courts have expanded fundamental rights beyond literal text through dynamic interpretation.',
    fullText: `CONSTITUTIONAL INTERPRETATION EVOLUTION:

Early Phase (1950-1973): Narrow literal interpretation; respect for "constitutional silences."

Post-Kesavananda Bharati (1973): "Living Constitution" doctrine—Constitution is living document interpreted in light of contemporary values while preserving basic structure.

MAJOR RIGHTS EXPANSIONS:

Right to Life (Article 21) now includes:
- Right to health: Healthcare, nutrition, cleanliness
- Right to education: Educational infrastructure, quality
- Right to privacy: Personal autonomy, body integrity, choice of partners
- Right to livelihood: Work, adequate income
- Right to dignity: Respect, freedom from torture/cruel punishment
- Also read with Articles 14-19 (equality, freedom) for holistic interpretation

Gender Equality (Article 14-15):
- Beyond biological differences—substantive equality
- LGBTQ+ rights under Article 21 (privacy) and Article 14 (equality)
- Sexual harassment laws, workplace protections
- Domestic violence recognition (Vishaka guidelines, Protection of Women Act)

Environmental Rights:
- Article 48A (DPSP) and Article 21 combined—right to clean environment
- Public Interest Litigation permits any citizen to sue for environmental protection
- Precautionary principle adopted (environmental protection prioritized over development)

Directive Principles as Enforceable Rights:
- Article 45 (education) became Article 21A (fundamental right via 86th Amendment)
- Courts increasingly enforce DPSPs through Article 21 interpretation (living Constitution)
- Welfare schemes have constitutional grounding in DPSPs

Affirmative Action Evolution:
- RS Mandal Commission (1989): OBC reservations constitutionalized
- 103rd Amendment (2019): EWS reservations added (addressing economic inequality)
- Continuous refinement of creamy layer logic

Judicial Activism:
- Public Interest Litigation (PIL): Standing requirements liberalized; any citizen can approach SC
- Structural injunctions: Courts monitor ongoing compliance (e.g., prison reforms)
- Social action litigation: Courts directing state action on welfare issues

CONSTITUTIONAL COURTS JURISPRUDENCE:

Proportionality: Restrictions on rights must satisfy proportionality test (ends justify means; less restrictive alternatives unavailable).

State action doctrine: Primarily applies to government action; exceptions for private entities performing state functions.

Federalism evolution: More "cooperative federalism"; interstate relations strengthened; but center remains dominant.

Secular Constitution application: Uniform treatment despite personal laws; heightened scrutiny on religion-based classifications.

CONTEMPORARY CHALLENGES:

Digital rights: Data privacy, surveillance, freedom from algorithmic bias—Article 21 (privacy) extended.
Climate justice: Right to healthy environment vs. development rights; intergenerational equity.
Minority rights: Balancing individual liberty with community/religious identity.
Emergency powers: Preventing authoritarian misuse while maintaining national security capacity.

Constitution maturation: 75+ years of amendment, interpretation, and case law have created rich constitutional jurisprudence. Constitution remains aspirational (Preamble) while practical (addressing current issues).

Living Constitution paradox: Flexible interpretation (enables evolution) vs. constitutional stability (prevents radical reinterpretation)—balanced through basic structure doctrine.`,
    keyPoints: [
      'Dynamic interpretation: Constitutional text read with evolving societal values',
      'Article 21 expansive: Includes health, education, privacy, livelihood, dignity',
      'Gender rights: Substantive equality; LGBTQ+ inclusion via rights doctrine',
      'Environmental justice: Right to clean environment enforceable',
      'DPSPs enforcement: Courts treating directives as informing fundamental rights',
      'Judicial activism: PIL expanded access; courts directing welfare programs',
      'Affirmative action: Evolved from SC/ST to OBC to EWS over decades',
      'Proportionality: Rights restrictions must satisfy stringent tests',
      'Basic structure: Unchangeable features prevent authoritarianism',
    ],
    relatedArticles: ['Article 21', 'Article 14', 'Article 19', 'All fundamental rights and DPSPs'],
    landmark: true,
    exams: ['CLAT', 'CAT', 'Constitutional law - Advanced'],
  },
];
