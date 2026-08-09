"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";

const highlights = [
  { value: "2+", label: "Years Freelance" },
  { value: "20+", label: "Projects Delivered" },
  { value: "15+", label: "dApps Built" },
  { value: "100%", label: "Success Rate" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <FadeInView className="mb-6 sm:mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-cyber-indigo)] rounded-full" />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Photo */}
          <FadeInView direction="left" delay={0.15} className="lg:col-span-4 relative flex justify-center lg:justify-start lg:pt-2">
            <div className="aspect-square w-full max-w-[260px] sm:max-w-[320px] relative rounded-2xl overflow-hidden p-[2px] bg-white/[0.04] shadow-2xl">
              {/* Unique animated rotating gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] bg-gradient-to-r from-[var(--color-cyber-indigo)] via-[var(--color-premium-purple)] to-[var(--color-electric-blue)] opacity-70 pointer-events-none z-0"
              />
              <div className="w-full h-full bg-[#09090B] rounded-[14px] overflow-hidden relative z-10 p-1">
                <div className="w-full h-full bg-[var(--color-charcoal)] rounded-[11px] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt="Faijan Anwar — Full Stack & Web3 Developer"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 w-full h-full scale-[1.03] hover:scale-100"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[var(--color-cyber-indigo)]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[var(--color-electric-blue)]/05 rounded-full blur-3xl -z-10" />
          </FadeInView>

          {/* Content */}
          <FadeInView direction="right" delay={0.25} className="lg:col-span-8 flex flex-col gap-5">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-semibold">
              I am a Full Stack Developer and Web3 Engineer with 2+ years of freelance experience building modern web systems, SaaS platforms, and blockchain-integrated applications.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              My engineering journey began with **frontend development**, creating highly responsive, intuitive user interfaces. To deliver complete solutions, I quickly expanded into **backend systems**, designing REST APIs, databases, and securing middlewares. Over time, my work evolved into building comprehensive **full-stack applications** and dashboard products for global clients.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Drawn to the power of decentralization, I transitioned into **Web3 freelancing**, writing secure smart contracts, deploying DAO architectures, and integrating wallets on-chain. I operate at the intersection of robust backend engineering, cryptography, and modern UI architectures to build high-performance, secure production-grade systems.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
              Based in India, I partner with startup founders, tech recruiters, and clients worldwide to solve complex engineering problems and turn ideas into production-ready platforms.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed border-t border-white/[0.04] pt-4 mt-2">
              I am currently pursuing my **Master of Computer Applications (MCA) in Computer Science at Poornima University** (2025 - 2027) to ground my development work in solid computer science fundamentals. Additionally, I hold certifications in **API Security on Google Cloud&apos;s Apigee API Platform** and **Google Cloud Computing Foundations**.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 mt-4">
              {highlights.map((item) => (
                <div key={item.label} className="glass p-4 rounded-xl border border-white/[0.06] text-center">
                  <p className="text-2xl font-bold font-display text-white mb-0.5">{item.value}</p>
                  <p className="text-xs text-gray-500 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
