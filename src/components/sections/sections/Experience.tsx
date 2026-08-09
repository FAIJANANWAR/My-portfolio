"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { Briefcase, Building, Code, Globe } from "lucide-react";

const mainExperiences = [
  {
    role: "Full Stack Engineer",
    company: "Orinson Technologies Private Limited",
    period: "May 2026 – Present",
    icon: Code,
    color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    description:
      "Collaborating with a cross-functional team in a virtual environment to design, build, and optimize responsive full-stack web applications with modern architectures.",
    bullets: [
      "Collaborating in virtual environments to coordinate team sprints.",
      "Structuring clean frontend interfaces and backend database connections.",
      "Optimizing application page speeds and codebase modularity.",
    ],
  },
  {
    role: "Web Developer",
    company: "Global IT Providers",
    period: "May 2026 – Present",
    icon: Building,
    color: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    description:
      "Contributing to end-to-end web development contracts. Focus areas include clean codebase architecture, database integration, and high performance client interfaces.",
    bullets: [
      "Assisting in PostgreSQL/MongoDB database design and index optimization.",
      "Designing highly modular client-side components with React and CSS variables.",
      "Ensuring seamless application flow and responsiveness under senior review.",
    ],
  },
  {
    role: "Freelance Full Stack & Web3 Developer",
    company: "Independent Contracts",
    period: "2024 – Present",
    icon: Globe,
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    description:
      "Delivered custom solutions for global clients spanning SaaS dashboards, markdown publishing interfaces, Merkle-tree token distributions, secure JWT authentication, and token gated systems.",
    bullets: [
      "Built production-grade SaaS products with Next.js, Node.js, and Supabase.",
      "Authored, tested, and audited secure Solidity smart contracts (OpenZeppelin standards).",
      "Enforced secure browser cookies, JWT verification, and database RLS access policies.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-y border-white/[0.06]" style={{ background: "rgba(17,17,20,0.5)" }}>
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-cyber-indigo)] rounded-full mx-auto" />
        </FadeInView>

        <div ref={containerRef} className="relative">
          {/* Main timeline center static line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {/* Dynamic Scroll Progress Timeline Line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-cyber-indigo)] via-[var(--color-premium-purple)] to-transparent origin-top -translate-x-1/2 z-10"
          />

          {/* Timeline Grid */}
          <div className="space-y-12">
            {mainExperiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className={`flex flex-col sm:flex-row relative items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle dot on center line */}
                  <div className="absolute left-4 sm:left-1/2 top-6 w-8 h-8 rounded-full bg-[var(--color-matte-black)] border-2 border-[var(--color-cyber-indigo)] -translate-x-1/2 z-20 hidden sm:flex items-center justify-center">
                    <Briefcase className="w-3.5 h-3.5 text-[var(--color-cyber-indigo)]" />
                  </div>

                  {/* Left / Right spacer for grid alignment */}
                  <div className="w-full sm:w-1/2 sm:px-8" />

                  {/* Card Container */}
                  <FadeInView
                    direction={isEven ? "left" : "right"}
                    delay={idx * 0.08}
                    className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-8 relative z-10"
                  >
                    <div className="glass rounded-2xl border border-white/[0.06] hover:border-[rgba(99,102,241,0.22)] p-6 transition-all duration-300 relative group">
                      {/* Left timeline line highlight dot for mobile */}
                      <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-[var(--color-cyber-indigo)] -translate-x-[30px] z-20 sm:hidden" />

                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                        <div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-2 inline-block ${exp.color}`}>
                            {exp.company}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold font-display text-white leading-tight">
                            {exp.role}
                          </h3>
                        </div>
                        <span className="text-xs font-semibold text-[var(--color-electric-blue-light)] shrink-0 sm:mt-1">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                        {exp.description}
                      </p>

                      <ul className="space-y-1.5 pt-2 border-t border-white/[0.04]">
                        {exp.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-gray-500 font-light leading-relaxed">
                            <span className="text-[var(--color-electric-blue-light)] font-bold mt-0.5">&bull;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeInView>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
