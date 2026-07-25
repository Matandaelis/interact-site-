"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesSection from "@/components/ResourcesSection";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { BookOpenCheck, FileText, Download, Sparkles } from "lucide-react";

export default function ResourcesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const jsonLdResources = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "IARA Technical Publications & M&E Practice Guides",
    "description": "A curated repository of Monitoring & Evaluation frameworks, accessibility audit checklists, GESI research guides, and capacity assessment indices published by Inter-Act Research Associates.",
    "publisher": {
      "@type": "Organization",
      "name": "Inter-Act Research Associates",
      "url": "https://interactresearch.org"
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdResources) }}
      />
      <Navbar />

      <Breadcrumb items={[{ label: "Knowledge Hub & Downloads" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-950/80 to-blue-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <BookOpenCheck className="w-4 h-4" /> Technical Publications & Toolkits
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Knowledge Repository & Practice Guides
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
              Access curated M&E frameworks, disability inclusion audit checklists, research methodology guidelines, and capacity assessment toolkits developed by IARA experts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/studio"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate Custom Framework in Studio
              </Link>
              <Link
                href="/glossary"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
              >
                <BookOpenCheck className="w-4 h-4 text-blue-400" />
                Explore M&E Terminology Glossary
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section Component */}
        <ResourcesSection />

        {/* Detailed Resources Technical Block */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Knowledge Management</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Practitioner Standards & Technical Manuals</h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 leading-relaxed">
              <p>
                In the sector of international development and public policy, the dissemination of robust, empirical research methods and standard operational checklists is vital for ensuring project success and institutional accountability. Established in <strong>2013</strong> and registered under the <strong>Kenyan Company&apos;s Act (Cap 499 Section 4)</strong>, Inter-Act Research Associates (IARA) operates this Knowledge Hub under the oversight of our <strong>Scientific Research Committee</strong>. Our goal is to equip development practitioners, M&E officers, civil society directors, and donor coordinators with peer-reviewed, field-tested toolkits.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">1. MERL (Monitoring, Evaluation, Research, &amp; Learning) Standards</h3>
              <p>
                The foundations of any high-impact development intervention lie in its Monitoring, Evaluation, Research, and Learning (MERL) framework. IARA&apos;s published guides, including the <em>Comprehensive MERL Indicator Matrix &amp; Baseline Guide</em>, adhere strictly to the <strong>OECD-DAC (Organisation for Economic Co-operation and Development - Development Assistance Committee)</strong> evaluation criteria. These guidelines ensure that projects are evaluated across six core dimensions: Relevance, Coherence, Effectiveness, Efficiency, Impact, and Sustainability. Our toolkits provide practical indicators, baseline survey templates, and logic-model builders that translate complex project goals into measurable quantitative metrics, allowing for seamless integration into donor reporting pipelines (such as USAID, European Union, and UN structures).
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">2. Universal Disability Mainstreaming and Compliance Auditing</h3>
              <p>
                A key pillar of our consultancy is fostering complete social inclusion. Our widely downloaded <em>UN CRPD Inclusive Physical &amp; Digital Accessibility Checklist</em> represents the gold standard for institutional audit tools in East Africa. Designed under the supervision of leading inclusion consultants and certified by our board, this 45-point checklist translates the legal mandates of the <strong>United Nations Convention on the Rights of Persons with Disabilities (UN CRPD)</strong> and the <strong>Kenya Persons with Disabilities Act</strong> into actionable items. It guides organizations through assessing:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>Physical Infrastructure:</strong> Architectural adjustments, tactile paving, wheelchair ramp gradients, sanitary facility configurations, and clear directional signage.
                </li>
                <li>
                  <strong>Digital Accessibility:</strong> Alignment of web portals and mobile applications with Web Content Accessibility Guidelines (WCAG 2.1 AA Standards), including screen reader compatibility, text alternatives, and visual contrast ratios.
                </li>
                <li>
                  <strong>Operational Inclusion:</strong> Assessing human resource policy documents, inclusive recruitment protocols, workplace reasonable accommodation setups, and representative governance models.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">3. Strategic Planning &amp; Capacity Development</h3>
              <p>
                Sustainable development is only possible when local institutions are strong and compliant. Our <em>CSOs Compliance Manual</em> and <em>Organization of Persons with Disabilities (OPD) Capacity Index</em> are diagnostic assessment tools that allow local non-profits to evaluate their internal systems. By checking governance compliance against statutory guidelines like the Kenyan Companies Act (Cap 499), organizations can self-diagnose administrative gaps, operational inefficiencies, or financial control vulnerabilities. Applying these indices helps civil society groups build robust internal control environments, which in turn enhances their creditability and unlocks strategic long-term funding streams from international development donors.
              </p>
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
