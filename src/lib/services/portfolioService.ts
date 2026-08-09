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

// Initial default data aligned strictly with FULL-STACK DEVELOPER positioning
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
  avatarUrl: "/avatar.jpg",
  stats: [
    { value: "2+", label: "Years Freelancing" },
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
    "Security & Cryptography (AES-GCM, Web Crypto API, JWT)",
  ],
  personalInfo: [
    { label: "Location", value: "India" },
    { label: "Experience", value: "2+ Years" },
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Degree", value: "B.Tech Computer Science" },
  ],
  timeline: [
    { year: "2024 - Present", title: "Lead Full-Stack Developer", description: "Engineering high-performance client applications, REST APIs, and database services for global clients." },
    { year: "2023 - 2024", title: "Full-Stack Software Engineer", description: "Developed full-stack microservices and real-time dashboard state management utilities." },
    { year: "2022 - 2023", title: "Web Developer & Open Source Contributor", description: "Contributed to distributed voting platforms and cryptographic Web Crypto API applications." },
  ],
  avatarUrl: "/about-avatar.jpg",
};

const initialSkills: SkillItem[] = [
  { id: "1", name: "React / Next.js", category: "Frontend", level: 95, experienceYears: "3+ yrs", iconName: "Code", color: "#D96B43", order: 1 },
  { id: "2", name: "TypeScript", category: "Languages", level: 90, experienceYears: "2+ yrs", iconName: "FileCode", color: "#3B5998", order: 2 },
  { id: "3", name: "Tailwind CSS", category: "Frontend", level: 95, experienceYears: "3+ yrs", iconName: "Palette", color: "#E08E53", order: 3 },
  { id: "4", name: "Node.js / Express", category: "Backend", level: 88, experienceYears: "2+ yrs", iconName: "Server", color: "#4A1D24", order: 4 },
  { id: "5", name: "PostgreSQL & Supabase", category: "Database", level: 85, experienceYears: "2+ yrs", iconName: "Database", color: "#2D1217", order: 5 },
  { id: "6", name: "REST APIs & GraphQL", category: "Backend", level: 88, experienceYears: "2+ yrs", iconName: "Boxes", color: "#D96B43", order: 6 },
  { id: "7", name: "Web Crypto / Cryptography", category: "Tools", level: 85, experienceYears: "2+ yrs", iconName: "Shield", color: "#4A1D24", order: 7 },
  { id: "8", name: "Docker / Vercel / Git", category: "DevOps", level: 88, experienceYears: "3+ yrs", iconName: "Cloud", color: "#3B5998", order: 8 },
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
];

const initialEducation: EducationItem[] = [
  {
    id: "edu-1",
    institute: "Computer Science & Engineering University",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    duration: "2020 - 2024",
    cgpa: "8.8 / 10",
    description: "Focused on Data Structures, Algorithms, Cryptography, Distributed Systems, Database Management, and Software Engineering.",
    order: 1,
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
];

const initialCertificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Full Stack Web Development Certification",
    issuer: "Coursera / Meta",
    issueDate: "2023",
    credentialId: "META-FS-98124",
    credentialUrl: "https://coursera.org/verify/META-FS-98124",
    category: "Development",
    tags: ["React", "Node.js", "System Architecture"],
    order: 1,
  },
  {
    id: "cert-2",
    title: "System Architecture & Security Certificate",
    issuer: "Cyfrin Updraft",
    issueDate: "2024",
    credentialId: "CYF-W3-5521",
    credentialUrl: "https://updraft.cyfrin.io/verify",
    category: "Security",
    tags: ["Security", "System Architecture", "APIs"],
    order: 2,
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
  phone: "+91 98765 43210",
  location: "India",
  whatsapp: "+91 98765 43210",
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
    subject: "Full-Stack Project Collaboration",
    message: "Hi Faijan, I loved your distributed voting system project! We are building a web platform and would love to hire you for frontend & backend integration.",
    createdAt: "2026-08-04 14:30",
    read: false,
  },
];

const initialNavigation: NavigationLink[] = [
  { id: "nav-1", label: "About", href: "#about", order: 1, isVisible: true },
  { id: "nav-2", label: "Skills", href: "#skills", order: 2, isVisible: true },
  { id: "nav-3", label: "Projects", href: "#projects", order: 3, isVisible: true },
  { id: "nav-4", label: "Experience", href: "#experience", order: 4, isVisible: true },
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
      topViewedProject: projects[1]?.title || "Distributed Voting & Proposal Engine",
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
