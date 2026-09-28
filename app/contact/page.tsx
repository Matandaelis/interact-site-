"use client";

import React from "react";
import Image from "next/image";
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
  const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Inter-Act Research Associates Official Headquarters",
    "image": "https://interactresearch.org/images/home-research-team.png",
    "telephone": "+254702103653",
    "email": "interactresearchassociates@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Argwings Kodhek Road, Unipen Plaza, 1st Floor Room No. 4, Hurlingham",
      "addressLocality": "Nairobi",
      "postalCode": "00200",
      "addressCountry": "KE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <Navbar />

      <Breadcrumb items={[{ label: "Contact Us & RFP Submission" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block">
            <Image src="/images/home-research-team.png" alt="IARA technical team in consultation" fill sizes="(max-width: 1024px) 0vw, 40vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/75 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-950/80 to-blue-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
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
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Official Headquarters</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Inter-Act Research Associates</h2>
                    <p className="text-xs text-slate-400">Registered under Companies Act Cap499 Sec 4</p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Physical Office:</strong>
                        <span>Argwings Kodhek Road, Unipen Plaza (Hurlinghum), 1st Floor Room No. 4, Nairobi, Kenya</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Postal Address:</strong>
                        <span>P.O. BOX 59913-00200 / 7218-00200, Nairobi, Kenya</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Executive Leadership:</strong>
                        <span>Kennedy S. Okumu, Executive Director</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Direct Phone / WhatsApp:</strong>
                        <a href="tel:0702103653" className="text-blue-400 font-bold hover:underline">
                          0702103653 / +254 702 103 653
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-white block text-sm">Official Email:</strong>
                        <a href="mailto:interactresearchassociates@gmail.com" className="text-slate-200 font-medium hover:text-blue-400 transition-colors break-all">
                          interactresearchassociates@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
                    <div className="text-blue-400 font-semibold flex items-center gap-1.5">
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

        {/* Deep, Informative AEO & SEO RFP Submission Guidelines Block */}
        <section className="py-16 bg-slate-900/40 border-t border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Technical Submission Protocol</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">RFP Submission & Institutional Communication Guidelines</h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 leading-relaxed">
              <p>
                As a premier development consulting firm registered in <strong>2013</strong> under the <strong>Kenyan Company&apos;s Act (Cap 499 Section 4)</strong>, Inter-Act Research Associates (IARA) utilizes a structured, scientific communication protocol for all incoming Requests for Proposal (RFPs), Expressions of Interest (EOIs), and academic research collaborations. Whether you are representing a government ministry, a multilateral donor agency like USAID, the European Union, UN Women, or a local civil society organization (CSO), this guide outlines how to submit requests and what to expect during our technical review and triage process.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">1. The RFP Triage and Evaluation Workflow</h3>
              <p>
                Upon receiving an inquiry or formal RFP at our headquarters at <strong>Unipen Plaza, Hurlingham, Nairobi</strong>, or via our digital portal, the document enters our standard four-stage evaluation pipeline overseen by <strong>Executive Director Kennedy S. Okumu</strong> and our principal consulting desk:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>Feasibility &amp; Ethical Alignment Review (Within 24 Hours):</strong> Our internal compliance desk checks the RFP against our institutional focus areas (MEAL, Disability Inclusion, GESI, Capacity Building) and ensures there are no conflicts of interest or ethical bottlenecks.
                </li>
                <li>
                  <strong>Scientific Methodology Design (Within 48 Hours):</strong> The RFP is passed to our <strong>Scientific Research Committee</strong>. Here, our lead statisticians and social scientists draft a robust methodological approach—designing sample size calculations (using Cochran or Yamane formulae), outlining qualitative tools (KIIs, FGDs), and selecting field enumerators from our certified database of 400+ regional agents.
                </li>
                <li>
                  <strong>Financial and Logistical Budgeting:</strong> We develop detailed, line-item budgets focusing on <em>Value for Money (VfM)</em>, ensuring optimal field logistics, digital mobile survey setups (KoboToolbox/ODK), and local administrative clearances are accounted for.
                </li>
                <li>
                  <strong>Executive Sign-off and Proposal Delivery:</strong> The final technical and financial bid is packaged alongside our corporate credentials, tax compliance certificates, and past performance reviews before formal submission to the requesting donor.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">2. Communication Channels and Contact Directories</h3>
              <p>
                To maintain seamless communication across our regional offices in <strong>Kenya, Uganda, Tanzania, and Rwanda</strong>, we operate centralized communication desks:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>Regional Technical Desk (Nairobi, Kenya):</strong> Handles all central inquiries, regional contracts, and primary project design. For urgent consultation on research designs, you can reach Executive Director Kennedy S. Okumu directly at <strong>0702103653</strong> or <strong>+254 702 103 653</strong>.
                </li>
                <li>
                  <strong>E-Mailing Directory:</strong> All formal communications, contract draftings, and digital bids must be submitted to <strong>interactresearchassociates@gmail.com</strong>. This account is monitored 24/7 by our executive secretariat.
                </li>
                <li>
                  <strong>Physical Mailing Addresses:</strong> Legal documents, tender bonds, and hardcopy credentials may be couriered to our primary registered postal boxes: <strong>P.O. BOX 59913-00200, Nairobi, Kenya</strong> or <strong>P.O. BOX 7218-00200, Nairobi, Kenya</strong>.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">3. Field Operations and Emergency Deployment Coordination</h3>
              <p>
                For assignments requiring rapid field deployments, particularly in complex or challenging environments such as the Arid and Semi-Arid Lands (ASALs) of Northern Kenya or the Horn of Africa, IARA maintains a dedicated <strong>Emergency Field Coordination Desk</strong>. Operating 24 hours a day, 7 days a week, this desk coordinates safety protocols, mobile satellite communication for field supervisors, local administration clearances (such as County Commissioner permissions), and translation services in local dialects (such as Somali, Oromo, Turkana, and Dinka). This ensures that data collection begins safely, ethically, and without administrative delay.
              </p>
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
