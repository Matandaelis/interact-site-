import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Inter-Act Research Associates | Business Management, M&E & Strategic Advisory",
  description: "Specializing in Business Management Services, Monitoring & Evaluation (M&E), Capacity Building, Organizational Development, and Strategic Planning across Kenya, Uganda, Tanzania, and Rwanda.",
  keywords: ["Monitoring and Evaluation", "M&E Kenya", "Strategic Planning East Africa", "Capacity Building", "Organizational Development", "Inter-Act Research"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-[#0D2230] text-slate-50 font-[family-name:var(--font-lato)] min-h-screen flex flex-col" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('iara_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light-mode');
                  }
                  
                  var _fetch = window.fetch;
                  Object.defineProperty(window, 'fetch', {
                    get: function() {
                      return _fetch;
                    },
                    set: function(v) {
                      _fetch = v;
                    },
                    configurable: true,
                    enumerable: true
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
