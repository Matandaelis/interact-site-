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

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />

      <Breadcrumb items={[{ label: "Technical Practice Services" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-slate-950/80 to-cyan-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
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
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Launch AI M&E Framework Studio
              </Link>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
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
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Quality Assurance</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Our 4 Service Guarantees</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-mono text-xl font-bold block">01. Delivery</span>
                <h3 className="text-white font-bold text-base">Methodological Rigor</h3>
                <p className="text-slate-400 text-xs">Standardized OECD-DAC evaluation criteria, mixed-method triangulated data collection, and robust ethical oversight.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-teal-400 font-mono text-xl font-bold block">02. Quality</span>
                <h3 className="text-white font-bold text-base">Peer-Reviewed Outputs</h3>
                <p className="text-slate-400 text-xs">All draft reports undergo internal review by our Scientific Research Committee prior to client submission.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-cyan-400 font-mono text-xl font-bold block">03. Timeliness</span>
                <h3 className="text-white font-bold text-base">On-Time Execution</h3>
                <p className="text-slate-400 text-xs">Strict adherence to project milestones, field logistics schedules, and donor reporting deadlines.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-mono text-xl font-bold block">04. Value</span>
                <h3 className="text-white font-bold text-base">Competitive Costing</h3>
                <p className="text-slate-400 text-xs">Maximizing impact per budget unit with cost-effective field enumerator networks across East Africa.</p>
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
