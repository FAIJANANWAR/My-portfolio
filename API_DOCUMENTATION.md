# Portfolio OS — REST & Server API Documentation

Complete API reference for Portfolio OS endpoints.

---

## 📡 Endpoints

### 1. Analytics Event Tracking
- **Endpoint**: `POST /api/analytics/track`
- **Description**: Records page views, link clicks, and resume downloads.
- **Request Body**:
  ```json
  {
    "eventType": "resume_download",
    "path": "/",
    "device": "Desktop",
    "browser": "Chrome"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "tracked": "resume_download"
  }
  ```

---

### 2. AI Content Generation
- **Endpoint**: `POST /api/ai/generate`
- **Description**: Generates project descriptions, bio text, or blog outlines via AI prompt engineering.
- **Request Body**:
  ```json
  {
    "task": "project_desc",
    "prompt": "Double-encrypted Web Crypto notes vault"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "result": "### Double-Encrypted Vault\n..."
  }
  ```

---

### 3. GitHub API Synchronization
- **Endpoint**: `GET /api/github/sync?username=FAIJANANWAR`
- **Description**: Fetches real-time public repositories, stars, forks, and primary languages.
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "repos": [
      {
        "id": 1,
        "name": "faijan-web3-portfolio",
        "stargazers_count": 42,
        "forks_count": 12,
        "language": "TypeScript"
      }
    ]
  }
  ```
