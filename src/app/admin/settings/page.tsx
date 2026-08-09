"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { SiteSettings } from "@/lib/types/portfolio";
import { Settings, Save, CheckCircle, Moon, Sun, Sparkles, Sliders } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getSettings().then(setSettings);
  }, []);

  const handleSave = async () => {
    if (!settings) return;
    setSaving(true);
    await portfolioService.updateSettings(settings);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  if (!settings) return null;

  return (
    <div className="space-y-6 pb-12 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Settings className="w-6 h-6 text-indigo-400" />
            Global Site Settings & Aesthetics
          </h1>
          <p className="text-sm text-gray-400 mt-1">Configure theme mode, accent colors, custom cursor, and font family</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
        >
          {savedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
          <span>{saving ? "Saving..." : savedSuccess ? "Saved!" : "Save Settings"}</span>
        </button>
      </div>

      <div className="p-6 bg-[#0f1117] border border-white/10 rounded-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Theme Mode</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSettings({ ...settings, themeMode: "dark" })}
                className={`flex-1 py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  settings.themeMode === "dark"
                    ? "bg-indigo-600/20 border-indigo-500 text-indigo-300"
                    : "bg-white/5 border-white/10 text-gray-400"
                }`}
              >
                <Moon className="w-4 h-4" /> Dark Mode
              </button>
              <button
                onClick={() => setSettings({ ...settings, themeMode: "light" })}
                className={`flex-1 py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  settings.themeMode === "light"
                    ? "bg-indigo-600/20 border-indigo-500 text-indigo-300"
                    : "bg-white/5 border-white/10 text-gray-400"
                }`}
              >
                <Sun className="w-4 h-4" /> Light Mode
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Accent Color</label>
            <div className="flex items-center gap-3">
              {["#6366f1", "#a855f7", "#ec4899", "#3b82f6", "#10b981", "#f59e0b"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSettings({ ...settings, accentColor: color })}
                  className={`w-9 h-9 rounded-full transition-transform ${
                    settings.accentColor === color ? "scale-125 ring-2 ring-white" : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-white text-sm">Interactive Cursor Spotlight</div>
              <div className="text-xs text-gray-400">Enable radial spotlight effect following mouse pointer</div>
            </div>
            <input
              type="checkbox"
              checked={settings.customCursor}
              onChange={(e) => setSettings({ ...settings, customCursor: e.target.checked })}
              className="accent-indigo-500 w-5 h-5 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-white text-sm">Smooth Motion Animations</div>
              <div className="text-xs text-gray-400">Enable Framer Motion page entrance transitions</div>
            </div>
            <input
              type="checkbox"
              checked={settings.animationsEnabled}
              onChange={(e) => setSettings({ ...settings, animationsEnabled: e.target.checked })}
              className="accent-indigo-500 w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
