"use client";

import FadeInView from "@/components/ui/FadeInView";

const highlights = [
  { value: "2+", label: "Years Freelance" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "MCA", label: "Poornima University" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#FDFBF7] text-[#2D1217]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <FadeInView className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-editorial text-[#4A1D24] mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full" />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Photo Container */}
          <FadeInView direction="left" delay={0.15} className="lg:col-span-4 relative flex justify-center lg:justify-start lg:pt-2">
            <div className="aspect-square w-full max-w-[280px] sm:max-w-[320px] relative rounded-2xl overflow-hidden p-2 bg-[#FFFDF9] border border-[#E8DFC8] shadow-md">
              <div className="w-full h-full bg-[#F5EFE6] rounded-xl overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Faijan Anwar — Full-Stack Developer"
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
                />
              </div>
            </div>
          </FadeInView>

          {/* Biography Content */}
          <FadeInView direction="right" delay={0.25} className="lg:col-span-8 flex flex-col gap-5">
            <p className="text-[#4A1D24] text-base sm:text-lg leading-relaxed font-bold font-editorial">
              I am a Full-Stack Developer with 2+ years of freelance experience building scalable web applications, REST APIs, and database systems.
            </p>
            <p className="text-[#2D1217]/80 text-sm sm:text-base leading-relaxed">
              My engineering journey began with **frontend development**, creating responsive, intuitive user interfaces with React and Next.js. To deliver complete end-to-end solutions, I expanded into **backend engineering**, designing REST APIs, database models in PostgreSQL & Supabase, and implementing secure middleware authentication.
            </p>
            <p className="text-[#2D1217]/80 text-sm sm:text-base leading-relaxed">
              I operate at the intersection of clean architecture, high-performance APIs, and user-centric design to build reliable production systems for founders, clients, and software teams.
            </p>
            <p className="text-[#2D1217]/80 text-sm sm:text-base leading-relaxed border-t border-[#E8DFC8] pt-4 mt-2">
              I am currently pursuing my **Master of Computer Applications (MCA) in Computer Science at Poornima University** (2025 - 2027) to ground my development work in core software architecture. I also hold certifications in **API Security on Google Cloud&apos;s Apigee Platform** and **Google Cloud Computing Foundations**.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {highlights.map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-[#FFFDF9] border border-[#E8DFC8] text-center shadow-sm">
                  <p className="text-2xl font-bold font-editorial text-[#4A1D24] mb-0.5">{item.value}</p>
                  <p className="text-[11px] text-[#2D1217]/70 font-semibold uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
