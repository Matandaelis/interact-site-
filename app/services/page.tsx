"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { 
  Sparkles, 
  Layers, 
  ArrowRight, 
  FileText, 
  BarChart3, 
  CheckCircle2, 
  BookOpenCheck,
  ShieldCheck,
  Users2,
  Cpu
} from "lucide-react";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const jsonLdServices = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Inter-Act Research Associates Core Consulting Pillars",
    "provider": {
      "@type": "Organization",
      "name": "Inter-Act Research Associates",
      "url": "https://interactresearch.org"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Advisory Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monitoring, Evaluation, Accountability, and Learning (MEAL)",
            "description": "Baseline, midline, and endline evaluations based on OECD-DAC standards and quantitative/qualitative data triangulation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Disability Mainstreaming & Accessibility Audits",
            "description": "Formative and summative audits for physical and digital inclusion in line with UN CRPD and national legislations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Proposal Writing & Resource Mobilization",
            "description": "Professional technical bid drafting and logic modeling for major international donor solicitations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Socio-Economic & Baseline Field Surveys",
            "description": "Household socio-demographic surveys using mobile CAPI technologies with real-time GPS validation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Planning & Diagnostics",
            "description": "Organizational diagnostics and drafting of 5-year strategic plans for government and civil society entities."
          }
        }
      ]
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
      />
      <Navbar />

      <Breadcrumb items={[{ label: "Technical Practice Services" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-950/80 to-blue-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <Layers className="w-4 h-4" /> Technical Advisory & Consulting Services
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Core Technical Pillars & Methodologies
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
              Inter-Act Research Associates provides comprehensive consultancy services spanning Monitoring & Evaluation, Proposal Development, Disability Mainstreaming, Social Surveys, and Strategic Planning.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/studio"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Launch AI M&E Framework Studio
              </Link>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                Submit RFP / Proposal Request
              </button>
            </div>
          </div>
        </section>

        {/* Detailed Services Component */}
        <ServicesSection 
          onSelectServiceForStudio={() => {}} 
          onOpenConsultation={() => setModalOpen(true)} 
        />

        {/* Service Delivery Standards Banner */}
        <section className="py-16 bg-slate-900/60 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Quality Assurance</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Our 4 Service Guarantees</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-blue-400 font-mono text-xl font-bold block">01. Delivery</span>
                <h3 className="text-white font-bold text-base">Methodological Rigor</h3>
                <p className="text-slate-400 text-xs">Standardized OECD-DAC evaluation criteria, mixed-method triangulated data collection, and robust ethical oversight.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-blue-400 font-mono text-xl font-bold block">02. Quality</span>
                <h3 className="text-white font-bold text-base">Peer-Reviewed Outputs</h3>
                <p className="text-slate-400 text-xs">All draft reports undergo internal review by our Scientific Research Committee prior to client submission.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-blue-400 font-mono text-xl font-bold block">03. Timeliness</span>
                <h3 className="text-white font-bold text-base">On-Time Execution</h3>
                <p className="text-slate-400 text-xs">Strict adherence to project milestones, field logistics schedules, and donor reporting deadlines.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-blue-400 font-mono text-xl font-bold block">04. Value</span>
                <h3 className="text-white font-bold text-base">Competitive Costing</h3>
                <p className="text-slate-400 text-xs">Maximizing impact per budget unit with cost-effective field enumerator networks across East Africa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep, Informative AEO & SEO Consulting Methodologies Section */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Technical Methodologies</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Consulting Frameworks &amp; Operational Methodologies</h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 leading-relaxed">
              <p>
                To provide institutional clarity and scientific validity to our clients, <strong>Inter-Act Research Associates (IARA)</strong> implements standardized, rigorous methodologies across all consulting assignments. Under the leadership of <strong>Executive Director Kennedy S. Okumu</strong> and backed by our internal <strong>Scientific Research Committee</strong>, we translate complex qualitative and quantitative indicators into clear, actionable developmental roadmaps.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">1. Monitoring &amp; Evaluation: Triangulation and OECD-DAC Criteria</h3>
              <p>
                Our Monitoring, Evaluation, Accountability, and Learning (MEAL) services are built on the foundation of <strong>triangulation</strong>—a statistical approach that integrates quantitative household surveys, key informant interviews (KIIs), and focus group discussions (FGDs) to cross-verify findings. IARA&apos;s evaluation frameworks align with the six standard <strong>OECD-DAC criteria</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>Relevance:</strong> Assessing whether project objectives align with local beneficiary needs, national policies, and donor priorities.
                </li>
                <li>
                  <strong>Coherence:</strong> Evaluating how well the intervention fits alongside other sub-national and sectoral programs.
                </li>
                <li>
                  <strong>Effectiveness:</strong> Measuring the extent to which the project has achieved its intended outcomes and outputs.
                </li>
                <li>
                  <strong>Efficiency:</strong> Examining the relationship between financial inputs, physical resources, and project timelines to determine economic stewardship.
                </li>
                <li>
                  <strong>Impact:</strong> Identifying the positive or negative, intended or unintended, long-term transformational changes resulting from the intervention.
                </li>
                <li>
                  <strong>Sustainability:</strong> Evaluating whether the project&apos;s benefits are likely to continue after donor funding is withdrawn.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">2. Disability Inclusion Auditing: Aligned with the UN CRPD</h3>
              <p>
                Disability inclusion and accessibility audits cannot be mere check-the-box exercises. IARA operates with a deep commitment to the <strong>United Nations Convention on the Rights of Persons with Disabilities (UN CRPD)</strong> and local statutory acts (e.g., the Kenya Persons with Disabilities Act). Our audits combine physical assessments of administrative facilities, digital audits of web platforms (focusing on WCAG 2.1 compliance), and qualitative assessments of institutional policy documents. Our recommendations focus on practical adjustments, reasonable accommodation implementation, and staff capacity development to transition organizations toward complete, authentic social inclusion.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">3. Socio-Economic Surveys and Sampling Designs</h3>
              <p>
                For our field research and large-scale demographic surveys, we apply rigorous statistical sampling designs. Depending on the target universe and spatial boundaries, IARA utilizes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>Probability Sampling:</strong> Including stratified random sampling, cluster sampling, and multi-stage systematic sampling to minimize selection bias and ensure representative outcomes.
                </li>
                <li>
                  <strong>Non-Probability Sampling:</strong> Including purposive sampling and snowball sampling for hidden or highly specialized populations (such as commercial sex workers or specific Organizations of Persons with Disabilities).
                </li>
                <li>
                  <strong>Sample Size Calculations:</strong> Determined scientifically using standardized mathematical formulas (Cochran&apos;s or Yamane&apos;s) set at a 95% confidence interval and a 5% margin of error to guarantee statistical power.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">4. Scientific Peer Review &amp; Ethical Research Clearance</h3>
              <p>
                Ethical compliance and academic rigor are non-negotiable for all research studies published or conducted by IARA. Our research protocols strictly comply with national requirements from bodies like the <strong>National Commission for Science, Technology and Innovation (NACOSTI)</strong>. Before any field data collection begins, our Scientific Research Committee reviews the proposed methodology, surveys, and consent scripts to protect respondent confidentiality, ensure informed consent, and prevent distress or ethical breaches, particularly when engaging with vulnerable groups, children, or refugees.
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
