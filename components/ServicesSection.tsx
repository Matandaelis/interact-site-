"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/MotionSection";
import { 
  BarChart3, 
  Briefcase, 
  GraduationCap, 
  Network, 
  Compass, 
  ChevronRight, 
  Check, 
  Layers, 
  Sparkles,
  Accessibility,
  Database,
  FileCheck2,
  Sprout,
  Users2,
  ShieldAlert,
  Flame,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  FileText
} from "lucide-react";

interface ServicesSectionProps {
  onSelectServiceForStudio: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export default function ServicesSection({ onSelectServiceForStudio, onOpenConsultation }: ServicesSectionProps) {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string>("me");

  // 12 Key Areas of Expertise from PDF Page 4
  const keyAreas = [
    { id: 1, title: "Project & Program Management", icon: Briefcase, serviceId: "cb", practiceArea: "Capacity Building", slug: "project-program-management" },
    { id: 2, title: "Research, M&E & Baseline/Online Surveys", icon: BarChart3, serviceId: "me", practiceArea: "Monitoring & Evaluation", slug: "research-me-surveys" },
    { id: 3, title: "Accessibility Audits & Workplace Compliance", icon: Accessibility, serviceId: "da", practiceArea: "Disability Mainstreaming", slug: "accessibility-audits-compliance" },
    { id: 4, title: "MERL Systems & Technical Support for NGOs/Private Sector", icon: FileCheck2, serviceId: "me", practiceArea: "Monitoring & Evaluation", slug: "merl-systems-technical-support" },
    { id: 5, title: "Documenting Success Stories (Print, Film, Digital)", icon: Sparkles, serviceId: "cb", practiceArea: "Capacity Building", slug: "documenting-success-stories" },
    { id: 6, title: "Database Development & Real-Time Dashboards", icon: Database, serviceId: "me", practiceArea: "Monitoring & Evaluation", slug: "database-development-dashboards" },
    { id: 7, title: "Strategic Planning Development & Monitoring", icon: Compass, serviceId: "sp", practiceArea: "Strategic Planning", slug: "strategic-planning-monitoring" },
    { id: 8, title: "Livelihoods Development Programs", icon: Sprout, serviceId: "livelihood", practiceArea: "Livelihoods & Environment", slug: "livelihoods-development-programs" },
    { id: 9, title: "Entrepreneurship & Life-Skills Training", icon: Flame, serviceId: "livelihood", practiceArea: "Livelihoods & Environment", slug: "entrepreneurship-life-skills" },
    { id: 10, title: "Capacity Building & Institutional Strengthening", icon: GraduationCap, serviceId: "cb", practiceArea: "Capacity Building", slug: "capacity-building-strengthening" },
    { id: 11, title: "Democracy & Devolved Governance", icon: ShieldAlert, serviceId: "sp", practiceArea: "Strategic Planning", slug: "democracy-devolved-governance" },
    { id: 12, title: "Environment, Soil & Natural Resources Management", icon: Network, serviceId: "livelihood", practiceArea: "Livelihoods & Environment", slug: "environment-soil-natural-resources" }
  ];

  const services = [
    {
      id: "me",
      title: "Monitoring, Evaluation & Formative Research",
      icon: BarChart3,
      badge: "Core Expertise",
      image: "/images/services-workshop.png",
      imageAlt: "Black African M&E research associates conducting evaluation analysis",
      tagline: "Systematic research, baseline surveys, impact evaluation, and MERL systems.",
      description: "Designing and implementing robust Monitoring, Evaluation, Reporting and Learning (MERL) systems, mobile baseline and online surveys, third-party evaluations, and empirical social research across Kenya, Uganda, Tanzania, and Rwanda.",
      capabilities: [
        "Baseline, Midline & Endline Impact Evaluations",
        "Formative & Social Research Surveys (ODK / KoboToolbox)",
        "Database & Monitoring Dashboard Development",
        "Theory of Change & Logical Framework Formulation",
        "Value for Money & Cost-Efficiency Analysis"
      ],
      methodology: "Data-driven mixed methods combining qualitative KIIs, FGDs, household survey sampling, and statistical econometric modeling."
    },
    {
      id: "da",
      title: "Disability Mainstreaming & Accessibility Audits",
      icon: Accessibility,
      badge: "Specialized Practice",
      image: "/images/about-fieldwork.png",
      imageAlt: "Black African accessibility advocate and research consultant leading inclusion workshop",
      tagline: "Workplace & public facility compliance, inclusion monographs, and advocacy.",
      description: "Assessing physical, digital, and structural accessibility for persons with disabilities in learning institutions, healthcare facilities, and workplace environments across East African counties.",
      capabilities: [
        "Workplace & Institutional Accessibility Audits",
        "Disability Mainstreaming Policy & Compliance Assessments",
        "Autism & Developmental Disability Research Monographs",
        "Extra Cost of Disability & Inclusivity Studies",
        "Gender Equality & Social Inclusion (GESI) Analysis"
      ],
      methodology: "Universal Design Guidelines, physical infrastructure audits, participatory community engagements, and rights-based frameworks."
    },
    {
      id: "cb",
      title: "Institutional Strengthening & Capacity Building",
      icon: GraduationCap,
      badge: "Human Capital",
      image: "/images/services-workshop.png",
      imageAlt: "Black African professionals engaged in institutional capacity building training",
      tagline: "Empowering organizations with operational, analytical, and governance skills.",
      description: "Tailored training interventions, mentoring, and competency-building programs for non-profit, government, and private sector managers in M&E, project management, and governance.",
      capabilities: [
        "Training Needs Assessments (TNA) & Mentorship",
        "Advanced M&E & Statistical Software Workshops (SPSS, Stata, R)",
        "Executive Leadership & Governance Coaching",
        "Project Proposal & Final Narrative Report Writing",
        "Documenting Success / Case Studies in Print, Film & Media"
      ],
      methodology: "Adult learning (70-20-10 model), practical case studies, pre/post evaluation metrics, and institutional coaching."
    },
    {
      id: "sp",
      title: "Strategic Planning & Governance Advisory",
      icon: Compass,
      badge: "Strategic Advisory",
      image: "/images/regional-east-africa.png",
      imageAlt: "Black African executive leadership board framing 5-year strategic roadmap",
      tagline: "Actionable 5-year strategic roadmaps and devolved governance frameworks.",
      description: "Assisting corporate bodies, civil society, and government institutions in developing 5-year strategic plans, board governance oversight structures, and budget participation systems.",
      capabilities: [
        "5-Year Strategic Plan Development & Monitoring",
        "Board Governance Policy Formulation & Oversight Support",
        "Citizen Budget Participation & CBEF Studies",
        "Risk Analysis & Organizational Health Diagnostics",
        "Standard Operating Procedures (SOPs) & HR Manuals"
      ],
      methodology: "Participatory SWOT & PESTLE workshops, Balanced Scorecard OKR mapping, and stakeholder consensus building."
    },
    {
      id: "livelihood",
      title: "Livelihoods, Entrepreneurship & Environment",
      icon: Sprout,
      badge: "Sustainable Dev",
      image: "/images/resources-publication.png",
      imageAlt: "Black African community stakeholders in agricultural livelihood initiative",
      tagline: "MSME eco-entrepreneurship, value chains, and natural resource management.",
      description: "Supporting sustainable livelihoods, MSME switch-green practices, agricultural value chains (Coca-Cola, Sorghum, Watersheds), and natural resources management.",
      capabilities: [
        "MSME Eco-Entrepreneurship & Green Growth Audits",
        "Agricultural Value Chain & Sorghum/Beverage GESI Studies",
        "Integrated Watershed & Natural Resource Management",
        "Life-Skills & Youth Entrepreneurship Development",
        "Livelihoods Resiliency & Food Security Assessments"
      ],
      methodology: "Value chain analysis, environmental impact auditing, community-led sustainable resource management, and enterprise economics."
    }
  ];

  const activeServiceObj = services.find((s) => s.id === selectedService) || services[0];

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionSection className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-blue-800" /> Technical Expertise & Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consultancy Practice Areas & Technical Capabilities
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Inter-Act Research Associates offers end-to-end technical assistance for development partners, civil society organizations, government entities, and private enterprises.
          </p>
        </MotionSection>

        {/* 12 Key Areas Grid Overview */}
        <MotionSection delay={0.1} className="mb-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">Key Areas of Expertise</span>
              <h3 className="text-xl font-bold text-slate-900">12 Specialization Domains</h3>
            </div>
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Verified IARA Capacity Statement
            </span>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {keyAreas.map((area) => {
              const IconComp = area.icon;
              return (
                <StaggerItem 
                  key={area.id}
                  className="bg-slate-50 hover:bg-blue-50/20 rounded-xl border border-slate-200 hover:border-blue-500 transition-all shadow-xs flex group/card focus-within:ring-2 focus-within:ring-blue-500"
                >
                  <Link
                    href={`/services/${area.slug}`}
                    className="p-4 flex flex-col justify-between text-left h-full w-full focus:outline-none"
                    aria-label={`View detailed guide for ${area.title}`}
                  >
                    <div className="space-y-3 w-full">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center text-white shrink-0 font-bold text-xs group-hover/card:bg-blue-800 transition-colors">
                          {area.id}
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-900 shrink-0">
                          <IconComp className="w-4 h-4 text-blue-800" />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug block group-hover/card:text-blue-900 transition-colors">
                          {area.title}
                        </span>
                        <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">
                          Pillar: {area.practiceArea}
                        </span>
                      </div>
                    </div>

                    <div className="w-full mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-blue-900 font-bold group-hover/card:text-blue-800 transition-colors">
                      <span>Explore details & tools</span>
                      <span className="flex items-center gap-0.5 transform group-hover/card:translate-x-1 transition-transform">
                        View full guide &rarr;
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </MotionSection>

        {/* Tab Selector for Practice Areas */}
        <div id="detailed-practices" className="scroll-mt-24 flex flex-wrap justify-center gap-2 mb-10">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-blue-900 text-white shadow-md shadow-blue-900/20"
                    : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-blue-800"}`} />
                <span>{service.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Service Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden mb-16">
          
          {/* Active Practice Area Stock Banner */}
          <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden mb-8 border border-slate-200 group">
            <Image 
              src={activeServiceObj.image}
              alt={activeServiceObj.imageAlt}
              referrerPolicy="no-referrer"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1200px) 100vw, 1024px"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjVmOSIvPjwvc3ZnPg=="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
              <span className="bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-700 text-white backdrop-blur-sm flex items-center gap-2">
                <Users2 className="w-3.5 h-3.5 text-blue-300" />
                {activeServiceObj.imageAlt}
              </span>
              <span className="hidden sm:inline bg-slate-900/90 px-2.5 py-1 rounded text-slate-200 text-xs">
                IARA Practice Area • East Africa
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900">
                  <activeServiceObj.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {activeServiceObj.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {activeServiceObj.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-base font-normal leading-relaxed">
                {activeServiceObj.description}
              </p>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                  Methodological Rigor & Tools
                </div>
                <div className="text-sm font-medium text-slate-800">
                  {activeServiceObj.methodology}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/services/${activeServiceObj.id}`}
                  className="bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Full Technical Practice Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={onOpenConsultation}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-blue-800" />
                  Request Proposal
                </button>
              </div>
            </div>

            {/* Right Capabilities list */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-800" />
                Key Deliverables & Technical Services
              </h4>

              <div className="space-y-3">
                {activeServiceObj.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span>Coverage: Kenya, Uganda, Tanzania, Rwanda</span>
                <Link href={`/services/${activeServiceObj.id}`} className="text-blue-900 font-bold hover:underline flex items-center gap-1">
                  Read Full Detail <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* All 5 Services Grid Cards */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">Complete Practice Catalog</span>
            <h3 className="text-2xl font-bold text-slate-900">Explore All 5 Detailed Technical Practice Guides</h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Each practice area contains comprehensive documentation detailing research methodologies, operational standards, toolstacks, case studies, and deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv) => {
              const SrvIcon = srv.icon;
              return (
                <div key={srv.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-400 transition-all group space-y-4 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900">
                        <SrvIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        {srv.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {srv.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">1,000+ Words</span>
                    <Link 
                      href={`/services/${srv.id}`}
                      className="bg-slate-100 hover:bg-blue-900 text-slate-900 hover:text-white font-bold text-xs px-3.5 py-2 rounded-xl border border-slate-200 transition-all flex items-center gap-1.5"
                    >
                      Read Full Guide
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

