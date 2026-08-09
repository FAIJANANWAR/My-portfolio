"use client";

import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#170D10] text-[#2D1217] dark:text-[#F5EFE6] border-b border-[#E8DFC8] dark:border-[#3D2028] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <FadeInView className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-editorial text-[#4A1D24] dark:text-[#FDFBF7] mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full" />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Profile Photo Container */}
          <FadeInView direction="left" delay={0.15} className="lg:col-span-4 relative flex justify-center lg:justify-start lg:pt-2">
            <div className="aspect-square w-full max-w-[280px] sm:max-w-[320px] relative rounded-2xl overflow-hidden p-2 bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] shadow-md">
              <div className="w-full h-full bg-[#F5EFE6] dark:bg-[#2C161D] rounded-xl overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Faijan Anwar — Full-Stack Developer"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  quality={85}
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </FadeInView>

          {/* Polished Professional Summary (No Markdown syntax artifacts, No stat cards) */}
          <FadeInView direction="right" delay={0.25} className="lg:col-span-8 flex flex-col gap-5">
            <p className="text-[#4A1D24] dark:text-[#FDFBF7] text-base sm:text-lg leading-relaxed font-bold font-editorial">
              I am Faijan Anwar, a Full-Stack Developer focused on building clean, responsive web applications and reliable backend database services.
            </p>
            <p className="text-[#2D1217]/80 dark:text-[#F5EFE6]/80 text-sm sm:text-base leading-relaxed">
              My engineering work spans frontend user interfaces created with React and Next.js, and backend API integration using Node.js, Express, and PostgreSQL. I enjoy designing modular components, optimizing page loading performance, and building intuitive tools for users.
            </p>
            <p className="text-[#2D1217]/80 dark:text-[#F5EFE6]/80 text-sm sm:text-base leading-relaxed border-t border-[#E8DFC8] dark:border-[#3D2028] pt-4 mt-2">
              I am currently pursuing a Master of Computer Applications (MCA) in Computer Science at Poornima University (2025 – 2027) and hold a Bachelor of Technology (B.Tech) degree in Computer Science & Engineering (2020 – 2024). I also hold certifications in Red Hat System Administration (RH124) and Google Cloud Fundamentals.
            </p>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
