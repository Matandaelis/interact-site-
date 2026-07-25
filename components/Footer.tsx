"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AccessibilityModal from "./AccessibilityModal";
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Globe2, 
  ArrowUp,
  ShieldCheck,
  UserCheck,
  Scale
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-emerald-400 text-sm">
                  IARA
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">
                  INTER-ACT <span className="text-emerald-400">RESEARCH</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  Associates • Formed 2013
                </span>
              </div>
            </Link>

            <p className="text-slate-300 leading-relaxed text-xs">
              Registered in Kenya under Cap499 Section 4 as a non-partisan, non-profit consulting company providing cutting-edge technical expertise in project management, M&E, disability mainstreaming, capacity building, and strategic planning across East Africa.
            </p>

            <blockquote className="text-[11px] italic text-emerald-300 border-l-2 border-emerald-500 pl-3 py-1">
              &ldquo;Doing good through practical solutions to transform lives.&rdquo;
            </blockquote>

            <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Evidence-Based Data & Applied Research</span>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Overview / Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Who We Are</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services & Expertise</Link></li>
              <li><Link href="/portfolio" className="hover:text-emerald-400 transition-colors">Past Assignments (17)</Link></li>
              <li><Link href="/studio" className="hover:text-emerald-400 transition-colors">AI M&E Studio</Link></li>
              <li><Link href="/regional" className="hover:text-emerald-400 transition-colors">Regional Footprint</Link></li>
              <li><Link href="/resources" className="hover:text-emerald-400 transition-colors">Toolkits & Resources</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Request RFP / Contact</Link></li>
            </ul>
          </div>

          {/* Official Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Head Office
            </h4>
            <ul className="space-y-2.5 text-slate-300 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Location:</strong> Argwings Kodhek Road, Unipen Plaza (Hurlinghum), 1st Floor Room No. 4, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Postal Address:</strong> P.O. BOX 59913-00200 / 7218-00200, Nairobi-Kenya
                </span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 pt-1">
                <Globe2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Coverage: Kenya 🇰🇪 • Uganda 🇺🇬 • Tanzania 🇹🇿 • Rwanda 🇷🇼</span>
              </li>
            </ul>
          </div>

          {/* Direct Executive Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Executive Contact
            </h4>
            <div className="space-y-2.5 text-slate-300 text-xs">
              <div className="flex items-start gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Kennedy S. Okumu</strong><br />
                  Executive Director
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:0702103653" className="hover:text-white font-bold text-emerald-300">
                  0702103653 / +254 702 103 653
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:interactresearchassociates@gmail.com" className="hover:text-white break-all font-medium text-slate-200">
                  interactresearchassociates@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © {new Date().getFullYear()} Inter-Act Research Associates (IARA). All rights reserved. Registered under Cap499 Section 4.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <AccessibilityModal />
            <ThemeToggle />
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center gap-1.5 transition-colors border border-slate-800"
            >
              <ArrowUp className="w-4 h-4 text-emerald-400" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
