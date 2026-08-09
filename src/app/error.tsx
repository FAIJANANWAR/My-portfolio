"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, ArrowLeft, ShieldAlert } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception internally without exposing stack trace to user
    console.error("Runtime exception caught by error boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D1217] flex flex-col justify-between pt-28 pb-16 font-sans relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10 my-auto">
        <div className="w-16 h-16 rounded-3xl bg-[#F5EFE6] border border-[#E8DFC8] flex items-center justify-center text-[#D96B43] mx-auto mb-6 shadow-sm">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.3em] block mb-2">
          Temporary Runtime Interrupt
        </span>

        <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#4A1D24] mb-4">
          Something Unexpected Happened
        </h1>

        <p className="text-sm text-[#2D1217]/80 max-w-md mx-auto mb-8 leading-relaxed">
          The system encountered a minor interruption. You can try refreshing the page state or return to the main station.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D96B43] hover:bg-[#C55A32] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F5EFE6] hover:bg-[#E8DFC8] border border-[#E8DFC8] text-[#2D1217] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-[#2D1217]/50 font-semibold uppercase tracking-widest relative z-10">
        Faijan Anwar • Full-Stack Developer Portfolio OS
      </div>
    </div>
  );
}
