"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import { portfolioService } from "@/lib/services/portfolioService";
import { HeroData } from "@/lib/types/portfolio";

export default function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const { scrollY } = useScroll();

  // Subtle Parallax Transforms
  const mountainY = useTransform(scrollY, [0, 500], [0, 80]);
  const forestY = useTransform(scrollY, [0, 500], [0, 40]);
  const textY = useTransform(scrollY, [0, 500], [0, -30]);

  useEffect(() => {
    portfolioService.getHero().then(setHeroData);
  }, []);

  const name = heroData?.name || "Faijan Anwar";
  const title = heroData?.title || "Full-Stack Developer";
  const subtitle = heroData?.subtitle || "Building scalable, reliable and user-focused web applications from frontend to backend.";

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#FDFBF7] text-[#2D1217] font-sans border-b border-[#E8DFC8]">
      {/* ─── Illustrated Sky & Parallax Background Scene ─────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Sun Glow */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F5EFE6] opacity-90 blur-[90px] rounded-full" />
        
        {/* Animated Flying Birds */}
        <motion.div
          animate={{ x: [-100, 1400], y: [0, -20, 10, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-0 opacity-40 text-[#4A1D24]"
        >
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
            <path d="M10 15 C 18 5, 25 15, 30 12 C 35 15, 42 5, 50 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M70 20 C 76 12, 82 20, 86 18 C 90 20, 96 12, 102 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Vector Mountain Silhouette */}
        <motion.div style={{ y: mountainY }} className="absolute top-24 left-0 right-0 w-full flex justify-center opacity-80">
          <svg viewBox="0 0 1440 320" className="w-full h-auto min-w-[1000px] text-[#E08E53]/25" fill="currentColor">
            <path d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,224C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          </svg>
        </motion.div>

        {/* Vector Pine Forest Silhouette Layer */}
        <motion.div style={{ y: forestY }} className="absolute bottom-16 left-0 right-0 w-full text-[#4A1D24]/15">
          <svg viewBox="0 0 1440 180" className="w-full h-auto min-w-[1000px]" fill="currentColor">
            <path d="M0,96 L30,40 L60,96 L90,20 L120,96 L150,50 L180,96 L210,30 L240,96 L270,60 L300,96 L330,40 L360,96 L390,10 L420,96 L450,45 L480,96 L510,35 L540,96 L570,55 L600,96 L630,25 L660,96 L690,45 L720,96 L750,30 L780,96 L810,50 L840,96 L870,20 L900,96 L930,40 L960,96 L990,30 L1020,96 L1050,55 L1080,96 L1110,35 L1140,96 L1170,45 L1200,96 L1230,25 L1260,96 L1290,40 L1320,96 L1350,20 L1380,96 L1410,50 L1440,96 L1440,180 L0,180 Z" />
          </svg>
        </motion.div>
      </div>

      {/* ─── Hero Content & Editorial Copy ──────────────────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10 w-full my-auto"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8DFC8] bg-[#F5EFE6] text-xs font-semibold text-[#4A1D24] uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-pulse" />
              Available for Full-Stack & Contract Roles
            </span>
          </motion.div>

          {/* Primary Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 mb-6"
          >
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#4A1D24]">
              {name}
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.3em] text-[#D96B43]">
              {title}
            </p>
          </motion.div>

          {/* Core Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-[#2D1217]/85 font-sans leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-14 justify-center"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D96B43] hover:bg-[#C55A32] text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-100 cursor-pointer"
            >
              Explore Project Lab
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={heroData?.resumeUrl || "/resume.pdf"}
              download
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F5EFE6] hover:bg-[#E8DFC8] border border-[#E8DFC8] text-[#2D1217] rounded-xl font-bold text-sm tracking-wide transition-all hover:scale-[1.02] active:scale-100 cursor-pointer"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FFFDF9] hover:bg-[#F5EFE6] border border-[#E8DFC8] text-[#4A1D24] rounded-xl font-bold text-sm tracking-wide transition-all hover:scale-[1.02] active:scale-100 cursor-pointer"
            >
              Contact Station
              <Mail className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Environmental World Landmark Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4"
          >
            {[
              { label: "Experience Journey", href: "#experience", icon: "🛣️" },
              { label: "Project Lab", href: "#projects", icon: "🔬" },
              { label: "Skills Observatory", href: "#skills", icon: "🔭" },
              { label: "Certificate Library", href: "#certificates", icon: "📚" },
            ].map((node) => (
              <Link
                key={node.label}
                href={node.href}
                className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#E8DFC8] hover:border-[#D96B43] shadow-sm flex items-center justify-center gap-2 text-xs font-semibold text-[#4A1D24] hover:text-[#D96B43] transition-all hover:-translate-y-0.5"
              >
                <span>{node.icon}</span>
                <span>{node.label}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center pt-8 text-xs font-semibold text-[#4A1D24]/60 uppercase tracking-widest">
        <span>Scroll to Explore World</span>
        <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#D96B43]" />
      </div>
    </section>
  );
}
