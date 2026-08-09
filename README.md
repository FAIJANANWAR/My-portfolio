# Portfolio Operating System (Portfolio OS)

A production-ready, enterprise-grade **CMS-Powered Portfolio Operating System** built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Recharts**, and **Supabase PostgreSQL & Auth**.

Designed to empower developers, engineers, and creators to manage every section of their digital presence without touching code.

---

## Key Features

- **Secret Admin Gateway**: Hidden entry point triggered via `CTRL + SHIFT + A` hotkey or clicking copyright notice 5 times.
- **SaaS Executive Dashboard**: Real-time traffic analytics, resume download metrics, Recharts weekly & monthly graphs, device/browser distribution breakdown.
- **Complete CMS for Every Section**: Dedicated management panels for Hero, About, Skills (with drag-and-drop reordering), Experience, Education, Projects (full CRUD with markdown & version history), Certificates, Blogs, Contact Info, Navigation, Settings, SEO, Media Manager, AI Assistant, and GitHub Sync.
- **Live Preview & Inline Editing**: Side-by-side live editor preview panes + floating inline edit mode triggers on the public site when logged in as admin.
- **AI Content Generator**: Integrated AI engine for generating project descriptions, polishing bio text, drafting blog outlines, and generating SEO metadata.
- **GitHub API Synchronization**: Automatic repository, star, fork, and contribution sync with manual override capabilities.
- **Enterprise Security**: Row Level Security (RLS) policies, middleware route protection, Supabase JWT auth, Zod schema validation, CSRF & XSS protection.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Server Actions) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Framer Motion |
| **Database** | Supabase PostgreSQL |
| **Auth** | Supabase Auth + JWT Cookies |
| **Storage** | Supabase Storage |
| **Analytics & Charts**| Recharts |
| **Icons & UI** | Lucide Icons, Radix UI |
| **Deployment** | Vercel |

---

## Project Folder Structure

```text
├── src/
│   ├── app/
│   │   ├── (public)/          # Public portfolio pages & layout
│   │   ├── admin/             # SaaS Admin Command Center & CMS Pages
│   │   │   ├── dashboard/     # Recharts analytics overview
│   │   │   ├── hero/          # Hero CMS
│   │   │   ├── about/         # About CMS
│   │   │   ├── skills/        # Skills CMS (Drag & Drop)
│   │   │   ├── experience/    # Work history CRUD
│   │   │   ├── education/     # Academic history CRUD
│   │   │   ├── projects/      # Projects CRUD & version history
│   │   │   ├── certificates/  # Certificates CRUD
│   │   │   ├── blogs/         # Blog platform CMS
│   │   │   ├── contact/       # Contact info & message inbox
│   │   │   ├── navigation/    # Navbar & Footer CMS
│   │   │   ├── settings/      # Aesthetics & site preferences
│   │   │   ├── seo/           # Meta & OpenGraph panel
│   │   │   ├── media/         # Asset & storage manager
│   │   │   ├── ai/            # AI content assistant
│   │   │   ├── github/        # GitHub API sync manager
│   │   │   └── login/         # Admin login route
│   │   ├── api/               # Analytics, AI, and GitHub API routes
│   │   └── layout.tsx         # Root layout with AdminBar integration
│   ├── components/
│   │   ├── admin/             # SecretLoginModal, AdminBar, LivePreviewPane
│   │   ├── layout/            # Navbar, Footer (with secret trigger)
│   │   └── sections/          # Public hero, about, projects, tech stack
│   └── lib/
│       ├── services/          # Unified portfolioService data layer
│       ├── supabase/          # Supabase browser, server, middleware setup
│       └── types/             # TypeScript interfaces for all CMS models
├── supabase/
│   └── schema.sql             # Full SQL database migration script with RLS
```

---

## Quick Start & Installation

1. **Clone & Install Dependencies**:
   ```bash
   git clone https://github.com/FAIJANANWAR/faijan-web3-portfolio.git
   cd faijan-web3-portfolio
   npm install
   ```

2. **Environment Variables (`.env.local`)**:
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```

3. **Database Migration**:
   Run `supabase/schema.sql` in your Supabase SQL Editor to initialize all tables, indexes, and Row Level Security policies.

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

5. **Secret Admin Login**:
   - Press **`CTRL + SHIFT + A`** anywhere on the website, OR
   - Click the copyright notice in the footer **5 times**.
   - Demo Password: `admin123`

---

## Documentation Suite

For complete details on operation, administration, database design, and architecture, explore the dedicated documentation guides:

- 📘 [ADMIN_GUIDE.md](file:///d:/sss/ADMIN_GUIDE.md) - Admin operating workflows and CMS usage.
- 💻 [DEVELOPER_GUIDE.md](file:///d:/sss/DEVELOPER_GUIDE.md) - Architecture, coding standards, and extension instructions.
- 🗄️ [DATABASE_GUIDE.md](file:///d:/sss/DATABASE_GUIDE.md) - Database schema, ER diagram details, tables, and RLS policies.
- 📡 [API_DOCUMENTATION.md](file:///d:/sss/API_DOCUMENTATION.md) - Complete REST & Server Actions API endpoints.
- 🚀 [DEPLOYMENT_GUIDE.md](file:///d:/sss/DEPLOYMENT_GUIDE.md) - Vercel & Supabase deployment checklist.
- 🗺️ [ROADMAP.md](file:///d:/sss/ROADMAP.md) - Future feature roadmap.
- 🧪 [TESTING_GUIDE.md](file:///d:/sss/TESTING_GUIDE.md) - Quality assurance & testing protocols.
