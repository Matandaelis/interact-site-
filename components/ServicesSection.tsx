"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  const [selectedService, setSelectedService] = useState<string>("me");

  // 12 Key Areas of Expertise from PDF Page 4
  const keyAreas = [
    { id: 1, title: "Project & Program Management", icon: Briefcase },
    { id: 2, title: "Research, M&E & Baseline/Online Surveys", icon: BarChart3 },
    { id: 3, title: "Accessibility Audits & Workplace Compliance", icon: Accessibility },
    { id: 4, title: "MERL Systems & Technical Support for NGOs/Private Sector", icon: FileCheck2 },
    { id: 5, title: "Documenting Success Stories (Print, Film, Digital)", icon: Sparkles },
    { id: 6, title: "Database Development & Real-Time Dashboards", icon: Database },
    { id: 7, title: "Strategic Planning Development & Monitoring", icon: Compass },
    { id: 8, title: "Livelihoods Development Programs", icon: Sprout },
    { id: 9, title: "Entrepreneurship & Life-Skills Training", icon: Flame },
    { id: 10, title: "Capacity Building & Institutional Strengthening", icon: GraduationCap },
    { id: 11, title: "Democracy & Devolved Governance", icon: ShieldAlert },
    { id: 12, title: "Environment, Soil & Natural Resources Management", icon: Network }
  ];

  const services = [
    {
      id: "me",
      title: "Monitoring, Evaluation & Formative Research",
      icon: BarChart3,
      badge: "Core Expertise",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" /> Technical Expertise & Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consultancy Practice Areas & Specialized Capabilities
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Inter-Act Research Associates offers end-to-end technical assistance for public institutions, development partners, civil society organizations, and private enterprises.
          </p>
        </MotionSection>

        {/* 12 Key Areas Grid Overview */}
        <MotionSection delay={0.1} className="mb-16 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Key Areas of Expertise</span>
              <h3 className="text-xl font-bold text-white">12 Specialization Domains</h3>
            </div>
            <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              Verified IARA Capacity Statement
            </span>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {keyAreas.map((area) => {
              const IconComp = area.icon;
              return (
                <StaggerItem 
                  key={area.id}
                  className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 font-bold">
                    {area.id}
                  </div>
                  <span className="font-semibold text-slate-200">{area.title}</span>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </MotionSection>

        {/* Tab Selector for Practice Areas */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-950/50"
                    : "bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-slate-950" : "text-emerald-400"}`} />
                <span>{service.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Service Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
          
          {/* Active Practice Area Stock Banner */}
          <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden mb-8 border border-slate-800 group">
            <img 
              src={activeServiceObj.image}
              alt={activeServiceObj.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
              <span className="bg-slate-950/85 px-3 py-1 rounded-lg border border-emerald-500/40 text-emerald-300 backdrop-blur-sm flex items-center gap-2">
                <Users2 className="w-3.5 h-3.5 text-emerald-400" />
                {activeServiceObj.imageAlt}
              </span>
              <span className="hidden sm:inline bg-slate-950/80 px-2.5 py-1 rounded text-slate-300 text-xs">
                IARA Practice Area • East Africa
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <activeServiceObj.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {activeServiceObj.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {activeServiceObj.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base font-normal leading-relaxed">
                {activeServiceObj.description}
              </p>

              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Methodological Rigor & Tools
                </div>
                <div className="text-sm text-slate-200">
                  {activeServiceObj.methodology}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/services/${activeServiceObj.id}`}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Full 1000-Word Practice Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onSelectServiceForStudio(activeServiceObj.id)}
                  className="bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Studio Generator
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Request RFP
                </button>
              </div>
            </div>

            {/* Right Capabilities list */}
            <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                Key Deliverables & Technical Services
              </h4>

              <div className="space-y-3">
                {activeServiceObj.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Coverage: Kenya, Uganda, Tanzania, Rwanda</span>
                <Link href={`/services/${activeServiceObj.id}`} className="text-emerald-400 font-semibold hover:underline flex items-center gap-1">
                  Read Full Detail <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* All 5 Services Grid Cards with Direct 1000-Word Detail Links */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Complete Practice Catalog</span>
            <h3 className="text-2xl font-bold text-white">Explore All 5 Detailed Technical Practice Guides</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Each practice area contains comprehensive ~1000-word documentation detailing research methodologies, operational standards, toolstacks, case studies, and deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv) => {
              const SrvIcon = srv.icon;
              return (
                <div key={srv.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group space-y-4 shadow-xl">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <SrvIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {srv.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {srv.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {srv.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">1,000+ Words</span>
                    <Link 
                      href={`/services/${srv.id}`}
                      className="bg-slate-900 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl border border-slate-800 transition-all flex items-center gap-1.5"
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

