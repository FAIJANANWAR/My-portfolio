"use client";

import { Eye, ExternalLink } from "lucide-react";

interface LivePreviewPaneProps {
  title: string;
  children: React.ReactNode;
}

export default function LivePreviewPane({ title, children }: LivePreviewPaneProps) {
  return (
    <div className="rounded-2xl bg-[#0b0d13] border border-indigo-500/30 overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Top Window Bar */}
      <div className="bg-[#12151f] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            Live Preview: {title}
          </span>
        </div>
        <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
          Instant Sync Active
        </div>
      </div>

      {/* Preview Viewport Container */}
      <div className="p-4 overflow-y-auto max-h-[700px] flex-1 bg-[var(--color-matte-black,#0a0b0e)] text-white">
        {children}
      </div>
    </div>
  );
}
