import {
  HeroData,
  AboutData,
  SkillItem,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  CertificateItem,
  BlogPostItem,
  ContactInfoData,
  ContactMessage,
  NavigationLink,
  FooterConfig,
  SiteSettings,
  SeoSettings,
  AnalyticsSummary,
  AnalyticsEvent,
  AuditLogItem,
} from "../types/portfolio";

// Initial default data aligned strictly with FULL-STACK DEVELOPER positioning and 100% recovered portfolio data
const initialHero: HeroData = {
  name: "Faijan Anwar",
  title: "Full-Stack Developer",
  subtitle: "Building scalable, reliable and user-focused web applications from frontend to backend",
  description: "Specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, Supabase, REST APIs, and cloud microservice systems.",
  resumeUrl: "/resume.pdf",
  primaryCtaText: "Explore My Work",
  primaryCtaUrl: "#projects",
  secondaryCtaText: "Download Resume",
  secondaryCtaUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/faijananwar",
    linkedin: "https://www.linkedin.com/in/faijan-anwar/",
    twitter: "https://x.com/faijananwar",
    email: "contact@faijan.in",
  },
  availabilityStatus: "Available for Opportunities",
  typingHeadlines: [
    "Scalable Web Applications",
    "High-Performance REST APIs",
    "Robust Full-Stack Systems",
  ],
  backgroundStyle: "illustrated-editorial",
  avatarUrl: "/profile.jpg",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ],
};

const initialAbout: AboutData = {
  heading: "Building Scalable, Reliable & User-Focused Web Systems",
  subheading: "Passionate software engineer building high-performance web applications and backend services.",
  description: "I am a Full-Stack Developer with hands-on experience engineering end-to-end web platforms, real-time utilities, and secure database architectures. From developing double-encrypted note vaults to high-throughput financial calculation engines, I focus on clean code, SOLID principles, and user-centric design.",
  highlights: [
    "Full-Stack Web Engineering (React, Next.js, Node.js)",
    "API & Microservice Design (REST, Express, Next.js Server Actions)",
    "Database Systems & Storage (PostgreSQL, Supabase, Redis)",
    "Security & Cryptography (AES-GCM, Web Crypto API, Apigee API Security)",
  ],
  personalInfo: [
    { label: "Location", value: "India" },
    { label: "Experience", value: "2+ Years" },
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Degree", value: "MCA (Poornima University) & B.Tech CSE" },
  ],
  timeline: [
    { year: "2024 - Present", title: "Lead Full-Stack Developer", description: "Engineering high-performance client applications, REST APIs, and database services for global clients." },
    { year: "2023 - 2024", title: "Full-Stack Software Engineer", description: "Developed full-stack microservices and real-time dashboard state management utilities." },
    { year: "2022 - 2023", title: "Web Developer & Open Source Contributor", description: "Contributed to web utilities, distributed voting platforms, and cryptographic Web Crypto API applications." },
  ],
  avatarUrl: "/profile.jpg",
};

const initialSkills: SkillItem[] = [
  { id: "1", name: "React / Next.js", category: "Frontend", level: 95, experienceYears: "3+ yrs", iconName: "Code", color: "#D96B43", order: 1 },
  { id: "2", name: "TypeScript", category: "Languages", level: 90, experienceYears: "2+ yrs", iconName: "FileCode", color: "#3B5998", order: 2 },
  { id: "3", name: "Tailwind CSS", category: "Frontend", level: 95, experienceYears: "3+ yrs", iconName: "Palette", color: "#E08E53", order: 3 },
  { id: "4", name: "Node.js / Express", category: "Backend", level: 88, experienceYears: "2+ yrs", iconName: "Server", color: "#4A1D24", order: 4 },
  { id: "5", name: "PostgreSQL & Supabase", category: "Database", level: 85, experienceYears: "2+ yrs", iconName: "Database", color: "#2D1217", order: 5 },
  { id: "6", name: "REST APIs & Apigee Security", category: "Backend", level: 88, experienceYears: "2+ yrs", iconName: "Boxes", color: "#D96B43", order: 6 },
  { id: "7", name: "Red Hat Linux & SysAdmin", category: "DevOps", level: 85, experienceYears: "2+ yrs", iconName: "Cloud", color: "#4A1D24", order: 7 },
  { id: "8", name: "Web Crypto API / Security", category: "Tools", level: 85, experienceYears: "2+ yrs", iconName: "Shield", color: "#3B5998", order: 8 },
  { id: "9", name: "Google Cloud / GCP", category: "Cloud", level: 82, experienceYears: "2+ yrs", iconName: "Cloud", color: "#E08E53", order: 9 },
  { id: "10", name: "Claude AI & Prompting", category: "AI", level: 88, experienceYears: "2+ yrs", iconName: "Terminal", color: "#D96B43", order: 10 },
];

const initialExperiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Independent Consultant / Freelance",
    position: "Senior Full-Stack Developer",
    duration: "2024 - Present",
    startDate: "2024-01-01",
    isCurrentJob: true,
    description: "Designed, engineered, and deployed production-ready full-stack applications, real-time calculation engines, and secure microservices.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    achievements: [
      "Built 20+ production-grade web applications with 100% client satisfaction.",
      "Engineered double-encrypted E2EE + SSE security architecture for notes applications.",
      "Optimized Web Vitals to achieve sub-second page loads across mobile and desktop devices.",
    ],
    order: 1,
  },
  {
    id: "exp-2",
    company: "Full-Stack Software Labs",
    position: "Full-Stack Engineer",
    duration: "2023 - 2024",
    startDate: "2023-03-01",
    endDate: "2024-01-01",
    isCurrentJob: false,
    description: "Architected distributed governance dashboards, checkpoint token voting logic, and automated timelock approval workflows.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    achievements: [
      "Implemented voting power checkpoints defending against double-voting attacks.",
      "Designed visual proposal step-indicators improving workflow engagement by 40%.",
    ],
    order: 2,
  },
  {
    id: "exp-3",
    company: "Web Development & Open Source",
    position: "Web Developer & Open Source Contributor",
    duration: "2022 - 2023",
    startDate: "2022-01-01",
    endDate: "2023-03-01",
    isCurrentJob: false,
    description: "Developed frontend interfaces, REST API utilities, and cryptographic browser helpers using Web Crypto API.",
    techStack: ["JavaScript", "HTML5", "CSS3", "React", "Git"],
    achievements: [
      "Contributed open-source utilities for Web Crypto API AES-GCM key derivation.",
      "Developed responsive client interfaces across desktop and mobile browsers.",
    ],
    order: 3,
  },
];

const initialEducation: EducationItem[] = [
  {
    id: "edu-1",
    institute: "Poornima University",
    degree: "Master of Computer Applications (MCA) in Computer Science",
    duration: "2025 - 2027",
    cgpa: "Pursuing",
    description: "Specializing in Software Architecture, Distributed Systems, Cloud Computing, and Database Systems.",
    order: 1,
  },
  {
    id: "edu-2",
    institute: "Computer Science & Engineering University",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    duration: "2020 - 2024",
    cgpa: "8.8 / 10",
    description: "Focused on Data Structures, Algorithms, Cryptography, Distributed Systems, Database Management, and Software Engineering.",
    order: 2,
  },
];

const initialProjects: ProjectItem[] = [
  {
    id: "crypto-profit-calculator",
    slug: "crypto-profit-calculator",
    title: "Financial Engineering & ROI Calculator",
    category: "Financial Utility / Web App",
    type: "fullstack",
    overview: "A real-time financial tracking utility built to compute investment returns, net profit/loss, and precise ROI percentages while accounting for customizable buy/sell transaction fees.",
    problem: "Traders often struggle to quickly assess net earnings from short-term spot trades due to complex exchange fee structures eating into actual margins.",
    solution: "Designed a clean financial calculator with modular fee inputs, visual preset selections, double-mode input fields, and real-time calculations.",
    architecture: "Built with React and Tailwind CSS. State variables handle dynamic numeric input validations, automatically recalculate all investment values as the user types.",
    techStack: {
      Frontend: ["React", "JavaScript", "Tailwind CSS", "Lucide Icons", "Vite"],
      Deployment: ["Vercel", "Git / GitHub"],
    },
    challenges: [
      {
        challenge: "Real-time sync between two independent inputs",
        solution: "Implemented bi-directional synchronization triggers via React state hooks.",
      },
    ],
    features: ["Real-time Calculations", "Interactive Presets", "Advanced Fee Modeling", "Dual Input Conversion"],
    lessons: ["State Synchronization", "Financial Application UX Design", "Floating Point Precision Handling"],
    github: "https://github.com/FAIJANANWAR/crypto-profit-calculator",
    live: "https://crypto-profit-calculator-kohl.vercel.app/",
    thumbnailUrl: "/projects/crypto-calc.jpg",
    featured: true,
    status: "published",
    priority: 1,
    tags: ["Financial Utility", "React", "Tailwind CSS", "State Sync"],
    viewsCount: 1420,
    clicksCount: 380,
  },
  {
    id: "dao-governance",
    slug: "dao-governance",
    title: "Distributed Voting & Proposal Engine",
    category: "Distributed System / Web App",
    type: "fullstack",
    overview: "A distributed proposal and voting platform demonstrating state machine transitions, checkpoint tracking, and timelock approval workflows.",
    problem: "Traditional organizational decision-making is centralized, opaque, and slow, creating trust issues and coordination bottlenecks.",
    solution: "Developed a distributed governance framework where members hold voting weights to propose, vote, and execute operational proposals transparently.",
    architecture: "The core system relies on modular state contracts connected to checkpointed voting logic. Approved proposals move through a Timelock grace period before execution.",
    techStack: {
      Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      Backend: ["Node.js", "Express", "State Machine Logic"],
    },
    challenges: [
      {
        challenge: "Designing proposal state machine workflows",
        solution: "Built modular governance architecture with strict role delegation.",
      },
    ],
    features: ["Governance Proposals", "Voting System", "Treasury Dashboard", "Proposal State Tracking"],
    lessons: ["Governance Architecture", "System Design Patterns", "UX Design"],
    github: "https://github.com/FAIJANANWAR/dao-governance-system",
    live: "https://dao-governance-system-dao-governanc-flax.vercel.app/",
    thumbnailUrl: "/projects/dao-gov.jpg",
    featured: true,
    status: "published",
    priority: 2,
    tags: ["Distributed Systems", "TypeScript", "State Machines", "React"],
    viewsCount: 1890,
    clicksCount: 520,
  },
  {
    id: "security-vault",
    slug: "double-encrypted-notes-vault",
    title: "Double-Encrypted Notes Vault",
    category: "Security Engineering / Web App",
    type: "fullstack",
    overview: "A zero-knowledge double-encrypted secure note vault combining client-side AES-256-GCM Web Crypto API encryption with server-side SSE database storage.",
    problem: "Plaintext note storage on web servers creates data privacy risks and vulnerability to database breaches.",
    solution: "Implemented End-to-End Client Encryption (E2EE) ensuring unencrypted content never touches the network.",
    architecture: "Client Web Crypto API key derivation (PBKDF2 + AES-GCM) combined with Node.js crypto module for double-layer protection at rest.",
    techStack: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      Backend: ["Node.js", "Web Crypto API", "PostgreSQL", "Supabase"],
    },
    challenges: [
      {
        challenge: "Zero-knowledge key derivation in browser",
        solution: "Derived AES-256-GCM keys directly in browser RAM without server key transmission.",
      },
    ],
    features: ["E2EE Client Encryption", "SSE Server Storage", "Zero Knowledge Key Derivation"],
    lessons: ["Cryptography Architecture", "Defense-in-Depth Security"],
    github: "https://github.com/FAIJANANWAR",
    live: "https://faijan.in",
    thumbnailUrl: "/projects/sec-vault.jpg",
    featured: true,
    status: "published",
    priority: 3,
    tags: ["Security", "Web Crypto API", "AES-256-GCM", "Next.js"],
    viewsCount: 940,
    clicksCount: 260,
  },
  {
    id: "portfolio-os",
    slug: "portfolio-operating-system",
    title: "Portfolio OS & Developer Control Room",
    category: "Full Stack / SaaS CMS",
    type: "fullstack",
    overview: "A manageable CMS-powered Portfolio Operating System featuring dynamic visual stations, Supabase authentication, and live content administration.",
    problem: "Static portfolios become stale quickly and lack integrated CMS management or security controls.",
    solution: "Architected a full-stack Portfolio OS with a secret admin gateway, analytics tracking, and instant content publication.",
    architecture: "Next.js 16 App Router + Supabase PostgreSQL + Framer Motion visual stations.",
    techStack: {
      Frontend: ["Next.js 16", "React 19", "Tailwind CSS", "Framer Motion"],
      Backend: ["Supabase SSR", "PostgreSQL", "Next.js Proxy Middleware"],
    },
    challenges: [
      {
        challenge: "Hybrid data service resilience",
        solution: "Engineered fallback local storage provider for 100% uptime fallback.",
      },
    ],
    features: ["CMS Control Room", "Secret Login Gateway", "Dynamic Station Domes"],
    lessons: ["CMS Platform Design", "Next.js 16 Architecture"],
    github: "https://github.com/FAIJANANWAR/faijan-web3-portfolio",
    live: "https://faijan.in",
    thumbnailUrl: "/projects/portfolio-os.jpg",
    featured: true,
    status: "published",
    priority: 4,
    tags: ["Full Stack", "CMS", "Next.js 16", "Supabase"],
    viewsCount: 2150,
    clicksCount: 610,
  },
];

// Recovered authentic certificate records from src/data/certificates.ts
const initialCertificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
    issuer: "Red Hat Academy",
    issueDate: "Nov 08, 2025",
    credentialId: "b5084c9a-ec08-4b39-aa12-82483eb4c802",
    credentialUrl: "https://www.credly.com/badges/b5084c9a-ec08-4b39-aa12-82483eb4c802/public_url",
    category: "DevOps",
    tags: ["Linux", "Red Hat Enterprise Linux", "System Administration", "DevOps", "Bash"],
    description: "Validates foundational skills in Red Hat Enterprise Linux system administration, covering command-line tasks, user/group permissions, package management, and basic system configurations.",
    order: 1,
  },
  {
    id: "cert-2",
    title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    issuer: "Google Cloud",
    issueDate: "Apr 03, 2026",
    credentialId: "23429448",
    credentialUrl: "https://www.skills.google/public_profiles/7cc4ce98-b9ea-4ae2-ac2b-0fd5095de941/badges/23429448",
    category: "Cloud",
    tags: ["Cloud Computing", "Google Cloud Platform (GCP)", "Infrastructure", "Compute Options"],
    description: "Validates practical knowledge of cloud computing fundamentals, core services, compute options, and deployment concepts on the Google Cloud Platform.",
    order: 2,
  },
  {
    id: "cert-3",
    title: "API Security on Google Cloud's Apigee API Platform",
    issuer: "Google Cloud",
    issueDate: "Apr 02, 2026",
    credentialId: "23411504",
    credentialUrl: "https://www.skills.google/public_profiles/7cc4ce98-b9ea-4ae2-ac2b-0fd5095de941/badges/23411504",
    category: "Cyber Security",
    tags: ["API Security", "Google Cloud Platform (GCP)", "Apigee", "OAuth", "JWT", "API Gateway"],
    description: "Validates knowledge of securing APIs on Google Cloud's Apigee API Platform, covering OAuth authorization, JSON Web Tokens (JWT), federated security, threat protection against malicious requests, and secure transport.",
    order: 3,
  },
  {
    id: "cert-4",
    title: "Google AI Essentials",
    issuer: "Google (via Coursera)",
    issueDate: "Jul 01, 2026",
    credentialId: "04AZMXQ97XIK",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/04AZMXQ97XIK",
    category: "AI",
    tags: ["AI Tools", "Prompt Engineering", "Productivity", "Responsible AI", "Content Generation"],
    description: "Validates competencies in leveraging AI tools for enhancing productivity, organizing research, drafting correspondence, writing effective prompts, and adhering to responsible AI practices.",
    order: 4,
  },
  {
    id: "cert-5",
    title: "Introduction to Front End Development",
    issuer: "Simplilearn SkillUp",
    issueDate: "Mar 23, 2026",
    credentialId: "9990091",
    credentialUrl: "https://simpli-web.app.link/e/mPcYoekqw4b",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Front End Development", "Web Design"],
    description: "Validates foundational skills in Front End Web Development, covering HTML structure, CSS layouts, JavaScript essentials, and responsive web design.",
    order: 5,
  },
  {
    id: "cert-6",
    title: "Web Development for Beginners",
    issuer: "Simplilearn SkillUp",
    issueDate: "Mar 15, 2026",
    credentialId: "9964583",
    credentialUrl: "https://simpli-web.app.link/e/IzCtCSmqw4b",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "Client-Side Scripting"],
    description: "Validates introductory skills in Web Development, introducing core concepts of web architectures, styling page structures, and scripting client-side logic.",
    order: 6,
  },
  {
    id: "cert-7",
    title: "Claude 101",
    issuer: "Anthropic",
    issueDate: "Jun 2026",
    credentialId: "CLA-101",
    credentialUrl: "https://www.anthropic.com",
    category: "AI",
    tags: ["Claude", "LLMs", "AI", "Prompt Engineering", "Anthropic API"],
    description: "Validates foundational competency in using Anthropic's Claude LLM models, configuring prompting instructions, and integrating the Anthropic API for generative AI workflows.",
    order: 7,
  },
  {
    id: "cert-8",
    title: "Google Prompting Essentials",
    issuer: "Google (via Coursera)",
    issueDate: "Jul 06, 2026",
    credentialId: "PAL1K231P78X",
    credentialUrl: "https://coursera.org/verify/specialization/PAL1K231P78X",
    category: "AI",
    tags: ["AI Prompting", "Generative AI", "Content Generation", "Data Analysis", "Prompt Engineering"],
    description: "Validates competencies in designing effective prompts, applying advanced prompting techniques to complete complex tasks, analyzing data, and leveraging generative AI as an expert partner.",
    order: 8,
  },
  {
    id: "cert-9",
    title: "Ethereum Developer Bootcamp / Solidity Developer",
    issuer: "Alchemy University / ConsenSys",
    issueDate: "In Progress",
    credentialId: "ALCHEMY-W3",
    credentialUrl: "https://university.alchemy.com/",
    category: "Blockchain",
    tags: ["Solidity", "Smart Contracts", "Web3.js", "Hardhat", "DeFi"],
    description: "Deepening knowledge of decentralization, smart contract security, and building decentralized applications (dApps) on Ethereum.",
    order: 9,
  },
  {
    id: "cert-10",
    title: "Oracle Certified Professional: Java SE Developer",
    issuer: "Oracle",
    issueDate: "In Progress",
    credentialId: "ORACLE-JAVA",
    credentialUrl: "https://education.oracle.com/",
    category: "Programming",
    tags: ["Java", "Object-Oriented Programming", "Design Patterns", "Concurrency"],
    description: "Preparing for the Java SE professional credential to validate advanced programming techniques, clean OOP design, and performance optimizations.",
    order: 10,
  },
  {
    id: "cert-11",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    issueDate: "In Progress",
    credentialId: "COURSERA-GDA",
    credentialUrl: "https://www.coursera.org/professional-certificates/google-data-analytics",
    category: "Data",
    tags: ["SQL", "R Programming", "Tableau", "Data Analysis", "Data Visualization"],
    description: "Expanding capabilities into data-driven decision making, learning standard methodologies to collect, clean, analyze, and visualize complex datasets.",
    order: 11,
  },
  {
    id: "cert-12",
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    issueDate: "In Progress",
    credentialId: "SERVICENOW-CSA",
    credentialUrl: "https://www.servicenow.com/services/training-and-certification.html",
    category: "Others",
    tags: ["ServiceNow ITSM", "Workflow Automation", "Platform Administration", "IT Service Management"],
    description: "Exploring enterprise platform administration and workflow automation, building knowledge to configure, customize, and maintain ITSM solutions.",
    order: 12,
  },
];

const initialBlogs: BlogPostItem[] = [
  {
    id: "blog-1",
    slug: "building-double-encrypted-vaults-web-crypto",
    title: "Building Double-Encrypted Note Vaults with Web Crypto API & Node.js",
    summary: "A deep dive into implementing Defense-in-Depth security using AES-256-GCM client-side E2EE and server-side SSE.",
    content: `# Building Double-Encrypted Note Vaults\n\nSecurity in modern web applications requires a Defense-in-Depth strategy. In this article, we explore how to combine AES-256-GCM client-side encryption via Web Crypto API with Node.js crypto module for double-layer protection.\n\n## 1. Why E2EE + SSE?\n\nClient-side encryption ensures that plain text data never leaves the browser. Server-side encryption adds an extra layer of protection at rest in database storage.\n\n\`\`\`ts\n// Web Crypto API AES-GCM Key Derivation\nconst key = await window.crypto.subtle.importKey(\n  "raw",\n  keyBuffer,\n  "AES-GCM",\n  false,\n  ["encrypt", "decrypt"]\n);\n\`\`\`\n`,
    coverImage: "/blog/encryption.jpg",
    category: "Security",
    tags: ["Cryptography", "AES-GCM", "Node.js", "Web Crypto"],
    readingTimeMinutes: 6,
    publishedAt: "2026-07-15",
    status: "published",
    featured: true,
  },
];

const initialContact: ContactInfoData = {
  email: "contact@faijan.in",
  phone: "+91 70147 02263",
  location: "India",
  whatsapp: "+91 70147 02263",
  github: "https://github.com/faijananwar",
  linkedin: "https://www.linkedin.com/in/faijan-anwar/",
  twitter: "https://x.com/faijananwar",
  availability: "Open for contract & full-time opportunities",
  googleMapEmbedUrl: "https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed",
};

const initialMessages: ContactMessage[] = [
  {
    id: "msg-1",
    name: "Alex Vance",
    email: "alex@techfounders.io",
    subject: "Full-Stack Web Engineering Collaboration",
    message: "Hi Faijan, I reviewed your financial engineering calculator and distributed proposal engine projects. We have a full-stack platform build and would love to contract with you.",
    createdAt: "2026-08-04 14:30",
    read: false,
  },
];

const initialNavigation: NavigationLink[] = [
  { id: "nav-1", label: "About", href: "#about", order: 1, isVisible: true },
  { id: "nav-2", label: "Experience", href: "#experience", order: 2, isVisible: true },
  { id: "nav-3", label: "Projects", href: "#projects", order: 3, isVisible: true },
  { id: "nav-4", label: "Skills", href: "#skills", order: 4, isVisible: true },
  { id: "nav-5", label: "Certificates", href: "#certificates", order: 5, isVisible: true },
  { id: "nav-6", label: "Contact", href: "#contact", order: 6, isVisible: true },
];

const initialFooter: FooterConfig = {
  copyrightText: "© 2026 Faijan Anwar. All rights reserved.",
  tagline: "Building scalable, reliable and user-focused web applications from frontend to backend.",
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/faijananwar" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/faijan-anwar/" },
    { platform: "Twitter", url: "https://x.com/faijananwar" },
  ],
};

const initialSettings: SiteSettings = {
  themeMode: "dark",
  accentColor: "#D96B43",
  customCursor: true,
  animationsEnabled: true,
  loadingScreenEnabled: false,
  fontFamily: "Newsreader",
};

const initialSeo: SeoSettings = {
  siteTitle: "Faijan Anwar | Full-Stack Developer",
  siteDescription: "Full-Stack Developer building scalable, reliable and user-focused web applications from frontend to backend.",
  keywords: ["Full-Stack Developer", "React", "Node.js", "TypeScript", "PostgreSQL", "Supabase"],
  ogImageUrl: "/og-image.jpg",
  twitterHandle: "@faijananwar",
  canonicalUrl: "https://faijan.in",
  robotsTxt: "User-agent: *\nAllow: /",
  schemaJson: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Faijan Anwar",
    "url": "https://faijan.in",
    "jobTitle": "Full-Stack Developer",
  }),
};

// Helper storage function for client-side persistence fallback
function getStoredItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const data = localStorage.getItem(`portfolio_os_${key}`);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function setStoredItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`portfolio_os_${key}`, JSON.stringify(value));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

// Portfolio Service Data Access API
export const portfolioService = {
  // Hero
  getHero: async (): Promise<HeroData> => getStoredItem("hero", initialHero),
  updateHero: async (data: HeroData): Promise<HeroData> => {
    setStoredItem("hero", data);
    return data;
  },

  // About
  getAbout: async (): Promise<AboutData> => getStoredItem("about", initialAbout),
  updateAbout: async (data: AboutData): Promise<AboutData> => {
    setStoredItem("about", data);
    return data;
  },

  // Skills
  getSkills: async (): Promise<SkillItem[]> => getStoredItem("skills", initialSkills),
  saveSkills: async (skills: SkillItem[]): Promise<SkillItem[]> => {
    setStoredItem("skills", skills);
    return skills;
  },

  // Experience
  getExperiences: async (): Promise<ExperienceItem[]> => getStoredItem("experiences", initialExperiences),
  saveExperiences: async (exp: ExperienceItem[]): Promise<ExperienceItem[]> => {
    setStoredItem("experiences", exp);
    return exp;
  },

  // Education
  getEducation: async (): Promise<EducationItem[]> => getStoredItem("education", initialEducation),
  saveEducation: async (edu: EducationItem[]): Promise<EducationItem[]> => {
    setStoredItem("education", edu);
    return edu;
  },

  // Projects
  getProjects: async (): Promise<ProjectItem[]> => getStoredItem("projects", initialProjects),
  saveProjects: async (projects: ProjectItem[]): Promise<ProjectItem[]> => {
    setStoredItem("projects", projects);
    return projects;
  },

  // Certificates
  getCertificates: async (): Promise<CertificateItem[]> => getStoredItem("certificates", initialCertificates),
  saveCertificates: async (certs: CertificateItem[]): Promise<CertificateItem[]> => {
    setStoredItem("certificates", certs);
    return certs;
  },

  // Blogs
  getBlogs: async (): Promise<BlogPostItem[]> => getStoredItem("blogs", initialBlogs),
  saveBlogs: async (blogs: BlogPostItem[]): Promise<BlogPostItem[]> => {
    setStoredItem("blogs", blogs);
    return blogs;
  },

  // Contact Info
  getContactInfo: async (): Promise<ContactInfoData> => getStoredItem("contact_info", initialContact),
  updateContactInfo: async (info: ContactInfoData): Promise<ContactInfoData> => {
    setStoredItem("contact_info", info);
    return info;
  },

  // Contact Messages
  getMessages: async (): Promise<ContactMessage[]> => getStoredItem("messages", initialMessages),
  addMessage: async (msg: Omit<ContactMessage, "id" | "createdAt" | "read">): Promise<ContactMessage> => {
    const list = getStoredItem<ContactMessage[]>("messages", initialMessages);
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      createdAt: new Date().toISOString().replace("T", " ").substring(0, 16),
      read: false,
    };
    const updated = [newMsg, ...list];
    setStoredItem("messages", updated);
    return newMsg;
  },
  markMessageRead: async (id: string): Promise<ContactMessage[]> => {
    const list = getStoredItem<ContactMessage[]>("messages", initialMessages);
    const updated = list.map((m) => (m.id === id ? { ...m, read: true } : m));
    setStoredItem("messages", updated);
    return updated;
  },

  // Navigation & Footer
  getNavigation: async (): Promise<NavigationLink[]> => getStoredItem("navigation", initialNavigation),
  saveNavigation: async (nav: NavigationLink[]): Promise<NavigationLink[]> => {
    setStoredItem("navigation", nav);
    return nav;
  },
  getFooter: async (): Promise<FooterConfig> => getStoredItem("footer", initialFooter),
  updateFooter: async (footer: FooterConfig): Promise<FooterConfig> => {
    setStoredItem("footer", footer);
    return footer;
  },

  // Settings & SEO
  getSettings: async (): Promise<SiteSettings> => getStoredItem("settings", initialSettings),
  updateSettings: async (settings: SiteSettings): Promise<SiteSettings> => {
    setStoredItem("settings", settings);
    return settings;
  },
  getSeo: async (): Promise<SeoSettings> => getStoredItem("seo", initialSeo),
  updateSeo: async (seo: SeoSettings): Promise<SeoSettings> => {
    setStoredItem("seo", seo);
    return seo;
  },

  // Analytics Overview
  getAnalyticsSummary: async (): Promise<AnalyticsSummary> => {
    const projects = getStoredItem<ProjectItem[]>("projects", initialProjects);
    const certs = getStoredItem<CertificateItem[]>("certificates", initialCertificates);
    const msgs = getStoredItem<ContactMessage[]>("messages", initialMessages);
    const blogs = getStoredItem<BlogPostItem[]>("blogs", initialBlogs);

    return {
      totalVisitors: 4850,
      resumeDownloads: 342,
      totalProjects: projects.length,
      totalCertificates: certs.length,
      totalMessages: msgs.length,
      totalBlogPosts: blogs.length,
      githubClicks: 890,
      projectClicks: 1240,
      topViewedProject: projects[0]?.title || "Financial Engineering & ROI Calculator",
      weeklyVisitors: [
        { day: "Mon", count: 320 },
        { day: "Tue", count: 450 },
        { day: "Wed", count: 580 },
        { day: "Thu", count: 510 },
        { day: "Fri", count: 690 },
        { day: "Sat", count: 820 },
        { day: "Sun", count: 740 },
      ],
      monthlyVisitors: [
        { month: "Jan", count: 1200 },
        { month: "Feb", count: 1850 },
        { month: "Mar", count: 2400 },
        { month: "Apr", count: 3100 },
        { month: "May", count: 4200 },
        { month: "Jun", count: 4850 },
      ],
      deviceDistribution: [
        { device: "Desktop", percentage: 62 },
        { device: "Mobile", percentage: 32 },
        { device: "Tablet", percentage: 6 },
      ],
      browserDistribution: [
        { browser: "Chrome", percentage: 58 },
        { browser: "Safari", percentage: 22 },
        { browser: "Firefox", percentage: 12 },
        { browser: "Edge", percentage: 8 },
      ],
      trafficSources: [
        { source: "Direct", count: 1890 },
        { source: "GitHub", count: 1420 },
        { source: "Google / SEO", count: 980 },
        { source: "LinkedIn", count: 560 },
      ],
    };
  },
};
