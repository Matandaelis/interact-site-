import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { detailedServices } from "@/lib/servicesData";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export function generateStaticParams() {
  return detailedServices.map((service) => ({
    id: service.id,
  }));
}

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = detailedServices.find((s) => s.id === resolvedParams.id);

  if (!service) {
    return {
      title: "Service Not Found | Inter-Act Research Associates",
      description: "The requested technical consultancy practice area could not be found.",
    };
  }

  const title = `${service.title} | Inter-Act Research Associates (IARA)`;
  const description = service.heroSummary || service.tagline || (service.overview && service.overview[0]) || "Inter-Act Research Associates consultancy service.";

  return {
    title,
    description,
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
      url: `https://interactresearch.org/services/${service.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://interactresearch.org/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = detailedServices.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}

