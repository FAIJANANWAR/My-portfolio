"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stats = [
  { value: "2+", label: "Years Freelancing" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const headlines = [
  "Modern Web Applications",
  "Secure Full-Stack Systems",
  "Decentralized Web3 Solutions",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [headlineIdx, setHeadlineIdx] = useState(0);

  // Spotlight Coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden group/hero"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition duration-300 opacity-0 group-hover/hero:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.015]" />
        <div className="absolute inset-0 grid-overlay opacity-30" />

        {/* Blurred gradient background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[450px] bg-[var(--color-cyber-indigo)] opacity-[0.05] blur-[140px] rounded-full animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-premium-purple)] opacity-[0.03] blur-[120px] rounded-full animate-float-delayed" />
      </div>

      {/* Floating Code Snippets for Premium Tech Visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden xl:block">
        {/* Snippet A */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[22%] left-[2%] glass px-4 py-2 rounded-xl text-[11px] font-mono text-blue-400/80 border border-white/[0.04] shadow-2xl"
        >
          <span className="text-purple-400">const</span> developer = &#123;
          <br />
          &nbsp;&nbsp;fullstack: <span className="text-amber-400">true</span>,
          <br />
          &nbsp;&nbsp;web3: <span className="text-emerald-400">true</span>
          <br />
          &#125;;
        </motion.div>

        {/* Snippet B */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[38%] right-[2%] glass px-4 py-2.5 rounded-xl text-[11px] font-mono text-purple-300/80 border border-white/[0.04] shadow-2xl"
        >
          <span className="text-blue-400">await</span> secVault.encrypt(
          <br />
          &nbsp;&nbsp;payload, aesKey
          <br />
          );
        </motion.div>

        {/* Snippet C */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[24%] left-[2%] glass px-4 py-2 rounded-xl text-[11px] font-mono text-emerald-400/80 border border-white/[0.04] shadow-2xl"
        >
          governor.castVote(
          <br />
          &nbsp;&nbsp;proposalId, support
          <br />
          );
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.06)] text-xs font-semibold text-[var(--color-electric-blue-light)] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for full stack & web3 contracts
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight mb-14 sm:mb-12 font-display leading-[1.1] flex flex-col justify-center"
          >
            <span className="text-white">Building Modern Web Apps,</span>
            <span className="relative block w-full min-h-[3.5em] md:min-h-[2.8em] lg:min-h-[2.5em] mt-2">
              {!mounted ? (
                <span className="text-gradient leading-tight py-0.5 inline-block w-full">{headlines[0]}</span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={headlineIdx}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-0 right-0 text-gradient text-center leading-tight py-0.5"
                  >
                    {headlines[headlineIdx]}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-sm sm:text-base md:text-lg text-gray-400 mb-12 leading-relaxed"
          >
            Full Stack Developer with 2+ years of freelance experience building high performance SaaS platforms,
            secure database applications, developer tools, and on-chain Web3 systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20 justify-center"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-cyber-indigo)] hover:bg-[var(--color-electric-blue-hover)] text-white rounded-xl font-bold text-sm tracking-wide transition-all duration-200 glow hover:scale-[1.03] active:scale-100 cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-100 cursor-pointer"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-100 cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-3 gap-3 sm:gap-5 max-w-lg mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 py-4 px-2 glass rounded-2xl border border-white/[0.04]">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white">{s.value}</span>
                <span className="text-[10px] sm:text-xs text-gray-500 text-center uppercase tracking-widest leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Fade out at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--color-matte-black)] to-transparent pointer-events-none z-10" />
    </section>
  );
}
