export interface PortfolioAssignment {
  id: string;
  organization: string;
  title: string;
  category: "disability" | "audit" | "evaluation" | "research" | "governance";
  categoryLabel: string;
  date: string;
  location: string;
  country: string;
  scopeScale: string;
  description: string;
  backgroundContext: string;
  objectives: string[];
  methodologyUsed: { title: string; detail: string }[];
  keyFindings: string[];
  recommendationsAndImpact: string[];
  deliverables: string[];
  oecdCriteria?: { criterion: string; rating: string; summary: string }[];
  teamComposition: string;
  toolsUsed: string[];
}

export const portfolioAssignments: PortfolioAssignment[] = [
  {
    id: "a1",
    organization: "Grassroot Disability Alliance (GDA)",
    title: "Technology Access & Policy Impact Study among PWDs in Pastoral Communities",
    category: "disability",
    categoryLabel: "Disability & Tech",
    date: "Nov 2025 – Mar 2026",
    location: "Marsabit, Garissa & Kajiado Counties, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "3 Pastoral Counties • 850 Households • 24 KIIs",
    description: "Conducted a comprehensive study on how technology is developed, deployed, and regulated among persons with disabilities in pastoral communities, assessing specific challenges regarding technology access, digital literacy, and online policy impacts.",
    backgroundContext: "In arid and semi-arid pastoral regions of Northern and Rift Valley Kenya, persons with disabilities face compounded marginalization due to geographic isolation, limited infrastructure, and severe socio-cultural barriers. While digital technology, mobile money, and assistive devices are expanding across East Africa, pastoral PWDs remain disproportionately excluded. Grassroot Disability Alliance (GDA) commissioned Inter-Act Research Associates to assess digital technology accessibility, policy awareness, and structural barriers among pastoralists living with disabilities.",
    objectives: [
      "Evaluate the accessibility, affordability, and usage rates of mobile devices and assistive technologies among PWDs in pastoral settings.",
      "Analyze the impact of national digital literacy policies and ICT regulations on nomadic and pastoral communities.",
      "Identify socio-cultural, infrastructure, and financial barriers hindering digital inclusion for women and youth with disabilities.",
      "Formulate actionable policy briefs and community action plans to promote inclusive digital development in ASAL counties."
    ],
    methodologyUsed: [
      {
        title: "Mixed-Methods Household Survey",
        detail: "Deployed KoboToolbox digital surveys across 850 households utilizing the Washington Group Short Set of Questions on Disability to identify functional domains."
      },
      {
        title: "Key Informant Interviews (KIIs)",
        detail: "Engaged 24 key stakeholders including County ICT Directors, NCPWD county officers, telecom representatives, and leaders of Disabled Persons Organizations (DPOs)."
      },
      {
        title: "Focus Group Discussions (FGDs)",
        detail: "Facilitated 12 accessible FGDs with sign language interpretation and tactile materials for visually impaired pastoralists across Marsabit, Garissa, and Kajiado."
      }
    ],
    keyFindings: [
      "Only 14.2% of PWDs in sampled pastoral households owned a internet-enabled smartphone, compared to 58% national average.",
      "High cost of mobile data and lack of solar-powered charging stations in nomadic settlements are primary operational barriers.",
      "Women with sensory disabilities face severe safety and privacy risks when attempting to access shared community digital charging or mobile agent spots.",
      "County digital literacy initiatives lacked localized sign language and audio-assisted learning materials tailored for pastoral languages (Oromo, Somali, Maasai)."
    ],
    recommendationsAndImpact: [
      "Establish mobile solar-powered charging hubs co-located at DPO centers in pastoral sub-counties.",
      "Subsidize adaptive smartphone hardware and screen-reader software through the National Council for Persons with Disabilities (NCPWD) fund.",
      "Engage telecommunication providers (Safaricom/Airtel) to zero-rate USSD-based emergency and cash transfer channels for registered PWDs."
    ],
    deliverables: [
      "Comprehensive 85-Page Analytical Research Report",
      "County-Specific Policy Briefs for Marsabit, Garissa, and Kajiado",
      "Cleaned SPSS & Stata Raw Datasets with Codebooks",
      "Infographic Policy Summary for DPO Advocacy Groups"
    ],
    oecdCriteria: [
      { criterion: "Relevance", rating: "Highly Satisfactory", summary: "Aligned directly with Kenya's Digital Economy Blueprint and Article 54 of the Constitution." },
      { criterion: "Efficiency", rating: "Satisfactory", summary: "Completed within 16 weeks despite severe weather disruptions in Marsabit." },
      { criterion: "Impact Potential", rating: "High", summary: "Directly informed Garissa County's Disability Inclusion Bill 2026." }
    ],
    teamComposition: "Lead Disability Researcher, Senior Statistician, 2 Field Supervisors, 12 Local Pastoral Enumerators (4 PWDs).",
    toolsUsed: ["KoboToolbox", "Washington Group Short Set", "SPSS v28", "NVivo 14", "ArcGIS Mapping"]
  },
  {
    id: "a2",
    organization: "TINADA Youth Africa & CBM Global",
    title: "Accessibility Audits in Learning Institutions & Health Facilities",
    category: "audit",
    categoryLabel: "Accessibility Audit",
    date: "Sep – Dec 2025",
    location: "Kisumu County, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "8 Schools • 7 Health Facilities • 120 Household Audits",
    description: "Executed physical, structural, and operational accessibility audits across 8 Learning Institutions, 7 health facilities, and selected households in Kisumu County to assess workplace, educational, and institutional compliance with Universal Design principles.",
    backgroundContext: "Despite Kenya's Persons with Disabilities Act and National Building Codes specifying barrier-free physical environments, public health centers and educational institutions across Western Kenya remain structurally inaccessible to persons with physical, sensory, and cognitive impairments. TINADA Youth Africa, in partnership with CBM Global, engaged Inter-Act Research Associates to carry out a comprehensive technical audit of public infrastructure, equipment, and service delivery pathways.",
    objectives: [
      "Assess structural compliance against KS ISO 21542 (Building Construction - Accessibility and Usability of the Built Environment).",
      "Audit medical equipment, sanitation facilities, signage, and communication channels in primary health care centers.",
      "Evaluate classroom layouts, specialized learning materials, and WASH facilities across TVETs and secondary schools.",
      "Provide engineering retrofitting blueprints and costed bill of quantities (BoQ) for prioritizing structural modifications."
    ],
    methodologyUsed: [
      {
        title: "Technical Engineering Tool Audits",
        detail: "Used physical laser meters, digital incline scales, and Universal Design scorecards to evaluate ramps, doorway clearances, counter heights, and tactile paving."
      },
      {
        title: "User Experience Walk-Throughs",
        detail: "Paired certified accessibility auditors with persons using wheelchairs, white canes, and sign language to conduct live navigation tests."
      },
      {
        title: "Institutional Service Scoring",
        detail: "Assessed staff readiness, disability confidence, and alternative format availability (Braille, large print, pictorial guides)."
      }
    ],
    keyFindings: [
      "73% of audited health facility ramps exceeded the maximum recommended gradient of 1:12, posing severe fall hazards for wheelchair users.",
      "None of the 7 audited health centers featured adjustable delivery beds or accessible gynecological examination tables.",
      "Only 1 out of 8 schools had accessible toilet facilities with appropriate grab bars and outward-opening doors.",
      "Signage across all institutions lacked tactile Braille characters and high-contrast lettering for low-vision visitors."
    ],
    recommendationsAndImpact: [
      "Provided Kisumu County Department of Health with a costed $45,000 retrofitting blueprint for immediate physical upgrades.",
      "Established mandatory Universal Design orientation for County Public Works engineers prior to approving new school construction plans.",
      "Procured and installed adjustable height examination couches in 3 priority sub-county hospitals."
    ],
    deliverables: [
      "15 Individual Facility Accessibility Audit Reports",
      "Costed Bill of Quantities (BoQ) for Engineering Retrofits",
      "Kisumu County Universal Design Architectural Guidelines",
      "Staff Training Curriculum on Disability Confidence & Etiquette"
    ],
    oecdCriteria: [
      { criterion: "Relevance", rating: "Highly Satisfactory", summary: "Targeted critical barriers in maternal health and TVET education." },
      { criterion: "Effectiveness", rating: "High", summary: "Prompted immediate budget allocation by Kisumu County Assembly." }
    ],
    teamComposition: "Lead Accessibility Auditor (Architectural Specialist), Disability Policy Expert, Occupational Therapist, 4 User Co-Auditors.",
    toolsUsed: ["KS ISO 21542 Scorecard", "Digital Inclinometer", "Laser Distance Meter", "KoboCollect"]
  },
  {
    id: "a3",
    organization: "Cheshire Disability Services Kenya (CDSK)",
    title: "End-of-Programme Evaluation of Building Effective Networks (BEN-MAPP)",
    category: "evaluation",
    categoryLabel: "Endline Evaluation",
    date: "Jun – Aug 2025",
    location: "Kenya 🇰🇪 (National Coverage)",
    country: "Kenya",
    scopeScale: "National Scope • 1,450 Beneficiaries • 18 DPOs",
    description: "Conducted End-of-Programme Evaluation of the Building Effective Networks (BEN) Multi-Annual Programme Plan Phase 1 (2023–2025) with Strategic Learning Input for BEN-MAPP Phase 2 (2026–2030).",
    backgroundContext: "The Building Effective Networks (BEN) programme implemented by Cheshire Disability Services Kenya (CDSK) sought to strengthen the organizational capacity, advocacy power, and financial sustainability of Disabled Persons Organizations (DPOs) across Kenya. As Phase 1 drew to a close, CDSK required an independent, OECD-DAC compliant endline evaluation to measure achievements, document systemic changes, and formulate evidence-based strategies for Phase 2.",
    objectives: [
      "Assess programme performance against OECD-DAC criteria (Relevance, Coherence, Efficiency, Effectiveness, Impact, Sustainability).",
      "Measure organizational growth and advocacy outcomes across 18 supported DPOs using standardized capacity assessment tools.",
      "Evaluate the effectiveness of inclusive livelihood grants and vocational training sponsorships for youth with disabilities.",
      "Provide strategic recommendations and programmatic design frameworks for BEN-MAPP Phase 2 (2026–2030)."
    ],
    methodologyUsed: [
      {
        title: "Mixed-Methods Evaluation Matrix",
        detail: "Combined quantitative household surveys (n=1,450) with 32 Key Informant Interviews and 14 Focus Group Discussions."
      },
      {
        title: "Outcome Harvesting Workshops",
        detail: "Facilitated multi-stakeholder outcome harvesting sessions with DPO leaders, government social development officers, and donor representatives."
      },
      {
        title: "Comparative Baseline vs. Endline Analysis",
        detail: "Utilized difference-in-differences statistical modelling to isolate programme attribution from broader economic trends."
      }
    ],
    keyFindings: [
      "Supported DPOs demonstrated a 64% increase in successful advocacy initiatives resulting in county budget line inclusions for PWD funds.",
      "Beneficiary households experienced a 38% increase in average monthly income following vocational training and seed capital grants.",
      "Substantial improvements recorded in DPO governance, financial management systems, and donor compliance capability.",
      "Need identified for increased focus on mental health support and psycho-social inclusion in future programme iterations."
    ],
    recommendationsAndImpact: [
      "Design BEN-MAPP Phase 2 with a dedicated revolving micro-loan facility tailored for rural DPO enterprise clusters.",
      "Integrate mental health and neurodiversity advocacy into mainstream disability empowerment tracks.",
      "Formalize county-level DPO federations to enhance policy bargaining power with regional government bodies."
    ],
    deliverables: [
      "Final BEN-MAPP Phase 1 Evaluation Report (110 Pages)",
      "Strategic Learning Framework for BEN-MAPP Phase 2 (2026–2030)",
      "18 DPO Capacity Assessment Scorecards & Growth Profiles",
      "Policy Brief on DPO Sustainability in East Africa"
    ],
    oecdCriteria: [
      { criterion: "Relevance", rating: "Outstanding", summary: "Directly addressed grassroots DPO capacity deficits." },
      { criterion: "Effectiveness", rating: "Highly Satisfactory", summary: "Achieved 92% of set indicator targets." },
      { criterion: "Sustainability", rating: "Satisfactory", summary: "County budget inclusions secured ongoing local funding." }
    ],
    teamComposition: "Lead Evaluator, Senior M&E Consultant, Biostatistician, 3 Qualitative Analysts, 16 Enumerators.",
    toolsUsed: ["OECD-DAC Matrix", "SPSS v28", "NVivo 14", "Outcome Harvesting Log", "KoboCollect"]
  },
  {
    id: "a4",
    organization: "National Council for Persons with Disabilities (NCPWDs)",
    title: "Autism & Related Developmental Disabilities Monograph 2023",
    category: "research",
    categoryLabel: "National Monograph",
    date: "Apr – Jun 2023",
    location: "24 Counties, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "24 Counties • 2,200 Respondents • National Health Data",
    description: "Developed the landmark Autism and Related Developmental Disabilities Monograph 2023 across 24 counties in Kenya, mapping service availability, policy gaps, diagnostic pathways, and community intervention strategies.",
    backgroundContext: "Autism spectrum conditions and neurodevelopmental disabilities remain severely under-researched, stigmatized, and under-resourced in Kenya. Families face immense diagnostic delays, lack of specialized educational centers, and extreme out-of-pocket healthcare expenses. The National Council for Persons with Disabilities (NCPWD) commissioned Inter-Act Research Associates to lead the nation's most comprehensive baseline research monograph on developmental disabilities.",
    objectives: [
      "Map diagnostic centers, clinical specialists, special units, and therapy services across 24 counties.",
      "Quantify socio-economic burdens, stigma levels, and educational exclusion experienced by autistic individuals and caregivers.",
      "Analyze policy gaps in Kenya's Special Needs Education (SNE) policy and NHIF/SHA healthcare coverage.",
      "Produce the official National Monograph to guide multi-sectoral planning and national resource allocation."
    ],
    methodologyUsed: [
      {
        title: "Nationwide Multi-Stage Sampling",
        detail: "Sampled 2,200 households across 24 rural and urban counties using stratified random sampling."
      },
      {
        title: "Institutional Service Provider Mapping",
        detail: "Audited 140 health facilities, special schools, and early intervention centers for diagnostic capability."
      },
      {
        title: "Clinical & Caregiver In-Depth Case Studies",
        detail: "Executed 45 qualitative life-history narratives with parents, adult autistic self-advocates, and pediatricians."
      }
    ],
    keyFindings: [
      "Average age of formal autism diagnosis in Kenya was 6.2 years, representing a critical loss of early intervention windows.",
      "Over 81% of families reported severe financial hardship due to non-coverage of occupational therapy under national health insurance.",
      "Extreme shortage of speech therapists and clinical psychologists outside Nairobi and Mombasa metropolitan areas.",
      "Widespread socio-cultural stigma leading to social isolation of mothers and hidden children in rural communities."
    ],
    recommendationsAndImpact: [
      "Incorporate neurodevelopmental screening into routine 9-month and 18-month maternal child health (MCH) clinic visits.",
      "Expand national health insurance (SHA) benefits to cover occupational, speech, and behavioral therapies.",
      "Establish regional autism resource centers equipped with multidisciplinary diagnostic teams in all 47 counties."
    ],
    deliverables: [
      "Official NCPWD National Monograph Publication (140 Pages)",
      "National Directory of Autism & Developmental Disability Service Providers",
      "Policy Brief for Ministry of Health & Ministry of Education",
      "Executive Summary & Press Release Document"
    ],
    teamComposition: "Principal Investigator, Clinical Psychologist Consultant, Senior Health Economist, Lead Statistician, 24 Field Enumeration Teams.",
    toolsUsed: ["Modified M-CHAT-R/F", "KoboToolbox", "Stata 17", "ArcGIS Spatial Analysis"]
  },
  {
    id: "a5",
    organization: "Sense International Kenya",
    title: "Effectiveness & Workability Assessment of Learner Support Assistant Model",
    category: "research",
    categoryLabel: "Education Research",
    date: "Feb 2023",
    location: "6 Counties, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "6 Counties • 42 Primary Schools • 320 Learners",
    description: "Assessed the effectiveness, operational workability, and policy integration potential of the Learner Support Assistant (LSA) Model for children with deafblindness and complex sensory disabilities across 6 counties.",
    backgroundContext: "Children with deafblindness and multi-sensory impairments require specialized, individualized assistance to participate effectively in inclusive learning environments. Sense International Kenya piloted the Learner Support Assistant (LSA) model to deploy trained community assistants in primary classrooms. Inter-Act Research Associates was contracted to conduct a rigorous operational workability and impact assessment.",
    objectives: [
      "Evaluate learning outcomes and communication skill gains among children supported by LSAs.",
      "Assess classroom integration, teacher-LSA collaboration dynamics, and school headteacher acceptance.",
      "Determine the cost-effectiveness and scalability of embedding LSAs within the Ministry of Education payroll structure.",
      "Identify operational bottlenecks in LSA recruitment, training, supervision, and retention."
    ],
    methodologyUsed: [
      {
        title: "Classroom Observation Audits",
        detail: "Structured observation of 60 classroom lessons tracking engagement time, communication modes, and LSA assistance."
      },
      {
        title: "Comparative Learning Progress Tracking",
        detail: "Analyzed IEP (Individualized Education Plan) milestone achievement data across 320 enrolled learners."
      },
      {
        title: "Multi-Stakeholder Consultations",
        detail: "Interviews with Teachers Service Commission (TSC) officials, Special Education Needs Officers (SENOs), and parents."
      }
    ],
    keyFindings: [
      "Learners assigned LSAs demonstrated a 310% increase in active task engagement during classroom activities.",
      "LSA presence reduced regular teacher stress levels and enhanced overall classroom management in inclusive schools.",
      "Lack of formal TSC recognition and standardized remuneration led to high LSA turnover rates.",
      "Model demonstrated high cost-benefit ratios when compared to institutionalizing children in residential special schools."
    ],
    recommendationsAndImpact: [
      "Formally mainstream the Learner Support Assistant cadre into the Ministry of Education Special Needs Education Policy.",
      "Develop a standardized 3-month certificate curriculum for LSAs in partnership with Kenya Institute of Special Education (KISE).",
      "Establish clear career progression pathways for LSAs to transition into full special needs teachers."
    ],
    deliverables: [
      "LSA Model Workability Research Report",
      "Policy Brief for Teachers Service Commission & Ministry of Education",
      "Standardized LSA Operational Manual & Role Description",
      "Costing & Financial Scaling Framework"
    ],
    teamComposition: "Special Education Specialist, Lead Evaluator, Deafblindness Communication Expert, Field Research Supervisor.",
    toolsUsed: ["Classroom Observation Matrix", "IEP Assessment Scorecard", "SPSS", "NVivo"]
  },
  {
    id: "a6",
    organization: "Aga Khan Foundation / USAID Yetu Initiatives",
    title: "Outcome Harvesting Workshops & Final Narrative Report (2014-2022)",
    category: "evaluation",
    categoryLabel: "Outcome Harvesting",
    date: "Nov 2022 – Feb 2023",
    location: "Nakuru, Kisii, Isiolo, Makueni & Mombasa Counties, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "5 Counties • 8-Year Longitudinal Scope • 45 CSOs",
    description: "Lead Consultant contracted by Aga Khan Foundation's USAID funded Yetu Initiative Project to facilitate Outcome Harvesting workshops in 5 counties, generate county profiles, and support the final narrative report for 2014-2022.",
    backgroundContext: "The Yetu Initiative, a flagship partnership between Aga Khan Foundation and USAID, worked for eight years (2014–2022) to empower local Civil Society Organizations (CSOs) in Kenya to mobilize local assets, build community philanthropy, and drive sustainable local development. To capture non-linear, complex outcomes achieved over nearly a decade, Inter-Act Research Associates was selected to lead the end-of-project Outcome Harvesting evaluation.",
    objectives: [
      "Harvest, substantiate, and categorize unintended and intended outcomes achieved by CSOs across 5 counties.",
      "Evaluate changes in local philanthropy practices, community trust, and local resource mobilization capabilities.",
      "Generate individual County Civil Society Philanthropy Profiles highlighting sustainable local models.",
      "Synthesize eight years of project data into the final USAID narrative and learning report."
    ],
    methodologyUsed: [
      {
        title: "Outcome Harvesting Methodology",
        detail: "Drafted 120 preliminary outcome descriptions with CSO leaders through participatory narrative mapping."
      },
      {
        title: "Substantiation & Key Informant Verification",
        detail: "Independently verified harvested outcomes with external actors (county officials, community elders, donors)."
      },
      {
        title: "Interactive Synthesis Workshops",
        detail: "Hosted 5 county-level reflection workshops utilizing participatory timeline mapping and outcome categorization."
      }
    ],
    keyFindings: [
      "Participating CSOs successfully mobilized over KES 140 Million in local cash and in-kind community contributions.",
      "Systemic shift recorded from donor dependency towards community-rooted fundraising and local board governance.",
      "County governments formally integrated Yetu-trained CSOs into official County Budget and Economic Forums (CBEFs).",
      "Enhanced organizational resilience allowed local CSOs to maintain operations during COVID-19 pandemic shocks."
    ],
    recommendationsAndImpact: [
      "Adopt Outcome Harvesting as a primary M&E methodology for complex community philanthropy programs.",
      "Establish regional community foundation endowments to sustain local CSO grant-making.",
      "Document and publish community asset mapping toolkits for replication across East Africa."
    ],
    deliverables: [
      "USAID Yetu Initiative Final Narrative Report (135 Pages)",
      "5 Individual County CSO Philanthropy Profiles",
      "Substantiated Outcome Harvesting Database (112 Verified Outcomes)",
      "Best Practices & Lessons Learned Compendium"
    ],
    teamComposition: "Lead Outcome Harvesting Specialist, Senior M&E Expert, 2 Regional Facilitators, Data Analyst.",
    toolsUsed: ["Outcome Harvesting Protocol", "NVivo 12", "CSO Sustainability Index", "SPSS"]
  },
  {
    id: "a7",
    organization: "British Council",
    title: "In-Country M&E Technical Services for Skills for Inclusive Digital Participation (SIDP)",
    category: "evaluation",
    categoryLabel: "M&E Technical Support",
    date: "Jun 2022 – Jul 2023",
    location: "Kenya 🇰🇪, Nigeria 🇳🇬, Indonesia 🇮🇩",
    country: "Multi-Country",
    scopeScale: "3 Countries • 3,400 Trainees • Tri-Continental M&E",
    description: "Provided in-country M&E technical advisory services for the Skills for Inclusive Digital Participation (SIDP) project, measuring digital literacy, economic empowerment, and inclusion among marginalized youth, women, and PWDs.",
    backgroundContext: "The Skills for Inclusive Digital Participation (SIDP) project, funded by the UK Foreign, Commonwealth & Development Office (FCDO) and implemented by British Council, targeted marginalized populations in Kenya, Nigeria, and Indonesia to build essential digital skills. Inter-Act Research Associates was appointed as the In-Country M&E Technical Partner in Kenya, responsible for data quality assurance, baseline/endline evaluation, and cross-country learning coordination.",
    objectives: [
      "Design and deploy localized M&E frameworks aligned with global FCDO digital inclusion indicators.",
      "Monitor digital literacy skill acquisition among women, rural youth, and persons with disabilities.",
      "Conduct rigorous data verification and spot-checks across training centers in urban informal settlements and rural counties.",
      "Evaluate post-training economic outcomes including freelance employment, online enterprise, and job placements."
    ],
    methodologyUsed: [
      {
        title: "Digital Pre/Post Assessment Testing",
        detail: "Administered practical digital skills assessment rubrics at baseline, mid-training, and endline."
      },
      {
        title: "Longitudinal Beneficiary Tracking",
        detail: "Tracked 1,200 Kenyan trainees over 6 months post-graduation using automated WhatsApp/SMS survey bots."
      },
      {
        title: "Global Triangulation Meetings",
        detail: "Participated in cross-country data reflection sessions with British Council M&E teams in London, Abuja, and Jakarta."
      }
    ],
    keyFindings: [
      "87% of enrolled trainees demonstrated significant gains in functional digital literacy (basic web navigation, cybersecurity, online payments).",
      "42% of female graduates initiated micro-e-commerce or online freelance activities within 4 months of course completion.",
      "Inclusion of accessible screen-reader software increased visually impaired student retention rates from 45% to 91%.",
      "Community-based training hubs exhibited 2.5x higher completion rates than centralized city ICT centers."
    ],
    recommendationsAndImpact: [
      "Scale up local community hub partnerships rather than centralized institutional facilities.",
      "Embed practical digital financial literacy and online safety modules into future digital skill curricula.",
      "Establish mentorship pipelines connecting female graduates with women tech entrepreneurs."
    ],
    deliverables: [
      "Kenya Country Final M&E Evaluation Report",
      "Tri-Country Data Quality Assurance Audit Log",
      "Longitudinal Beneficiary Economic Outcome Dataset",
      "Digital Skills M&E Tool Adaptations for PWDs"
    ],
    teamComposition: "In-Country M&E Lead, Senior Data Manager, 4 Field QA Officers, Digital Assessment Specialist.",
    toolsUsed: ["FCDO M&E Framework", "KoboCollect", "PowerBI Dashboards", "Stata"]
  },
  {
    id: "a8",
    organization: "Kenya Female Advisory Organization (KEFEADO) & Sightsavers",
    title: "Gender Equality & Social Inclusion (GESI) Analysis in Soft Drinks Value Chains",
    category: "research",
    categoryLabel: "GESI Value Chain Analysis",
    date: "Jun – Oct 2022",
    location: "Kisumu, Homa Bay & Nairobi Counties, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "3 Counties • 2 Value Chains • 650 Agricultural Suppliers",
    description: "Conducted Gender Equality and Social Inclusion (GESI) Analysis of the Global Labor Rights Program-Inclusive Future across two soft drinks value chains (Coca-Cola Beverages Africa & Sorghum under Kenya Breweries Limited).",
    backgroundContext: "Agricultural supply chains and manufacturing distribution networks in East Africa often inadvertently reinforce gender disparities and exclude persons with disabilities. Under the Inclusive Future program funded by UK Aid/Sightsavers, KEFEADO contracted Inter-Act Research Associates to execute a comprehensive GESI Value Chain Analysis covering sorghum smallholder farmers and retail distribution networks linked to major beverage corporations.",
    objectives: [
      "Map participation, power dynamics, and income distribution of women and PWDs across sorghum farming and retail distribution.",
      "Identify structural, cultural, and financial bottlenecks obstructing inclusive supply chain integration.",
      "Assess workplace safety, harassment safeguards, and reasonable accommodation practices in corporate aggregation hubs.",
      "Develop actionable GESI action plans for corporate partners (KBL & Coca-Cola Beverages Africa)."
    ],
    methodologyUsed: [
      {
        title: "Inclusive Value Chain Mapping",
        detail: "Mapped stakeholder interactions from smallholder sorghum fields to farm-gate aggregation and distribution points."
      },
      {
        title: "Gender & Disability Quantitative Survey",
        detail: "Surveyed 650 sorghum farmers and retail distributors assessing land tenure, credit access, and decision-making."
      },
      {
        title: "Corporate Stakeholder KIIs",
        detail: "Engaged procurement directors, extension officers, local distributors, and county agricultural executives."
      }
    ],
    keyFindings: [
      "Women provided 68% of agricultural labor in sorghum cultivation but held less than 19% of formal supply contracts with aggregators.",
      "Persons with disabilities represented less than 0.8% of contracted commercial farmers due to land ownership barriers and lack of adaptive farm tools.",
      "Retail distribution models favored capital-intensive motor vehicles, systematically excluding women and physical disability groups.",
      "Absence of gender-responsive sanitation facilities at grain aggregation centers discouraged female farmer participation."
    ],
    recommendationsAndImpact: [
      "Introduce joint household contracting mechanisms allowing female farmers equal access to corporate supply agreements.",
      "Establish adaptive agricultural tool pilot funds for farmers with physical disabilities.",
      "Construct gender-segregated and accessible sanitation facilities at all primary grain collection centers."
    ],
    deliverables: [
      "Comprehensive GESI Value Chain Analysis Report (95 Pages)",
      "Corporate GESI Action Plans for KBL & Coca-Cola Beverages Africa",
      "Inclusive Procurement Guidelines for Agro-Processors",
      "Policy Brief on Women & PWDs in Commercial Agriculture"
    ],
    teamComposition: "Lead GESI Specialist, Agricultural Economist, Disability Inclusion Lead, 8 Field Researchers.",
    toolsUsed: ["Harvard Gender Analysis Framework", "Washington Group Questions", "SPSS", "NVivo"]
  },
  {
    id: "a9",
    organization: "Participatory Ecological Land Use Management Kenya (PELUM-K)",
    title: "End Term Evaluation of Integrated Watershed Management (IWAMA-DIFE)",
    category: "evaluation",
    categoryLabel: "Environment & Watershed",
    date: "Dec 2021 – Feb 2022",
    location: "Kiambu & Murang'a Counties, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "2 Upper Tana Basin Counties • 950 Smallholders • 12 WRUAs",
    description: "Awarded End Term Evaluation of the PELUM-K Integrated Watershed Management for Diverse Farming Enterprises (IWAMA-DIFE) Project evaluating sustainable agro-ecological farming practices, soil conservation, and water resource governance.",
    backgroundContext: "The Upper Tana Watershed supplies over 80% of Nairobi's drinking water and powers major hydroelectric stations. Intensive agricultural practices, deforestation, and climate vulnerability have caused severe soil erosion and river siltation in Kiambu and Murang'a. PELUM-K implemented the IWAMA-DIFE project to promote ecological land management and diversified farming enterprises among smallholders.",
    objectives: [
      "Evaluate adoption rates of agro-ecological practices (terracing, cover cropping, rainwater harvesting, agroforestry).",
      "Assess economic resilience and food security gains among smallholder farming households.",
      "Measure institutional strengthening of Water Resource Users Associations (WRUAs) and farmer cooperatives.",
      "Document climate adaptation lessons to inform regional watershed conservation policies."
    ],
    methodologyUsed: [
      {
        title: "Agro-Ecological Household Survey",
        detail: "Administered digital questionnaires to 950 smallholder farmers using stratified cluster sampling."
      },
      {
        title: "GIS & Remote Sensing Soil Erosion Analysis",
        detail: "Utilized satellite imagery and field transect walks to evaluate vegetation cover and riverbank stabilization."
      },
      {
        title: "Participatory Impact Assessment",
        detail: "Held 10 focus group discussions with WRUA executive committees and women's organic farming groups."
      }
    ],
    keyFindings: [
      "Adoption of agro-ecological soil conservation techniques reached 76% among targeted project households.",
      "Participating smallholders recorded a 44% increase in farm income through crop diversification (macadamia, avocado, indigenous vegetables).",
      "Soil erosion rates along audited sub-catchment riverbanks decreased by an estimated 28%.",
      "Strong leadership by women in WRUA committees directly correlated with higher community compliance in riparian zone protection."
    ],
    recommendationsAndImpact: [
      "Scale up micro-credit linkages for organic farm inputs and drip irrigation kits.",
      "Formalize payment for ecosystem services (PES) arrangements between urban water utilities and upstream WRUAs.",
      "Expand agro-processing and direct market linkage infrastructure for perishable organic produce."
    ],
    deliverables: [
      "IWAMA-DIFE End Term Evaluation Report (88 Pages)",
      "GIS Soil Conservation & Riparian Zone Map Atlas",
      "Good Practices Compendium in Agro-Ecology & Watershed Management",
      "Policy Brief for Ministry of Environment & Water Resources"
    ],
    teamComposition: "Lead Environmental Evaluator, GIS & Remote Sensing Specialist, Agricultural Economist, 10 Enumerators.",
    toolsUsed: ["ArcGIS 10.8", "QGIS", "SPSS v27", "KoboCollect", "HFIAS Food Security Index"]
  },
  {
    id: "a10",
    organization: "Christoffel Blindenmission (CBM)",
    title: "End Term Evaluation of Inclusive Education Policy Pilot (Social Lab Design)",
    category: "evaluation",
    categoryLabel: "Inclusive Education",
    date: "Nov – Dec 2021",
    location: "Machakos County, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "1 County • 28 Schools & TVETs • 540 Trainees",
    description: "Evaluated the effectiveness, multi-stakeholder collaboration, and policy influence of the Social Lab Design Model under the CBM/ADDA Inclusive Education Policy Pilot Project for learners and trainees with disabilities.",
    backgroundContext: "Traditional top-down education policy implementation often fails to address grassroots barriers faced by children with disabilities. CBM and African Disability Development Agency (ADDA) piloted an innovative 'Social Lab' model in Machakos County—bringing together education officers, school heads, parents, PWD advocates, and architects to co-create inclusive school solutions. CBM commissioned Inter-Act Research Associates to evaluate this pilot model.",
    objectives: [
      "Assess the operational efficacy and innovation value of the Social Lab co-creation methodology.",
      "Measure changes in inclusive enrollment, retention, and transition rates across targeted primary, secondary, and TVET centers.",
      "Evaluate Machakos County Government policy alignment and budgetary allocations for disability-inclusive education.",
      "Provide strategic recommendations for replicating the Social Lab model across East Africa."
    ],
    methodologyUsed: [
      {
        title: "Social Lab Process & Outcome Evaluation",
        detail: "Analyzed lab meeting records, co-created action plans, and stakeholder participation matrices."
      },
      {
        title: "School Enrollment Data Audit",
        detail: "Audited EMIS enrollment records across 28 institutions covering a 3-year longitudinal window (2019-2021)."
      },
      {
        title: "Key Stakeholder Narrative Interviews",
        detail: "Conducted 26 in-depth interviews with Machakos County Education Executives, CBM leads, and DPO leaders."
      }
    ],
    keyFindings: [
      "Targeted institutions achieved a 52% increase in enrolled learners with sensory and physical disabilities.",
      "The Social Lab approach fostered strong local ownership, resulting in Machakos County allocating KES 15 Million for school retrofitting.",
      "Sign language training for non-disabled peers significantly improved social integration and reduced bullying in schools.",
      "Need highlighted for continuous professional development in adaptive pedagogy for mainstream teachers."
    ],
    recommendationsAndImpact: [
      "Replicate the Social Lab methodology in national education policy review frameworks across other counties.",
      "Institutionalize pre-service inclusive education modules in teacher training colleges.",
      "Establish mobile assessment units to streamline early disability identification and school placement."
    ],
    deliverables: [
      "CBM/ADDA Social Lab Evaluation Report (76 Pages)",
      "Social Lab Replication Guide for Inclusive Education",
      "Machakos County Education Baseline Scorecard",
      "Executive Summary Video & Infographic Summary"
    ],
    teamComposition: "Lead Inclusive Education Specialist, M&E Expert, Social Innovation Researcher, 4 Field Researchers.",
    toolsUsed: ["Social Lab Assessment Matrix", "SPSS", "EMIS Data Audit Sheet", "NVivo"]
  },
  {
    id: "a11",
    organization: "Leonard Cheshire",
    title: "Determining the Extra Cost of Disability Among Working Aged Adults",
    category: "research",
    categoryLabel: "Socio-Economic Research",
    date: "2021 – Aug 2023",
    location: "Kenya 🇰🇪 (National Study)",
    country: "Kenya",
    scopeScale: "National Representative Sample • 1,800 Households • Econometric Modeling",
    description: "Rigorous econometric research project in Kenya quantifying the extra economic, healthcare, transportation, and personal assistance costs borne by working-aged adults living with disabilities.",
    backgroundContext: "Standard poverty measures in developing countries routinely understate the true depth of poverty among persons with disabilities because they ignore the 'extra costs' required to achieve the same standard of living as non-disabled peers. Leonard Cheshire commissioned Inter-Act Research Associates to lead a groundbreaking national study applying the Standard of Living (SoL) approach to quantify the extra cost of disability in Kenya.",
    objectives: [
      "Estimate the magnitude of extra direct and indirect costs associated with different impairment types and severity levels.",
      "Apply econometric Standard of Living regression models comparing disabled and non-disabled working-age cohorts.",
      "Assess the adequacy of existing social protection transfers (e.g., Inua Jamii cash transfer) relative to real extra costs.",
      "Formulate policy recommendations for reforming national social security, tax exemptions, and health insurance."
    ],
    methodologyUsed: [
      {
        title: "Econometric Standard of Living (SoL) Method",
        detail: "Engineered multi-variable regression models isolating disability expenditure from baseline household consumption."
      },
      {
        title: "Nationally Representative Household Survey",
        detail: "Collected detailed financial and expenditure data across 1,800 households in urban and rural counties."
      },
      {
        title: "Focus Group Financial Logs",
        detail: "Maintained 3-month daily expenditure logs with 80 working-age adult participants living with physical, visual, and hearing impairments."
      }
    ],
    keyFindings: [
      "Working-aged adults with disabilities incur extra direct costs equivalent to 22% to 46% of baseline household income.",
      "Transportation and medical/assistive care represented the single largest components of extra expenditure.",
      "Current Inua Jamii cash transfers cover less than 18% of the average monthly extra cost incurred by severely disabled adults.",
      "Uncompensated caregiving by family members resulted in massive lost earning potential, particularly for rural women."
    ],
    recommendationsAndImpact: [
      "Restructure national cash transfer programs to adopt a tiered benefit scale based on disability severity and extra cost requirements.",
      "Zero-rate import duties and VAT on all personal mobility devices, adaptive technologies, and medical supplies.",
      "Introduce subsidized public transport passes and tax credits for employers hiring working-age PWDs."
    ],
    deliverables: [
      "National Extra Cost of Disability Research Report (120 Pages)",
      "Econometric Modeling Technical Annex & Stata Do-Files",
      "Policy Brief for National Treasury, Ministry of Labour & Social Protection",
      "Academic Journal Submission Manuscript"
    ],
    teamComposition: "Principal Econometrician, Senior Disability Policy Analyst, Lead Statistician, Field Survey Manager, 20 Enumerators.",
    toolsUsed: ["Stata 17", "Standard of Living Econometric Model", "KoboToolbox", "SPSS"]
  },
  {
    id: "a12",
    organization: "Community Initiatives Action Group-Kenya (CIAG-K)",
    title: "Evaluation of Citizen Participation in Budget-Making in Devolved Governance",
    category: "governance",
    categoryLabel: "Devolved Governance",
    date: "Jun – Sep 2021",
    location: "Kisumu & Siaya Counties, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "2 Devolved Counties • 34 Wards • 720 Citizens",
    description: "Evaluated CIAG-K's contribution to citizen budget participation, public accountability, and civic empowerment in devolved governance, documenting impacts, best practices, and lessons learned between 2017 and 2021.",
    backgroundContext: "Kenya's 2010 Constitution mandates robust public participation in county planning and budget allocation processes. However, public hearings are frequently reduced to tokenistic exercises with poor public attendance, technical jargon, and minimal feedback loops. CIAG-K implemented governance strengthening interventions across Kisumu and Siaya. Inter-Act Research Associates evaluated program effectiveness.",
    objectives: [
      "Assess public awareness and actual participation levels in County Integrated Development Plan (CIDP) and Annual Development Plan (ADP) forums.",
      "Evaluate the accessibility and citizen-friendliness of county budget documentation produced in Kisumu and Siaya.",
      "Measure the extent to which citizen-prioritized community projects were actually funded and executed by county executives.",
      "Document lessons learned to strengthen civic empowerment models across devolved Kenya."
    ],
    methodologyUsed: [
      {
        title: "Ward-Level Civic Participation Survey",
        detail: "Surveyed 720 citizens across 34 rural and urban wards assessing civic knowledge and participation history."
      },
      {
        title: "County Budget Allocation Tracking",
        detail: "Audited county budget estimates against public memorandum submissions to calculate citizen responsiveness ratios."
      },
      {
        title: "Key Informant Interviews",
        detail: "Interviews with County Assembly Budget Committee Chairs, Finance Executives, and CSO Steering Leads."
      }
    ],
    keyFindings: [
      "CIAG-K trained civic champions increased citizen attendance at ward budget hearings by 140% between 2017 and 2021.",
      "Adopted citizen memorandums resulted in KES 85 Million being allocated to grassroots water and health dispensary projects.",
      "Youth, women, and PWDs remained under-represented in open budget forums due to inconvenient meeting venues and timing.",
      "Simplifying budget documents into pictorial 'Popular Versions' increased public comprehension from 12% to 68%."
    ],
    recommendationsAndImpact: [
      "Mandate the publication of simplified 'Citizen Budgets' at least 14 days prior to public consultation hearings.",
      "Establish ward-level digital budget tracking portals allowing real-time citizen feedback.",
      "Institutionalize dedicated public participation budget lines within County Assembly operational budgets."
    ],
    deliverables: [
      "CIAG-K Devolved Governance Evaluation Report (82 Pages)",
      "Kisumu & Siaya County Civic Participation Scorecards",
      "Public Participation Best Practices Guide for CSOs",
      "Policy Brief for County Assembly Liaison Offices"
    ],
    teamComposition: "Lead Governance Evaluator, Public Finance Specialist, Field Survey Supervisor, 8 Ward Enumerators.",
    toolsUsed: ["Civic Participation Index", "SPSS", "Budget Tracking Matrix", "NVivo"]
  },
  {
    id: "a13",
    organization: "Kenya Paraplegic Organization",
    title: "Evidence-Based Advocacy for Urinary Continence Management Products",
    category: "disability",
    categoryLabel: "Health & Advocacy",
    date: "Jan 2017 – Dec 2022",
    location: "Embakasi Sub-County, Nairobi, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "Longitudinal 5-Year Campaign • 450 Spinal Cord Injury Survivors",
    description: "Evidence-based advocacy campaign, baseline assessment, and longitudinal evaluation to increase access, affordability, and public insurance coverage for Urinary Continence Management Products (UCMPs) for persons with spinal cord injury.",
    backgroundContext: "Persons living with spinal cord injuries (SCI) require lifetime access to clean intermittent catheters, urine bags, and continence care supplies to prevent fatal renal complications and pressure sores. In Kenya, these supplies are categorized as luxury non-essential items, subjecting SCI survivors to prohibitive out-of-pocket costs leading to severe medical infections and economic ruin. Kenya Paraplegic Organization engaged Inter-Act Research Associates to generate scientific evidence driving national advocacy.",
    objectives: [
      "Quantify annual medical expenditures and renal failure morbidity rates among SCI survivors lacking access to sterile UCMPs.",
      "Assess retail pricing, supply chain bottlenecks, and import tax structures for continence management supplies.",
      "Support evidence-based dialogue with the Ministry of Health, NCPWD, and National Health Insurance Fund (NHIF/SHA).",
      "Evaluate campaign outcomes in securing government subsidies and insurance inclusion."
    ],
    methodologyUsed: [
      {
        title: "Longitudinal Health & Expenditure Tracking",
        detail: "Tracked health outcomes, urinary tract infection (UTI) hospitalizations, and monthly spending among 450 SCI peers."
      },
      {
        title: "Pharmaceutical Supply Chain Audit",
        detail: "Audited 35 major pharmacies and medical supplier outlets in Nairobi evaluating stock availability and markup rates."
      },
      {
        title: "Policy Roundtable Facilitation",
        detail: "Conducted policy dialogues bringing together nephrologists, spinal injury specialists, parliamentarians, and SCI self-advocates."
      }
    ],
    keyFindings: [
      "78% of SCI survivors experienced recurrent severe UTIs due to reusing single-use catheters, leading to high renal failure rates.",
      "Average monthly cost of essential UCMPs equaled KES 14,500—exceeding the average household income of 82% of respondents.",
      "High import tariffs and 16% VAT severely inflated retail prices compared to neighboring countries.",
      "Evidence generated by the study directly contributed to securing dedicated medical supply allocations under national social protection funds."
    ],
    recommendationsAndImpact: [
      "Zero-rate VAT and import duties on all essential spinal cord injury medical supplies and continence products.",
      "Include a standardized monthly UCMP bundle within the National Health Insurance (SHA) chronic illness package.",
      "Establish centralized procurement through Kenya Medical Supplies Authority (KEMSA) to lower bulk purchasing prices."
    ],
    deliverables: [
      "Evidence-Based Advocacy Research Report (90 Pages)",
      "Health Economic Policy Brief on SCI Continence Care",
      "SCI Survivor Quality of Life Baseline Survey Dataset",
      "National Parliamentary Memorandum Document"
    ],
    teamComposition: "Principal Health Researcher, Senior Urological Consultant, Health Economist, Field Research Officer.",
    toolsUsed: ["EQ-5D Quality of Life Instrument", "SPSS v26", "Cost-Effectiveness Analysis Matrix"]
  },
  {
    id: "a14",
    organization: "Action Network for Disabled Youth (ANDY)",
    title: "Final Evaluation of Rights Capacity Building for Children & Youth with Disabilities",
    category: "evaluation",
    categoryLabel: "CSO Capacity Building",
    date: "Mar – May 2021",
    location: "Kenya 🇰🇪 (Multi-County)",
    country: "Kenya",
    scopeScale: "8 Counties • 40 CSOs • 1,100 Youth Beneficiaries",
    description: "Final evaluation of the project 'Strengthening Kenyan CSOs Capacity to Realize the Rights of Children and Young Persons with Disabilities' (2018–2020) funded by international disability donors.",
    backgroundContext: "Youth with disabilities face double exclusion—marginalized within youth programs due to disability, and overlooked within traditional disability organizations due to age. Action Network for Disabled Youth (ANDY) implemented a 3-year capacity building program across 8 counties to empower youth-led disability CSOs and promote human rights advocacy.",
    objectives: [
      "Evaluate the effectiveness of rights-based leadership and advocacy training provided to 40 youth-led CSOs.",
      "Measure youth participation levels in county policy formulation, sports, and economic empowerment initiatives.",
      "Assess organizational growth, financial transparency, and networking capabilities of beneficiary organizations.",
      "Provide strategic recommendations for strengthening youth disability movements in East Africa."
    ],
    methodologyUsed: [
      {
        title: "CSO Organizational Capacity Scorecards",
        detail: "Administered pre- and post-intervention assessment tools measuring governance, financial management, and advocacy."
      },
      {
        title: "Youth Beneficiary Survey",
        detail: "Surveyed 1,100 youth with disabilities across targeted counties regarding rights awareness and self-advocacy."
      },
      {
        title: "Stakeholder Reflection Sessions",
        detail: "Held 8 county reflection forums with Ministry of Youth, NCPWD officers, and youth leaders."
      }
    ],
    keyFindings: [
      "85% of participating youth-led CSOs established formal governance constitutions and active youth boards.",
      "Trained youth groups successfully advocated for adaptive sports facilities and county youth enterprise fund reservations.",
      "Rights awareness among enrolled youth increased from a baseline of 24% to 88% at endline.",
      "Need identified for long-term core funding rather than short-term project-based grants."
    ],
    recommendationsAndImpact: [
      "Establish regional youth disability mentorship networks connecting emerging leaders with veteran advocates.",
      "Integrate digital advocacy and social media training into CSO capacity building packages.",
      "Advocate for reserved seats for youth with disabilities on County Youth Advisory Boards."
    ],
    deliverables: [
      "ANDY Final Program Evaluation Report (78 Pages)",
      "Youth CSO Capacity Assessment Compendium",
      "Human Rights Advocacy Toolkit for Youth with Disabilities",
      "Executive Summary & Policy Infographic"
    ],
    teamComposition: "Lead Evaluator, Youth & Human Rights Specialist, Data Analyst, 6 Youth Field Enumerators.",
    toolsUsed: ["Organizational Capacity Assessment Tool (OCAT)", "SPSS", "KoboCollect", "NVivo"]
  },
  {
    id: "a15",
    organization: "Kenya Private Sector Alliance (KEPSA)",
    title: "Mid-Term Evaluation of Switch Africa Green Project (MSME Eco-Entrepreneurship)",
    category: "evaluation",
    categoryLabel: "MSME & Green Economy",
    date: "May – Sep 2018",
    location: "Kenya 🇰🇪 (National Coverage)",
    country: "Kenya",
    scopeScale: "National Scope • 180 MSMEs • UNEP & EU Funded",
    description: "Mid-Term Evaluation Report of Switch Africa Green Project promoting sustainable consumption and production practices, energy efficiency, and eco-entrepreneurship among micro, small, and medium enterprises.",
    backgroundContext: "The Switch Africa Green project, supported by UNEP, UNDP, and the European Union, aimed to support African countries in transitioning to a green economy by adopting Sustainable Consumption and Production (SCP) practices. In Kenya, KEPSA served as a key sector grantee supporting MSMEs in agriculture, manufacturing, and tourism. Inter-Act Research Associates was commissioned for the Mid-Term Evaluation.",
    objectives: [
      "Evaluate progress achieved by targeted MSMEs in adopting SCP practices, waste recycling, and energy efficiency.",
      "Assess green business growth, eco-innovation sales, and job creation outcomes.",
      "Identify regulatory, financial, and technical challenges hindering green technology adoption among Kenyan MSMEs.",
      "Formulate corrective recommendations to optimize project performance during the remaining phase."
    ],
    methodologyUsed: [
      {
        title: "Enterprise Eco-Audit Survey",
        detail: "Audited 180 participating MSMEs across manufacturing, agro-processing, and hospitality sectors."
      },
      {
        title: "Key Informant Interviews",
        detail: "Interviews with KEPSA executives, UNEP program leads, Ministry of Environment officers, and green technology vendors."
      },
      {
        title: "Financial & Environmental Return Analysis",
        detail: "Quantified energy savings, waste reduction volumes, and profit margin changes attributable to SCP adoption."
      }
    ],
    keyFindings: [
      "Targeted MSMEs achieved an average 22% reduction in monthly electricity expenditures through solar and energy-efficient retrofits.",
      "Participating enterprises generated 340 new green jobs, primarily in organic waste recycling and eco-packaging.",
      "High initial capital costs of green machinery remained the primary barrier for non-adopting micro-enterprises.",
      "Strengthened business networking led to B2B waste-to-resource partnerships between manufacturing plants."
    ],
    recommendationsAndImpact: [
      "Establish green sub-grants and concessionary loan guarantees with commercial banks for eco-machinery purchases.",
      "Standardize green business certification marks to enhance consumer trust and export market access.",
      "Incorporate green procurement standards within national government purchasing guidelines."
    ],
    deliverables: [
      "Switch Africa Green Mid-Term Evaluation Report (92 Pages)",
      "MSME Eco-Efficiency & Green Jobs Case Study Booklet",
      "Green Economy Policy Recommendation Brief for National Treasury",
      "UNEP/EU Grant Performance Dashboard"
    ],
    teamComposition: "Lead Green Economy Evaluator, Industrial Efficiency Engineer, Enterprise Analyst, 6 Enumerators.",
    toolsUsed: ["UNEP SCP Assessment Metric", "SPSS v25", "Enterprise Eco-Audit Scorecard"]
  },
  {
    id: "a16",
    organization: "Centre for International Private Enterprise (CIPE)",
    title: "Citizen Involvement Study in County Budget and Economic Forum (CBEF)",
    category: "governance",
    categoryLabel: "Public Finance & CBEF",
    date: "Jul 2015 – 2018",
    location: "County Governments, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "12 Counties • 120 CBEF Members • Policy Longitudinal Study",
    description: "Empirical policy study analyzing citizen engagement, business association representation, and participation levels in the budgeting process through the statutory County Budget and Economic Forum (CBEF).",
    backgroundContext: "Section 137 of Kenya's Public Finance Management (PFM) Act 2012 establishes the County Budget and Economic Forum (CBEF) in each county to serve as the primary institutional vehicle for citizen and private sector consultation on financial management. CIPE engaged Inter-Act Research Associates to perform a longitudinal multi-county study investigating whether CBEFs were functioning as vibrant democratic arenas or empty bureaucratic mandates.",
    objectives: [
      "Audit the establishment, composition, and operational frequency of CBEFs across 12 selected counties.",
      "Evaluate the representation and influence of business associations, professionals, labor, women, youth, and PWDs.",
      "Analyze the impact of CBEF recommendations on published County Fiscal Strategy Papers (CFSPs).",
      "Formulate reform guidelines to operationalize inactive CBEFs across Kenya."
    ],
    methodologyUsed: [
      {
        title: "Multi-County Institutional Audit",
        detail: "Audited official Gazette notices, meeting minutes, and attendance logs across 12 county governments."
      },
      {
        title: "CBEF Member In-Depth Interviews",
        detail: "Conducted 120 structured interviews with non-state actor representatives, Governors' appointees, and Assembly members."
      },
      {
        title: "Budgetary Impact Tracking",
        detail: "Compared CBEF submitted priority reports against final enacted County Appropriation Acts."
      }
    ],
    keyFindings: [
      "Only 5 out of 12 audited counties had fully operational CBEFs meeting statutory quarterly scheduling requirements.",
      "CBEF appointments were frequently politicized, with limited independent representation from informal business associations and vulnerable groups.",
      "Operational budget constraints severely restricted CBEF secretariats from conducting grassroot public consultations.",
      "Counties with active CBEFs demonstrated 35% higher execution rates on capital development projects."
    ],
    recommendationsAndImpact: [
      "Enact standardized operational guidelines guaranteeing independent non-state actor nomination processes.",
      "Ring-fence a minimum 0.5% county treasury operational budget specifically for CBEF public consultation logistics.",
      "Establish a national peer-learning network for CBEF secretariats to share public finance tracking methodologies."
    ],
    deliverables: [
      "CIPE National CBEF Research Monograph (105 Pages)",
      "Model County CBEF Operational Regulations & By-Laws",
      "Policy Brief for Council of Governors (CoG) & CRA",
      "Public Finance Engagement Guide for Private Sector Associations"
    ],
    teamComposition: "Principal Governance Specialist, Public Finance Economist, Legal Analyst, 4 Regional Researchers.",
    toolsUsed: ["CBEF Functionality Scorecard", "PFM Act Compliance Index", "SPSS", "NVivo"]
  },
  {
    id: "a17",
    organization: "AMREF Health Africa",
    title: "Koota Injena SBCC Messaging & SRHR Policy Brief Development",
    category: "research",
    categoryLabel: "Health & SBCC",
    date: "Aug – Sep 2018",
    location: "Samburu & Marsabit Counties, Kenya 🇰🇪",
    country: "Kenya",
    scopeScale: "2 Pastoral Counties • 600 Clan Elders & Youth • USAID Funded",
    description: "Development of Social and Behavior Change Communication (SBCC) messages, cultural dialogue guides, and evidence-based policy briefs on Sexual Reproductive Health Rights (SRHR) and FGM prevention under the Koota Injena Project.",
    backgroundContext: "The Koota Injena ('Come let us talk') project, implemented by AMREF Health Africa with USAID funding, leveraged clan elders, traditional leaders, and intergenerational dialogue to end Female Genital Mutilation/Cutting (FGM/C) and early child marriage among pastoral communities in Samburu and Marsabit. AMREF contracted Inter-Act Research Associates to lead the SBCC message testing, research synthesis, and policy brief formulation.",
    objectives: [
      "Conduct formative research on cultural drivers, clan governance structures, and intergenerational communication dynamics.",
      "Develop and pre-test culturally sensitive SBCC audio messages, radio spot scripts, and elder dialogue guides.",
      "Formulate evidence-based SRHR policy briefs targeted at Samburu and Marsabit County Health Committees.",
      "Evaluate message recall and attitude shifts among clan elders, morans, and young women."
    ],
    methodologyUsed: [
      {
        title: "Participatory Cultural Message Testing",
        detail: "Pre-tested 18 candidate SBCC message concepts with 24 focus groups of elders, morans, and women leaders."
      },
      {
        title: "Formative Ethnographic Study",
        detail: "In-depth qualitative research documenting clan decision-making hierarchies and rites of passage."
      },
      {
        title: "Quantitative Baseline/Endline Attitude Survey",
        detail: "Surveyed 600 pastoral respondents tracking shifts in intentions regarding FGM/C and girl-child education."
      }
    ],
    keyFindings: [
      "Reframing anti-FGM advocacy around 'clan honor and blessing' led by respected elders was 4x more effective than external legal rights campaigns.",
      "91% of targeted clan elders who participated in Koota Injena dialogues signed public declarations prohibiting FGM/C in their jurisdictions.",
      "Radio spot messages recorded in local Samburu/Rendille dialects achieved an 84% recall rate among rural pastoralists.",
      "Need highlighted for sustained economic alternatives for former traditional circumcisers."
    ],
    recommendationsAndImpact: [
      "Scale up elder-led intergenerational dialogue models in national anti-FGM campaign strategies.",
      "Integrate SRHR and child protection modules into traditional passage-to-manhood (Moranhood) rites.",
      "Strengthen cross-border peace and health committees along Kenya-Ethiopia pastoral corridors."
    ],
    deliverables: [
      "Koota Injena Formative Research & SBCC Synthesis Report",
      "4 SRHR & Anti-FGM Policy Briefs for County Governments",
      "Pre-Tested Elder Dialogue Facilitation Guide (Samburu & Rendille)",
      "Audio SBCC Radio Spot Scripts & Pre-Test Report"
    ],
    teamComposition: "Lead Health SBCC Researcher, Anthropologist, SRHR Specialist, 6 Pastoral Field Facilitators.",
    toolsUsed: ["SBCC Pre-Testing Matrix", "NVivo 12", "Likert Attitude Scale", "SPSS"]
  }
];
