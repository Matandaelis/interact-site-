"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Accessibility, 
  Keyboard, 
  Eye, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles,
  Volume2,
  Sliders,
  ShieldCheck,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface AccessibilityModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  triggerClassName?: string;
}

export default function AccessibilityModal({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  triggerClassName = "",
}: AccessibilityModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<"shortcuts" | "screenreader" | "compliance">("shortcuts");

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleOpen = () => {
    setInternalIsOpen(true);
  };

  // Listen for Alt + A keybinding to trigger modal anywhere
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
        if (externalIsOpen !== undefined) {
          if (isOpen) {
            externalOnClose?.();
          }
        } else {
          setInternalIsOpen((prev) => !prev);
        }
      }
      if (e.key === "Escape" && isOpen) {
        if (externalOnClose) {
          externalOnClose();
        } else {
          setInternalIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, externalIsOpen, externalOnClose]);

  return (
    <>
      {/* Trigger Button if rendered independently */}
      {externalIsOpen === undefined && (
        <button
          onClick={handleOpen}
          className={`px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700/80 text-xs font-semibold transition-all shadow-sm flex items-center gap-2 group ${triggerClassName}`}
          title="Accessibility Statement & Keyboard Navigation Guide (Alt + A)"
          aria-label="Open Accessibility Statement and Keyboard Shortcuts"
        >
          <div className="w-5 h-5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
            <Accessibility className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="truncate">Accessibility</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700 hidden sm:inline">
            Alt+A
          </span>
        </button>
      )}

      {/* Modal Overlay & Dialog */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md transition-all animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="accessibility-modal-title"
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8 text-slate-100 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Accessibility className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 id="accessibility-modal-title" className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Accessibility & Standards
                    </h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      WCAG 2.1 AA
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Keyboard navigation guidelines, screen reader support & portal accessibility
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Bar */}
            <div className="px-6 py-3 bg-slate-900/90 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">Quick Display Preference:</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all text-xs font-semibold flex items-center gap-2"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Switch to Light Theme</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Switch to Twilight Dark</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-950/50">
              <button
                onClick={() => setActiveTab("shortcuts")}
                className={`flex-1 py-3 px-4 text-xs font-semibold border-b-2 flex items-center justify-center gap-2 transition-colors ${
                  activeTab === "shortcuts"
                    ? "border-emerald-500 text-emerald-400 bg-emerald-500/5"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Keyboard className="w-4 h-4" />
                <span>Keyboard Shortcuts</span>
              </button>

              <button
                onClick={() => setActiveTab("screenreader")}
                className={`flex-1 py-3 px-4 text-xs font-semibold border-b-2 flex items-center justify-center gap-2 transition-colors ${
                  activeTab === "screenreader"
                    ? "border-emerald-500 text-emerald-400 bg-emerald-500/5"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>Screen Readers</span>
              </button>

              <button
                onClick={() => setActiveTab("compliance")}
                className={`flex-1 py-3 px-4 text-xs font-semibold border-b-2 flex items-center justify-center gap-2 transition-colors ${
                  activeTab === "compliance"
                    ? "border-emerald-500 text-emerald-400 bg-emerald-500/5"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>WCAG Commitment</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {activeTab === "shortcuts" && (
                <div className="space-y-4 text-xs">
                  <p className="text-slate-300 leading-relaxed">
                    Inter-Act Research Associates (IARA) portal supports full keyboard navigation without requiring a mouse. You can access all interactive elements, forms, and frameworks using standard keys:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-medium">Next Interactive Item</span>
                      <kbd className="px-2 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 font-mono text-[11px] font-bold">Tab</kbd>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-medium">Previous Interactive Item</span>
                      <div className="flex gap-1">
                        <kbd className="px-1.5 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 font-mono text-[11px] font-bold">Shift</kbd>
                        <kbd className="px-1.5 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 font-mono text-[11px] font-bold">Tab</kbd>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-medium">Activate Button / Link</span>
                      <kbd className="px-2 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 font-mono text-[11px] font-bold">Enter / Space</kbd>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-medium">Close Modal / Menu</span>
                      <kbd className="px-2 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 font-mono text-[11px] font-bold">Esc</kbd>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-medium">Accessibility Menu</span>
                      <div className="flex gap-1">
                        <kbd className="px-1.5 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 font-mono text-[11px] font-bold">Alt</kbd>
                        <kbd className="px-1.5 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 font-mono text-[11px] font-bold">A</kbd>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300 font-medium">Scroll Page</span>
                      <kbd className="px-2 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 font-mono text-[11px] font-bold">PageUp / PageDn</kbd>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "screenreader" && (
                <div className="space-y-3.5 text-xs">
                  <p className="text-slate-300 leading-relaxed">
                    Our platform is optimized for popular screen readers including NVDA, JAWS, VoiceOver, and TalkBack.
                  </p>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold mb-0.5">Semantic HTML5 Landmarks</strong>
                        <span className="text-slate-400">Structured using header, main, nav, section, and footer elements for logical screen reader navigation.</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold mb-0.5">Descriptive ARIA Labels</strong>
                        <span className="text-slate-400">All interactive buttons, modals, accordion filters, and navigation links feature explicit aria-label and aria-expanded attributes.</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold mb-0.5">Image Alt Texts</strong>
                        <span className="text-slate-400">Infographics, maps, and technical diagrams include non-empty, descriptive alt tags or structured captions.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "compliance" && (
                <div className="space-y-3 text-xs text-slate-300">
                  <p className="leading-relaxed">
                    Inter-Act Research Associates is dedicated to providing an inclusive digital environment for development partners, donor organizations, government stakeholders, and researchers across East Africa and internationally.
                  </p>

                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                    <h4 className="font-bold text-emerald-300 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>International Compliance Benchmarks</span>
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                      <li>WCAG 2.1 Level AA (Web Content Accessibility Guidelines)</li>
                      <li>Section 508 of the US Rehabilitation Act</li>
                      <li>EN 301 549 European Accessibility Requirements</li>
                    </ul>
                  </div>

                  <p className="text-slate-400 text-[11px]">
                    Should you encounter any accessibility barrier while browsing our advisory framework or submitting an RFP, please contact our ICT Accessibility Officer at <a href="mailto:interactresearchassociates@gmail.com" className="text-emerald-400 underline font-semibold">interactresearchassociates@gmail.com</a>.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Esc</kbd> anytime to return to the portal
              </span>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md ml-auto"
              >
                Close & Return to Page
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
