"use client";

import { useState } from "react";
import FadeInView from "@/components/ui/FadeInView";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#170D10] text-[#2D1217] dark:text-[#F5EFE6] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-14 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Communication Station & Outreach
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] dark:text-[#FDFBF7] mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80 dark:text-[#F5EFE6]/80">
            Have a project inquiry, software engineering role, or question? Send a message directly or connect via social platforms.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Verified Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] shadow-sm space-y-6">
              <h3 className="font-editorial text-2xl font-bold text-[#4A1D24] dark:text-[#FDFBF7] border-b border-[#E8DFC8] dark:border-[#3D2028] pb-4">
                Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:faizan244244@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-2xl bg-[#F5EFE6]/60 dark:bg-[#2C161D]/60 hover:bg-[#F5EFE6] dark:hover:bg-[#2C161D] border border-[#E8DFC8] dark:border-[#3D2028] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D96B43] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D96B43] block">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#4A1D24] dark:text-[#FDFBF7] group-hover:underline">
                      faizan244244@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#F5EFE6]/60 dark:bg-[#2C161D]/60 border border-[#E8DFC8] dark:border-[#3D2028]">
                  <div className="w-10 h-10 rounded-xl bg-[#4A1D24] dark:bg-[#3D2028] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D96B43] block">
                      Location & Work Preference
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#4A1D24] dark:text-[#FDFBF7]">
                      India — Available for Remote Work
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E8DFC8] dark:border-[#3D2028]">
                <span className="text-xs font-bold text-[#4A1D24] dark:text-[#FDFBF7] uppercase tracking-wider block mb-3">
                  Verified Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/FAIJANANWAR"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#F5EFE6] dark:bg-[#2C161D] hover:bg-[#E8DFC8] dark:hover:bg-[#3D2028] border border-[#E8DFC8] dark:border-[#42222A] text-[#4A1D24] dark:text-[#FDFBF7] hover:text-[#D96B43] transition-all"
                    title="GitHub Profile"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/faijan-anwar/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#F5EFE6] dark:bg-[#2C161D] hover:bg-[#E8DFC8] dark:hover:bg-[#3D2028] border border-[#E8DFC8] dark:border-[#42222A] text-[#4A1D24] dark:text-[#FDFBF7] hover:text-[#3B5998] transition-all"
                    title="LinkedIn Profile"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/FaijanAnwar"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#F5EFE6] dark:bg-[#2C161D] hover:bg-[#E8DFC8] dark:hover:bg-[#3D2028] border border-[#E8DFC8] dark:border-[#42222A] text-[#4A1D24] dark:text-[#FDFBF7] hover:text-[#D96B43] transition-all"
                    title="X Twitter Profile"
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/anwar_faiz_?igsh=MTM5bXgyZ3A0cm9lcQ=="
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#F5EFE6] dark:bg-[#2C161D] hover:bg-[#E8DFC8] dark:hover:bg-[#3D2028] border border-[#E8DFC8] dark:border-[#42222A] text-[#4A1D24] dark:text-[#FDFBF7] hover:text-pink-600 transition-all"
                    title="Instagram Profile"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] shadow-sm">
              <h3 className="font-editorial text-2xl font-bold text-[#4A1D24] dark:text-[#FDFBF7] mb-6">
                Send a Direct Message
              </h3>

              {status === "success" ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-editorial text-xl font-bold text-emerald-900 dark:text-emerald-200">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you for reaching out! Your message has been received in the inbox. I will reply shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#4A1D24] dark:text-[#FDFBF7] uppercase tracking-wider block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6]/60 dark:bg-[#2C161D]/60 border border-[#E8DFC8] dark:border-[#3D2028] text-xs sm:text-sm text-[#2D1217] dark:text-[#FDFBF7] focus:outline-none focus:border-[#D96B43]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#4A1D24] dark:text-[#FDFBF7] uppercase tracking-wider block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6]/60 dark:bg-[#2C161D]/60 border border-[#E8DFC8] dark:border-[#3D2028] text-xs sm:text-sm text-[#2D1217] dark:text-[#FDFBF7] focus:outline-none focus:border-[#D96B43]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#4A1D24] dark:text-[#FDFBF7] uppercase tracking-wider block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6]/60 dark:bg-[#2C161D]/60 border border-[#E8DFC8] dark:border-[#3D2028] text-xs sm:text-sm text-[#2D1217] dark:text-[#FDFBF7] focus:outline-none focus:border-[#D96B43]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#4A1D24] dark:text-[#FDFBF7] uppercase tracking-wider block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Faijan, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6]/60 dark:bg-[#2C161D]/60 border border-[#E8DFC8] dark:border-[#3D2028] text-xs sm:text-sm text-[#2D1217] dark:text-[#FDFBF7] focus:outline-none focus:border-[#D96B43] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#D96B43] hover:bg-[#C55A32] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
