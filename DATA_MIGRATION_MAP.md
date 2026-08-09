# DATA MIGRATION MAP

**Project**: Portfolio OS Data Mapping & Schema Transformation  
**Mapping Date**: August 9, 2026  

---

## 1. Schema Mapping Matrix

### Certificate Item Mapping (`src/data/certificates.ts` -> `CertificateItem` in `portfolioService.ts`)

| Old Field (`Certificate`) | New Field (`CertificateItem`) | Transformation / Rule |
| :--- | :--- | :--- |
| `title` | `title` | Direct string mapping. |
| `issuer` | `issuer` | Direct string mapping. |
| `date` | `issueDate` | Rename `date` -> `issueDate`. |
| `credentialId` | `credentialId` | Direct string mapping (fallback: `N/A`). |
| `verifyUrl` | `credentialUrl` | Rename `verifyUrl` -> `credentialUrl`. |
| `category` | `category` | Direct string mapping (DevOps, Cloud, Cyber Security, AI, Web Development, Programming, Data, Others). |
| `skills` | `tags` | Rename `skills` array -> `tags` array. |
| `description` | `description` | Direct string mapping. |
| `status` | `status` | Direct string mapping (`"completed"` / `"in-progress"`). |

---

### Project Item Mapping (`Project` -> `ProjectItem` in `portfolioService.ts`)

| Old Field | New Field | Transformation / Rule |
| :--- | :--- | :--- |
| `id` / `slug` | `id` / `slug` | Unique identifier URL slug. |
| `title` | `title` | Direct string mapping. |
| `category` | `category` | Full-Stack, Financial Utility, Security Vault, Distributed Systems. |
| `overview` / `description` | `overview` | Summary overview of system. |
| `problem` | `problem` | Technical problem statement. |
| `solution` | `solution` | Engineering solution description. |
| `architecture` | `architecture` | System architecture details. |
| `techStack` | `techStack` | Object containing `Frontend`, `Backend`, `Deployment` arrays. |
| `github` | `github` | Repository URL. |
| `live` / `demo` | `live` | Production live deployment URL. |
| `status` | `status` | `"published"` / `"draft"` / `"archived"`. |
| `tags` | `tags` | Technology tags array. |

---

### Experience Item Mapping (`Experience` -> `ExperienceItem` in `portfolioService.ts`)

| Old Field | New Field | Transformation / Rule |
| :--- | :--- | :--- |
| `id` | `id` | Unique experience ID. |
| `company` | `company` | Company / Client organization name. |
| `position` | `position` | Professional title. |
| `duration` | `duration` | Time duration string. |
| `isCurrentJob` | `isCurrentJob` | Boolean flag. |
| `description` | `description` | Role overview and responsibilities. |
| `achievements` | `achievements` | Bulleted impact achievements array. |
| `techStack` | `techStack` | Technologies & frameworks list. |

---

### Education Item Mapping (`Education` -> `EducationItem` in `portfolioService.ts`)

| Old Field | New Field | Transformation / Rule |
| :--- | :--- | :--- |
| `id` | `id` | Unique education ID. |
| `institute` | `institute` | Academic institution name. |
| `degree` | `degree` | Degree program title. |
| `duration` | `duration` | Years of study string. |
| `cgpa` / `score` | `cgpa` | Academic score / grade representation. |
| `description` | `description` | Academic focus & core coursework. |
