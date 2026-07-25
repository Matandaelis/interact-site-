"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GLOSSARY_TERMS, 
  GLOSSARY_CATEGORIES, 
  GlossaryTerm 
} from "@/lib/glossaryData";
import { 
  BookOpen, 
  Search, 
  X, 
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
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedTermId, setCopiedTermId] = useState<string | null>(null);

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

  const handleCopyInDrawer = (term: GlossaryTerm) => {
    const textToCopy = `${term.term}${term.acronym ? ` (${term.acronym})` : ""}: ${term.shortDefinition}\n\nTechnical Context: ${term.detailedDefinition}\n\nExample: ${term.practicalExample}\nSource: Inter-Act Research Associates Glossary (https://interactresearch.org/glossary)`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedTermId(term.id);
    setTimeout(() => setCopiedTermId(null), 2000);
  };

  const handleOpenTerm = (term: GlossaryTerm) => {
    setSelectedTerm(term);
  };

  const handleSelectRelatedTerm = (termName: string) => {
    const found = GLOSSARY_TERMS.find(
      (t) =>
        t.term.toLowerCase() === termName.toLowerCase() ||
        (t.acronym && t.acronym.toLowerCase() === termName.toLowerCase()) ||
        t.id.toLowerCase() === termName.toLowerCase().replace(/\s+/g, "-")
    );
    if (found) {
      setSelectedTerm(found);
    } else {
      setSearchQuery(termName);
      setSelectedTerm(null);
      const searchInput = document.getElementById("glossary-search-input");
      if (searchInput) {
        searchInput.scrollIntoView({ behavior: "smooth" });
        searchInput.focus();
      }
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedLetter("ALL");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTerm(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
                const isCopied = copiedId === item.id;

                return (
                  <div
                    key={item.id}
                    id={`term-card-${item.id}`}
                    onClick={() => handleOpenTerm(item)}
                    className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl transition-all hover:border-emerald-500/30 hover:bg-slate-900/100 hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex flex-col justify-between group duration-200"
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
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(item);
                          }}
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
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                      <button
                        id={`expand-term-${item.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenTerm(item);
                        }}
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-all group/btn"
                      >
                        <span>Read Field Context & Example</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>

                      <Link
                        href="/contact"
                        onClick={(e) => e.stopPropagation()}
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

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedTerm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTerm(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 cursor-pointer"
              id="glossary-drawer-backdrop"
              aria-label="Close glossary detail drawer"
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full sm:max-w-xl bg-slate-900 border-l border-slate-800 shadow-2xl z-50 flex flex-col focus:outline-none"
              id="glossary-drawer-container"
              role="dialog"
              aria-modal="true"
              aria-labelledby="glossary-drawer-title"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 sticky top-0 backdrop-blur-md z-10">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                    {selectedTerm.category}
                  </span>
                  <h2 
                    id="glossary-drawer-title" 
                    className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 flex-wrap"
                  >
                    <span>{selectedTerm.term}</span>
                    {selectedTerm.acronym && (
                      <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-extrabold">
                        {selectedTerm.acronym}
                      </span>
                    )}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  {/* Copy button */}
                  <button
                    id="drawer-copy-btn"
                    onClick={() => handleCopyInDrawer(selectedTerm)}
                    title="Copy full definition and example"
                    className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all flex items-center justify-center shrink-0"
                    aria-label={`Copy definition for ${selectedTerm.term}`}
                  >
                    {copiedTermId === selectedTerm.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  {/* Close button */}
                  <button
                    id="drawer-close-btn"
                    onClick={() => setSelectedTerm(null)}
                    className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all flex items-center justify-center shrink-0"
                    aria-label="Close drawer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Drawer Body - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 no-scrollbar">
                {/* Short Definition */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                    Core Definition
                  </span>
                  <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-semibold">
                    {selectedTerm.shortDefinition}
                  </p>
                </div>

                {/* Detailed Context */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                    Detailed Technical Context
                  </span>
                  <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 text-slate-300 text-sm leading-relaxed space-y-3">
                    <p>{selectedTerm.detailedDefinition}</p>
                  </div>
                </div>

                {/* Practical Example */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
                    <BookmarkCheck className="w-4 h-4" /> Practical Field Case Study Example (East Africa)
                  </span>
                  <div className="bg-emerald-950/25 p-5 rounded-2xl border border-emerald-500/20 text-slate-200 text-sm leading-relaxed font-medium">
                    {selectedTerm.practicalExample}
                  </div>
                </div>

                {/* Related Terms */}
                {selectedTerm.relatedTerms && selectedTerm.relatedTerms.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                      Related Terminology
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedTerm.relatedTerms.map((rt) => (
                        <button
                          key={rt}
                          id={`drawer-related-${rt.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => handleSelectRelatedTerm(rt)}
                          className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-blue-400 hover:text-blue-300 text-xs font-bold transition-all flex items-center gap-1.5"
                          aria-label={`View related term ${rt}`}
                        >
                          <span>{rt}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-slate-800 bg-slate-950/80 backdrop-blur-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Ref: IARA-MEAL-EAC-{selectedTerm.id.toUpperCase().substring(0, 4)}
                </span>
                <Link
                  href="/contact"
                  id="drawer-consult-iara-btn"
                  onClick={() => setSelectedTerm(null)}
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Consult IARA on this Term</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
