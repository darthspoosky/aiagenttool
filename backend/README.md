# PrepTalk Backend

## Overview
This is the backend codebase for PrepTalk, built with Node.js (TypeScript), following modular, scalable best practices. This README provides:
- Folder structure and rationale
- API list (mapped to frontend pages)
- Modular API management dashboard concept (n8n/langflow style)
- Most granular task breakdown

---

## Folder Structure (Best Practice)

```
backend/
│
├── src/
│   ├── controllers/    # Route handlers, grouped by resource (user, auth, dashboard, etc.)
│   ├── services/       # Business logic, reusable modules
│   ├── models/         # Database models/schemas (Prisma/TypeORM)
│   ├── routes/         # Express route definitions, grouped by page/feature
│   ├── middlewares/    # Auth, error handling, validation, etc.
│   ├── utils/          # Utility functions/helpers
│   ├── config/         # Environment, DB, and app config
│   ├── api-dashboard/  # Modular API management dashboard (see below)
│   └── index.ts        # App entry point
│
├── prisma/             # Prisma schema and migrations (if using Prisma)
├── .env                # Environment variables
├── jest.config.js      # Testing config
├── tsconfig.json       # TypeScript config
└── ...
```

---

## API List (Mapped to Frontend Pages)

### Landing Page
- `POST /api/newsletter` — Newsletter signup
- `GET /api/testimonials` — Fetch testimonials
- `GET /api/features` — Fetch feature list

### Auth & Onboarding
- `POST /api/auth/register` — Register user
- `POST /api/auth/login` — User login
- `POST /api/auth/social` — Social login
- `POST /api/auth/forgot-password` — Forgot password
- `POST /api/auth/reset-password` — Reset password
- `GET /api/user/profile` — Fetch user profile
- `PUT /api/user/profile` — Update user profile
- `GET /api/onboarding/data` — Fetch onboarding data

### Dashboard
- `GET /api/dashboard` — Dashboard data (profile, progress, recs)
- `GET /api/notifications` — Notifications

### Study Plan
- `GET /api/study-plan` — Fetch study plan
- `POST /api/study-plan` — Create/update study plan
- `PUT /api/study-plan` — Update study plan
- `GET /api/study-plan/adaptive` — Adaptive recommendations

### Practice Hub
- `GET /api/practice/questions` — Fetch questions
- `POST /api/practice/submit` — Submit answers
- `GET /api/practice/session-summary` — Session summary

### Analytics
- `GET /api/analytics/performance` — Performance data
- `GET /api/analytics/errors` — Error patterns
- `GET /api/analytics/predictions` — Predictions & goals

### Mock Interview
- `POST /api/interview/session` — Create interview session
- `GET /api/interview/questions` — Fetch interview questions
- `POST /api/interview/response` — Submit interview response
- `GET /api/interview/feedback` — Get feedback
- `GET /api/interview/history` — Interview history

### Global Systems
- `GET /api/achievements` — Achievements/badges
- `GET /api/support/faq` — FAQs
- `POST /api/support/contact` — Contact support
- `GET /api/search` — Global search

---

## Modular API Management Dashboard (n8n/langflow Style)

### Concept
- Visual dashboard for managing, testing, and chaining backend APIs (like n8n/langflow)
- Each API endpoint is a node/block
- Drag-and-drop to connect APIs, set up flows (e.g., onboarding → dashboard → study plan)
- Edit endpoint logic, test with mock data, view logs
- Modular: add new endpoints as blocks
- Built as a React app (in `/api-dashboard/`) with backend integration

### Suggested Structure
```
api-dashboard/
├── components/      # Node blocks, connectors, editor panels
├── pages/           # Dashboard, API editor, flow builder
├── utils/           # API docs loader, mock data generator
├── api/             # Backend integration (test, logs, etc.)
└── ...
```

### Why?
- Rapidly test and iterate on APIs
- Visualize and debug API flows
- Empower non-backend devs to manage integrations

---

## Task Breakdown (Granular)

### Setup
- [ ] Scaffold Node.js project with TypeScript, strict mode
- [ ] Configure ESLint, Prettier, husky
- [ ] Set up Jest for backend tests
- [ ] Set up environment variables
- [ ] Set up PostgreSQL and Prisma/TypeORM

### Core API Implementation
- [ ] Implement all Auth endpoints (register, login, social, password)
- [ ] Implement User profile endpoints
- [ ] Implement Dashboard endpoints
- [ ] Implement Study Plan endpoints
- [ ] Implement Practice Hub endpoints
- [ ] Implement Analytics endpoints
- [ ] Implement Mock Interview endpoints
- [ ] Implement Achievements/support/search endpoints

### Modular API Dashboard
- [ ] Scaffold React app in `api-dashboard/`
- [ ] Build node/block component for each endpoint
- [ ] Implement drag-and-drop flow builder
- [ ] Integrate with backend for live API testing
- [ ] Add logging and error display
- [ ] Docs loader and mock data generator

### Testing & Docs
- [ ] Write unit/integration tests for all controllers/services
- [ ] Auto-generate OpenAPI docs
- [ ] Update README with API usage and dashboard instructions

### Deployment
- [ ] Dockerize backend
- [ ] Deploy to Render/Heroku/AWS

---

## Getting Started

1. `npm install`
2. `npm run dev` to start the backend server
3. `npm run test` to run tests
4. `cd api-dashboard && npm install && npm run dev` to start API dashboard

---

## Contribution Guidelines
- Use strict typing (no `any`)
- Write tests for all endpoints
- Use modular folder structure
- Keep all code documented and maintainable
- Use the API dashboard for endpoint management
