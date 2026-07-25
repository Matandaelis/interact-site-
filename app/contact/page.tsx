"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import FaqSection from "@/components/FaqSection";
import Breadcrumb from "@/components/Breadcrumb";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe2, 
  UserCheck, 
  FileText,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />

      <Breadcrumb items={[{ label: "Contact Us & RFP Submission" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-slate-950/80 to-cyan-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Phone className="w-4 h-4" /> Request for Proposal (RFP) & Consultations
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Get in Touch with Our Technical Team
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
              Submit your Request for Proposal (RFP), inquiry, or consulting request directly to Kennedy S. Okumu, Executive Director, or our technical desk in Nairobi.
            </p>
          </div>
        </section>

        {/* Contact Information & Form Layout */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Contact Details Card */}
              <div className="lg:col-span-5 space-y-8">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Official Headquarters</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Inter-Act Research Associates</h2>
                    <p className="text-xs text-slate-400">Registered under Companies Act Cap499 Sec 4</p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Physical Office:</strong>
                        <span>Argwings Kodhek Road, Unipen Plaza (Hurlinghum), 1st Floor Room No. 4, Nairobi, Kenya</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Postal Address:</strong>
                        <span>P.O. BOX 59913-00200 / 7218-00200, Nairobi, Kenya</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Executive Leadership:</strong>
                        <span>Kennedy S. Okumu, Executive Director</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Direct Phone / WhatsApp:</strong>
                        <a href="tel:0702103653" className="text-emerald-400 font-bold hover:underline">
                          0702103653 / +254 702 103 653
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Official Email:</strong>
                        <a href="mailto:interactresearchassociates@gmail.com" className="text-slate-200 font-medium hover:text-emerald-400 transition-colors break-all">
                          interactresearchassociates@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
                    <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Working Hours
                    </div>
                    <div>Monday – Friday: 8:00 AM – 5:00 PM (EAT)</div>
                    <div>Emergency Field Response Desk: 24/7 Monitored</div>
                  </div>
                </div>
              </div>

              {/* Consultation Form Column */}
              <div className="lg:col-span-7">
                <ConsultationForm />
              </div>

            </div>
          </div>
        </section>

        {/* Interactive FAQ Section to reduce common inquiries */}
        <FaqSection />

      </main>

      <Footer />
    </div>
  );
}
