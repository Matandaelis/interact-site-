"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BarChart3, 
  Target, 
  CheckCircle2, 
  Award, 
  Layers, 
  Users2, 
  Globe2,
  Sparkles,
  ShieldCheck,
  Building2
} from "lucide-react";

interface HeroProps {
  onExploreServices: () => void;
  onOpenStudio: () => void;
  onOpenConsultation: () => void;
}

export default function Hero({ onExploreServices, onOpenStudio, onOpenConsultation }: HeroProps) {
  const stats = [
    { value: "2013", label: "Formed in Nairobi, Kenya", icon: ShieldCheck },
    { value: "17+", label: "Key Regional Assignments", icon: BarChart3 },
    { value: "4", label: "East Africa Member States", icon: Globe2 },
    { value: "100%", label: "Cap499 Sec 4 Compliant", icon: Award },
  ];

  const highlights = [
    "Project & Program M&E",
    "Disability Mainstreaming & Accessibility Audits",
    "Institutional Capacity Building",
    "Strategic Planning & Governance",
    "Social & Formative Research Surveys"
  ];

  return (
    <section id="hero-section" className="relative bg-slate-50 text-slate-900 pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-200">
      {/* Background Corporate Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-blue-50/60 via-slate-50 to-white pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Official Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Corporate Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-700 animate-pulse" />
              <span>Registered Consulting Firm (Cap 499 Section 4) • Formed 2013</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              INTER-ACT RESEARCH ASSOCIATES <span className="text-blue-900">(IARA)</span>
            </h1>

            {/* Subheadline & Philosophy */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl font-normal leading-relaxed">
              Delivering technical consulting, monitoring, evaluation, and research expertise across <strong className="text-slate-900 font-semibold">Kenya, Uganda, Tanzania, and Rwanda</strong>. Guided by our corporate mission: <em className="text-blue-900 font-medium">&ldquo;Doing good through practical solutions to transform lives.&rdquo;</em>
            </p>

            {/* Practice Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              {highlights.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-1.5 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-800" />
                  {item}
                </span>
              ))}
            </div>

            {/* Corporate Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                onClick={onOpenConsultation}
                className="bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 group"
              >
                <Building2 className="w-5 h-5 text-blue-200" />
                Request Proposal / RFP
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Layers className="w-4 h-4 text-blue-800" />
                Explore 12 Practice Areas
              </button>
            </div>

          </motion.div>

          {/* Right Column: Corporate Summary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl relative overflow-hidden space-y-5">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-900" />
              
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-800" />
                    Institutional Credentials
                  </h3>
                  <p className="text-xs text-slate-500">Non-Partisan, Non-Profit Consulting Firm</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-900 text-xs font-bold border border-blue-200">
                  Est. 2013
                </span>
              </div>

              {/* Featured Image: Black African Research Consultants */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-200 group">
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800" 
                  alt="IARA African research consultants and M&E associates in session"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white">
                  <span className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-700 text-white backdrop-blur-sm">
                    <Users2 className="w-3.5 h-3.5 text-blue-300" />
                    IARA Field Research Associates
                  </span>
                  <span className="bg-slate-900/90 px-2 py-0.5 rounded text-slate-200 text-[10px]">Nairobi, Kenya</span>
                </div>
              </div>

              {/* Core Operational Approach */}
              <div className="space-y-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="font-bold text-blue-900 uppercase tracking-wider block">
                    Core Operational Approach
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    Our actions and decisions are guided by empirical data generated through applied research, systematic monitoring, and rigorous evaluation to support development partners in making informed decisions.
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {stats.map((stat, idx) => {
                    const IconComp = stat.icon;
                    return (
                      <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-left space-y-1">
                        <div className="flex items-center justify-between text-blue-900">
                          <span className="text-lg font-extrabold">{stat.value}</span>
                          <IconComp className="w-4 h-4 text-blue-800" />
                        </div>
                        <span className="text-[11px] text-slate-600 font-medium block leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
