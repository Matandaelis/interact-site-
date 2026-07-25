import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-blue-400">404</h1>
        <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
        <p className="text-slate-300 text-base max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all"
        >
          Return to Homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
}
