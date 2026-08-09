import FadeInView from "@/components/ui/FadeInView";
import { Search, Compass, Palette, Code, CheckSquare, Rocket, Activity } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Research",
    desc: "Analyzing requirements, auditing client specs, researching protocol standards, and setting feasibility boundaries.",
  },
  {
    icon: Compass,
    title: "Architecture",
    desc: "Drafting database schemas, API route maps, state management logic, contract structures, and data security vectors.",
  },
  {
    icon: Palette,
    title: "UI Design",
    desc: "Wireframing client screens, implementing custom styling parameters, and structuring responsive web navigation.",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Writing modular, type-safe full stack systems and gas-optimized Solidity smart contracts conforming to clean coding rules.",
  },
  {
    icon: CheckSquare,
    title: "Testing",
    desc: "Executing API integrations, schema validations, smart contract unit tests, and verifying defense against edge bugs.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Releasing to production servers (Vercel, Render) under Git CI/CD flows with custom domains and server configurations.",
  },
  {
    icon: Activity,
    title: "Optimization",
    desc: "Profiling bundle sizes, refactoring slow query plans, caching expensive requests, and auditing contract gas costs.",
  },
];

export default function ProblemSolving() {
  return (
    <section id="process" className="py-24 relative overflow-hidden" style={{ background: "rgba(8,8,9,0.3)" }}>
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/3 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Development <span className="text-gradient">Process</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-cyber-indigo)] rounded-full mx-auto" />
        </FadeInView>
        <FadeInView delay={0.1} className="mb-16 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            A structured, engineering-first development methodology followed to build secure, robust software products from conception to mainnet.
          </p>
        </FadeInView>

        {/* Process Flow */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-[var(--color-cyber-indigo)] via-[var(--color-premium-purple)] to-transparent hidden lg:block -translate-y-1/2 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeInView
                  key={step.title}
                  delay={idx * 0.07}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step number & Icon bubble */}
                  <div className="relative mb-5 z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-charcoal)] border border-white/[0.06] group-hover:border-[var(--color-cyber-indigo)] flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300 shadow-lg glow-sm group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Circle tag showing step index */}
                    <div className="absolute -top-2.5 -right-2.5 w-6.5 h-6.5 rounded-full bg-[var(--color-matte-black)] border border-[rgba(255,255,255,0.08)] group-hover:border-[var(--color-cyber-indigo)] flex items-center justify-center text-[10px] font-bold text-gray-500 group-hover:text-[var(--color-cyber-indigo)] transition-all">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-sm sm:text-base font-bold font-display text-white mb-2.5 group-hover:text-[var(--color-cyber-indigo)] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[180px] font-light">
                    {step.desc}
                  </p>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
