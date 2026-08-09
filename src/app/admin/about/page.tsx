"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { AboutData } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { Save, User, CheckCircle, Plus, Trash2 } from "lucide-react";

export default function AboutCmsPage() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getAbout().then(setAbout);
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!about) return;
    setSaving(true);
    await portfolioService.updateAbout(about);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const addHighlight = () => {
    if (!about) return;
    setAbout({ ...about, highlights: [...about.highlights, "New Key Highlight"] });
  };

  const removeHighlight = (index: number) => {
    if (!about) return;
    setAbout({ ...about, highlights: about.highlights.filter((_, idx) => idx !== index) });
  };

  if (!about) return null;

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <User className="w-6 h-6 text-indigo-400" />
            About Section CMS
          </h1>
          <p className="text-sm text-gray-400 mt-1">Manage bio, career milestones, timeline, and key technical highlights</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form onSubmit={handleSave} className="space-y-5 bg-[#0f1117] p-6 rounded-2xl border border-white/10">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Heading
            </label>
            <input
              type="text"
              value={about.heading}
              onChange={(e) => setAbout({ ...about, heading: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Subheading
            </label>
            <input
              type="text"
              value={about.subheading}
              onChange={(e) => setAbout({ ...about, subheading: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Full Biography
            </label>
            <textarea
              rows={5}
              value={about.description}
              onChange={(e) => setAbout({ ...about, description: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Key Highlights
              </label>
              <button
                type="button"
                onClick={addHighlight}
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Highlight
              </button>
            </div>
            <div className="space-y-2">
              {about.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const copy = [...about.highlights];
                      copy[idx] = e.target.value;
                      setAbout({ ...about, highlights: copy });
                    }}
                    className="flex-1 bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeHighlight(idx)}
                    className="p-2 text-gray-500 hover:text-red-400 rounded-lg hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>

        <LivePreviewPane title="About Section">
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">{about.heading}</h3>
            <p className="text-xs text-indigo-400 font-semibold">{about.subheading}</p>
            <p className="text-xs text-gray-300 leading-relaxed">{about.description}</p>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Highlights</h4>
              {about.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </LivePreviewPane>
      </div>
    </div>
  );
}
