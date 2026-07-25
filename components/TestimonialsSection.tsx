"use client";

import React, { useState } from "react";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/MotionSection";
import { 
  Quote, 
  Star, 
  Award, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2, 
  Sparkles, 
  FileText,
  Users,
  ArrowRight,
  ThumbsUp
} from "lucide-react";

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  logoText: string;
  category: "International Development" | "Disability & Inclusion" | "Public Sector & Policy" | "M&E & Research";
  quote: string;
  projectTitle: string;
  location: string;
  rating: number;
  featured?: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: "usaid",
    clientName: "Democracy & Governance Lead",
    role: "Senior Program Manager",
    organization: "USAID East Africa Regional Mission",
    logoText: "USAID",
    category: "International Development",
    quote: "Inter-Act Research Associates demonstrated exceptional technical rigor in applying mixed-method MERL frameworks across remote field sites in Kenya and Uganda. Their empirical findings directly shaped our subsequent multi-year governance strategy.",
    projectTitle: "Final Evaluation of Civic Engagement & Accountability Initiative",
    location: "Nairobi, Kenya & Kampala, Uganda",
    rating: 5,
    featured: true
  },
  {
    id: "unwomen",
    clientName: "Regional Programme Specialist",
    role: "Gender & Human Rights Lead",
    organization: "UN Women East & Southern Africa",
    logoText: "UN WOMEN",
    category: "Disability & Inclusion",
    quote: "IARA's participatory approach and deep alignment with UN CRPD guidelines ensured that Persons with Disabilities and local women's rights organizations were actively engaged. Their data collection protocols set a benchmark for inclusive research.",
    projectTitle: "Gender Responsive Budgeting & Disability Inclusion Assessment",
    location: "Regional (Kenya, Rwanda, Tanzania)",
    rating: 5,
    featured: true
  },
  {
    id: "drf",
    clientName: "Regional Grant Officer",
    role: "East Africa Portfolio Manager",
    organization: "Disability Rights Fund (DRF)",
    logoText: "DRF",
    category: "Disability & Inclusion",
    quote: "The physical, digital, and institutional accessibility audit performed by IARA was unmatched in depth. Their actionable recommendations enabled our grantee Organizations of Persons with Disabilities to strengthen institutional governance significantly.",
    projectTitle: "Accessibility Audit & OPD Organizational Capacity Evaluation",
    location: "East Africa Region",
    rating: 5,
    featured: true
  },
  {
    id: "vso",
    clientName: "Monitoring & Evaluation Specialist",
    role: "Regional MERL Manager",
    organization: "VSO International",
    logoText: "VSO",
    category: "M&E & Research",
    quote: "IARA's field enumerator network demonstrated top-tier professionalism across complex multi-county field assignments. Their baseline matrices provided high clarity for our outcome harvesting activities.",
    projectTitle: "Youth Livelihood Baseline & Indicator Matrix Formulation",
    location: "Kenya & Tanzania",
    rating: 5
  },
  {
    id: "eacso",
    clientName: "Executive Coordinator",
    role: "Regional Network Secretariat",
    organization: "East African Civil Society Forum",
    logoText: "EACSO FORUM",
    category: "Public Sector & Policy",
    quote: "Working with IARA across four EAC partner states was seamless. Their regional pool of senior consultants brought both local contextual knowledge and high-level strategic alignment.",
    projectTitle: "Strategic Plan & Cross-Border Advocacy Evaluation",
    location: "EAC Region (Kenya, Uganda, Tanzania, Rwanda)",
    rating: 5
  }
];

interface TestimonialsSectionProps {
  onOpenConsultation?: () => void;
}

export default function TestimonialsSection({ onOpenConsultation }: TestimonialsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "International Development", "Disability & Inclusion", "Public Sector & Policy", "M&E & Research"];

  const filteredTestimonials = selectedCategory === "All"
    ? testimonialsData
    : testimonialsData.filter(t => t.category === selectedCategory);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200 text-slate-900">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <MotionSection className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-blue-800" /> Institutional Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Leading Global & Regional Organizations
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Read direct feedback from development partners, multilateral agencies, and government bodies across East Africa on our research rigor, timeliness, and empirical quality.
          </p>
        </MotionSection>

        {/* Client Stats Banner */}
        <MotionSection delay={0.1}>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-1 border-r border-slate-100 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 flex items-center justify-center gap-1">
                <span>100%</span>
                <ThumbsUp className="w-5 h-5 text-blue-800" />
              </div>
              <p className="text-xs text-slate-600 font-bold">On-Time Delivery Rate</p>
            </div>
            <div className="space-y-1 border-r border-slate-100 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 flex items-center justify-center gap-1">
                <span>17+</span>
                <CheckCircle2 className="w-5 h-5 text-blue-800" />
              </div>
              <p className="text-xs text-slate-600 font-bold">Major Regional Assignments</p>
            </div>
            <div className="space-y-1 border-r border-slate-100 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 flex items-center justify-center gap-1">
                <span>4</span>
                <Globe2 className="w-5 h-5 text-blue-800" />
              </div>
              <p className="text-xs text-slate-600 font-bold">EAC Target Countries</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 flex items-center justify-center gap-1">
                <span>98%</span>
                <ShieldCheck className="w-5 h-5 text-blue-800" />
              </div>
              <p className="text-xs text-slate-600 font-bold">Client Re-Engagement</p>
            </div>
          </div>
        </MotionSection>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-900 text-white shadow-xs"
                  : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <div className="bg-white border border-slate-200 hover:border-blue-300 transition-all rounded-2xl p-6 shadow-xs flex flex-col justify-between h-full space-y-6 relative group">
                
                {/* Header Badge & Rating */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 font-bold text-xs">
                        {item.logoText.slice(0, 2)}
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-slate-900 block">{item.organization}</span>
                        <span className="text-[10px] text-slate-500 block font-medium">{item.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Project Title Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    <FileText className="w-3 h-3 text-blue-800 flex-shrink-0" />
                    <span className="line-clamp-1">{item.projectTitle}</span>
                  </div>

                  {/* Quote Body */}
                  <div className="relative pt-1">
                    <Quote className="w-6 h-6 text-blue-200 absolute -top-2 -left-1 -z-10" />
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Footer Client Author */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.clientName}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{item.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-blue-800" /> Verified Partner
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Banner */}
        <MotionSection delay={0.2}>
          <div className="bg-blue-900 text-white border border-blue-950 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Ready to Partner for Empirical Impact?
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Request Detailed Client References or Technical Proposals
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm">
                Our Executive Leadership team is available to discuss RFP submissions, baseline studies, accessibility audits, or institutional capacity building across East Africa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="bg-white hover:bg-blue-50 text-blue-900 font-extrabold px-5 py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                Request Proposal / RFP
                <ArrowRight className="w-4 h-4 text-blue-800" />
              </button>
            </div>
          </div>
        </MotionSection>

      </div>
    </section>
  );
}
