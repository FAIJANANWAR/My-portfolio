"use client";

import { Certificate } from "@/data/certificates";
import { ExternalLink, Eye, Award, Calendar } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
  onViewImage: (image: string, title: string) => void;
}

export default function CertificateCard({ certificate, onViewImage }: CertificateCardProps) {
  return (
    <div className="group glass rounded-2xl border border-white/[0.06] hover:border-[rgba(99,102,241,0.22)] p-5.5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Image / Thumbnail Container */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-4.5 bg-black/40 border border-white/[0.04]">
        {certificate.status === "in-progress" ? (
          <div className="w-full h-full bg-gradient-to-br from-[rgba(99,102,241,0.15)] via-slate-900 to-[rgba(139,92,246,0.15)] flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
            {/* Animated pulsing glow */}
            <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent animate-pulse" />
            <Award className="w-8 h-8 text-[var(--color-electric-blue-light)] mb-2 relative z-10 animate-bounce" style={{ animationDuration: "3s" }} />
            <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase relative z-10">Under Study</span>
          </div>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certificate.image}
              alt={certificate.title}
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-103"
            />
            {/* Hover overlay with Quick View button */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
              <button
                onClick={() => onViewImage(certificate.image, certificate.title)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-semibold text-white flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Quick View
              </button>
            </div>
          </>
        )}
      </div>

      {/* Info Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Category Tag */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[var(--color-electric-blue-light)] uppercase tracking-wider bg-[rgba(99,102,241,0.06)] px-2 py-0.5 rounded border border-[rgba(99,102,241,0.12)]">
              {certificate.category}
            </span>
            {certificate.status === "in-progress" && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500 bg-amber-500/5 px-2.5 py-0.5 rounded border border-amber-500/10 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Learning
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="text-base font-bold font-display text-white mb-2 leading-snug group-hover:text-[var(--color-electric-blue-light)] transition-colors select-none">
            {certificate.title}
          </h4>

          {/* Issuer & Date info row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-3.5 font-medium">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-gray-600" />
              {certificate.issuer}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-600" />
              {certificate.date}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light line-clamp-3 select-none">
            {certificate.description}
          </p>
        </div>

        <div>
          {/* Skills Badges */}
          <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.04] mb-4.5">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 bg-white/[0.02] border border-white/[0.04] text-[10px] text-gray-500 rounded font-medium transition-colors hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Credential ID info */}
          {certificate.credentialId && (
            <div className="text-[10px] font-mono text-gray-600 mb-4 select-none">
              ID: <span className="text-gray-500">{certificate.credentialId}</span>
            </div>
          )}

          {/* Verification & Action Buttons */}
          <div className="flex gap-2">
            {certificate.status === "in-progress" ? (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-white px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all cursor-pointer"
              >
                View Syllabus / Program <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            ) : (
              <>
                <button
                  onClick={() => onViewImage(certificate.image, certificate.title)}
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-white px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" /> View
                </button>
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-white px-3 py-2 bg-[var(--color-cyber-indigo)] hover:bg-[var(--color-electric-blue-hover)] border border-[rgba(99,102,241,0.3)] rounded-xl transition-all glow-sm cursor-pointer"
                >
                  Verify <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
