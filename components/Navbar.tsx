"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import AccessibilityModal from "./AccessibilityModal";
import { 
  Building2, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Sparkles, 
  FileText, 
  Globe2, 
  BarChart3, 
  Award,
  Layers,
  MapPin,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Accessibility,
  GraduationCap,
  Compass,
  Sprout,
  ShieldCheck,
  BookOpen,
  Calculator,
  Users2,
  FolderKanban,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  // Close mobile menu & mega menu on route change or ESC key
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveMegaMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open on small screens
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Practice Areas for Services Mega Menu
  const practiceAreas = [
    {
      id: "me",
      href: "/services/me",
      title: "Monitoring, Evaluation, Reporting & Learning (MERL)",
      short: "MERL & Formative Research",
      icon: BarChart3,
      badge: "Flagship Practice",
      desc: "Baseline surveys, mid-term & endline impact evaluations, TPM, & ODK/Kobo real-time dashboards."
    },
    {
      id: "da",
      href: "/services/da",
      title: "Disability Mainstreaming & Social Inclusion",
      short: "Disability & Gender Inclusion",
      icon: Accessibility,
      badge: "Specialized Unit",
      desc: "Washington Group survey sets, accessibility audits, & policy mainstreaming for vulnerable groups."
    },
    {
      id: "cb",
      href: "/services/cb",
      title: "Capacity Building, Institutional Training & Mentorship",
      short: "Capacity Building & Training",
      icon: GraduationCap,
      badge: "Core Capability",
      desc: "Curriculum development, MERL workshops, enumeration training, & institutional strengthening."
    },
    {
      id: "sp",
      href: "/services/sp",
      title: "Strategic Planning & Policy Development",
      short: "Strategic Planning & Policy",
      icon: Compass,
      badge: "Governance",
      desc: "5-Year Strategic Plans, Theory of Change facilitation, policy analysis, & organizational reviews."
    },
    {
      id: "livelihood",
      href: "/services/livelihood",
      title: "Livelihoods, Agriculture & Climate Resilience",
      short: "Livelihoods & Resilience",
      icon: Sprout,
      badge: "Community Practice",
      desc: "Value chain analysis, ASAL climate adaptation metrics, market systems, & food security studies."
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white transition-colors">
      {/* Top Direct Contact Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2 sm:gap-4 text-slate-300 min-w-0">
            <span className="flex items-center gap-1.5 font-medium truncate">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="hidden sm:inline truncate">Unipen Plaza, Argwings Kodhek Rd, Nairobi, Kenya</span>
              <span className="sm:hidden truncate">Nairobi, KE</span>
            </span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-semibold shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Est. 2013</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-slate-300 shrink-0">
            <AccessibilityModal />
            <ThemeToggle className="text-xs" />
            <a 
              href="mailto:interactresearchassociates@gmail.com" 
              className="hidden md:flex items-center gap-1 hover:text-emerald-400 transition-colors"
              title="Email Inter-Act Research Associates"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="hidden xl:inline">interactresearchassociates@gmail.com</span>
              <span className="xl:hidden">Email</span>
            </a>
            <a 
              href="tel:0702103653" 
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors font-bold text-white bg-emerald-950/70 hover:bg-emerald-900/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-emerald-500/30"
              title="Call Direct Office Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>0702103653</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo & Branding */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0"
            onClick={() => setActiveMegaMenu(null)}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 p-0.5 shadow-md shadow-emerald-950/50 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-emerald-400 text-xs sm:text-sm tracking-wider">
                IARA
              </div>
            </div>
            <div className="min-w-0">
              <span className="font-extrabold text-sm sm:text-base lg:text-lg text-white block tracking-tight group-hover:text-emerald-400 transition-colors truncate">
                INTER-ACT <span className="text-emerald-400">RESEARCH</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest block -mt-0.5 truncate">
                Associates • Nairobi, KE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items with Mega Menu Triggers */}
          <nav className="hidden xl:flex items-center gap-1">
            <Link
              href="/"
              className={`px-2.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                pathname === "/" 
                  ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                  : "text-slate-300 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              Overview
            </Link>

            {/* Services & Practice Areas (Mega Menu 1) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  pathname.startsWith("/services") || activeMegaMenu === "services"
                    ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                <span>Services & Expertise</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "services" ? "rotate-180 text-emerald-400" : "text-slate-400"}`} />
              </Link>
            </div>

            {/* Who We Are (Mega Menu 2) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/about"
                className={`px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  pathname === "/about" || activeMegaMenu === "about"
                    ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                <span>Who We Are</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "about" ? "rotate-180 text-emerald-400" : "text-slate-400"}`} />
              </Link>
            </div>

            {/* Past Assignments (Mega Menu 3) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("portfolio")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/portfolio"
                className={`px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  pathname === "/portfolio" || activeMegaMenu === "portfolio"
                    ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                <span>Track Record</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "portfolio" ? "rotate-180 text-emerald-400" : "text-slate-400"}`} />
              </Link>
            </div>

            {/* M&E Studio (Mega Menu 4) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("studio")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/studio"
                className={`px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  pathname === "/studio" || activeMegaMenu === "studio"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold" 
                    : "text-emerald-400/90 hover:text-emerald-400 hover:bg-emerald-500/10"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>M&E Studio AI</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "studio" ? "rotate-180 text-emerald-400" : "text-slate-400"}`} />
              </Link>
            </div>

            <Link
              href="/regional"
              className={`px-2.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                pathname === "/regional" 
                  ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                  : "text-slate-300 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              Regional
            </Link>

            <Link
              href="/resources"
              className={`px-2.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                pathname === "/resources" 
                  ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                  : "text-slate-300 hover:text-white hover:bg-slate-900/60"
              }`}
            >
              Toolkits
            </Link>
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden xl:flex items-center gap-2">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-xs px-3.5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-1.5 shrink-0"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Request RFP</span>
            </Link>
          </div>

          {/* Mobile & Tablet Toggle Controls */}
          <div className="xl:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-1 bg-emerald-500 text-slate-950 font-extrabold text-xs px-3 py-2 rounded-xl transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request RFP</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-200 hover:text-white border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP MEGA MENU PANELS (Absolute Overlay on Hover/Focus) */}
      {/* ========================================================= */}
      {activeMegaMenu && (
        <div 
          className="hidden xl:block absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-8 transition-all animate-in fade-in slide-in-from-top-2 duration-200 z-50"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6">
            
            {/* 1. SERVICES MEGA MENU */}
            {activeMegaMenu === "services" && (
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Main 5 Practice Grid (8 cols) */}
                <div className="col-span-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Technical Capabilities</span>
                      <h3 className="text-base font-bold text-white">5 Specialized Consulting Practices</h3>
                    </div>
                    <Link 
                      href="/services" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      View All Practice Catalog <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {practiceAreas.map((pa) => {
                      const IconComp = pa.icon;
                      return (
                        <Link
                          key={pa.id}
                          href={pa.href}
                          onClick={() => setActiveMegaMenu(null)}
                          className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group flex items-start gap-3"
                        >
                          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                                {pa.short}
                              </h4>
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                {pa.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                              {pa.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Right Callout Card (4 cols) */}
                <div className="col-span-4 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <Sparkles className="w-3 h-3" /> Practice Studio Generator
                    </span>
                    <h4 className="text-sm font-bold text-white">Generate M&E Frameworks Instantly</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Use our interactive Studio tool to automatically build Logical Frameworks, Theory of Change diagrams, and baseline survey sampling matrices.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <Link
                      href="/studio"
                      onClick={() => setActiveMegaMenu(null)}
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition-all shadow flex items-center justify-center gap-2 block text-center"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Open Studio AI Builder
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setActiveMegaMenu(null)}
                      className="w-full bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 block text-center"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Submit Technical RFP
                    </Link>
                  </div>
                </div>

              </div>
            )}

            {/* 2. WHO WE ARE MEGA MENU */}
            {activeMegaMenu === "about" && (
              <div className="grid grid-cols-12 gap-8 items-start">
                
                <div className="col-span-8 grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Institutional Profile</span>
                    <h3 className="text-sm font-bold text-white">About Inter-Act Research Associates</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Registered under Cap 499 Section 4 of Kenya Companies Act (Established 2013). We specialize in policy evaluation, social inclusion, and field-based research across East and Horn of Africa.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Registered Corporate Entity since 2013</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>OECD-DAC Evaluation Standards Compliant</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Institutional Review Board (IRB) Protocols</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Key Information</span>
                    <div className="space-y-2">
                      <Link 
                        href="/about#profile" 
                        onClick={() => setActiveMegaMenu(null)}
                        className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 block transition-all group"
                      >
                        <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 flex items-center justify-between">
                          <span>Governance & Leadership</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-1">Multi-disciplinary team of lead consultants & statisticians.</p>
                      </Link>

                      <Link 
                        href="/about#ethics" 
                        onClick={() => setActiveMegaMenu(null)}
                        className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 block transition-all group"
                      >
                        <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 flex items-center justify-between">
                          <span>Research Ethics & Safeguards</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-1">Washington Group sets, child protection, & data privacy.</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Regional Coverage</span>
                  <h4 className="text-sm font-bold text-white">East & Horn of Africa Reach</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Headquartered at Unipen Plaza, Nairobi, with active field operations in Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Somalia.
                  </p>
                  <Link
                    href="/about"
                    onClick={() => setActiveMegaMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline pt-2"
                  >
                    Read Full Organizational Profile <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            )}

            {/* 3. TRACK RECORD MEGA MENU */}
            {activeMegaMenu === "portfolio" && (
              <div className="grid grid-cols-12 gap-8 items-start">
                
                <div className="col-span-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Proven History</span>
                      <h3 className="text-base font-bold text-white">17 Major Development & Research Assignments</h3>
                    </div>
                    <Link 
                      href="/portfolio" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      Explore All 17 Case Studies <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-emerald-400 block font-mono">Disability Rights Fund</span>
                      <h4 className="text-xs font-bold text-white">Disability Inclusion Review</h4>
                      <p className="text-[10px] text-slate-400">1,200 households evaluated in Nairobi, Kisumu & Garissa.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-teal-400 block font-mono">VSO Kenya / DRF</span>
                      <h4 className="text-xs font-bold text-white">Assistive Tech Baseline</h4>
                      <p className="text-[10px] text-slate-400">Policy barriers and economic empowerment metrics.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-cyan-400 block font-mono">Regional Donors</span>
                      <h4 className="text-xs font-bold text-white">Youth Eco-Livelihoods</h4>
                      <p className="text-[10px] text-slate-400">850 youth enterprises in Kajiado & Machakos counties.</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Client Partners</span>
                  <h4 className="text-sm font-bold text-white">Trusted by International Development Partners</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    UN Agencies, USAID Implementers, County Governments, Disability Rights Fund, VSO, and INGOs.
                  </p>
                  <Link
                    href="/portfolio"
                    onClick={() => setActiveMegaMenu(null)}
                    className="w-full bg-slate-950 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 block text-center"
                  >
                    View Complete Track Record Matrix
                  </Link>
                </div>

              </div>
            )}

            {/* 4. M&E STUDIO MEGA MENU */}
            {activeMegaMenu === "studio" && (
              <div className="grid grid-cols-12 gap-8 items-start">
                
                <div className="col-span-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Interactive Tools</span>
                      <h3 className="text-base font-bold text-white">M&E Studio & Empirical Analytics Generators</h3>
                    </div>
                    <Link 
                      href="/studio" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      Open Full Studio Interface <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Link 
                      href="/studio" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 block transition-all group"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-400 mb-2" />
                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-400">LogFrame Generator</h4>
                      <p className="text-[11px] text-slate-400 mt-1">Generates complete Logical Frameworks with PIRS indicators.</p>
                    </Link>

                    <Link 
                      href="/studio" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 block transition-all group"
                    >
                      <Compass className="w-4 h-4 text-teal-400 mb-2" />
                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-400">Theory of Change</h4>
                      <p className="text-[11px] text-slate-400 mt-1">Formulate causal pathways, assumptions, & impact linkages.</p>
                    </Link>

                    <Link 
                      href="/resources" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 block transition-all group"
                    >
                      <Calculator className="w-4 h-4 text-cyan-400 mb-2" />
                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-400">Sample Size Calculator</h4>
                      <p className="text-[11px] text-slate-400 mt-1">Cochran & Yamane probability sample calculations for field studies.</p>
                    </Link>
                  </div>
                </div>

                <div className="col-span-4 bg-gradient-to-br from-slate-900 to-emerald-950/60 border border-emerald-500/40 rounded-2xl p-5 space-y-3">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Instant AI Generation</span>
                  <h4 className="text-sm font-bold text-white">Generate Custom Proposal Frameworks</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Select your practice area and generate tailored evaluation frameworks ready for proposal inclusion.
                  </p>
                  <Link
                    href="/studio"
                    onClick={() => setActiveMegaMenu(null)}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs py-2.5 rounded-xl transition-all shadow flex items-center justify-center gap-2 block text-center"
                  >
                    <Sparkles className="w-4 h-4" />
                    Launch Studio Generator
                  </Link>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MOBILE BACKDROP & DRAWER ACCORDION */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <div 
            className="xl:hidden fixed inset-0 top-[90px] sm:top-[100px] bg-slate-950/80 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Body */}
          <div className="xl:hidden fixed inset-x-0 top-[90px] sm:top-[100px] bottom-0 z-50 bg-slate-950/98 border-t border-slate-800 shadow-2xl flex flex-col overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-4 sm:p-6 space-y-4 max-w-lg mx-auto w-full flex-1">
              
              {/* Highlight AI Studio Banner */}
              <Link
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-teal-950/60 to-slate-900 border border-emerald-500/40 text-emerald-300 flex items-center justify-between shadow-lg group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-white block group-hover:text-emerald-300 transition-colors">
                      M&E Studio AI Builder
                    </span>
                    <span className="text-[11px] text-emerald-400/80 block">
                      Auto-generate LogFrames & TOCs
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1 text-sm font-semibold">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/" 
                      ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                      : "text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <span>Overview & Home</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>

                {/* Collapsible Services Section */}
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 text-slate-200 hover:bg-slate-900/80 transition-colors">
                    <Link 
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 font-semibold hover:text-emerald-400 transition-colors"
                    >
                      Services & Practice Areas
                    </Link>
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-1 rounded-lg hover:bg-slate-800 text-slate-400"
                      aria-label="Toggle services list"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-emerald-400" : ""}`} />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-800/60 bg-slate-950/60">
                      {practiceAreas.map((pa) => {
                        const IconComp = pa.icon;
                        return (
                          <Link
                            key={pa.id}
                            href={pa.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/60 text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-500/40 flex items-center gap-2.5 transition-all"
                          >
                            <IconComp className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span className="truncate">{pa.short}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/about" 
                      ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                      : "text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <span>Who We Are</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>

                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/portfolio" 
                      ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                      : "text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>Track Record & Case Studies</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      17
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>

                <Link
                  href="/regional"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/regional" 
                      ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                      : "text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <span>Regional Footprint (East Africa)</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>

                <Link
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/resources" 
                      ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                      : "text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <span>Knowledge Hub & Toolkits</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/contact" 
                      ? "bg-slate-900 text-emerald-400 border border-slate-800" 
                      : "text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <span>Contact & Office Location</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              </nav>

              {/* Direct Quick Action Buttons in Drawer */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3 pb-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Technical Proposal (RFP)</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold pt-1">
                  <a
                    href="tel:0702103653"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>0702103653</span>
                  </a>
                  <a
                    href="mailto:interactresearchassociates@gmail.com"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors truncate"
                  >
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">Email Us</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </header>
  );
}


