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

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
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
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Portal Directory</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">Explore Inter-Act Research Associates</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                href="/about"
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all group space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                  Who We Are
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-xs">Formed 2013, Cap499 Cap registration, leadership & governance structure.</p>
              </Link>

              <Link 
                href="/services"
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-all group space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-teal-400 transition-colors flex items-center justify-between">
                  Services & Pillars
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-xs">M&E, Disability Mainstreaming, Proposal Writing, Capacity Assessments.</p>
              </Link>

              <Link 
                href="/portfolio"
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all group space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                  Past Assignments (17)
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-xs">USAID, UN Women, DRF, VSO, Government Ministry consulting track record.</p>
              </Link>

              <Link 
                href="/studio"
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all group space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors flex items-center justify-between">
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

        {/* Section Snippet: Toolkits & Publications */}
        <ResourcesSection />

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
