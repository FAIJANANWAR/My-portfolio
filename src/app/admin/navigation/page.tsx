"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { NavigationLink, FooterConfig } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { Navigation, Save, Plus, Trash2, CheckCircle, Eye, EyeOff } from "lucide-react";

export default function NavigationCmsPage() {
  const [navLinks, setNavLinks] = useState<NavigationLink[]>([]);
  const [footer, setFooter] = useState<FooterConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getNavigation().then(setNavLinks);
    portfolioService.getFooter().then(setFooter);
  }, []);

  const handleSave = async () => {
    if (!footer) return;
    setSaving(true);
    await portfolioService.saveNavigation(navLinks);
    await portfolioService.updateFooter(footer);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const addLink = () => {
    const newLink: NavigationLink = {
      id: `nav-${Date.now()}`,
      label: "New Page",
      href: "#",
      order: navLinks.length + 1,
      isVisible: true,
    };
    setNavLinks([...navLinks, newLink]);
  };

  const toggleVisibility = (id: string) => {
    setNavLinks(navLinks.map((n) => (n.id === id ? { ...n, isVisible: !n.isVisible } : n)));
  };

  const removeLink = (id: string) => setNavLinks(navLinks.filter((n) => n.id !== id));

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Navigation className="w-6 h-6 text-indigo-400" />
            Navigation & Footer CMS
          </h1>
          <p className="text-sm text-gray-400 mt-1">Reorder navbar links, toggle visibility, and update footer branding</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
        >
          {savedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
          <span>{saving ? "Saving..." : savedSuccess ? "Saved!" : "Save Navigation"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-6 bg-[#0f1117] border border-white/10 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-sm">Navbar Links</h3>
              <button onClick={addLink} className="text-xs text-indigo-400 flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" /> Add Link
              </button>
            </div>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.id} className="p-3 bg-[#161922] border border-white/10 rounded-xl flex items-center justify-between gap-3">
                  <input
                    type="text"
                    value={link.label}
                    onChange={(e) =>
                      setNavLinks(navLinks.map((n) => (n.id === link.id ? { ...n, label: e.target.value } : n)))
                    }
                    className="bg-transparent font-semibold text-xs text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={link.href}
                    onChange={(e) =>
                      setNavLinks(navLinks.map((n) => (n.id === link.id ? { ...n, href: e.target.value } : n)))
                    }
                    className="bg-white/5 text-[11px] text-gray-300 rounded px-2 py-1 border border-white/10"
                  />
                  <button onClick={() => toggleVisibility(link.id)} className="p-1 text-gray-400 hover:text-white">
                    {link.isVisible ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-gray-600" />}
                  </button>
                  <button onClick={() => removeLink(link.id)} className="p-1 text-gray-400 hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {footer && (
            <div className="p-6 bg-[#0f1117] border border-white/10 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-sm border-b border-white/10 pb-2">Footer Settings</h3>
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase mb-1">Copyright Text</label>
                <input
                  type="text"
                  value={footer.copyrightText}
                  onChange={(e) => setFooter({ ...footer, copyrightText: e.target.value })}
                  className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                />
              </div>
            </div>
          )}
        </div>

        <LivePreviewPane title="Navbar Preview">
          <div className="p-4 bg-[#0f1117] rounded-xl flex items-center justify-between border border-white/10">
            <span className="font-bold text-white text-sm">FA I J A N</span>
            <div className="flex items-center gap-4">
              {navLinks
                .filter((n) => n.isVisible)
                .map((n) => (
                  <span key={n.id} className="text-xs text-gray-300 hover:text-indigo-400">
                    {n.label}
                  </span>
                ))}
            </div>
          </div>
        </LivePreviewPane>
      </div>
    </div>
  );
}
