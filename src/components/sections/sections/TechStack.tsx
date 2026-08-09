import FadeInView from "@/components/ui/FadeInView";
import { Code2, Server, Database, Shield, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "text-blue-400 border-blue-500/10 bg-blue-500/5",
    dotColor: "bg-blue-400",
    skills: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "AngularJS", "Framer Motion", "HTML", "CSS"],
  },
  {
    title: "Backend & Core",
    icon: Server,
    color: "text-emerald-400 border-emerald-500/10 bg-emerald-500/5",
    dotColor: "bg-emerald-400",
    skills: ["Node.js", "Express.js", "Python", "C", "C++", "REST APIs", "Authentication", "Middleware Design"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-purple-400 border-purple-500/10 bg-purple-500/5",
    dotColor: "bg-purple-400",
    skills: ["PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    title: "Security Engineering",
    icon: Shield,
    color: "text-rose-400 border-rose-500/10 bg-rose-500/5",
    dotColor: "bg-rose-400",
    skills: [
      "Apigee API Security",
      "JWT Authentication",
      "AES-GCM Encryption",
      "Secure Cookies",
      "Role Based Access Control",
      "RLS Policies",
    ],
  },
  {
    title: "Web3 & Blockchain",
    icon: Cpu,
    color: "text-amber-400 border-amber-500/10 bg-amber-500/5",
    dotColor: "bg-amber-400",
    skills: [
      "Solidity",
      "Smart Contracts",
      "DAO Architecture",
      "ERC20 Governance",
      "Ethereum Concepts",
      "Wallet Integration",
      "Governance Systems",
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    color: "text-slate-400 border-slate-500/10 bg-slate-500/5",
    dotColor: "bg-slate-400",
    skills: ["Git", "GitHub", "Google Cloud (GCP)", "Vercel", "Render", "Postman", "VS Code"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 relative overflow-hidden border-y border-white/[0.06]" style={{ background: "rgba(17,17,20,0.5)" }}>
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-electric-blue)] rounded-full mx-auto" />
        </FadeInView>
        <FadeInView delay={0.1} className="mb-16 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            A comprehensive overview of my technical capabilities spanning full stack systems, core programming languages, security engineering, and decentralized platforms.
          </p>
        </FadeInView>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <FadeInView
                key={cat.title}
                delay={idx * 0.08}
                className="glass rounded-2xl border border-white/[0.06] hover:border-[rgba(37,99,235,0.22)] p-6 sm:p-7 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle top glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${cat.color} transition-colors duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">{cat.title}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-white/[0.05] hover:border-white/[0.08] text-xs font-medium text-gray-300 rounded-lg flex items-center gap-1.5 transition-all duration-150 cursor-default select-none"
                    >
                      <span className={`w-1 h-1 rounded-full ${cat.dotColor}`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
