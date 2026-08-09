"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { ExperienceItem } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { Briefcase, Save, Plus, Trash2, CheckCircle } from "lucide-react";

export default function ExperienceCmsPage() {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getExperiences().then(setExperiences);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await portfolioService.saveExperiences(experiences);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const addExperience = () => {
    const newExp: ExperienceItem = {
      id: `exp-${Date.now()}`,
      company: "New Tech Company",
      position: "Senior Full Stack Engineer",
      duration: "2025 - Present",
      startDate: "2025-01-01",
      isCurrentJob: true,
      description: "Engineered scalable web services and cloud infrastructure.",
      techStack: ["React", "TypeScript", "Node.js"],
      achievements: ["Improved performance by 50%"],
      order: experiences.length + 1,
    };
    setExperiences([newExp, ...experiences]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((e) => e.id !== id));
  };

  const updateExperience = (id: string, key: keyof ExperienceItem, value: any) => {
    setExperiences(experiences.map((e) => (e.id === id ? { ...e, [key]: value } : e)));
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-400" />
            Experience CMS
          </h1>
          <p className="text-sm text-gray-400 mt-1">Manage professional work history, achievements, and tech stack</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={addExperience}
            className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Experience</span>
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
          >
            {savedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
            <span>{saving ? "Saving..." : savedSuccess ? "Saved!" : "Save Changes"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6 max-h-[750px] overflow-y-auto pr-2">
          {experiences.map((exp) => (
            <div key={exp.id} className="p-6 bg-[#0f1117] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                  className="bg-transparent font-bold text-lg text-white focus:outline-none focus:underline"
                  placeholder="Company Name"
                />
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="p-2 text-gray-500 hover:text-red-400 rounded-lg hover:bg-red-500/10"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase mb-1">Position</label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase mb-1">Duration</label>
                  <input
                    type="text"
                    value={exp.duration}
                    onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase mb-1">Description</label>
                <textarea
                  rows={2}
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                  className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white resize-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={exp.isCurrentJob}
                  onChange={(e) => updateExperience(exp.id, "isCurrentJob", e.target.checked)}
                  id={`current-${exp.id}`}
                  className="accent-indigo-500 rounded"
                />
                <label htmlFor={`current-${exp.id}`} className="text-xs text-gray-300">
                  Current Job Toggle
                </label>
              </div>
            </div>
          ))}
        </div>

        <LivePreviewPane title="Experience Timeline">
          <div className="p-6 space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-6 border-l-2 border-indigo-500/40 space-y-1">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#0a0b0e]" />
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">{exp.position}</h4>
                  <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                    {exp.duration}
                  </span>
                </div>
                <div className="text-xs text-gray-300 font-medium">{exp.company}</div>
                <p className="text-xs text-gray-400 leading-relaxed pt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        </LivePreviewPane>
      </div>
    </div>
  );
}
