"use client";

import React, { useState } from "react";
import { MotionSection } from "@/components/MotionSection";
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
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
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
    <section id="regional" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionSection className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Globe2 className="w-3.5 h-3.5" /> Regional Reach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            East African Footprint & Field Capabilities
          </h2>
          <p className="text-slate-300 text-base">
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
                    ? "bg-slate-950 border-emerald-500 text-white shadow-xl shadow-emerald-950/40"
                    : "bg-slate-950/60 hover:bg-slate-950 border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{country.flag}</span>
                  <span>{country.name}</span>
                </div>
                {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />}
              </button>
            );
          })}
        </div>

        {/* Active Country Detail Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Country Field Photo Banner */}
          <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden mb-8 border border-slate-800 group">
            <img 
              src={currentCountry.image}
              alt={currentCountry.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
              <span className="bg-slate-950/85 px-3 py-1 rounded-lg border border-emerald-500/40 text-emerald-300 backdrop-blur-sm flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                {currentCountry.imageAlt}
              </span>
              <span className="hidden sm:inline bg-slate-950/80 px-2.5 py-1 rounded text-slate-300 text-xs">
                {currentCountry.name} Field Operations
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{currentCountry.flag}</span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">
                      {currentCountry.name} Operations
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" /> Primary Hub: {currentCountry.hub}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Field Coverage Nodes
                  </span>
                  <p className="text-sm font-medium text-white">{currentCountry.fieldNodes}</p>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Local Research Capacity
                  </span>
                  <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> {currentCountry.enumeratorNetwork}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                  Key In-Country Research & Advisory Projects
                </h4>
                <div className="space-y-2">
                  {currentCountry.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col Stats */}
            <div className="lg:col-span-5 bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-6">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Regional Operational Metrics
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400">Completed Projects</span>
                  <span className="text-lg font-bold text-white">{currentCountry.stats.projects}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400">Household / KII Data Audits</span>
                  <span className="text-lg font-bold text-emerald-400">{currentCountry.stats.fieldAudits}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400">Key Client Profile</span>
                  <span className="text-xs font-bold text-cyan-300">{currentCountry.stats.partners}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-400 block mb-2">Priority Focus Sectors</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCountry.keySocioSectors.map((sec, i) => (
                    <span key={i} className="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-md text-xs font-medium border border-emerald-500/20">
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
