"use client";

import React, { useState } from "react";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/MotionSection";
import { 
  BookOpenCheck, 
  Download, 
  FileText, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Layers,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export interface ResourceItem {
  id: string;
  title: string;
  category: "M&E Frameworks" | "Disability & Inclusion" | "Governance & Cap 499" | "Research Methodologies";
  description: string;
  fileFormat: string;
  fileSize: string;
  downloadCount: number;
  publishedYear: string;
  featured?: boolean;
}

const resourcesList: ResourceItem[] = [
  {
    id: "me-indicator-matrix",
    title: "Comprehensive MERL Indicator Matrix & Baseline Guide",
    category: "M&E Frameworks",
    description: "Standardized indicator definitions, baseline targets, and data collection protocols tailored for regional development projects in East Africa.",
    fileFormat: "PDF Toolkit",
    fileSize: "2.4 MB",
    downloadCount: 1420,
    publishedYear: "2025",
    featured: true
  },
  {
    id: "disability-audit-checklist",
    title: "UN CRPD Inclusive Physical & Digital Accessibility Checklist",
    category: "Disability & Inclusion",
    description: "A practical 45-point audit framework evaluating physical facility access, digital portal compliance, and organizational disability inclusion.",
    fileFormat: "PDF Guide",
    fileSize: "1.8 MB",
    downloadCount: 980,
    publishedYear: "2024",
    featured: true
  },
  {
    id: "cap499-governance-manual",
    title: "Kenyan Company's Act (Cap 499) CSOs Compliance Manual",
    category: "Governance & Cap 499",
    description: "Institutional governance guidelines, statutory compliance requirements, and operational best practices for non-profits and consulting firms.",
    fileFormat: "PDF Manual",
    fileSize: "3.1 MB",
    downloadCount: 750,
    publishedYear: "2024"
  },
  {
    id: "gender-responsive-eval",
    title: "Gender-Responsive & Participatory Research Toolkit",
    category: "Research Methodologies",
    description: "Qualitative focus group protocols, ethical consent workflows, and intersectional gender analysis frameworks for field researchers.",
    fileFormat: "ZIP Pack",
    fileSize: "4.2 MB",
    downloadCount: 1100,
    publishedYear: "2025"
  },
  {
    id: "capacity-assessment-tool",
    title: "Organization of Persons with Disabilities (OPD) Capacity Index",
    category: "Disability & Inclusion",
    description: "Diagnostic assessment questionnaire measuring governance, financial stewardship, advocacy reach, and sustainability for local OPDs.",
    fileFormat: "PDF & XLSX",
    fileSize: "2.9 MB",
    downloadCount: 860,
    publishedYear: "2025"
  },
  {
    id: "toc-design-template",
    title: "Theory of Change (ToC) Interactive Design Framework",
    category: "M&E Frameworks",
    description: "Step-by-step mapping model converting project inputs, outputs, outcomes, and long-term impact pathways with risk assumptions.",
    fileFormat: "PDF & PPTX",
    fileSize: "3.5 MB",
    downloadCount: 1310,
    publishedYear: "2024"
  }
];

export default function ResourcesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const categories = ["All", "M&E Frameworks", "Disability & Inclusion", "Governance & Cap 499", "Research Methodologies"];

  const filteredResources = resourcesList.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSimulatedDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert(`Thank you! "${title}" is ready for download. Inter-Act Research Associates appreciates your interest.`);
    }, 1200);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <MotionSection className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold">
            <BookOpenCheck className="w-3.5 h-3.5 text-blue-800" /> Technical Publications & Toolkits
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Knowledge Repository & Practice Guides
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Download practitioner toolkits, accessibility audit templates, MERL indicator matrices, and capacity assessment guides published by IARA experts.
          </p>
        </MotionSection>

        {/* Search & Category Filter Bar */}
        <MotionSection delay={0.1} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xs">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications or toolkits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-900 text-white shadow-xs"
                      : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Grid of Resources */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <div className="bg-white border border-slate-200 hover:border-blue-300 transition-all rounded-2xl p-6 shadow-xs flex flex-col justify-between h-full space-y-5 group">
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{item.publishedYear}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      {item.fileFormat} ({item.fileSize})
                    </span>
                    <span className="flex items-center gap-1 text-slate-600 font-mono">
                      <Download className="w-3.5 h-3.5 text-blue-800" />
                      {item.downloadCount} downloads
                    </span>
                  </div>

                  <button
                    onClick={() => handleSimulatedDownload(item.id, item.title)}
                    disabled={downloadingId === item.id}
                    className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    {downloadingId === item.id ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Preparing Toolkit...
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-blue-200" />
                        Download Publication
                      </>
                    )}
                  </button>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filteredResources.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            No technical publications match your current filter. Try searching for a different keyword or category.
          </div>
        )}

      </div>
    </section>
  );
}
