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
  BookOpenCheck,
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
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
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
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] shadow-sm transition-colors">
      {/* Top Direct Contact Bar */}
      <div className="border-b border-white/10 bg-[var(--ink)] px-3 py-2 text-[11px] text-[var(--paper-muted)] sm:px-6 sm:text-xs lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2 sm:gap-4 text-[var(--paper-muted)] min-w-0">
            <span className="flex items-center gap-1.5 font-medium truncate">
              <MapPin className="w-3.5 h-3.5 text-[var(--coral-soft)] shrink-0" />
              <span className="hidden sm:inline truncate">Unipen Plaza, Argwings Kodhek Rd, Nairobi, Kenya</span>
              <span className="sm:hidden truncate">Nairobi, KE</span>
            </span>
            <span className="hidden lg:inline text-[var(--ink-muted)]">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-[var(--coral-soft)] font-semibold shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--coral-soft)] shrink-0" />
              <span>Est. 2013 • Cap 499 Sec 4 Reg.</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[var(--paper-muted)] shrink-0">
            <AccessibilityModal variant="minimal" />
            <a 
              href="mailto:interactresearchassociates@gmail.com" 
              className="hidden md:flex items-center gap-1 hover:text-[var(--coral-soft)] transition-colors"
              title="Email Inter-Act Research Associates"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--coral-soft)] shrink-0" />
              <span className="hidden lg:inline">interactresearchassociates@gmail.com</span>
              <span className="lg:hidden">Email</span>
            </a>
            <a 
              href="tel:0702103653" 
              className="flex items-center gap-1 hover:bg-[var(--coral-deep)] transition-colors font-bold text-white bg-[var(--ink-soft)] px-2.5 py-1 rounded-lg border border-[var(--ink-soft)]"
              title="Call Direct Office Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--coral-soft)] shrink-0" />
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
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--ink)] text-xs font-black tracking-wider text-white shadow-sm sm:size-10 sm:text-sm">
              IARA
            </div>
            <div className="min-w-0">
              <span className="font-extrabold text-sm sm:text-base lg:text-lg text-[var(--ink)] block tracking-tight group-hover:text-[var(--coral-deep)] transition-colors truncate">
                INTER-ACT <span className="text-[var(--coral-deep)]">RESEARCH</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-widest block -mt-0.5 truncate">
                Associates • Nairobi, KE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items with Mega Menu Triggers */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                pathname === "/" 
                  ? "bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)]" 
                  : "text-[var(--ink-muted)] hover:text-[var(--coral-deep)] hover:bg-[var(--paper-muted)]"
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
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  pathname.startsWith("/services") || activeMegaMenu === "services"
                    ? "bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)]" 
                    : "text-[var(--ink-muted)] hover:text-[var(--coral-deep)] hover:bg-[var(--paper-muted)]"
                }`}
              >
                <span>Services & Expertise</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "services" ? "rotate-180 text-[var(--coral-deep)]" : "text-[var(--ink-muted)]"}`} />
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
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  pathname === "/about" || activeMegaMenu === "about"
                    ? "bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)]" 
                    : "text-[var(--ink-muted)] hover:text-[var(--coral-deep)] hover:bg-[var(--paper-muted)]"
                }`}
              >
                <span>Who We Are</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "about" ? "rotate-180 text-[var(--coral-deep)]" : "text-[var(--ink-muted)]"}`} />
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
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  pathname === "/portfolio" || activeMegaMenu === "portfolio"
                    ? "bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)]" 
                    : "text-[var(--ink-muted)] hover:text-[var(--coral-deep)] hover:bg-[var(--paper-muted)]"
                }`}
              >
                <span>Track Record</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === "portfolio" ? "rotate-180 text-[var(--coral-deep)]" : "text-[var(--ink-muted)]"}`} />
              </Link>
            </div>

            <Link
              href="/regional"
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                pathname === "/regional" 
                  ? "bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)]" 
                  : "text-[var(--ink-muted)] hover:text-[var(--coral-deep)] hover:bg-[var(--paper-muted)]"
              }`}
            >
              Regional Footprint
            </Link>

            <Link
              href="/resources"
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                pathname === "/resources" 
                  ? "bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)]" 
                  : "text-[var(--ink-muted)] hover:text-[var(--coral-deep)] hover:bg-[var(--paper-muted)]"
              }`}
            >
              Toolkits
            </Link>

            <Link
              href="/glossary"
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                pathname === "/glossary" 
                  ? "bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)]" 
                  : "text-[var(--ink-muted)] hover:text-[var(--coral-deep)] hover:bg-[var(--paper-muted)]"
              }`}
            >
              Glossary
            </Link>
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contact"
              className="bg-[var(--ink-soft)] hover:bg-[var(--coral-deep)] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 shrink-0"
            >
              <FileText className="w-4 h-4 shrink-0 text-[var(--coral-soft)]" />
              <span>Request RFP</span>
            </Link>
          </div>

          {/* Mobile & Tablet Toggle Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-1 bg-[var(--ink-soft)] text-white font-extrabold text-xs px-3 py-2 rounded-xl transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request RFP</span>
            </Link>

            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[var(--paper-muted)] text-[var(--ink)] hover:bg-[var(--paper-muted)] border border-[var(--line)] focus:outline-none focus:ring-2 focus:ring-[var(--coral)]/50 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors shadow-xs"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[var(--coral-deep)]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP MEGA MENU PANELS (Absolute Overlay on Hover/Focus) */}
      {/* ========================================================= */}
      {activeMegaMenu && (
        <div 
          className="hidden lg:block absolute top-full left-0 right-0 bg-[var(--ink)] border-b border-[var(--line)] shadow-2xl py-8 transition-all animate-in fade-in slide-in-from-top-2 duration-200 z-50"
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
                  <div className="flex items-center justify-between border-b border-[var(--line)]/80 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest block">Technical Capabilities</span>
                      <h3 className="text-base font-bold text-white">5 Specialized Consulting Practices</h3>
                    </div>
                    <Link 
                      href="/services" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="text-xs text-[var(--coral)] hover:underline flex items-center gap-1 font-semibold"
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
                          className="p-3.5 rounded-xl bg-[var(--ink-soft)]/60 border border-[var(--line)]/80 hover:border-[var(--coral)]/50 hover:bg-[var(--ink-soft)] transition-all group flex items-start gap-3"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white/10 border border-[var(--coral)]/30 flex items-center justify-center text-[var(--coral)] group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-white group-hover:text-[var(--coral)] transition-colors truncate">
                                {pa.short}
                              </h4>
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-[var(--coral)] border border-[var(--coral)]/20 shrink-0">
                                {pa.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-[var(--ink-muted)] line-clamp-2 leading-relaxed">
                              {pa.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Right Callout Card (4 cols) */}
                <div className="col-span-4 bg-gradient-to-br from-[var(--ink)] via-[var(--ink)] to-[var(--coral-deep)]/20 border border-[var(--line)] rounded-2xl p-5 space-y-4 shadow-xl">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full border border-[var(--coral)]/20">
                      <Sparkles className="w-3 h-3" /> Practice Studio Generator
                    </span>
                    <h4 className="text-sm font-bold text-white">Generate M&E Frameworks Instantly</h4>
                    <p className="text-xs text-[var(--paper-muted)] leading-relaxed">
                      Use our interactive Studio tool to automatically build Logical Frameworks, Theory of Change diagrams, and baseline survey sampling matrices.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[var(--line)]">
                    <Link
                      href="/studio"
                      onClick={() => setActiveMegaMenu(null)}
                      className="w-full bg-[var(--coral)] hover:bg-[var(--coral-deep)] text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow flex items-center justify-center gap-2 block text-center"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Open Studio AI Builder
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setActiveMegaMenu(null)}
                      className="w-full bg-[var(--ink)] hover:bg-[var(--coral-deep)] text-[var(--paper-muted)] border border-[var(--line)] font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 block text-center"
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
                    <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest block">Institutional Profile</span>
                    <h3 className="text-sm font-bold text-white">About Inter-Act Research Associates</h3>
                    <p className="text-xs text-[var(--paper-muted)] leading-relaxed">
                      Registered under Cap 499 Section 4 of Kenya Companies Act (Established 2013). We specialize in policy evaluation, social inclusion, and field-based research across East and Horn of Africa.
                    </p>
                    <ul className="space-y-2 text-xs text-[var(--paper-muted)] pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--coral)]" />
                        <span>Registered Corporate Entity since 2013</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--coral)]" />
                        <span>OECD-DAC Evaluation Standards Compliant</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--coral)]" />
                        <span>Institutional Review Board (IRB) Protocols</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest block">Key Information</span>
                    <div className="space-y-2">
                      <Link 
                        href="/about#profile" 
                        onClick={() => setActiveMegaMenu(null)}
                        className="p-3 rounded-xl bg-[var(--ink-soft)] border border-[var(--line)] hover:border-[var(--coral)]/40 block transition-all group"
                      >
                        <h4 className="text-xs font-bold text-white group-hover:text-[var(--coral)] flex items-center justify-between">
                          <span>Governance & Leadership</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--ink-muted)] group-hover:text-[var(--coral)]" />
                        </h4>
                        <p className="text-[11px] text-[var(--ink-muted)] mt-1">Multi-disciplinary team of lead consultants & statisticians.</p>
                      </Link>

                      <Link 
                        href="/about#ethics" 
                        onClick={() => setActiveMegaMenu(null)}
                        className="p-3 rounded-xl bg-[var(--ink-soft)] border border-[var(--line)] hover:border-[var(--coral)]/40 block transition-all group"
                      >
                        <h4 className="text-xs font-bold text-white group-hover:text-[var(--coral)] flex items-center justify-between">
                          <span>Research Ethics & Safeguards</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--ink-muted)] group-hover:text-[var(--coral)]" />
                        </h4>
                        <p className="text-[11px] text-[var(--ink-muted)] mt-1">Washington Group sets, child protection, & data privacy.</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 bg-[var(--ink-soft)] border border-[var(--line)] rounded-2xl p-5 space-y-3">
                  <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest block">Regional Coverage</span>
                  <h4 className="text-sm font-bold text-white">East & Horn of Africa Reach</h4>
                  <p className="text-xs text-[var(--paper-muted)] leading-relaxed">
                    Headquartered at Unipen Plaza, Nairobi, with active field operations in Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Somalia.
                  </p>
                  <Link
                    href="/about"
                    onClick={() => setActiveMegaMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--coral)] hover:underline pt-2"
                  >
                    Read Full Organizational Profile <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            )}

            {/* 3. TRACK RECORD MEGA MENU */}
            {activeMegaMenu === "portfolio" && (
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Main 5 Practice Grid (8 cols) */}
                <div className="col-span-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--line)]/80 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest block">Proven History</span>
                      <h3 className="text-base font-bold text-white">18 Major Development & Research Assignments</h3>
                    </div>
                    <Link 
                      href="/portfolio" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="text-xs text-[var(--coral)] hover:underline flex items-center gap-1 font-semibold"
                    >
                      Explore All 18 Case Studies <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-[var(--ink-soft)] border border-[var(--line)] space-y-1">
                      <span className="text-xs font-bold text-[var(--coral)] block font-mono">Disability Rights Fund</span>
                      <h4 className="text-xs font-bold text-white">Disability Inclusion Review</h4>
                      <p className="text-[10px] text-[var(--ink-muted)]">1,200 households evaluated in Nairobi, Kisumu & Garissa.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--ink-soft)] border border-[var(--line)] space-y-1">
                      <span className="text-xs font-bold text-[var(--coral)] block font-mono">VSO Kenya / DRF</span>
                      <h4 className="text-xs font-bold text-white">Assistive Tech Baseline</h4>
                      <p className="text-[10px] text-[var(--ink-muted)]">Policy barriers and economic empowerment metrics.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--ink-soft)] border border-[var(--line)] space-y-1">
                      <span className="text-xs font-bold text-[var(--coral)] block font-mono">Regional Donors</span>
                      <h4 className="text-xs font-bold text-white">Youth Eco-Livelihoods</h4>
                      <p className="text-[10px] text-[var(--ink-muted)]">850 youth enterprises in Kajiado & Machakos counties.</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 bg-[var(--ink-soft)] border border-[var(--line)] rounded-2xl p-5 space-y-3">
                  <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest block">Client Partners</span>
                  <h4 className="text-sm font-bold text-white">Trusted by International Development Partners</h4>
                  <p className="text-xs text-[var(--paper-muted)] leading-relaxed">
                    UN Agencies, USAID Implementers, County Governments, Disability Rights Fund, VSO, and INGOs.
                  </p>
                  <Link
                    href="/portfolio"
                    onClick={() => setActiveMegaMenu(null)}
                    className="w-full bg-[var(--ink)] hover:bg-[var(--coral-deep)] text-[var(--coral)] border border-[var(--coral)]/30 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 block text-center"
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
                  <div className="flex items-center justify-between border-b border-[var(--line)]/80 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest block">Interactive Tools</span>
                      <h3 className="text-base font-bold text-white">M&E Studio & Empirical Analytics Generators</h3>
                    </div>
                    <Link 
                      href="/studio" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="text-xs text-[var(--coral)] hover:underline flex items-center gap-1 font-semibold"
                    >
                      Open Full Studio Interface <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Link 
                      href="/studio" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-3.5 rounded-xl bg-[var(--ink-soft)] border border-[var(--line)] hover:border-[var(--coral)]/40 block transition-all group"
                    >
                      <Sparkles className="w-4 h-4 text-[var(--coral)] mb-2" />
                      <h4 className="text-xs font-bold text-white group-hover:text-[var(--coral)]">LogFrame Generator</h4>
                      <p className="text-[11px] text-[var(--ink-muted)] mt-1">Generates complete Logical Frameworks with PIRS indicators.</p>
                    </Link>

                    <Link 
                      href="/studio" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-3.5 rounded-xl bg-[var(--ink-soft)] border border-[var(--line)] hover:border-[var(--coral)]/40 block transition-all group"
                    >
                      <Compass className="w-4 h-4 text-[var(--coral)] mb-2" />
                      <h4 className="text-xs font-bold text-white group-hover:text-[var(--coral)]">Theory of Change</h4>
                      <p className="text-[11px] text-[var(--ink-muted)] mt-1">Formulate causal pathways, assumptions, & impact linkages.</p>
                    </Link>

                    <Link 
                      href="/resources" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-3.5 rounded-xl bg-[var(--ink-soft)] border border-[var(--line)] hover:border-[var(--coral)]/40 block transition-all group"
                    >
                      <Calculator className="w-4 h-4 text-[var(--coral)] mb-2" />
                      <h4 className="text-xs font-bold text-white group-hover:text-[var(--coral)]">Sample Size Calculator</h4>
                      <p className="text-[11px] text-[var(--ink-muted)] mt-1">Cochran & Yamane probability sample calculations for field studies.</p>
                    </Link>
                  </div>
                </div>

                <div className="col-span-4 bg-gradient-to-br from-[var(--ink)] to-[var(--coral-deep)]/25 border border-[var(--coral)]/40 rounded-2xl p-5 space-y-3">
                  <span className="text-[10px] font-bold text-[var(--coral)] uppercase tracking-widest block">Instant AI Generation</span>
                  <h4 className="text-sm font-bold text-white">Generate Custom Proposal Frameworks</h4>
                  <p className="text-xs text-[var(--paper-muted)] leading-relaxed">
                    Select your practice area and generate tailored evaluation frameworks ready for proposal inclusion.
                  </p>
                  <Link
                    href="/studio"
                    onClick={() => setActiveMegaMenu(null)}
                    className="w-full bg-[var(--coral)] hover:bg-[var(--coral-deep)] text-white font-extrabold text-xs py-2.5 rounded-xl transition-all shadow flex items-center justify-center gap-2 block text-center"
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
          {/* Backdrop Overlay */}
          <div 
            id="mobile-menu-backdrop"
            className="lg:hidden fixed inset-0 top-0 bg-[var(--ink-soft)]/85 z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Body Anchored Directly Under Sticky Header */}
          <div 
            id="mobile-navigation-drawer"
            className="lg:hidden absolute top-full left-0 right-0 z-50 bg-[var(--paper)] border-t border-[var(--line)] shadow-xl overflow-y-auto max-h-[calc(100vh-80px)] animate-in fade-in slide-in-from-top-2 duration-200 text-[var(--ink)]"
          >
            <div className="p-4 sm:p-6 space-y-4 max-w-lg mx-auto w-full">
              
              {/* Highlight AI Studio Banner */}
              <Link
                id="mobile-link-studio-banner"
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full p-3.5 rounded-2xl bg-[var(--paper-muted)] border border-[var(--line)] text-[var(--coral-deep)] flex items-center justify-between shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[var(--ink-soft)] text-white">
                    <Sparkles className="w-5 h-5 text-[var(--coral-soft)]" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[var(--coral-deep)] block group-hover:text-[var(--coral-deep)] transition-colors">
                      M&E Studio AI Builder
                    </span>
                    <span className="text-[11px] text-[var(--coral-deep)] font-bold block">
                      Auto-generate LogFrames & TOCs
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--coral-deep)] group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1.5 text-sm font-bold">
                
                {/* 1. Overview */}
                <Link
                  id="mobile-link-overview"
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/" 
                      ? "bg-[var(--ink-soft)] text-white shadow-xs font-bold" 
                      : "text-[var(--ink)] hover:bg-[var(--paper-muted)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Globe2 className="w-4 h-4 text-[var(--coral-deep)]" />
                    <span>Overview & Home</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--ink-muted)]" />
                </Link>

                {/* 2. Collapsible Services Section */}
                <div className="rounded-xl border border-[var(--line)] bg-[var(--paper-muted)] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 text-[var(--ink)] hover:bg-[var(--paper-muted)] transition-colors">
                    <Link 
                      id="mobile-link-services-root"
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 font-extrabold hover:text-[var(--coral-deep)] transition-colors flex items-center gap-2.5"
                    >
                      <BarChart3 className="w-4 h-4 text-[var(--coral-deep)]" />
                      <span>Services & Practice Areas</span>
                    </Link>
                    <button 
                      id="mobile-toggle-services-accordion"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-1.5 rounded-lg hover:bg-[var(--paper-muted)] text-[var(--ink-muted)] transition-colors"
                      aria-label="Toggle practice areas list"
                      aria-expanded={mobileServicesOpen}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[var(--coral-deep)]" : ""}`} />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-[var(--line)] bg-[var(--paper)]">
                      {practiceAreas.map((pa) => {
                        const IconComp = pa.icon;
                        return (
                          <Link
                            id={`mobile-link-service-${pa.id}`}
                            key={pa.id}
                            href={pa.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2.5 rounded-lg bg-[var(--paper-muted)] border border-[var(--line)] text-xs font-bold text-[var(--ink)] hover:text-[var(--coral-deep)] hover:border-[var(--coral)] flex items-center justify-between gap-2 transition-all"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <IconComp className="w-4 h-4 text-[var(--coral-deep)] shrink-0" />
                              <span className="truncate">{pa.short}</span>
                            </div>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)] shrink-0">
                              {pa.badge}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Collapsible Who We Are Section */}
                <div className="rounded-xl border border-[var(--line)] bg-[var(--paper-muted)] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 text-[var(--ink)] hover:bg-[var(--paper-muted)] transition-colors">
                    <Link 
                      id="mobile-link-about-root"
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 font-extrabold hover:text-[var(--coral-deep)] transition-colors flex items-center gap-2.5"
                    >
                      <Building2 className="w-4 h-4 text-[var(--coral-deep)]" />
                      <span>Who We Are (Cap 499)</span>
                    </Link>
                    <button 
                      id="mobile-toggle-about-accordion"
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="p-1.5 rounded-lg hover:bg-[var(--paper-muted)] text-[var(--ink-muted)] transition-colors"
                      aria-label="Toggle institutional details"
                      aria-expanded={mobileAboutOpen}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180 text-[var(--coral-deep)]" : ""}`} />
                    </button>
                  </div>

                  {mobileAboutOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-[var(--line)] bg-[var(--paper)]">
                      <Link
                        id="mobile-link-about-governance"
                        href="/about#profile"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2.5 rounded-lg bg-[var(--paper-muted)] border border-[var(--line)] text-xs font-bold text-[var(--ink)] hover:text-[var(--coral-deep)] flex items-center justify-between gap-2"
                      >
                        <span className="truncate">Governance & Executive Leadership</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
                      </Link>

                      <Link
                        id="mobile-link-about-ethics"
                        href="/about#ethics"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2.5 rounded-lg bg-[var(--paper-muted)] border border-[var(--line)] text-xs font-bold text-[var(--ink)] hover:text-[var(--coral-deep)] flex items-center justify-between gap-2"
                      >
                        <span className="truncate">Research Ethics & Safeguards</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* 4. Collapsible Track Record Section */}
                <div className="rounded-xl border border-[var(--line)] bg-[var(--paper-muted)] overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 text-[var(--ink)] hover:bg-[var(--paper-muted)] transition-colors">
                    <Link 
                      id="mobile-link-portfolio-root"
                      href="/portfolio"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 font-extrabold hover:text-[var(--coral-deep)] transition-colors flex items-center justify-between pr-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <FolderKanban className="w-4 h-4 text-[var(--coral-deep)]" />
                        <span>Track Record</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[var(--paper-muted)] text-[var(--coral-deep)] border border-[var(--line)]">
                        18 Studies
                      </span>
                    </Link>
                    <button 
                      id="mobile-toggle-portfolio-accordion"
                      onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                      className="p-1.5 rounded-lg hover:bg-[var(--paper-muted)] text-[var(--ink-muted)] transition-colors"
                      aria-label="Toggle track record list"
                      aria-expanded={mobilePortfolioOpen}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePortfolioOpen ? "rotate-180 text-[var(--coral-deep)]" : ""}`} />
                    </button>
                  </div>

                  {mobilePortfolioOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-[var(--line)] bg-[var(--paper)]">
                      <Link
                        id="mobile-link-portfolio-usaid"
                        href="/portfolio"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2.5 rounded-lg bg-[var(--paper-muted)] border border-[var(--line)] text-xs font-bold text-[var(--ink)] hover:text-[var(--coral-deep)] flex items-center justify-between"
                      >
                        <span className="truncate">USAID & Civil Accountability</span>
                        <span className="text-[10px] text-[var(--coral-deep)] font-mono font-bold">2025</span>
                      </Link>
                      <Link
                        id="mobile-link-portfolio-drf"
                        href="/portfolio"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2.5 rounded-lg bg-[var(--paper-muted)] border border-[var(--line)] text-xs font-bold text-[var(--ink)] hover:text-[var(--coral-deep)] flex items-center justify-between"
                      >
                        <span className="truncate">Disability Rights Fund (DRF)</span>
                        <span className="text-[10px] text-[var(--coral-deep)] font-mono font-bold">2024</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* 5. Regional Footprint */}
                <Link
                  id="mobile-link-regional"
                  href="/regional"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/regional" 
                      ? "bg-[var(--ink-soft)] text-white font-bold" 
                      : "text-[var(--ink)] hover:bg-[var(--paper-muted)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[var(--coral-deep)]" />
                    <span>Regional Footprint (EAC)</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--ink-muted)]" />
                </Link>

                {/* 6. Toolkits & Publications */}
                <Link
                  id="mobile-link-resources"
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/resources" 
                      ? "bg-[var(--ink-soft)] text-white font-bold" 
                      : "text-[var(--ink)] hover:bg-[var(--paper-muted)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-[var(--coral-deep)]" />
                    <span>Knowledge Hub & Toolkits</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--ink-muted)]" />
                </Link>

                {/* 6b. M&E Glossary */}
                <Link
                  id="mobile-link-glossary"
                  href="/glossary"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/glossary" 
                      ? "bg-[var(--ink-soft)] text-white font-bold" 
                      : "text-[var(--ink)] hover:bg-[var(--paper-muted)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpenCheck className="w-4 h-4 text-[var(--coral-deep)]" />
                    <span>M&E & Advisory Glossary</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--ink-muted)]" />
                </Link>

                {/* 7. Contact */}
                <Link
                  id="mobile-link-contact"
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    pathname === "/contact" 
                      ? "bg-[var(--ink-soft)] text-white font-bold" 
                      : "text-[var(--ink)] hover:bg-[var(--paper-muted)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[var(--coral-deep)]" />
                    <span>Contact & Office Location</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--ink-muted)]" />
                </Link>

              </nav>

              {/* Direct Quick Action Buttons in Drawer */}
              <div className="pt-4 border-t border-[var(--line)] space-y-3 pb-6">
                <Link
                  id="mobile-btn-request-rfp"
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[var(--ink-soft)] hover:bg-[var(--coral-deep)] text-white font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <FileText className="w-4 h-4 text-[var(--coral-soft)]" />
                  <span>Request Technical Proposal (RFP)</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 text-xs font-bold pt-1">
                  <a
                    id="mobile-link-phone-call"
                    href="tel:0702103653"
                    className="p-3 rounded-xl bg-[var(--paper-muted)] border border-[var(--line)] text-[var(--ink)] flex items-center justify-center gap-2 hover:bg-[var(--paper-muted)] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[var(--coral-deep)]" />
                    <span>0702103653</span>
                  </a>
                  <a
                    id="mobile-link-email-send"
                    href="mailto:interactresearchassociates@gmail.com"
                    className="p-3 rounded-xl bg-[var(--paper-muted)] border border-[var(--line)] text-[var(--ink)] flex items-center justify-center gap-2 hover:bg-[var(--paper-muted)] transition-colors truncate"
                  >
                    <Mail className="w-4 h-4 text-[var(--coral-deep)] shrink-0" />
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


