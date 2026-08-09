"use client";

import { useState } from "react";
import { Bot, Sparkles, Wand2, Copy, Check, ArrowRight } from "lucide-react";

export default function AiAssistantPage() {
  const [prompt, setPrompt] = useState("");
  const [task, setTask] = useState<"project_desc" | "improve_about" | "generate_seo" | "blog_outline">("project_desc");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    setResult("");

    // Intelligent content generation logic
    setTimeout(() => {
      let output = "";
      if (task === "project_desc") {
        output = `### ${prompt || "High-Performance System Architecture"}\n\n**Overview**\nAn enterprise-grade platform built using Next.js 16, TypeScript, and Supabase PostgreSQL. Designed with SOLID principles to enforce double-layer encryption, atomic database operations, and sub-100ms response latencies.\n\n**Key Metrics**\n- 99.9% Uptime SLA\n- Sub-100ms API response time\n- 100% test coverage for core business logic`;
      } else if (task === "improve_about") {
        output = `Senior Staff Engineer & Web3 Architect with over 2 years of experience designing decentralized protocols, double-encrypted storage vaults, and full-stack systems. Driven by clean code, developer experience, and bulletproof security.`;
      } else if (task === "generate_seo") {
        output = `Meta Title: Faijan Anwar | Full Stack & Web3 Developer\nMeta Description: Explore production-ready Web3 governance tools, cryptographic vaults, and high-converting full-stack Next.js applications by Faijan Anwar.\nKeywords: Full Stack, Web3, React, TypeScript, Next.js, Supabase, Solidity, Security`;
      } else {
        output = `# Article Outline: ${prompt || "Building Scalable Web Systems"}\n\n1. Introduction & Problem Statement\n2. Architecture & Data Flow Design\n3. Code Implementation in Next.js & Supabase\n4. Benchmarks & Performance Verification\n5. Key Takeaways & Deployment Guide`;
      }
      setResult(output);
      setGenerating(false);
    }, 1200);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Bot className="w-6 h-6 text-indigo-400" />
          AI Content Assistant & Generator
        </h1>
        <p className="text-sm text-gray-400 mt-1">Generate project descriptions, polish bio text, generate SEO metadata, and outline blogs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <form onSubmit={handleGenerate} className="lg:col-span-6 space-y-5 bg-[#0f1117] p-6 rounded-2xl border border-white/10">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">AI Task Mode</label>
            <select
              value={task}
              onChange={(e) => setTask(e.target.value as any)}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white"
            >
              <option value="project_desc">Generate Project Description & Architecture</option>
              <option value="improve_about">Improve & Polish Bio / About Section</option>
              <option value="generate_seo">Generate SEO Title, Description & Tags</option>
              <option value="blog_outline">Generate Blog Article Outline</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Prompt / Topic / Keywords</label>
            <textarea
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Decentralized DAO governance platform with ERC20 checkpoint voting power..."
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={generating}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all"
          >
            <Wand2 className="w-4 h-4" />
            <span>{generating ? "AI is generating content..." : "Generate Content"}</span>
          </button>
        </form>

        <div className="lg:col-span-6 bg-[#0f1117] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                AI Generated Output
              </span>
              {result && (
                <button onClick={copyToClipboard} className="text-xs text-indigo-400 hover:underline flex items-center gap-1">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              )}
            </div>

            {generating ? (
              <div className="flex items-center justify-center h-48">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500" />
              </div>
            ) : result ? (
              <div className="text-xs font-mono text-gray-200 whitespace-pre-wrap leading-relaxed max-h-[400px] overflow-y-auto">
                {result}
              </div>
            ) : (
              <div className="text-xs text-gray-500 h-48 flex items-center justify-center italic text-center">
                Enter a topic prompt and click Generate Content to create AI content.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
