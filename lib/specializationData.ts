import { ServiceDetail } from "./servicesData";

export const specializationServices: ServiceDetail[] = [
  {
    id: "project-program-management",
    title: "Project & Program Management Services",
    shortTitle: "Project & Program Management",
    badge: "Operational Excellence Pillar",
    tagline: "Comprehensive administrative, technical, and fiduciary management of development interventions.",
    heroSummary: "Deploying global best practices (PMD Pro, PRINCE2) alongside deep local knowledge to manage, coordinate, and execute multi-partner socio-economic development programs on time and within budget.",
    overview: [
      "Inter-Act Research Associates (IARA) delivers gold-standard Project and Program Management services tailored to the complex, multi-stakeholder landscapes of East African development projects. Whether handling multi-country healthcare programs, emergency food relief deployments, or institutional capacity interventions, IARA provides the structural oversight, fiduciary control, and cross-sector coordination necessary to achieve measurable success.",
      "We serve as the lead technical coordinator or independent management secretariat for programs funded by international donor bodies (such as USAID, the European Union, and the Disability Rights Fund), regional governments, and civil society alliances. Our management frameworks are built on absolute compliance, transparent communication, and adaptive management.",
      "By establishing clear Work Breakdown Structures (WBS) and aligning individual performance metrics with high-level program outcomes, we translate high-level program theories of change into daily, actionable project execution."
    ],
    methodologyText: [
      "IARA utilizes a hybrid Project Management methodology that pairs structured waterfall planning (for budgeting, regulatory compliance, and milestone timelines) with agile sprint iterations (for rapid-response field logistics and stakeholder adaptation).",
      "We design comprehensive Project Management Information Systems (PMIS) that track activity burn rates, deliverable milestones, and resource utilization in real-time. This is paired with localized stakeholder engagement models to ensure county governments, community assemblies, and direct beneficiaries participate in and take ownership of the intervention."
    ],
    coreCapabilities: [
      {
        title: "Consortium Coordination & Joint Secretariats",
        description: "Aligning and coordinating multi-NGO development networks, establishing harmonized reporting structures, and managing administrative communication.",
        deliverables: ["Consortium Governance Charters", "Quarterly Joint Progress Portals", "Standardized Operational Guides", "Risk Sharing Matrices"]
      },
      {
        title: "Compliance & Sub-Grant Monitoring",
        description: "Conducting regular financial and operational audits of sub-grantees, ensuring complete alignment with primary donor rules and national regulatory acts.",
        deliverables: ["Fiduciary Compliance Checklists", "Sub-Grantee Risk Scorecards", "Quarterly Audit Reports", "Financial Burn-rate Dashboards"]
      }
    ],
    caseStudies: [
      {
        title: "Technical Coordination Secretariat for Multi-Country Disability Rights Program",
        client: "Disability Rights & Inclusion Consortium",
        location: "Nairobi & Kampala",
        year: "2022 - 2023",
        summary: "IARA was commissioned to serve as the project management secretariat coordinating 8 local and regional organizations implementing inclusive education lobby programs.",
        outcomes: "Successfully delivered 100% of planned legislative engagements within budget, resulting in harmonized policy proposals presented to county assemblies."
      }
    ],
    techStack: [
      { category: "Project Tracking", items: ["Asana Enterprise", "Trello Premium", "Microsoft Project"] },
      { category: "Financial Compliance", items: ["QuickBooks Enterprise", "Sage 300 ERP", "Custom Burn-rate Calculators"] }
    ],
    qualityStandards: [
      "PMD Pro (Project Management in Development) International Guidelines",
      "ISO 21500:2021 Guidance on Project Management",
      "FCDO Smart Rules & Financial Integrity Guidelines",
      "USAID Automated Directives System (ADS) Compliance"
    ],
    detailedSections: [
      {
        heading: "Proactive Risk Logging & Adaptive Response",
        paragraphs: [
          "In the dynamic East African landscape, static project management templates consistently fall short. Climatic shocks, changes in regional border controls, or local political shifts can instantly stall progress. IARA implements a continuous, active Risk Logging framework where field managers evaluate operational, financial, and environmental risks on a weekly basis.",
          "Every logged risk is tied directly to pre-approved mitigation guidelines, allowing local project leads to make immediate, authorized tactical pivots that protect the project timeline while fully remaining within donor compliance parameters."
        ]
      }
    ]
  },
  {
    id: "research-me-surveys",
    title: "Socio-Economic Research, M&E & Baseline/Endline Surveys",
    shortTitle: "Research, M&E & Surveys",
    badge: "Empirical Studies Practice",
    tagline: "Rigorous quantitative and qualitative surveys, baseline measurements, and statistical indicators.",
    heroSummary: "Combining scientific sampling frameworks, digitized mobile data collection, and rigorous econometric modeling to capture reliable baseline, midline, and endline outcomes across East Africa.",
    overview: [
      "Reliable socio-economic development relies on high-quality empirical data. Inter-Act Research Associates (IARA) designs and implements sophisticated baseline, midline, and endline surveys that provide the foundation for evidence-based policymaking, development advocacy, and project evaluation.",
      "Our research division operates under the strict oversight of our internal Scientific Research Committee, ensuring that every research design, sampling framework, and survey instrument undergoes comprehensive academic peer review before deployment.",
      "We manage a highly skilled roster of over 400 certified, multilingual field enumerators across Kenya, Uganda, Tanzania, and Somalia, allowing us to deploy large-scale surveys even in complex Arid and Semi-Arid Lands (ASALs)."
    ],
    methodologyText: [
      "Our statistical frameworks utilize probability-based multi-stage cluster sampling, stratified random sampling, and power calculations to guarantee statistical validity and generalizability.",
      "Field operations are 100% digitized using Open Data Kit (ODK) and KoboToolbox, featuring high-accuracy GPS tracking, timestamp tracking, and strict logic skips. Raw data streams are cleaned and audited daily to identify and correct any enumerator biases or data anomalies."
    ],
    coreCapabilities: [
      {
        title: "Probability Sampling Design & Implementation",
        description: "Formulating representative sampling matrices, calculating sample sizes, and executing complex demographic household surveys.",
        deliverables: ["Statistical Sampling Protocols", "Representative Households Datasets", "Survey Design Briefs", "Enumerator Training Curricula"]
      },
      {
        title: "Mixed-Methods Program Evaluations",
        description: "Triangulating large-scale quantitative data with qualitative key informant interviews (KIIs) and focus group discussions (FGDs).",
        deliverables: ["Inception Reports", "Baseline and Endline Analytical Reports", "Mixed-methods Data Codebooks", "Policy briefs"]
      }
    ],
    caseStudies: [
      {
        title: "Baseline Socio-Economic Assessment for Livelihoods Expansion",
        client: "Regional Micro-enterprise Support Network",
        location: "Kajiado & Machakos Counties, Kenya",
        year: "2021",
        summary: "Designed and executed a comprehensive baseline survey of 1,200 micro-enterprises to evaluate income levels, asset ownership, and market access.",
        outcomes: "Established the statistical baseline that shaped a $3M agricultural livelihoods expansion initiative."
      }
    ],
    techStack: [
      { category: "Quantitative Tools", items: ["SPSS Statistics 28", "Stata 17 SE", "R Studio", "Python Pandas"] },
      { category: "Digital Data Capture", items: ["ODK Collect", "KoboToolbox", "CSPro Mobile"] }
    ],
    qualityStandards: [
      "WHO Ethical Guidelines for Social Science Research",
      "Data Protection Act of Kenya (2019) Compliance",
      "Double-blind Data Entry and Cleaning Verification Systems",
      "Washington Group Short Set on Disability Integration"
    ],
    detailedSections: [
      {
        heading: "Ethical Safeguarding & Culturally Sensitive Entry",
        paragraphs: [
          "Empirical research is only as good as the honesty of the respondents, which depends heavily on trust and ethical safety. IARA implements rigorous ethical protocols, including local-language informed consent, absolute respondent anonymity, and strict protection of personally identifiable information (PII).",
          "Furthermore, our field teams utilize established local-entry protocols, coordinating with local administration (chiefs, elders, and community organizers) before entering survey sites. This respect for local community structures ensures safe, high-response data collection."
        ]
      }
    ]
  },
  {
    id: "accessibility-audits-compliance",
    title: "Accessibility Audits & Workplace Disability Compliance",
    shortTitle: "Accessibility Audits & Compliance",
    badge: "Disability Rights & Universal Design",
    tagline: "Comprehensive built-environment inspections, WCAG digital audits, and policy alignment.",
    heroSummary: "Technical accessibility auditing of administrative facilities, educational institutions, health centers, and digital interfaces to meet international Universal Design and national legal standards.",
    overview: [
      "Disability accessibility is a fundamental human right and a legal mandate. Inter-Act Research Associates (IARA) is a recognized pioneer in accessibility auditing and workplace disability compliance across East Africa.",
      "Our practice combines specialized engineering audits of physical infrastructure with professional assessments of digital platforms and human resource policies. We assist institutions in moving from basic, check-the-box compliance to authentic, universal accessibility.",
      "In line with the UN Convention on the Rights of Persons with Disabilities (UN CRPD) and local statutory mandates, we pair our technical inspectors with lived-experience advisors to co-audit every physical structure and system."
    ],
    methodologyText: [
      "Physical audits are governed by ISO 21542:2021 standards, utilizing high-precision built-environment instruments to inspect ramp inclines, doorway widths, tactile paving, emergency exits, and sanitary units.",
      "Digital accessibility audits assess platforms against WCAG 2.1 Level AA and AAA standards, checking keyboard navigation, screen reader compatibility, semantic code structure, and color contrast ratios."
    ],
    coreCapabilities: [
      {
        title: "Built-Environment Accessibility Audits",
        description: "Comprehensive physical audits of office complexes, schools, health facilities, and public spaces against international accessibility codes.",
        deliverables: ["Architectural Audit Reports", "3D Retrofitting CAD Blueprints", "Costed Infrastructure Remediation Action Plans", "Universal Design Certifications"]
      },
      {
        title: "Digital Accessibility (WCAG 2.1) Auditing",
        description: "Technical review of websites, mobile apps, and digital portals to guarantee accessibility for screen reader users and individuals with sensory impairments.",
        deliverables: ["WCAG Compliance Matrices", "Digital Accessibility Bug Reports", "Developer Remediation Manuals", "Screen-Reader Compatibility Logs"]
      }
    ],
    caseStudies: [
      {
        title: "Built-Environment Accessibility Assessment for Educational Trust",
        client: "Call Africa Kenya / Educational Trust",
        location: "Kisumu County, Kenya",
        year: "2021",
        summary: "Audited 12 primary and vocational schools for physical accessibility, compiling prioritized retrofitting plans for ramps, paths, and washrooms.",
        outcomes: "Successfully guided structural upgrades that allowed 250+ students with physical disabilities to enroll and navigate independently."
      }
    ],
    techStack: [
      { category: "Physical Audit Tools", items: ["Digital Inclinometers", "Laser Distance Meters", "Lux Light Meters", "Acoustic Decibel Meters"] },
      { category: "Digital Audit Tools", items: ["WAVE WCAG Tool", "Axe DevTools", "NVDA Screen Reader", "Lighthouse Accessibility Suite"] }
    ],
    qualityStandards: [
      "UN Convention on the Rights of Persons with Disabilities (UN CRPD)",
      "ISO 21542:2021 Accessibility and Usability of the Built Environment",
      "Persons with Disabilities Act of Kenya (Cap 133)",
      "Web Content Accessibility Guidelines (WCAG) 2.1 Level AA"
    ],
    detailedSections: [
      {
        heading: "The Power of Lived-Experience Co-Auditing",
        paragraphs: [
          "At IARA, we believe that you cannot design effectively for persons with disabilities without their direct leadership. Our accessibility teams partner with trained, certified co-auditors who have lived experience with mobility, visual, and hearing impairments.",
          "This participatory approach ensures that our audits capture not only mechanical measurements but also the actual, lived barriers that prevent individuals from working, studying, or accessing healthcare services with dignity."
        ]
      }
    ]
  },
  {
    id: "merl-systems-technical-support",
    title: "MERL Systems & Technical Support for NGOs and Private Sector",
    shortTitle: "MERL Systems & Tech Support",
    badge: "Information Architecture",
    tagline: "Architecting cloud-based MERL systems, indicator dictionary curation, and NGO capacity alignment.",
    heroSummary: "Engineering dynamic, custom monitoring, evaluation, reporting, and learning (MERL) systems that streamline data aggregation, guarantee compliance, and build funder confidence.",
    overview: [
      "Modern development requires robust information management. Inter-Act Research Associates (IARA) designs and implements customized, cloud-based Monitoring, Evaluation, Reporting, and Learning (MERL) systems that replace fragmented spreadsheets with unified, secure databases.",
      "We provide ongoing technical support to national and international non-governmental organizations (INGOs) and private enterprises to build, maintain, and scale their MERL infrastructure. Our systems are built around the specific indicators and compliance mandates of major international development donors.",
      "Our approach is centered on data hygiene, automated calculations, and user-friendly data-entry interfaces that allow non-technical field staff to log accurate project metrics."
    ],
    methodologyText: [
      "We begin with a thorough audit of the client's logical frameworks and reporting indicators. We then curate a centralized Performance Indicator Reference Sheet (PIRS) dictionary.",
      "Next, we develop relational databases with automated data ingestion pipelines that clean, transform, and aggregate raw data inputs into standardized indicators, completely avoiding manual double-entry errors."
    ],
    coreCapabilities: [
      {
        title: "Dynamic LogFrame & Indicator Setup",
        description: "Formulating comprehensive program theories of change, logical frameworks, and customized tracking matrices.",
        deliverables: ["Visual Theory of Change Charts", "Performance Indicator Reference Sheets (PIRS)", "Baseline Data Input Forms", "Indicator Frequency Schedules"]
      },
      {
        title: "Continuous Technical Support Clinics",
        description: "Providing weekly virtual desk reviews, dataset hygiene audits, and statistical troubleshooting support for NGO M&E teams.",
        deliverables: ["Monthly Data Quality Audit Logs", "Custom SPSS/Stata Analysis Scripts", "Standard Operating Procedures (SOPs)", "Staff Competency Development Reports"]
      }
    ],
    caseStudies: [
      {
        title: "Custom MERL System Development for Regional Peace Program",
        client: "Horn of Africa Development Network",
        location: "Mandera, Kenya & Gedo, Somalia",
        year: "2022",
        summary: "Designed and rolled out a unified mobile-to-cloud MERL system to track peace-building and conflict-resolution indicators across cross-border communities.",
        outcomes: "Reduced monthly reporting turnaround time from 20 days to 4 days, providing leadership with real-time field conflict-resolution logs."
      }
    ],
    techStack: [
      { category: "Information Systems", items: ["KoboToolbox Server", "PostgreSQL Database", "Microsoft SharePoint", "CommCare Enterprise"] },
      { category: "Data Automation", items: ["Python Scripts", "R Studio Markdown", "Zapier Enterprise", "Google Apps Script"] }
    ],
    qualityStandards: [
      "USAID Automated Directives System (ADS) Chapter 201",
      "Do No Harm Principles in Fragile Conflict-Affected Regions",
      "European Union MERL Quality Assurance Metrics",
      "ISO 9001:2015 Information Security and Quality Controls"
    ],
    detailedSections: [
      {
        heading: "Eliminating the Reporting Gap through Live Pipelines",
        paragraphs: [
          "The biggest bottleneck in development reporting is the lag between field activity and head-office analysis. Our MERL architectures connect mobile field data collection forms directly to secure cloud repositories, updating reporting dashboards instantly as survey entries are submitted.",
          "By implementing real-time data ingestion, project managers can detect underperforming indicators, resource blocks, or tracking gaps immediately, allowing for rapid, proactive course corrections."
        ]
      }
    ]
  },
  {
    id: "documenting-success-stories",
    title: "Documenting Success Stories (Print, Film, Digital Media)",
    shortTitle: "Documenting Success Stories",
    badge: "Storytelling & Knowledge Management",
    tagline: "High-impact impact publications, broadcast documentaries, and digital storytelling campaigns.",
    heroSummary: "Transforming dry, technical project indicators into compelling human-interest stories, high-graphic booklets, and broadcast-quality documentary films.",
    overview: [
      "Technical reports are vital for donor compliance, but powerful storytelling is what builds lasting influence, secures community support, and demonstrates authentic impact.",
      "Inter-Act Research Associates (IARA) combines technical rigor with professional journalism, graphic design, and video production. We specialize in documenting development success stories across East Africa, producing high-quality print booklets, broadcast-ready films, and social media campaigns.",
      "We help non-profits, government departments, and ethical enterprises show the human face of their work, highlighting the real lives of individuals empowered by their programs."
    ],
    methodologyText: [
      "We utilize a mixed-methods storytelling methodology, pairing standard quantitative metrics with the 'Most Significant Change' (MSC) qualitative approach to identify compelling narratives.",
      "Our production division adheres to the highest ethical protocols, securing informed, local-language written and signed consent, protecting vulnerable respondents, and ensuring accurate, respectful representation."
    ],
    coreCapabilities: [
      {
        title: "High-Graphic Print Case Studies & Booklets",
        description: "Designing professional, beautifully typeset publications, success story compendiums, and impact newsletters.",
        deliverables: ["Print-ready PDF Booklets", "Aesthetic Case Study Layouts", "AEO/SEO optimized web copy", "Factsheets & Info-graphics"]
      },
      {
        title: "Broadcast-Quality Video Documentaries",
        description: "Full-cycle video production including scripting, local-language interviewing, high-fidelity filming, editing, and professional Swahili/English voiceovers.",
        deliverables: ["Full-Length 10-Minute Documentaries", "60-Second Social Media Highlights", "High-Resolution Field Photo Libraries", "Informed Consent Registries"]
      }
    ],
    caseStudies: [
      {
        title: "Success Story Compendium for National Inclusion Program",
        client: "VSO Kenya / Disability Rights Coalition",
        location: "Kisumu, Mombasa & Nairobi Counties",
        year: "2022",
        summary: "Documented the personal journeys of 15 youth with disabilities who gained employment through inclusive vocational training programs.",
        outcomes: "Published a print compendium and video series utilized by the client to secure a $1.5M program extension from international funders."
      }
    ],
    techStack: [
      { category: "Editing & Design Suite", items: ["Adobe InDesign CC", "Adobe Premiere Pro CC", "Adobe Photoshop CC", "Lightroom Classic"] },
      { category: "Audio & Copy", items: ["Audacity", "ProTools", "Markdown Storyboards", "Google Workspace"] }
    ],
    qualityStandards: [
      "UNICEF Guidelines on Ethical Image and Video Reporting",
      "Do No Harm and Trauma-Informed Storytelling Protocols",
      "Strict GDPR and Data Protection Written Consent Compliance",
      "High-contrast and Accessible Typography Best Practices"
    ],
    detailedSections: [
      {
        heading: "The 'Most Significant Change' Narrative Harvesting",
        paragraphs: [
          "Standard journalism often overlooks deep structural changes. IARA utilizes the scientific 'Most Significant Change' (MSC) technique, which involves training local field teams to systematically collect and peer-review narratives of transformation.",
          "By filtering collected narratives through defined evaluation panels, we identify and document stories that represent genuine, systemic changes in community dynamics, household economics, and policy advocacy."
        ]
      }
    ]
  },
  {
    id: "database-development-dashboards",
    title: "Database Development & Real-Time Performance Dashboards",
    shortTitle: "Database & Dashboards",
    badge: "Data Science & Visual Analytics",
    tagline: "Custom data pipelines, relational databases, and interactive analytical dashboards.",
    heroSummary: "Engineering secure, structured databases and intuitive, interactive visual dashboards that convert raw field data into real-time strategic intelligence.",
    overview: [
      "In the age of digital transformation, static Excel sheets are no longer sufficient to manage complex development portfolios. Inter-Act Research Associates (IARA) designs and deploys custom relational databases and interactive visual dashboards.",
      "We build secure data ingestion pipelines that aggregate, clean, and visualize indicators across multiple geographic regions, giving program managers, executives, and donors instant, real-time access to key performance metrics.",
      "Our engineering practice prioritizes user experience, ensuring that dashboards are intuitive, fast, and secure while providing granular role-based permissions."
    ],
    methodologyText: [
      "We utilize relational database management systems (RDBMS) such as PostgreSQL to store structured multi-record project data safely.",
      "Our dashboards utilize robust data pipelines (using tools like Python, R, and PowerBI) to pull data, apply statistical metrics, and render interactive charts and geographic maps automatically."
    ],
    coreCapabilities: [
      {
        title: "Relational Database Design & Setup",
        description: "Formulating clean, secure, and structured relational database schemas designed for multi-user data entry and reporting.",
        deliverables: ["SQL Schema Migrations", "Data Dictionary Manuals", "User Role Permission matrix", "Backup & Recovery Protocols"]
      },
      {
        title: "Interactive Analytics & KPI Dashboards",
        description: "Designing high-performance visual dashboards using industry-leading tools, customized for development indicator tracking.",
        deliverables: ["PowerBI / Tableau Workbooks", "Interactive Geographic Map layers", "Automated KPI Progress charts", "Shareable Donor Reporting widgets"]
      }
    ],
    caseStudies: [
      {
        title: "Real-Time Indicator Dashboard for Regional Food Security Initiative",
        client: "Arid Lands Agricultural Alliance",
        location: "Marsabit, Wajir & Garissa Counties, Kenya",
        year: "2023",
        summary: "Developed a centralized database and interactive dashboard mapping household food security indicators, rainfall patterns, and grain distribution.",
        outcomes: "Allowed regional program managers to redirect food aid and agricultural inputs to critical zones 15 days faster than previous paper-based reporting systems."
      }
    ],
    techStack: [
      { category: "Database Engines", items: ["PostgreSQL", "SQLite", "Supabase", "Microsoft SQL Server"] },
      { category: "Data Visualisation", items: ["PowerBI Desktop", "Tableau Creator", "Google Looker Studio", "Recharts"] }
    ],
    qualityStandards: [
      "ISO/IEC 27001 Information Security Management Standard",
      "WCAG 2.1 Color Contrast Legibility Standards for Visual Data",
      "European Union GDPR Data Privacy Compliance Standards",
      "Data Protection Act of Kenya (2019) Fiduciary Standards"
    ],
    detailedSections: [
      {
        heading: "Automated Data Quality Auditing Pipelines",
        paragraphs: [
          "A major risk in digital reporting is 'garbage in, garbage out'—where poor data inputs degrade the reliability of reporting dashboards. IARA's custom databases integrate automated validation algorithms that check raw inputs as they are submitted.",
          "Our pipelines scan incoming records for extreme outliers, missing variables, or logical contradictions, flagging suspicious entries for immediate review before they are merged into the main reporting dashboard."
        ]
      }
    ]
  },
  {
    id: "strategic-planning-monitoring",
    title: "Strategic Planning Development & Performance Monitoring",
    shortTitle: "Strategic Planning & Monitoring",
    badge: "Strategic Leadership Practice",
    tagline: "Actionable 5-year strategic plans, balanced scorecards, and institutional work plans.",
    heroSummary: "Facilitating intensive visioning, environmental scans, and strategic cascading to align institutional operations with high-level performance targets.",
    overview: [
      "Without a clear strategic roadmap, even highly funded organizations risk administrative drift, operational inefficiency, and resource misallocation.",
      "Inter-Act Research Associates (IARA) offers high-level Strategic Planning and Performance Monitoring consultancy services designed to guide public agencies, non-profits, and private companies through intensive institutional visioning.",
      "Under the leadership of Executive Director Kennedy S. Okumu, our strategic planning division has facilitated over a decade of high-impact strategic reviews, producing actionable 5-Year Strategic Plans complete with costed operational budgets."
    ],
    methodologyText: [
      "We employ proven strategic analysis tools, including SWOT diagnostics, PESTLE environmental scanning, VRIO resource evaluation, and Scenario Planning matrices.",
      "High-level pillars are translated into daily operations using the Balanced Scorecard (BSC) framework, establishing clear Key Performance Indicators (KPIs) and Objectives and Key Results (OKRs)."
    ],
    coreCapabilities: [
      {
        title: "5-Year Strategic Plan Formulation",
        description: "Formulating comprehensive institutional strategic plans complete with market positioning, resource allocation, and costed implementation matrices.",
        deliverables: ["Published 5-Year Strategic Plan", "Strategic Direction Briefs", "Institutional SWOT Diagnostics Reports", "Fiduciary Projection Models"]
      },
      {
        title: "Balanced Scorecard Implementation",
        description: "Cascading strategic priorities down to departmental targets, individual performance contracts, and operational tracking templates.",
        deliverables: ["Departmental Scorecard Frameworks", "Individual Employee Appraisals Sheets", "KPI Dictionary Manuals", "Workplan Templates"]
      }
    ],
    caseStudies: [
      {
        title: "5-Year Strategic Direction for National Health NGO Alliance",
        client: "Community Health Advisory Council",
        location: "Nairobi, Kenya",
        year: "2021 - 2022",
        summary: "Facilitated visioning retreats, SWOT diagnostics, and financial models to develop a comprehensive 5-year strategic direction.",
        outcomes: "Adopted unanimously by the general board, directly guiding successful donor fundraising and institutional expansion over three fiscal years."
      }
    ],
    techStack: [
      { category: "Strategy Tools", items: ["Balanced Scorecard Automation", "OKR Software Tools", "Risk Matrix Builders", "Excel Projection Models"] },
      { category: "Collaboration Tech", items: ["Miro Enterprise", "Mural", "Microsoft Teams Workspace"] }
    ],
    qualityStandards: [
      "Mwongozo Code of Governance for State Corporations Benchmark",
      "ISO 9001:2015 Quality Management Systems Guidelines",
      "Balanced Scorecard Institute Strategic Execution Framework",
      "Public Finance Management (PFM) Act Compliance Mandates"
    ],
    detailedSections: [
      {
        heading: "Eliminating the 'Execution Gap' in Strategy",
        paragraphs: [
          "The biggest flaw of standard strategic plans is that they remain passive documents on office shelves, entirely disconnected from daily work. IARA solves this by engineering explicit work-planning frameworks that link strategic pillars directly to daily team tasks.",
          "By cascading five-year priorities down to annual departmental plans and quarterly team milestones, we ensure that every action taken by staff directly contributes to the high-level goals of the institution."
        ]
      }
    ]
  },
  {
    id: "livelihoods-development-programs",
    title: "Sustainable Livelihoods Development Programs",
    shortTitle: "Livelihoods Programs",
    badge: "Socio-Economic Resiliency",
    tagline: "Market systems development, agricultural value chain upgrades, and smallholder empowerment.",
    heroSummary: "Designing, evaluating, and supporting inclusive economic interventions that improve rural household incomes, enable market access, and build community resilience.",
    overview: [
      "Sustainable economic development is built upon stable, resilient local livelihoods. Inter-Act Research Associates (IARA) delivers high-impact advisory services in sustainable livelihoods development, climate-smart agriculture, and smallholder market systems across East Africa.",
      "We partner with international development agencies, national agricultural research centers, and non-profits to design and evaluate market-led livelihood interventions that empower rural households, women, and youth.",
      "Our practice combines market systems economics with localized field realities, ensuring that livelihoods interventions translate into immediate household income gains and sustainable economic opportunities."
    ],
    methodologyText: [
      "We employ the Market Systems Development (MSD) approach, mapping supply chains, analyzing market bottlenecks, and facilitating buyer-supplier agreements.",
      "Our livelihoods diagnostics integrate Participatory Rural Appraisals (PRA), household asset tracking, and gender-disaggregated value chain analysis to identify inclusive market growth nodes."
    ],
    coreCapabilities: [
      {
        title: "Agricultural Value Chain Upgrading",
        description: "Mapping commodity value chains (including sorghum, dairy, and high-value horticulture) to identify upgrading opportunities for smallholders.",
        deliverables: ["End-to-End Value Chain Reports", "Gross Margin Analysis Models", "Market Access Strategies", "Contract Farming Frameworks"]
      },
      {
        title: "Socio-Economic Resiliency Assessments",
        description: "Conducting household income surveys, asset vulnerability mapping, and economic shocks assessments in rural areas.",
        deliverables: ["Household Vulnerability Index Reports", "Community Resilience Plans", "Livelihood Diversification Guides", "Policy Briefs"]
      }
    ],
    caseStudies: [
      {
        title: "Smallholder Grain Value Chain Study for Agricultural Trust",
        client: "East African Agricultural Alliance",
        location: "Kajiado, Machakos & Kitui Counties",
        year: "2020",
        summary: "Analyzed contract-farming structures supplying high-quality grains to commercial processors, identifying structural bottlenecks for female smallholders.",
        outcomes: "Helped negotiate fairer contract terms that increased average female smallholder household net income by 28%."
      }
    ],
    techStack: [
      { category: "Value Chain Analysis", items: ["Excel Gross Margin Models", "Value Chain Mapping Software", "SPSS Demographic Analysis"] },
      { category: "Geographic Tracking", items: ["QGIS Spatial Mapping", "GPS Logger Pro", "Google Earth Pro"] }
    ],
    qualityStandards: [
      "Market Systems Development (MSD / M4P) Core Principles",
      "FAO Climate-Smart Agriculture (CSA) Strategic Guidelines",
      "Do No Harm Frameworks for Rural Economic Interventions",
      "Participatory Rural Appraisal (PRA) Ethical Protocols"
    ],
    detailedSections: [
      {
        heading: "Breaking Poverty Traps through Value Chain Inclusivity",
        paragraphs: [
          "Traditional livelihoods projects often fail by focusing purely on training without establishing reliable market connections. IARA bridges this gap by linking smallholder farmer cooperatives directly to regional off-takers and food processors.",
          "This market-linked approach guarantees stable purchase agreements and fair pricing for farmers, turning rural agricultural production from a highly volatile subsistence activity into a reliable, bankable business."
        ]
      }
    ]
  },
  {
    id: "entrepreneurship-life-skills",
    title: "Entrepreneurship, Financial Literacy & Life-Skills Training",
    shortTitle: "Entrepreneurship & Life-Skills",
    badge: "Human Capital Development",
    tagline: "Custom Swahili/English curricula, practical financial literacy training, and micro-franchising models.",
    heroSummary: "Formulating and executing practical entrepreneurship, vocational, and life-skills training programs that empower youth, women, and vulnerable groups to build resilient enterprises.",
    overview: [
      "With youth constituting the vast majority of the East African population, addressing unemployment requires practical business skills, economic literacy, and personal resilience.",
      "Inter-Act Research Associates (IARA) designs and rolls out comprehensive entrepreneurship, financial literacy, and life-skills training programs tailored for out-of-school youth, women's cooperatives, and emerging entrepreneurs.",
      "Our team authors high-impact training curricula in both Swahili and English, combining interactive, adult-learning methodologies with field-tested business mentoring frameworks."
    ],
    methodologyText: [
      "Our training frameworks are built on active learning theories (Andragogy), using role-playing, interactive case studies, and micro-business simulations instead of passive lecturing.",
      "We track training effectiveness through rigorous pre- and post-competency assessments, and follow-up evaluations to measure real-world business start-up and income growth rates."
    ],
    coreCapabilities: [
      {
        title: "Swahili & English Curriculum Curation",
        description: "Authoring accessible, visually rich training manuals, facilitator guides, and student workbooks tailored for diverse literacy levels.",
        deliverables: ["Visual Trainee Manuals", "Swahili Facilitator Guides", "Financial Record-keeping Ledgers", "Micro-enterprise Startup Templates"]
      },
      {
        title: "SACCO & Village Savings Mentorship",
        description: "Establishing and mentoring Village Savings and Loan Associations (VSLA) and SACCOs to build community-led micro-credit access.",
        deliverables: ["VSLA Operational Charters", "Financial Ledger Audit Tools", "SACCO Governance Handbooks", "Savings Performance Dashboards"]
      }
    ],
    caseStudies: [
      {
        title: "Youth Micro-franchise & Entrepreneurship Training Initiative",
        client: "Regional Human Development Agency",
        location: "Nairobi & Kajiado Counties",
        year: "2021",
        summary: "Developed a comprehensive financial literacy and business planning curriculum, training over 450 youth in urban and peri-urban areas.",
        outcomes: "Resulted in the establishment of 85 new youth-led micro-enterprises, with a 92% business survival rate tracked after 12 months."
      }
    ],
    techStack: [
      { category: "LMS & Classroom Tools", items: ["Moodle LMS", "Google Classroom", "Miro Boards", "Interactive Workshop Toolkits"] },
      { category: "Media & Publishing", items: ["Adobe InDesign CC", "Canva Enterprise", "Audacity Audio Editors"] }
    ],
    qualityStandards: [
      "UNESCO Technical and Vocational Education and Training Guidelines",
      "70-20-10 Adult Learning Framework and Methodologies",
      "USAID Youth Power Action Competency Standards",
      "Micro-enterprise Financial Literacy Core Competencies"
    ],
    detailedSections: [
      {
        heading: "Coaching Clinics for Sustainable Enterprise Growth",
        paragraphs: [
          "Standard classroom training rarely translates into successful businesses without continuous support. IARA integrates 90-day post-training coaching clinics into all our human capital programs.",
          "Our business mentors conduct bi-weekly on-site check-ins, helping trainees set up physical accounting ledgers, formulate pricing strategies, navigate local licensing, and access micro-credit networks to secure their startup survival."
        ]
      }
    ]
  },
  {
    id: "capacity-building-strengthening",
    title: "Capacity Building & Institutional Strengthening",
    shortTitle: "Capacity Building & Strengthening",
    badge: "Organizational Resiliency",
    tagline: "Organizational capacity assessments, advanced software mastering, and governance audits.",
    heroSummary: "Strengthening operational capacities, financial governance systems, and technical monitoring and evaluation competencies for civil society and public organizations.",
    overview: [
      "Even highly funded civil society organizations and public agencies can fail to deliver impact if they lack stable internal structures, transparent governance, and technical competencies.",
      "Inter-Act Research Associates (IARA) delivers comprehensive Institutional Strengthening and Capacity Building services to build high-performing organizations capable of managing complex development portfolios.",
      "We design custom organizational diagnostic frameworks, author institutional policy manuals, and deliver advanced cohort-based training in statistical software and donor-compliant program management."
    ],
    methodologyText: [
      "Our diagnostic assessments utilize McKinsey's Capacity Assessment Grid and USAID's NUPAS standards to benchmark organizational health across 8 core domains.",
      "Training programs utilize highly practical, cohort-based learning clinics, pairing formal software instruction with real-world institutional dataset exercises."
    ],
    coreCapabilities: [
      {
        title: "Organizational Capacity Assessments (OCA)",
        description: "Conducting deep diagnostics of operational structures, HR policies, financial controls, and risk management systems.",
        deliverables: ["Comprehensive OCA Audit Reports", "Institutional Development Plans (IDPs)", "Risk Management Manuals", "Policy Harmonization Logs"]
      },
      {
        title: "Advanced Data Science Masterclasses",
        description: "Delivering advanced training for research and M&E professionals in statistical software packages, survey automation, and visual analytics.",
        deliverables: ["Tailored Masterclass Curricula", "Hands-on Dataset Exercises", "Pre- & Post-Training Competency Logs", "Certified Competency Certificates"]
      }
    ],
    caseStudies: [
      {
        title: "Organizational Capacity Building for Local NGO Network",
        client: "Civil Society Support Program",
        location: "Turkana, Garissa & Nairobi Counties, Kenya",
        year: "2020 - 2021",
        summary: "Conducted OCAs and delivered custom governance and financial management capacity strengthening for 12 community-based organizations.",
        outcomes: "Graduated 100% of assessed partner CBOs to direct donor fund eligibility status, allowing them to secure $1.8M in direct funding."
      }
    ],
    techStack: [
      { category: "Assessment Tools", items: ["USAID NUPAS Matrix", "McKinsey CAG Framework", "UNDP Capacity Assessment Tool"] },
      { category: "Software Classrooms", items: ["SPSS Training Datasets", "Stata Syntax Libraries", "R Studio Packages"] }
    ],
    qualityStandards: [
      "USAID New Partnerships Initiative (NPI) Standards",
      "70-20-10 Human Capital Development Guidelines",
      "ISO 9001:2015 Quality Management Standard",
      "Professional Editing and Editorial Quality Assurances"
    ],
    detailedSections: [
      {
        heading: "Sustainable Systems Over Temporary Training",
        paragraphs: [
          "Conventional capacity building often over-relies on short-term training workshops that leave no lasting structural trace. IARA's approach focuses on institutionalizing systems.",
          "We do not merely train staff; we write, update, and install standardized operating manuals (Finance, HR, Procurement, and MERL SOPs) and establish internal oversight committees that sustain organizational health long after our consulting engagement ends."
        ]
      }
    ]
  },
  {
    id: "democracy-devolved-governance",
    title: "Democracy, Human Rights & Devolved Governance",
    shortTitle: "Devolved Governance",
    badge: "Civic Systems & Public Management",
    tagline: "County CIDP advisory, public participation frameworks, and citizen budget forums.",
    heroSummary: "Technical advisory, public participation guides, and capacity support to strengthen decentralized governance, transparent public finance management, and inclusive civic engagement.",
    overview: [
      "The devolution of governance in East Africa offers immense opportunities for local communities to shape their socio-economic development, but requires strong administrative systems and inclusive civic engagement.",
      "Inter-Act Research Associates (IARA) offers specialized technical advisory in devolved governance, human rights, and public participation.",
      "We assist county executive offices, assembly committees, statutory bodies, and civil society alliances in designing, implementing, and evaluating frameworks that promote citizen-led governance, public finance transparency, and marginalized-group representation."
    ],
    methodologyText: [
      "Our governance methodologies leverage social accountability tools, including Community Scorecards, Citizen Budget Economic Forums (CBEF), and legislative policy tracking.",
      "We analyze local policy formulations against national constitutional mandates, ensuring devolution frameworks are legally compliant and structurally inclusive."
    ],
    coreCapabilities: [
      {
        title: "Public Participation Frameworks & CBEFs",
        description: "Assisting municipal and county governments in setting up transparent public participation guidelines and organizing representative citizen budget sessions.",
        deliverables: ["County Public Participation Handbooks", "CBEF Operational Charters", "Citizen Budget Digests", "Legislative Feedback Portals"]
      },
      {
        title: "Human Rights & GESI Policy Audits",
        description: "Evaluating regional policies and budgets to ensure alignment with human rights conventions, gender equity mandates, and disability inclusion laws.",
        deliverables: ["GESI Policy Scorecards", "Human Rights Compliance Logs", "County CIDP Revision Policy Briefs", "Social Accountability Guides"]
      }
    ],
    caseStudies: [
      {
        title: "Citizen Budget Participation & CBEF Review",
        client: "Regional Devolution & Accountability Partner",
        location: "Garissa & Machakos Counties, Kenya",
        year: "2022",
        summary: "Evaluated county-level public budget participation mechanisms, identifying critical barriers that prevented rural women and persons with disabilities from influencing local CIDP budgeting.",
        outcomes: "Recommendations adopted to reform county town-hall formats, introducing sign-language support and accessible local-language budget digests."
      }
    ],
    techStack: [
      { category: "Accountability Tools", items: ["Community Scorecard Frameworks", "Citizen Report Cards", "Social Audit Matrices"] },
      { category: "Policy Trackers", items: ["Legislative Scorecard Builders", "CIDP Budget Trackers"] }
    ],
    qualityStandards: [
      "Constitution of Kenya (2010) Devolution and Public Finance Mandates",
      "Public Finance Management (PFM) Act Compliance Frameworks",
      "County Governments Act Section 87 on Citizen Participation",
      "International Covenant on Civil and Political Rights (ICCPR)"
    ],
    detailedSections: [
      {
        heading: "Translating Constitutional Mandates into Local Action",
        paragraphs: [
          "Many devolution policies remain high-level legal statements that local administrators struggle to put into practice. IARA translates complex constitutional principles into simple, step-by-step operating guidelines for local government offices.",
          "Our practical guides ensure that public administrators can design and lead legally compliant, highly inclusive public consultative forums that protect county budgets from legal challenges while genuinely reflecting local community needs."
        ]
      }
    ]
  },
  {
    id: "environment-soil-natural-resources",
    title: "Environment, Soil & Community Natural Resources Management",
    shortTitle: "Environmental Management",
    badge: "Eco-Systems Resiliency Pillar",
    tagline: "Participatory watershed management, climate adaptation, and community environmental committees.",
    heroSummary: "Integrating environmental science with community-led rangeland, watershed, and soil conservation interventions to protect natural capital and adapt rural economies to climate change.",
    overview: [
      "Climatic instability, soil erosion, and watershed degradation pose severe threats to livelihoods and agricultural productivity across East Africa's diverse agro-ecological zones.",
      "Inter-Act Research Associates (IARA) delivers high-quality environmental consultancy services, combining scientific research (GIS, soil testing, spatial remote sensing) with participatory, community-based environmental management systems.",
      "We partner with conservation non-profits, county environment departments, and watershed authorities to design and evaluate soil conservation, dryland agroforestry, and local water-pan maintenance programs."
    ],
    methodologyText: [
      "Our environmental assessments combine remote-sensing spatial data with participatory environmental mappings, utilizing IISD's CRiSTAL climate adaptation tool.",
      "Field diagnostics integrate physical soil sampling, watershed flow measurements, and community interviews to establish baseline environmental and agricultural indicators."
    ],
    coreCapabilities: [
      {
        title: "Participatory Watershed & Soil Protection Plans",
        description: "Assisting community water users' associations in establishing terracing, sand dam maintenance, and native reforestation guidelines.",
        deliverables: ["Community Watershed Protection Plans", "Soil terracing technical guides", "Water pan maintenance schedules", "Erosion risk mapping sheets"]
      },
      {
        title: "Climate Change Vulnerability & Adaptation Studies",
        description: "Conducting scientific and participatory assessments to design targeted community resilience interventions in drought-prone areas.",
        deliverables: ["Climate Vulnerability Maps", "Community Climate Resilience Frameworks", "Dryland Agroforestry manuals", "Alternative Income Guides"]
      }
    ],
    caseStudies: [
      {
        title: "Upper Tana Catchment Watershed Rehabilitation Assessment",
        client: "Environmental & Agroforestry Trust",
        location: "Upper Tana Basin, Kenya",
        year: "2021",
        summary: "Evaluated community-led soil conservation, native tree terracing, and sand dam installations designed to protect delicate catchment areas and reduce downstream silting.",
        outcomes: "Demonstrated a 35% reduction in wet-season topsoil run-off across target zones, directly validating the client's $1.2M conservation scaling model."
      }
    ],
    techStack: [
      { category: "Spatial & Environmental Software", items: ["QGIS Enterprise", "ArcGIS Desktop", "Google Earth Engine", "GPS Field Loggers"] },
      { category: "Climate Adapt Tools", items: ["IISD CRiSTAL", "FAO SHARP Resiliency Tool", "Soil Hydrology Models"] }
    ],
    qualityStandards: [
      "National Environment Management Authority (NEMA) Guidelines",
      "FAO Climate-Smart Agriculture (CSA) Strategic Benchmarks",
      "ISO 14001:2015 Environmental Management Systems",
      "Do No Harm Principles for Shared Trans-boundary Resources"
    ],
    detailedSections: [
      {
        heading: "Empowering Local Communities as Ecosystem Guardians",
        paragraphs: [
          "Conservation projects designed without active local participation almost always suffer from neglected infrastructure and illegal resource extraction. IARA's methodology centers on establishing and supporting democratic, community-led natural resource committees.",
          "By giving local landholders and pastoralists direct responsibility for managing water points, seedling nurseries, and grazing calendars, we build local ownership that protects the environment while supporting community resilience."
        ]
      }
    ]
  }
];
