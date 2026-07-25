"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { PortfolioAssignment, portfolioAssignments } from "@/lib/portfolioData";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  Layers, 
  Target, 
  Microscope, 
  Award, 
  TrendingUp, 
  Users, 
  Wrench,
  Download,
  Share2
} from "lucide-react";

interface PortfolioDetailClientProps {
  assignment: PortfolioAssignment;
}

export default function PortfolioDetailClient({ assignment }: PortfolioDetailClientProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <ScrollProgressBar />
      <Navbar />

      <Breadcrumb 
        items={[
          { label: "Past Assignments", href: "/portfolio" },
          { label: assignment.organization }
        ]} 
      />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 py-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-transparent to-cyan-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" /> {assignment.categoryLabel}
              </div>

              <Link 
                href="/portfolio" 
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Track Record Catalog (17)
              </Link>
            </div>

            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                Contracting Partner: {assignment.organization}
              </span>
              
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {assignment.title}
              </h1>
            </div>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <strong>Duration:</strong> {assignment.date}
              </span>

              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <strong>Location:</strong> {assignment.location}
              </span>

              <span className="flex items-center gap-1.5 font-medium bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                <Layers className="w-4 h-4 text-emerald-400" />
                <strong>Scale:</strong> {assignment.scopeScale}
              </span>
            </div>

            {/* Executive Summary Box */}
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
              {assignment.description}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Request Similar Proposal / RFP
              </button>

              <Link
                href="/studio"
                className="bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold text-xs px-6 py-3.5 rounded-xl transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Build Framework in Studio AI
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Report Content Body */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Column (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* 1. Background & Context */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                  <div className="border-b border-slate-800 pb-3 flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Mandate & Context</span>
                      <h2 className="text-xl font-bold text-white">Project Background & Rationale</h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {assignment.backgroundContext}
                  </p>
                </div>

                {/* 2. Key Assignment Objectives */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                  <div className="border-b border-slate-800 pb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Terms of Reference</span>
                      <h2 className="text-xl font-bold text-white">Core Evaluation & Study Objectives</h2>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                    {assignment.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                        <span className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Research Methodology & Design */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div className="border-b border-slate-800 pb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">Scientific Rigor</span>
                      <h2 className="text-xl font-bold text-white">Methodological Architecture & Sampling</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {assignment.methodologyUsed.map((m, idx) => (
                      <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                        <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          {m.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed pl-6">
                          {m.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Empirical Findings */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                  <div className="border-b border-slate-800 pb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Evidence Base</span>
                      <h2 className="text-xl font-bold text-white">Key Empirical Findings & Insights</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {assignment.keyFindings.map((finding, idx) => (
                      <div key={idx} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-3">
                        <span className="text-emerald-400 font-bold font-mono shrink-0">✦</span>
                        <span>{finding}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Policy Impact & Recommendations */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                  <div className="border-b border-slate-800 pb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Actionable Outcomes</span>
                      <h2 className="text-xl font-bold text-white">Recommendations & Strategic Impact</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {assignment.recommendationsAndImpact.map((rec, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-emerald-950/40 to-slate-950 p-4 rounded-xl border border-emerald-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. OECD Criteria Evaluation Scores (If Available) */}
                {assignment.oecdCriteria && assignment.oecdCriteria.length > 0 && (
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">OECD-DAC Performance Scorecard</span>
                      <h2 className="text-xl font-bold text-white">Evaluation Scorecard</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {assignment.oecdCriteria.map((oecd, idx) => (
                        <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white uppercase">{oecd.criterion}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              {oecd.rating}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {oecd.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Deliverables Submitted */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Tangible Outputs</span>
                    <h2 className="text-xl font-bold text-white">Deliverables Submitted to Client</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    {assignment.deliverables.map((deliv, idx) => (
                      <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-medium">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Column (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Contract Summary Box */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl sticky top-24">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Contract Overview</span>
                    <h3 className="text-lg font-bold text-white">Assignment Summary</h3>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-slate-400 font-mono block text-[10px] uppercase">Client Organization</span>
                      <span className="text-white font-bold text-sm">{assignment.organization}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-mono block text-[10px] uppercase">Practice Classification</span>
                      <span className="text-emerald-400 font-semibold">{assignment.categoryLabel}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-mono block text-[10px] uppercase">Project Period</span>
                      <span className="text-slate-200">{assignment.date}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-mono block text-[10px] uppercase">Geographic Scope</span>
                      <span className="text-slate-200">{assignment.location}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-mono block text-[10px] uppercase">Consulting Team Staffing</span>
                      <span className="text-slate-300 leading-relaxed block mt-0.5">{assignment.teamComposition}</span>
                    </div>
                  </div>

                  {/* Instrument Stack */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Software & Tools Used</span>
                    <div className="flex flex-wrap gap-1.5">
                      {assignment.toolsUsed.map((tool, idx) => (
                        <span key={idx} className="bg-slate-950 text-slate-300 text-[11px] px-2.5 py-1 rounded-lg border border-slate-800 font-mono">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Request Proposal Sidebar CTA */}
                  <div className="bg-gradient-to-br from-emerald-950 to-slate-950 border border-emerald-500/40 rounded-xl p-5 text-center space-y-3 pt-4">
                    <h4 className="text-white font-bold text-sm">Need a Similar Study Executed?</h4>
                    <p className="text-xs text-slate-300">
                      Submit your RFP or Terms of Reference (TOR) for a custom technical proposal and budget.
                    </p>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Submit Technical RFP
                    </button>
                  </div>

                  {/* Other Portfolio Items Navigation */}
                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase block">Other Key Assignments:</span>
                    <ul className="space-y-1.5 text-xs">
                      {portfolioAssignments.filter(a => a.id !== assignment.id).slice(0, 5).map((a) => (
                        <li key={a.id}>
                          <Link href={`/portfolio/${a.id}`} className="text-slate-300 hover:text-emerald-400 flex items-center justify-between py-1 transition-colors group">
                            <span className="truncate max-w-[200px] text-[11px]">{a.organization}</span>
                            <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 shrink-0" />
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
