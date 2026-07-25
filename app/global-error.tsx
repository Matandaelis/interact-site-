"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h2 className="text-2xl font-bold text-emerald-400">Application Error</h2>
        <p className="text-xs text-slate-400 max-w-md">{error.message || "A critical error occurred."}</p>
        <button
          onClick={() => reset()}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
