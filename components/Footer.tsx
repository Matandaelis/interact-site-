"use client";

import React from "react";
import Link from "next/link";
import AccessibilityModal from "./AccessibilityModal";
import { ArrowUp, Building2, Globe2, Mail, MapPin, Phone, ShieldCheck, UserCheck } from "lucide-react";

const links = [
  ["Overview", "/"], ["About IARA", "/about"], ["Services", "/services"],
  ["Selected work", "/portfolio"], ["Regional presence", "/regional"], ["Resources", "/resources"], ["Contact / RFP", "/contact"],
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="main-footer" className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--paper-muted)]">
      <div className="corporate-container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.25fr_1.15fr]">
          <div className="flex flex-col gap-5">
            <Link id="footer-logo-link" href="/" className="flex items-center gap-3 text-white">
              <span className="flex size-11 items-center justify-center rounded-lg bg-[var(--coral)] text-sm font-black tracking-wide">IARA</span>
              <span><strong className="block text-lg tracking-tight">INTER-ACT RESEARCH</strong><small className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--coral-soft)]">Associates · Nairobi</small></span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-[var(--paper-muted)]">Independent research and development advisory for organizations working toward measurable, inclusive change across East Africa.</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--coral-soft)]"><ShieldCheck className="size-4" /> Evidence-led. Locally grounded.</div>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">Explore</h2>
            <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3 text-sm">
              {links.map(([label, href]) => <Link key={href} id={`footer-link-${href.slice(1) || "home"}`} href={href} className="transition-colors hover:text-[var(--coral-soft)]">{label}</Link>)}
            </nav>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">Nairobi office</h2>
            <div className="flex flex-col gap-4 text-sm leading-6">
              <p className="flex gap-3"><MapPin className="mt-1 size-4 shrink-0 text-[var(--coral-soft)]" /><span>Unipen Plaza, Argwings Kodhek Road<br />Hurlingham, Nairobi, Kenya</span></p>
              <p className="flex gap-3"><Building2 className="mt-1 size-4 shrink-0 text-[var(--coral-soft)]" /><span>P.O. Box 59913–00200<br />Registered under Cap 499 Section 4</span></p>
              <p className="flex gap-3"><Globe2 className="mt-1 size-4 shrink-0 text-[var(--coral-soft)]" /><span>Kenya · Uganda · Tanzania · Rwanda</span></p>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">Start a conversation</h2>
            <div className="flex flex-col gap-4 text-sm">
              <p className="flex gap-3"><UserCheck className="mt-1 size-4 shrink-0 text-[var(--coral-soft)]" /><span><strong className="block text-white">Kennedy S. Okumu</strong>Executive Director</span></p>
              <a id="footer-phone" href="tel:0702103653" className="flex items-center gap-3 hover:text-white"><Phone className="size-4 text-[var(--coral-soft)]" />0702 103 653</a>
              <a id="footer-email" href="mailto:interactresearchassociates@gmail.com" className="flex items-start gap-3 break-all hover:text-white"><Mail className="mt-1 size-4 shrink-0 text-[var(--coral-soft)]" />interactresearchassociates@gmail.com</a>
              <Link href="/contact" className="mt-1 inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--coral)] px-4 text-sm font-bold text-white transition-colors hover:bg-[var(--coral-deep)]">Request an RFP</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-[var(--paper-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Inter-Act Research Associates. All rights reserved.</p>
          <div className="flex items-center gap-4"><AccessibilityModal /><button id="footer-back-to-top" onClick={scrollToTop} className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 transition-colors hover:bg-white/10 hover:text-white"><ArrowUp className="size-4 text-[var(--coral-soft)]" /> Back to top</button></div>
        </div>
      </div>
    </footer>
  );
}
