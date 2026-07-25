import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
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
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
