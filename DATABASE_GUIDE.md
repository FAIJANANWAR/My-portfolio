# Portfolio OS — Database Schema & RLS Security Guide

This document details the PostgreSQL relational database schema, tables, foreign keys, indexes, and Row Level Security (RLS) policies used in **Portfolio OS**.

---

## 🗄️ Database Tables Overview

| Table Name | Description | Key Columns | RLS Policy |
| :--- | :--- | :--- | :--- |
| `hero_content` | Landing page headline data | `id`, `name`, `title`, `description`, `resume_url` | Public Read / Admin Write |
| `about_content` | Biography and career timeline | `id`, `heading`, `subheading`, `description`, `timeline` | Public Read / Admin Write |
| `skills` | Technical skills with ordering | `id`, `name`, `category`, `level`, `sort_order` | Public Read / Admin Write |
| `experiences` | Professional work history | `id`, `company`, `position`, `duration`, `is_current_job` | Public Read / Admin Write |
| `education` | Academic history | `id`, `institute`, `degree`, `duration`, `cgpa` | Public Read / Admin Write |
| `projects` | Project showcases | `id`, `slug`, `title`, `overview`, `type`, `status` | Public Read / Admin Write |
| `project_versions`| Project revision snapshots | `id`, `project_id`, `version_number`, `snapshot` | Admin Full Control |
| `certificates` | Verified certificates | `id`, `title`, `issuer`, `credential_url` | Public Read / Admin Write |
| `blogs` | Technical articles | `id`, `slug`, `title`, `content`, `status` | Public Read / Admin Write |
| `contact_info` | Contact channels | `id`, `email`, `phone`, `whatsapp`, `location` | Public Read / Admin Write |
| `contact_messages`| Visitor inbox messages | `id`, `name`, `email`, `subject`, `message`, `is_read` | Public Insert / Admin Read |
| `site_settings` | Theme and aesthetics | `id`, `theme_mode`, `accent_color`, `custom_cursor` | Public Read / Admin Write |
| `seo_settings` | Meta and schema tags | `id`, `site_title`, `site_description`, `keywords` | Public Read / Admin Write |
| `analytics_events`| Pageviews and clicks | `id`, `event_type`, `path`, `device`, `browser` | Public Insert / Admin Read |
| `audit_logs` | Admin activity log | `id`, `action`, `entity`, `performed_by` | Admin Full Control |

---

## 🔐 Row Level Security (RLS) Policies

All tables enforce Row Level Security:

```sql
-- Public Read Access for Portfolio Data
CREATE POLICY "Public Read Hero" ON hero_content FOR SELECT USING (true);

-- Admin Write Access for Authenticated Users
CREATE POLICY "Admin Full Hero" ON hero_content FOR ALL USING (auth.role() = 'authenticated');
```

---

## ⚡ Database Indexes

Optimized for fast lookups:
- `idx_projects_slug`: B-tree index on `projects(slug)`
- `idx_blogs_slug`: B-tree index on `blogs(slug)`
- `idx_analytics_created`: Timestamp index on `analytics_events(created_at)`
