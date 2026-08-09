"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { Cpu, GitBranch, Layers, ShieldCheck, Rocket, Clock, Sparkles } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Architecture & Schema",
    icon: Layers,
    desc: "Database relational schema design, ER diagrams, and system architecture planning.",
  },
  {
    step: "02",
    title: "Backend API Engine",
    icon: Cpu,
    desc: "Structuring RESTful micro-endpoints, middleware auth, and Zod data validation.",
  },
  {
    step: "03",
    title: "Frontend UI Componentry",
    icon: GitBranch,
    desc: "Building accessible React/Next.js client-side interfaces and state hooks.",
  },
  {
    step: "04",
    title: "Security & Optimization",
    icon: ShieldCheck,
    desc: "API security auditing, server rate-limiting, page speed optimization, and dynamic route SSG.",
  },
  {
    step: "05",
    title: "Continuous Deployment",
    icon: Rocket,
    desc: "Vercel edge hosting setup, Supabase RLS enforcement, and production verification.",
  },
];

const inProgressProjects = [
  {
    title: "SaaS Analytics & Event Pipeline",
    category: "Full-Stack SaaS",
    status: "In Progress",
    progress: 75,
    techStack: ["Next.js 16", "PostgreSQL", "Recharts", "Supabase SSR"],
    description: "An active full-stack analytics engine tracking anonymous page events, device distributions, and weekly traffic trends in real time.",
  },
  {
    title: "Zero-Knowledge Micro-Vault Engine",
    category: "Security Engineering",
    status: "In Progress",
    progress: 60,
    techStack: ["Web Crypto API", "Node.js", "Express", "AES-256-GCM"],
    description: "An experimental security engine evaluating zero-knowledge client-side encryption key derivation and secure cookie session rotation.",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#170D10] text-[#2D1217] dark:text-[#F5EFE6] border-b border-[#E8DFC8] dark:border-[#3D2028] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 animate-spin" />
            <span>IN PROGRESS & ACTIVE PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] dark:text-[#FDFBF7] mb-4">
            Currently Building
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80 dark:text-[#F5EFE6]/80">
            Active web application R&D, engineering pipeline workflows, and in-progress software prototypes.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        {/* ─── Development Process Pipeline Graph ─────────────────────────────── */}
        <div className="mb-16">
          <h3 className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] text-center mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Software Development Process Workflow
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] shadow-sm hover:border-[#D96B43] transition-all flex flex-col justify-between group relative"
                >
                  {/* Step Connector Line (Desktop) */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-[#E8DFC8] dark:bg-[#3D2028] z-10" />
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold text-[#D96B43] font-mono bg-[#F5EFE6] dark:bg-[#2C161D] px-2 py-0.5 rounded-md border border-[#E8DFC8] dark:border-[#42222A]">
                        STEP {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#F5EFE6] dark:bg-[#2C161D] border border-[#E8DFC8] dark:border-[#42222A] flex items-center justify-center text-[#D96B43] group-hover:scale-110 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-editorial text-base font-bold text-[#4A1D24] dark:text-[#FDFBF7] mb-2 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-xs text-[#2D1217]/75 dark:text-[#F5EFE6]/75 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Active In-Progress Projects Cards ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgressProjects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D96B43] bg-[#F5EFE6] dark:bg-[#2C161D] px-3 py-1 rounded-full border border-[#E8DFC8] dark:border-[#42222A]">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                    {item.status}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#4A1D24] dark:text-[#FDFBF7] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#2D1217]/80 dark:text-[#F5EFE6]/80 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Completion Progress Bar */}
                <div className="mb-6 space-y-1.5">
                  <div className="flex justify-between text-[11px] font-semibold text-[#4A1D24] dark:text-[#FDFBF7]">
                    <span>Engineering Completion</span>
                    <span className="font-mono text-[#D96B43]">{item.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#F5EFE6] dark:bg-[#2C161D] rounded-full overflow-hidden border border-[#E8DFC8] dark:border-[#42222A]">
                    <div
                      className="h-full bg-gradient-to-r from-[#D96B43] to-[#E08E53] rounded-full transition-all duration-1000"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFC8] dark:border-[#3D2028] flex flex-wrap gap-2">
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold text-[#4A1D24] dark:text-[#FDFBF7] bg-[#F5EFE6] dark:bg-[#2C161D] px-2.5 py-0.5 rounded-md border border-[#E8DFC8] dark:border-[#42222A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
