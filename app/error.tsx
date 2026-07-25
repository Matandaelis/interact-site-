"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-red-400">Something went wrong!</h1>
        <p className="text-slate-300 text-base max-w-md">
          A critical error occurred while loading this page.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-500 hover:bg-red-400 text-slate-950 font-bold transition-all"
        >
          Try again
        </button>
      </main>
      <Footer />
    </div>
  );
}
