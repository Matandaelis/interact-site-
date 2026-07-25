"use client";

import React from "react";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/MotionSection";
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  CheckCircle2, 
  Users2, 
  Award, 
  Globe2, 
  HeartHandshake, 
  Scale, 
  BookOpenCheck,
  PhoneCall,
  UserCheck
} from "lucide-react";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export default function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  const corePillars = [
    {
      num: "01",
      title: "Project & Program Design, M&E",
      desc: "Comprehensive project design, baseline studies, midline/endline evaluations, and third-party monitoring systems."
    },
    {
      num: "02",
      title: "Institutional Strengthening & Capacity Building",
      desc: "Organizational development, governance policy formulation, competency training, and operational restructuring."
    },
    {
      num: "03",
      title: "Project Proposal & Narrative Report Writing",
      desc: "High-level technical proposal writing, donor reporting, outcome harvesting, and policy brief development."
    },
    {
      num: "04",
      title: "Disability Mainstreaming & Accessibility Audits",
      desc: "Specialized accessibility audits, workplace/learning institution compliance assessments, and social inclusion studies."
    },
    {
      num: "05",
      title: "Social / Formative Research & Surveys",
      desc: "Empirical surveys, GESI analyses, feasibility studies, and multi-county socio-economic assessments across East Africa."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionSection className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" /> Institutional Profile & Registration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who We Are & How We Work
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Inter-Act Research Associates (IARA) is a non-partisan, non-profit making consulting company formed in 2013 to deliver cutting-edge technical expertise across the Eastern and Horn of Africa region.
          </p>
        </MotionSection>

        {/* Company Registration & Philosophy Grid */}
        <MotionSection delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* Company Registration Box */}
            <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Legal Compliance</span>
                  <h3 className="text-xl font-extrabold text-white">Company Registration</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Inter-Act Research Associates (IARA) is registered in Kenya under the <strong>Company&apos;s Act (Cap499 Section 4)</strong>. IARA operates extensively across <strong>Kenya, Uganda, Tanzania, and Rwanda</strong> by providing high-quality consultancy services to government institutions, faith-based organizations, private enterprises, and civil society organizations (CSOs).
              </p>

              <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Headquarters Address:</span>
                  <span className="font-semibold text-white">Argwings Kodhek Rd, Unipen Plaza, 1st Flr Rm 4</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Postal Address:</span>
                  <span className="font-semibold text-white">P.O. BOX 59913-00200 / 7218-00200, Nairobi</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Executive Director:</span>
                  <span className="font-semibold text-emerald-400">Kennedy S. Okumu</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Direct Cell Phone:</span>
                  <span className="font-bold text-white">0702103653 (+254 702 103 653)</span>
                </div>
              </div>
            </div>

            {/* Philosophy & How We Work Box */}
            <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Core Values & Philosophy</span>
                    <h3 className="text-xl font-extrabold text-white">How We Work</h3>
                  </div>
                </div>

                <blockquote className="bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded-r-xl text-xs sm:text-sm italic text-emerald-200">
                  &ldquo;Providing practical solutions through research and learning that leads to a strong and vibrant institution that contributes greater benefits to the community — doing good through practical solutions to transform lives.&rdquo;
                </blockquote>

                <p className="text-slate-300 text-sm leading-relaxed">
                  IARA aims at strengthening capacities of private, public, and not-for-profit organizations in realizing their long-term goals by addressing development bottlenecks. We promote ownership, build sound knowledge bases, and deliver empirical results through four guiding pillars: <strong>Delivery, Quality, Timeliness, and Value for Money</strong>.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-slate-950 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Contact Kennedy S. Okumu, Executive Director
                </button>
              </div>
            </div>

          </div>
        </MotionSection>

        {/* 5 What We Do Pillars */}
        <div className="space-y-8">
          <MotionSection className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Technical Expertise</span>
            <h3 className="text-2xl font-extrabold text-white">What We Do</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              We provide specialized technical assistance and advisory across five main pillars:
            </p>
          </MotionSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar) => (
              <StaggerItem 
                key={pillar.num}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all shadow-xl space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    {pillar.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500/60" />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </StaggerItem>
            ))}

            {/* Capacity Statement Box */}
            <StaggerItem className="bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 shadow-xl space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">Capacity Statement</span>
                <h4 className="text-base font-bold text-white mt-1">Client-Centred & Innovation-Driven</h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  We maintain a scientific research committee overseeing all center activities, backed by a pool of experienced consultants in M&E, finance, social sciences, advocacy, and IT.
                </p>
              </div>
              <div className="text-[11px] text-emerald-300 font-semibold pt-2 border-t border-emerald-500/20">
                Board Oversight • Governance Structure • Regional Pool
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
