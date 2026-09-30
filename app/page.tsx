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
import Script from "next/script";
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
    "logo": "https://interactresearch.org/images/home-research-team.png",
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

  const jsonLdProfessionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://interactresearch.org/#professional-service",
    "name": "Inter-Act Research Associates",
    "alternateName": "IARA",
    "description": "Development consulting in East Africa, delivered through independent development intelligence, monitoring and evaluation, applied social research, and inclusive development advisory.",
    "url": "https://interactresearch.org",
    "telephone": "+254702103653",
    "email": "interactresearchassociates@gmail.com",
    "image": "https://interactresearch.org/images/home-research-team.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unipen Plaza 1st Floor Room 4, Argwings Kodhek Road",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "areaServed": ["Kenya", "Tanzania", "Uganda", "Rwanda"].map((name) => ({ "@type": "Country", name })),
    "knowsAbout": [
      "Development Consulting in East Africa",
      "Monitoring & Evaluation (M&E) Specialists Nairobi",
      "Independent Development Intelligence",
      "Methodological Reference Guidelines & Lexicon Standards",
      "Applied Social Research",
      "Inclusive Development"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "East Africa development consulting services",
      "itemListElement": [
        "Development Consulting",
        "Monitoring & Evaluation (M&E)",
        "Applied Social Research",
        "Inclusive Development"
      ].map((name, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": { "@type": "Service", name }
      }))
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I submit a Request for Proposal (RFP) or Terms of Reference (ToR)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can submit your RFP, EOI (Expression of Interest), or ToR directly through our secure online consultation form on this page, or send documentation via email to interactresearchassociates@gmail.com. Our Executive Director, Kennedy S. Okumu, and the senior technical bid team acknowledge all submissions within 12–24 business hours and provide detailed technical and financial proposals promptly."
        }
      },
      {
        "@type": "Question",
        "name": "Which geographical areas and countries in East Africa does IARA cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate across all 47 counties of Kenya (including remote Arid and Semi-Arid Lands like Garissa, Turkana, Mandera, and Wajir), as well as regional hubs in Uganda (Kampala, Gulu, Arua), Tanzania (Dar es Salaam, Arusha, Dodoma), and Rwanda (Kigali). Our network includes over 420 certified, multi-lingual field enumerators fluent in Swahili, Somali, Oromo, Dinka, Luganda, French, and English, allowing for culturally respectful and rapid field data collection."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical turnaround timeline for a baseline survey or impact evaluation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comprehensive research assignments (baseline, mid-term, endline, or strategy development) typically span 3 to 8 weeks from inception to final report presentation. This includes 3–7 business days for Inception & Tool Design, 7–14 business days for Field Enumerator Training & Data Collection, and 7–10 business days for Data Cleaning, Analysis & Draft Report."
        }
      },
      {
        "@type": "Question",
        "name": "How does IARA ensure data ethics, participant consent, and data protection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All IARA research studies strictly comply with national and international data privacy protocols, including the Kenya Data Protection Act (2019) and UN CRPD ethics frameworks. We mandate informed consent forms (available in local languages, Braille, and plain language format), implement anonymized data encryption on ODK/KoboToolbox servers, and enforce strict child safeguarding and gender-sensitive protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Is Inter-Act Research Associates formally registered and compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Inter-Act Research Associates is fully incorporated in Kenya under the Company's Act (Cap 499 Section 4) (Registration No. 210365). We hold valid tax compliance certificates, regional operational licenses, and adhere strictly to statutory governance standards required by international development donors."
        }
      }
    ]
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[var(--paper)] text-[var(--ink)] font-sans selection:bg-[var(--coral)] selection:text-white">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessionalService) }}
      />
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Navbar />

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--coral)] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white">
        Skip to main content
      </a>

      <main id="main-content" className="flex-1">
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
        <section className="border-y border-[var(--line)] bg-[#ebe5da] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral-deep)]">Corporate profile</span>
              <h2 className="text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">Explore Inter-Act Research Associates</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                href="/about"
                className="group flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--coral)] hover:shadow-md"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border border-[var(--coral)]/30 bg-[var(--coral)]/10 text-[var(--coral-deep)]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="flex items-center justify-between text-sm font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--coral-deep)]">
                  Who We Are
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs leading-5 text-[var(--ink-muted)]">Formed 2013, Cap499 Cap registration, leadership & governance structure.</p>
              </Link>

              <Link 
                href="/services"
                className="group flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--coral)] hover:shadow-md"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border border-[var(--coral)]/30 bg-[var(--coral)]/10 text-[var(--coral-deep)]">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="flex items-center justify-between text-sm font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--coral-deep)]">
                  Services & Pillars
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs leading-5 text-[var(--ink-muted)]">M&E, Disability Mainstreaming, Proposal Writing, Capacity Assessments.</p>
              </Link>

              <Link 
                href="/portfolio"
                className="group flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--coral)] hover:shadow-md"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border border-[var(--coral)]/30 bg-[var(--coral)]/10 text-[var(--coral-deep)]">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h3 className="flex items-center justify-between text-sm font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--coral-deep)]">
                  Past Assignments (18)
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs leading-5 text-[var(--ink-muted)]">USAID, UN Women, DRF, VSO, Government Ministry consulting track record.</p>
              </Link>

              <Link 
                href="/studio"
                className="group flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--coral)] hover:shadow-md"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border border-[var(--coral)]/30 bg-[var(--coral)]/10 text-[var(--coral-deep)]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="flex items-center justify-between text-sm font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--coral-deep)]">
                  AI M&E Studio
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs leading-5 text-[var(--ink-muted)]">Generate Theory of Change, Indicator Matrix, and Risk Registers.</p>
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
        <section className="border-t border-[var(--line)] bg-[var(--ink)] py-20 text-[var(--paper)]">
          <div className="mx-auto flex max-w-4xl flex-col gap-8 px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-3 border-l-2 border-[var(--coral)] pl-5">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--coral-soft)]">Institutional credence</span>
              <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">East Africa&apos;s leading independent development and M&amp;E consultancy</h2>
            </div>

            <div className="prose prose-invert max-w-none text-sm leading-7 text-[var(--paper-muted)] sm:text-base">
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
                Over our history, IARA has served as a trusted consulting partner for regional government ministries, prominent non-governmental organizations (NGOs), and major international donor agencies. Our past performance portfolio includes 18+ high-level advisory assignments with organizations such as <strong>USAID, UN Women, the Disability Rights Fund (DRF), Voluntary Service Overseas (VSO), and Light for the World</strong>. Our commitment remains firm: to provide the empirical evidence and strategic insights that allow development partners to maximize their impact, build local institutional capacity, and foster inclusive, sustainable societies across East Africa.
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
