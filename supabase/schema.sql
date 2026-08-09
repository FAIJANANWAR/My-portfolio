-- Portfolio OS Database Schema for Supabase PostgreSQL

-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Hero Content Table
CREATE TABLE IF NOT EXISTS hero_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL DEFAULT 'Faijan Anwar',
  title TEXT NOT NULL DEFAULT 'Full Stack Developer & Web3 Developer',
  subtitle TEXT NOT NULL DEFAULT 'Architecting high-performance web applications and decentralized smart contracts',
  description TEXT NOT NULL,
  resume_url TEXT NOT NULL DEFAULT '/resume.pdf',
  primary_cta_text TEXT NOT NULL DEFAULT 'Explore Work',
  primary_cta_url TEXT NOT NULL DEFAULT '#projects',
  secondary_cta_text TEXT NOT NULL DEFAULT 'Download CV',
  secondary_cta_url TEXT NOT NULL DEFAULT '/resume.pdf',
  github_url TEXT DEFAULT 'https://github.com/faijananwar',
  linkedin_url TEXT DEFAULT 'https://www.linkedin.com/in/faijan-anwar/',
  twitter_url TEXT DEFAULT 'https://x.com/faijananwar',
  email TEXT DEFAULT 'contact@faijan.in',
  availability_status TEXT DEFAULT 'Available for Opportunities',
  typing_headlines JSONB DEFAULT '["Modern Web Applications", "Secure Full-Stack Systems", "Decentralized Web3 Solutions"]'::jsonb,
  background_style TEXT DEFAULT 'cyber-gradient',
  avatar_url TEXT DEFAULT '/avatar.jpg',
  stats JSONB DEFAULT '[{"label": "Years Freelancing", "value": "2+"}, {"label": "Projects Delivered", "value": "20+"}, {"label": "Client Satisfaction", "value": "100%"}]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. About Content Table
CREATE TABLE IF NOT EXISTS about_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  heading TEXT NOT NULL DEFAULT 'Architecting the Future of Web & Decentralized Systems',
  subheading TEXT DEFAULT 'Passionate software engineer bridging traditional full-stack architecture with Web3 innovations.',
  description TEXT NOT NULL,
  highlights JSONB DEFAULT '["Full-Stack Engineering", "Web3 & Smart Contracts", "Security & Encryption", "Performance & Scaling"]'::jsonb,
  personal_info JSONB DEFAULT '[{"label": "Location", "value": "India"}, {"label": "Experience", "value": "2+ Years"}, {"label": "Degree", "value": "B.Tech Computer Science"}]'::jsonb,
  timeline JSONB DEFAULT '[]'::jsonb,
  avatar_url TEXT DEFAULT '/about-avatar.jpg',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Skills Table
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Frontend', 'Backend', 'Blockchain', 'Database', 'Cloud', 'DevOps', 'Tools', 'Languages')),
  level INT NOT NULL DEFAULT 85 CHECK (level BETWEEN 0 AND 100),
  experience_years TEXT NOT NULL DEFAULT '2+ yrs',
  icon_name TEXT DEFAULT 'Code',
  color TEXT DEFAULT '#6366f1',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Experiences Table
CREATE TABLE IF NOT EXISTS experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  duration TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  is_current_job BOOLEAN DEFAULT FALSE,
  description TEXT NOT NULL,
  logo_url TEXT,
  tech_stack JSONB DEFAULT '[]'::jsonb,
  achievements JSONB DEFAULT '[]'::jsonb,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Education Table
CREATE TABLE IF NOT EXISTS education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  institute TEXT NOT NULL,
  degree TEXT NOT NULL,
  duration TEXT NOT NULL,
  cgpa TEXT,
  description TEXT,
  logo_url TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('fullstack', 'web3', 'mobile', 'ai', 'security')),
  overview TEXT NOT NULL,
  problem TEXT NOT NULL,
  solution TEXT NOT NULL,
  architecture TEXT NOT NULL,
  tech_stack JSONB NOT NULL DEFAULT '{}'::jsonb,
  challenges JSONB DEFAULT '[]'::jsonb,
  features JSONB DEFAULT '[]'::jsonb,
  lessons JSONB DEFAULT '[]'::jsonb,
  github_url TEXT DEFAULT '',
  live_url TEXT DEFAULT '',
  thumbnail_url TEXT,
  gallery_urls JSONB DEFAULT '[]'::jsonb,
  video_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
  priority INT DEFAULT 0,
  tags JSONB DEFAULT '[]'::jsonb,
  seo_title TEXT,
  seo_description TEXT,
  views_count INT DEFAULT 0,
  clicks_count INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Project Version History
CREATE TABLE IF NOT EXISTS project_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  version_number INT NOT NULL,
  snapshot JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Certificates Table
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  issue_date TEXT NOT NULL,
  expiry_date TEXT,
  credential_id TEXT,
  credential_url TEXT,
  image_url TEXT,
  pdf_url TEXT,
  tags JSONB DEFAULT '[]'::jsonb,
  category TEXT DEFAULT 'Development',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Blogs Table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  category TEXT NOT NULL,
  tags JSONB DEFAULT '[]'::jsonb,
  reading_time_minutes INT DEFAULT 5,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
  featured BOOLEAN DEFAULT FALSE,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Contact Info & Messages
CREATE TABLE IF NOT EXISTS contact_info (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL DEFAULT 'contact@faijan.in',
  phone TEXT DEFAULT '+91 98765 43210',
  location TEXT DEFAULT 'India',
  whatsapp TEXT DEFAULT '+91 98765 43210',
  github TEXT DEFAULT 'https://github.com/faijananwar',
  linkedin TEXT DEFAULT 'https://www.linkedin.com/in/faijan-anwar/',
  twitter TEXT DEFAULT 'https://x.com/faijananwar',
  availability TEXT DEFAULT 'Open for contract & full-time roles',
  google_map_embed_url TEXT DEFAULT 'https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. Navigation Links & Footer Config
CREATE TABLE IF NOT EXISTS navigation_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  label TEXT NOT NULL,
  href TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  is_visible BOOLEAN DEFAULT TRUE,
  is_external BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS footer_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  copyright_text TEXT DEFAULT '© 2026 Faijan Anwar. All rights reserved.',
  tagline TEXT DEFAULT 'Building high-performance decentralized & full-stack web applications.',
  quick_links JSONB DEFAULT '[{"label": "About", "href": "#about"}, {"label": "Projects", "href": "#projects"}, {"label": "Contact", "href": "#contact"}]'::jsonb,
  social_links JSONB DEFAULT '[{"platform": "GitHub", "url": "https://github.com/faijananwar"}, {"platform": "LinkedIn", "url": "https://www.linkedin.com/in/faijan-anwar/"}]'::jsonb
);

-- 12. Site & SEO Settings
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  theme_mode TEXT DEFAULT 'dark',
  accent_color TEXT DEFAULT '#6366f1',
  custom_cursor BOOLEAN DEFAULT TRUE,
  animations_enabled BOOLEAN DEFAULT TRUE,
  loading_screen_enabled BOOLEAN DEFAULT TRUE,
  font_family TEXT DEFAULT 'Inter'
);

CREATE TABLE IF NOT EXISTS seo_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_title TEXT DEFAULT 'Faijan Anwar | Full Stack Developer & Web3 Developer',
  site_description TEXT DEFAULT 'Full Stack Developer with expertise in React, Node.js, TypeScript, PostgreSQL, Supabase, security engineering, and blockchain development.',
  keywords JSONB DEFAULT '["Full Stack", "Web3", "React", "Node.js", "Solidity"]'::jsonb,
  og_image_url TEXT DEFAULT '/og-image.jpg',
  twitter_handle TEXT DEFAULT '@faijananwar',
  canonical_url TEXT DEFAULT 'https://faijan.in',
  robots_txt TEXT DEFAULT 'User-agent: *\nAllow: /',
  schema_json JSONB DEFAULT '{}'::jsonb
);

-- 13. Analytics Events & Audit Logs
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type TEXT NOT NULL,
  path TEXT NOT NULL,
  referrer TEXT,
  device TEXT,
  browser TEXT,
  country TEXT,
  city TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  action TEXT NOT NULL,
  entity TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  performed_by TEXT NOT NULL DEFAULT 'Admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for maximum performance
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_analytics_created ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_type ON analytics_events(event_type);

-- Row Level Security (RLS)
ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE footer_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Public Read Policy for Portfolio Content
CREATE POLICY "Public Read Hero" ON hero_content FOR SELECT USING (true);
CREATE POLICY "Public Read About" ON about_content FOR SELECT USING (true);
CREATE POLICY "Public Read Skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Public Read Experiences" ON experiences FOR SELECT USING (true);
CREATE POLICY "Public Read Education" ON education FOR SELECT USING (true);
CREATE POLICY "Public Read Projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public Read Certificates" ON certificates FOR SELECT USING (true);
CREATE POLICY "Public Read Blogs" ON blogs FOR SELECT USING (true);
CREATE POLICY "Public Read Contact Info" ON contact_info FOR SELECT USING (true);
CREATE POLICY "Public Read Navigation" ON navigation_links FOR SELECT USING (true);
CREATE POLICY "Public Read Footer" ON footer_config FOR SELECT USING (true);
CREATE POLICY "Public Read Site Settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public Read SEO Settings" ON seo_settings FOR SELECT USING (true);
CREATE POLICY "Public Insert Messages" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Analytics" ON analytics_events FOR INSERT WITH CHECK (true);

-- Admin Full Control Policy (Authenticated Users)
CREATE POLICY "Admin Full Hero" ON hero_content FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full About" ON about_content FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Skills" ON skills FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Experiences" ON experiences FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Education" ON education FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Projects" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Certificates" ON certificates FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Blogs" ON blogs FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Contact Info" ON contact_info FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Messages" ON contact_messages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Navigation" ON navigation_links FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Footer" ON footer_config FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Site Settings" ON site_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full SEO Settings" ON seo_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Analytics" ON analytics_events FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Audit" ON audit_logs FOR ALL USING (auth.role() = 'authenticated');
