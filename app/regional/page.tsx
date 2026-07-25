"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegionalPresence from "@/components/RegionalPresence";
import ConsultationForm from "@/components/ConsultationForm";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { Globe2, MapPin, Building2, FileText, ArrowRight } from "lucide-react";

export default function RegionalPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const jsonLdRegional = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IARA Trans-National Field Research & M&E Services",
    "provider": {
      "@type": "Organization",
      "name": "Inter-Act Research Associates",
      "url": "https://interactresearch.org"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Kenya"
      },
      {
        "@type": "Country",
        "name": "Uganda"
      },
      {
        "@type": "Country",
        "name": "Tanzania"
      },
      {
        "@type": "Country",
        "name": "Rwanda"
      },
      {
        "@type": "Country",
        "name": "South Sudan"
      },
      {
        "@type": "Country",
        "name": "Somalia"
      }
    ],
    "description": "Multi-country field research, household data collection, refugee livelihood surveys, and sub-national capacity assessments in East & Horn of Africa, backed by over 400 certified multilingual enumerators."
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRegional) }}
      />
      <Navbar />

      <Breadcrumb items={[{ label: "Regional Footprint & Operations" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-slate-900/80 border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-950/80 to-blue-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <Globe2 className="w-4 h-4" /> Operational Footprint & Regional Hubs
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              East & Horn of Africa Coverage
            </h1>

            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
              With our Head Office at Unipen Plaza in Nairobi, Kenya, IARA maintains active field operation capability across Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Somalia.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Inquire About Field Deployment Readiness
              </button>
            </div>
          </div>
        </section>

        {/* Regional Presence Component */}
        <RegionalPresence />

        {/* Detailed Regional Field Operations Technical Block */}
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Field Methodologies</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Sub-National & Trans-National Field Logistics</h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 leading-relaxed">
              <p>
                To deliver scientifically valid and contextually grounded research deliverables, <strong>Inter-Act Research Associates (IARA)</strong> operates a decentralized sub-national and trans-national field network. Formed in <strong>2013</strong> and registered under the <strong>Kenyan Company&apos;s Act (Cap 499 Section 4)</strong>, our regional headquarters in Nairobi coordinates with dedicated national hubs and localized field coordinators to maintain an agile data collection machinery spanning six East African nations.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">1. Localized Context &amp; Linguistic Diversity</h3>
              <p>
                A core tenet of IARA&apos;s fieldwork philosophy is that high-quality data begins with trust. In regions characterized by diverse ethnic, linguistic, and socio-cultural structures, standard top-down data collection methodologies often fail. To overcome this, IARA employs a localized hiring and deployment model. We maintain a registered and vetted roster of over <strong>400 certified field enumerators</strong> across our partner countries:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>Kenya (150+ Enumerators):</strong> Deep sub-national footprint in Nairobi, Mombasa, Kisumu, Nakuru, and specialized ASAL coordinators in Garissa, Wajir, Mandera, and Lodwar proficient in Somali, Turkana, and Pokot.
                </li>
                <li>
                  <strong>Uganda (90+ Enumerators):</strong> Located in Kampala, Gulu, Arua, and Jinja, with specific teams trained to conduct GESI and trauma-informed surveys in refugee settlements like Bidi Bidi and Adjumani, speaking Luganda, Acholi, and Arabic.
                </li>
                <li>
                  <strong>Tanzania (110+ Enumerators):</strong> Anchored by our Dar es Salaam office, covering Arusha, Zanzibar, Dodoma, and Mwanza. Our Tanzanian teams possess specialized training in Swahili socio-linguistic nuances for rural community engagements.
                </li>
                <li>
                  <strong>Rwanda (70+ Enumerators):</strong> Vetted in Musanze, Kigali, Huye, and Rubavu, specializing in digital municipal governance audits and green-growth surveys, fluent in Kinyarwanda and French.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">2. Rigorous Mobile Data Quality Assurance</h3>
              <p>
                All field assignments executed by IARA are powered by mobile computer-assisted personal interviewing (CAPI) software, primarily utilizing <strong>KoboToolbox, ODK (Open Data Kit), and SurveyCTO</strong>. This eliminates manual paper entry errors and allows our central data scientists in Nairobi to run automated quality control checks:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong>GPS Geofencing:</strong> Ensures that interviews are conducted at the exact randomized coordinates specified in the sampling design, preventing field fabrication.
                </li>
                <li>
                  <strong>Time-Stamp Analysis:</strong> Automatically tracks the duration of each section of the survey questionnaire. If an enumerator completes a 30-minute module in 5 minutes, the record is flagged for central audit.
                </li>
                <li>
                  <strong>Audio Audit Sub-Sampling:</strong> Integrates silent, randomized, 10-second audio recordings of key questions to verify that the enumerator is asking questions in the exact localized translation required to avoid response bias.
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">3. Complex and ASAL Environments Logistics</h3>
              <p>
                Conducting field studies in Arid and Semi-Arid Lands (ASALs) or cross-border conflict-affected environments requires extraordinary logistical coordination and security management. Under the direction of <strong>Executive Director Kennedy S. Okumu</strong>, IARA utilizes an established community-entry protocol. Before deploying any field vehicles or enumerator networks, we coordinate with national security desks, County Commissioners, local chiefs, and community elders. This grassroots-up approach ensures the safety of our field personnel, protects client reputations, and unlocks hard-to-reach pastoralist households for unbiased random sampling.
              </p>
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
