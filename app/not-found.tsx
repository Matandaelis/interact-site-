import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-emerald-400">404 - Page Not Found</h1>
        <p className="text-slate-300 text-sm max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          Return to Home Page
        </Link>
      </main>
      <Footer />
    </div>
  );
}
