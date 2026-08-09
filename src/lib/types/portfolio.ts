export interface HeroData {
  id?: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  resumeUrl: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  availabilityStatus: string;
  typingHeadlines: string[];
  backgroundStyle: string;
  avatarUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface AboutData {
  id?: string;
  heading: string;
  subheading: string;
  description: string;
  highlights: string[];
  personalInfo: {
    label: string;
    value: string;
  }[];
  timeline: {
    year: string;
    title: string;
    description: string;
  }[];
  avatarUrl: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Blockchain" | "Database" | "Cloud" | "DevOps" | "Tools" | "Languages";
  level: number; // 0 - 100
  experienceYears: string;
  iconName: string;
  color: string;
  order: number;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  isCurrentJob: boolean;
  description: string;
  logoUrl?: string;
  techStack: string[];
  achievements: string[];
  order: number;
}

export interface EducationItem {
  id: string;
  institute: string;
  degree: string;
  duration: string;
  cgpa: string;
  description: string;
  logoUrl?: string;
  order: number;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectVersion {
  versionId: string;
  timestamp: string;
  title: string;
  description: string;
  overview: string;
  techStack: Record<string, string[]>;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: "fullstack" | "web3" | "mobile" | "ai" | "security";
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: Record<string, string[]>;
  challenges: ProjectChallenge[];
  features: string[];
  lessons: string[];
  github: string;
  live: string;
  thumbnailUrl?: string;
  galleryUrls?: string[];
  videoUrl?: string;
  featured: boolean;
  status: "published" | "draft" | "archived";
  priority: number;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  versions?: ProjectVersion[];
  viewsCount?: number;
  clicksCount?: number;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  credentialUrl: string;
  imageUrl?: string;
  pdfUrl?: string;
  tags: string[];
  category: string;
  order: number;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string; // Markdown / Rich text
  coverImage: string;
  category: string;
  tags: string[];
  readingTimeMinutes: number;
  publishedAt: string;
  status: "published" | "draft" | "archived";
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ContactInfoData {
  email: string;
  phone: string;
  location: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  twitter: string;
  availability: string;
  googleMapEmbedUrl: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface NavigationLink {
  id: string;
  label: string;
  href: string;
  order: number;
  isVisible: boolean;
  isExternal?: boolean;
}

export interface FooterConfig {
  copyrightText: string;
  tagline: string;
  quickLinks: { label: string; href: string }[];
  socialLinks: { platform: string; url: string }[];
}

export interface SiteSettings {
  themeMode: "dark" | "light" | "system";
  accentColor: string;
  customCursor: boolean;
  animationsEnabled: boolean;
  loadingScreenEnabled: boolean;
  fontFamily: string;
}

export interface SeoSettings {
  siteTitle: string;
  siteDescription: string;
  keywords: string[];
  ogImageUrl: string;
  twitterHandle: string;
  canonicalUrl: string;
  robotsTxt: string;
  schemaJson: string;
}

export interface AnalyticsEvent {
  id?: string;
  eventType: "page_view" | "resume_download" | "project_click" | "github_click" | "contact_click";
  path: string;
  referrer?: string;
  device?: string;
  browser?: string;
  country?: string;
  city?: string;
  metadata?: Record<string, unknown>;
  createdAt?: string;
}

export interface AnalyticsSummary {
  totalVisitors: number;
  resumeDownloads: number;
  totalProjects: number;
  totalCertificates: number;
  totalMessages: number;
  totalBlogPosts: number;
  githubClicks: number;
  projectClicks: number;
  topViewedProject: string;
  weeklyVisitors: { day: string; count: number }[];
  monthlyVisitors: { month: string; count: number }[];
  deviceDistribution: { device: string; percentage: number }[];
  browserDistribution: { browser: string; percentage: number }[];
  trafficSources: { source: string; count: number }[];
}

export interface AuditLogItem {
  id: string;
  action: string;
  entity: string;
  entityId: string;
  timestamp: string;
  performedBy: string;
}
