"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { portfolioService } from "@/lib/services/portfolioService";
import { SkillItem } from "@/lib/types/portfolio";
import { Code, Database, Server, Cloud, Terminal, Shield, FileCode, Palette } from "lucide-react";

const categoryIcons: Record<string, typeof Code> = {
  Frontend: Palette,
  Backend: Server,
  Database: Database,
  "Cloud & DevOps": Cloud,
  Tools: Terminal,
  "Tools & Security": Shield,
  Languages: FileCode,
};

export default function TechStack() {
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    portfolioService.getSkills().then(setSkills);
  }, []);

  const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#170D10] text-[#2D1217] dark:text-[#F5EFE6] border-b border-[#E8DFC8] dark:border-[#3D2028] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Technologies & Software Tools
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] dark:text-[#FDFBF7] mb-4">
            Skills Observatory
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80 dark:text-[#F5EFE6]/80">
            A comprehensive overview of programming languages, frontend frameworks, backend runtimes, databases, and DevOps tools.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        {/* Category Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#D96B43] text-white shadow-sm font-bold"
                  : "bg-[#F5EFE6] dark:bg-[#2C161D] text-[#4A1D24] dark:text-[#FDFBF7] hover:bg-[#E8DFC8] dark:hover:bg-[#3D2028] border border-[#E8DFC8] dark:border-[#42222A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => {
            const IconComp = categoryIcons[skill.category] || Code;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="p-4 rounded-2xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] hover:border-[#D96B43] dark:hover:border-[#E08E53] shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] dark:bg-[#2C161D] border border-[#E8DFC8] dark:border-[#42222A] flex items-center justify-center text-[#D96B43] dark:text-[#E08E53] mb-3 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#4A1D24] dark:text-[#FDFBF7] mb-1">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-semibold text-[#2D1217]/60 dark:text-[#F5EFE6]/60 uppercase tracking-wider">
                  {skill.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
