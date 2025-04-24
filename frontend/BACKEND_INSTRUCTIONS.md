# Backend Integration Instructions for PrepTalk

## Overview
This document provides backend requirements and integration guidelines for the PrepTalk frontend (see README.md for full context). It summarizes the APIs, endpoints, and data contracts needed to support the frontend’s features and user flows.

---

## 1. Project Context
- **Frontend Framework:** Next.js 14+ (TypeScript, App Router)
- **Design System:** Atomic Design (Atoms, Molecules, Organisms, Templates)
- **API Layer:** React Query hooks, API client in `/src/api/`
- **Authentication:** Social and email/password login, onboarding steps

---

## 2. Required Backend APIs & GenAI/Agentic Integrations (by Page)

### Landing Page (`/`)
- Newsletter signup (POST)
- Testimonials fetch (GET)
- Feature list fetch (GET)
- **GenAI/Agentic Responsibilities:**
  - Provide conversational agent endpoint for AI-powered chatbot (onboarding, FAQs)
  - GenAI endpoint for dynamic testimonial summarization
- **User Flow:**
  1. User lands ➔ AI chatbot available for questions.
  2. User signs up for newsletter ➔ receives AI-generated welcome.

### Login/Signup (`/login`, `/signup`)
- Register (POST)
- Login (POST)
- Social login (OAuth endpoints)
- Onboarding data fetch (GET)
- **GenAI/Agentic Responsibilities:**
  - Agentic onboarding flow endpoint (personalized prompts, adaptive onboarding)
  - GenAI-powered fraud/risk detection endpoint
- **User Flow:**
  1. User logs in/signs up ➔ AI onboarding assistant personalizes experience.
  2. Backend applies fraud/risk checks.

### Dashboard (`/dashboard`)
- User profile (GET/PUT)
- User progress (GET)
- Recommendations (GET)
- Notifications (GET/POST)
- **GenAI/Agentic Responsibilities:**
  - GenAI endpoint for personalized recommendations
  - Endpoint for AI-generated motivational messages/notifications
- **User Flow:**
  1. User enters dashboard ➔ Receives AI-driven insights/recommendations.

### Study Plan (`/study-plan`)
- CRUD study plan (GET/POST/PUT/DELETE)
- Adaptive recommendations (GET)
- Progress tracking (GET)
- **GenAI/Agentic Responsibilities:**
  - GenAI endpoint for adaptive study plan generation
  - Agentic revision suggestion orchestrator
- **User Flow:**
  1. User edits/creates plan ➔ GenAI adapts plan and suggests improvements.

### Practice Hub (`/practice`)
- Fetch questions (GET)
- Submit answers (POST)
- Session summary (GET)
- **GenAI/Agentic Responsibilities:**
  - GenAI endpoint to generate practice questions
  - AI feedback/evaluation endpoint for answers
- **User Flow:**
  1. User starts practice ➔ Receives GenAI-generated questions.
  2. Submits answers ➔ Receives instant AI feedback.

### Analytics (`/analytics`)
- Performance data (GET)
- Error patterns (GET)
- Predictions (GET)
- **GenAI/Agentic Responsibilities:**
  - GenAI-powered analytics/prediction endpoint
  - Agentic root-cause analysis workflow endpoint
- **User Flow:**
  1. User views analytics ➔ GenAI highlights trends, predicts outcomes, suggests actions.

### Mock Interview (`/interview`)
- Start interview session (POST)
- Fetch interview questions (GET)
- Submit responses (POST)
- Get feedback (GET)
- **GenAI/Agentic Responsibilities:**
  - AI interviewer agent endpoint (conducts/adapts interview)
  - Real-time AI feedback/scoring endpoint
- **User Flow:**
  1. User starts interview ➔ AI agent asks/adapts questions.
  2. User responds ➔ Receives instant GenAI feedback.

---

## 3. API Guidelines
- Use RESTful conventions or GraphQL (specify which)
- Secure all endpoints (JWT or session-based auth)
- Follow OpenAPI/Swagger for schema documentation
- Return clear error messages and status codes
- Support CORS for frontend dev server
- Enable pagination for list endpoints (e.g., testimonials, notifications)
- Provide sample/mock data for frontend integration

---

## 4. Data Contracts & Example Payloads
Please provide response/request payloads for each endpoint, e.g.:
```json
// Example: User profile (GET /api/user/profile)
{
  "id": "string",
  "name": "string",
  "email": "string",
  "avatarUrl": "string",
  "progress": { ... }
}
```
Include all relevant fields for each endpoint.

---

## 5. Follow-Up Checklist for Backend Team
- [ ] Confirm API endpoint list and suggest changes if needed
- [ ] Share OpenAPI/Swagger docs or endpoint specs
- [ ] Provide example payloads for all endpoints
- [ ] Clarify authentication and error handling approach
- [ ] Provide test/mock endpoints or data for frontend integration
- [ ] Notify frontend team of any breaking changes or delays

---

## 6. Questions for Backend Team
- Which authentication method will be used (JWT, OAuth, etc.)?
- What is the expected rate limit for key endpoints?
- Are there any endpoints that require special security or validation?
- What is the deployment timeline for each API?

---

## 7. Contacts
- Please reply in the project channel or tag @frontend-lead for clarifications.

---

_This document should be updated as backend/feature requirements evolve._
