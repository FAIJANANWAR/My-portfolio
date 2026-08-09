"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";
import { ExternalLink, ArrowUpRight, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    id: "crypto-profit-calculator",
    title: "Crypto Profit & ROI Calculator",
    category: "Financial Utility / Web App",
    type: "fullstack",
    overview: "A real-time financial tracking utility built to compute crypto investment returns, net profit/loss, and precise ROI percentages while accounting for customizable buy/sell transaction fees.",
    problem: "Traders often struggle to quickly assess net earnings from short-term spot trades due to complex exchange fee structures eating into their actual margins.",
    solution: "Designed a premium glassmorphic calculator with modular fee inputs, visual preset selections (BTC, ETH, SOL, DOGE), double-mode input fields (Direct Quantity vs Target USD Invest), and real-time calculations.",
    architecture: "Built with React and Tailwind CSS. State variables handle dynamic numeric input validations, automatically recalculate all investment values as the user types, and formatting engines sanitize standard USD display figures.",
    techStack: {
      Frontend: ["React", "JavaScript", "Tailwind CSS", "Lucide Icons", "Vite"],
      Deployment: ["Vercel Hobby Plan", "Git / GitHub"],
    },
    challenges: [
      {
        challenge: "Real-time sync between two independent inputs (Quantity vs USD Investment)",
        solution: "Implemented bi-directional synchronization triggers via React's useEffect state hook, automatically computing tokens based on buy price when investment amount changes and vice-versa.",
      },
      {
        challenge: "Accurately representing trading fees without mathematical round-off errors",
        solution: "Programmed robust floating-point normalization in JavaScript to securely handle sub-cent margins and display institutional-grade transaction summaries.",
      },
      {
        challenge: "Responsive grid layouts for financial tables",
        solution: "Created custom CSS layout variables and glass-morphic panels that scale dynamically across mobile, tablet, and high-DPI desktop viewports.",
      },
    ],
    features: ["Real-time Calculations", "Interactive Presets", "Advanced Fee Modeling", "Dual Input Conversion", "Clipboard Results Copying", "Responsive Dark Theme"],
    lessons: ["State Synchronization", "Financial Application UX Design", "Floating Point Precision Handling", "Responsive Card Layouts"],
    github: "https://github.com/FAIJANANWAR/crypto-profit-calculator",
    live: "https://crypto-profit-calculator-kohl.vercel.app/",
  },
  {
    id: "dao-governance",
    title: "DAO Governance System",
    category: "Web3 / Blockchain",
    type: "web3",
    overview: "A decentralized governance platform inspired by modern DAO ecosystems. The platform demonstrates token-based voting, governance proposals, treasury management, quorum tracking, and timelock governance concepts.",
    problem: "Traditional organizational decision-making is centralized, opaque, and slow, creating trust issues and coordination bottlenecks.",
    solution: "Developed a fully decentralized governance framework where members hold governance tokens to propose, vote, and execute treasury movements autonomously on-chain.",
    architecture: "The core system relies on a modular governance smart contract connected to an ERC20 token for voting power. Voting power is checkpointed to prevent double-voting. Approved proposals go through a Timelock contract to give members a grace period to react before execution.",
    techStack: {
      Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      Blockchain: ["Solidity", "OpenZeppelin", "ERC20 Governance Concepts"],
    },
    challenges: [
      {
        challenge: "Designing governance workflows",
        solution: "Built modular governance architecture with strict role delegation between the token, governor, and timelock contracts.",
      },
      {
        challenge: "Representing proposal lifecycle visually",
        solution: "Designed proposal lifecycle states (Pending, Active, Defeated, Succeeded, Queued, Executed) and mapped them directly to intuitive UI step-indicators.",
      },
      {
        challenge: "Simulating token-weighted voting",
        solution: "Created voting analytics dashboard calculating voting weights based on historical block token balances (checkpoints).",
      },
      {
        challenge: "Tracking governance states",
        solution: "Developed caching and state-handling utilities to retrieve proposal events and calculate quorum tracking on the frontend.",
      },
      {
        challenge: "Treasury visualization",
        solution: "Designed treasury tracking interface displaying on-chain token balances and historical proposal transaction histories.",
      },
    ],
    features: ["Governance Proposals", "Voting System", "Treasury Dashboard", "DAO Members", "Proposal Tracking", "Timelock Logic"],
    lessons: ["Governance Architecture", "DAO Design Patterns", "Web3 UX Design", "Blockchain System Thinking"],
    github: "https://github.com/FAIJANANWAR/dao-governance-system",
    live: "https://dao-governance-system-dao-governanc-flax.vercel.app/",
  },
  {
    id: "devblog",
    title: "DevBlog Platform",
    category: "Full Stack SaaS",
    type: "fullstack",
    overview: "A production-grade full-stack blogging platform featuring authentication, markdown editing, role-based permissions, PostgreSQL storage, and a scalable REST API architecture.",
    problem: "Many blogging platforms lack custom developer features (like rich Markdown/Code styling) or are bloated with complex, non-secure custom database designs.",
    solution: "Created an RLS-secured blogging dashboard with an embedded markdown editor, customizable author permissions, and instant edge publishing.",
    architecture: "Built with a React/Vite client communicating with a PostgreSQL/Supabase database. Leveraged Supabase Row Level Security (RLS) policies for secure content isolation and Zod schemas for request validation.",
    techStack: {
      Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js", "Zod"],
      Database: ["PostgreSQL", "Supabase"],
    },
    challenges: [
      {
        challenge: "Secure authentication",
        solution: "Implemented Supabase Auth for industry-standard JWT handling and user management.",
      },
      {
        challenge: "Role-based access & database security",
        solution: "Built RLS-secured database design with PostgreSQL schemas ensuring authors only modify their own posts.",
      },
      {
        challenge: "Ownership validation",
        solution: "Created backend ownership middleware to validate editor resource access tokens against document author IDs.",
      },
      {
        challenge: "Slug generation",
        solution: "Implemented SEO-friendly slug generation with duplicate-checking logic inside database triggers.",
      },
      {
        challenge: "Markdown editor architecture",
        solution: "Integrated a custom markdown parser with real-time syntax highlighting for code snippets.",
      },
    ],
    features: ["Authentication", "Author Dashboard", "Markdown Editor", "Blog Publishing", "Categories", "SEO Optimization", "Dark Mode"],
    lessons: ["Full Stack Architecture", "Authentication Design", "Database Security", "SaaS Product Development"],
    github: "https://github.com/FAIJANANWAR/faijan-web3-portfolio",
    live: "https://dev-blog-livid-three.vercel.app/",
  },
  {
    id: "securevault",
    title: "SecureVault",
    category: "Security Engineering",
    type: "security",
    overview: "A production-grade encrypted notes application implementing end-to-end encryption, AES-GCM cryptography, JWT authentication, secure cookies, and defense-in-depth architecture.",
    problem: "Users face privacy threats from database breaches and server-side snooping when storing sensitive notes.",
    solution: "Designed an end-to-end encrypted vault where notes are encrypted in the browser before dispatch, ensuring the server never sees the plaintext data.",
    architecture: "Employs the Web Crypto API for client-side AES-GCM encryption. The backend is a Node/Express server storing encrypted payloads in MongoDB. Authentication is handled via HTTP-only secure JWT cookies.",
    techStack: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["Node.js", "Express"],
      Database: ["MongoDB"],
      Security: ["AES-GCM", "Web Crypto API", "JWT", "bcrypt"],
    },
    challenges: [
      {
        challenge: "Secure encryption design",
        solution: "Developed double encryption architecture (payload encrypted with client key, transport layer encrypted via TLS).",
      },
      {
        challenge: "Key management",
        solution: "E2EE implementation using user password to derive encryption keys locally via PBKDF2 without sending the password to the server.",
      },
      {
        challenge: "Authentication security",
        solution: "Implemented httpOnly cookie authentication to mitigate Cross-Site Scripting (XSS) token theft.",
      },
      {
        challenge: "Preventing token theft",
        solution: "Added CSRF tokens and strict CORS configurations.",
      },
      {
        challenge: "User data isolation",
        solution: "Enforced strict ownership check middleware on all MongoDB database requests.",
      },
    ],
    features: ["End-to-End Encryption", "Secure Authentication", "Encrypted Storage", "User Isolation", "Defense-in-Depth Security"],
    lessons: ["Cryptography Fundamentals", "Secure Backend Architecture", "Authentication Design", "Security Best Practices"],
    github: "#",
    live: "#",
  },
];

const currentlyBuilding = [
  {
    title: "AI Resume Analyzer",
    tech: ["Next.js", "OpenAI APIs", "Node.js", "PostgreSQL"],
    status: "In Development",
    description: "An AI-powered tool that parses resumes, compares them against job descriptions, and provides actionable improvement suggestions.",
  },
  {
    title: "Freelance Project Management Dashboard",
    tech: ["React", "Node.js", "Supabase"],
    status: "Planning Stage",
    description: "A centralized dashboard for freelancers to track milestones, send client previews, generate contracts, and manage invoice statuses.",
  },
  {
    title: "Web3 Analytics Dashboard",
    tech: ["React", "TypeScript", "Blockchain APIs"],
    status: "Research & Development",
    description: "Real-time on-chain data analytics visualization for token transfers, gas spikes, and contract event listeners.",
  },
  {
    title: "E-Commerce Admin System",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "Prototype Stage",
    description: "A headless e-commerce backend administrative dashboard for inventory tracking, order status, and customer analytics.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  const toggleCaseStudy = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  const filterButtons = [
    { value: "all", label: "All Work" },
    { value: "fullstack", label: "Full Stack SaaS" },
    { value: "web3", label: "Web3 & Blockchain" },
    { value: "security", label: "Security Engineering" },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <FadeInView className="mb-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-cyber-indigo)] rounded-full mx-auto" />
        </FadeInView>
        <FadeInView delay={0.1} className="mb-12 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            A premium selection of production-grade systems, blockchain protocols, and secured applications. Click on a project card to view its in-depth case study.
          </p>
        </FadeInView>

        {/* Filters */}
        <FadeInView delay={0.15} className="flex flex-wrap gap-2 justify-center mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => {
                setFilter(btn.value);
                setExpandedProject(null);
              }}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                filter === btn.value
                  ? "bg-[var(--color-cyber-indigo)] border-[var(--color-cyber-indigo)] text-white glow-sm"
                  : "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </FadeInView>

        {/* Project List */}
        <div className="flex flex-col gap-6">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedProject === project.id;
            // Gather all flat tech stacks for tags
            const allTechTags = Object.values(project.techStack).flat();

            return (
              <FadeInView
                key={project.id}
                delay={idx * 0.08}
                className={`group glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? "border-[rgba(99,102,241,0.35)] shadow-[0_4px_30px_rgba(99,102,241,0.08)]" : "border-white/[0.06] hover:border-[rgba(99,102,241,0.22)]"
                }`}
              >
                {/* Summary View */}
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3.5 flex-wrap">
                        <span className="text-xs font-semibold text-[var(--color-electric-blue-light)] uppercase tracking-wider bg-[rgba(99,102,241,0.06)] px-2.5 py-1 rounded-md border border-[rgba(99,102,241,0.12)]">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4 group-hover:text-[var(--color-electric-blue-light)] transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                        {project.overview}
                      </p>
                      
                      {/* Tech stack summary */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {allTechTags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.05] text-gray-400 text-xs rounded-lg font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Case Study Toggle */}
                      <button
                        onClick={() => toggleCaseStudy(project.id)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all border border-white/5 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {isExpanded ? "Collapse Case Study" : "View Expanded Case Study"}
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* External Actions */}
                    <div className="flex md:flex-col gap-2.5 md:min-w-[140px] md:items-end md:justify-start">
                      {project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all w-full sm:w-auto md:w-full cursor-pointer"
                        >
                          <FiGithub className="w-3.5 h-3.5" /> Codebase
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex items-center justify-center gap-1.5 text-xs font-medium text-gray-600 px-3.5 py-2 bg-white/[0.02] border border-white/[0.04] rounded-xl w-full sm:w-auto md:w-full cursor-not-allowed select-none"
                        >
                          <FiGithub className="w-3.5 h-3.5 text-gray-700" /> Private Repo
                        </button>
                      )}
                      {project.live !== "#" ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white px-3.5 py-2 bg-[var(--color-cyber-indigo)] hover:bg-[var(--color-electric-blue-hover)] border border-[rgba(99,102,241,0.3)] rounded-xl transition-all glow-sm w-full sm:w-auto md:w-full cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex items-center justify-center gap-1.5 text-xs font-medium text-gray-600 px-3.5 py-2 bg-white/[0.02] border border-white/[0.04] rounded-xl w-full sm:w-auto md:w-full cursor-not-allowed select-none"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-gray-700" /> Client Only
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Case Study Area */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="border-t border-white/[0.06] bg-black/20"
                    >
                      <div className="p-6 sm:p-8 md:p-10 border-t border-white/[0.03] space-y-8 text-sm">
                        {/* Summary Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                          {/* Overview Narrative */}
                          <div className="lg:col-span-7 space-y-6">
                            <div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">The Problem</h4>
                              <p className="text-gray-300 leading-relaxed font-light">{project.problem}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">The Solution</h4>
                              <p className="text-gray-300 leading-relaxed font-light">{project.solution}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Technical Architecture</h4>
                              <p className="text-gray-300 leading-relaxed font-light">{project.architecture}</p>
                            </div>
                          </div>

                          {/* Tech Stack Details & Metadata */}
                          <div className="lg:col-span-5 space-y-6 lg:pl-6 lg:border-l border-white/[0.06]">
                            <div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tech Stack Detail</h4>
                              <div className="space-y-3">
                                {Object.entries(project.techStack).map(([layer, techs]) => (
                                  <div key={layer}>
                                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">{layer}</span>
                                    <div className="flex flex-wrap gap-1.5">
                                      {techs.map((t) => (
                                        <span key={t} className="px-2 py-0.5 bg-[rgba(37,99,235,0.06)] border border-[rgba(37,99,235,0.12)] text-[var(--color-electric-blue-light)] text-[11px] rounded-md font-semibold">
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Key Features</h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {project.features.map((feat) => (
                                  <li key={feat} className="flex items-center gap-2 text-xs text-gray-300 font-light">
                                    <span className="w-1 h-1 rounded-full bg-[var(--color-electric-blue-light)] shrink-0" />
                                    {feat}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Lessons Learned</h4>
                              <ul className="space-y-1.5">
                                {project.lessons.map((lesson) => (
                                  <li key={lesson} className="flex items-start gap-2 text-xs text-gray-300 font-light leading-relaxed">
                                    <span className="text-[var(--color-electric-blue-light)] font-bold">✓</span>
                                    <span>{lesson}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Challenges & Solutions */}
                        <div className="pt-6 border-t border-white/[0.06]">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Challenges & How I Solved Them</h4>
                          <div className="space-y-4">
                            {project.challenges.map((ch, idx) => (
                              <div key={idx} className="p-4 bg-white/[0.02] border border-white/[0.04] rounded-xl flex flex-col md:flex-row gap-2 md:gap-8 justify-between">
                                <div className="md:w-5/12">
                                  <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">Challenge {idx + 1}</p>
                                  <p className="text-gray-300 leading-normal text-sm font-light">{ch.challenge}</p>
                                </div>
                                <div className="md:w-7/12 md:pl-4 md:border-l border-white/[0.05]">
                                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">Solution</p>
                                  <p className="text-gray-400 leading-normal text-sm font-light">{ch.solution}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeInView>
            );
          })}
        </div>

        {/* Currently Building */}
        <div className="mt-24 pt-16 border-t border-white/[0.06]">
          <FadeInView className="mb-4 text-center">
            <h3 className="text-2xl md:text-3.5xl font-bold font-display text-white">
              Currently <span className="text-gradient">Building</span>
            </h3>
            <div className="w-16 h-1 bg-amber-500/80 rounded-full mx-auto mt-2" />
          </FadeInView>
          <FadeInView delay={0.1} className="mb-12 text-center">
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              A look into the projects currently residing in my local workspace — from initial planning to early prototypes.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentlyBuilding.map((proj, idx) => (
              <FadeInView
                key={proj.title}
                delay={idx * 0.08}
                className="glass rounded-xl border border-white/[0.04] p-5.5 flex flex-col justify-between relative group hover:border-amber-500/20 transition-all duration-300"
              >
                {/* Status indicator */}
                <div className="flex items-center justify-between mb-4.5">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {proj.status}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                </div>

                <div className="flex-1">
                  <h4 className="text-base font-bold font-display text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/[0.04]">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/[0.02] text-gray-500 text-[10px] rounded border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
