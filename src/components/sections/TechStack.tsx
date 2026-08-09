"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { portfolioService } from "@/lib/services/portfolioService";
import { SkillItem } from "@/lib/types/portfolio";
import { Code2, Server, Database, Cloud, Shield, Boxes, Terminal, Cpu } from "lucide-react";

const categoryIcons: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
  Security: Shield,
  Tools: Terminal,
  Languages: Boxes,
};

export default function TechStack() {
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    portfolioService.getSkills().then(setSkills);
  }, []);

  const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] text-[#2D1217] border-b border-[#E8DFC8]">
      {/* Subtle Constellation Grid Overlay Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-noise" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Technical Observatory & Nodes
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] mb-4">
            Skills Observatory
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80">
            A research observatory mapping technology nodes, frameworks, and system competencies across research zones.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        {/* ─── Category Research Zone Filter Controls ────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#D96B43] text-white shadow-md"
                  : "bg-[#FFFDF9] text-[#4A1D24] border border-[#E8DFC8] hover:border-[#D96B43]"
              }`}
            >
              {cat === "All" ? "All Research Zones" : `${cat} Zone`}
            </button>
          ))}
        </div>

        {/* ─── Interactive Technology Constellation Nodes ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = categoryIcons[skill.category] || Cpu;
            return (
              <motion.div
                key={skill.id || skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="p-5 rounded-3xl bg-[#FFFDF9] border border-[#E8DFC8] hover:border-[#D96B43] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F5EFE6] border border-[#E8DFC8] flex items-center justify-center text-[#D96B43] group-hover:bg-[#D96B43] group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D96B43] bg-[#F5EFE6] px-2.5 py-0.5 rounded-full border border-[#E8DFC8]">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="font-editorial text-lg font-bold text-[#4A1D24] mb-1 group-hover:text-[#D96B43] transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Node Metadata & Duration Indicator (No Percentage Bars) */}
                <div className="pt-4 mt-3 border-t border-[#E8DFC8] flex items-center justify-between text-xs text-[#2D1217]/70">
                  <span className="font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Production Ready
                  </span>
                  <span className="font-mono font-semibold text-[#4A1D24]/80">
                    {skill.experienceYears || "2+ yrs"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
