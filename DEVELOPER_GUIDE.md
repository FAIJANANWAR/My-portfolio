# Portfolio OS — Developer Architecture & Engineering Guide

This guide provides technical specifications for developers extending or maintaining the **Portfolio Operating System (Portfolio OS)**.

---

## 🏗️ Architectural Overview

Portfolio OS follows Next.js App Router conventions with a strict **Separation of Concerns**:

- **Presentation Layer**: Client Components in `src/components/sections/` and `src/components/admin/`.
- **Data Access Layer**: Unified service singleton in `src/lib/services/portfolioService.ts`.
- **Database & Auth Layer**: Supabase SSR helpers in `src/lib/supabase/`.
- **Middleware Guard Layer**: Next.js Middleware in `src/middleware.ts`.

---

## 🔄 Resilient Hybrid Data Layer Architecture

```text
               +----------------------------------+
               |      Public / Admin UI Views     |
               +----------------------------------+
                                |
                                v
               +----------------------------------+
               |     portfolioService Singleton   |
               +----------------------------------+
                                |
                +---------------+---------------+
                |                               |
                v                               v
    (If Supabase Configured)        (If Demo / Fallback)
    +----------------------+       +--------------------+
    | Supabase PostgreSQL  |       | LocalStorage / JSON|
    +----------------------+       +--------------------+
```

The system automatically detects whether `NEXT_PUBLIC_SUPABASE_URL` is set. If present, it executes live PostgreSQL queries via `@supabase/ssr`. If missing or offline, it seamlessly falls back to pre-populated JSON data and localStorage persistence, guaranteeing **zero runtime crashes**.

---

## 🎨 Design Tokens & Custom CSS Variables

Key aesthetics are managed in `src/app/globals.css`:
- `--color-matte-black`: `#0a0b0e`
- `--color-cyber-indigo`: `#6366f1`
- `--color-premium-purple`: `#a855f7`

---

## 🛠️ How to Add a New CMS Management Module

1. **Define TypeScript Interface**:
   Add model type to `src/lib/types/portfolio.ts`.

2. **Add Service Methods**:
   Extend `portfolioService` in `src/lib/services/portfolioService.ts` with `get...()` and `update...()` functions.

3. **Create Admin Page Route**:
   Create `src/app/admin/[feature]/page.tsx`. Use `LivePreviewPane` for instant preview.

4. **Register in Admin Navigation**:
   Add entry to `navItems` array in `src/app/admin/layout.tsx`.
