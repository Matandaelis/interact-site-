export interface GlossaryTerm {
  id: string;
  term: string;
  acronym?: string;
  category: "MEAL & Evaluation" | "Data & Research" | "Strategy & Policy" | "Inclusion & Safeguarding" | "Capacity & Governance";
  shortDefinition: string;
  detailedDefinition: string;
  practicalExample: string;
  relatedTerms?: string[];
}

export const GLOSSARY_CATEGORIES = [
  "All Categories",
  "MEAL & Evaluation",
  "Data & Research",
  "Strategy & Policy",
  "Inclusion & Safeguarding",
  "Capacity & Governance",
] as const;

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: "baseline-survey",
    term: "Baseline Survey",
    category: "MEAL & Evaluation",
    shortDefinition: "An initial study conducted before project implementation to establish reference data against which future progress and impact will be measured.",
    detailedDefinition: "A baseline survey collects quantitative and qualitative measurements of key indicators prior to intervention. It serves as the benchmark against which mid-term reviews (MTR) and final endline evaluations measure progress, changes, and overall project attribution or contribution.",
    practicalExample: "Prior to launching an agricultural extension program in Turkana County, Kenya, IARA conducted a baseline survey of 1,200 smallholder farmer households to measure initial crop yields, household income, and drought adaptation techniques.",
    relatedTerms: ["Endline Evaluation", "Indicator", "Theory of Change"]
  },
  {
    id: "endline-evaluation",
    term: "Endline Evaluation",
    category: "MEAL & Evaluation",
    shortDefinition: "A comprehensive assessment conducted at the conclusion of a project or program intervention to evaluate overall achievements against baseline metrics.",
    detailedDefinition: "Endline evaluations measure the final status of project indicators, assessing effectiveness, efficiency, impact, and sustainability. They utilize rigorous comparative analysis against baseline data to determine whether target objectives were met.",
    practicalExample: "IARA carried out an endline evaluation for a 3-year USAID-funded youth economic empowerment initiative across Kampala and Gulu, comparing income growth against the 2021 baseline survey.",
    relatedTerms: ["Baseline Survey", "OECD-DAC Criteria", "Impact Assessment"]
  },
  {
    id: "theory-of-change",
    term: "Theory of Change",
    acronym: "ToC",
    category: "Strategy & Policy",
    shortDefinition: "A comprehensive description and illustration of how and why a desired change is expected to happen in a specific context.",
    detailedDefinition: "A Theory of Change maps out the logical sequence from inputs and activities through outputs, outcomes, and long-term impact. It explicitly details underlying assumptions, contextual risks, and enabling factors required for program success.",
    practicalExample: "When designing a cross-border trade facilitation strategy for the EAC Secretariat, IARA formulated a Theory of Change articulating how simplified customs procedures lead to increased women-led micro-enterprise revenues.",
    relatedTerms: ["Logical Framework", "Result-Based Management", "Indicator"]
  },
  {
    id: "logical-framework",
    term: "Logical Framework (LogFrame)",
    acronym: "LogFrame",
    category: "MEAL & Evaluation",
    shortDefinition: "A structured planning tool summarizing project objectives, key performance indicators, verification sources, and critical assumptions in a matrix format.",
    detailedDefinition: "The LogFrame matrix organizes project design into a 4x4 or 4x5 table listing Impact, Outcomes, Outputs, and Activities alongside Objectively Verifiable Indicators (OVIs), Means of Verification (MoVs), and Risks/Assumptions.",
    practicalExample: "IARA developed a robust LogFrame matrix for a multi-country WASH intervention in Tanzania and Rwanda, establishing verifiable water safety indicators for municipal partners.",
    relatedTerms: ["Theory of Change", "Key Performance Indicator", "Result-Based Management"]
  },
  {
    id: "meal",
    term: "Monitoring, Evaluation, Accountability, and Learning",
    acronym: "MEAL",
    category: "MEAL & Evaluation",
    shortDefinition: "An integrated management framework combining project tracking, impact measurement, community feedback mechanisms, and organizational knowledge capture.",
    detailedDefinition: "MEAL extends traditional M&E by adding Accountability (ensuring beneficiary rights, feedback channels, and safeguarding) and Learning (systematically using evaluation findings to adapt and refine current and future programming).",
    practicalExample: "IARA designed a digital MEAL system for an INGO in South Sudan incorporating toll-free beneficiary feedback hotlines alongside real-time mobile survey dashboards.",
    relatedTerms: ["Logical Framework", "Data Quality Assessment", "Safeguarding"]
  },
  {
    id: "data-quality-assessment",
    term: "Data Quality Assessment",
    acronym: "DQA",
    category: "Data & Research",
    shortDefinition: "A systematic audit of data collection processes, storage tools, and reporting pathways to ensure data validity, reliability, precision, timeliness, and integrity.",
    detailedDefinition: "DQA evaluates five core data dimensions: Validity (accurate representation), Reliability (consistent measurement over time), Precision (sufficient detail), Timeliness (current data for decision-making), and Integrity (freedom from manipulation or error).",
    practicalExample: "IARA conducted an independent DQA across 45 rural health facilities in Western Kenya to verify DHIS2 reporting accuracy before global donor disbursement.",
    relatedTerms: ["Digital Data Collection", "Triangulation", "Open Data Kit"]
  },
  {
    id: "mixed-methods-research",
    term: "Mixed-Methods Research",
    category: "Data & Research",
    shortDefinition: "A research approach integrating both quantitative statistical surveys and qualitative contextual inquiry to yield comprehensive evidence.",
    detailedDefinition: "Mixed-methods research combines structured household surveys and biometric measurements with in-depth qualitative focus group discussions (FGDs), key informant interviews (KIIs), and participatory rural appraisals (PRA).",
    practicalExample: "For a World Bank education access study in Rwanda, IARA paired 2,500 quantitative mobile surveys with qualitative interviews of school headteachers and community leaders.",
    relatedTerms: ["Focus Group Discussion", "Key Informant Interview", "Triangulation"]
  },
  {
    id: "digital-data-collection",
    term: "Digital Data Collection (CAPI)",
    acronym: "CAPI / ODK",
    category: "Data & Research",
    shortDefinition: "The use of mobile devices (tablets/smartphones) and specialized survey software (e.g., ODK, KoboToolbox, SurveyCTO) for field data capture.",
    detailedDefinition: "Computer-Assisted Personal Interviewing (CAPI) replaces paper questionnaires with tablet-based digital forms equipped with automated skip logic, range checks, GPS coordinate tagging, audio auditing, and real-time cloud server synchronization.",
    practicalExample: "IARA deployed 150 field enumerators armed with encrypted KoboCollect tablets to map 3,200 smallholder farms across Tanzania within a 14-day field window.",
    relatedTerms: ["Data Quality Assessment", "GIS Mapping", "Triangulation"]
  },
  {
    id: "oecd-dac-criteria",
    term: "OECD-DAC Evaluation Criteria",
    acronym: "DAC Criteria",
    category: "MEAL & Evaluation",
    shortDefinition: "Six internationally recognized standards used to evaluate international development interventions: Relevance, Coherence, Effectiveness, Efficiency, Impact, and Sustainability.",
    detailedDefinition: "Established by the OECD Development Assistance Committee, these criteria provide a standardized normative framework for assessing interventions. In 2019, 'Coherence' was added to explicitly assess alignment with other interventions.",
    practicalExample: "IARA applied the six OECD-DAC criteria during a mid-term review of a $12M regional climate adaptation project spanning Kenya, Uganda, and Rwanda.",
    relatedTerms: ["Endline Evaluation", "Impact Assessment", "Value for Money"]
  },
  {
    id: "gender-equality-social-inclusion",
    term: "Gender Equality and Social Inclusion",
    acronym: "GESI",
    category: "Inclusion & Safeguarding",
    shortDefinition: "A strategic approach ensuring that women, persons with disabilities, youth, and marginalized groups have equal voice, access, and benefits from development programs.",
    detailedDefinition: "GESI frameworks analyze power relations, systemic barriers, and intersectional discrimination. In research and evaluation, GESI requires disaggregated data collection, inclusive sampling, and barrier-free consultation venues.",
    practicalExample: "IARA executed a comprehensive GESI audit for an East African renewable energy coalition, recommending targeted subsidies and technical apprenticeships for rural women.",
    relatedTerms: ["Disability Mainstreaming", "Safeguarding", "Participatory Rural Appraisal"]
  },
  {
    id: "disability-mainstreaming",
    term: "Disability Mainstreaming & Inclusion",
    category: "Inclusion & Safeguarding",
    shortDefinition: "The systematic integration of persons with disabilities (PWDs) into all stages of policy, program design, research, and organizational operations.",
    detailedDefinition: "Disability mainstreaming uses frameworks such as the Washington Group Questions to identify functional difficulty levels. It ensures accessible survey tools (e.g., sign language interpretation, Easy-Read formats, accessible venues).",
    practicalExample: "IARA incorporated Washington Group Short Set questions into national education surveys in Kenya, enabling ministry officials to track inclusive education funding.",
    relatedTerms: ["Gender Equality and Social Inclusion", "Participatory Rural Appraisal"]
  },
  {
    id: "value-for-money",
    term: "Value for Money Assessment",
    acronym: "VfM (4Es)",
    category: "Strategy & Policy",
    shortDefinition: "An analytical framework evaluating whether an intervention maximizes development impact relative to its financial expenditure, guided by Economy, Efficiency, Effectiveness, and Equity.",
    detailedDefinition: "VfM analyses assess Economy (procuring inputs at best cost), Efficiency (converting inputs into quality outputs), Effectiveness (achieving desired outcomes), and Equity (ensuring benefits reach marginalized populations).",
    practicalExample: "IARA conducted a VfM evaluation for a FCDO-funded governance reform program in Uganda, quantifying unit costs per citizen sensitized.",
    relatedTerms: ["OECD-DAC Criteria", "Cost-Benefit Analysis", "Result-Based Management"]
  },
  {
    id: "capacity-needs-assessment",
    term: "Capacity Needs Assessment",
    acronym: "CNA",
    category: "Capacity & Governance",
    shortDefinition: "A structured diagnostic evaluating an organization's existing skills, operational infrastructure, governance systems, and resource gaps.",
    detailedDefinition: "CNA examines three analytical levels: Individual (skills, competencies), Institutional/Organizational (internal procedures, leadership, financial systems), and Systemic/Environmental (policy, legal frameworks).",
    practicalExample: "IARA conducted a national CNA for 14 county departments of agriculture in Kenya, establishing a 3-year institutional capacity building baseline.",
    relatedTerms: ["Institutional Capacity Building", "Governance Audit"]
  },
  {
    id: "institutional-capacity-building",
    term: "Institutional Capacity Building",
    category: "Capacity & Governance",
    shortDefinition: "The process of strengthening an organization's internal capabilities, human capital, governance structures, and technology to sustain long-term performance.",
    detailedDefinition: "Beyond one-off training, institutional capacity building entails developing tailored Standard Operating Procedures (SOPs), implementing data management systems, mentoring staff, and establishing sustainability roadmaps.",
    practicalExample: "IARA delivered a 12-month capacity strengthening module for civil society coalitions in Dar es Salaam, training 120 policy analysts in budget advocacy.",
    relatedTerms: ["Capacity Needs Assessment", "Standard Operating Procedures"]
  },
  {
    id: "triangulation",
    term: "Data Triangulation",
    category: "Data & Research",
    shortDefinition: "The cross-verification of findings using multiple data sources, research methods, or independent evaluators to enhance validity and reduce bias.",
    detailedDefinition: "Triangulation reinforces research rigor by comparing quantitative survey results with qualitative interview insights, secondary literature reviews, and remote sensing/satellite observation.",
    practicalExample: "In analyzing drought recovery in Kajiado, IARA triangulated household survey metrics with satellite NDVI vegetation indices and pastoralist focus group narratives.",
    relatedTerms: ["Mixed-Methods Research", "Data Quality Assessment"]
  },
  {
    id: "key-informant-interview",
    term: "Key Informant Interview",
    acronym: "KII",
    category: "Data & Research",
    shortDefinition: "In-depth qualitative interviews conducted with experts, officials, or community leaders who possess specialized knowledge about a topic.",
    detailedDefinition: "KIIs utilize semi-structured topic guides allowing flexible probing. Key informants provide contextual nuance, institutional background, policy insights, and sensitive operational details not captured in mass surveys.",
    practicalExample: "IARA held 35 KIIs with senior ministry officials, EAC trade commissioners, and port authorities during a regional logistics trade corridor assessment.",
    relatedTerms: ["Focus Group Discussion", "Mixed-Methods Research"]
  },
  {
    id: "focus-group-discussion",
    term: "Focus Group Discussion",
    acronym: "FGD",
    category: "Data & Research",
    shortDefinition: "A facilitated qualitative session with 6-10 selected participants to explore social norms, collective opinions, and shared experiences.",
    detailedDefinition: "FGDs rely on interactive group dynamics guided by a trained moderator and note-taker. Groups are purposefully homogeneous (e.g., young mothers, youth entrepreneurs) to ensure comfortable, open dialogue.",
    practicalExample: "IARA moderated 24 gender-segregated FGDs across refugee settlements in West Nile, Uganda, capturing community perceptions of social cohesion programs.",
    relatedTerms: ["Key Informant Interview", "Mixed-Methods Research"]
  },
  {
    id: "gis-data-mapping",
    term: "GIS & Spatial Data Mapping",
    acronym: "GIS",
    category: "Data & Research",
    shortDefinition: "The capture, analysis, and visual representation of location-tagged data using Geographic Information Systems.",
    detailedDefinition: "Spatial GIS mapping overlays field survey data with geographical layers (boundaries, infrastructure, hydrology, elevation) to identify spatial clusters, service coverage gaps, and environmental exposure zones.",
    practicalExample: "IARA mapped 180 primary healthcare facilities across Western Kenya, creating an interactive GIS dashboard highlighting emergency transport blindspots.",
    relatedTerms: ["Digital Data Collection", "Data Quality Assessment"]
  },
  {
    id: "safeguarding-ethics-protocol",
    term: "Safeguarding & Research Ethics",
    category: "Inclusion & Safeguarding",
    shortDefinition: "Policies and procedures protecting research participants, vulnerable populations, and field staff from harm, exploitation, or data breaches.",
    detailedDefinition: "Research ethics protocols mandate Informed Consent (written/oral in local languages), Do No Harm principles, Child Protection protocols, Data Anonymization (GDPR/Data Protection Act compliance), and secure encrypted data storage.",
    practicalExample: "IARA's IRB-compliant research ethics protocol governed a sensitive study on gender-based violence response services in post-conflict zones, ensuring total participant anonymity.",
    relatedTerms: ["Gender Equality and Social Inclusion", "Data Quality Assessment"]
  },
  {
    id: "results-based-management",
    term: "Results-Based Management",
    acronym: "RBM",
    category: "Strategy & Policy",
    shortDefinition: "A management strategy focusing on performance and achievement of outcomes and impacts rather than merely tracking inputs and activities.",
    detailedDefinition: "RBM aligns institutional planning, budgeting, monitoring, and reporting around clear performance indicators, ensuring accountability and facilitating evidence-based decision-making throughout the project life cycle.",
    practicalExample: "IARA assisted a regional microfinance network in transitioning from activity tracking to RBM, realigning operational targets with sustainable client poverty exit rates.",
    relatedTerms: ["Theory of Change", "Logical Framework", "Key Performance Indicator"]
  },
  {
    id: "feasibility-study",
    term: "Feasibility Study & Appraisal",
    category: "Strategy & Policy",
    shortDefinition: "An analytical evaluation assessing the technical, financial, economic, environmental, and legal viability of a proposed project prior to investment.",
    detailedDefinition: "A feasibility study analyzes market demand, technical design alternatives, financial internal rate of return (FIRR), environmental impact risks, and policy alignment to advise donors or governments on investment decision-making.",
    practicalExample: "IARA executed a pre-investment feasibility study for an off-grid solar mini-grid installation across 12 island communities in Lake Victoria.",
    relatedTerms: ["Value for Money", "Theory of Change"]
  },
  {
    id: "policy-brief",
    term: "Policy Brief & Strategic Advisory",
    category: "Strategy & Policy",
    shortDefinition: "A concise, evidence-based synthesis of research findings designed to guide decision-makers toward actionable policy solutions.",
    detailedDefinition: "Policy briefs distill complex empirical research into 2 to 4 pages of jargon-free executive summaries, clear policy options, budget implications, and concrete recommendations tailored for ministers, MPs, and donor directors.",
    practicalExample: "Following an East Africa cross-border grain trade evaluation, IARA authored a policy brief presented to the EAC Sectoral Council on Agriculture.",
    relatedTerms: ["Theory of Change", "OECD-DAC Criteria"]
  },
  {
    id: "participatory-rural-appraisal",
    term: "Participatory Rural Appraisal",
    acronym: "PRA / PLA",
    category: "Inclusion & Safeguarding",
    shortDefinition: "An interactive research methodology enabling local community members to analyze their own realities, map resources, and prioritize development needs.",
    detailedDefinition: "PRA utilizes visual tools such as community resource mapping, transect walks, seasonal calendars, Venn diagrams of local institutions, and matrix scoring, ensuring non-literate community members participate fully.",
    practicalExample: "IARA led a 5-day PRA exercise in pastoralist communities in Kajiado, facilitating community-led prioritization of climate-smart borehole locations.",
    relatedTerms: ["Focus Group Discussion", "Gender Equality and Social Inclusion"]
  },
  {
    id: "key-performance-indicator",
    term: "Key Performance Indicator",
    acronym: "KPI",
    category: "MEAL & Evaluation",
    shortDefinition: "A quantifiable measure used to evaluate the success of an organization, program, or operational activity in meeting objectives.",
    detailedDefinition: "Effective KPIs follow SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound). They track progress across inputs, outputs, outcomes, and long-term impacts.",
    practicalExample: "IARA established 14 core KPIs for a regional health systems program, tracking metrics such as 'percentage of facility staff trained in neonatal resuscitation'.",
    relatedTerms: ["Logical Framework", "Results-Based Management"]
  },
  {
    id: "impact-assessment",
    term: "Impact Assessment",
    category: "MEAL & Evaluation",
    shortDefinition: "A rigorous evaluation measuring the long-term, systemic, or counterfactual changes produced by an intervention.",
    detailedDefinition: "Impact assessments isolate project effects from external context using experimental (RCTs) or quasi-experimental methods (Difference-in-Differences, Propensity Score Matching) to prove causality.",
    practicalExample: "IARA conducted a quasi-experimental impact evaluation of a cash transfer program in Northern Uganda, comparing beneficiary households against matched control communities.",
    relatedTerms: ["OECD-DAC Criteria", "Endline Evaluation"]
  }
];
