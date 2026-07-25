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

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-950">
      <Navbar />

      <Breadcrumb items={[{ label: "AI M&E Framework Studio" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-12 relative overflow-hidden">
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
