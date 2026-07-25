"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h2 className="text-2xl font-bold text-emerald-400">Something went wrong</h2>
      <p className="text-xs text-slate-400 max-w-md">{error.message || "An unexpected error occurred."}</p>
      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2 rounded-xl border border-slate-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
