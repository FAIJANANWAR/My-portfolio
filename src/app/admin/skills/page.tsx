"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { SkillItem } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { Wrench, Save, Plus, Trash2, ArrowUp, ArrowDown, CheckCircle } from "lucide-react";

export default function SkillsCmsPage() {
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [newSkillName, setNewSkillName] = useState("");
  const [newCategory, setNewCategory] = useState<SkillItem["category"]>("Frontend");

  useEffect(() => {
    portfolioService.getSkills().then(setSkills);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await portfolioService.saveSkills(skills);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    const newSkill: SkillItem = {
      id: `skill-${Date.now()}`,
      name: newSkillName.trim(),
      category: newCategory,
      level: 80,
      experienceYears: "2+ yrs",
      iconName: "Code",
      color: "#6366f1",
      order: skills.length + 1,
    };

    setSkills([...skills, newSkill]);
    setNewSkillName("");
  };

  const moveSkill = (index: number, direction: "up" | "down") => {
    const updated = [...skills];
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= updated.length) return;

    const temp = updated[index];
    updated[index] = updated[targetIdx];
    updated[targetIdx] = temp;

    // re-assign order property
    updated.forEach((s, idx) => (s.order = idx + 1));
    setSkills(updated);
  };

  const removeSkill = (id: string) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  const updateSkill = (id: string, key: keyof SkillItem, value: any) => {
    setSkills(skills.map((s) => (s.id === id ? { ...s, [key]: value } : s)));
  };

  const categories = ["Frontend", "Backend", "Blockchain", "Database", "Cloud", "DevOps", "Tools", "Languages"];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Wrench className="w-6 h-6 text-indigo-400" />
            Skills CMS & Drag-and-Drop Manager
          </h1>
          <p className="text-sm text-gray-400 mt-1">Manage technical proficiencies, proficiency levels, and custom categories</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
        >
          {savedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
          <span>{saving ? "Saving..." : savedSuccess ? "Saved!" : "Save Changes"}</span>
        </button>
      </div>

      {/* Add New Skill Bar */}
      <form onSubmit={handleAddSkill} className="p-4 bg-[#0f1117] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          placeholder="New Skill Name (e.g. Docker, Solidity, GraphQL)"
          value={newSkillName}
          onChange={(e) => setNewSkillName(e.target.value)}
          className="flex-1 w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value as any)}
          className="w-full sm:w-48 bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center justify-center gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Skill</span>
        </button>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reorderable List */}
        <div className="space-y-3 bg-[#0f1117] p-6 rounded-2xl border border-white/10 max-h-[700px] overflow-y-auto">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Reorder & Edit Skills ({skills.length})
          </h3>
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="p-4 bg-[#161922] border border-white/10 rounded-xl flex items-center justify-between gap-4 group hover:border-indigo-500/40 transition-all"
            >
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveSkill(index, "up")}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-indigo-400 disabled:opacity-30"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => moveSkill(index, "down")}
                    disabled={index === skills.length - 1}
                    className="p-1 text-gray-500 hover:text-indigo-400 disabled:opacity-30"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-1">
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                    className="bg-transparent font-bold text-sm text-white focus:outline-none focus:underline"
                  />
                  <div className="flex items-center gap-2">
                    <select
                      value={skill.category}
                      onChange={(e) => updateSkill(skill.id, "category", e.target.value)}
                      className="bg-white/5 text-[11px] text-indigo-300 rounded px-2 py-0.5 border border-white/10"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c} className="bg-[#161922] text-white">{c}</option>
                      ))}
                    </select>
                    <span className="text-[11px] text-gray-400">{skill.experienceYears}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-24">
                  <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    onChange={(e) => updateSkill(skill.id, "level", parseInt(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <button
                  onClick={() => removeSkill(skill.id)}
                  className="p-2 text-gray-500 hover:text-red-400 rounded-lg hover:bg-red-500/10"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Preview */}
        <LivePreviewPane title="Skills Section">
          <div className="p-4 space-y-6">
            {categories.map((cat) => {
              const categorySkills = skills.filter((s) => s.category === cat);
              if (categorySkills.length === 0) return null;
              return (
                <div key={cat} className="space-y-2">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{cat}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categorySkills.map((s) => (
                      <div key={s.id} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                        <div className="flex justify-between text-white font-medium mb-1">
                          <span>{s.name}</span>
                          <span className="text-gray-400 text-[10px]">{s.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${s.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </LivePreviewPane>
      </div>
    </div>
  );
}
