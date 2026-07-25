"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  Scale, 
  BookOpen, 
  PhoneCall, 
  FileText,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />

      <Breadcrumb items={[{ label: "About Us" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-slate-950/80 to-cyan-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Building2 className="w-4 h-4" /> About Inter-Act Research Associates
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Institutional Profile & Legal Registration
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
              Formed in 2013 and registered under Kenya&apos;s Companies Act Cap499 Section 4, IARA provides high-impact Monitoring & Evaluation, Disability Mainstreaming, Policy Research, and Capacity Building across East & Horn of Africa.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 max-w-4xl">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">2013</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Year Established</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">Cap499 Sec 4</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Legal Registration</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">17+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Major Assignments</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">5</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">East Africa Nations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed About Section Component */}
        <AboutSection onOpenConsultation={() => setModalOpen(true)} />

        {/* Governance & Leadership Detailed Section */}
        <section className="py-16 bg-slate-900/50 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Leadership & Structure</span>
              <h2 className="text-3xl font-extrabold text-white">Governance & Senior Management</h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Our scientific research committee and board of directors ensure rigorous quality assurance and ethical compliance across all multi-country consulting assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Executive Director */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all shadow-xl group">
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    alt="Kennedy S. Okumu - Executive Director, Inter-Act Research Associates"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-slate-950/90 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                    Executive Director
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Kennedy S. Okumu</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Lead Research Consultant & Institutional Strategist</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Over 15 years of technical leadership in baseline evaluations, organizational capacity assessments, disability inclusion audits, and project management in East Africa.
                  </p>
                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                    <div>📞 0702103653 / +254 702 103 653</div>
                    <div className="truncate text-emerald-400">✉️ interactresearchassociates@gmail.com</div>
                  </div>
                </div>
              </div>

              {/* Scientific Committee */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all shadow-xl group">
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                    alt="Scientific Research Committee members in session"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-slate-950/90 text-teal-400 font-bold text-xs border border-teal-500/30">
                    Research Oversight
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Scientific Research Committee</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Methodology & Ethics Board</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Oversees data integrity, sampling protocols, institutional review board (IRB) alignment, and peer review for all research deliverables and policy briefs.
                  </p>
                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 font-semibold text-teal-300">
                    Ensures zero-bias empirical rigor across all field operations.
                  </div>
                </div>
              </div>

              {/* Associate Pool */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all shadow-xl group">
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img 
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800"
                    alt="IARA Associate Consultants & Field Enumerators in Kenya"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-slate-950/90 text-cyan-400 font-bold text-xs border border-cyan-500/30">
                    Regional Field Pool
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Associate Consultants & Enumerators</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Nairobi, Garissa, Turkana, Juba, Mogadishu, Kampala</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Multi-lingual field team proficient in Swahili, Somali, Oromo, Dinka, Luganda, French, and English for culturally sensitive data collection.
                  </p>
                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 font-semibold text-cyan-300">
                    Rapid deployment capability within 48 hours across ASAL regions.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Looking for Full Firm Credentials or Legal Documents?</h3>
              <p className="text-slate-300 text-sm max-w-2xl mx-auto">
                Request our complete institutional capability statement, company registration certificates, tax compliance details, or past audit references.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Request Proposal / Legal Docs
                </button>
                <Link
                  href="/services"
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-3 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  View Technical Services
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </Link>
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
