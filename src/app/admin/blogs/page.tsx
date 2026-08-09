"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { BlogPostItem } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { BookOpen, Save, Plus, Trash2, CheckCircle } from "lucide-react";

export default function BlogsCmsPage() {
  const [blogs, setBlogs] = useState<BlogPostItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getBlogs().then((list) => {
      setBlogs(list);
      if (list.length > 0) setSelectedId(list[0].id);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await portfolioService.saveBlogs(blogs);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const addBlog = () => {
    const newBlog: BlogPostItem = {
      id: `blog-${Date.now()}`,
      slug: `new-article-${Date.now()}`,
      title: "Optimizing PostgreSQL Queries in Next.js",
      summary: "Best practices for indexing, connection pooling, and Server Actions.",
      content: "# Optimizing PostgreSQL Queries\n\nFast query performance is critical for production apps...",
      coverImage: "/blog/postgres.jpg",
      category: "Database",
      tags: ["PostgreSQL", "Next.js", "Performance"],
      readingTimeMinutes: 5,
      publishedAt: new Date().toISOString().substring(0, 10),
      status: "published",
      featured: true,
    };
    setBlogs([newBlog, ...blogs]);
    setSelectedId(newBlog.id);
  };

  const removeBlog = (id: string) => {
    const filtered = blogs.filter((b) => b.id !== id);
    setBlogs(filtered);
    if (selectedId === id) setSelectedId(filtered[0]?.id || null);
  };

  const activeBlog = blogs.find((b) => b.id === selectedId);

  const updateActiveBlog = (key: keyof BlogPostItem, value: any) => {
    if (!selectedId) return;
    setBlogs(blogs.map((b) => (b.id === selectedId ? { ...b, [key]: value } : b)));
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            Blogs & Article CMS Platform
          </h1>
          <p className="text-sm text-gray-400 mt-1">Create, edit, and publish technical articles with Markdown support</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={addBlog}
            className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Article</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Article Selector Column */}
        <div className="lg:col-span-3 space-y-2 bg-[#0f1117] p-4 rounded-2xl border border-white/10 max-h-[700px] overflow-y-auto">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Articles ({blogs.length})</div>
          {blogs.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedId(b.id)}
              className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                selectedId === b.id
                  ? "bg-indigo-600/20 border-indigo-500/40 text-white font-bold"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              <div className="truncate">
                <div className="truncate font-semibold">{b.title}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{b.readingTimeMinutes} min read</div>
              </div>
            </button>
          ))}
        </div>

        {/* Article Editor */}
        {activeBlog ? (
          <div className="lg:col-span-5 space-y-4 bg-[#0f1117] p-6 rounded-2xl border border-white/10 max-h-[700px] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-bold text-white text-sm">Article Settings & Content</h3>
              <button onClick={() => removeBlog(activeBlog.id)} className="text-xs text-red-400">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Title</label>
              <input
                type="text"
                value={activeBlog.title}
                onChange={(e) => updateActiveBlog("title", e.target.value)}
                className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Category</label>
                <input
                  type="text"
                  value={activeBlog.category}
                  onChange={(e) => updateActiveBlog("category", e.target.value)}
                  className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Reading Time (Mins)</label>
                <input
                  type="number"
                  value={activeBlog.readingTimeMinutes}
                  onChange={(e) => updateActiveBlog("readingTimeMinutes", parseInt(e.target.value))}
                  className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Summary</label>
              <textarea
                rows={2}
                value={activeBlog.summary}
                onChange={(e) => updateActiveBlog("summary", e.target.value)}
                className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Markdown Body</label>
              <textarea
                rows={8}
                value={activeBlog.content}
                onChange={(e) => updateActiveBlog("content", e.target.value)}
                className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-3 text-xs font-mono text-gray-200 resize-none"
              />
            </div>
          </div>
        ) : null}

        {/* Preview Column */}
        <div className="lg:col-span-4">
          <LivePreviewPane title={activeBlog?.title || "Article Preview"}>
            {activeBlog ? (
              <div className="p-4 space-y-3">
                <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                  {activeBlog.category} • {activeBlog.readingTimeMinutes} min read
                </span>
                <h3 className="font-bold text-white text-lg">{activeBlog.title}</h3>
                <p className="text-xs text-gray-300 italic">{activeBlog.summary}</p>
                <div className="pt-4 border-t border-white/10 text-xs text-gray-300 whitespace-pre-wrap font-mono">
                  {activeBlog.content}
                </div>
              </div>
            ) : null}
          </LivePreviewPane>
        </div>
      </div>
    </div>
  );
}
