"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FrameworkStudio from "@/components/FrameworkStudio";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import { Sparkles, Cpu, Layers, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StudioPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const jsonLdStudio = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "IARA AI M&E and Strategic Framework Studio",
    "description": "An interactive digital studio designed by Inter-Act Research Associates to synthesize customized Theory of Change, Indicator Matrix, and Risk Register frameworks for development projects across East Africa.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires HTML5 compatible browser",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdStudio) }}
      />
      <Navbar />

      <Breadcrumb items={[{ label: "AI M&E Framework Studio" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="page-hero relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> AI M&E & Strategic Framework Studio
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Interactive Logic Model & Indicator Generator
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                  Synthesize customized Theory of Change, Indicator Matrix, and Risk Register for your development project or strategic plan using IARA&apos;s AI advisory engine.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-slate-900 hover:bg-slate-800 text-blue-400 border border-blue-500/40 text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Request Full Technical Proposal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Framework Studio Tool */}
        <FrameworkStudio initialServiceId="me" />

        {/* Deep, Comprehensive Technical Guide Section for AEO Optimization */}
        <section className="muted-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Technical Reference</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">The Science of Logical Frameworks &amp; Causal Pathways</h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 leading-relaxed">
              <p>
                In the sector of international development and public policy advisory, project success is directly correlated with the logical alignment of its foundational planning instruments. <strong>Inter-Act Research Associates (IARA)</strong>, established in <strong>2013</strong> under the <strong>Kenyan Company&apos;s Act (Cap 499 Section 4)</strong> and led by <strong>Executive Director Kennedy S. Okumu</strong>, offers this interactive digital studio to help project managers, researchers, and strategic planners align their project goals with international standards. Our advisory engine is built on years of fieldwork in <strong>Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Somalia</strong>, bridging the gap between high-level donor objectives and practical community-level realities.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">1. Understanding the Causal Architecture of Theory of Change</h3>
              <p>
                A Theory of Change (ToC) is not merely a visual diagram; it is an explicit, evidence-based statement of the causal pathways through which a project intends to generate its long-term impact. Unlike standard rigid linear frameworks, a robust ToC recognizes that social change is complex and non-linear. It begins by mapping the long-term impact and then retro-maps the required intermediate preconditions or outcomes. For each causal link, IARA&apos;s methodology insists on defining clear, testable assumptions. By specifying the environmental, political, and socio-economic factors required for an activity to translate into a sustainable outcome, we ensure that projects are prepared for unexpected field variables, and our <strong>Scientific Research Committee</strong> actively peer-reviews these pathways to ensure empirical validity.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">2. Formulating SMART Indicators with Disaggregation Standards</h3>
              <p>
                An indicator is a diagnostic tool that measures change over time. Many development projects fail to capture their true impact because they rely on vague, poorly defined metrics. A true indicator must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Furthermore, modern donor guidelines (including USAID, EU, and UN frameworks) require comprehensive data disaggregation. For projects focused on social inclusion or GESI (Gender, Equality, and Social Inclusion), indicators must be disaggregated by gender, age, and disability status. IARA incorporates the <strong>Washington Group Short Set of Questions on Disability</strong> to ensure that disabled populations are accurately represented. For example, rather than simply measuring &quot;number of beneficiaries trained,&quot; a high-performance indicator measures the &quot;percentage of women and youth with sensory impairments reporting increased household decision-making power following assistive technology procurement.&quot;
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">3. Structure of the Logical Framework (LogFrame)</h3>
              <p>
                The Logical Framework (LogFrame) is a classic 4x4 matrix that synthesizes the project strategy, performance indicators, sources of verification, and core assumptions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>Goal / Impact:</strong> The high-level, long-term societal or economic change to which the project contributes (e.g., &quot;Reducing maternal mortality rates in Kisumu County&quot;).
                </li>
                <li>
                  <strong>Outcomes:</strong> The specific changes in behavior, institutional performance, or access achieved by the end of the project (e.g., &quot;Increased utilization of accessible obstetric facilities by pregnant women with physical disabilities&quot;).
                </li>
                <li>
                  <strong>Outputs:</strong> The tangible products, capital goods, or services delivered directly by project activities (e.g., &quot;8 health facilities retrofitted with Universal Design ramps and adjustable delivery tables&quot;).
                </li>
                <li>
                  <strong>Activities:</strong> The operational tasks or interventions executed to generate the outputs (e.g., &quot;Conducting accessibility audits and engineering training for County Public Works officials&quot;).
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">4. Constructing a Proactive Project Risk Register</h3>
              <p>
                No development project operates in a vacuum. Political instability, extreme weather events, and community-level resistance can disrupt even the most meticulously planned interventions. A Risk Register is a critical management tool that identifies potential threats, estimates their likelihood and impact severity, and defines concrete, costed mitigation strategies. Our interactive studio allows users to synthesize a dynamic risk matrix, ensuring that project teams can proactively establish early-warning systems and allocate contingency budgets to safeguard the integrity of their interventions.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">5. Aligning with Global Evaluation Standards</h3>
              <p>
                By utilizing this interactive studio, practitioners align their frameworks with international best practices, including the <strong>OECD-DAC evaluation guidelines</strong>. Whether you are preparing a proposal for a major bilateral donor or designing an internal strategic plan, using precise, standardized terminology ensures your technical proposals stand out for their logical coherence, scientific rigor, and compliance with the highest ethical and administrative requirements across the East African region.
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
