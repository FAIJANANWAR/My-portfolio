"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { portfolioService } from "@/lib/services/portfolioService";
import { CertificateItem } from "@/lib/types/portfolio";
import { Award, ExternalLink, Download, X, BookOpen, ShieldCheck } from "lucide-react";

export default function CertificationsSection() {
  const [certificates, setCertificates] = useState<CertificateItem[]>([]);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    portfolioService.getCertificates().then(setCertificates);
  }, []);

  return (
    <section id="certificates" className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] text-[#2D1217] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-14 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Academic & Professional Verification
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] mb-4">
            Certificate Library & Archive
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80">
            Verified certifications, credentials, and academic qualifications.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        {/* ─── Bookshelf Archive Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#E8DFC8] hover:border-[#D96B43] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5"
            >
              {/* Illustrated Book / Scroll Icon Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F5EFE6] border border-[#E8DFC8] flex items-center justify-center text-[#D96B43] shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D96B43] bg-[#F5EFE6] px-2.5 py-0.5 rounded-full border border-[#E8DFC8]">
                    {cert.category}
                  </span>
                  <span className="text-xs font-semibold text-[#2D1217]/60">
                    Issued {cert.issueDate}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-[#4A1D24] truncate group-hover:text-[#D96B43] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#2D1217]/70 truncate mt-1">
                  {cert.issuer}
                </p>

                <div className="mt-4 pt-3 border-t border-[#E8DFC8] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#2D1217]/60">
                    ID: {cert.credentialId || "VERIFIED"}
                  </span>
                  <span className="text-xs font-bold text-[#D96B43] flex items-center gap-1">
                    Open Archive &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Interactive Reader Modal ────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#FFFDF9] border border-[#E8DFC8] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-[#2D1217]"
            >
              <div className="flex items-start justify-between border-b border-[#E8DFC8] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D96B43]/10 text-[#D96B43] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#D96B43] uppercase tracking-widest block">
                      Credential Document
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-[#4A1D24]">
                      {selectedCert.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full text-gray-400 hover:text-[#4A1D24] hover:bg-[#F5EFE6] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[#F5EFE6]/60 border border-[#E8DFC8] grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D1217]/60 block mb-1">
                      Issuing Organization
                    </span>
                    <span className="font-bold text-[#4A1D24]">{selectedCert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D1217]/60 block mb-1">
                      Date Issued
                    </span>
                    <span className="font-bold text-[#4A1D24]">{selectedCert.issueDate}</span>
                  </div>
                  {selectedCert.credentialId && (
                    <div className="col-span-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D1217]/60 block mb-1">
                        Credential ID
                      </span>
                      <span className="font-mono text-[#2D1217] font-semibold">{selectedCert.credentialId}</span>
                    </div>
                  )}
                </div>

                {selectedCert.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedCert.tags.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-xl bg-[#F5EFE6] border border-[#E8DFC8] text-xs font-semibold text-[#4A1D24]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#E8DFC8] flex items-center justify-end gap-3">
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#D96B43] hover:bg-[#C55A32] text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Verify Credential URL</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
