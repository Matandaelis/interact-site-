import { specializationServices } from "./specializationData";

export interface ServiceDetail {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  heroSummary: string;
  overview: string[];
  methodologyText: string[];
  coreCapabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  caseStudies: {
    title: string;
    client: string;
    location: string;
    year: string;
    summary: string;
    outcomes: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  qualityStandards: string[];
  detailedSections: {
    heading: string;
    paragraphs: string[];
  }[];
}

const coreServices: ServiceDetail[] = [
  {
    id: "me",
    title: "Monitoring, Evaluation, Reporting & Learning (MERL) & Formative Research",
    shortTitle: "Monitoring & Evaluation (MERL)",
    badge: "Core Flagship Practice",
    tagline: "Systematic research, baseline surveys, impact evaluation, and real-time MERL systems across East & Horn of Africa.",
    heroSummary: "End-to-end monitoring, evaluation, research, and learning systems engineered for development programs, public sector initiatives, and international non-governmental organizations.",
    overview: [
      "Inter-Act Research Associates (IARA) delivers gold-standard Monitoring, Evaluation, Reporting, and Learning (MERL) services designed to strengthen accountability, enable evidence-based decision-making, and capture systemic impact across multi-sectoral development interventions. Operating across Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Somalia, our MERL division combines rigorous quantitative metrics with deep qualitative insights.",
      "Our approach is anchored in international evaluation standards—including the OECD-DAC criteria (Relevance, Coherence, Efficiency, Effectiveness, Impact, and Sustainability) and USAID Evaluation Policy guidelines. We specialize in designing robust Logical Frameworks (LogFrames), Theory of Change (ToC) models, custom indicator tracking matrices (ITMs), and cloud-based mobile data collection protocols that guarantee data accuracy and real-time verification.",
      "Whether conducting large-scale household baseline surveys in arid and semi-arid lands (ASAL), mid-term assessments of community resilience, or complex multi-country endline impact evaluations, IARA brings unmatched field experience, local contextual understanding, and statistical sophistication."
    ],
    methodologyText: [
      "IARA employs a mixed-methods research architecture that systematically triangulates quantitative survey data with qualitative stakeholder narratives. Our quantitative arm utilizes probability sampling techniques—including stratified multi-stage cluster sampling, systematic random sampling, and power analysis for sample size determination—to ensure statistical power and generalizability.",
      "Qualitative inquiry is governed by rigorous social science protocols, incorporating Key Informant Interviews (KIIs) with policy makers and community leaders, Focus Group Discussions (FGDs) separated by gender and disability status, and Most Significant Change (MSC) story harvesting.",
      "Field data collection is completely digitized via mobile data collection tools (ODK, KoboToolbox, CSPro) featuring high-precision GPS tagging, timestamp audit trails, constraints validation, and logic skips. All field operations are supported by real-time quality assurance algorithms that inspect data streams daily for enumerator bias, missing variables, or spatial anomalies."
    ],
    coreCapabilities: [
      {
        title: "Baseline, Midline & Endline Evaluations",
        description: "Rigorous empirical evaluations measuring counterfactuals, attribution, and contribution across complex development initiatives.",
        deliverables: ["Inception Reports with Sampling Frameworks", "Comprehensive Evaluation Reports with Executive Summaries", "Policy Briefs & Infographic Factsheets", "Raw & Cleaned Datasets with Codebooks (SPSS, Stata, CSV)"]
      },
      {
        title: "Third-Party Monitoring (TPM) & Verification",
        description: "Independent, impartial verification of project activities and beneficiary distribution in fragile, hard-to-reach, or conflict-affected zones.",
        deliverables: ["Quarterly Verification Dashboards", "Beneficiary Satisfaction Audits", "Risk & Security Compliance Logs", "Field Observation Incident Reports"]
      },
      {
        title: "Database Development & Real-Time Dashboards",
        description: "Custom web-based data management infrastructure, automated data pipelines, and interactive visual reporting portals.",
        deliverables: ["Interactive PowerBI/Tableau Dashboards", "Relational Database Schemas (SQL/PostgreSQL)", "Automated Indicator Progress Calculators", "User Access & Role Permission Frameworks"]
      },
      {
        title: "Theory of Change & LogFrame Formulation",
        description: "Strategic conceptualization of program logic, causal pathways, assumption mapping, and performance indicators.",
        deliverables: ["Visual Theory of Change Diagrams", "Complete Logical Framework Matrices", "Indicator Definition Manuals (PIRS)", "Data Collection Frequency Schedules"]
      }
    ],
    caseStudies: [
      {
        title: "Evaluation of Disability Mainstreaming & Inclusion Program",
        client: "Disability Rights Fund (DRF) / VSO Kenya",
        location: "Nairobi, Kisumu & Garissa Counties, Kenya",
        year: "2021 - 2022",
        summary: "Conducted a multi-county evaluation investigating the economic empowerment, accessibility barriers, and policy compliance for persons with disabilities.",
        outcomes: "Synthesized baseline metrics across 1,200 households, identifying key institutional gaps that directly influenced county-level budgeting for assistive technologies."
      },
      {
        title: "Baseline Survey on Youth Entrepreneurship & Eco-Livelihoods",
        client: "Regional Development Partner Network",
        location: "Kajiado & Machakos Counties",
        year: "2020",
        summary: "Mapped local MSME resilience, green business practices, and life-skills training adoption among 850 youth-led enterprises.",
        outcomes: "Established benchmark indicators that informed a $2.5M multi-year youth enterprise development intervention."
      }
    ],
    techStack: [
      { category: "Mobile Data Collection", items: ["ODK Collect", "KoboToolbox", "CSPro Mobile", "CommCare"] },
      { category: "Statistical Analysis", items: ["SPSS", "Stata 17", "R Studio", "Python (Pandas/NumPy)"] },
      { category: "Qualitative Data Analysis", items: ["NVivo 14", "ATLAS.ti", "Dedoose"] },
      { category: "Visualization & Dashboards", items: ["PowerBI", "Tableau Desktop", "Recharts", "Google Looker Studio"] }
    ],
    qualityStandards: [
      "OECD-DAC Quality Standards for Development Evaluation",
      "Institutional Review Board (IRB) & Ethical Approval Protocols",
      "Do No Harm & Safeguarding Directives for Vulnerable Populations",
      "Data Protection Act (Kenya 2019) & GDPR Compliance",
      "Double-blind Data Entry Verification & Automated Logic Checks"
    ],
    detailedSections: [
      {
        heading: "Integrated Learning Loops & Adaptive Management",
        paragraphs: [
          "In modern international development, static monitoring that only gathers data for mandatory donor reporting fails to deliver transformational outcomes. IARA embeds adaptive management feedback loops into every MERL system we design. We establish monthly or quarterly pause-and-reflect sessions where project implementation teams analyze live field data, test operational hypotheses, and recalibrate intervention tactics in response to emerging field realities.",
          "This dynamic learning cycle transforms monitoring data from passive compliance documentation into an active strategic asset. By linking real-time mobile data feeds directly to executive dashboards, program managers can detect project bottlenecks, resource allocation inefficiencies, or unintended consequences early in the project lifecycle, allowing for immediate corrective action."
        ]
      },
      {
        heading: "Complex Impact Evaluation & Econometric Modeling",
        paragraphs: [
          "For high-stakes investments requiring conclusive evidence of causality, IARA deploys quasi-experimental and experimental research designs. Our biostatisticians and econometricians utilize Difference-in-Differences (DiD), Propensity Score Matching (PSM), Regression Discontinuity Design (RDD), and Instrumental Variables (IV) to isolate net project impact from confounding environmental variables.",
          "Our field research teams are extensively trained in ethical respondent recruitment, informed consent protocols in local languages, and non-extractive research methodologies that treat community respondents as active partners in knowledge generation rather than passive data sources."
        ]
      },
      {
        heading: "Institutionalization of MERL Systems",
        paragraphs: [
          "A core pillar of IARA's philosophy is ensuring long-term sustainability. When commissioned to build MERL architecture for public institutions or national NGOs, we do not simply deliver off-the-shelf templates. We execute comprehensive institutional capacity building, conducting hands-on training for staff on data hygiene, automated script writing, indicator dictionary creation, and database maintenance.",
          "By leaving behind fully operational, user-friendly digital databases and customized Standard Operating Procedures (SOPs), we empower recipient organizations to independently maintain, update, and scale their MERL infrastructure long after our consulting engagement culminates."
        ]
      }
    ]
  },
  {
    id: "da",
    title: "Disability Mainstreaming, Accessibility Audits & Inclusive Governance",
    shortTitle: "Disability Mainstreaming & Accessibility Audits",
    badge: "Specialized Inclusion Practice",
    tagline: "Workplace & public facility physical/digital audits, inclusion policy formulation, and GESI research.",
    heroSummary: "Pioneering technical expertise in disability inclusion, universal design compliance, workplace accessibility audits, and rights-based policy formulation across East Africa.",
    overview: [
      "Inter-Act Research Associates (IARA) is a recognized pioneer in disability mainstreaming, accessibility auditing, and Gender Equality & Social Inclusion (GESI) advisory services in East Africa. Guided by the UN Convention on the Rights of Persons with Disabilities (UNCRPD), the Persons with Disabilities Act of Kenya, and Universal Design principles, IARA empowers institutions to eliminate physical, attitudinal, communication, and policy barriers.",
      "We partner with national government ministries, county governments, international development agencies, learning institutions, and corporate enterprises to conduct exhaustive accessibility audits and develop tailored Disability Inclusion Policies. Our work ensures that public infrastructure, digital platforms, recruitment pipelines, and service delivery mechanisms actively accommodate persons with diverse physical, sensory, intellectual, and psychosocial impairments.",
      "With a dedicated network of disability rights experts, accessibility engineers, and lived-experience advisors, IARA combines technical compliance auditing with empathetic, rights-based community engagement to drive genuine institutional transformation."
    ],
    methodologyText: [
      "Our accessibility auditing methodology combines physical built-environment inspections with socio-institutional compliance evaluations. Physical audits utilize standardized Universal Design toolkits to measure ramp gradients, door clear opening widths, tactile paving, acoustic environments, washroom turning radiuses, signage contrast, and emergency evacuation protocols.",
      "Digital accessibility assessments evaluate web portals, mobile apps, and learning management systems against the Web Content Accessibility Guidelines (WCAG 2.1 AA/AAA standards), inspecting screen-reader compatibility, keyboard navigation, color contrast ratios, and alt-text integration.",
      "Social inclusion research employs participatory methodologies, including Washington Group Questions (WGQ) modules for disaggregating population data by disability status, lived-experience journey mapping, and inclusive Focus Group Discussions led by trained sign language interpreters and tactile communicators."
    ],
    coreCapabilities: [
      {
        title: "Workplace & Infrastructure Accessibility Audits",
        description: "Comprehensive physical and structural evaluations of public buildings, schools, health facilities, and office spaces against national and international accessibility standards.",
        deliverables: ["Architectural Accessibility Audit Reports", "3D Remediation CAD/Graphic Guidance Blueprints", "Costed Infrastructure Retrofitting Action Plans", "Universal Design Compliance Certificates"]
      },
      {
        title: "Disability Policy Formulation & Mainstreaming",
        description: "Drafting institutional inclusion policies, affirmative action recruitment guidelines, and reasonable accommodation frameworks.",
        deliverables: ["Institutional Disability Mainstreaming Policy Documents", "Reasonable Accommodation Operational Guidelines", "Inclusive HR & Procurement Standard Operating Procedures", "Staff Disability Awareness Training Curricula"]
      },
      {
        title: "Autism & Developmental Disability Research Monographs",
        description: "Specialized empirical research on neurodivergence, developmental conditions, and specialized caregiving economics.",
        deliverables: ["National/County Neurodivergence Baseline Reports", "Caregiver Economic Burden & Support Matrices", "Inclusive Special Needs Education Policy Briefs", "Community Stigma Reduction Frameworks"]
      },
      {
        title: "Extra Cost of Disability & Socio-Economic Studies",
        description: "In-depth economic research calculating the indirect and direct financial burdens incurred by households with persons with disabilities.",
        deliverables: ["Extra Cost of Disability Econometric Models", "Social Protection & Cash Transfer Target Matrices", "Assistive Technology Subsidy Recommendations", "Disability-Disaggregated Expenditure Profiles"]
      }
    ],
    caseStudies: [
      {
        title: "County-Wide Public Facilities Accessibility Audit",
        client: "National Disability Rights Coalition / County Government",
        location: "Kisumu & Nairobi Counties, Kenya",
        year: "2021",
        summary: "Audited 45 public buildings including county headquarters, public hospitals, and vocational training centers for wheelchair and sensory accessibility.",
        outcomes: "Produced a prioritized, costed retrofitting roadmap adopted by the County Executive, resulting in immediate budgetary allocations for accessible ramps and washrooms."
      },
      {
        title: "Monograph on Autism & Neurodevelopmental Inclusion",
        client: "Regional Disability Advocacy Network",
        location: "Nairobi & Kiambu Counties",
        year: "2022",
        summary: "Executed a comprehensive qualitative and quantitative study on educational access and healthcare barriers faced by autistic children.",
        outcomes: "Published an authoritative research monograph utilized by civil society organizations to advocate for enhanced inclusive education funding."
      }
    ],
    techStack: [
      { category: "Physical Audit Instruments", items: ["Digital Inclinometers/Goniometers", "Laser Distance Measurers", "Lux Meters (Lighting Assessment)", "Decibel Sound Level Meters"] },
      { category: "Digital Accessibility Testing", items: ["WAVE Web Accessibility Tool", "AXE DevTools", "NVDA & JAWS Screen Readers", "Lighthouse WCAG Audits"] },
      { category: "Survey & Demographics", items: ["Washington Group Short Set (WG-SS)", "Washington Group Child Functioning Module", "ODK Accessibility Skip-Logic Forms"] }
    ],
    qualityStandards: [
      "UN Convention on the Rights of Persons with Disabilities (UNCRPD)",
      "Persons with Disabilities Act (Kenya Cap 133)",
      "ISO 21542:2021 Building Construction - Accessibility and Usability of the Built Environment",
      "Web Content Accessibility Guidelines (WCAG) 2.1 Level AA/AAA",
      "Do No Harm & Trauma-Informed Research Ethics"
    ],
    detailedSections: [
      {
        heading: "The 'Extra Cost of Disability' Analytical Framework",
        paragraphs: [
          "Traditional poverty metrics consistently underestimate the economic vulnerability of households affected by disability because they fail to account for the substantial additional expenses required to achieve a baseline standard of living. IARA has developed specialized econometric models that quantify these hidden expenditures, encompassing specialized transportation, personal assistance care, specialized dietary needs, medical management, and assistive device procurement.",
          "Our research provides governments and international donors with robust empirical data necessary to design targeted social protection programs, disability-inclusive cash transfer top-ups, and tax exemption policies that directly alleviate disability-induced poverty traps."
        ]
      },
      {
        heading: "Inclusive Disaster Risk Reduction (iDRR) & Emergency Readiness",
        paragraphs: [
          "In times of climate shocks, floods, or civil emergencies, persons with disabilities face disproportional hazards due to inaccessible warning systems, evacuation shelters, and relief distribution points. IARA integrates Inclusive Disaster Risk Reduction (iDRR) protocols into our regional assignments.",
          "We evaluate emergency preparedness infrastructure to ensure accessible early-warning communications (visual, audio, tactile), physical shelter accessibility, and inclusive relief distribution registries that prioritize individuals with mobility or cognitive impairments during emergency deployments."
        ]
      },
      {
        heading: "Institutional Culture & Attitudinal Transformation",
        paragraphs: [
          "Physical ramps and accessible facilities are ineffective if institutional cultures remain dominated by unconscious bias, stigma, or medical-model misconceptions regarding disability. IARA's training workshops employ experiential learning, lived-experience facilitators, and interactive simulation modules to reshape institutional mindsets.",
          "We assist human resource departments in transitioning from passive legal compliance to proactive inclusion, establishing supportive workplace accommodation protocols, inclusive performance management systems, and employee resource groups that foster true belonging."
        ]
      }
    ]
  },
  {
    id: "cb",
    title: "Institutional Strengthening, Capacity Building & Knowledge Management",
    shortTitle: "Institutional Capacity Building",
    badge: "Human & Organizational Capital",
    tagline: "Empowering non-profits, government entities, and corporate boards with operational, analytical, and governance competencies.",
    heroSummary: "Transformational human capital development, customized training programs, organizational capacity assessments, and high-impact knowledge management solutions.",
    overview: [
      "Inter-Act Research Associates (IARA) delivers comprehensive institutional strengthening and organizational development solutions designed to build resilient, high-performing institutions capable of navigating complex socio-economic landscapes in East Africa. We recognize that sustainable development cannot occur without robust internal structures, competent leadership, and standardized operational procedures.",
      "Our capacity building practice works across the entire organizational lifecycle—from initial Organizational Capacity Assessments (OCA) and Training Needs Assessments (TNA) to custom curriculum design, executive coaching, statistical software mastering, and high-impact knowledge management.",
      "We specialize in converting institutional field learning into compelling knowledge products, including published research monographs, success story documentaries, technical case studies, and executive policy briefs that elevate organizational profile and secure ongoing funder confidence."
    ],
    methodologyText: [
      "IARA's capacity building approach is built upon adult learning theory (Andragogy) and the 70-20-10 learning framework, emphasizing hands-on application (70%), peer coaching and mentoring (20%), and structured classroom instruction (10%).",
      "Organizational Capacity Assessments (OCA) utilize multi-dimensional scoring matrices that evaluate governance, financial management, program performance, human resource policies, sub-grantee management, and MERL capacity. Scores are benchmarked against international best practices to produce costed Institutional Development Plans (IDPs).",
      "Our statistical software training workshops (SPSS, Stata, R, Python, ODK/Kobo) feature customized dataset workbooks drawn directly from the client's sector, ensuring that participants immediately apply newly acquired data manipulation, econometric modeling, and visualization skills to real-world operational challenges."
    ],
    coreCapabilities: [
      {
        title: "Organizational Capacity Assessments (OCA) & IDPs",
        description: "In-depth diagnostic audits evaluating operational health, institutional risk, governance maturity, and systems readiness.",
        deliverables: ["Comprehensive OCA Audit Reports", "Institutional Development Action Plans (IDPs)", "Organizational Risk & Mitigations Registers", "Governance & Compliance Scorecards"]
      },
      {
        title: "Advanced MERL & Data Science Training Workshops",
        description: "Practical, cohort-based training for M&E professionals in digital survey creation, database design, statistical analysis, and dashboard building.",
        deliverables: ["Tailored Masterclass Training Manuals", "Hands-on Dataset Exercises & Code Repositories", "Pre- & Post-Training Competency Evaluations", "Certified Skills Mastery Diplomas"]
      },
      {
        title: "Proposal Development & Technical Grant Writing",
        description: "High-level technical assistance in formulating winning grant proposals, technical approaches, project budgets, and narrative reports for major donors (USAID, EU, FCDO, UN).",
        deliverables: ["Fully Compliant Technical Proposals", "Cost Proposals & Detailed Budget Notes", "Program Logic Models & Theory of Change Graphics", "Donor Grant Management Manuals"]
      },
      {
        title: "Documenting Success & Knowledge Management",
        description: "Transforming raw field project outcomes into polished print publications, video documentaries, photographic case studies, and digital storytelling campaigns.",
        deliverables: ["Print-Ready High-Graphic Case Study Compendiums", "Professional Broadcast Quality Video Documentaries", "Executive Policy Briefs & Practice Notes", "Digital Knowledge Repository Platforms"]
      }
    ],
    caseStudies: [
      {
        title: "Institutional Capacity Strengthening for Local Civil Society",
        client: "International Development Non-Profit",
        location: "Nairobi, Turkana & Garissa, Kenya",
        year: "2020 - 2021",
        summary: "Executed comprehensive OCAs for 12 community-based organizations, delivering structured training in financial governance, grant writing, and digital data collection.",
        outcomes: "Graduated 100% of assessed partner CBOs to direct funder eligibility status, enabling them to directly secure $1.8M in donor funding."
      },
      {
        title: "Documenting Best Practices & Success Stories in Disability Rights",
        client: "VSO Kenya & Partner Networks",
        location: "National Coverage, Kenya",
        year: "2022",
        summary: "Captured and produced a compendium of print case studies and video narratives documenting community-led inclusion innovations.",
        outcomes: "Distributed nationwide to government ministries, county assemblies, and international donors, establishing benchmarking models for inclusive education."
      }
    ],
    techStack: [
      { category: "E-Learning & Training Tools", items: ["Moodle LMS", "Interactive Zoom/Teams Workshops", "Google Classroom", "MentiMeter & Miro Boards"] },
      { category: "Publishing & Media Production", items: ["Adobe InDesign CC", "Adobe Premiere Pro CC", "Canva Enterprise", "Audacity Audio Editing"] },
      { category: "Assessment Frameworks", items: ["USAID NUPAS (Non-US Organization Pre-Award Survey)", "McKinsey Capacity Assessment Grid (CAG)", "UNDP Capacity Assessment Methodology"] }
    ],
    qualityStandards: [
      "70-20-10 Adult Learning Framework Compliance",
      "USAID New Partnerships Initiative (NPI) Capacity Standards",
      "Professional Editing & Peer-Review Quality Assurance",
      "Strict Informed Consent & Image Release Protocols for Field Media",
      "Post-Training 90-Day Competency Retention Verification"
    ],
    detailedSections: [
      {
        heading: "Mentorship & Post-Training Coaching Clinics",
        paragraphs: [
          "A major flaw of conventional corporate training is the 'learning cliff'—where skills acquired during intensive workshops rapidly decay due to a lack of structured on-the-job application. IARA addresses this by embedding 90-day post-training coaching clinics into all our capacity building packages.",
          "Our senior consultants provide ongoing virtual technical desk support, reviewing draft datasets, troubleshooting complex statistical syntax in Stata/R, and editing live grant proposals alongside client staff until full operational independence is achieved."
        ]
      },
      {
        heading: "Grant Writing & Resource Mobilization Mastery",
        paragraphs: [
          "Securing competitive international development grants requires an intricate understanding of donor solicitation documents (RFAs, RFPs, NOFOs), strict compliance with scoring rubrics, and the ability to articulate compelling technical approaches. IARA's grant writing advisory team brings decades of combined experience securing multi-million-dollar awards from USAID, the European Union, FCDO, and UN agencies.",
          "We mentor organizational proposal teams through red-team/blue-team review processes, cost proposal formulation, budget narrative justification, and compliance matrix cross-referencing, dramatically boosting win rates for local and regional organizations."
        ]
      },
      {
        heading: "Strategic Knowledge Asset Curation",
        paragraphs: [
          "Organizations frequently generate immense impact in the field but fail to communicate their achievements to key policy makers, donors, and external stakeholders due to poor documentation. IARA's Knowledge Management team bridges this gap.",
          "We combine rigorous qualitative research with professional graphic design and broadcast-quality video editing to produce beautifully packaged publications, annual impact reports, and short documentary films that capture the human dimension of development work while maintaining scientific credibility."
        ]
      }
    ]
  },
  {
    id: "sp",
    title: "Strategic Planning, Governance Advisory & Devolved Public Management",
    shortTitle: "Strategic Planning & Governance Advisory",
    badge: "Strategic Leadership Practice",
    tagline: "Actionable 5-year strategic roadmaps, board governance frameworks, and citizen participation advisory.",
    heroSummary: "High-level strategic planning, organizational health diagnostics, board oversight policy development, and devolved governance participation frameworks for public and private institutions.",
    overview: [
      "Inter-Act Research Associates (IARA) offers executive strategic planning, organizational governance advisory, and devolved public sector consultancy services across the East Africa region. As institutions adapt to evolving regulatory mandates, economic shifts, and public sector devolution, clear strategic direction and robust governance oversight are paramount.",
      "We assist corporate entities, civil society networks, statutory bodies, and county government departments in formulating visionary yet pragmatically actionable 5-Year Strategic Plans. Our process integrates deep environmental scanning, financial modeling, organizational diagnostics, and comprehensive multi-stakeholder consensus building.",
      "Furthermore, IARA is a recognized expert in devolved governance systems, assisting county governments and public institutions in designing Citizen Budget Economic Forums (CBEF), public participation guidelines, and transparent board governance structures that uphold accountability and public trust."
    ],
    methodologyText: [
      "Our strategic planning methodology combines analytical precision with participatory engagement. We deploy comprehensive PESTLE (Political, Economic, Social, Technological, Legal, Environmental) analysis, SWOT diagnostics, Scenario Planning, and VRIO internal resource evaluations during the diagnostic phase.",
      "Stakeholder engagement is executed through structured visioning retreats, focus groups, and executive leadership interviews, ensuring that strategy formulation reflects consensus across board members, executive directors, operational staff, and beneficiary communities.",
      "We translate high-level strategic pillars into practical operational realities using the Balanced Scorecard (BSC) framework and Objectives and Key Results (OKRs). Every strategic plan authored by IARA includes an integrated Implementation Matrix featuring costed budgets, annual target projections, risk mitigation protocols, and clear departmental accountability assignments."
    ],
    coreCapabilities: [
      {
        title: "5-Year Institutional Strategic Plan Formulation",
        description: "Formulating end-to-end strategic roadmaps complete with situational analysis, core values, strategic pillars, and costed implementation matrices.",
        deliverables: ["Full Published Strategic Plan Document (2024-2029)", "Executive Summary & Visual Strategy Map Leaflet", "Annual Work Plan (AWP) Cascading Manuals", "Strategic Plan M&E Dashboard Framework"]
      },
      {
        title: "Board Governance Policy & Board Evaluation",
        description: "Advising governing boards on fiduciary oversight, ethical compliance, charter formulation, and annual board performance self-assessments.",
        deliverables: ["Board Charter & Governance Manuals", "Conflict of Interest & Whistleblower Policies", "Annual Board Evaluation Diagnostics & Scoring", "Director Orientation & Onboarding Toolkits"]
      },
      {
        title: "Devolved Governance & Citizen Participation Frameworks",
        description: "Technical assistance for county governments and public agencies in establishing inclusive public participation systems and CBEF operations.",
        deliverables: ["County Public Participation Guidelines", "Citizen Budget Economic Forum (CBEF) Manuals", "Social Accountability & Community Scorecard Systems", "Devolved Sector Policy Briefs"]
      },
      {
        title: "Standard Operating Procedures (SOPs) & HR Policy Manuals",
        description: "Structuring institutional operations with compliant human resource policies, financial regulations, and procurement guidelines.",
        deliverables: ["Comprehensive HR & Administrative Policy Manuals", "Financial Management & Internal Audit SOPs", "Procurement & Asset Management Manuals", "Code of Conduct & Disciplinary Procedures"]
      }
    ],
    caseStudies: [
      {
        title: "Formulation of 5-Year Strategic Plan for National Non-Profit Alliance",
        client: "Civil Society Leadership Consortium",
        location: "Nairobi, Kenya",
        year: "2021",
        summary: "Facilitated comprehensive strategic retreats, internal diagnostics, and risk mapping to author a 5-year strategic direction focused on sustainable funding and policy advocacy.",
        outcomes: "Adopted unanimously by the Board of Directors, guiding successful organizational scaling and resource mobilization over three consecutive fiscal years."
      },
      {
        title: "Citizen Budget Participation & CBEF Audit",
        client: "Devolution & Governance Partner",
        location: "Garissa & Machakos Counties, Kenya",
        year: "2022",
        summary: "Evaluated public participation mechanisms in county budget formulation, identifying structural barriers preventing marginalized communities from influencing county CIDP budgets.",
        outcomes: "Framework recommendations adopted to reform county public participation town halls, resulting in structured inclusion for women and PWDs."
      }
    ],
    techStack: [
      { category: "Strategic Analysis Tools", items: ["Balanced Scorecard (BSC) Automation", "OKR Tracking Platforms", "PESTLE & Porter's Five Forces Models", "Risk Matrix Calculators"] },
      { category: "Facilitation & Workshop Tech", items: ["Mural & Miro Collaboration Canvases", "Mentimeter Live Polling", "Strategic Scenario Mapping Tools"] }
    ],
    qualityStandards: [
      "Mwongozo Code of Governance for State Corporations (Kenya Benchmark)",
      "Balanced Scorecard Institute Strategic Execution Framework",
      "Public Finance Management (PFM) Act Compliance",
      "ISO 9001:2015 Quality Management Systems Guidelines",
      "Inclusive Multi-Stakeholder Consensus Protocols"
    ],
    detailedSections: [
      {
        heading: "Operationalizing Strategy through Cascading Work Plans",
        paragraphs: [
          "The primary failure mode of institutional strategic plans is that they end up as passive documents resting on executive shelves, disconnected from daily operational realities. IARA solves this by engineering explicit cascading mechanisms that link 5-year strategic priorities directly to annual work plans, departmental key performance indicators (KPIs), and individual employee appraisal scorecards.",
          "We provide middle managers with practical work planning templates and budget allocation tools, ensuring that every operational activity executed by team members directly drives a defined strategic objective."
        ]
      },
      {
        heading: "Fiduciary Risk Management & Institutional Resilience",
        paragraphs: [
          "In an increasingly volatile economic environment, strategic planning must incorporate comprehensive risk diagnostics. IARA's governance advisory embeds institutional risk profiling across operational, financial, legal, reputational, and environmental domains.",
          "We construct dynamic Risk Registers that detail probability scores, impact severity ratings, early-warning risk indicators, assigned risk owners, and costed mitigation strategies, ensuring that governing boards can proactively navigate external disruptions."
        ]
      },
      {
        heading: "Devolved Governance & Public Sector Reforms",
        paragraphs: [
          "Public sector devolution in East Africa presents both immense opportunities for localized service delivery and complex administrative challenges. IARA provides deep technical expertise in county government administration, County Integrated Development Plans (CIDP), and sector-specific policy formulation.",
          "We bridge the gap between county executive departments and local citizens, institutionalizing social accountability mechanisms such as Community Scorecards, public hearings, and digital budget feedback portals that enhance transparency and civic trust."
        ]
      }
    ]
  },
  {
    id: "livelihood",
    title: "Livelihoods, Green Entrepreneurship & Environmental Resource Management",
    shortTitle: "Livelihoods & Environmental Management",
    badge: "Sustainable Development Practice",
    tagline: "MSME eco-entrepreneurship, climate-resilient agriculture value chains, watershed protection, and green growth.",
    heroSummary: "Integrated consulting services in sustainable livelihoods, climate adaptation, green enterprise development, agricultural value chains, and community-based natural resource management.",
    overview: [
      "Inter-Act Research Associates (IARA) delivers cutting-edge technical assistance in sustainable livelihoods development, climate adaptation, eco-entrepreneurship, and environmental resource management across East Africa's diverse agro-ecological zones. As climate change intensifies resource scarcity and threatens rural economies, IARA helps development partners, governments, and private enterprises build climate-resilient economic systems.",
      "Our sustainable development practice spans agricultural value chain analysis (including grain, beverage, and high-value horticultural commodities), MSME switch-green adoption, life-skills and youth entrepreneurship curricula, and community-led watershed restoration.",
      "We combine rigorous environmental science with enterprise economics, ensuring that livelihood interventions generate immediate household income gains while preserving delicate natural ecosystems for future generations."
    ],
    methodologyText: [
      "IARA employs a Market Systems Development (MSD) / Making Markets Work for the Poor (M4P) approach, analyzing market dynamics, buyer-supplier relationships, input supply bottlenecks, and regulatory environments to identify leverage points for sustainable economic inclusion.",
      "Environmental & Climate Vulnerability Assessments deploy Geographic Information Systems (GIS), spatial remote sensing data, hydrological modeling, and participatory climate vulnerability mapping (CRiSTAL tool) to evaluate ecosystem health and disaster risk.",
      "Eco-entrepreneurship audits utilize circular economy frameworks to measure waste minimization, energy efficiency, sustainable input sourcing, and green job creation among Micro, Small, and Medium Enterprises (MSMEs)."
    ],
    coreCapabilities: [
      {
        title: "Agricultural Value Chain Analysis & GESI Integration",
        description: "Mapping agricultural commodity value chains (sorghum, maize, dairy, horticulture) to identify upgrading opportunities for smallholders, women, and youth.",
        deliverables: ["End-to-End Value Chain Analysis Reports", "Gross Margin & Financial Viability Models", "Gender & Disability Value Chain Integration Frameworks", "Agribusiness Market Matchmaking Strategies"]
      },
      {
        title: "MSME Eco-Entrepreneurship & Green Growth Audits",
        description: "Assisting small enterprise networks in adopting sustainable energy, waste-to-value business models, and circular economic practices.",
        deliverables: ["Green Business Assessment Toolkits", "MSME Circular Economy Training Manuals", "Eco-Innovation Grant Evaluation Criteria", "Green Jobs Impact Baseline Audits"]
      },
      {
        title: "Integrated Watershed & Natural Resource Management",
        description: "Designing community-led soil conservation, water harvesting, reforestation, and sustainable land management interventions in ASAL areas.",
        deliverables: ["Participatory Watershed Management Plans", "Soil & Water Conservation Field Toolkits", "Community Environmental Committee Charters", "Climate Adaptation Baseline & Impact Studies"]
      },
      {
        title: "Life-Skills & Youth Enterprise Curricula",
        description: "Developing practical financial literacy, business plan formulation, mentorship, and life-skills training programs for out-of-school youth.",
        deliverables: ["Youth Eco-Entrepreneurship Facilitator Guides", "Trainee Workbooks in Swahili & English", "Micro-Franchise Business Model Templates", "Savings & Credit Cooperative (SACCO) Mentorship Manuals"]
      }
    ],
    caseStudies: [
      {
        title: "Agricultural Value Chain Study on Sorghum & Beverage Inclusivity",
        client: "Regional Agricultural Development Agency",
        location: "Kajiado, Machakos & Kitui Counties, Kenya",
        year: "2020",
        summary: "Analyzed smallholder sorghum contract farming models supplying commercial beverage manufacturers, focusing on economic returns for women farmers.",
        outcomes: "Identified key input financing bottlenecks, leading to restructured contract terms that increased women smallholders' profit margins by 28%."
      },
      {
        title: "Soil Conservation & Watershed Rehabilitation Assessment",
        client: "Environmental Conservation NGO",
        location: "Upper Tana Catchment / ASAL Zones",
        year: "2021",
        summary: "Evaluated community-managed terraces, sand dams, and agro-forestry interventions designed to mitigate soil erosion and water scarcity.",
        outcomes: "Demonstrated a 35% reduction in topsoil run-off across project target catchments, informing regional donor scaling strategy."
      }
    ],
    techStack: [
      { category: "Spatial & Environmental Analysis", items: ["QGIS", "ArcGIS Online", "Google Earth Engine (Satellite Remote Sensing)", "GPS Field Logger Pro"] },
      { category: "Value Chain & Financial Modeling", items: ["Excel Financial Modeling Workbooks", "Gross Margin Analysis Calculators", "Value Chain Mapping Software (VUE)"] },
      { category: "Climate Vulnerability Tools", items: ["IISD CRiSTAL Tool", "FAO SHARP (Self-evaluation and Holistic Assessment of climate Resilience of farmers)"] }
    ],
    qualityStandards: [
      "Market Systems Development (MSD / M4P) Guidelines",
      "FAO Climate-Smart Agriculture (CSA) Framework",
      "Environmental and Social Safeguards (ESS) Standards",
      "UN Environment Programme (UNEP) Green Economy Indicators",
      "Participatory Rural Appraisal (PRA) Ethical Protocols"
    ],
    detailedSections: [
      {
        heading: "Climate-Smart Agriculture (CSA) & ASAL Resiliency",
        paragraphs: [
          "Arid and Semi-Arid Lands (ASAL) constitute over 80% of Kenya's landmass and house millions of pastoralists and agro-pastoralists facing severe drought cycles. IARA's climate resiliency interventions focus on promoting Climate-Smart Agriculture (CSA) practices, including drought-tolerant crop varieties, conservation agriculture, solar-powered drip irrigation, and index-based livestock insurance.",
          "We work directly with pastoralist communities to establish sustainable rangeland management protocols, emergency fodder reserves, and water pan maintenance committees, mitigating resource-based conflicts and safeguarding livestock assets."
        ]
      },
      {
        heading: "Youth Eco-Entrepreneurship & Circular Economy",
        paragraphs: [
          "With youth representing the vast majority of the population in East Africa, addressing unemployment requires innovative economic models that do not degrade the natural environment. IARA designs specialized eco-entrepreneurship programs that train young men and women to build businesses around waste recycling, briquette production, organic fertilizer formulation, solar maintenance, and eco-tourism.",
          "Our approach provides young entrepreneurs with both technical green skills and essential business management capabilities—including financial record keeping, pricing strategy, digital marketing, and access to micro-finance networks."
        ]
      },
      {
        heading: "Gender & Social Inclusion in Market Value Chains",
        paragraphs: [
          "Agricultural market value chains frequently marginalize women and persons with disabilities, relegating them to low-value production tasks while men dominate lucrative trading and processing nodes. IARA's value chain methodologies embed rigorous GESI diagnostics at every stage.",
          "We identify and dismantle structural barriers—such as restricted land tenure rights, limited access to credit, and inequitable household decision-making—enabling women and vulnerable groups to own productive assets, negotiate fair contract terms, and assume leadership roles in producer cooperatives."
        ]
      }
    ]
  }
];

export const detailedServices: ServiceDetail[] = [
  ...coreServices,
  ...specializationServices
];
