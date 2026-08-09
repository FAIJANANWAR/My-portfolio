"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { HeroData } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { Save, Sparkles, CheckCircle } from "lucide-react";

export default function HeroCmsPage() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getHero().then(setHero);
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hero) return;
    setSaving(true);
    await portfolioService.updateHero(hero);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  if (!hero) return null;

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-400" />
            Hero Section CMS
          </h1>
          <p className="text-sm text-gray-400 mt-1">Manage landing page headlines, resume, CTAs, and availability</p>
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

      {/* Grid: Editor Left, Live Preview Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor Form */}
        <form onSubmit={handleSave} className="space-y-5 bg-[#0f1117] p-6 rounded-2xl border border-white/10">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={hero.name}
              onChange={(e) => setHero({ ...hero, name: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Job Title
            </label>
            <input
              type="text"
              value={hero.title}
              onChange={(e) => setHero({ ...hero, title: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Subtitle
            </label>
            <input
              type="text"
              value={hero.subtitle}
              onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Description
            </label>
            <textarea
              rows={3}
              value={hero.description}
              onChange={(e) => setHero({ ...hero, description: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Primary CTA Text
              </label>
              <input
                type="text"
                value={hero.primaryCtaText}
                onChange={(e) => setHero({ ...hero, primaryCtaText: e.target.value })}
                className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Primary CTA URL
              </label>
              <input
                type="text"
                value={hero.primaryCtaUrl}
                onChange={(e) => setHero({ ...hero, primaryCtaUrl: e.target.value })}
                className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Availability Status Badge
            </label>
            <input
              type="text"
              value={hero.availabilityStatus}
              onChange={(e) => setHero({ ...hero, availabilityStatus: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Resume URL / PDF Link
            </label>
            <input
              type="text"
              value={hero.resumeUrl}
              onChange={(e) => setHero({ ...hero, resumeUrl: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </form>

        {/* Live Preview Pane */}
        <LivePreviewPane title="Hero Section">
          <div className="p-6 text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {hero.availabilityStatus}
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">{hero.name}</h2>
            <h3 className="text-lg font-semibold text-indigo-400">{hero.title}</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto">{hero.description}</p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a href={hero.primaryCtaUrl} className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-xs">
                {hero.primaryCtaText}
              </a>
              <a href={hero.resumeUrl} className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-medium text-xs border border-white/10">
                {hero.secondaryCtaText}
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/10">
              {hero.stats.map((s, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-white/5">
                  <div className="text-lg font-bold text-white">{s.value}</div>
                  <div className="text-[10px] text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </LivePreviewPane>
      </div>
    </div>
  );
}
