"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { AnalyticsSummary } from "@/lib/types/portfolio";
import {
  Users,
  Download,
  FolderGit2,
  Award,
  Mail,
  BookOpen,
  MousePointer,
  Eye,
  TrendingUp,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const COLORS = ["#6366f1", "#a855f7", "#ec4899", "#3b82f6"];

export default function DashboardPage() {
  const [data, setData] = useState<AnalyticsSummary | null>(null);

  useEffect(() => {
    portfolioService.getAnalyticsSummary().then(setData);
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500" />
      </div>
    );
  }

  const statCards = [
    { label: "Total Visitors", value: data.totalVisitors.toLocaleString(), icon: Users, change: "+14.2%" },
    { label: "Resume Downloads", value: data.resumeDownloads.toLocaleString(), icon: Download, change: "+8.5%" },
    { label: "Total Projects", value: data.totalProjects, icon: FolderGit2, change: "Active" },
    { label: "Certificates", value: data.totalCertificates, icon: Award, change: "Verified" },
    { label: "Messages Received", value: data.totalMessages, icon: Mail, change: "Inbox" },
    { label: "Blog Articles", value: data.totalBlogPosts, icon: BookOpen, change: "Published" },
    { label: "GitHub Clicks", value: data.githubClicks.toLocaleString(), icon: MousePointer, change: "+18%" },
    { label: "Project Views", value: data.projectClicks.toLocaleString(), icon: Eye, change: "+24%" },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Executive Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">Real-time performance metrics and visitor analytics</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            System Operational
          </span>
        </div>
      </div>

      {/* Top Viewed Project Highlight */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/50 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">Top Performing Asset</span>
            <h3 className="text-lg font-bold text-white mt-0.5">{data.topViewedProject}</h3>
          </div>
        </div>
        <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-6">
          <div>
            <div className="text-xs text-gray-400">Total Views</div>
            <div className="text-xl font-bold text-white">1,890</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Conversion Rate</div>
            <div className="text-xl font-bold text-emerald-400">27.5%</div>
          </div>
        </div>
      </div>

      {/* Grid Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-indigo-500/40 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400 font-medium">{card.label}</span>
                <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-indigo-600/20 flex items-center justify-center text-gray-400 group-hover:text-indigo-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white tracking-tight">{card.value}</span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {card.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recharts Traffic Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Visitor Area Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#0f1117] border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-white text-base">Weekly Visitor Traffic</h3>
              <p className="text-xs text-gray-400">Daily unique visitors over the last 7 days</p>
            </div>
            <div className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20">
              Live Stream
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.weeklyVisitors}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f1117", borderColor: "#6366f1", borderRadius: "12px", color: "#fff" }}
                />
                <Area type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Distribution Pie Chart */}
        <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-white text-base mb-1">Device Distribution</h3>
            <p className="text-xs text-gray-400 mb-4">Traffic breakdown by hardware platform</p>
            <div className="h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.deviceDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="percentage"
                  >
                    {data.deviceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0f1117", borderColor: "#ffffff20", borderRadius: "8px", color: "#fff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-white/10">
            {data.deviceDistribution.map((item, idx) => (
              <div key={idx}>
                <div className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: COLORS[idx] }} />
                  {item.device}
                </div>
                <div className="text-sm font-bold text-white mt-0.5">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Browser Distribution & Traffic Sources Bar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Browser Breakdown */}
        <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10">
          <h3 className="font-bold text-white text-base mb-1">Browser Distribution</h3>
          <p className="text-xs text-gray-400 mb-6">User web client analytics</p>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.browserDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="browser" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f1117", borderColor: "#a855f7", borderRadius: "12px", color: "#fff" }}
                />
                <Bar dataKey="percentage" fill="#a855f7" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent System Activity Log */}
        <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white text-base">Recent Activities</h3>
            <span className="text-xs text-gray-400">Audit Log</span>
          </div>
          <div className="space-y-3">
            {[
              { text: "Admin logged into Portfolio OS", time: "5 mins ago", icon: Activity, color: "text-indigo-400" },
              { text: "New contact message from Alex Vance", time: "1 hour ago", icon: Mail, color: "text-emerald-400" },
              { text: "Resume PDF downloaded by recruiter", time: "3 hours ago", icon: Download, color: "text-purple-400" },
              { text: "GitHub repository sync completed", time: "6 hours ago", icon: ArrowUpRight, color: "text-blue-400" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 text-xs">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-gray-200 font-medium">{item.text}</span>
                  </div>
                  <span className="text-gray-500 text-[11px]">{item.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
