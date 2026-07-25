"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesSection from "@/components/ResourcesSection";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { BookOpenCheck, FileText, Download, Sparkles } from "lucide-react";

export default function ResourcesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />

      <Breadcrumb items={[{ label: "Knowledge Hub & Downloads" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-slate-950/80 to-cyan-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <BookOpenCheck className="w-4 h-4" /> Technical Publications & Toolkits
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Knowledge Repository & Practice Guides
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
              Access curated M&E frameworks, disability inclusion audit checklists, research methodology guidelines, and capacity assessment toolkits developed by IARA experts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/studio"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate Custom Framework in Studio
              </Link>
              <Link
                href="/glossary"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
              >
                <BookOpenCheck className="w-4 h-4 text-emerald-400" />
                Explore M&E Terminology Glossary
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section Component */}
        <ResourcesSection />

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
