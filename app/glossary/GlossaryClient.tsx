"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { 
  GLOSSARY_TERMS, 
  GLOSSARY_CATEGORIES, 
  GlossaryTerm 
} from "@/lib/glossaryData";
import { 
  BookOpen, 
  Search, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Sparkles, 
  Filter, 
  ArrowRight,
  BookmarkCheck,
  Building2,
  FileCheck2,
  HelpCircle
} from "lucide-react";

export default function GlossaryClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [selectedLetter, setSelectedLetter] = useState<string>("ALL");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Alphabetical list derived from available terms
  const alphabet = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_TERMS.forEach((t) => {
      const firstChar = t.term.charAt(0).toUpperCase();
      if (/[A-Z]/.test(firstChar)) {
        letters.add(firstChar);
      }
    });
    return Array.from(letters).sort();
  }, []);

  // Filter terms based on Search, Category, and Letter
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((t) => {
      // Category match
      const matchesCategory =
        selectedCategory === "All Categories" || t.category === selectedCategory;

      // Letter match
      const firstChar = t.term.charAt(0).toUpperCase();
      const matchesLetter = selectedLetter === "ALL" || firstChar === selectedLetter;

      // Query match
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        t.term.toLowerCase().includes(q) ||
        (t.acronym && t.acronym.toLowerCase().includes(q)) ||
        t.shortDefinition.toLowerCase().includes(q) ||
        t.detailedDefinition.toLowerCase().includes(q) ||
        t.practicalExample.toLowerCase().includes(q);

      return matchesCategory && matchesLetter && matchesQuery;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  const handleCopy = (term: GlossaryTerm) => {
    const textToCopy = `${term.term}${term.acronym ? ` (${term.acronym})` : ""}: ${term.shortDefinition}\n\nExample: ${term.practicalExample}\nSource: Inter-Act Research Associates Glossary (https://interactresearch.org/glossary)`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedLetter("ALL");
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />

      <Breadcrumb items={[{ label: "Glossary & Terminology Handbook" }]} />

      <main className="flex-1">
        {/* Page Hero Section */}
        <section className="bg-slate-900 border-b border-slate-800 py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-slate-950/80 to-blue-950/20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <BookOpen className="w-4 h-4" /> M&E & Development Lexicon
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Glossary of Development Consulting & Evaluation Terms
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              An authoritative reference handbook for development practitioners, M&E officers, donors, and policy analysts across East Africa. Clear definitions, technical standards, and real-world field examples.
            </p>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl pt-2 text-xs">
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
                <span className="block font-black text-emerald-400 text-lg">{GLOSSARY_TERMS.length}</span>
                <span className="text-slate-400 font-medium">Curated Terms</span>
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
                <span className="block font-black text-blue-400 text-lg">5</span>
                <span className="text-slate-400 font-medium">Practice Areas</span>
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
                <span className="block font-black text-amber-400 text-lg">OECD-DAC</span>
                <span className="text-slate-400 font-medium">Standard Aligned</span>
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
                <span className="block font-black text-cyan-400 text-lg">EAC</span>
                <span className="text-slate-400 font-medium">Field Context</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Controls Bar */}
        <section className="bg-slate-900/60 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-md py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            
            {/* Search Input & Reset */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="glossary-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by term, acronym (e.g., LogFrame, GESI), or keyword..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
                {searchQuery && (
                  <button
                    id="glossary-clear-search"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                    aria-label="Clear search query"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {(searchQuery || selectedCategory !== "All Categories" || selectedLetter !== "ALL") && (
                <button
                  id="glossary-reset-filters"
                  onClick={resetFilters}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
              <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0 mr-1" />
              {GLOSSARY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`glossary-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${
                      isActive
                        ? "bg-emerald-500 text-slate-950 shadow-md"
                        : "bg-slate-950/70 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Alphabet Bar */}
            <div className="flex flex-wrap items-center gap-1 pt-1 text-xs">
              <span className="text-slate-500 font-bold uppercase text-[10px] mr-1">Filter A-Z:</span>
              <button
                id="glossary-letter-all"
                onClick={() => setSelectedLetter("ALL")}
                className={`px-2 py-1 rounded text-[11px] font-extrabold transition-all ${
                  selectedLetter === "ALL"
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                ALL
              </button>
              {alphabet.map((letter) => {
                const isActive = selectedLetter === letter;
                return (
                  <button
                    key={letter}
                    id={`glossary-letter-${letter}`}
                    onClick={() => setSelectedLetter(letter)}
                    className={`w-6 h-6 rounded flex items-center justify-center text-[11px] font-bold transition-all ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* Glossary Terms List */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Results Counter */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-8 text-xs text-slate-400">
            <p>
              Showing <span className="font-extrabold text-white">{filteredTerms.length}</span> terms 
              {selectedCategory !== "All Categories" && <span> in <span className="text-emerald-400 font-bold">{selectedCategory}</span></span>}
              {selectedLetter !== "ALL" && <span> starting with <span className="text-blue-400 font-bold">{selectedLetter}</span></span>}
            </p>
            {searchQuery && (
              <p>Search results for &ldquo;<span className="text-slate-200">{searchQuery}</span>&rdquo;</p>
            )}
          </div>

          {/* No Results Fallback */}
          {filteredTerms.length === 0 ? (
            <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-2xl max-w-xl mx-auto space-y-4">
              <HelpCircle className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No matching terms found</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We couldn&apos;t find any glossary definitions matching your filter criteria. Try adjusting your search query or selecting a different category.
              </p>
              <button
                id="glossary-empty-reset"
                onClick={resetFilters}
                className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition-all inline-flex items-center gap-2"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTerms.map((item) => {
                const isExpanded = expandedId === item.id;
                const isCopied = copiedId === item.id;

                return (
                  <div
                    key={item.id}
                    id={`term-card-${item.id}`}
                    className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl transition-all hover:border-slate-700/80 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      {/* Top Header & Badges */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                              {item.category}
                            </span>
                            {item.acronym && (
                              <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-extrabold">
                                {item.acronym}
                              </span>
                            )}
                          </div>
                          <h2 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                            {item.term}
                          </h2>
                        </div>

                        {/* Copy button */}
                        <button
                          id={`copy-term-${item.id}`}
                          onClick={() => handleCopy(item)}
                          title="Copy definition to clipboard"
                          className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all shrink-0"
                          aria-label={`Copy definition for ${item.term}`}
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Short Definition */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                        {item.shortDefinition}
                      </p>

                      {/* Expandable Detailed Context */}
                      {isExpanded && (
                        <div className="pt-3 border-t border-slate-800/80 space-y-3 text-xs animate-in fade-in slide-in-from-top-2 duration-150">
                          <div>
                            <span className="font-extrabold text-slate-300 uppercase text-[10px] tracking-wider block mb-1">
                              Detailed Technical Context
                            </span>
                            <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                              {item.detailedDefinition}
                            </p>
                          </div>

                          <div>
                            <span className="font-extrabold text-emerald-400 uppercase text-[10px] tracking-wider flex items-center gap-1 mb-1">
                              <BookmarkCheck className="w-3.5 h-3.5" /> Practical Field Case Study Example (East Africa)
                            </span>
                            <p className="text-slate-200 leading-relaxed bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/20 font-medium">
                              {item.practicalExample}
                            </p>
                          </div>

                          {item.relatedTerms && item.relatedTerms.length > 0 && (
                            <div className="pt-1 flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] text-slate-500 font-bold uppercase">Related:</span>
                              {item.relatedTerms.map((rt) => (
                                <button
                                  key={rt}
                                  id={`related-term-${rt.toLowerCase().replace(/\s+/g, '-')}`}
                                  onClick={() => setSearchQuery(rt)}
                                  className="text-[11px] text-blue-400 hover:underline font-medium"
                                >
                                  {rt}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                      <button
                        id={`expand-term-${item.id}`}
                        onClick={() => toggleExpand(item.id)}
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-all"
                      >
                        <span>{isExpanded ? "Hide Field Context" : "Read Field Context & Example"}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <Link
                        href="/contact"
                        className="text-[11px] text-slate-400 hover:text-white font-medium flex items-center gap-1"
                      >
                        <span>Consult IARA</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-slate-900 border-t border-slate-800 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
              <Sparkles className="w-4 h-4" /> Customized Evaluation Support
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Need a Tailored M&E Framework or Technical Advisory?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Inter-Act Research Associates provides bespoke study designs, capacity building programs, and independent impact evaluations across Kenya, Uganda, Tanzania, and Rwanda.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-xl flex items-center gap-2"
              >
                Request Proposal / Terminology Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/studio"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all border border-slate-700 flex items-center gap-2"
              >
                Design Framework in IARA Studio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
