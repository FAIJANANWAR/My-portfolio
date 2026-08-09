"use client";

import { useTheme, ThemeMode } from "./ThemeProvider";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { mode: ThemeMode; label: string; icon: typeof Sun }[] = [
    { mode: "light", label: "Light", icon: Sun },
    { mode: "dark", label: "Dark", icon: Moon },
    { mode: "system", label: "System", icon: Laptop },
  ];

  return (
    <div className="inline-flex items-center p-1 rounded-2xl bg-[#F5EFE6] dark:bg-[#251419] border border-[#E8DFC8] dark:border-[#42222A] text-[#2D1217] dark:text-[#F5EFE6]">
      {options.map(({ mode, label, icon: Icon }) => (
        <button
          key={mode}
          onClick={() => setTheme(mode)}
          className={`p-1.5 sm:px-2.5 sm:py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
            theme === mode
              ? "bg-[#D96B43] text-white shadow-sm font-bold"
              : "text-[#2D1217]/70 dark:text-[#F5EFE6]/70 hover:text-[#D96B43] dark:hover:text-[#E08E53]"
          }`}
          title={`Switch to ${label} Theme`}
        >
          <Icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
