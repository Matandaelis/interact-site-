"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MotionSection } from "@/components/MotionSection";
import EastAfricaMap from "@/components/EastAfricaMap";
import { 
  Globe2, 
  MapPin, 
  Users, 
  Award, 
  Building, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from "lucide-react";

export default function RegionalPresence() {
  const [activeCountry, setActiveCountry] = useState<string>("kenya");

  const countries = [
    {
      id: "kenya",
      name: "Kenya",
      flag: "🇰🇪",
      hub: "Nairobi (Regional HQ)",
      fieldNodes: "Mombasa, Kisumu, Nakuru, Garissa, Lodwar",
      enumeratorNetwork: "150+ Certified Field Enumerators",
      image: "/images/regional-east-africa.png",
      imageAlt: "IARA Black African research team conducting field surveys in Kenya",
      keySocioSectors: ["M&E Systems", "Agriculture & Dev", "Health & WASH", "Private Sector Growth"],
      stats: { projects: "65+", fieldAudits: "12,000+ Surveys", partners: "Government & USAID/EU" },
      highlights: [
        "National M&E system evaluations for state corporations",
        "Agricultural value chain impact assessment in Rift Valley and Western Kenya",
        "Public health M&E data audits across 18 county health departments"
      ]
    },
    {
      id: "uganda",
      name: "Uganda",
      flag: "🇺🇬",
      hub: "Kampala Hub",
      fieldNodes: "Gulu, Arua, Jinja, Mbarara",
      enumeratorNetwork: "90+ Certified Field Enumerators",
      image: "/images/about-fieldwork.png",
      imageAlt: "IARA Black African enumerators conducting refugee livelihood studies in Uganda",
      keySocioSectors: ["Refugee Livelihoods", "Capacity Building", "Education", "Governance"],
      stats: { projects: "38+", fieldAudits: "8,500+ Surveys", partners: "UNHCR & Local Civil Society" },
      highlights: [
        "Refugee settlement socio-economic baseline study in West Nile (Bidi Bidi & Adjumani)",
        "Organizational capacity assessments for national CSOs in Kampala",
        "Youth vocational skills training M&E evaluation"
      ]
    },
    {
      id: "tanzania",
      name: "Tanzania",
      flag: "🇹🇿",
      hub: "Dar es Salaam Hub",
      fieldNodes: "Arusha, Dodoma, Mwanza, Zanzibar",
      enumeratorNetwork: "110+ Certified Field Enumerators",
      image: "/images/services-workshop.png",
      imageAlt: "IARA Black African consultants leading marine and trade evaluation in Tanzania",
      keySocioSectors: ["Natural Resource Mgmt", "Tourism & Trade", "Financial Inclusion"],
      stats: { projects: "32+", fieldAudits: "7,200+ Surveys", partners: "Development Financial Institutions" },
      highlights: [
        "Coastal livelihoods & marine conservation M&E framework in Zanzibar and Tanga",
        "Financial inclusion baseline study for micro-enterprises in Dar es Salaam",
        "5-Year Strategic Planning for regional trade associations"
      ]
    },
    {
      id: "rwanda",
      name: "Rwanda",
      flag: "🇷🇼",
      hub: "Kigali Hub",
      fieldNodes: "Musanze, Huye, Rubavu",
      enumeratorNetwork: "70+ Certified Field Enumerators",
      image: "/images/regional-east-africa.png",
      imageAlt: "IARA Black African research team in digital governance workshop in Rwanda",
      keySocioSectors: ["Digital Governance", "Green Growth", "Capacity Building"],
      stats: { projects: "25+", fieldAudits: "5,000+ Surveys", partners: "Government Ministries & Private Sector" },
      highlights: [
        "Digital governance capacity development and SOP audit for municipal bodies",
        "Green economy & climate resilience program evaluation in Northern Province",
        "SME management advisory and performance scorecard formulation"
      ]
    }
  ];

  const currentCountry = countries.find((c) => c.id === activeCountry) || countries[0];

  return (
    <section id="regional" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionSection className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold">
            <Globe2 className="w-3.5 h-3.5 text-blue-800" /> Regional Reach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            East African Footprint & Field Capabilities
          </h2>
          <p className="text-slate-700 text-base">
            Inter-Act Research Associates combines deep local contextual knowledge with global rigorous evaluation standards across 4 key East African nations.
          </p>
        </MotionSection>

        {/* Country Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {countries.map((country) => {
            const isSelected = activeCountry === country.id;
            return (
              <button
                key={country.id}
                onClick={() => setActiveCountry(country.id)}
                className={`p-4 rounded-xl font-bold text-base transition-all flex items-center justify-between border ${
                  isSelected
                    ? "bg-blue-900 border-blue-950 text-white shadow-md"
                    : "bg-white hover:bg-slate-100 border-slate-200 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{country.flag}</span>
                  <span>{country.name}</span>
                </div>
                {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-blue-200" />}
              </button>
            );
          })}
        </div>

        {/* Interactive East Africa Regional Map */}
        <div className="mb-10">
          <EastAfricaMap
            activeCountry={activeCountry}
            onSelectCountry={(countryId) => setActiveCountry(countryId)}
          />
        </div>

        {/* Active Country Detail Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Country Field Photo Banner */}
          <div className="relative h-40 sm:h-48 w-full rounded-xl overflow-hidden mb-8 border border-slate-200 group">
            <Image 
              src={currentCountry.image}
              alt={currentCountry.imageAlt}
              referrerPolicy="no-referrer"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1200px) 100vw, 1024px"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YxZjVmOSIvPjwvc3ZnPg=="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
              <span className="bg-blue-900 px-3 py-1 rounded-lg text-white font-bold backdrop-blur-sm flex items-center gap-2 shadow-xs">
                <Users className="w-3.5 h-3.5 text-blue-200" />
                {currentCountry.imageAlt}
              </span>
              <span className="hidden sm:inline bg-slate-900/90 px-2.5 py-1 rounded text-white text-xs font-medium">
                {currentCountry.name} Field Operations
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{currentCountry.flag}</span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {currentCountry.name} Operations
                    </h3>
                    <p className="text-xs text-blue-900 font-bold flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-800" /> Primary Hub: {currentCountry.hub}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Field Coverage Nodes
                  </span>
                  <p className="text-sm font-bold text-slate-900">{currentCountry.fieldNodes}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Local Research Capacity
                  </span>
                  <p className="text-sm font-extrabold text-blue-900 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-blue-800" /> {currentCountry.enumeratorNetwork}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  Key In-Country Research & Advisory Projects
                </h4>
                <div className="space-y-2">
                  {currentCountry.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col Stats */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
              <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-800" />
                Regional Operational Metrics
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-xs font-bold text-slate-600">Completed Projects</span>
                  <span className="text-lg font-extrabold text-slate-900">{currentCountry.stats.projects}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-xs font-bold text-slate-600">Household / KII Data Audits</span>
                  <span className="text-lg font-extrabold text-blue-900">{currentCountry.stats.fieldAudits}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-xs font-bold text-slate-600">Key Client Profile</span>
                  <span className="text-xs font-bold text-slate-800">{currentCountry.stats.partners}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-600 block mb-2">Priority Focus Sectors</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCountry.keySocioSectors.map((sec, i) => (
                    <span key={i} className="px-2.5 py-1 bg-blue-50 text-blue-900 rounded-md text-xs font-bold border border-blue-200">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
