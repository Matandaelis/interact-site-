"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { 
  BarChart3, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Filter, 
  Globe2, 
  Building2 
} from "lucide-react";

export default function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const jsonLdPortfolio = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "IARA Project Portfolio and Past Assignments Track Record",
    "description": "Comprehensive catalog of 18 successful development consulting, disability mainstreaming, and Monitoring & Evaluation (M&E) assignments conducted by Inter-Act Research Associates across East Africa.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPortfolio) }}
      />
      <Navbar />

      <Breadcrumb items={[{ label: "Past Assignments & Track Record" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="page-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-950/80 to-blue-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <BarChart3 className="w-4 h-4" /> Track Record & Institutional Experience
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Past Assignments & Case Studies (18)
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
              Explore our proven track record of 18 major consulting assignments executed for international NGOs, Government Ministries, UN agencies, and Disability Rights networks across East Africa.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Request Specific Case Study or Reference
              </button>
            </div>
          </div>
        </section>

        {/* Portfolio Section Component */}
        <PortfolioSection />

        {/* Deep, Informative AEO & SEO Portfolio Track Record Technical Section */}
        <section className="muted-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Performance Verification</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Project Evaluation Protocols &amp; Historical Track Record</h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 leading-relaxed">
              <p>
                To maintain complete institutional accountability and scientific validity across our consulting footprint, <strong>Inter-Act Research Associates (IARA)</strong> structures every past assignment around a rigorous, standardized Quality Assurance Technical Matrix (QATM). Established in <strong>2013</strong> and registered under the <strong>Kenyan Company&apos;s Act (Cap 499 Section 4)</strong>, IARA operates as an independent, non-partisan development advisory firm. Our historical portfolio spans over a decade of providing high-impact technical services, monitoring, evaluation, disability mainstreaming, and social research under the direction of <strong>Executive Director Kennedy S. Okumu</strong> (see our full <Link href="/about" className="text-blue-400 hover:underline font-semibold">institutional profile and company history</Link>).
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">1. Scientific Integrity and Peer-Review Oversight</h3>
              <p>
                Every case study, baseline survey, and endline evaluation published in our portfolio represents a structured process of triangulation. Before any field data collection begins, our internal <strong>Scientific Research Committee</strong> peer-reviews the proposed sampling frames, indicator dictionaries, and statistical models. We design our surveys utilizing standardized formulas—such as Cochran&apos;s or Yamane&apos;s—at a 95% confidence interval and a 5% margin of error to guarantee statistical power. This rigorous scientific oversight ensures that the empirical findings we deliver to our development partners are completely reproducible, bias-free, and representative of the target communities.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">2. Inclusive Methodologies &amp; Lived-Experience Co-Auditing</h3>
              <p>
                A defining feature of IARA&apos;s past performance, particularly in disability mainstreaming and physical accessibility audits, is our commit to authentic participation. In line with the <strong>United Nations Convention on the Rights of Persons with Disabilities (UN CRPD)</strong> and local legislative mandates (learn more about our specialized <Link href="/services" className="text-blue-400 hover:underline font-semibold">disability mainstreaming and accessibility audit services</Link>), we do not view persons with disabilities as mere subjects of research. Our accessibility audits—such as those executed in schools and health facilities across Kisumu County—partner directly with certified user co-auditors. This means that individuals who use wheelchairs, navigate with white canes, or communicate via sign language participate as active members of our consulting teams. Furthermore, all household surveys incorporate the <strong>Washington Group Short Set of Questions on Disability</strong>, allowing us to accurately disaggregate socio-demographic outcomes by functional domains.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">3. Field Logistics and Trans-Boundary Capabilities</h3>
              <p>
                Development challenges do not respect national borders. Our portfolio reflects a wide geographical mandate covering six East African partner nations: <strong>Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Somalia</strong> (explore our interactive <Link href="/regional" className="text-blue-400 hover:underline font-semibold">East Africa regional presence maps</Link>). From our primary administrative office at <strong>Unipen Plaza, 1st Floor, Room 4, Argwings Kodhek Road, Hurlingham, Nairobi</strong>, we manage an active roster of over <strong>400 certified multilingual field enumerators</strong>. This allows IARA to deploy rapid-response field teams to both high-density urban corridors and complex Arid and Semi-Arid Lands (ASALs), including Marsabit, Wajir, and Karamoja. Our localized entry protocols, community consultations, and translation systems ensure that surveys are conducted safely, ethically, and with deep respect for local cultural norms.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">4. Mobile Technology and Real-Time Verification</h3>
              <p>
                To eliminate data fabrication and manual entry errors, IARA is committed to the complete digitization of our field operations. All case studies featured in our past performance database utilized Computer-Assisted Personal Interviewing (CAPI) tools, primarily <strong>KoboToolbox and ODK (Open Data Kit)</strong>. This digital foundation enables our data analysts in Nairobi to implement real-time quality assurance protocols, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>GPS Geofencing:</strong> Ensuring that interviews are conducted at the exact randomized household coordinates outlined in our sampling design.
                </li>
                <li>
                  <strong>Audio Audit Sub-Sampling:</strong> Capturing anonymous, randomized, 10-second audio snippets of interviews to confirm that survey questions are being read precisely and in the correct local translation.
                </li>
                <li>
                  <strong>Timestamp Validation:</strong> Automatically tracking the duration of each survey module to flag records that have been rushed or completed unrealistically fast.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">5. Respecting Ethical Clearances and National Registrations</h3>
              <p>
                All research, baseline studies, and academic evaluations documented in our track record comply fully with national ethical standards. We secure active research licenses from national commissions, including the <strong>National Commission for Science, Technology and Innovation (NACOSTI)</strong> in Kenya, and matching administrative bodies across Uganda, Tanzania, and Rwanda. This guarantees that respondent confidentiality is strictly protected, informed consent is systematically gathered, and the institutional reputations of our clients are fully shielded throughout the project lifecycle.
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
