import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdminBar from "@/components/admin/AdminBar";
import BfCacheProvider from "@/components/ui/BfCacheProvider";

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
    "Full-Stack Developer building scalable, reliable and user-focused web applications from frontend to backend with React, Node.js, TypeScript, PostgreSQL, and Supabase.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Application Architecture",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "REST APIs",
    "Database Engineering",
    "System Architecture",
    "Vercel",
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
      "Full-Stack Developer building scalable, reliable and user-focused web applications from frontend to backend.",
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
      "Full-Stack Developer building scalable, reliable and user-focused web applications from frontend to backend.",
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
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "description": "Full-Stack Developer building scalable, reliable and user-focused web applications from frontend to backend."
};

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
      <body className="min-h-screen bg-[var(--color-cream-bg,#FDFBF7)] text-[var(--color-dark-plum,#2D1217)] antialiased overflow-x-hidden pt-8 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AdminBar />
        <Navbar />
        <BfCacheProvider>
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
        </BfCacheProvider>
        <Footer />
      </body>
    </html>
  );
}
