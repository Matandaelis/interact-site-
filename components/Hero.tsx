"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Globe2,
  Layers3,
  ShieldCheck,
  Users2,
} from "lucide-react";

interface HeroProps {
  onExploreServices: () => void;
  onOpenStudio: () => void;
  onOpenConsultation: () => void;
}

const capabilities = [
  "Monitoring & evaluation",
  "Applied social research",
  "Inclusive development",
];

const figures = [
  { value: "2013", label: "Established in Nairobi" },
  { value: "04", label: "East African markets" },
  { value: "18+", label: "Regional assignments" },
];

export default function Hero({ onExploreServices, onOpenStudio, onOpenConsultation }: HeroProps) {
  return (
    <section id="hero-section" className="relative isolate overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -right-40 top-16 size-[34rem] rounded-full border border-[var(--coral)]/40 md:size-[48rem]" />
      <div className="pointer-events-none absolute -right-28 top-36 size-[27rem] rounded-full border border-[var(--coral)]/20 md:size-[41rem]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20 lg:px-10 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative z-10 flex flex-col gap-7"
        >
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--coral-soft)]">
            <span className="h-px w-10 bg-[var(--coral)]" />
            Independent Development Intelligence
          </div>

          <h1 className="max-w-3xl font-serif text-[clamp(3.4rem,8vw,7.6rem)] leading-[0.88] tracking-[-0.055em] text-[var(--paper)]">
            Development Consulting in East Africa that <em className="text-[var(--coral-soft)] italic">moves</em> people forward.
          </h1>

          <p className="max-w-xl text-base leading-7 text-[var(--paper-muted)] md:text-lg">
            Inter-Act Research Associates provides Development Consulting in East Africa, combining rigorous research, practical advisory, and inclusive evidence systems for public institutions, NGOs, and international development partners.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 border-y border-white/15 py-4 text-sm text-[var(--paper-muted)]">
            {capabilities.map((capability) => (
              <span key={capability} className="flex items-center gap-2">
                <Check className="size-4 text-[var(--coral-soft)]" aria-hidden="true" />
                {capability}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              id="hero-request-proposal"
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--coral)] px-6 text-sm font-bold text-white transition-colors hover:bg-[var(--coral-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral-soft)]"
            >
              Start a conversation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </button>
            <button
              id="hero-explore-services"
              type="button"
              onClick={onExploreServices}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-[var(--paper)] transition-colors hover:border-[var(--coral-soft)] hover:text-[var(--coral-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral-soft)]"
            >
              Explore our practice
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative min-h-[27rem] lg:min-h-[39rem]"
        >
          <div className="absolute inset-x-8 top-8 overflow-hidden rounded-[2rem] border border-white/20 bg-[#153f59] shadow-2xl shadow-black/25 lg:inset-x-4 lg:top-4">
            <div className="relative aspect-[4/5] overflow-hidden opacity-90">
              <Image
                src="/images/home-research-team.png"
                alt="Research colleagues collaborating around a table"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover grayscale-[35%] mix-blend-luminosity"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/10 to-transparent" />
              <div className="absolute inset-0 bg-[var(--coral)]/10 mix-blend-color" />
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 p-6 md:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coral-soft)]">
                  <span className="size-2 rounded-full bg-[var(--coral)]" />
                  Nairobi · East Africa
                </div>
                <p className="max-w-xs font-serif text-2xl leading-tight text-[var(--paper)] md:text-3xl">Research is only useful when it reaches the room where decisions happen.</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 left-0 grid w-[calc(100%-2rem)] grid-cols-3 rounded-2xl border border-[var(--ink-soft)] bg-[var(--paper)] p-3 text-[var(--ink)] shadow-xl sm:left-4 lg:-left-8 lg:bottom-8 lg:w-[calc(100%+1rem)] lg:p-4">
            {figures.map((figure, index) => (
              <div key={figure.label} className={`flex flex-col gap-1 px-3 py-1 ${index > 0 ? "border-l border-[var(--ink)]/15" : ""}`}>
                <span className="font-serif text-2xl leading-none md:text-3xl">{figure.value}</span>
                <span className="text-[10px] font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--ink-muted)] md:text-[11px]">{figure.label}</span>
              </div>
            ))}
          </div>

          <div className="absolute right-0 top-0 hidden translate-x-1/4 -translate-y-1/4 rounded-full bg-[var(--coral)] p-4 text-white shadow-lg lg:block">
            <Globe2 className="size-6" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/15 px-5 py-5 text-xs text-[var(--paper-muted)] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[var(--coral-soft)]" aria-hidden="true" /> Registered under Kenya&apos;s Companies Act, Cap 499</span>
        <div className="flex items-center gap-5 uppercase tracking-[0.14em] text-[10px]">
          <span className="flex items-center gap-2"><BarChart3 className="size-3.5" aria-hidden="true" /> MERL</span>
          <span className="flex items-center gap-2"><Layers3 className="size-3.5" aria-hidden="true" /> Advisory</span>
          <span className="flex items-center gap-2"><Users2 className="size-3.5" aria-hidden="true" /> Inclusion</span>
        </div>
      </div>
    </section>
  );
}
