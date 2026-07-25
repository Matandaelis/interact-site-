"use client";

import React, { useEffect, useState } from "react";

interface ScrollProgressBarProps {
  colorClassName?: string;
  height?: string;
  showPercentage?: boolean;
}

export default function ScrollProgressBar({
  colorClassName = "bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400",
  height = "h-1",
  showPercentage = true,
}: ScrollProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    // Initial check
    updateScrollProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      {/* Background track */}
      <div className={`w-full bg-slate-900/40 backdrop-blur-xs ${height}`}>
        <div
          className={`${height} ${colorClassName} transition-all duration-75 ease-out shadow-[0_0_12px_rgba(37,99,235,0.7)]`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating percentage badge when scrolling long content */}
      {showPercentage && scrollProgress > 2 && (
        <div 
          className="absolute right-4 top-2.5 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-[10px] font-mono font-bold text-blue-400 shadow-xl backdrop-blur-md transition-opacity duration-300 flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span>{Math.round(scrollProgress)}% read</span>
        </div>
      )}
    </div>
  );
}
