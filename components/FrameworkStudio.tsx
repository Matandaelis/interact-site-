"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  BarChart3, 
  TrendingUp, 
  Download, 
  Copy, 
  Check, 
  RefreshCw, 
  Layers, 
  FileText, 
  Globe2, 
  AlertCircle,
  ChevronRight
} from "lucide-react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";

interface FrameworkStudioProps {
  initialServiceId?: string;
}

export default function FrameworkStudio({ initialServiceId = "me" }: FrameworkStudioProps) {
  const [studioType, setStudioType] = useState<"me_framework" | "strategic_plan">(
    initialServiceId === "sp" ? "strategic_plan" : "me_framework"
  );
  const [sector, setSector] = useState<string>("Health & Nutrition");
  const [country, setCountry] = useState<string>("Kenya");
  const [projectTitle, setProjectTitle] = useState<string>("East Africa Maternal & Child Health Initiative");
  const [objective, setObjective] = useState<string>("Reduce maternal mortality and improve healthcare monitoring across rural communities.");

  const [loading, setLoading] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<any>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Sample chart data corresponding to sector metrics
  const chartData = [
    { period: "Baseline (Year 0)", Actual: 28, Target: 28 },
    { period: "Year 1 (Q2)", Actual: 42, Target: 40 },
    { period: "Midline (Year 2)", Actual: 68, Target: 60 },
    { period: "Year 3 (Q2)", Actual: 81, Target: 78 },
    { period: "Endline (Year 4)", Actual: 94, Target: 90 },
  ];

  const handleGenerate = async () => {
    setLoading(true);
    setAiResult(null);

    try {
      const res = await fetch("/api/advisory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: studioType,
          projectTitle,
          sector,
          country,
          objective,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setAiResult(data.result);
      } else {
        alert("Generation failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Error calling advisory service.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!aiResult) return;
    navigator.clipboard.writeText(JSON.stringify(aiResult, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="studio" className="py-20 bg-slate-950 text-white relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 animate-spin" /> Interactive M&E & Strategy Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Generate M&E Frameworks & Strategic Outlines
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Test and customize evaluation metrics, Theory of Change frameworks, and strategic pillars powered by Inter-Act Research Associates’ domain model.
          </p>
        </div>

        {/* Workbench Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8">
          
          {/* Top Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setStudioType("me_framework")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  studioType === "me_framework"
                    ? "bg-emerald-500 text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                M&E Framework Generator
              </button>
              <button
                onClick={() => setStudioType("strategic_plan")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  studioType === "strategic_plan"
                    ? "bg-emerald-500 text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Strategic Plan Builder
              </button>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              Focus Region: <strong>Kenya • Uganda • Tanzania • Rwanda</strong>
            </div>
          </div>

          {/* Form Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Project / Program Title
              </label>
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                placeholder="e.g. Kenya Agribusiness M&E"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Sector / Theme
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Health & Nutrition">Health & Nutrition</option>
                <option value="Agriculture & Livelihoods">Agriculture & Livelihoods</option>
                <option value="Governance & Public Accountability">Governance & Public Accountability</option>
                <option value="Education & Youth Skills">Education & Youth Skills</option>
                <option value="Climate Resilience & Water (WASH)">Climate Resilience & Water (WASH)</option>
                <option value="Private Sector & MSME Growth">Private Sector & MSME Growth</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Target Country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Kenya">Kenya 🇰🇪</option>
                <option value="Uganda">Uganda 🇺🇬</option>
                <option value="Tanzania">Tanzania 🇹🇿</option>
                <option value="Rwanda">Rwanda 🇷🇼</option>
                <option value="East Africa Multi-Country">East Africa Regional 🌍</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Key Strategic Objective
              </label>
              <input
                type="text"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                placeholder="Short statement of desired impact"
              />
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating Framework...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate {studioType === "me_framework" ? "M&E Framework" : "Strategic Plan"}
                </>
              )}
            </button>
          </div>

          {/* Visualization Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-slate-800">
            
            {/* Left: Recharts Sample Indicators */}
            <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  Baseline to Endline Trajectory
                </h4>
                <span className="text-[11px] text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  {sector}
                </span>
              </div>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="period" stroke="#64748b" fontSize={10} />
                    <YAxis stroke="#64748b" fontSize={10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "8px", fontSize: "12px" }}
                    />
                    <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
                    <Area type="monotone" dataKey="Actual" stroke="#10b981" fillOpacity={1} fill="url(#colorActual)" />
                    <Area type="monotone" dataKey="Target" stroke="#06b6d4" strokeDasharray="4 4" fillOpacity={1} fill="url(#colorTarget)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <strong className="text-slate-200 block mb-1">M&E Quality Protocol:</strong>
                Data points collected using mobile ODK surveys with GPS verification across site samples in {country}.
              </div>
            </div>

            {/* Right: AI Generated / Model Output Output Display */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 min-h-[320px] flex flex-col justify-between">
              
              {!aiResult && !loading && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
                    <FileText className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Ready to Generate Output
                  </h4>
                  <p className="text-xs text-slate-400 max-w-md">
                    Click &quot;Generate {studioType === "me_framework" ? "M&E Framework" : "Strategic Plan"}&quot; above to synthesize a customized Theory of Change, Indicator Matrix, and Risk Register.
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin" />
                  <div className="text-sm font-semibold text-white">
                    Analyzing {sector} indicators in {country}...
                  </div>
                  <p className="text-xs text-slate-400">
                    Applying Inter-Act Research evaluation methodologies & standards
                  </p>
                </div>
              )}

              {aiResult && !loading && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Generated {studioType === "me_framework" ? "M&E Matrix" : "Strategic Outline"}
                      </h4>
                      <p className="text-xs text-slate-400">Title: {projectTitle}</p>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? "Copied" : "Copy JSON"}
                    </button>
                  </div>

                  <div className="max-h-96 overflow-y-auto space-y-4 pr-2 text-xs">
                    {/* Theory of change or Vision */}
                    {aiResult.theoryOfChange && (
                      <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                        <span className="font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                          Theory of Change (ToC)
                        </span>
                        <p className="text-slate-300 leading-relaxed">{aiResult.theoryOfChange}</p>
                      </div>
                    )}

                    {aiResult.vision && (
                      <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                        <span className="font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                          Strategic Vision & Mission
                        </span>
                        <p className="text-slate-200 font-semibold mb-1">{aiResult.vision}</p>
                        <p className="text-slate-400">{aiResult.mission}</p>
                      </div>
                    )}

                    {/* Outcomes / Pillars */}
                    {aiResult.outcomes && (
                      <div className="space-y-2">
                        <span className="font-bold text-slate-200 uppercase tracking-wider block">
                          Key Outcome Indicators
                        </span>
                        {aiResult.outcomes.map((out: any, i: number) => (
                          <div key={i} className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                            <div className="font-semibold text-white">{out.title}</div>
                            <div className="text-slate-300">Indicator: {out.indicator}</div>
                            <div className="text-emerald-400 font-medium">Target: {out.target}</div>
                            <div className="text-slate-500">Method: {out.dataCollector}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {aiResult.pillars && (
                      <div className="space-y-2">
                        <span className="font-bold text-slate-200 uppercase tracking-wider block">
                          Strategic Pillars
                        </span>
                        {aiResult.pillars.map((pil: any, i: number) => (
                          <div key={i} className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                            <div className="font-semibold text-emerald-400">{pil.name}</div>
                            <div className="text-slate-300">{pil.description}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Risks and Mitigation */}
                    {aiResult.risksAndMitigation && (
                      <div className="space-y-2">
                        <span className="font-bold text-slate-200 uppercase tracking-wider block">
                          Risk Matrix & Mitigation Actions
                        </span>
                        {aiResult.risksAndMitigation.map((r: any, i: number) => (
                          <div key={i} className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                            <div className="text-rose-300 font-semibold">Risk: {r.risk}</div>
                            <div className="text-slate-300 mt-1">Action: {r.mitigation}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 italic border-t border-slate-800">
                    Framework generated according to East Africa Inter-Act Research Associates standard assessment methodology.
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
