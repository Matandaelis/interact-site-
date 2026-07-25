"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Contrast } from "lucide-react";

interface ThemeToggleProps {
  compact?: boolean;
  className?: string;
}

export default function ThemeToggle({ compact = false, className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  if (compact) {
    return (
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all shadow-sm flex items-center justify-center group ${className}`}
        title={theme === "dark" ? "Switch to High-Contrast Light Mode" : "Switch to Twilight Dark Mode"}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-400 group-hover:-rotate-12 transition-transform" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold transition-all shadow-sm flex items-center gap-2 group ${className}`}
      aria-label="Toggle High-Contrast Accessibility Theme"
    >
      <div className="w-5 h-5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
        {theme === "dark" ? (
          <Sun className="w-3.5 h-3.5 text-amber-400" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
        )}
      </div>
      <span className="truncate">
        {theme === "dark" ? "High-Contrast Light" : "Dark Mode"}
      </span>
      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700 hidden sm:inline">
        Theme
      </span>
    </button>
  );
}
