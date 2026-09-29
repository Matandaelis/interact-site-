import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)] text-[var(--ink)]">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
        <h1 className="font-serif text-6xl font-bold text-[var(--coral-deep)]">404</h1>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Page Not Found</h2>
        <p className="max-w-md text-base text-[var(--ink-muted)]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--coral)] px-6 py-3 font-bold text-white transition-colors hover:bg-[var(--coral-deep)]"
        >
          Return to Homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
}
