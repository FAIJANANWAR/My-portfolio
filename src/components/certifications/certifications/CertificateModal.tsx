"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export default function CertificateModal({ isOpen, image, title, onClose }: CertificateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="relative max-w-4xl w-full bg-[#09090B] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-white/[0.01]">
              <h3 className="text-sm sm:text-base font-bold font-display text-white truncate max-w-[80%] pr-4">
                {title}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={image}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                  title="Open image in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image Body */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/20 aspect-[4/3] sm:aspect-auto sm:max-h-[75vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={title}
                className="max-w-full max-h-full object-contain rounded-lg border border-white/[0.04]"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
