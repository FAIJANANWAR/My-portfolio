"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { ProjectItem } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { FolderGit2, Save, Plus, Trash2, CheckCircle, ExternalLink, Cpu, CheckCircle2, Layers } from "lucide-react";

export default function ProjectsCmsPage() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getProjects().then((list) => {
      setProjects(list);
      if (list.length > 0) setSelectedId(list[0].id);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await portfolioService.saveProjects(projects);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const addProject = () => {
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      slug: `new-project-${Date.now()}`,
      title: "New Architectural System",
      category: "Full Stack / Web App",
      type: "fullstack",
      overview: "High-performance web architecture and database services.",
      problem: "Assessing performance bottlenecks under load.",
      solution: "Implemented scalable microservice architecture.",
      architecture: "Next.js App Router + Supabase PostgreSQL.",
      techStack: { Frontend: ["React", "Tailwind CSS"], Backend: ["Node.js", "PostgreSQL"] },
      challenges: [],
      features: ["Real-time Sync", "High Throughput"],
      lessons: ["Microservice patterns"],
      github: "https://github.com/faijananwar",
      live: "https://faijan.in",
      featured: true,
      status: "published",
      priority: projects.length + 1,
      tags: ["Full Stack", "Next.js", "TypeScript"],
      versions: [],
    };

    const updated = [newProj, ...projects];
    setProjects(updated);
    setSelectedId(newProj.id);
  };

  const removeProject = (id: string) => {
    const filtered = projects.filter((p) => p.id !== id);
    setProjects(filtered);
    if (selectedId === id) {
      setSelectedId(filtered[0]?.id || null);
    }
  };

  const activeProject = projects.find((p) => p.id === selectedId);

  const updateActiveProject = (key: keyof ProjectItem, value: any) => {
    if (!selectedId) return;
    setProjects(projects.map((p) => (p.id === selectedId ? { ...p, [key]: value } : p)));
  };

  return (
    <div className="space-y-6 pb-12 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2 font-editorial">
            <FolderGit2 className="w-6 h-6 text-[#D96B43]" />
            Projects CMS & Technical Dossier Editor
          </h1>
          <p className="text-xs text-gray-400 mt-1">Full control over project title, slug, dossier problem/solution/architecture fields, and live status.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={addProject}
            className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create Project</span>
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="py-2.5 px-5 rounded-xl bg-[#D96B43] hover:bg-[#C55A32] text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#D96B43]/20 transition-all cursor-pointer disabled:opacity-50"
          >
            {savedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
            <span>{saving ? "Saving..." : savedSuccess ? "Saved!" : "Save Changes"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project Selector Left Column */}
        <div className="lg:col-span-3 space-y-2 bg-[#0f1117] p-4 rounded-2xl border border-white/10 max-h-[750px] overflow-y-auto">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Projects ({projects.length})</div>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${
                selectedId === p.id
                  ? "bg-[#D96B43]/20 border-[#D96B43] text-white font-bold"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              <div className="truncate">
                <div className="truncate font-semibold">{p.title}</div>
                <div className="text-[10px] text-gray-400 mt-0.5 capitalize">{p.category}</div>
              </div>
              {p.featured && <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />}
            </button>
          ))}
        </div>

        {/* Project Editor Center Column */}
        {activeProject ? (
          <div className="lg:col-span-5 space-y-4 bg-[#0f1117] p-6 rounded-2xl border border-white/10 max-h-[750px] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-bold text-white text-sm font-editorial">Edit: {activeProject.title}</h3>
              <button
                onClick={() => removeProject(activeProject.id)}
                className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-medium cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-bold text-[#E08E53] uppercase mb-1">Project Title</label>
                <input
                  type="text"
                  value={activeProject.title}
                  onChange={(e) => updateActiveProject("title", e.target.value)}
                  className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#D96B43]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-[#E08E53] uppercase mb-1">Slug (URL)</label>
                  <input
                    type="text"
                    value={activeProject.slug}
                    onChange={(e) => updateActiveProject("slug", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#D96B43]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#E08E53] uppercase mb-1">Category</label>
                  <input
                    type="text"
                    value={activeProject.category}
                    onChange={(e) => updateActiveProject("category", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#D96B43]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#E08E53] uppercase mb-1">Overview</label>
                <textarea
                  rows={2}
                  value={activeProject.overview || ""}
                  onChange={(e) => updateActiveProject("overview", e.target.value)}
                  className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white resize-none focus:outline-none focus:border-[#D96B43]"
                />
              </div>

              {/* Technical Dossier Fields: Problem, Solution, Architecture */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-[10px] font-bold text-[#D96B43] uppercase tracking-wider block">
                  Technical Dossier Fields
                </span>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-300 uppercase mb-1 flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-[#D96B43]" />
                    Problem Statement
                  </label>
                  <textarea
                    rows={2}
                    value={activeProject.problem || ""}
                    onChange={(e) => updateActiveProject("problem", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white resize-none focus:outline-none focus:border-[#D96B43]"
                    placeholder="Describe the challenge or problem solved..."
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-300 uppercase mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Engineering Solution
                  </label>
                  <textarea
                    rows={2}
                    value={activeProject.solution || ""}
                    onChange={(e) => updateActiveProject("solution", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white resize-none focus:outline-none focus:border-[#D96B43]"
                    placeholder="Describe the technical solution..."
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-300 uppercase mb-1 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#3B5998]" />
                    System Architecture
                  </label>
                  <textarea
                    rows={2}
                    value={activeProject.architecture || ""}
                    onChange={(e) => updateActiveProject("architecture", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white resize-none focus:outline-none focus:border-[#D96B43]"
                    placeholder="Describe system architecture and tech patterns..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-[#E08E53] uppercase mb-1">GitHub Link</label>
                  <input
                    type="text"
                    value={activeProject.github || ""}
                    onChange={(e) => updateActiveProject("github", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#D96B43]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#E08E53] uppercase mb-1">Live Demo URL</label>
                  <input
                    type="text"
                    value={activeProject.live || ""}
                    onChange={(e) => updateActiveProject("live", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#D96B43]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <label className="flex items-center gap-2 text-xs text-gray-300">
                  <input
                    type="checkbox"
                    checked={activeProject.featured}
                    onChange={(e) => updateActiveProject("featured", e.target.checked)}
                    className="accent-[#D96B43] rounded"
                  />
                  Featured Project
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Status:</span>
                  <select
                    value={activeProject.status}
                    onChange={(e) => updateActiveProject("status", e.target.value as any)}
                    className="bg-[#161922] text-xs text-white rounded px-2 py-1 border border-white/10"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-5 bg-[#0f1117] p-8 rounded-2xl border border-white/10 flex items-center justify-center text-gray-500 text-xs">
            Select a project to edit
          </div>
        )}

        {/* Live Preview Right Column */}
        <div className="lg:col-span-4">
          <LivePreviewPane title={activeProject?.title || "Project Card"}>
            {activeProject ? (
              <div className="p-4 space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D96B43] bg-[#D96B43]/10 px-2 py-0.5 rounded">
                    {activeProject.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {activeProject.github && <ExternalLink className="w-3.5 h-3.5 text-gray-400" />}
                  </div>
                </div>
                <h3 className="font-bold text-white text-base">{activeProject.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{activeProject.overview}</p>
                
                {activeProject.problem && (
                  <div className="p-2.5 rounded bg-white/5 text-[11px] text-gray-300">
                    <strong className="text-[#D96B43]">Problem:</strong> {activeProject.problem}
                  </div>
                )}

                <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                  {activeProject.tags && activeProject.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </LivePreviewPane>
        </div>
      </div>
    </div>
  );
}
