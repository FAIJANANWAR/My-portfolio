export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  pdf?: string;
  skills: string[];
  category: string;
  credentialId?: string;
  verifyUrl: string;
  description: string;
  status?: "completed" | "in-progress";
}

export const certificates: Certificate[] = [
  {
    title: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
    issuer: "Red Hat Academy",
    date: "Nov 08, 2025",
    image: "/certificates/redhat-sysadmin-1.jpg",
    category: "DevOps",
    skills: ["Linux", "Red Hat Enterprise Linux", "System Administration", "DevOps", "Bash"],
    credentialId: "b5084c9a-ec08-4b39-aa12-82483eb4c802",
    verifyUrl: "https://www.credly.com/badges/b5084c9a-ec08-4b39-aa12-82483eb4c802/public_url",
    description: "Validates foundational skills in Red Hat Enterprise Linux system administration, covering command-line tasks, user/group permissions, package management, and basic system configurations."
  },
  {
    title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    issuer: "Google Cloud",
    date: "Apr 03, 2026",
    image: "/certificates/google-cloud-fundamentals.png",
    category: "Cloud",
    skills: ["Cloud Computing", "Google Cloud Platform (GCP)", "Infrastructure", "Compute Options"],
    credentialId: "23429448",
    verifyUrl: "https://www.skills.google/public_profiles/7cc4ce98-b9ea-4ae2-ac2b-0fd5095de941/badges/23429448",
    description: "Validates practical knowledge of cloud computing fundamentals, core services, compute options, and deployment concepts on the Google Cloud Platform."
  },
  {
    title: "API Security on Google Cloud's Apigee API Platform",
    issuer: "Google Cloud",
    date: "Apr 02, 2026",
    image: "/certificates/api-security-apigee.png",
    category: "Cyber Security",
    skills: ["API Security", "Google Cloud Platform (GCP)", "Apigee", "OAuth", "JWT", "API Gateway"],
    credentialId: "23411504",
    verifyUrl: "https://www.skills.google/public_profiles/7cc4ce98-b9ea-4ae2-ac2b-0fd5095de941/badges/23411504",
    description: "Validates knowledge of securing APIs on Google Cloud's Apigee API Platform, covering OAuth authorization, JSON Web Tokens (JWT), federated security, threat protection against malicious requests, and secure transport."
  },
  {
    title: "Google AI Essentials",
    issuer: "Google (via Coursera)",
    date: "Jul 01, 2026",
    image: "/certificates/google-ai-essentials.jpg",
    category: "AI",
    skills: ["AI Tools", "Prompt Engineering", "Productivity", "Responsible AI", "Content Generation"],
    credentialId: "04AZMXQ97XIK",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/04AZMXQ97XIK",
    description: "Validates competencies in leveraging AI tools for enhancing productivity, organizing research, drafting correspondence, writing effective prompts, and adhering to responsible AI practices."
  },
  {
    title: "Introduction to Front End Development",
    issuer: "Simplilearn SkillUp",
    date: "Mar 23, 2026",
    image: "/certificates/simplilearn-frontend.jpg",
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Front End Development", "Web Design"],
    credentialId: "9990091",
    verifyUrl: "https://simpli-web.app.link/e/mPcYoekqw4b",
    description: "Validates foundational skills in Front End Web Development, covering HTML structure, CSS layouts, JavaScript essentials, and responsive web design."
  },
  {
    title: "Web Development for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "Mar 15, 2026",
    image: "/certificates/simplilearn-webdev-beginners.jpg",
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Web Development", "Client-Side Scripting"],
    credentialId: "9964583",
    verifyUrl: "https://simpli-web.app.link/e/IzCtCSmqw4b",
    description: "Validates introductory skills in Web Development, introducing core concepts of web architectures, styling page structures, and scripting client-side logic."
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Jun 2026",
    image: "/certificates/anthropic-claude-101.jpg",
    category: "AI",
    skills: ["Claude", "LLMs", "AI", "Prompt Engineering", "Anthropic API"],
    credentialId: "CLA-101",
    verifyUrl: "https://www.anthropic.com",
    description: "Validates foundational competency in using Anthropic's Claude LLM models, configuring prompting instructions, and integrating the Anthropic API for generative AI workflows."
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Google (via Coursera)",
    date: "Jul 06, 2026",
    image: "/certificates/google-prompting-essentials.jpg",
    category: "AI",
    skills: ["AI Prompting", "Generative AI", "Content Generation", "Data Analysis", "Prompt Engineering"],
    credentialId: "PAL1K231P78X",
    verifyUrl: "https://coursera.org/verify/specialization/PAL1K231P78X",
    description: "Validates competencies in designing effective prompts, applying advanced prompting techniques to complete complex tasks, analyzing data, and leveraging generative AI as an expert partner."
  },
  {
    title: "Ethereum Developer Bootcamp / Solidity Developer",
    issuer: "Alchemy University / ConsenSys",
    date: "In Progress",
    image: "",
    category: "Blockchain",
    skills: ["Solidity", "Smart Contracts", "Web3.js", "Hardhat", "DeFi"],
    verifyUrl: "https://university.alchemy.com/",
    description: "Deepening knowledge of decentralization, smart contract security, and building decentralized applications (dApps) on Ethereum.",
    status: "in-progress"
  },
  {
    title: "Oracle Certified Professional: Java SE Developer",
    issuer: "Oracle",
    date: "In Progress",
    image: "",
    category: "Programming",
    skills: ["Java", "Object-Oriented Programming", "Design Patterns", "Concurrency"],
    verifyUrl: "https://education.oracle.com/",
    description: "Preparing for the Java SE professional credential to validate advanced programming techniques, clean OOP design, and performance optimizations.",
    status: "in-progress"
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "In Progress",
    image: "",
    category: "Data",
    skills: ["SQL", "R Programming", "Tableau", "Data Analysis", "Data Visualization"],
    verifyUrl: "https://www.coursera.org/professional-certificates/google-data-analytics",
    description: "Expanding capabilities into data-driven decision making, learning standard methodologies to collect, clean, analyze, and visualize complex datasets.",
    status: "in-progress"
  },
  {
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "In Progress",
    image: "",
    category: "Others",
    skills: ["ServiceNow ITSM", "Workflow Automation", "Platform Administration", "IT Service Management"],
    verifyUrl: "https://www.servicenow.com/services/training-and-certification.html",
    description: "Exploring enterprise platform administration and workflow automation, building knowledge to configure, customize, and maintain ITSM solutions.",
    status: "in-progress"
  }
];
