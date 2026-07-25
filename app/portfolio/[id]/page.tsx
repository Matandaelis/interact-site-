import React from "react";
import type { Metadata } from "next";
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

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const assignment = portfolioAssignments.find((a) => a.id === resolvedParams.id);

  if (!assignment) {
    return {
      title: "Assignment Not Found | Inter-Act Research Associates",
      description: "The requested portfolio assignment case study could not be found.",
    };
  }

  const title = `${assignment.title} - ${assignment.organization} | Inter-Act Research Associates`;
  const description = assignment.description || assignment.backgroundContext.slice(0, 160);

  return {
    title,
    description,
    keywords: [
      assignment.organization,
      assignment.categoryLabel,
      assignment.country,
      assignment.location,
      "Inter-Act Research Associates",
      "IARA Portfolio",
      "M&E Track Record",
      "East Africa Assignment"
    ],
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Inter-Act Research Associates",
      url: `https://interactresearch.org/portfolio/${assignment.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://interactresearch.org/portfolio/${assignment.id}`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const resolvedParams = await params;
  const assignment = portfolioAssignments.find((a) => a.id === resolvedParams.id);

  if (!assignment) {
    notFound();
  }

  return <PortfolioDetailClient assignment={assignment} />;
}

