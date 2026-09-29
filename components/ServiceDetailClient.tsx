"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

const serviceImageMap: Record<string, { src: string; alt: string }> = {
  me: { src: "/images/services-workshop.png", alt: "Research consultants reviewing monitoring and evaluation findings" },
  da: { src: "/images/about-fieldwork.png", alt: "Field researchers conducting an inclusive community assessment" },
  cb: { src: "/images/services-workshop.png", alt: "Professionals participating in institutional capacity building" },
  sp: { src: "/images/regional-east-africa.png", alt: "Leadership team planning a regional development strategy" },
  livelihood: { src: "/images/resources-publication.png", alt: "Community partners working on sustainable livelihoods" },
};

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
  const serviceImage = serviceImageMap[service.id] || serviceImageMap.me;

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans selection:bg-[var(--coral)] selection:text-[var(--ink)]">
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
        <section className="border-b border-[var(--line)] bg-[var(--paper-muted)] py-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--coral)]/[0.04] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--coral)]/10 border border-[var(--coral)]/30 text-[var(--coral-deep)] text-xs font-semibold">
                <IconComponent className="w-4 h-4" /> {service.badge}
              </div>

              <Link 
                href="/services" 
                className="text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to All Practice Areas
              </Link>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[var(--ink)] tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-[var(--ink-muted)] text-base sm:text-xl max-w-4xl leading-relaxed">
              {service.heroSummary}
            </p>

            <div className="relative mt-8 h-52 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--paper)] shadow-sm sm:h-72 lg:h-80">
              <Image src={serviceImage.src} alt={serviceImage.alt} fill priority sizes="(max-width: 640px) 100vw, 1200px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/55 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-bold text-white">{service.shortTitle} field practice</span>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[var(--coral)] hover:bg-[var(--coral-deep)] text-[var(--ink)] font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Request RFP / Proposal for {service.shortTitle}
              </button>

              <Link
                href="/studio"
                className="bg-[var(--paper-muted)] hover:bg-[var(--paper)] text-[var(--coral-deep)] border border-[var(--coral)]/40 font-bold text-xs px-6 py-3.5 rounded-xl transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate Framework in Studio
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content Body - Comprehensive Detailed Sections (~1000 words) */}
        <section className="py-16 bg-[var(--paper)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content Column (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* 1. Practice Overview */}
                <div className="bg-[var(--paper-muted)]/90 border border-[var(--line)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div className="border-b border-[var(--line)] pb-4">
                    <span className="text-xs font-bold text-[var(--coral-deep)] uppercase tracking-widest block">Detailed Scope & Practice Overview</span>
                    <h2 className="text-2xl font-bold text-[var(--ink)] mt-1">Institutional Capacity & Purpose</h2>
                  </div>

                  <div className="space-y-4 text-[var(--ink-muted)] text-sm sm:text-base leading-relaxed">
                    {service.overview.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* 2. Methodological Architecture */}
                <div className="bg-[var(--paper-muted)]/90 border border-[var(--line)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div className="border-b border-[var(--line)] pb-4">
                    <span className="text-xs font-bold text-[var(--coral-deep)] uppercase tracking-widest block">Scientific Standards & Design</span>
                    <h2 className="text-2xl font-bold text-[var(--ink)] mt-1">Methodological Framework</h2>
                  </div>

                  <div className="space-y-4 text-[var(--ink-muted)] text-sm sm:text-base leading-relaxed">
                    {service.methodologyText.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* 3. Core Capabilities & Technical Deliverables */}
                <div className="space-y-6">
                  <div className="border-b border-[var(--line)] pb-4">
                    <span className="text-xs font-bold text-[var(--coral-deep)] uppercase tracking-widest block">Technical Operations</span>
                    <h2 className="text-2xl font-bold text-[var(--ink)] mt-1">Core Technical Capabilities & Deliverables</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {service.coreCapabilities.map((cap, idx) => (
                      <div key={idx} className="bg-[var(--paper-muted)] border border-[var(--line)] rounded-2xl p-6 space-y-4 hover:border-[var(--coral)]/40 transition-all">
                        <div className="flex items-start gap-3">
                          <span className="w-7 h-7 rounded-lg bg-[var(--coral)]/10 border border-[var(--coral)]/30 text-[var(--coral-deep)] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            0{idx + 1}
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-[var(--ink)]">{cap.title}</h3>
                            <p className="text-xs text-[var(--ink-muted)] mt-1 leading-relaxed">{cap.description}</p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-[var(--line)]/80 space-y-2">
                          <span className="text-[11px] font-bold text-[var(--ink-muted)] uppercase tracking-wider block">Key Tangible Deliverables:</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--ink-muted)]">
                            {cap.deliverables.map((deliv, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--coral-deep)] shrink-0 mt-0.5" />
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
                  <div key={idx} className="bg-[var(--paper-muted)]/90 border border-[var(--line)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                    <div className="border-b border-[var(--line)] pb-4">
                      <span className="text-xs font-bold text-[var(--coral-deep)] uppercase tracking-widest block">In-Depth Practice Domain</span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[var(--ink)] mt-1">{sec.heading}</h2>
                    </div>

                    <div className="space-y-4 text-[var(--ink-muted)] text-sm sm:text-base leading-relaxed">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* 5. Applied Field Case Studies */}
                <div className="space-y-6">
                  <div className="border-b border-[var(--line)] pb-4">
                    <span className="text-xs font-bold text-[var(--coral-deep)] uppercase tracking-widest block">Demonstrated Track Record</span>
                    <h2 className="text-2xl font-bold text-[var(--ink)] mt-1">Select Case Studies & Applied Field Assignments</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.caseStudies.map((cs, idx) => (
                      <div key={idx} className="bg-[var(--paper-muted)] border border-[var(--line)] rounded-2xl p-6 space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-[var(--coral-deep)] font-semibold">
                            <span>{cs.client}</span>
                            <span className="bg-[var(--paper)] px-2.5 py-0.5 rounded border border-[var(--line)]">{cs.year}</span>
                          </div>
                          <h3 className="text-base font-bold text-[var(--ink)]">{cs.title}</h3>
                          <span className="text-[11px] text-[var(--ink-muted)] block font-mono">📍 {cs.location}</span>
                          <p className="text-xs text-[var(--ink-muted)] leading-relaxed pt-2 border-t border-[var(--line)]">
                            {cs.summary}
                          </p>
                        </div>
                        <div className="bg-[var(--paper)] p-3 rounded-xl border border-[var(--line)] text-xs text-[var(--coral-deep)] font-medium">
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
                <div className="bg-[var(--paper-muted)] border border-[var(--line)] rounded-2xl p-6 space-y-6 shadow-xl sticky top-24">
                  <div className="border-b border-[var(--line)] pb-3">
                    <span className="text-xs font-bold text-[var(--coral-deep)] uppercase tracking-widest block">Instrument Stack</span>
                    <h3 className="text-lg font-bold text-[var(--ink)]">Tools & Software Ecosystem</h3>
                  </div>

                  <div className="space-y-4">
                    {service.techStack.map((stack, idx) => (
                      <div key={idx} className="space-y-2">
                        <span className="text-xs font-bold text-[var(--ink-muted)] uppercase block">{stack.category}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {stack.items.map((item, iIdx) => (
                            <span key={iIdx} className="bg-[var(--paper)] text-[var(--ink-muted)] text-xs px-2.5 py-1 rounded-lg border border-[var(--line)] font-mono">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quality Assurance Standards */}
                  <div className="pt-4 border-t border-[var(--line)] space-y-3">
                    <span className="text-xs font-bold text-[var(--coral-deep)] uppercase tracking-widest block">Institutional Standards</span>
                    <ul className="space-y-2 text-xs text-[var(--ink-muted)]">
                      {service.qualityStandards.map((std, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-[var(--coral-deep)] shrink-0 mt-0.5" />
                          <span>{std}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RFP CTA Sidebar Box */}
                  <div className="bg-[var(--ink)] border border-[var(--coral)]/40 rounded-xl p-5 text-center space-y-3 pt-4">
                    <h4 className="text-white font-bold text-sm">Need a Technical Proposal?</h4>
                    <p className="text-xs text-[var(--ink-muted)]">
                      Our Executive Director & Technical Desk respond to RFPs within 24 hours.
                    </p>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="w-full bg-[var(--coral)] hover:bg-[var(--coral-deep)] text-[var(--ink)] font-bold text-xs py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Submit RFP Request
                    </button>
                  </div>

                  {/* Navigation to Other Services */}
                  <div className="pt-2 border-t border-[var(--line)] space-y-2">
                    <span className="text-[11px] font-bold text-[var(--ink-muted)] uppercase block">Other Practice Areas:</span>
                    <ul className="space-y-1 text-xs">
                      {detailedServices.filter(s => s.id !== service.id).map((s) => (
                        <li key={s.id}>
                          <Link href={`/services/${s.id}`} className="text-[var(--ink-muted)] hover:text-[var(--coral-deep)] flex items-center justify-between py-1 transition-colors">
                            <span className="truncate">{s.shortTitle}</span>
                            <ArrowRight className="w-3 h-3 text-[var(--ink-muted)]" />
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
