import React from "react";
import { notFound } from "next/navigation";
import { detailedServices } from "@/lib/servicesData";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export function generateStaticParams() {
  return [
    { id: "me" },
    { id: "da" },
    { id: "cb" },
    { id: "sp" },
    { id: "livelihood" },
  ];
}

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = detailedServices.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
