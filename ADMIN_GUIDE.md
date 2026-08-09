# Portfolio OS — Admin User Guide

Welcome to the **Portfolio Operating System (Portfolio OS)** Admin Guide. This document provides step-by-step instructions on how to access, configure, and manage your portfolio without touching any code.

---

## 🔑 1. How to Access the Admin Command Center

### Method A: Secret Keyboard Shortcut
Press **`CTRL + SHIFT + A`** anywhere on the website. A floating glassmorphic modal will pop up prompting for admin credentials.

### Method B: Footer Copyright Trigger
Scroll to the footer at the bottom of the page and click the **Copyright Notice** (`© 2026 Faijan Anwar`) **5 times consecutively**.

### Method C: Direct URL Access
Navigate directly to `/admin/login` in your web browser.

> [!TIP]
> **Default Admin Credentials for Demo Mode**:
> - Email: `admin@faijan.in`
> - Password: `admin123`

---

## 📊 2. Executive Dashboard Overview (`/admin/dashboard`)

The Executive Dashboard acts as your central mission control.
- **Top Metric Cards**: View Total Visitors, Resume Downloads, Projects, Certificates, Messages, Blog Posts, GitHub Clicks, and Top Viewed Asset.
- **Weekly Visitor Traffic Chart**: Powered by Recharts area visualizations showing daily traffic streams.
- **Device & Browser Breakdown**: Donut and Bar charts analyzing visitor hardware and web client preferences.

---

## ✏️ 3. Managing Portfolio Content (CMS Sections)

### Hero CMS (`/admin/hero`)
- Edit Name, Job Titles, Headlines, and Subtitle.
- Update availability badge (e.g. `Available for Opportunities`).
- Change primary and secondary CTA button labels and URLs.
- Change resume download link.

### About CMS (`/admin/about`)
- Update main heading, subheading, and full biography.
- Add or remove key technical highlights.

### Skills CMS (`/admin/skills`)
- Group skills by category: `Frontend`, `Backend`, `Blockchain`, `Database`, `Cloud`, `DevOps`, `Tools`, `Languages`.
- Adjust proficiency level sliders (0% - 100%).
- Use **Arrow Up / Down** buttons to reorder skill badges.

### Projects CMS (`/admin/projects`)
- Create, edit, and delete projects.
- Specify project slug, tech stack tags, problem statement, solution, and architecture.
- Toggle **Featured** flag and set status to `Published`, `Draft`, or `Archived`.
- Version History: View previous revisions and restore previous snapshots.

### Certificates CMS (`/admin/certificates`)
- Add verified credentials, issuer name, issue date, credential ID, and credential link.

### Blogs CMS (`/admin/blogs`)
- Write and format technical articles using Markdown.
- Set category, reading time, and publish status.

### Contact & Messages (`/admin/contact`)
- Update contact email, phone, location, and social links.
- View incoming messages submitted by recruiters with **Mark as Read** capabilities.

### Navigation & Footer (`/admin/navigation`)
- Reorder navbar links and toggle visibility.
- Change footer copyright text.

### Aesthetics & Settings (`/admin/settings`)
- Toggle Dark / Light mode.
- Pick custom accent color palette (`#6366f1`, `#a855f7`, `#ec4899`, etc.).
- Enable/disable custom cursor spotlight and Framer Motion animations.

### Media & Storage Manager (`/admin/media`)
- Upload PDFs, resumes, project screenshots, and videos.
- Monitor storage usage.

### AI Content Assistant (`/admin/ai`)
- Generate project descriptions, polish bio text, create SEO tags, and draft article outlines using prompt engineering.

### GitHub Integration (`/admin/github`)
- Click **Sync GitHub Now** to automatically pull real-time repository stats, stars, forks, and primary languages from the GitHub API.
