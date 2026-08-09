"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-xl bg-[#F5EFE6] dark:bg-[#251419] border border-[#E8DFC8] dark:border-[#42222A] text-[#4A1D24] dark:text-[#F5EFE6] hover:text-[#D96B43] dark:hover:text-[#E08E53] transition-all cursor-pointer shadow-sm flex items-center gap-1 group"
      title={`Current Theme: ${theme.toUpperCase()} (Click to toggle)`}
      aria-label="Toggle Theme"
    >
      {theme === "light" && <Sun className="w-4 h-4 text-[#D96B43] transition-transform group-hover:rotate-45" />}
      {theme === "dark" && <Moon className="w-4 h-4 text-[#E08E53] transition-transform group-hover:-rotate-12" />}
      {theme === "system" && <Laptop className="w-4 h-4 text-[#3B5998]" />}
      <span className="text-[10px] font-bold uppercase tracking-wider hidden lg:inline-block">
        {theme}
      </span>
    </button>
  );
}
