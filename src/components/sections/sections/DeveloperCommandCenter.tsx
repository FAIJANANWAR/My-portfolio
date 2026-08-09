"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { Cpu, Terminal, GitBranch, ShieldCheck, CheckCircle } from "lucide-react";

function AnimatedCounter({ value, duration = 1.2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function DeveloperCommandCenter() {
  const [activeBranch, setActiveBranch] = useState("main");
  const [terminalLine, setTerminalLine] = useState(0);
  const terminalLines = [
    "faijananwar@portfolio:~$ npm run check-status",
    "Initializing System Analytics...",
    "Database Check: PostgreSQL | MongoDB -> Operational",
    "Smart Contract Audit: 0 Critical Vulnerabilities Found",
    "Lighthouse Performance Index: 98/100",
    "Developer Command Center -> Fully Loaded."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLine((prev) => (prev < terminalLines.length - 1 ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(timer);
  }, [terminalLines.length]);

  // Generate random data for Git Commits Matrix grid (53 columns x 7 rows)
  const commitGrid = Array.from({ length: 147 }, (_, i) => {
    // Determine color intensity (0 = empty, 1 = low, 2 = mid, 3 = high)
    const seed = Math.sin(i * 1.5) * 10;
    if (seed < -2) return 0;
    if (seed < 2) return 1;
    if (seed < 7) return 2;
    return 3;
  });

  const getCommitColor = (level: number) => {
    switch (level) {
      case 0: return "bg-white/[0.03] border-white/[0.02]";
      case 1: return "bg-indigo-950/40 border-indigo-900/30 text-indigo-400";
      case 2: return "bg-indigo-800/40 border-indigo-700/40 text-indigo-300";
      case 3: return "bg-purple-600/50 border-purple-500/50 text-purple-200";
      default: return "bg-white/[0.03]";
    }
  };

  return (
    <section id="command-center" className="py-24 relative overflow-hidden" style={{ background: "rgba(17,17,20,0.2)" }}>
      {/* Background spotlights */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Developer <span className="text-gradient">Command Center</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-cyber-indigo)] rounded-full mx-auto" />
        </FadeInView>
        <FadeInView delay={0.1} className="mb-16 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Real-time developer diagnostics, operational performance indexes, and git telemetry metrics.
          </p>
        </FadeInView>

        {/* Diagnostic Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left panel: Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { title: "Years of Experience", value: 2, suffix: "+", desc: "Freelance & Industry" },
              { title: "Projects Delivered", value: 20, suffix: "+", desc: "Full Stack & Web3" },
              { title: "Technologies Used", value: 15, suffix: "+", desc: "Across active stack" },
              { title: "Client Success Rate", value: 100, suffix: "%", desc: "Delivery guarantee" }
            ].map((stat, idx) => (
              <FadeInView
                key={stat.title}
                delay={idx * 0.08}
                className="glass border border-white/[0.05] hover:border-[rgba(99,102,241,0.2)] rounded-2xl p-5 flex flex-col justify-between group transition-all duration-300"
              >
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest leading-none mb-4">{stat.title}</p>
                <div>
                  <h3 className="text-3xl sm:text-4.5xl font-bold font-display text-white group-hover:text-[var(--color-cyber-indigo)] transition-colors mb-1 select-none">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-[var(--color-electric-blue-light)]">{stat.suffix}</span>
                  </h3>
                  <p className="text-gray-400 text-xs font-light">{stat.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>

          {/* Right panel: Live Diagnostics Mock Terminal */}
          <FadeInView delay={0.15} className="lg:col-span-7 flex flex-col glass border border-white/[0.05] rounded-2xl overflow-hidden min-h-[300px]">
            {/* Terminal Header */}
            <div className="bg-white/[0.02] border-b border-white/[0.05] px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="text-xs font-mono font-medium text-gray-400 select-none">diagnostics_terminal.sh</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500 select-none">
                  <GitBranch className="w-3.5 h-3.5" />
                  branch: <span className="text-gray-300 font-semibold">{activeBranch}</span>
                </span>
              </div>
            </div>

            {/* Terminal Screen */}
            <div className="p-5.5 flex-1 font-mono text-xs text-gray-300 space-y-2 bg-black/40 overflow-y-auto leading-relaxed select-none">
              {terminalLines.slice(0, terminalLine + 1).map((line, index) => {
                const isCode = line.startsWith("faijananwar");
                const isError = line.includes("Vulnerabilities");
                return (
                  <div key={index} className={isCode ? "text-indigo-400" : isError ? "text-emerald-400 flex items-center gap-1.5" : "text-gray-400"}>
                    {isError && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                    {line}
                  </div>
                );
              })}
              {terminalLine < terminalLines.length - 1 && (
                <span className="inline-block w-1.5 h-3.5 bg-gray-400 animate-pulse" />
              )}
            </div>

            {/* Commit Grid Telemetry Footer */}
            <div className="p-5 bg-white/[0.01] border-t border-white/[0.05] flex flex-col gap-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span className="uppercase tracking-wider">Git Commit Telemetry</span>
                <span className="flex items-center gap-1.5">
                  Less <span className="w-2.5 h-2.5 rounded bg-white/[0.03] border border-white/[0.02]" />
                  <span className="w-2.5 h-2.5 rounded bg-indigo-950/40 border border-indigo-900/30" />
                  <span className="w-2.5 h-2.5 rounded bg-indigo-800/40 border border-indigo-700/40" />
                  <span className="w-2.5 h-2.5 rounded bg-purple-600/50 border border-purple-500/50" /> More
                </span>
              </div>
              
              {/* Grid block display */}
              <div className="flex flex-wrap gap-1.5">
                {commitGrid.map((level, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.002 }}
                    className={`w-2.5 h-2.5 rounded border transition-all duration-300 hover:scale-125 hover:shadow-[0_0_8px_rgba(99,102,241,0.5)] ${getCommitColor(level)}`}
                  />
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
