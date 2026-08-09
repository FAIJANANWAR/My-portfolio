"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { portfolioService } from "@/lib/services/portfolioService";
import { ContactInfoData } from "@/lib/types/portfolio";
import { Mail, Send, CheckCircle2, AlertCircle, MapPin } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState<ContactInfoData | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    portfolioService.getContactInfo().then(setContactInfo);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please provide a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      await portfolioService.addMessage({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim() || "General Inquiry",
        message: message.trim(),
      });

      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
          }),
        });
      } catch {
        // Soft fallback
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setErrorMessage("An error occurred while sending your message. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-[#2D1217] text-[#FDFBF7] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-14 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#E08E53] uppercase tracking-[0.25em] mb-2 block">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-white mb-4">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-[#F5EFE6]/80">
            Open for Full-Stack Developer roles, web engineering projects, and technical collaborations.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#4A1D24]/60 border border-[#E08E53]/30 backdrop-blur-md space-y-6">
              <h3 className="font-editorial text-2xl font-bold text-white">
                Faijan Anwar
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EFE6]/80 leading-relaxed">
                Feel free to send a message regarding job opportunities, freelance web development, or general inquiries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D96B43]/20 flex items-center justify-center text-[#E08E53]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E08E53] block">
                      Email
                    </span>
                    <a href={`mailto:${contactInfo?.email || "contact@faijan.in"}`} className="text-xs sm:text-sm text-white hover:underline">
                      {contactInfo?.email || "contact@faijan.in"}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D96B43]/20 flex items-center justify-center text-[#E08E53]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E08E53] block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm text-white">
                      {contactInfo?.location || "India"} (Available for Remote Work)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={contactInfo?.github || "https://github.com/faijananwar"}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo?.linkedin || "https://www.linkedin.com/in/faijan-anwar/"}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#3B5998] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo?.twitter || "https://x.com/faijananwar"}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#E08E53] flex items-center justify-center transition-colors"
                  aria-label="X Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 rounded-3xl bg-[#4A1D24]/40 border border-[#E08E53]/20 space-y-5 backdrop-blur-md">
              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Message sent successfully! Thank you for reaching out.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-2xl bg-red-900/40 border border-red-500/30 flex items-center gap-3 text-xs text-red-300">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage || "Failed to send message. Please check required fields."}</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#E08E53] uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-[#2D1217] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D96B43] transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#E08E53] uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#2D1217] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D96B43] transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#E08E53] uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#2D1217] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D96B43] transition-colors"
                  placeholder="Opportunity / Collaboration"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#E08E53] uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full bg-[#2D1217] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D96B43] transition-colors resize-none"
                  placeholder="Hello Faijan, I would like to get in touch..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 px-6 rounded-xl bg-[#D96B43] hover:bg-[#C55A32] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D96B43]/20 transition-all cursor-pointer disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
