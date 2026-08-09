"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { portfolioService } from "@/lib/services/portfolioService";
import { ExperienceItem } from "@/lib/types/portfolio";
import { Calendar, Briefcase, ChevronRight, Award, Code2, MapPin, Laptop, Building2 } from "lucide-react";

export default function Experience() {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    portfolioService.getExperiences().then((list) => {
      // Filter out any stale intern item if it was cached in localStorage
      const filtered = list.filter((exp) => exp.id !== "exp-intern" && !exp.position.toLowerCase().includes("intern"));
      setExperiences(filtered);
      if (filtered.length > 0) setSelectedExp(filtered[0]);
    });
  }, []);

  return (
    <section id="experience" className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#170D10] text-[#2D1217] dark:text-[#F5EFE6] border-b border-[#E8DFC8] dark:border-[#3D2028] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Career Milestones & Progression
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] dark:text-[#FDFBF7] mb-4">
            Experience Journey
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80 dark:text-[#F5EFE6]/80">
            A visual road mapping my professional engineering milestones, responsibilities, and technical impact.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        {/* Illustrated Winding Road Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Road & Station Pillars */}
          <div className="lg:col-span-6 relative pt-4">
            {/* Vector Road Path Line */}
            <div className="absolute left-[39px] sm:left-[49px] top-6 bottom-6 w-3 bg-[#E8DFC8] dark:bg-[#3D2028] rounded-full z-0" />
            <div className="absolute left-[44px] sm:left-[54px] top-6 bottom-6 w-0.5 border-r-2 border-dashed border-[#D96B43]/50 z-0" />

            <div className="space-y-8 relative z-10">
              {experiences.map((exp, index) => {
                const isSelected = selectedExp?.id === exp.id;
                const isRemote = exp.location === "Remote" || exp.company.toLowerCase().includes("orinson");

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedExp(exp)}
                    className={`flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#FFFDF9] dark:bg-[#231217] border-[#D96B43] dark:border-[#E08E53] shadow-md translate-x-2"
                        : "bg-[#F5EFE6]/60 dark:bg-[#2C161D]/60 border-[#E8DFC8] dark:border-[#3D2028] hover:border-[#D96B43]/60 dark:hover:border-[#E08E53]/60 hover:bg-[#FFFDF9] dark:hover:bg-[#231217]"
                    }`}
                  >
                    {/* Milestone Road Pillar Badge */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-sm transition-colors ${
                        isSelected
                          ? "bg-[#D96B43] text-white"
                          : "bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] text-[#4A1D24] dark:text-[#FDFBF7]"
                      }`}
                    >
                      <span>0{index + 1}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#D96B43] flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                            isRemote
                              ? "bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                              : "bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                          }`}
                        >
                          {isRemote ? <Laptop className="w-3 h-3" /> : <Building2 className="w-3 h-3" />}
                          {isRemote ? "Remote" : "In-Office"}
                        </span>
                      </div>
                      <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#4A1D24] dark:text-[#FDFBF7] truncate">
                        {exp.position}
                      </h3>
                      <p className="text-xs text-[#2D1217]/70 dark:text-[#F5EFE6]/70 font-semibold truncate mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 transition-transform my-auto shrink-0 ${
                        isSelected ? "text-[#D96B43] translate-x-1" : "text-[#4A1D24]/40 dark:text-[#F5EFE6]/40"
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Professional Information Panel */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              {selectedExp ? (
                <motion.div
                  key={selectedExp.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] shadow-lg space-y-6"
                >
                  <div className="flex items-start justify-between border-b border-[#E8DFC8] dark:border-[#3D2028] pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#D96B43] uppercase tracking-widest block">
                          {selectedExp.duration}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F5EFE6] dark:bg-[#2C161D] text-[#4A1D24] dark:text-[#FDFBF7] border border-[#E8DFC8] dark:border-[#42222A] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#D96B43]" />
                          {selectedExp.location || (selectedExp.company.toLowerCase().includes("orinson") ? "Remote" : "In-Office")}
                        </span>
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#4A1D24] dark:text-[#FDFBF7]">
                        {selectedExp.position}
                      </h3>
                      <p className="text-sm font-semibold text-[#2D1217]/80 dark:text-[#F5EFE6]/80 mt-1 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#D96B43]" />
                        {selectedExp.company}
                      </p>
                    </div>
                  </div>

                  {/* Responsibilities & Overview */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-[#4A1D24] dark:text-[#FDFBF7] uppercase tracking-wider">
                      Role Overview & Responsibilities
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2D1217]/80 dark:text-[#F5EFE6]/80 leading-relaxed">
                      {selectedExp.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  {selectedExp.achievements && selectedExp.achievements.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold text-[#4A1D24] dark:text-[#FDFBF7] uppercase tracking-wider flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-[#D96B43]" />
                        Key Responsibilities & Impact
                      </h4>
                      <ul className="space-y-2">
                        {selectedExp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D1217]/80 dark:text-[#F5EFE6]/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D96B43] mt-2 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Used */}
                  {selectedExp.techStack && selectedExp.techStack.length > 0 && (
                    <div className="space-y-3 pt-3 border-t border-[#E8DFC8] dark:border-[#3D2028]">
                      <h4 className="text-xs font-bold text-[#4A1D24] dark:text-[#FDFBF7] uppercase tracking-wider flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-[#3B5998]" />
                        Technologies & Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExp.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-xl bg-[#F5EFE6] dark:bg-[#2C161D] border border-[#E8DFC8] dark:border-[#42222A] text-xs font-semibold text-[#4A1D24] dark:text-[#FDFBF7]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
