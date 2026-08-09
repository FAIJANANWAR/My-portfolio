import FadeInView from "@/components/ui/FadeInView";
import { Zap, ShieldCheck, HeartHandshake, Globe } from "lucide-react";

const valueCards = [
  {
    icon: Zap,
    title: "Production-Grade Delivery",
    description:
      "Shipping performant, scalable codebase architecture with clean modular code. I prioritize rapid load speeds, search engine optimization (SEO), and robust deployment structures using Vercel and Render.",
    accent: "text-blue-400 bg-blue-500/5 border-blue-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Security & Defense in Depth",
    description:
      "From database Row Level Security policies to Web Crypto end-to-end encryption and Solidity smart contract validation, I implement defense-in-depth security to protect user resources.",
    accent: "text-rose-400 bg-rose-500/5 border-rose-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Foundry of Trust & Integrity",
    description:
      "Delivering freelance projects on strict milestones. I maintain clear technical documentation, code reviews, and project tracking dashboards to guarantee client visibility.",
    accent: "text-emerald-400 bg-emerald-500/5 border-emerald-500/10",
  },
  {
    icon: Globe,
    title: "Global Async Collaboration",
    description:
      "Working synchronously with startup founders, tech leads, and product managers across global timezones. I write clear commits, modular documentation, and structured Postman APIs.",
    accent: "text-purple-400 bg-purple-500/5 border-purple-500/10",
  },
];

export default function FreelanceJourney() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Freelance <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-cyber-indigo)] rounded-full mx-auto" />
        </FadeInView>
        <FadeInView delay={0.1} className="mb-16 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Delivering high-impact freelance development contracts by combining robust engineering methodologies with transparent client relationships.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valueCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeInView
                key={card.title}
                delay={idx * 0.08}
                className="glass rounded-2xl border border-white/[0.06] hover:border-[rgba(37,99,235,0.22)] p-6 sm:p-8 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="flex gap-5 items-start">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${card.accent}`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2.5 group-hover:text-[var(--color-electric-blue-light)] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                      {card.description}
                    </p>
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
