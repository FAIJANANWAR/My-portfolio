"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { Award, ShieldCheck, Cpu, Code2 } from "lucide-react";

const achievements = [
  {
    title: "Full-Stack Web Engineering & Delivery",
    category: "Web Applications",
    description: "Architected and delivered full-stack web applications, REST API services, and client dashboards using React, Next.js, Node.js, and PostgreSQL.",
    icon: Code2,
    year: "2024 - Present",
  },
  {
    title: "E2EE + SSE Security Architecture",
    category: "Security Engineering",
    description: "Engineered Defense-in-Depth security framework combining client-side Web Crypto API AES-256-GCM encryption with server-side SSE storage protection.",
    icon: ShieldCheck,
    year: "2025",
  },
  {
    title: "Apigee API Security & Cloud Credentials",
    category: "Cloud Engineering",
    description: "Completed API Security on Google Cloud Apigee Platform & Google Cloud Computing Foundations credentials.",
    icon: Cpu,
    year: "2024",
  },
  {
    title: "Master of Computer Applications (MCA)",
    category: "Computer Science",
    description: "Pursuing MCA in Computer Science at Poornima University (2025 - 2027) with focus on software design and distributed systems.",
    icon: Award,
    year: "2025 - 2027",
  },
];

export default function ProblemSolving() {
  return (
    <section id="achievements" className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] text-[#2D1217] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-14 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Milestones & Engineering Progression
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] mb-4">
            Achievement Summit
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80">
            Factual career milestones, software credentials, and technical achievements.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        {/* ─── Mountain Path Grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((ach, index) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#E8DFC8] shadow-sm flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D96B43]/10 border border-[#D96B43]/30 flex items-center justify-center text-[#D96B43] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D96B43] bg-[#F5EFE6] px-2.5 py-0.5 rounded-full border border-[#E8DFC8]">
                      {ach.category}
                    </span>
                    <span className="text-xs font-semibold text-[#2D1217]/60">
                      {ach.year}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#4A1D24] mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D1217]/80 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
