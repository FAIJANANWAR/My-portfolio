"use client";

import { useState } from "react";
import { Search, Grid, Award, RefreshCw } from "lucide-react";
import { certificates, Certificate } from "@/data/certificates";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import FadeInView from "@/components/ui/FadeInView";

export default function CertificationsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState("");

  const categories = [
    "All",
    "AI",
    "Cloud",
    "Web Development",
    "Blockchain",
    "Cyber Security",
    "Programming",
    "DevOps",
    "Data",
    "Others",
  ];

  // Filtering Logic
  const filteredCertificates = certificates.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || cert.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const handleOpenModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
  };

  const handleCloseModal = () => {
    setModalImage(null);
    setModalTitle("");
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-t border-white/[0.06]" style={{ background: "rgba(17,17,20,0.3)" }}>
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-purple-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <FadeInView className="mb-4 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.06)] text-xs font-semibold text-[var(--color-electric-blue-light)] tracking-wide mb-4">
            🏆 {certificates.length}+ Professional Certifications
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-cyber-indigo)] rounded-full mx-auto" />
        </FadeInView>

        <FadeInView delay={0.1} className="mb-12 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Validating technical competence, continuous engineering learning, and industry best practices.
          </p>
        </FadeInView>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Search bar */}
          <FadeInView delay={0.12} className="relative max-w-md mx-auto w-full">
            <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by title, issuer, or skills..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6); // reset pagination on search
              }}
              className="w-full bg-[var(--color-matte-black)] border border-white/[0.08] hover:border-white/[0.15] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-electric-blue)] focus:border-[var(--color-electric-blue)] transition-all duration-150"
            />
          </FadeInView>

          {/* Category tabs */}
          <FadeInView delay={0.15} className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {categories.map((cat) => {
              const count = cat === "All" 
                ? certificates.length 
                : certificates.filter(c => c.category.toLowerCase() === cat.toLowerCase()).length;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(6); // reset pagination on filter change
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-[var(--color-cyber-indigo)] border-[var(--color-cyber-indigo)] text-white glow-sm"
                      : "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-gray-500"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </FadeInView>
        </div>

        {/* Certifications Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.slice(0, visibleCount).map((cert, idx) => (
              <FadeInView
                key={cert.title + idx}
                delay={idx * 0.08}
                className="flex"
              >
                <CertificateCard
                  certificate={cert}
                  onViewImage={handleOpenModal}
                />
              </FadeInView>
            ))}
          </div>
        ) : (
          <FadeInView className="text-center py-16 glass border border-white/[0.04] rounded-2xl max-w-md mx-auto">
            <Award className="w-10 h-10 text-gray-600 mx-auto mb-4" />
            <h4 className="text-base font-bold text-white mb-1">No certifications found</h4>
            <p className="text-xs text-gray-500">Try modifying your search query or category filters.</p>
          </FadeInView>
        )}

        {/* Load More Button */}
        {filteredCertificates.length > visibleCount && (
          <FadeInView delay={0.1} className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-100 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Load More
            </button>
          </FadeInView>
        )}
      </div>

      {/* Lightbox / Modal Modal component */}
      <CertificateModal
        isOpen={modalImage !== null}
        image={modalImage || ""}
        title={modalTitle}
        onClose={handleCloseModal}
      />
    </section>
  );
}
