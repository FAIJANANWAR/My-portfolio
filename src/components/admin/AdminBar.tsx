"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Edit3, LogOut, Check, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inlineEditEnabled, setInlineEditEnabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = () => {
      const isAuth =
        localStorage.getItem("portfolio_admin_logged_in") === "true" ||
        document.cookie.includes("portfolio_admin_session=authenticated_admin_session");
      setIsLoggedIn(isAuth);
      const isInline = localStorage.getItem("portfolio_inline_edit_mode") === "true";
      setInlineEditEnabled(isInline);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const toggleInlineEdit = () => {
    const nextState = !inlineEditEnabled;
    setInlineEditEnabled(nextState);
    localStorage.setItem("portfolio_inline_edit_mode", nextState ? "true" : "false");
    window.dispatchEvent(new Event("portfolio_inline_edit_toggled"));
  };

  const handleLogout = () => {
    document.cookie = "portfolio_admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.removeItem("portfolio_admin_logged_in");
    localStorage.removeItem("portfolio_inline_edit_mode");
    setIsLoggedIn(false);
    router.push("/");
  };

  if (!isLoggedIn) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0f1117]/95 border-b border-indigo-500/30 px-4 py-2 text-xs flex items-center justify-between text-white shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-semibold border border-indigo-500/30">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          ADMIN ACTIVE
        </span>
        <span className="hidden sm:inline text-gray-400">Portfolio OS System Control</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleInlineEdit}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-all ${
            inlineEditEnabled
              ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
              : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
          }`}
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Inline Edit Mode</span>
          {inlineEditEnabled && <Check className="w-3 h-3 text-emerald-400" />}
        </button>

        <Link
          href="/admin/dashboard"
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
        >
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Dashboard</span>
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors"
          title="Logout Admin"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </div>
  );
}
