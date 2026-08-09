"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFBF7]/90 dark:bg-[#170D10]/90 backdrop-blur-md border-b border-[#E8DFC8] dark:border-[#3D2028] py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-editorial text-xl font-bold tracking-tight text-[#2D1217] dark:text-[#FDFBF7] flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#F5EFE6] dark:bg-[#2C161D] border border-[#D96B43]/30 flex items-center justify-center text-[#D96B43] font-bold text-xs">
            FA
          </div>
          <span className="font-editorial font-bold">Faijan Anwar</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6">
          <div className="flex gap-0.5 lg:gap-1 relative">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative text-xs uppercase tracking-wider font-semibold text-[#4A1D24]/80 dark:text-[#F5EFE6]/80 hover:text-[#D96B43] dark:hover:text-[#E08E53] px-2.5 py-1.5 rounded-xl transition-colors duration-200 select-none"
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-[#F5EFE6] dark:bg-[#2C161D] border border-[#E8DFC8] dark:border-[#42222A] rounded-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:block h-4 w-px bg-[#E8DFC8] dark:bg-[#3D2028]" />

          {/* Social Icons */}
          <div className="hidden xl:flex items-center gap-2">
            <a
              href="https://github.com/faijananwar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-7 h-7 flex items-center justify-center text-[#4A1D24]/70 dark:text-[#F5EFE6]/70 hover:text-[#D96B43] rounded-lg hover:bg-[#F5EFE6] dark:hover:bg-[#2C161D] transition-all"
            >
              <FiGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/faijan-anwar/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 flex items-center justify-center text-[#4A1D24]/70 dark:text-[#F5EFE6]/70 hover:text-[#3B5998] rounded-lg hover:bg-[#F5EFE6] dark:hover:bg-[#2C161D] transition-all"
            >
              <FiLinkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com/faijananwar"
              target="_blank"
              rel="noreferrer"
              aria-label="X Twitter"
              className="w-7 h-7 flex items-center justify-center text-[#4A1D24]/70 dark:text-[#F5EFE6]/70 hover:text-[#D96B43] rounded-lg hover:bg-[#F5EFE6] dark:hover:bg-[#2C161D] transition-all"
            >
              <FiTwitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/anwar_faiz_?igsh=MTM5bXgyZ3A0cm9lcQ=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 flex items-center justify-center text-[#4A1D24]/70 dark:text-[#F5EFE6]/70 hover:text-pink-600 rounded-lg hover:bg-[#F5EFE6] dark:hover:bg-[#2C161D] transition-all"
            >
              <FiInstagram className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="text-xs font-semibold px-3.5 py-1.5 bg-[#F5EFE6] dark:bg-[#2C161D] hover:bg-[#E8DFC8] dark:hover:bg-[#3D2028] border border-[#E8DFC8] dark:border-[#42222A] text-[#2D1217] dark:text-[#FDFBF7] rounded-xl transition-all duration-150 cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="w-9 h-9 flex items-center justify-center text-[#2D1217] dark:text-[#FDFBF7] rounded-lg hover:bg-[#F5EFE6] dark:hover:bg-[#2C161D] transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden bg-[#FDFBF7] dark:bg-[#170D10] border-b border-[#E8DFC8] dark:border-[#3D2028]"
          >
            <div className="flex flex-col px-4 pt-3 pb-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-[#2D1217] dark:text-[#F5EFE6] hover:text-[#D96B43] py-2.5 px-3 rounded-lg hover:bg-[#F5EFE6] dark:hover:bg-[#2C161D] transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 px-3 flex flex-col gap-2">
                <a
                  href="/resume.pdf"
                  download
                  className="w-full text-center text-sm font-semibold py-2.5 bg-[#D96B43] text-white rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
