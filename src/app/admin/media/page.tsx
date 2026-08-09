"use client";

import { useState } from "react";
import { Image as ImageIcon, Upload, Trash2, FileText, HardDrive, Crop, CheckCircle } from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  url: string;
  size: string;
  type: "image" | "pdf" | "video";
  uploadedAt: string;
}

export default function MediaManagerPage() {
  const [files, setFiles] = useState<MediaItem[]>([
    { id: "1", name: "resume.pdf", url: "/resume.pdf", size: "450 KB", type: "pdf", uploadedAt: "2026-08-01" },
    { id: "2", name: "avatar.jpg", url: "/avatar.jpg", size: "1.2 MB", type: "image", uploadedAt: "2026-08-02" },
    { id: "3", name: "crypto-calc-demo.png", url: "/projects/crypto-calc.jpg", size: "850 KB", type: "image", uploadedAt: "2026-08-03" },
    { id: "4", name: "dao-governance-preview.mp4", url: "/projects/dao-demo.mp4", size: "12.4 MB", type: "video", uploadedAt: "2026-08-04" },
  ]);

  const [notification, setNotification] = useState("");

  const handleUploadSim = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const uploaded = e.target.files[0];
    const newItem: MediaItem = {
      id: `media-${Date.now()}`,
      name: uploaded.name,
      url: URL.createObjectURL(uploaded),
      size: `${(uploaded.size / (1024 * 1024)).toFixed(1)} MB`,
      type: uploaded.type.includes("image") ? "image" : uploaded.type.includes("pdf") ? "pdf" : "video",
      uploadedAt: new Date().toISOString().substring(0, 10),
    };
    setFiles([newItem, ...files]);
    setNotification(`Successfully uploaded ${uploaded.name}`);
    setTimeout(() => setNotification(""), 3000);
  };

  const removeFile = (id: string) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-indigo-400" />
            Media & File Asset Manager
          </h1>
          <p className="text-sm text-gray-400 mt-1">Upload resumes, certificates, project thumbnails, and videos to Supabase Storage</p>
        </div>
        <label className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer transition-all">
          <Upload className="w-4 h-4" />
          <span>Upload Asset</span>
          <input type="file" onChange={handleUploadSim} className="hidden" />
        </label>
      </div>

      {notification && (
        <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-400 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* Storage Usage Widget */}
      <div className="p-5 rounded-2xl bg-[#0f1117] border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <HardDrive className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-gray-400">Supabase Bucket Usage</div>
            <div className="text-sm font-bold text-white">14.9 MB / 1 GB Free Tier</div>
          </div>
        </div>
        <div className="w-32 bg-white/10 rounded-full h-2 overflow-hidden hidden sm:block">
          <div className="bg-indigo-500 h-full rounded-full w-[1.5%]" />
        </div>
      </div>

      {/* File Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {files.map((file) => (
          <div key={file.id} className="p-4 bg-[#0f1117] border border-white/10 rounded-2xl space-y-3 group hover:border-indigo-500/40 transition-all">
            <div className="h-32 bg-[#161922] rounded-xl flex items-center justify-center overflow-hidden border border-white/5 relative">
              {file.type === "image" ? (
                <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
              ) : (
                <FileText className="w-10 h-10 text-indigo-400" />
              )}
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="truncate pr-2">
                <div className="font-bold text-white truncate">{file.name}</div>
                <div className="text-[10px] text-gray-400">{file.size} • {file.uploadedAt}</div>
              </div>
              <button onClick={() => removeFile(file.id)} className="p-1.5 text-gray-500 hover:text-red-400">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
