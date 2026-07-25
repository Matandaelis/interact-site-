"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FrameworkStudio from "@/components/FrameworkStudio";
import RegionalPresence from "@/components/RegionalPresence";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ConsultationForm from "@/components/ConsultationForm";
import Link from "next/link";
import { 
  Building2, 
  Layers, 
  BarChart3, 
  Sparkles, 
  Globe2, 
  BookOpenCheck, 
  ArrowRight, 
  FileText,
  ShieldCheck,
  CheckCircle2,
  Users
} from "lucide-react";

export default function Home() {
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);

  const jsonLdHome = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Inter-Act Research Associates",
    "url": "https://interactresearch.org",
    "logo": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    "foundingDate": "2013",
    "founders": [
      {
        "@type": "Person",
        "name": "Kennedy S. Okumu"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unipen Plaza, 1st Floor, Room 4, Argwings Kodhek Road, Hurlingham",
      "addressLocality": "Nairobi",
      "addressCountry": "Kenya"
    },
    "sameAs": [
      "https://twitter.com/IAR_Associates",
      "https://linkedin.com/company/inter-act-research-associates"
    ]
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Main Hero Section */}
        <Hero 
          onExploreServices={() => {
            const elem = document.getElementById("featured-services");
            if (elem) elem.scrollIntoView({ behavior: "smooth" });
          }} 
          onOpenStudio={() => {
            const elem = document.getElementById("ai-studio-preview");
            if (elem) elem.scrollIntoView({ behavior: "smooth" });
          }} 
          onOpenConsultation={() => setConsultationModalOpen(true)} 
        />

        {/* Quick Multi-Page Route Grid Portal */}
        <section className="py-12 bg-slate-900/90 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Portal Directory</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">Explore Inter-Act Research Associates</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                href="/about"
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all group space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors flex items-center justify-between">
                  Who We Are
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-xs">Formed 2013, Cap499 Cap registration, leadership & governance structure.</p>
              </Link>

              <Link 
                href="/services"
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all group space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors flex items-center justify-between">
                  Services & Pillars
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-xs">M&E, Disability Mainstreaming, Proposal Writing, Capacity Assessments.</p>
              </Link>

              <Link 
                href="/portfolio"
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all group space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors flex items-center justify-between">
                  Past Assignments (17)
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-xs">USAID, UN Women, DRF, VSO, Government Ministry consulting track record.</p>
              </Link>

              <Link 
                href="/studio"
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all group space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors flex items-center justify-between">
                  AI M&E Studio
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-xs">Generate Theory of Change, Indicator Matrix, and Risk Registers.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Section Snippet: About */}
        <AboutSection onOpenConsultation={() => setConsultationModalOpen(true)} />

        {/* Section Snippet: Services */}
        <div id="featured-services">
          <ServicesSection 
            onSelectServiceForStudio={() => {}} 
            onOpenConsultation={() => setConsultationModalOpen(true)} 
          />
        </div>

        {/* Section Snippet: AI Framework Studio */}
        <div id="ai-studio-preview">
          <FrameworkStudio initialServiceId="me" />
        </div>

        {/* Section Snippet: Regional Presence */}
        <RegionalPresence />

        {/* Section Snippet: Portfolio Case Studies */}
        <PortfolioSection />

        {/* Section Snippet: Client Testimonials & Endorsements */}
        <TestimonialsSection onOpenConsultation={() => setConsultationModalOpen(true)} />

        {/* Section Snippet: Toolkits & Publications */}
        <ResourcesSection />

        {/* Comprehensive AEO & SEO Overview Section */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Institutional Credence</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">East Africa&apos;s Leading Independent Development &amp; M&amp;E Consultancy</h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 leading-relaxed">
              <p>
                In the complex, fast-evolving landscape of international development, empirical clarity is the prerequisite for sustainable impact. Established in <strong>2013</strong> under the <strong>Kenyan Company&apos;s Act (Cap 499 Section 4)</strong>, <strong>Inter-Act Research Associates (IARA)</strong> has built a stellar track record as an independent, non-partisan development advisory and social research firm. Headquartered at <strong>Unipen Plaza, 1st Floor, Room 4, Argwings Kodhek Road, Hurlingham, Nairobi</strong>, our operations are led by <strong>Executive Director Kennedy S. Okumu</strong> and guided by our elite <strong>Scientific Research Committee</strong>.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">1. Our Institutional Mission &amp; Regional Context</h3>
              <p>
                IARA was founded to bridge the critical gap between raw academic research and practical, field-level development interventions. Over the past decade, we have supported sub-national, national, and trans-boundary projects across six East African nations: <strong>Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Somalia</strong>. Our team understands that the success of development projects—whether in public health, GESI (Gender, Equality, and Social Inclusion), climate-smart agriculture, or disability inclusion—depends on context-sensitive research, rigorous statistical design, and authentic stakeholder ownership.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">2. Rigorous Scientific Research &amp; Quality Oversight</h3>
              <p>
                To maintain the highest levels of scientific validity, IARA does not rely on standardized, off-the-shelf survey formats. All our research designs, baseline indicators, and sampling methodologies undergo rigorous peer review by our <strong>Scientific Research Committee</strong> prior to launching fieldwork. Our statisticians formulate robust sample size designs utilizing mathematical models (such as Cochran or Yamane formulae) to achieve a 95% confidence level and 5% margin of error. We are committed to data integrity, utilizing mobile Computer-Assisted Personal Interviewing (CAPI) tools like <strong>KoboToolbox and ODK</strong> with automated GPS geofencing and audio audits to ensure complete validity.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">3. Universal Accessibility and Ethical Standards</h3>
              <p>
                At IARA, inclusion is a foundational value. We are regional pioneers in conducting physical and digital accessibility audits aligned with the <strong>United Nations Convention on the Rights of Persons with Disabilities (UN CRPD)</strong> and the <strong>Kenya Persons with Disabilities Act</strong>. Furthermore, we ensure all fieldwork complies with ethical clearances from national commissions, including the <strong>National Commission for Science, Technology and Innovation (NACOSTI)</strong>, securing informed consent, protecting participant confidentiality, and utilizing gender-balanced, multi-lingual field teams.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">4. A Trusted Partner for Global Development Donors</h3>
              <p>
                Over our history, IARA has served as a trusted consulting partner for regional government ministries, prominent non-governmental organizations (NGOs), and major international donor agencies. Our past performance portfolio includes 17+ high-level advisory assignments with organizations such as <strong>USAID, UN Women, the Disability Rights Fund (DRF), Voluntary Service Overseas (VSO), and Light for the World</strong>. Our commitment remains firm: to provide the empirical evidence and strategic insights that allow development partners to maximize their impact, build local institutional capacity, and foster inclusive, sustainable societies across East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Section Snippet: Consultation & RFP Request */}
        <ConsultationForm />
      </main>

      <Footer />

      {consultationModalOpen && (
        <ConsultationForm 
          isOpenModal={true} 
          onCloseModal={() => setConsultationModalOpen(false)} 
        />
      )}
    </div>
  );
}
