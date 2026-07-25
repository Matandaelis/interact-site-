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
  MapPin,
  PhoneCall,
  Mail,
  ShieldCheck
} from "lucide-react";

interface HeroProps {
  onExploreServices: () => void;
  onOpenStudio: () => void;
  onOpenConsultation: () => void;
}

export default function Hero({ onExploreServices, onOpenStudio, onOpenConsultation }: HeroProps) {
  const stats = [
    { value: "2013", label: "Established in Nairobi", icon: ShieldCheck },
    { value: "17+", label: "Key Regional Assignments", icon: BarChart3 },
    { value: "4", label: "East Africa Countries", icon: Globe2 },
    { value: "100%", label: "Cap499 Sec 4 Compliant", icon: Award },
  ];

  const highlights = [
    "Project & Program M&E",
    "Disability Mainstreaming & Accessibility Audits",
    "Institutional Strengthening & Capacity Building",
    "Strategic Planning & Governance",
    "Social & Formative Research Surveys"
  ];

  return (
    <section className="relative bg-slate-950 text-white pt-10 pb-20 md:pt-14 md:pb-28 overflow-hidden border-b border-slate-800">
      {/* Background Subtle Mesh Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Official Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Registered Consulting Company (Cap499 Section 4) • Formed 2013</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              INTER-ACT RESEARCH ASSOCIATES <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">(IARA)</span>
            </h1>

            {/* Subheadline & Philosophy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Offering cutting-edge technical expertise in development and business sectors across <strong className="text-white font-semibold">Kenya, Uganda, Tanzania, and Rwanda</strong>. Guided by our philosophy: <em className="text-emerald-300">&ldquo;doing good through practical solutions to transform lives.&rdquo;</em>
            </p>

            {/* Contact Highlight Box */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <MapPin className="w-4 h-4" />
                <span>Head Office: Argwings Kodhek Road, Unipen Plaza, 1st Floor Room No. 4, Nairobi</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-slate-300 pt-1 border-t border-slate-800">
                <span>Executive Director: <strong>Kennedy S. Okumu</strong></span>
                <span className="font-bold text-white bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  Cell: 0702103653
                </span>
                <span className="text-emerald-400 font-medium">interactresearchassociates@gmail.com</span>
              </div>
            </div>

            {/* Practice Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {highlights.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                onClick={onOpenStudio}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-950/50 transition-all flex items-center justify-center gap-2.5 group"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                Launch Interactive M&E & Strategy Studio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-slate-400" />
                Explore 12 Key Areas of Expertise
              </button>
            </div>

          </motion.div>

          {/* Right Column: Profile Overview Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm space-y-5">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
              
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    IARA Executive Summary
                  </h3>
                  <p className="text-xs text-slate-400">Non-Partisan, Non-Profit Consulting Firm</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                  Est. 2013
                </span>
              </div>

              {/* Featured Image: Black African Research Consultants */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-800 group">
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800" 
                  alt="IARA Black African research consultants and M&E associates in session"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white">
                  <span className="flex items-center gap-1.5 bg-slate-950/85 px-2.5 py-1 rounded-lg border border-emerald-500/40 text-emerald-300 backdrop-blur-sm">
                    <Users2 className="w-3.5 h-3.5 text-emerald-400" />
                    IARA Field Research Associates
                  </span>
                  <span className="bg-slate-950/80 px-2 py-0.5 rounded text-slate-300 text-[10px]">Nairobi, KE</span>
                </div>
              </div>

              {/* Guiding Principles */}
              <div className="space-y-3 text-xs">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider block">
                    Core Operational Approach
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    Our actions and decisions are guided by empirical data generated through applied research, systematic monitoring, and rigorous evaluation to support clients in making informed decisions.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Primary Values</span>
                    <span className="font-bold text-white text-xs">Delivery & Quality</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Efficiency Pillar</span>
                    <span className="font-bold text-emerald-400 text-xs">Timeliness & Value</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-200 space-y-1">
                  <span className="font-bold text-emerald-300 block">Multidisciplinary Technical Team:</span>
                  <p className="text-[11px] text-slate-300">
                    Program managers, M&E experts, advocacy specialists, social scientists, IT developers, and a Scientific Research Committee.
                  </p>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  Request Discovery Session with Executive Director
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-slate-800/80"
        >
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={i} 
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
