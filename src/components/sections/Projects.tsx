"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { portfolioService } from "@/lib/services/portfolioService";
import { ProjectItem } from "@/lib/types/portfolio";
import { ExternalLink, X, Cpu, CheckCircle2, Layers } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    portfolioService.getProjects().then((list) => {
      setProjects(list.filter((p) => p.status === "published"));
    });
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] text-[#2D1217] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-14 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Featured Applications & Codebases
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] mb-4">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80">
            A collection of web applications, calculation utilities, and full-stack projects built with clean frontend architecture and backend services.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        {/* Project Station Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-[#FFFDF9] border border-[#E8DFC8] hover:border-[#D96B43] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D96B43] bg-[#F5EFE6] px-3 py-1 rounded-full border border-[#E8DFC8]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg text-[#4A1D24]/70 hover:text-[#D96B43] hover:bg-[#F5EFE6] transition-colors"
                        title="GitHub Repository"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg text-[#4A1D24]/70 hover:text-[#D96B43] hover:bg-[#F5EFE6] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#4A1D24] mb-3 group-hover:text-[#D96B43] transition-colors">
                  {project.title}
                </h3>
                {project.overview && (
                  <p className="text-xs sm:text-sm text-[#2D1217]/80 line-clamp-3 leading-relaxed mb-6">
                    {project.overview}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#E8DFC8] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags && project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold text-[#4A1D24] bg-[#F5EFE6] px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-[#D96B43] group-hover:underline flex items-center gap-1">
                  View Details &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-[#FFFDF9] border border-[#E8DFC8] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto text-[#2D1217]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[#E8DFC8] pb-6 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#D96B43] uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-editorial text-3xl font-bold text-[#4A1D24]">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full text-gray-400 hover:text-[#4A1D24] hover:bg-[#F5EFE6] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Problem & Solution */}
              {(selectedProject.problem || selectedProject.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {selectedProject.problem && (
                    <div className="p-5 rounded-2xl bg-[#F5EFE6]/60 border border-[#E8DFC8]">
                      <h4 className="text-xs font-bold text-[#4A1D24] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-[#D96B43]" />
                        Problem Solved
                      </h4>
                      <p className="text-xs sm:text-sm text-[#2D1217]/80 leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div className="p-5 rounded-2xl bg-[#F5EFE6]/60 border border-[#E8DFC8]">
                      <h4 className="text-xs font-bold text-[#4A1D24] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                        Implementation & Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-[#2D1217]/80 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* System Architecture */}
              {selectedProject.architecture && (
                <div className="mb-8 space-y-2">
                  <h4 className="text-xs font-bold text-[#4A1D24] uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#3B5998]" />
                    Architecture & Tech Patterns
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D1217]/80 leading-relaxed p-4 rounded-2xl bg-[#F5EFE6]/40 border border-[#E8DFC8]">
                    {selectedProject.architecture}
                  </p>
                </div>
              )}

              {/* Features List */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-8 space-y-3">
                  <h4 className="text-xs font-bold text-[#4A1D24] uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#2D1217]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D96B43]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Links & Tags */}
              <div className="pt-6 border-t border-[#E8DFC8] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags && selectedProject.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold text-[#4A1D24] bg-[#F5EFE6] px-3 py-1 rounded-xl border border-[#E8DFC8]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#F5EFE6] hover:bg-[#E8DFC8] border border-[#E8DFC8] text-[#2D1217] text-xs font-bold flex items-center gap-2 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#D96B43] hover:bg-[#C55A32] text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
