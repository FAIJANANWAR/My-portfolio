# Portfolio OS — Production Deployment Guide

Guide for deploying **Portfolio OS** to **Vercel** and **Supabase**.

---

## 🚀 Step 1: Deploy Database on Supabase

1. Sign in to [Supabase](https://supabase.com).
2. Create a new project named `portfolio-os`.
3. Open the **SQL Editor** tab.
4. Copy the entire contents of `supabase/schema.sql` and click **Run**.
5. Copy your API Credentials from **Project Settings -> API**:
   - `Project URL`
   - `anon / public key`
   - `service_role key`

---

## 🌩️ Step 2: Deploy Frontend on Vercel

1. Push your repository to GitHub.
2. Import project into [Vercel](https://vercel.com).
3. Set Framework Preset: **Next.js**.
4. Configure Environment Variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
5. Click **Deploy**.

---

## ✅ Pre-Flight Production Checklist

- [x] All admin routes `/admin/*` protected via Middleware.
- [x] RLS policies enabled on all Supabase PostgreSQL tables.
- [x] Custom domain and SSL configured on Vercel.
- [x] Robot.txt and XML Sitemap validated for SEO.
- [x] Secret hotkey (`CTRL + SHIFT + A`) verified working in production environment.
