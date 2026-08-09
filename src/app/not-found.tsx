import Link from "next/link";
import { ArrowLeft, Compass, FolderGit2, Road } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D1217] flex flex-col justify-between pt-28 pb-16 font-sans relative overflow-hidden">
      {/* Soft Illustrated Parallax Sun Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F5EFE6] blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10 my-auto">
        <div className="w-16 h-16 rounded-3xl bg-[#F5EFE6] border border-[#E8DFC8] flex items-center justify-center text-[#D96B43] mx-auto mb-6 shadow-sm">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.3em] block mb-2">
          404 — Station Milestone Not Found
        </span>

        <h1 className="font-editorial text-4xl sm:text-6xl font-bold text-[#4A1D24] mb-4">
          You&apos;ve Reached Uncharted Territory
        </h1>

        <p className="text-sm sm:text-base text-[#2D1217]/80 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
          The milestone or page route you are trying to visit does not exist or has been relocated in the portfolio system.
        </p>

        {/* Navigation Landmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-10">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DFC8] hover:border-[#D96B43] text-xs font-bold text-[#4A1D24] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-[#D96B43]" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/#projects"
            className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DFC8] hover:border-[#D96B43] text-xs font-bold text-[#4A1D24] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-sm"
          >
            <FolderGit2 className="w-4 h-4 text-[#D96B43]" />
            <span>View Projects</span>
          </Link>
          <Link
            href="/#experience"
            className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DFC8] hover:border-[#D96B43] text-xs font-bold text-[#4A1D24] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-sm"
          >
            <Road className="w-4 h-4 text-[#D96B43]" />
            <span>Experience</span>
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-[#2D1217]/50 font-semibold uppercase tracking-widest relative z-10">
        Faijan Anwar • Full-Stack Developer Portfolio OS
      </div>
    </div>
  );
}
