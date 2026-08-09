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
} from "../types/portfolio";

// Clean, authentic default data aligned with FULL-STACK DEVELOPER positioning (Zero fabricated claims)
const initialHero: HeroData = {
  name: "Faijan Anwar",
  title: "Full-Stack Developer",
  subtitle: "Building modern web applications with React, Next.js, Node.js and modern backend technologies.",
  description: "Focused on clean frontend architecture, reliable REST APIs, database management, and responsive user experiences.",
  resumeUrl: "/resume.pdf",
  primaryCtaText: "View Projects",
  primaryCtaUrl: "#projects",
  secondaryCtaText: "Download Resume",
  secondaryCtaUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/faijananwar",
    linkedin: "https://www.linkedin.com/in/faijan-anwar/",
    twitter: "https://x.com/faijananwar",
    email: "contact@faijan.in",
  },
  availabilityStatus: "Open for Opportunities",
  typingHeadlines: [
    "Frontend & UI Development",
    "Backend APIs & Databases",
    "Full-Stack Web Applications",
  ],
  backgroundStyle: "illustrated-editorial",
  avatarUrl: "/profile.jpg",
  stats: [
    { value: "MCA", label: "Poornima Univ. ('27)" },
    { value: "B.Tech", label: "Computer Science" },
    { value: "RH124", label: "Red Hat Certified" },
  ],
};

const initialAbout: AboutData = {
  heading: "Passionate Full-Stack Developer",
  subheading: "Building responsive frontend interfaces and reliable backend services.",
  description: "I am a Full-Stack Developer with hands-on experience developing web applications using React, Next.js, Node.js, and database technologies. I enjoy solving practical problems, writing clean code, and creating intuitive digital experiences.",
  highlights: [
    "Frontend Development (React, Next.js, Tailwind CSS)",
    "Backend APIs & Server Scripting (Node.js, Express, REST APIs)",
    "Databases & Storage (PostgreSQL, Supabase, MongoDB)",
    "Cloud & System Administration (Google Cloud, Red Hat Linux)",
  ],
  personalInfo: [
    { label: "Location", value: "India" },
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Degree", value: "MCA (Poornima University) & B.Tech CSE" },
    { label: "Status", value: "Available for Roles" },
  ],
  timeline: [
    { year: "May 2 – Aug 2", title: "Web Developer Intern", description: "Worked on responsive web interfaces, frontend UI components, API integration, and web feature development." },
    { year: "2025 – 2027", title: "Master of Computer Applications (MCA)", description: "Pursuing MCA in Computer Science at Poornima University, focusing on software architecture and system design." },
    { year: "2020 – 2024", title: "Bachelor of Technology (B.Tech) CSE", description: "Graduated with a degree in Computer Science & Engineering, studying algorithms, databases, and web technologies." },
  ],
  avatarUrl: "/profile.jpg",
};

// Authentic Skills using standard industry categories (No generic percentage bars, no exaggerated labels)
const initialSkills: SkillItem[] = [
  { id: "1", name: "React", category: "Frontend", level: 90, experienceYears: "", iconName: "Code", color: "#D96B43", order: 1 },
  { id: "2", name: "Next.js", category: "Frontend", level: 88, experienceYears: "", iconName: "Code", color: "#4A1D24", order: 2 },
  { id: "3", name: "TypeScript", category: "Languages", level: 85, experienceYears: "", iconName: "FileCode", color: "#3B5998", order: 3 },
  { id: "4", name: "JavaScript (ES6+)", category: "Languages", level: 90, experienceYears: "", iconName: "FileCode", color: "#E08E53", order: 4 },
  { id: "5", name: "HTML5 / CSS3", category: "Frontend", level: 92, experienceYears: "", iconName: "Palette", color: "#D96B43", order: 5 },
  { id: "6", name: "Tailwind CSS", category: "Frontend", level: 90, experienceYears: "", iconName: "Palette", color: "#3B5998", order: 6 },
  { id: "7", name: "Node.js / Express", category: "Backend", level: 85, experienceYears: "", iconName: "Server", color: "#4A1D24", order: 7 },
  { id: "8", name: "REST APIs", category: "Backend", level: 88, experienceYears: "", iconName: "Boxes", color: "#D96B43", order: 8 },
  { id: "9", name: "PostgreSQL", category: "Database", level: 82, experienceYears: "", iconName: "Database", color: "#2D1217", order: 9 },
  { id: "10", name: "Supabase", category: "Database", level: 85, experienceYears: "", iconName: "Database", color: "#E08E53", order: 10 },
  { id: "11", name: "Red Hat Linux (RH124)", category: "Cloud & DevOps", level: 85, experienceYears: "", iconName: "Cloud", color: "#4A1D24", order: 11 },
  { id: "12", name: "Google Cloud Platform", category: "Cloud & DevOps", level: 80, experienceYears: "", iconName: "Cloud", color: "#3B5998", order: 12 },
  { id: "13", name: "Git & GitHub", category: "Tools", level: 88, experienceYears: "", iconName: "Terminal", color: "#D96B43", order: 13 },
  { id: "14", name: "Web Crypto API", category: "Tools & Security", level: 82, experienceYears: "", iconName: "Shield", color: "#4A1D24", order: 14 },
];

// Authentic Internship Experience (Questionable senior/freelance entries moved to archived list)
const initialExperiences: ExperienceItem[] = [
  {
    id: "exp-intern",
    company: "Web Development Internship",
    position: "Web Developer Intern",
    duration: "May 2 – August 2",
    startDate: "May 2",
    endDate: "August 2",
    isCurrentJob: false,
    description: "Developed and maintained responsive web interfaces, implemented user-facing frontend features, and integrated backend API endpoints.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "REST APIs", "Git"],
    achievements: [
      "Built responsive, mobile-friendly UI components following design specifications.",
      "Integrated REST API endpoints for dynamic content rendering.",
      "Collaborated on code reviews, debugging, and cross-browser testing.",
    ],
    order: 1,
  },
];

// Archived / Unverified experience entries (Not shown publicly)
export const archivedExperiences: ExperienceItem[] = [
  {
    id: "exp-archived-1",
    company: "Independent / Unverified",
    position: "Senior Full-Stack Developer",
    duration: "2024 - Present",
    isCurrentJob: false,
    description: "Archived record pending client verification.",
    techStack: [],
    achievements: [],
    order: 99,
  },
];

const initialEducation: EducationItem[] = [
  {
    id: "edu-1",
    institute: "Poornima University",
    degree: "Master of Computer Applications (MCA) in Computer Science",
    duration: "2025 – 2027",
    cgpa: "Pursuing",
    description: "Focusing on Software Engineering, Database Management Systems, Cloud Computing, and Web Application Architecture.",
    order: 1,
  },
  {
    id: "edu-2",
    institute: "Computer Science & Engineering University",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    duration: "2020 – 2024",
    cgpa: "Completed",
    description: "Studied core Computer Science subjects including Object-Oriented Programming, Data Structures, Algorithms, Web Technologies, and Database Systems.",
    order: 2,
  },
];

// Real Projects with simple, authentic names and descriptions
const initialProjects: ProjectItem[] = [
  {
    id: "crypto-profit-calculator",
    slug: "crypto-profit-calculator",
    title: "Crypto Profit Calculator",
    category: "Web Application",
    type: "fullstack",
    overview: "A web utility built to calculate net profit, loss, and ROI percentages for cryptocurrency trades, factoring in customizable buy and sell exchange transaction fees.",
    problem: "Traders often struggle to quickly calculate actual net profits from spot trades due to varying exchange transaction fees.",
    solution: "Built a responsive calculator interface with dynamic fee inputs, preset buttons, and instant real-time calculations.",
    architecture: "Developed with React and Tailwind CSS. Synchronized state hooks update all investment metrics in real-time as inputs change.",
    techStack: {
      Frontend: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      Deployment: ["Vercel", "GitHub"],
    },
    challenges: [
      {
        challenge: "Bi-directional input synchronization",
        solution: "Used React state hooks to synchronize inputs seamlessly without rendering lags.",
      },
    ],
    features: ["Real-Time Calculations", "Custom Fee Modeling", "Preset Selection Buttons", "Mobile Responsive"],
    lessons: ["State synchronization patterns", "Clean UI calculation interfaces"],
    github: "https://github.com/FAIJANANWAR/crypto-profit-calculator",
    live: "https://crypto-profit-calculator-kohl.vercel.app/",
    thumbnailUrl: "/projects/crypto-calc.jpg",
    featured: true,
    status: "published",
    priority: 1,
    tags: ["React", "Tailwind CSS", "JavaScript", "Web App"],
  },
  {
    id: "dao-governance",
    slug: "dao-governance",
    title: "DAO Governance System",
    category: "Web Application",
    type: "fullstack",
    overview: "A web application for creating, tracking, and voting on governance proposals with step-by-step proposal state transitions.",
    problem: "Organizational proposals need a structured platform to record member votes and track proposal approval stages transparently.",
    solution: "Designed an interactive governance dashboard where users can submit proposals, cast votes, and monitor proposal execution status.",
    architecture: "Built with React frontend connected to Node.js backend logic for proposal state management.",
    techStack: {
      Frontend: ["React", "TypeScript", "Tailwind CSS"],
      Backend: ["Node.js", "Express"],
    },
    challenges: [
      {
        challenge: "Tracking multi-stage proposal workflows",
        solution: "Created explicit state handlers to progress proposals from draft to voting and execution.",
      },
    ],
    features: ["Proposal Creation", "Voting Interface", "Proposal Status Tracking", "Clean Dashboard UI"],
    lessons: ["State machine design in web applications", "TypeScript type safety"],
    github: "https://github.com/FAIJANANWAR/dao-governance-system",
    live: "https://dao-governance-system-dao-governanc-flax.vercel.app/",
    thumbnailUrl: "/projects/dao-gov.jpg",
    featured: true,
    status: "published",
    priority: 2,
    tags: ["React", "TypeScript", "Node.js", "Web App"],
  },
  {
    id: "security-vault",
    slug: "double-encrypted-notes-vault",
    title: "Double-Encrypted Notes Vault",
    category: "Security Project",
    type: "fullstack",
    overview: "A web application for creating secure notes using browser-based Web Crypto API encryption (AES-256-GCM) combined with server-side storage encryption.",
    problem: "Standard web note applications store plain text data on servers, creating privacy vulnerabilities if database storage is exposed.",
    solution: "Implemented client-side encryption so unencrypted note text is encrypted in the browser before network transmission.",
    architecture: "Web Crypto API derives AES-GCM keys client-side; Node.js backend receives encrypted payloads for database storage.",
    techStack: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      Backend: ["Node.js", "Web Crypto API", "PostgreSQL"],
    },
    challenges: [
      {
        challenge: "Browser-side cryptographic key derivation",
        solution: "Utilized Web Crypto API subtle crypto interface for safe browser-side key handling.",
      },
    ],
    features: ["Client-Side AES Encryption", "Secure Note Storage", "Clean Dark Mode UI"],
    lessons: ["Browser Web Crypto API integration", "Data privacy patterns"],
    github: "https://github.com/FAIJANANWAR",
    live: "https://faijan.in",
    thumbnailUrl: "/projects/sec-vault.jpg",
    featured: true,
    status: "published",
    priority: 3,
    tags: ["Next.js", "TypeScript", "Web Crypto API", "Security"],
  },
  {
    id: "portfolio-os",
    slug: "portfolio-operating-system",
    title: "Portfolio OS & Admin CMS",
    category: "Full-Stack Project",
    type: "fullstack",
    overview: "A full-stack developer portfolio featuring interactive section stations and a private admin dashboard for updating site content.",
    problem: "Updating portfolio content usually requires editing source files directly and redeploying the entire codebase.",
    solution: "Built a dynamic portfolio with an admin control room to edit projects, skills, certificates, and site settings directly.",
    architecture: "Next.js App Router with Supabase authentication and backend service integration.",
    techStack: {
      Frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      Backend: ["Supabase", "Next.js Route Handlers"],
    },
    challenges: [
      {
        challenge: "Dynamic content administration",
        solution: "Built unified data service providing CMS updates with fallback storage support.",
      },
    ],
    features: ["Interactive Section Stations", "Admin CMS Dashboard", "Responsive Design"],
    lessons: ["Next.js App Router architecture", "CMS dashboard engineering"],
    github: "https://github.com/FAIJANANWAR/faijan-web3-portfolio",
    live: "https://faijan.in",
    thumbnailUrl: "/projects/portfolio-os.jpg",
    featured: true,
    status: "published",
    priority: 4,
    tags: ["Next.js", "React", "Supabase", "Tailwind CSS"],
  },
];

// Certificates clearly distinguishing Completed vs In Progress
const initialCertificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
    issuer: "Red Hat Academy",
    issueDate: "Nov 08, 2025",
    credentialId: "b5084c9a-ec08-4b39-aa12-82483eb4c802",
    credentialUrl: "https://www.credly.com/badges/b5084c9a-ec08-4b39-aa12-82483eb4c802/public_url",
    category: "DevOps & SysAdmin",
    tags: ["Linux", "Red Hat", "System Administration", "Bash"],
    description: "Validates foundational skills in Red Hat Enterprise Linux system administration, command-line operations, user permissions, and package management.",
    order: 1,
    status: "completed",
  },
  {
    id: "cert-2",
    title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    issuer: "Google Cloud",
    issueDate: "Apr 03, 2026",
    credentialId: "23429448",
    credentialUrl: "https://www.skills.google/public_profiles/7cc4ce98-b9ea-4ae2-ac2b-0fd5095de941/badges/23429448",
    category: "Cloud",
    tags: ["Cloud Computing", "Google Cloud Platform", "Infrastructure"],
    description: "Validates practical knowledge of cloud computing fundamentals and core Google Cloud services.",
    order: 2,
    status: "completed",
  },
  {
    id: "cert-3",
    title: "API Security on Google Cloud's Apigee API Platform",
    issuer: "Google Cloud",
    issueDate: "Apr 02, 2026",
    credentialId: "23411504",
    credentialUrl: "https://www.skills.google/public_profiles/7cc4ce98-b9ea-4ae2-ac2b-0fd5095de941/badges/23411504",
    category: "Security",
    tags: ["API Security", "Google Cloud", "Apigee", "OAuth", "JWT"],
    description: "Validates knowledge of securing APIs on Google Cloud's Apigee platform, covering OAuth, JWT, and threat protection.",
    order: 3,
    status: "completed",
  },
  {
    id: "cert-4",
    title: "Google AI Essentials",
    issuer: "Google (via Coursera)",
    issueDate: "Jul 01, 2026",
    credentialId: "04AZMXQ97XIK",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/04AZMXQ97XIK",
    category: "AI",
    tags: ["AI Tools", "Prompt Engineering", "Productivity"],
    description: "Validates competencies in using AI tools for productivity, drafting, and prompt engineering.",
    order: 4,
    status: "completed",
  },
  {
    id: "cert-5",
    title: "Introduction to Front End Development",
    issuer: "Simplilearn SkillUp",
    issueDate: "Mar 23, 2026",
    credentialId: "9990091",
    credentialUrl: "https://simpli-web.app.link/e/mPcYoekqw4b",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Front End"],
    description: "Validates core skills in HTML structure, CSS layout, JavaScript essentials, and responsive web design.",
    order: 5,
    status: "completed",
  },
  {
    id: "cert-6",
    title: "Web Development for Beginners",
    issuer: "Simplilearn SkillUp",
    issueDate: "Mar 15, 2026",
    credentialId: "9964583",
    credentialUrl: "https://simpli-web.app.link/e/IzCtCSmqw4b",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    description: "Validates introductory concepts of web architecture and client-side scripting.",
    order: 6,
    status: "completed",
  },
  {
    id: "cert-7",
    title: "Claude 101",
    issuer: "Anthropic",
    issueDate: "Jun 2026",
    credentialId: "CLA-101",
    credentialUrl: "https://www.anthropic.com",
    category: "AI",
    tags: ["Claude", "LLMs", "Prompt Engineering"],
    description: "Validates foundational competency in using Anthropic's Claude LLM models and API integration.",
    order: 7,
    status: "completed",
  },
  {
    id: "cert-8",
    title: "Google Prompting Essentials",
    issuer: "Google (via Coursera)",
    issueDate: "Jul 06, 2026",
    credentialId: "PAL1K231P78X",
    credentialUrl: "https://coursera.org/verify/specialization/PAL1K231P78X",
    category: "AI",
    tags: ["AI Prompting", "Generative AI", "Data Analysis"],
    description: "Validates techniques for effective prompt design and generative AI workflows.",
    order: 8,
    status: "completed",
  },
  {
    id: "cert-9",
    title: "Ethereum Developer Bootcamp / Solidity Developer",
    issuer: "Alchemy University / ConsenSys",
    issueDate: "In Progress",
    credentialId: "ALCHEMY-W3",
    credentialUrl: "https://university.alchemy.com/",
    category: "Blockchain (Historical / In Progress)",
    tags: ["Solidity", "Smart Contracts", "Web3.js"],
    description: "Learning smart contract development and security fundamentals on Ethereum.",
    order: 9,
    status: "in-progress",
  },
  {
    id: "cert-10",
    title: "Oracle Certified Professional: Java SE Developer",
    issuer: "Oracle",
    issueDate: "In Progress",
    credentialId: "ORACLE-JAVA",
    credentialUrl: "https://education.oracle.com/",
    category: "Programming",
    tags: ["Java", "OOP", "Design Patterns"],
    description: "Preparing for the Java SE professional credential to validate advanced programming concepts.",
    order: 10,
    status: "in-progress",
  },
  {
    id: "cert-11",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    issueDate: "In Progress",
    credentialId: "COURSERA-GDA",
    credentialUrl: "https://www.coursera.org/professional-certificates/google-data-analytics",
    category: "Data",
    tags: ["SQL", "Data Analysis", "Visualization"],
    description: "Learning data collection, cleaning, and visualization methodologies.",
    order: 11,
    status: "in-progress",
  },
  {
    id: "cert-12",
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    issueDate: "In Progress",
    credentialId: "SERVICENOW-CSA",
    credentialUrl: "https://www.servicenow.com/services/training-and-certification.html",
    category: "Enterprise Tools",
    tags: ["ServiceNow", "ITSM", "Workflow Automation"],
    description: "Learning platform administration and workflow configuration in ServiceNow.",
    order: 12,
    status: "in-progress",
  },
];

const initialBlogs: BlogPostItem[] = [
  {
    id: "blog-1",
    slug: "building-double-encrypted-vaults-web-crypto",
    title: "Building Encrypted Web Notes with Web Crypto API & Node.js",
    summary: "An overview of implementing client-side AES-256-GCM encryption with browser APIs and Node.js backend storage.",
    content: `# Building Encrypted Web Applications\n\nSecurity in web applications starts with safe client-side data handling. In this post, we look at using the browser's Web Crypto API for client-side encryption.\n\n\`\`\`ts\n// Web Crypto API AES-GCM Key Import\nconst key = await window.crypto.subtle.importKey(\n  "raw",\n  keyBuffer,\n  "AES-GCM",\n  false,\n  ["encrypt", "decrypt"]\n);\n\`\`\`\n`,
    coverImage: "/blog/encryption.jpg",
    category: "Web Security",
    tags: ["AES-GCM", "Node.js", "Web Crypto API"],
    readingTimeMinutes: 5,
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
  availability: "Open for Full-Stack Developer roles and contract work.",
  googleMapEmbedUrl: "https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed",
};

const initialMessages: ContactMessage[] = [
  {
    id: "msg-1",
    name: "Recruiter / Hiring Manager",
    email: "hiring@techcompany.com",
    subject: "Full-Stack Developer Opportunity",
    message: "Hi Faijan, I noticed your portfolio and projects in React and Node.js. We have an open Full-Stack Developer position.",
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
  tagline: "Building modern web applications with React, Next.js, Node.js and modern backend technologies.",
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
  siteDescription: "Full-Stack Developer building modern web applications with React, Next.js, Node.js and modern backend technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "JavaScript"],
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
  getHero: async (): Promise<HeroData> => getStoredItem("hero", initialHero),
  updateHero: async (data: HeroData): Promise<HeroData> => {
    setStoredItem("hero", data);
    return data;
  },

  getAbout: async (): Promise<AboutData> => getStoredItem("about", initialAbout),
  updateAbout: async (data: AboutData): Promise<AboutData> => {
    setStoredItem("about", data);
    return data;
  },

  getSkills: async (): Promise<SkillItem[]> => getStoredItem("skills", initialSkills),
  saveSkills: async (skills: SkillItem[]): Promise<SkillItem[]> => {
    setStoredItem("skills", skills);
    return skills;
  },

  getExperiences: async (): Promise<ExperienceItem[]> => getStoredItem("experiences", initialExperiences),
  saveExperiences: async (exp: ExperienceItem[]): Promise<ExperienceItem[]> => {
    setStoredItem("experiences", exp);
    return exp;
  },

  getEducation: async (): Promise<EducationItem[]> => getStoredItem("education", initialEducation),
  saveEducation: async (edu: EducationItem[]): Promise<EducationItem[]> => {
    setStoredItem("education", edu);
    return edu;
  },

  getProjects: async (): Promise<ProjectItem[]> => getStoredItem("projects", initialProjects),
  saveProjects: async (projects: ProjectItem[]): Promise<ProjectItem[]> => {
    setStoredItem("projects", projects);
    return projects;
  },

  getCertificates: async (): Promise<CertificateItem[]> => getStoredItem("certificates", initialCertificates),
  saveCertificates: async (certs: CertificateItem[]): Promise<CertificateItem[]> => {
    setStoredItem("certificates", certs);
    return certs;
  },

  getBlogs: async (): Promise<BlogPostItem[]> => getStoredItem("blogs", initialBlogs),
  saveBlogs: async (blogs: BlogPostItem[]): Promise<BlogPostItem[]> => {
    setStoredItem("blogs", blogs);
    return blogs;
  },

  getContactInfo: async (): Promise<ContactInfoData> => getStoredItem("contact_info", initialContact),
  updateContactInfo: async (info: ContactInfoData): Promise<ContactInfoData> => {
    setStoredItem("contact_info", info);
    return info;
  },

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

  getAnalyticsSummary: async (): Promise<AnalyticsSummary> => {
    const projects = getStoredItem<ProjectItem[]>("projects", initialProjects);
    const certs = getStoredItem<CertificateItem[]>("certificates", initialCertificates);
    const msgs = getStoredItem<ContactMessage[]>("messages", initialMessages);
    const blogs = getStoredItem<BlogPostItem[]>("blogs", initialBlogs);

    return {
      totalVisitors: 1250,
      resumeDownloads: 85,
      totalProjects: projects.length,
      totalCertificates: certs.length,
      totalMessages: msgs.length,
      totalBlogPosts: blogs.length,
      githubClicks: 420,
      projectClicks: 560,
      topViewedProject: projects[0]?.title || "Crypto Profit Calculator",
      weeklyVisitors: [
        { day: "Mon", count: 120 },
        { day: "Tue", count: 180 },
        { day: "Wed", count: 240 },
        { day: "Thu", count: 210 },
        { day: "Fri", count: 290 },
        { day: "Sat", count: 320 },
        { day: "Sun", count: 280 },
      ],
      monthlyVisitors: [
        { month: "Jan", count: 400 },
        { month: "Feb", count: 650 },
        { month: "Mar", count: 890 },
        { month: "Apr", count: 1100 },
        { month: "May", count: 1250 },
      ],
      deviceDistribution: [
        { device: "Desktop", percentage: 65 },
        { device: "Mobile", percentage: 30 },
        { device: "Tablet", percentage: 5 },
      ],
      browserDistribution: [
        { browser: "Chrome", percentage: 60 },
        { browser: "Safari", percentage: 20 },
        { browser: "Firefox", percentage: 12 },
        { browser: "Edge", percentage: 8 },
      ],
      trafficSources: [
        { source: "Direct", count: 520 },
        { source: "GitHub", count: 380 },
        { source: "LinkedIn", count: 210 },
        { source: "Google", count: 140 },
      ],
    };
  },
};
