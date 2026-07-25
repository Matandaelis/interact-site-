"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { ServiceDetail, detailedServices } from "@/lib/servicesData";
import { 
  BarChart3, 
  Accessibility, 
  GraduationCap, 
  Compass, 
  Sprout, 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  BookOpen,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  me: BarChart3,
  da: Accessibility,
  cb: GraduationCap,
  sp: Compass,
  livelihood: Sprout,
};

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const IconComponent = iconMap[service.id] || Layers;

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-950">
      <ScrollProgressBar />
      <Navbar />

      <Breadcrumb 
        items={[
          { label: "Technical Practice Services", href: "/services" },
          { label: service.shortTitle }
        ]} 
      />

      <main className="flex-1">

        {/* Hero Header */}
        <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-blue-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                <IconComponent className="w-4 h-4" /> {service.badge}
              </div>

              <Link 
                href="/services" 
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to All Practice Areas
              </Link>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-4xl leading-relaxed">
              {service.heroSummary}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Request RFP / Proposal for {service.shortTitle}
              </button>

              <Link
                href="/studio"
                className="bg-slate-900 hover:bg-slate-800 text-blue-400 border border-blue-500/40 font-bold text-xs px-6 py-3.5 rounded-xl transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate Framework in Studio
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content Body - Comprehensive Detailed Sections (~1000 words) */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content Column (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* 1. Practice Overview */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Detailed Scope & Practice Overview</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Institutional Capacity & Purpose</h2>
                  </div>

                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.overview.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* 2. Methodological Architecture */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Scientific Standards & Design</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Methodological Framework</h2>
                  </div>

                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.methodologyText.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* 3. Core Capabilities & Technical Deliverables */}
                <div className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Technical Operations</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Core Technical Capabilities & Deliverables</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {service.coreCapabilities.map((cap, idx) => (
                      <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-all">
                        <div className="flex items-start gap-3">
                          <span className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            0{idx + 1}
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{cap.description}</p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-800/80 space-y-2">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Tangible Deliverables:</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                            {cap.deliverables.map((deliv, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                                <span>{deliv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Deep Specialized Sections */}
                {service.detailedSections.map((sec, idx) => (
                  <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                    <div className="border-b border-slate-800 pb-4">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">In-Depth Practice Domain</span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{sec.heading}</h2>
                    </div>

                    <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* 5. Applied Field Case Studies */}
                <div className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Demonstrated Track Record</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Select Case Studies & Applied Field Assignments</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.caseStudies.map((cs, idx) => (
                      <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-blue-400 font-semibold">
                            <span>{cs.client}</span>
                            <span className="bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">{cs.year}</span>
                          </div>
                          <h3 className="text-base font-bold text-white">{cs.title}</h3>
                          <span className="text-[11px] text-slate-400 block font-mono">📍 {cs.location}</span>
                          <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                            {cs.summary}
                          </p>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-blue-300 font-medium">
                          <strong>Impact:</strong> {cs.outcomes}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Column (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Tech & Tools Stack Box */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl sticky top-24">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Instrument Stack</span>
                    <h3 className="text-lg font-bold text-white">Tools & Software Ecosystem</h3>
                  </div>

                  <div className="space-y-4">
                    {service.techStack.map((stack, idx) => (
                      <div key={idx} className="space-y-2">
                        <span className="text-xs font-bold text-slate-300 uppercase block">{stack.category}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {stack.items.map((item, iIdx) => (
                            <span key={iIdx} className="bg-slate-950 text-slate-300 text-xs px-2.5 py-1 rounded-lg border border-slate-800 font-mono">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quality Assurance Standards */}
                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Institutional Standards</span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {service.qualityStandards.map((std, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{std}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RFP CTA Sidebar Box */}
                  <div className="bg-gradient-to-br from-blue-950 to-slate-950 border border-blue-500/40 rounded-xl p-5 text-center space-y-3 pt-4">
                    <h4 className="text-white font-bold text-sm">Need a Technical Proposal?</h4>
                    <p className="text-xs text-slate-300">
                      Our Executive Director & Technical Desk respond to RFPs within 24 hours.
                    </p>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Submit RFP Request
                    </button>
                  </div>

                  {/* Navigation to Other Services */}
                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase block">Other Practice Areas:</span>
                    <ul className="space-y-1 text-xs">
                      {detailedServices.filter(s => s.id !== service.id).map((s) => (
                        <li key={s.id}>
                          <Link href={`/services/${s.id}`} className="text-slate-300 hover:text-blue-400 flex items-center justify-between py-1 transition-colors">
                            <span className="truncate">{s.shortTitle}</span>
                            <ArrowRight className="w-3 h-3 text-slate-500" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />

      {modalOpen && (
        <ConsultationForm 
          isOpenModal={true} 
          onCloseModal={() => setModalOpen(false)} 
        />
      )}
    </div>
  );
}
