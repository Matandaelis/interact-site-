import React from "react";
import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";
import { GLOSSARY_TERMS } from "@/lib/glossaryData";

export const metadata: Metadata = {
  title: "M&E & Development Consulting Glossary | Inter-Act Research Associates (IARA)",
  description: "Comprehensive terminology handbook for Monitoring & Evaluation (M&E), baseline surveys, impact assessments, GESI inclusion, data analytics, and regional strategic advisory in East Africa.",
  keywords: [
    "M&E Glossary",
    "Monitoring and Evaluation Terms",
    "Baseline Survey Definition",
    "OECD-DAC Criteria",
    "Theory of Change",
    "LogFrame",
    "MEAL Framework",
    "GESI Definition",
    "Inter-Act Research Associates",
    "Development Consultancy East Africa",
    "Kenya M&E Lexicon"
  ],
  openGraph: {
    title: "M&E & Strategic Consulting Glossary | Inter-Act Research Associates",
    description: "Definitions and field examples for key development evaluation terms, baseline surveys, data methodologies, and regional policy advisory.",
    type: "website",
    siteName: "Inter-Act Research Associates",
    url: "https://interactresearch.org/glossary",
  },
  twitter: {
    card: "summary_large_image",
    title: "M&E & Strategic Advisory Glossary | IARA",
    description: "Clear definitions and practical field examples for Monitoring & Evaluation and development consulting terminology.",
  },
  alternates: {
    canonical: "https://interactresearch.org/glossary",
  },
};

export default function GlossaryPage() {
  // Generate DefinedTermSet JSON-LD structured data for search engines & AI search (AEO)
  const jsonLdDefinedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://interactresearch.org/glossary#defined-term-set",
    "name": "Inter-Act Research Associates Development & M&E Glossary",
    "description": "Authoritative lexicon of Monitoring, Evaluation, Accountability and Learning (MEAL), data collection, and strategic consultancy terms for East Africa.",
    "publisher": {
      "@type": "Organization",
      "name": "Inter-Act Research Associates",
      "url": "https://interactresearch.org"
    },
    "hasDefinedTerm": GLOSSARY_TERMS.map((term) => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "termCode": term.acronym || term.id,
      "description": term.shortDefinition,
      "inDefinedTermSet": "https://interactresearch.org/glossary#defined-term-set"
    }))
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": GLOSSARY_TERMS.slice(0, 10).map((term) => ({
      "@type": "Question",
      "name": `What is a ${term.term}${term.acronym ? ` (${term.acronym})` : ''} in development consultancy?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${term.shortDefinition} ${term.detailedDefinition}`
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDefinedTermSet) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <GlossaryClient />
    </>
  );
}
