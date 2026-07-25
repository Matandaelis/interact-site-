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
      <div className="space-y-2 text-slate-700">
        <p>
          You can submit your RFP, EOI (Expression of Interest), or ToR directly through our secure online consultation form on this page, or send documentation via email to{" "}
          <a href="mailto:interactresearchassociates@gmail.com" className="text-blue-900 font-bold underline hover:text-blue-950">
            interactresearchassociates@gmail.com
          </a>.
        </p>
        <p>
          Our Executive Director, <strong className="text-slate-900">Kennedy S. Okumu</strong>, and the senior technical bid team acknowledge all submissions within <strong className="text-blue-900 font-bold">12–24 business hours</strong> and provide detailed technical and financial proposals promptly.
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
      <div className="space-y-2 text-slate-700">
        <p>
          We operate across all 47 counties of <strong className="text-slate-900">Kenya</strong> (including remote Arid and Semi-Arid Lands like Garissa, Turkana, Mandera, and Wajir), as well as regional hubs in <strong className="text-slate-900">Uganda</strong> (Kampala, Gulu, Arua), <strong className="text-slate-900">Tanzania</strong> (Dar es Salaam, Arusha, Dodoma), and <strong className="text-slate-900">Rwanda</strong> (Kigali).
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
      <div className="space-y-2 text-slate-700">
        <p>
          Comprehensive research assignments (baseline, mid-term, endline, or strategy development) typically span <strong className="text-slate-900">3 to 8 weeks</strong> from inception to final report presentation.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs sm:text-sm">
          <li><strong className="text-blue-900 font-bold">Inception & Tool Design:</strong> 3–7 business days</li>
          <li><strong className="text-blue-900 font-bold">Field Enumerator Training & Data Collection:</strong> 7–14 business days</li>
          <li><strong className="text-blue-900 font-bold">Data Cleaning, Analysis & Draft Report:</strong> 7–10 business days</li>
        </ul>
      </div>
    ),
    tags: ["timeline", "turnaround", "baseline", "evaluation", "weeks"]
  },
  {
    id: "data-security-ethics",
    category: "merl",
    categoryLabel: "Data Ethics & MERL",
    question: "How does IARA ensure data ethics, participant consent, and data protection?",
    answer: (
      <div className="space-y-2 text-slate-700">
        <p>
          All IARA research studies strictly comply with national and international data privacy protocols, including the Kenya Data Protection Act (2019) and UN CRPD ethics frameworks.
        </p>
        <p>
          We mandate informed consent forms (available in local languages, Braille, and plain language format), implement anonymized data encryption on ODK/KoboToolbox servers, and enforce strict child safeguarding and gender-sensitive protocols.
        </p>
      </div>
    ),
    tags: ["ethics", "privacy", "data protection", "consent", "odk", "kobo"]
  },
  {
    id: "legal-registration",
    category: "compliance",
    categoryLabel: "Compliance & Legal",
    question: "Is Inter-Act Research Associates formally registered and compliant?",
    answer: (
      <div className="space-y-2 text-slate-700">
        <p>
          Yes. Inter-Act Research Associates is fully incorporated in Kenya under the <strong className="text-slate-900">Company&apos;s Act (Cap 499 Section 4)</strong> (Registration No. 210365).
        </p>
        <p>
          We hold valid tax compliance certificates, regional operational licenses, and adhere strictly to statutory governance standards required by international development donors.
        </p>
      </div>
    ),
    tags: ["legal", "registration", "cap 499", "compliance", "tax", "license"]
  }
];

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["rfp-submission"]));

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = (ids: string[]) => {
    setOpenItems(new Set(ids));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const visibleIds = useMemo(() => filteredFaqs.map((f) => f.id), [filteredFaqs]);

  return (
    <section id="faq" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <MotionSection className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800" /> Executive FAQ Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Technical Questions
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm max-w-xl mx-auto">
            Find immediate clarity on proposal submission procedures, field enumerator reach, MERL methodologies, and statutory legal compliance.
          </p>
        </MotionSection>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs by keyword (e.g. RFP, Kenya, ODK)..."
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-9 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-bold">
              <button
                onClick={() => expandAll(visibleIds)}
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs font-bold">
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
                      ? "bg-blue-900 text-white font-bold border-blue-950 shadow-xs"
                      : "bg-white text-slate-800 hover:bg-slate-100 border-slate-200"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-blue-800"}`} />
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
                    ? "bg-white border-blue-400 shadow-sm"
                    : "bg-white hover:bg-slate-50 border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-900/50 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 font-extrabold text-xs ${
                      isOpen 
                        ? "bg-blue-900 text-white" 
                        : "bg-slate-100 text-blue-900 border border-slate-200"
                    }`}>
                      Q
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 block mb-0.5">
                        {faq.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-blue-50 text-blue-900 border border-blue-200" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Box */}
                {isOpen && (
                  <div 
                    id={`faq-answer-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    <div className="pl-10 pt-4 text-xs sm:text-sm leading-relaxed text-slate-700">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No questions matched your query</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try searching for broader keywords like &quot;RFP&quot;, &quot;Kenya&quot;, &quot;MERL&quot;, &quot;ODK&quot;, or reset the category filter above.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Direct CTA Card */}
        <div className="bg-blue-900 text-white border border-blue-950 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-200 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Direct Technical Helpdesk
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Didn&apos;t find what you were looking for?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Our lead research team in Nairobi is ready to discuss your specific terms of reference, sampling frame, or proposal timeline directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:0702103653"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-blue-800" /> Call 0702103653
            </a>
            <a
              href="mailto:interactresearchassociates@gmail.com"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs border border-blue-800 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-blue-200" /> Direct Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
