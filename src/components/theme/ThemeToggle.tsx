"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme, ThemeMode } from "./ThemeProvider";
import { Sun, Moon, Laptop, Check } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: { mode: ThemeMode; label: string; icon: typeof Sun }[] = [
    { mode: "light", label: "Light", icon: Sun },
    { mode: "dark", label: "Dark", icon: Moon },
    { mode: "system", label: "System", icon: Laptop },
  ];

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-xl bg-[#F5EFE6] dark:bg-[#251419] border border-[#E8DFC8] dark:border-[#42222A] text-[#4A1D24] dark:text-[#F5EFE6] hover:text-[#D96B43] dark:hover:text-[#E08E53] transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
        title="Change Theme (Light / Dark / System)"
        aria-label="Change Theme"
      >
        {resolvedTheme === "dark" ? (
          <Moon className="w-4 h-4 text-[#E08E53]" />
        ) : (
          <Sun className="w-4 h-4 text-[#D96B43]" />
        )}
        <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block capitalize">
          {theme}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          {options.map(({ mode, label, icon: Icon }) => {
            const active = theme === mode;
            return (
              <button
                key={mode}
                onClick={() => {
                  setTheme(mode);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                  active
                    ? "bg-[#D96B43] text-white font-bold shadow-sm"
                    : "text-[#2D1217] dark:text-[#F5EFE6] hover:bg-[#F5EFE6] dark:hover:bg-[#2C161D]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </div>
                {active && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
