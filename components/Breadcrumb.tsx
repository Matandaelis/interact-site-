"use client";

import React from "react";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ElementType;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb"
      className={`bg-slate-900/80 border-b border-slate-800/80 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 transition-colors ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 sm:gap-2">
        {/* Home Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 hover:text-blue-400 text-slate-300 font-medium transition-colors group"
          title="Back to Overview"
        >
          <Home className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Overview</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const IconComponent = item.icon;

          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />

              {isLast || !item.href ? (
                <span className="text-blue-400 font-semibold inline-flex items-center gap-1 truncate max-w-[200px] sm:max-w-md">
                  {IconComponent && <IconComponent className="w-3.5 h-3.5 shrink-0" />}
                  <span className="truncate">{item.label}</span>
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-400 text-slate-300 transition-colors inline-flex items-center gap-1 truncate max-w-[150px] sm:max-w-xs"
                >
                  {IconComponent && <IconComponent className="w-3.5 h-3.5 shrink-0" />}
                  <span className="truncate">{item.label}</span>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
