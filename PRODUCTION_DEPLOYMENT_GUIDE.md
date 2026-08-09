# PRODUCTION DEPLOYMENT & LAUNCH GUIDE

> **STATUS: NOT EXECUTED — FUTURE DEPLOYMENT**  
> *This document provides step-by-step instructions for future production release on Vercel, Supabase, and DNS configuration for `https://faijan.in`. No live deployment, DNS changes, or remote database migrations have been executed.*

---

## 🛑 PRE-DEPLOYMENT CHECKLIST

- [x] **Local Build Verification**: `npm run build` succeeds locally with 0 errors across 32 routes.
- [x] **Git Checkpoint Locked**: Safe commit `665c502` & final local polish checkpoint.
- [x] **Content Verification**: Authentic Web Developer Internship, MCA Poornima University, B.Tech CSE, 12 certificates, 4 projects.
- [x] **Security Hardening**: Server-side rate limiter on `/api/contact` (max 5 req / 10 min), Next.js 16 Proxy route protection on `/admin/*`.
- [ ] **Production Keys Configured**: Live Supabase keys and Resend API key added to hosting provider environment settings.

---

## 1. SUPABASE PRODUCTION DATABASE SETUP

*(Execute when ready for live production database deployment)*

1. **Create Live Supabase Project**:
   - Log into [Supabase Dashboard](https://supabase.com/dashboard) and click **New Project**.
   - Name: `faijan-portfolio-prod`
   - Set a strong database password and select region (e.g. `ap-south-1` Mumbai / India).

2. **Apply PostgreSQL Schema & RLS Policies**:
   - Open Supabase SQL Editor in the dashboard.
   - Copy the complete contents of `supabase/schema.sql` from your repository.
   - Execute the SQL script. This creates 14 tables (`hero`, `about`, `experiences`, `education`, `projects`, `skills`, `certificates`, `contact_info`, `contact_messages`, `navigation`, `footer`, `site_settings`, `seo_settings`, `analytics_events`) with Row Level Security (RLS) policies:
     - **Public Read Access**: Active on all published tables.
     - **Admin Write Access**: Restricted to authenticated admin sessions.

3. **Create Admin User & Auth Credentials**:
   - Go to **Authentication -> Users** and click **Add User**.
   - Email: `admin@faijan.in` (or your preferred admin email).
   - Set a secure password.

4. **Copy API Keys**:
   - Go to **Project Settings -> API**.
   - Copy `URL`, `anon public` key, and `service_role` key.

---

## 2. VERCEL DEPLOYMENT CONFIGURATION

*(Execute when ready to deploy frontend onto Vercel)*

1. **Import Repository to Vercel**:
   - Log into [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New -> Project**.
   - Select the GitHub repository `FAIJANANWAR/securevault`.

2. **Framework Detection & Build Settings**:
   - **Framework Preset**: Next.js
   - **Node.js Version**: 20.x or 22.x
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

3. **Environment Variables Configuration**:
   Add the following environment variables in Vercel Project Settings:

   | Environment Variable | Value Description | Scope |
   | :--- | :--- | :--- |
   | `NEXT_PUBLIC_SITE_URL` | `https://faijan.in` | Production |
   | `NEXT_PUBLIC_SUPABASE_URL` | Your Live Supabase URL | Production & Preview |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Live Supabase Anon Key | Production & Preview |
   | `SUPABASE_SERVICE_ROLE_KEY` | Your Live Supabase Service Role Key | Production Only (Secret) |
   | `RESEND_API_KEY` | Your Resend API Key for Email Delivery | Production Only (Secret) |

4. **Deploy**:
   - Click **Deploy**. Vercel will build and deploy the Next.js 16 App Router application.

---

## 3. DOMAIN & DNS CONFIGURATION (`faijan.in`)

*(Execute when ready to point custom domain to Vercel)*

1. **Add Custom Domain in Vercel**:
   - In Vercel Project Settings, navigate to **Domains**.
   - Add `faijan.in` and `www.faijan.in`.
   - Set `faijan.in` as the primary canonical domain with automatic 301 redirect for `www.faijan.in`.

2. **Update DNS Records at Domain Registrar**:
   Log into your DNS provider (e.g. Namecheap / GoDaddy / Cloudflare) and set:

   | Type | Name | Value / Destination | TTL |
   | :---: | :---: | :--- | :---: |
   | **A Record** | `@` | `76.76.21.21` | Auto / 3600 |
   | **CNAME** | `www` | `cname.vercel-dns.com` | Auto / 3600 |

3. **SSL Certificate**:
   - Vercel automatically provisions Let&apos;s Encrypt SSL certificates upon DNS verification.

---

## 4. POST-DEPLOYMENT VERIFICATION

After future live deployment, perform the following verification steps:

1. **Public Site**: Visit `https://faijan.in` and verify smooth rendering of Hero, About, Experience timeline, Projects, Skills, Certificates, and Contact.
2. **Dynamic Project Routes**: Visit `https://faijan.in/projects/crypto-profit-calculator` and verify SSG route rendering and OpenGraph metadata.
3. **SEO Check**: Test `https://faijan.in/sitemap.xml` and `https://faijan.in/robots.txt`.
4. **Admin Gateway**: Access `/admin/login` or trigger `CTRL + SHIFT + A` / footer clicks, log in, and test CMS updates.
5. **Contact Rate Limit**: Submit a test message on the contact form and verify server rate limiting defense.

---

## 5. ROLLBACK PROCEDURE

If a live production build encounters an unexpected issue:
1. Log into Vercel Dashboard -> **Deployments**.
2. Select the previous stable deployment (`checkpoint 665c502` / `e6fd4c9`) and click **Instant Rollback**.
