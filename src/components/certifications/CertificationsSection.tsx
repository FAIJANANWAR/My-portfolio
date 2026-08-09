"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { portfolioService } from "@/lib/services/portfolioService";
import { CertificateItem } from "@/lib/types/portfolio";
import { Award, ExternalLink, CheckCircle, Clock } from "lucide-react";

export default function CertificationsSection() {
  const [certificates, setCertificates] = useState<CertificateItem[]>([]);
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "in-progress">("all");

  useEffect(() => {
    portfolioService.getCertificates().then(setCertificates);
  }, []);

  const filteredCerts = filterStatus === "all"
    ? certificates
    : certificates.filter((c) => (c.status || "completed") === filterStatus);

  return (
    <section id="certificates" className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#170D10] text-[#2D1217] dark:text-[#F5EFE6] border-b border-[#E8DFC8] dark:border-[#3D2028] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Verified Credentials & Learning
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] dark:text-[#FDFBF7] mb-4">
            Certificate Library
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80 dark:text-[#F5EFE6]/80">
            Formal technical certifications, cloud credentials, and active learning tracks.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        {/* Status Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Credentials" },
            { id: "completed", label: "Completed Certifications" },
            { id: "in-progress", label: "In Progress Tracks" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilterStatus(btn.id as typeof filterStatus)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterStatus === btn.id
                  ? "bg-[#D96B43] text-white shadow-sm font-bold"
                  : "bg-[#F5EFE6] dark:bg-[#2C161D] text-[#4A1D24] dark:text-[#FDFBF7] hover:bg-[#E8DFC8] dark:hover:bg-[#3D2028] border border-[#E8DFC8] dark:border-[#42222A]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => {
            const isCompleted = (cert.status || "completed") === "completed";
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] hover:border-[#D96B43] dark:hover:border-[#E08E53] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${
                        isCompleted
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                          : "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {isCompleted ? "Completed" : "In Progress"}
                    </span>
                    <span className="text-[11px] font-semibold text-[#2D1217]/60 dark:text-[#F5EFE6]/60">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="font-editorial text-lg font-bold text-[#4A1D24] dark:text-[#FDFBF7] mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#D96B43] dark:text-[#E08E53] mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-[#2D1217]/75 dark:text-[#F5EFE6]/75 leading-relaxed line-clamp-3 mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFC8] dark:border-[#3D2028] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#2D1217]/50 dark:text-[#F5EFE6]/50 truncate max-w-[160px]">
                    ID: {cert.credentialId}
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#D96B43] dark:text-[#E08E53] hover:underline flex items-center gap-1"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
