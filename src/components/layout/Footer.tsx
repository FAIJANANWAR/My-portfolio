"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import SecretLoginModal from "@/components/admin/SecretLoginModal";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/faijananwar", label: "GitHub", hoverColor: "hover:text-[#D96B43]" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/faijan-anwar/", label: "LinkedIn", hoverColor: "hover:text-[#3B5998]" },
  { icon: FiTwitter, href: "https://x.com/faijananwar", label: "X (Twitter)", hoverColor: "hover:text-[#D96B43]" },
  { icon: FiInstagram, href: "https://www.instagram.com/anwar_faiz_?igsh=MTM5bXgyZ3A0cm9lcQ==", label: "Instagram", hoverColor: "hover:text-pink-500" },
];

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [clickCount, setClickCount] = useState(0);
  const [showSecretModal, setShowSecretModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setShowSecretModal(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyrightClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    if (nextCount >= 5) {
      setShowSecretModal(true);
      setClickCount(0);
    }
  };

  return (
    <>
      <footer className="bg-[#2D1217] text-[#FDFBF7] border-t border-[#4A1D24] pt-14 pb-8 relative font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-4 max-w-xs">
              <Link href="/" className="font-editorial text-2xl font-bold tracking-tight text-white">
                Faijan Anwar
              </Link>
              <p className="text-xs text-[#F5EFE6]/80 leading-relaxed font-sans">
                Full-Stack Developer building scalable, reliable and user-focused web applications from frontend to backend.
              </p>
              <div className="flex gap-3 mt-1">
                {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`w-8 h-8 flex items-center justify-center text-[#F5EFE6]/70 ${hoverColor} rounded-lg hover:bg-[#4A1D24] transition-all duration-150`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold text-[#E08E53] uppercase tracking-widest">Navigate</p>
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-[#F5EFE6]/80 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold text-[#E08E53] uppercase tracking-widest">Contact</p>
              <a href="mailto:faizan244244@gmail.com" className="text-xs text-[#F5EFE6]/80 hover:text-white transition-colors">
                faizan244244@gmail.com
              </a>
              <span className="text-xs text-[#F5EFE6]/60">India</span>
            </div>
          </div>

          <div className="w-full h-px bg-[#4A1D24] mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#F5EFE6]/60">
            <p
              onClick={handleCopyrightClick}
              className="cursor-pointer select-none hover:text-white transition-colors"
              title="Tip: Press Ctrl+Shift+A or click 5 times for secret access"
            >
              © {currentYear} Faijan Anwar. All rights reserved.
            </p>
            <p className="font-editorial text-xs italic">Full-Stack Developer</p>
          </div>
        </div>
      </footer>

      {/* Secret Access Login Modal */}
      <SecretLoginModal isOpen={showSecretModal} onClose={() => setShowSecretModal(false)} />
    </>
  );
}
