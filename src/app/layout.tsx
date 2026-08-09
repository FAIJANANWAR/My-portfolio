import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdminBar from "@/components/admin/AdminBar";
import BfCacheProvider from "@/components/ui/BfCacheProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
  preload: true,
  style: ["normal", "italic"],
});

const siteUrl = "https://faijan.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faijan Anwar | Full-Stack Developer",
    template: "%s | Faijan Anwar",
  },
  description:
    "Full-Stack Developer building modern web applications with React, Next.js, Node.js, TypeScript, PostgreSQL, and Supabase.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "REST APIs",
    "Faijan Anwar",
    "India",
  ],
  authors: [{ name: "Faijan Anwar", url: siteUrl }],
  creator: "Faijan Anwar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Faijan Anwar — Full-Stack Developer",
    title: "Faijan Anwar | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web applications with React, Next.js, Node.js and modern backend technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faijan Anwar — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faijan Anwar | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web applications with React, Next.js, Node.js and modern backend technologies.",
    images: ["/og-image.jpg"],
    creator: "@faijananwar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Faijan Anwar",
  "url": "https://faijan.in",
  "sameAs": [
    "https://github.com/faijananwar",
    "https://www.linkedin.com/in/faijan-anwar/",
    "https://x.com/faijananwar"
  ],
  "jobTitle": "Full-Stack Developer",
  "description": "Full-Stack Developer building modern web applications with React, Next.js, Node.js and modern backend technologies."
};

const themeAntiFlashScript = `
  (function() {
    try {
      var stored = localStorage.getItem('portfolio_theme');
      var isDark = false;
      if (stored === 'dark') {
        isDark = true;
      } else if (stored === 'system' || !stored) {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeAntiFlashScript }} />
      </head>
      <body className="min-h-screen bg-[var(--background,#FDFBF7)] text-[var(--foreground,#2D1217)] antialiased overflow-x-hidden pt-0 font-sans transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <AdminBar />
          <Navbar />
          <BfCacheProvider>
            <main className="flex flex-col min-h-screen">
              {children}
            </main>
          </BfCacheProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
