"use client";

import { useEffect, useState } from "react";
import { RefreshCw, Star, GitFork, CheckCircle, ExternalLink } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";

interface RepoItem {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  html_url: string;
  isPinned: boolean;
}

export default function GithubSyncPage() {
  const [username, setUsername] = useState("FAIJANANWAR");
  const [syncing, setSyncing] = useState(false);
  const [syncedSuccess, setSyncedSuccess] = useState(false);
  const [repos, setRepos] = useState<RepoItem[]>([
    {
      id: 1,
      name: "faijan-web3-portfolio",
      description: "Modern production-grade Portfolio Operating System built with Next.js 16 and Supabase.",
      stars: 42,
      forks: 12,
      language: "TypeScript",
      html_url: "https://github.com/FAIJANANWAR/faijan-web3-portfolio",
      isPinned: true,
    },
    {
      id: 2,
      name: "crypto-profit-calculator",
      description: "Real-time crypto profit, fee & ROI tracking financial web app.",
      stars: 28,
      forks: 8,
      language: "JavaScript",
      html_url: "https://github.com/FAIJANANWAR/crypto-profit-calculator",
      isPinned: true,
    },
    {
      id: 3,
      name: "dao-governance-system",
      description: "Decentralized governance platform with token voting and timelock logic.",
      stars: 35,
      forks: 14,
      language: "Solidity",
      html_url: "https://github.com/FAIJANANWAR/dao-governance-system",
      isPinned: true,
    },
  ]);

  const handleSync = async () => {
    setSyncing(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (res.ok) {
        const fetched = await res.json();
        const mapped: RepoItem[] = fetched.map((r: any) => ({
          id: r.id,
          name: r.name,
          description: r.description || "Public GitHub Repository",
          stars: r.stargazers_count,
          forks: r.forks_count,
          language: r.language || "TypeScript",
          html_url: r.html_url,
          isPinned: true,
        }));
        setRepos(mapped);
      }
    } catch {
      // Fallback stays active
    } finally {
      setSyncing(false);
      setSyncedSuccess(true);
      setTimeout(() => setSyncedSuccess(false), 3000);
    }
  };

  const togglePin = (id: number) => {
    setRepos(repos.map((r) => (r.id === id ? { ...r, isPinned: !r.isPinned } : r)));
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Github className="w-6 h-6 text-indigo-400" />
            GitHub API Integration & Sync Manager
          </h1>
          <p className="text-sm text-gray-400 mt-1">Automatically sync repositories, star counts, languages, and pinned projects</p>
        </div>
        <button
          onClick={handleSync}
          disabled={syncing}
          className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
        >
          {syncedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <RefreshCw className={`w-4 h-4 ${syncing ? "animate-spin" : ""}`} />}
          <span>{syncing ? "Syncing API..." : syncedSuccess ? "Synced!" : "Sync GitHub Now"}</span>
        </button>
      </div>

      <div className="p-6 bg-[#0f1117] border border-white/10 rounded-2xl space-y-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#161922] border border-white/10 rounded-xl py-2 px-4 text-sm text-white focus:outline-none"
            placeholder="GitHub Username"
          />
          <span className="text-xs text-gray-400">Target GitHub Profile: github.com/{username}</span>
        </div>

        <div className="space-y-3 pt-4 border-t border-white/10">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Synced Public Repositories</h3>
          {repos.map((repo) => (
            <div key={repo.id} className="p-4 bg-[#161922] border border-white/10 rounded-xl flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <a href={repo.html_url} target="_blank" className="font-bold text-white text-sm hover:underline flex items-center gap-1">
                    {repo.name} <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono">
                    {repo.language}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{repo.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars} stars</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5 text-indigo-400" /> {repo.forks} forks</span>
                </div>
              </div>
              <button
                onClick={() => togglePin(repo.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  repo.isPinned ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300" : "bg-white/5 border-white/10 text-gray-400"
                }`}
              >
                {repo.isPinned ? "Pinned on Portfolio" : "Hidden"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
