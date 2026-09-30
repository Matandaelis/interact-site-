"use client";

import React from "react";
import Image from "next/image";
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
  Phone, 
  PhoneCall, 
  FileText,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "serviceType": "Development Advisory and Research",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Inter-Act Research Associates",
      "image": "/images/regional-east-africa.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Argwings Kodhek Road, Unipen Plaza, 1st Floor Room No. 4, Hurlingham",
        "addressLocality": "Nairobi",
        "postalCode": "00200",
        "addressCountry": "KE"
      },
      "telephone": "+254702103653",
      "email": "interactresearchassociates@gmail.com",
      "priceRange": "$$",
      "url": "https://interactresearch.org"
    },
    "name": "Inter-Act Research Associates (IARA) Research & Strategic Advisory",
    "description": "Registered in 2013 under the Kenyan Company's Act Cap 499 Section 4, Inter-Act Research Associates (IARA) is a leading provider of Monitoring and Evaluation, Disability Mainstreaming, GESI Research, and Capacity Building in East Africa."
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <Navbar />

      <Breadcrumb items={[{ label: "About Us" }]} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="page-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-950/80 to-blue-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
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
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">2013</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Year Established</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">Cap499 Sec 4</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Legal Registration</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">18+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Major Assignments</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">5</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">East Africa Nations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed About Section Component */}
        <AboutSection onOpenConsultation={() => setModalOpen(true)} />

        {/* Comprehensive AEO / SEO Technical Profile & History Section */}
        <section className="muted-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Institutional Context</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Detailed Institutional Profile & Operational Methodologies</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-6 leading-relaxed">
              <p>
                <strong>Inter-Act Research Associates (IARA)</strong> is an independent, non-partisan, and non-profit making development advisory and research firm established in <strong>2013</strong>. Headquartered in Nairobi, Kenya, and registered under the <strong>Kenyan Company&apos;s Act (Cap 499 Section 4)</strong>, IARA was founded to bridge the gap between empirical scientific research and actionable development interventions. Under the leadership of <strong>Executive Director Kennedy S. Okumu</strong>, the organization has spent over a decade providing high-impact technical services, monitoring and evaluation frameworks, disability mainstreaming, and social research across the Eastern and Horn of Africa regions.
              </p>
              
              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">1. Geographic Mandate and Regional Footprint</h3>
              <p>
                Our operational reach is designed to address the unique development and socio-economic dynamics of the East African community. From our principal office at <strong>Unipen Plaza, 1st Floor, Room 4, Argwings Kodhek Road, Hurlingham, Nairobi</strong>, we deploy technical experts and local field teams across six core partner nations: <strong>Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Somalia</strong>. This broad regional footprint allows IARA to support sub-national, national, and trans-boundary development projects. To see our detailed county-level operations and country maps, explore our <Link href="/regional" className="text-blue-400 hover:underline font-semibold">East Africa regional presence footprint</Link>. Whether working in the high-density urban corridors of Nairobi, Kampala, and Dar es Salaam, or deploying rapid-response teams to the Arid and Semi-Arid Lands (ASALs) of Northern Kenya, Karamoja in Uganda, and Gedo in Somalia, our operations are defined by deep cultural awareness, linguistic proficiency, and field-tested logistics networks.
              </p>
              
              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">2. Core Advisory Pillars and Scientific Oversight</h3>
              <p>
                To maintain the highest standards of data integrity and analytical rigor, all IARA programs and research assignments are governed by our <strong>Scientific Research Committee</strong>. This internal board consists of senior academicians, statisticians, and sector specialists who peer-review every survey design, sampling methodology, and draft report before delivery to clients. We focus on five core technical pillars, which are fully described in our <Link href="/services" className="text-blue-400 hover:underline font-semibold">development consulting services catalog</Link>:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-400 text-xs sm:text-sm">
                <li>
                  <strong className="text-slate-200">Monitoring, Evaluation, Accountability, and Learning (MEAL):</strong> We design and execute baseline, midline, and endline evaluations using mixed-method empirical designs, randomized control trials, and participatory qualitative tools such as outcome harvesting.
                </li>
                <li>
                  <strong className="text-slate-200">Disability Mainstreaming and Accessibility Audits:</strong> We conduct rigorous physical and digital compliance audits aligned with the UN Convention on the Rights of Persons with Disabilities (UN CRPD) and local legislative acts. This includes formulating inclusion scorecards and workplace policy restructuring.
                </li>
                <li>
                  <strong className="text-slate-200">Institutional Capacity Assessments:</strong> Utilizing customized organizational diagnostic toolkits, we evaluate the financial stewardship, board governance, policy formulation, and technical capacity of local Civil Society Organizations (CSOs) and Organizations of Persons with Disabilities (OPDs).
                </li>
                <li>
                  <strong className="text-slate-200">Technical Writing & Strategic Planning:</strong> We formulate 5-year strategic plans, programmatic logic models, and high-level project proposals for donor-funded applications (USAID, EU, UN, etc.).
                </li>
                <li>
                  <strong className="text-slate-200">Formative Socio-Economic Surveys:</strong> We execute extensive field surveys on agriculture, green growth, public health, WASH (Water, Sanitation, and Hygiene), and refugee livelihoods, utilizing mobile data collection platforms (ODK, KoboToolbox).
                </li>
              </ul>
              
              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">3. Institutional Quality Standards (QATM)</h3>
              <p>
                Our delivery philosophy is structured around a strict quality assurance matrix that guarantees <strong>Delivery, Quality, Timeliness, and Value for Money</strong>. Every project timeline is managed through dynamic milestone trackers, and data validation protocols include real-time GPS tracking and audio-auditing of field interviews. This commitment to transparency and ethical research has made IARA a trusted consulting partner for regional government ministries, international non-governmental organizations (INGOs), and major multilateral donor bodies, as demonstrated throughout our <Link href="/portfolio" className="text-blue-400 hover:underline font-semibold">past assignments track record and case studies catalog</Link>. We believe that true sustainable development is only possible when built on a foundation of empirical truth and inclusive participation.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white pt-2 border-b border-slate-800 pb-2">4. Legal Registrations, Mailing, and Address Details</h3>
              <p>
                To comply fully with the regional legal frameworks, Inter-Act Research Associates operates with absolute transparency. Our formal postal addresses are <strong>P.O. BOX 59913-00200</strong> and <strong>P.O. BOX 7218-00200, Nairobi, Kenya</strong>. We hold active registrations under the Kenya Companies Act, keeping updated with statutory tax compliances, social security contributions, and ethical clearance permits for academic and social research from national commissions (NACOSTI). Our operational headquarters is strategically situated in Nairobi&apos;s Hurlingham commercial hub, ensuring close proximity to development partners, regional Embassies, and UN agencies.
              </p>
            </div>
          </div>
        </section>

        {/* Governance & Leadership Detailed Section */}
        <section className="py-16 bg-slate-900/50 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Leadership & Structure</span>
              <h2 className="text-3xl font-extrabold text-white">Governance & Senior Management</h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Our scientific research committee and board of directors ensure rigorous quality assurance and ethical compliance across all multi-country consulting assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Executive Director */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all shadow-xl group">
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <Image 
                    src="/images/about-fieldwork.png"
                    alt="Kennedy S. Okumu - Executive Director, Inter-Act Research Associates"
                    referrerPolicy="no-referrer"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 350px"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFlMjkzYiIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-slate-950/90 text-blue-400 font-bold text-xs border border-blue-500/30">
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
                    <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--coral)]" aria-hidden="true" />0702103653 / +254 702 103 653</div>
                    <div className="truncate text-blue-400">✉️ interactresearchassociates@gmail.com</div>
                  </div>
                </div>
              </div>

              {/* Scientific Committee */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all shadow-xl group">
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <Image 
                    src="/images/services-workshop.png"
                    alt="Scientific Research Committee members in session"
                    referrerPolicy="no-referrer"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 350px"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFlMjkzYiIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-slate-950/90 text-blue-400 font-bold text-xs border border-blue-500/30">
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
                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 font-semibold text-blue-300">
                    Ensures zero-bias empirical rigor across all field operations.
                  </div>
                </div>
              </div>

              {/* Associate Pool */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all shadow-xl group">
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <Image 
                    src="/images/regional-east-africa.png"
                    alt="IARA Associate Consultants & Field Enumerators in Kenya"
                    referrerPolicy="no-referrer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 350px"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFlMjkzYiIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-slate-950/90 text-blue-400 font-bold text-xs border border-blue-500/30">
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
                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 font-semibold text-blue-300">
                    Rapid deployment capability within 48 hours across ASAL regions.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-blue-950/80 border border-blue-500/30 rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Looking for Full Firm Credentials or Legal Documents?</h3>
              <p className="text-slate-300 text-sm max-w-2xl mx-auto">
                Request our complete institutional capability statement, company registration certificates, tax compliance details, or past audit references.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Request Proposal / Legal Docs
                </button>
                <Link
                  href="/services"
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-3 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  View Technical Services
                  <ArrowRight className="w-4 h-4 text-blue-400" />
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
