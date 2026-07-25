import React from "react";
import { notFound } from "next/navigation";
import { portfolioAssignments } from "@/lib/portfolioData";
import PortfolioDetailClient from "@/components/PortfolioDetailClient";

export function generateStaticParams() {
  return portfolioAssignments.map((a) => ({
    id: a.id,
  }));
}

interface PortfolioPageProps {
  params: Promise<{ id: string }>;
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const resolvedParams = await params;
  const assignment = portfolioAssignments.find((a) => a.id === resolvedParams.id);

  if (!assignment) {
    notFound();
  }

  return <PortfolioDetailClient assignment={assignment} />;
}
