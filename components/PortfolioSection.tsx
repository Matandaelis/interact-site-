"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/MotionSection";
import { 
  FileText, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  X, 
  Search, 
  Building2, 
  Globe2,
  Calendar,
  Layers,
  Filter,
  Check,
  ArrowRight,
  BookOpen
} from "lucide-react";

export default function PortfolioSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<any>(null);

  // All 18 Real Past Similar Assignments from IARA Profile Pages 5-7 and Edu-WISE project
  const assignments = [
    {
      id: "a1",
      organization: "Grassroot Disability Alliance (GDA)",
      title: "Technology Access & Policy Impact Study among PWDs in Pastoral Communities",
      category: "disability",
      categoryLabel: "Disability & Tech",
      date: "Nov 2025 – Mar 2026",
      location: "Marsabit, Garissa & Kajiado Counties, Kenya 🇰🇪",
      description: "Conducted a comprehensive study on how technology is developed, deployed, and regulated among persons with disabilities in pastoral communities, assessing specific challenges regarding technology access, digital literacy, and online policy impacts."
    },
    {
      id: "a2",
      organization: "TINADA Youth Africa & CBM Global",
      title: "Accessibility Audits in Learning Institutions & Health Facilities",
      category: "audit",
      categoryLabel: "Accessibility Audit",
      date: "Sep – Dec 2025",
      location: "Kisumu County, Kenya 🇰🇪",
      description: "Executed physical and operational accessibility audits across 8 Learning Institutions, 7 health facilities, and selected households in Kisumu County to assess workplace and institutional compliance."
    },
    {
      id: "a3",
      organization: "Cheshire Disability Services Kenya (CDSK)",
      title: "End-of-Programme Evaluation of Building Effective Networks (BEN-MAPP)",
      category: "evaluation",
      categoryLabel: "Endline Evaluation",
      date: "Jun – Aug 2025",
      location: "Kenya 🇰🇪",
      description: "Conducted End-of-Programme Evaluation of the Building Effective Networks (BEN) Multi-Annual Programme Plan Phase 1 (2023–2025) with Strategic Learning Input for BEN-MAPP Phase 2 (2026–2030)."
    },
    {
      id: "a4",
      organization: "National Council for Persons with Disabilities (NCPWDs)",
      title: "Autism & Related Developmental Disabilities Monograph 2023",
      category: "research",
      categoryLabel: "National Monograph",
      date: "Apr – Jun 2023",
      location: "24 Counties, Kenya 🇰🇪",
      description: "Developed the Autism and Related Developmental Disabilities Monograph 2023 across 24 counties in Kenya, mapping service availability, policy gaps, and intervention strategies."
    },
    {
      id: "a5",
      organization: "Sense International Kenya",
      title: "Effectiveness & Workability Assessment of Learner Support Assistant Model",
      category: "research",
      categoryLabel: "Education Research",
      date: "Feb 2023",
      location: "6 Counties, Kenya 🇰🇪",
      description: "Assessed the effectiveness and operational workability of the Learner Support Assistant Model for children with severe disabilities across 6 counties in Kenya."
    },
    {
      id: "a6",
      organization: "Aga Khan Foundation / USAID Yetu Initiatives",
      title: "Outcome Harvesting Workshops & Final Narrative Report (2014-2022)",
      category: "evaluation",
      categoryLabel: "Outcome Harvesting",
      date: "Nov 2022 – Feb 2023",
      location: "Nakuru, Kisii, Isiolo, Makueni & Mombasa Counties, Kenya 🇰🇪",
      description: "Lead Consultant contracted by Aga Khan Foundation's USAID funded Yetu Initiative Project to facilitate Outcome Harvesting workshops in 5 counties, generate county profiles, and support the final narrative report for 2014-2022."
    },
    {
      id: "a7",
      organization: "British Council",
      title: "In-Country M&E Technical Services for Skills for Inclusive Digital Participation (SIDP)",
      category: "evaluation",
      categoryLabel: "M&E Technical Support",
      date: "Jun 2022 – Jul 2023",
      location: "Kenya 🇰🇪, Nigeria 🇳🇬, Indonesia 🇮🇩",
      description: "Provided in-country M&E technical advisory services for the Skills for Inclusive Digital Participation (SIDP) project, measuring digital literacy and inclusion among marginalized groups."
    },
    {
      id: "a8",
      organization: "Kenya Female Advisory Organization (KEFEADO) & Sightsavers",
      title: "Gender Equality & Social Inclusion (GESI) Analysis in Soft Drinks Value Chains",
      category: "research",
      categoryLabel: "GESI Value Chain Analysis",
      date: "Jun – Oct 2022",
      location: "Kisumu, Homa Bay & Nairobi Counties, Kenya 🇰🇪",
      description: "Conducted Gender Equality and Social Inclusion (GESI) Analysis of the Global Labor Rights Program-Inclusive Future across two soft drinks value chains (Coca-Cola Beverages & Sorghum under Kenya Breweries Limited)."
    },
    {
      id: "a9",
      organization: "Participatory Ecological Land Use Management Kenya (PELUM-K)",
      title: "End Term Evaluation of Integrated Watershed Management (IWAMA-DIFE)",
      category: "evaluation",
      categoryLabel: "Environment & Watershed",
      date: "Dec 2021 – Feb 2022",
      location: "Kiambu & Murang'a Counties, Kenya 🇰🇪",
      description: "Awarded End Term Evaluation of the PELUM-K Integrated Watershed Management for Diverse Farming Enterprises (IWAMA-DIFE) Project evaluating sustainable farming practices and natural resource management."
    },
    {
      id: "a10",
      organization: "Christoffel Blindenmission (CBM)",
      title: "End Term Evaluation of Inclusive Education Policy Pilot (Social Lab Design)",
      category: "evaluation",
      categoryLabel: "Inclusive Education",
      date: "Nov – Dec 2021",
      location: "Machakos County, Kenya 🇰🇪",
      description: "Evaluated the effectiveness of the Social Lab Design Model under the CBM/ADDA Inclusive Education Policy Pilot Project for learners and trainees with disabilities."
    },
    {
      id: "a11",
      organization: "Leonard Cheshire",
      title: "Determining the Extra Cost of Disability Among Working Aged Adults",
      category: "research",
      categoryLabel: "Socio-Economic Research",
      date: "2021 – Aug 2023",
      location: "Kenya 🇰🇪",
      description: "Rigorous research project in Kenya quantifying the extra economic and social costs borne by working-aged adults living with disabilities."
    },
    {
      id: "a12",
      organization: "Community Initiatives Action Group-Kenya (CIAG-K)",
      title: "Evaluation of Citizen Participation in Budget-Making in Devolved Governance",
      category: "governance",
      categoryLabel: "Devolved Governance",
      date: "Jun – Sep 2021",
      location: "Kisumu & Siaya Counties, Kenya 🇰🇪",
      description: "Evaluated CIAG-K's contribution to citizen budget participation in devolved governance, documenting impacts, best practices, and lessons learned between 2017 and 2021."
    },
    {
      id: "a13",
      organization: "Kenya Paraplegic Organization",
      title: "Evidence-Based Advocacy for Urinary Continence Management Products",
      category: "disability",
      categoryLabel: "Health & Advocacy",
      date: "Jan 2017 – Dec 2022",
      location: "Embakasi Sub-County, Nairobi, Kenya 🇰🇪",
      description: "Evidence-based advocacy campaign and assessment to increase access to Urinary Continence Management Products (UCMPs) for persons with spinal cord injury."
    },
    {
      id: "a14",
      organization: "Action Network for Disabled Youth (ANDY)",
      title: "Final Evaluation of Rights Capacity Building for Children & Youth with Disabilities",
      category: "evaluation",
      categoryLabel: "CSO Capacity Building",
      date: "Mar – May 2021",
      location: "Kenya 🇰🇪",
      description: "Final evaluation of the project 'Strengthening Kenyan CSOs Capacity to Realize the Rights of Children and Young Persons with Disabilities' (2018–2020)."
    },
    {
      id: "a15",
      organization: "Kenya Private Sector Alliance (KEPSA)",
      title: "Mid-Term Evaluation of Switch Africa Green Project (MSME Eco-Entrepreneurship)",
      category: "evaluation",
      categoryLabel: "MSME & Green Economy",
      date: "May – Sep 2018",
      location: "Kenya 🇰🇪",
      description: "Mid-Term Evaluation Report of Switch Africa Green Project promoting sustainable consumption and production practices and eco-entrepreneurship among micro, small, and medium enterprises."
    },
    {
      id: "a16",
      organization: "Centre for International Private Enterprise (CIPE)",
      title: "Citizen Involvement Study in County Budget and Economic Forum (CBEF)",
      category: "governance",
      categoryLabel: "Public Finance & CBEF",
      date: "Jul 2015 – 2018",
      location: "County Governments, Kenya 🇰🇪",
      description: "Empirical study analyzing citizen engagement and participation levels in the budgeting process through the County Budget and Economic Forum (CBEF)."
    },
    {
      id: "a17",
      organization: "AMREF Health Africa",
      title: "Koota Injena SBCC Messaging & SRHR Policy Brief Development",
      category: "research",
      categoryLabel: "Health & SBCC",
      date: "Aug – Sep 2018",
      location: "Kenya 🇰🇪",
      description: "Development of Social and Behavior Change Communication (SBCC) messages and evidence-based policy briefs on Sexual Reproductive Health Rights (SRHR) and Nutrition under the Koota Injena Project."
    },
    {
      id: "a18",
      organization: "Call Africa Kenya",
      title: "Accessibility Audits for Edu-WISE Project",
      category: "audit",
      categoryLabel: "Accessibility Audit",
      date: "Jan – Apr 2026",
      location: "Multi-County, Kenya 🇰🇪",
      description: "Executed physical, structural, and operational accessibility audits to support the Edu-WISE project's goal of creating an inclusive society where all young people, regardless of ability, can acquire relevant skills, access the labor market, and participate fully in economic and social life."
    }
  ];

  const filteredAssignments = assignments.filter((item) => {
    const matchesFilter = selectedFilter === "all" || item.category === selectedFilter;
    const matchesSearch = 
      item.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionSection className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" /> Company Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Past Similar Assignments & Client Portfolio (18)
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Complete record of key evaluations, accessibility audits, research studies, and strategic management assignments undertaken by Inter-Act Research Associates.
          </p>
        </MotionSection>

        {/* Filter Bar & Search */}
        <MotionSection delay={0.1} className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All 18 Assignments" },
              { id: "evaluation", label: "Evaluations & M&E" },
              { id: "disability", label: "Disability & Inclusion" },
              { id: "audit", label: "Accessibility Audits" },
              { id: "research", label: "Social Research & GESI" },
              { id: "governance", label: "Governance & CBEF" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === f.id
                    ? "bg-blue-900 text-white shadow-xs"
                    : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search client or keyword..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

        </MotionSection>

        {/* Grid of 18 Assignments */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssignments.map((assignment, idx) => {
            const stockImages = [
              { url: "/images/about-fieldwork.png", alt: "Black African accessibility audit specialist in field assessment" },
              { url: "/images/home-research-team.png", alt: "Black African field enumerators and community stakeholders" },
              { url: "/images/services-workshop.png", alt: "Black African research consultants analyzing project evaluation data" },
              { url: "/images/regional-east-africa.png", alt: "Black African research committee and field supervisors in workshop" },
              { url: "/images/services-workshop.png", alt: "Black African community stakeholders in capacity building session" },
              { url: "/images/resources-publication.png", alt: "Black African youth and community agricultural enterprise" },
              { url: "/images/regional-east-africa.png", alt: "Black African county delegates in participatory budget consultation" },
            ];
            const imgObj = stockImages[idx % stockImages.length];

            return (
              <StaggerItem
                key={assignment.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-all flex flex-col justify-between group shadow-xs"
              >
                {/* Assignment Stock Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={imgObj.url}
                    alt={imgObj.alt}
                    referrerPolicy="no-referrer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjVmOSIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-900 text-white text-xs font-bold shadow-xs">
                    {assignment.categoryLabel}
                  </span>
                  <span className="absolute bottom-2 right-3 text-[10px] text-white bg-slate-900/90 px-2 py-0.5 rounded font-mono">
                    {assignment.date}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold text-blue-900 uppercase tracking-wider block">
                      {assignment.organization}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {assignment.title}
                    </h3>

                    <div className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                      <span>{assignment.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {assignment.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <Link
                      href={`/portfolio/${assignment.id}`}
                      className="flex-1 text-center text-xs font-bold bg-blue-900 hover:bg-blue-950 text-white py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-200" /> Full Page Details
                    </Link>
                    <button
                      onClick={() => setActiveModalProject(assignment)}
                      className="text-xs font-bold text-slate-700 hover:text-slate-900 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {filteredAssignments.length === 0 && (
          <div className="text-center py-12 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 text-sm">
            No assignments match your search term. Try resetting the filter.
          </div>
        )}

      </div>

      {/* Modal Detail View */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 max-w-2xl w-full rounded-2xl p-6 sm:p-8 relative shadow-2xl space-y-6 text-white max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
                {activeModalProject.categoryLabel}
              </span>
              <h3 className="text-xl font-extrabold text-white pr-8">
                {activeModalProject.title}
              </h3>
              <div className="text-xs text-slate-300 flex flex-wrap gap-4 pt-1 border-t border-slate-800 mt-2">
                <span>Contracting Partner: <strong className="text-blue-400">{activeModalProject.organization}</strong></span>
                <span>Timeline: <strong>{activeModalProject.date}</strong></span>
                <span>Location: <strong>{activeModalProject.location}</strong></span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="font-bold text-slate-300 uppercase tracking-wider">Assignment Description & Scope</h4>
                <p className="text-slate-300 leading-relaxed">{activeModalProject.description}</p>
              </div>

              <div className="bg-blue-950/30 p-4 rounded-xl border border-blue-500/30 space-y-1">
                <h4 className="font-bold text-blue-300 uppercase tracking-wider">IARA Delivery Quality & Value</h4>
                <p className="text-blue-100 text-xs leading-relaxed">
                  Executed by Inter-Act Research Associates in accordance with empirical data standards, ethical research guidelines, and regional regulatory compliance.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <Link
                href={`/portfolio/${activeModalProject.id}`}
                className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" /> Open Dedicated Full Assignment Page →
              </Link>
              <button
                onClick={() => setActiveModalProject(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
