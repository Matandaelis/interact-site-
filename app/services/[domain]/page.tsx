import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { detailedServices } from "@/lib/servicesData";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export function generateStaticParams() {
  return detailedServices.map((service) => ({
    domain: service.id,
  }));
}

interface ServicePageProps {
  params: Promise<{ domain: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = detailedServices.find((s) => s.id === resolvedParams.domain);

  if (!service) {
    return {
      title: "Service Not Found | Inter-Act Research Associates",
      description: "The requested technical consultancy practice area could not be found.",
    };
  }

  const title = `${service.shortTitle} in East Africa | Inter-Act Research Associates`;
  const description = service.heroSummary || service.tagline || (service.overview && service.overview[0]) || "Inter-Act Research Associates consultancy service.";
  const canonicalUrl = `https://interactresearch.org/services/${service.id}`;

  return {
    title,
    description,
    authors: [{ name: "Inter-Act Research Associates" }],
    keywords: [
      service.shortTitle,
      service.badge,
      service.title,
      "Inter-Act Research Associates",
      "IARA",
      "East Africa M&E Consulting",
      "Kenya Development Advisory"
    ],
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Inter-Act Research Associates",
      url: canonicalUrl,
      images: [
        {
          url: "https://interactresearch.org/images/services-workshop.png",
          width: 1600,
          height: 900,
          alt: `${service.shortTitle} consulting services in East Africa`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

function ServiceStructuredData({ service }: { service: (typeof detailedServices)[number] }) {
  const url = `https://interactresearch.org/services/${service.id}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.heroSummary,
    url,
    serviceType: service.shortTitle,
    areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "South Sudan", "Somalia"].map((name) => ({
      "@type": "Country",
      name,
    })),
    provider: {
      "@type": "Organization",
      name: "Inter-Act Research Associates",
      url: "https://interactresearch.org",
      areaServed: "East Africa",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Development organizations, public institutions, NGOs, and international donors",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.shortTitle} deliverables`,
      itemListElement: service.coreCapabilities.map((capability, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: capability.title,
          description: capability.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = detailedServices.find((s) => s.id === resolvedParams.domain);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceStructuredData service={service} />
      <ServiceDetailClient service={service} />
    </>
  );
}

