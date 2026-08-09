"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { SeoSettings } from "@/lib/types/portfolio";
import { Search, Save, CheckCircle, Globe, Share2 } from "lucide-react";

export default function SeoPanelPage() {
  const [seo, setSeo] = useState<SeoSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getSeo().then(setSeo);
  }, []);

  const handleSave = async () => {
    if (!seo) return;
    setSaving(true);
    await portfolioService.updateSeo(seo);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  if (!seo) return null;

  return (
    <div className="space-y-6 pb-12 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Search className="w-6 h-6 text-indigo-400" />
            SEO Command Panel & Meta Management
          </h1>
          <p className="text-sm text-gray-400 mt-1">Configure search engine indexing, Open Graph social cards, and JSON-LD schema</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
        >
          {savedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
          <span>{saving ? "Saving..." : savedSuccess ? "Saved!" : "Save SEO Settings"}</span>
        </button>
      </div>

      <div className="space-y-6 bg-[#0f1117] p-6 rounded-2xl border border-white/10">
        <div>
          <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Meta Title</label>
          <input
            type="text"
            value={seo.siteTitle}
            onChange={(e) => setSeo({ ...seo, siteTitle: e.target.value })}
            className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Meta Description</label>
          <textarea
            rows={3}
            value={seo.siteDescription}
            onChange={(e) => setSeo({ ...seo, siteDescription: e.target.value })}
            className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Open Graph Image URL</label>
            <input
              type="text"
              value={seo.ogImageUrl}
              onChange={(e) => setSeo({ ...seo, ogImageUrl: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Twitter Handle</label>
            <input
              type="text"
              value={seo.twitterHandle}
              onChange={(e) => setSeo({ ...seo, twitterHandle: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Canonical Domain URL</label>
          <input
            type="text"
            value={seo.canonicalUrl}
            onChange={(e) => setSeo({ ...seo, canonicalUrl: e.target.value })}
            className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white"
          />
        </div>

        {/* Live Search Result Preview */}
        <div className="p-4 rounded-xl bg-[#161922] border border-white/10 space-y-1">
          <div className="text-xs text-emerald-400 font-medium truncate flex items-center gap-1">
            <Globe className="w-3 h-3" /> {seo.canonicalUrl}
          </div>
          <h4 className="text-base font-bold text-blue-400 hover:underline cursor-pointer truncate">
            {seo.siteTitle}
          </h4>
          <p className="text-xs text-gray-300 line-clamp-2">{seo.siteDescription}</p>
        </div>
      </div>
    </div>
  );
}
