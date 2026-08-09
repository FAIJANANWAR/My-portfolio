"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { GraduationCap, ShieldCheck, Cloud, Code } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    title: "Master of Computer Applications (MCA)",
    sub: "Poornima University (2025 – 2027)",
    desc: "Advanced software engineering, database management systems, cloud computing, and full-stack web application architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Red Hat System Administration (RH124)",
    sub: "Red Hat Certified Academy",
    desc: "Hands-on expertise in Red Hat Enterprise Linux system management, command line operations, user management, and security administration.",
  },
  {
    icon: Cloud,
    title: "Google Cloud & Apigee API Security",
    sub: "Google Cloud Credentials",
    desc: "Credentialed in Cloud Computing Fundamentals and Google Cloud Apigee API Security (OAuth, JWT, API Threat Protection).",
  },
  {
    icon: Code,
    title: "Full-Stack Web Engineering Mastery",
    sub: "React, Next.js, Node.js & PostgreSQL",
    desc: "Demonstrated competency in building end-to-end full-stack web platforms, client-side encryption vaults, and dynamic calculation utilities.",
  },
];

export default function ProblemSolving() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#170D10] text-[#2D1217] dark:text-[#F5EFE6] border-b border-[#E8DFC8] dark:border-[#3D2028] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#D96B43] uppercase tracking-[0.25em] mb-2 block">
            Academic & Technical Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#4A1D24] dark:text-[#FDFBF7] mb-4">
            Milestones & Achievements
          </h2>
          <p className="text-sm sm:text-base text-[#2D1217]/80 dark:text-[#F5EFE6]/80">
            A summary of formal academic qualifications and verified professional technical credentials.
          </p>
          <div className="w-20 h-1 bg-[#D96B43] rounded-full mx-auto mt-4" />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-[#231217] border border-[#E8DFC8] dark:border-[#3D2028] shadow-sm hover:shadow-md transition-all flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5EFE6] dark:bg-[#2C161D] border border-[#E8DFC8] dark:border-[#42222A] flex items-center justify-center text-[#D96B43] dark:text-[#E08E53] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D96B43] block mb-1">
                    {item.sub}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-[#4A1D24] dark:text-[#FDFBF7] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D1217]/80 dark:text-[#F5EFE6]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
