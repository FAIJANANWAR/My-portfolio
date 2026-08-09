"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  User,
  Wrench,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Award,
  BookOpen,
  Mail,
  Navigation,
  Settings,
  Search,
  Image as ImageIcon,
  Bot,
  LogOut,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Hero CMS", href: "/admin/hero", icon: Sparkles },
  { label: "About CMS", href: "/admin/about", icon: User },
  { label: "Skills CMS", href: "/admin/skills", icon: Wrench },
  { label: "Experience CMS", href: "/admin/experience", icon: Briefcase },
  { label: "Education CMS", href: "/admin/education", icon: GraduationCap },
  { label: "Projects CMS", href: "/admin/projects", icon: FolderGit2 },
  { label: "Certificates CMS", href: "/admin/certificates", icon: Award },
  { label: "Blogs CMS", href: "/admin/blogs", icon: BookOpen },
  { label: "Contact & Messages", href: "/admin/contact", icon: Mail },
  { label: "Navigation CMS", href: "/admin/navigation", icon: Navigation },
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "SEO Panel", href: "/admin/seo", icon: Search },
  { label: "Media Manager", href: "/admin/media", icon: ImageIcon },
  { label: "AI Assistant", href: "/admin/ai", icon: Bot },
  { label: "GitHub Integration", href: "/admin/github", icon: Github },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // If viewing login page, render children directly without dashboard sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = () => {
    document.cookie = "portfolio_admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.removeItem("portfolio_admin_logged_in");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#090b0e] text-[#f0f1f5] flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-[#0f1117] border-b border-white/10 p-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2 font-bold text-white tracking-wider">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm">
            OS
          </div>
          <span>PORTFOLIO OS</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg bg-white/5 text-gray-300"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 bottom-0 left-0 z-30 w-64 bg-[#0f1117] border-r border-white/10 flex flex-col justify-between transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Logo Header */}
          <div className="p-6 border-b border-white/10 hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
              OS
            </div>
            <div>
              <h1 className="font-bold text-white text-base tracking-wide">PORTFOLIO OS</h1>
              <p className="text-[10px] text-indigo-400 font-medium tracking-widest uppercase">Admin Command Center</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)]">
            <div className="px-3 pb-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              CMS Management
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-indigo-400" : "text-gray-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 text-indigo-400" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            target="_blank"
            className="w-full mb-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-300 flex items-center justify-center gap-2 transition-colors"
          >
            <span>View Public Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full py-2 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-xs font-medium text-red-400 flex items-center justify-center gap-2 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
