# SecureVault

SecureVault is a production-grade encrypted notes application designed with military-grade security principles. It demonstrates advanced concepts in cryptography, authentication, and secure architecture, making it an excellent showcase for technical interviews.

## Security Architecture

This project implements a **Defense-in-Depth (Double Encryption)** strategy.

### 1. End-to-End Encryption (E2EE) - Frontend
- **Algorithm:** AES-GCM (256-bit) via Web Crypto API.
- **Why AES-GCM?** Unlike CBC mode which is vulnerable to padding oracle attacks, GCM provides Authenticated Encryption (AEAD). It ensures both confidentiality and data integrity using an Authentication Tag.
- **Implementation:** Before a note leaves the browser, it is encrypted. A secure random 12-byte IV is generated for *every* encryption (IV reuse in GCM is catastrophic). The resulting payload is base64 encoded.
- **Result:** The server NEVER receives or sees the plaintext note content. If the server is compromised, the attacker only sees E2EE ciphertexts.

### 2. Server-Side Encryption (SSE) - Backend
- **Algorithm:** AES-256-GCM via Node.js `crypto` module.
- **Why SSE?** Defense-in-depth. We encrypt the already E2EE-encrypted payload again at rest in MongoDB using a Server Master Key loaded strictly from the `.env` file.
- **Authentication & Integrity:** Validates the GCM AuthTag upon decryption to detect tampering.

### 3. Authentication
- **Mechanism:** JWT stored strictly in `httpOnly` cookies.
- **Why not localStorage?** `localStorage` is accessible via JavaScript, making it highly vulnerable to Cross-Site Scripting (XSS) attacks. `httpOnly` cookies are invisible to JS, mitigating XSS token theft.
- **Passwords:** Hashed using `bcrypt` with 10 salt rounds to defend against rainbow table and brute-force attacks.
- **User Isolation:** All API routes extract `req.user.id` from the validated JWT and enforce strict database filtering to prevent Insecure Direct Object Reference (IDOR) vulnerabilities.

## Project Structure

```text
securevault/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── controllers/      # auth.controller.js, notes.controller.js
│   │   │   ├── middleware/       # auth.middleware.js (JWT validation)
│   │   │   ├── routes/           # auth.routes.js, notes.routes.js
│   │   │   └── models/           # User.model.js, Note.model.js
│   │   ├── utils/
│   │   │   └── crypto.js         # Backend AES-256-GCM logic
│   │   └── server.js             # Express app entry point
│   ├── .env
│   └── package.json
└── frontend/
    ├── src/
    │   ├── api/                  # axios.js (withCredentials enabled)
    │   ├── components/           # ProtectedRoute.jsx
    │   ├── hooks/                # useAuth.js (React Query)
    │   ├── pages/                # Login, Register, Dashboard (Tailwind CSS)
    │   ├── utils/
    │   │   └── webcrypto.js      # Frontend Web Crypto API logic
    │   └── App.jsx
    ├── tailwind.config.js
    └── package.json
```

## Setup & Installation

### Prerequisites
- Node.js (v18+)
- MongoDB running locally or MongoDB Atlas URI

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `backend/.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/securevault
   JWT_SECRET=your_super_secret_jwt_key
   CLIENT_URL=http://localhost:5173
   # SERVER_MASTER_KEY must be exactly 32 bytes (64 hex characters)
   SERVER_MASTER_KEY=45d5a7ef824a732fb6d0d579e0a829e06cd2df3dfd96d7c67c5270de33100db6
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## API Routes

### Authentication (`/auth`)
- `POST /auth/register` - Registers a user, hashes password, sets `httpOnly` cookie.
- `POST /auth/login` - Validates credentials, sets `httpOnly` cookie.
- `POST /auth/logout` - Clears the JWT cookie.
- `GET /auth/me` - Validates session and returns user info.

### Notes (`/notes`) - *Requires Auth*
- `GET /notes` - Fetches and SSE-decrypts all notes for the authenticated user.
- `POST /notes` - SSE-encrypts and saves a new note.
- `DELETE /notes/:id` - Deletes a specific note (verifies ownership).

## Deployment Guide

For a production deployment, follow these steps:

1. **Database (MongoDB Atlas):**
   - Create a cluster on MongoDB Atlas.
   - Configure Network Access (IP Whitelist) to allow connections from your backend provider.
   - Obtain the connection string and set it as `MONGO_URI`.

2. **Backend (Render / Railway / Heroku):**
   - Push the backend code to a GitHub repository.
   - Deploy as a Web Service.
   - Set all environment variables (generate a strong `JWT_SECRET` and a secure 64-hex-character `SERVER_MASTER_KEY`).
   - Update `CLIENT_URL` to match your deployed frontend domain.

3. **Frontend (Vercel / Netlify):**
   - Push the frontend code to a GitHub repository.
   - Deploy to Vercel.
   - Ensure the Vite build command is `npm run build` and the output directory is `dist`.
   - Update the Axios `baseURL` in `src/api/axios.js` to point to your deployed backend URL.

## AI Usage Log
*This project was developed with the assistance of Antigravity (DeepMind's Agentic AI), focusing on secure architecture design, robust cryptographic implementation (AES-GCM WebCrypto + Node.js crypto), and modern UI development using React and Tailwind CSS.*
