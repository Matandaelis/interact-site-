"use client";

import React, { useState, useMemo } from "react";
import { MotionSection } from "@/components/MotionSection";
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  Sparkles,
  PhoneCall,
  Mail,
  CheckCircle2,
  X
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "rfp" | "operations" | "merl" | "compliance";
  categoryLabel: string;
  question: string;
  answer: React.ReactNode;
  tags: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "rfp-submission",
    category: "rfp",
    categoryLabel: "RFPs & Proposals",
    question: "How do I submit a Request for Proposal (RFP) or Terms of Reference (ToR)?",
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          You can submit your RFP, EOI (Expression of Interest), or ToR directly through our secure online consultation form on this page, or send documentation via email to{" "}
          <a href="mailto:interactresearchassociates@gmail.com" className="text-emerald-400 font-semibold underline hover:text-emerald-300">
            interactresearchassociates@gmail.com
          </a>.
        </p>
        <p>
          Our Executive Director, <strong className="text-white">Kennedy S. Okumu</strong>, and the senior technical bid team acknowledge all submissions within <strong className="text-emerald-400">12–24 business hours</strong> and provide detailed technical and financial proposals promptly.
        </p>
      </div>
    ),
    tags: ["rfp", "tor", "tender", "proposal", "bidding", "email"]
  },
  {
    id: "geographical-reach",
    category: "operations",
    categoryLabel: "Field Operations & Reach",
    question: "Which geographical areas and countries in East Africa does IARA cover?",
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          We operate across all 47 counties of <strong className="text-white">Kenya</strong> (including remote Arid and Semi-Arid Lands like Garissa, Turkana, Mandera, and Wajir), as well as regional hubs in <strong className="text-white">Uganda</strong> (Kampala, Gulu, Arua), <strong className="text-white">Tanzania</strong> (Dar es Salaam, Arusha, Dodoma), and <strong className="text-white">Rwanda</strong> (Kigali).
        </p>
        <p>
          Our network includes over 420 certified, multi-lingual field enumerators fluent in Swahili, Somali, Oromo, Dinka, Luganda, French, and English, allowing for culturally respectful and rapid field data collection.
        </p>
      </div>
    ),
    tags: ["kenya", "uganda", "tanzania", "rwanda", "counties", "fieldwork", "enumerators"]
  },
  {
    id: "turnaround-timeline",
    category: "operations",
    categoryLabel: "Field Operations & Reach",
    question: "What is the typical turnaround timeline for a baseline survey or impact evaluation?",
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          Comprehensive research assignments (baseline, mid-term, endline, or strategy development) typically span <strong className="text-white">3 to 8 weeks</strong> from inception to final report presentation.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs sm:text-sm">
          <li><strong className="text-emerald-400">Inception & Tool Design:</strong> 3–7 business days (IRB approval & tool scripting)</li>
          <li><strong className="text-emerald-400">Field Enumeration:</strong> 5–14 days (with real-time data sync & daily QA)</li>
          <li><strong className="text-emerald-400">Draft Report & Validation:</strong> 7–10 days post-data cleaning</li>
        </ul>
        <p className="text-xs text-slate-400 italic">
          * Rapid-response field teams can be mobilized within 48 hours for urgent emergency assessments or humanitarian audits.
        </p>
      </div>
    ),
    tags: ["timeline", "duration", "rapid deployment", "schedule", "baseline", "reporting"]
  },
  {
    id: "data-quality-ethics",
    category: "merl",
    categoryLabel: "Data Ethics & MERL",
    question: "How does IARA ensure field data quality, accuracy, and IRB ethics compliance?",
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          All studies are governed by our internal <strong className="text-white">Scientific Research Committee</strong> adhering to strict ethical protocols:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs">
            <span className="text-emerald-400 font-bold block">Mobile Data Collection</span>
            ODK, KoboToolbox & CSPro with built-in validation constraints and logic skips.
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs">
            <span className="text-cyan-400 font-bold block">Geo-Verification & Audio QA</span>
            GPS stamped coordinate logging and random back-check audio sampling.
          </div>
        </div>
      </div>
    ),
    tags: ["ethics", "irb", "odk", "kobotoolbox", "gps", "quality control", "merl"]
  },
  {
    id: "disability-accessibility",
    category: "merl",
    categoryLabel: "Data Ethics & MERL",
    question: "What experience does IARA have in disability inclusion audits & mainstreaming?",
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          Disability mainstreaming is a flagship research practice area at IARA. We have conducted physical, digital, and institutional accessibility assessments across public healthcare facilities, county assemblies, and learning institutions in East Africa.
        </p>
        <p>
          Our research tools incorporate the <strong className="text-white">Washington Group Questions</strong> for disability disaggregation, and field teams include certified sign-language interpreters and tactile survey specialists.
        </p>
      </div>
    ),
    tags: ["disability", "inclusion", "accessibility", "washington group", "audit", "wheelchair"]
  },
  {
    id: "registration-compliance",
    category: "compliance",
    categoryLabel: "Compliance & Registration",
    question: "Is Inter-Act Research Associates an officially registered and tax-compliant entity?",
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          Yes. Inter-Act Research Associates is fully incorporated and licensed under the <strong className="text-white">Registration of Business Names Act (Cap 499 Section 4, Reg. No. 222831)</strong> in Nairobi, Kenya.
        </p>
        <p>
          We are fully tax-compliant with Kenya Revenue Authority (KRA), possess valid local government business permits, and maintain active professional indemnity coverage for all consulting engagements.
        </p>
      </div>
    ),
    tags: ["registration", "kra", "tax", "cap499", "compliance", "legal", "nairobi"]
  },
  {
    id: "capacity-building",
    category: "merl",
    categoryLabel: "Data Ethics & MERL",
    question: "Do you offer customized MERL and organizational capacity building for staff?",
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          Yes. Beyond evaluation studies, we deliver tailored executive workshops and practical staff training modules in:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs sm:text-sm">
          <li>Designing Theory of Change & Logical Framework Matrices</li>
          <li>Mobile survey tool scripting (Kobo/ODK/CSPro) and quantitative data analysis (SPSS, R, Stata)</li>
          <li>Qualitative data synthesis and participatory rural appraisal (PRA) techniques</li>
          <li>Board governance, strategic planning, and performance management systems</li>
        </ul>
      </div>
    ),
    tags: ["training", "capacity building", "workshops", "spss", "stata", "theory of change"]
  }
];

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["rfp-submission"]));

  // Toggle single item
  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand or collapse all visible items
  const expandAll = (visibleIds: string[]) => {
    setOpenItems(new Set(visibleIds));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  // Filter logic based on search and category
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuestion = item.question.toLowerCase().includes(query);
      const matchesTags = item.tags.some((tag) => tag.toLowerCase().includes(query));
      const matchesCatLabel = item.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && (matchesQuestion || matchesTags || matchesCatLabel);
    });
  }, [selectedCategory, searchQuery]);

  const visibleIds = useMemo(() => filteredFaqs.map((f) => f.id), [filteredFaqs]);

  return (
    <section className="py-16 bg-slate-900/60 border-t border-b border-slate-800 relative overflow-hidden" id="faq">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header Title */}
        <MotionSection className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Have Questions Before Partnering or Submitting an RFP?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Quick answers to common inquiries regarding proposal submissions, field operations across East Africa, empirical MERL protocols, and compliance.
          </p>
        </MotionSection>

        {/* Filter Controls: Search & Categories */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., RFP, ODK, Kenya, KRA)..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                aria-label="Search frequently asked questions"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Expand / Collapse All Quick Actions */}
            <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-medium">
              <button
                onClick={() => expandAll(visibleIds)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs font-semibold">
            {[
              { id: "all", label: "All Questions", icon: HelpCircle },
              { id: "rfp", label: "RFPs & Proposals", icon: FileText },
              { id: "operations", label: "Field Operations & Reach", icon: MapPin },
              { id: "merl", label: "Data Ethics & MERL", icon: ShieldCheck },
              { id: "compliance", label: "Compliance & Legal", icon: Award },
            ].map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all border ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-slate-950" : "text-emerald-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openItems.has(faq.id);
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900 border-emerald-500/50 shadow-xl"
                    : "bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 font-bold text-xs ${
                      isOpen 
                        ? "bg-emerald-500 text-slate-950" 
                        : "bg-slate-800 text-emerald-400 border border-slate-700"
                    }`}>
                      Q
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                        {faq.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-slate-800 text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Box */}
                {isOpen && (
                  <div 
                    id={`faq-answer-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-slate-800/80 animate-in fade-in duration-200"
                  >
                    <div className="pl-10 pt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
              <h3 className="text-lg font-bold text-white">No questions matched your query</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Try searching for broader keywords like &quot;RFP&quot;, &quot;Kenya&quot;, &quot;MERL&quot;, &quot;ODK&quot;, or reset the category filter above.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Direct CTA Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Direct Technical Helpdesk
            </span>
            <h3 className="text-xl font-bold text-white">
              Didn&apos;t find what you were looking for?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our lead research team in Nairobi is ready to discuss your specific terms of reference, sampling frame, or proposal timeline directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:0702103653"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4" /> Call 0702103653
            </a>
            <a
              href="mailto:interactresearchassociates@gmail.com"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-emerald-400" /> Direct Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
