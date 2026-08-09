# Portfolio OS — Testing & Quality Assurance Guide

Verification and quality assurance protocols for **Portfolio OS**.

---

## 🧪 Automated Testing Procedures

### 1. TypeScript Type Verification
Ensure strict zero-error compilation across all components, API routes, and service layers:
```bash
npx tsc --noEmit
```

### 2. Next.js Production Build Validation
Verify that all Server Components, Client Components, and dynamic routes compile cleanly:
```bash
npm run build
```

---

## 📋 Manual Quality Assurance Checklist

| Module | Test Case | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Secret Auth** | Press `CTRL + SHIFT + A` on main site | Secret Login Modal pops up | PASS |
| **Footer Trigger** | Click copyright notice 5 times | Secret Login Modal pops up | PASS |
| **Middleware** | Navigate to `/admin/dashboard` unauthenticated | Redirected to `/admin/login` | PASS |
| **Hero CMS** | Edit name and click Save | Instant update in Live Preview | PASS |
| **Skills CMS** | Change skill level slider & reorder | Reordered list persists | PASS |
| **Project CMS** | Create new project with tags & status | Project listed and saved | PASS |
| **Dashboard** | View Recharts analytics | Area, Pie, and Bar charts render cleanly | PASS |
| **GitHub Sync** | Click Sync GitHub Now | Repos and star counts updated from API | PASS |
