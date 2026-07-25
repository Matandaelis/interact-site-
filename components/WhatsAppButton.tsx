"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "254702103653"; // IARA Direct WhatsApp Number (+254 702 103 653)
  const defaultMessage = "Hello Inter-Act Research Associates, I have an urgent field consulting inquiry regarding M&E / Technical Advisory.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Quick Info Popover (shows when toggled or hovered) */}
      {isOpen && (
        <div className="w-80 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-4 text-slate-100 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-black text-white uppercase tracking-wider">IARA Urgent Consulting</span>
            </div>
            <button
              id="whatsapp-close-popover"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close message popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2 text-xs">
            <p className="text-slate-200 leading-relaxed font-medium">
              Need immediate technical assistance or field survey support in East Africa? Connect directly with Kennedy S. Okumu & Executive Advisory team.
            </p>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-blue-400 font-mono">
              ⚡ Monitored 24/7 for urgent field RFPs
            </div>
          </div>

          <a
            id="whatsapp-popover-send-link"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full mt-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        <a
          id="floating-whatsapp-direct-button"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border border-blue-400/40"
          aria-label="Message IARA on WhatsApp for urgent field consulting inquiries"
        >
          {/* Pulsing indicator badge */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>

          <MessageSquare className="w-4 h-4 fill-white shrink-0" />
          <span className="tracking-tight">Message Us</span>

          {/* Quick preview hover badge */}
          <span className="hidden sm:inline-block text-[10px] bg-blue-800/80 text-blue-200 px-2 py-0.5 rounded-full border border-blue-400/30 font-bold">
            24/7 Direct
          </span>
        </a>

        {/* Toggle Information Button */}
        <button
          id="floating-whatsapp-info-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center shadow-lg transition-all"
          aria-label="Toggle WhatsApp consulting details"
          title="Consulting Information"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
        </button>
      </div>
    </div>
  );
}
