# PrepTalk Backend

---

## Backend Progress & Milestones (as of 2025-04-25)

---

## Frontend/Backend Integration Status
- **Auth endpoints:** Mocked, fully testable from frontend. ✅
- **User profile endpoints:** Mocked, fully testable from frontend. ✅
- **Mock Interview (standard + streaming):** Mocked, tested, ready for frontend. ✅
- **Dashboard, Study Plan, Practice Hub, Analytics, Achievements, Support, Search:** Mocked controllers implemented, ready for frontend integration. 🚧
- **Automated tests:** Jest/Supertest in place for main endpoints; more to be added as features expand. ✅
- **Next:** Frontend team can connect all endpoints for integration testing. Please report any issues or missing fields for rapid backend adjustment.

---

### ✅ Completed & In-Progress
- Mock/stub implementations for all key Auth endpoints (`/api/auth/register`, `/api/auth/login`, `/api/auth/google`, `/api/auth/forgot-password`) for frontend integration testing.
- Mock/stub implementations for User Profile endpoints (`/api/user/profile` GET/PUT).
- Mock Interview endpoints: standard and streaming (SSE) implemented for `/api/mock-interview` and `/api/mock-interview/stream`.
- Express v4 migration and TypeScript compatibility fixes.
- Jest and Supertest installed; test suites scaffolded for all main endpoints.
- Automated endpoint tests created for Auth, User, and Mock Interview APIs.
- README updated to reflect all necessary backend components and dashboard modules.
- Project structure and modularity improved for maintainability and testability.

---

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
│   ├── controllers/    # Route handlers for each resource (auth, user, dashboard, studyPlan, etc.)
│   ├── services/       # Business logic, reusable modules (e.g., email, analytics, interview)
│   ├── models/         # Database models/schemas (Prisma/TypeORM or custom)
│   ├── routes/         # Express route definitions, grouped by feature/page
│   ├── middlewares/    # Auth, error handling, validation, streaming, etc.
│   ├── utils/          # Utility functions/helpers (logger, formatters, etc.)
│   ├── config/         # Environment, DB, and app config
│   ├── tests/          # All Jest/Supertest test files for API endpoints and logic
│   ├── api-dashboard/  # Modular API management dashboard (see below)
│   ├── app.ts          # Express app instance (for testability)
│   └── index.ts        # App entry point (only calls app.listen())
│
├── prisma/             # Prisma schema and migrations (if using Prisma)
├── .env                # Environment variables
├── jest.config.js      # Testing config
├── tsconfig.json       # TypeScript config
└── README.md           # Project documentation
```

### Component List

**Backend Components:**
- `controllers/` (authController, userController, dashboardController, studyPlanController, practiceHubController, analyticsController, mockInterviewController, achievementsController, supportController, searchController)
- `services/` (authService, userService, emailService, analyticsService, interviewService, etc.)
- `models/` (User, StudyPlan, PracticeSession, Achievement, etc.)
- `routes/` (auth.ts, user.ts, dashboard.ts, studyPlan.ts, practiceHub.ts, analytics.ts, mockInterview.ts, achievements.ts, support.ts, search.ts)
- `middlewares/` (auth.ts, errorHandler.ts, validation.ts, streaming.ts, etc.)
- `utils/` (logger.ts, responseFormatter.ts, constants.ts, etc.)
- `config/` (env.ts, db.ts, firebase.ts, etc.)
- `tests/` (auth.test.ts, user.test.ts, mockInterview.test.ts, etc.)
- `app.ts` (Express app instance for testing and server)
- `index.ts` (Main entry point, starts server)

**API Dashboard Components (`api-dashboard/`):**
- `components/` (Node blocks, connectors, editor panels, endpoint forms)
- `pages/` (Dashboard, API editor, flow builder, logs)
- `utils/` (API docs loader, mock data generator, flow logic)
- `api/` (Backend integration: test runner, logs, endpoint management)

---

## API Usage Examples

### Example: Register User
```bash
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@preptalk.com","password":"password123","displayName":"Test User"}'
```

### Example: Login
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@preptalk.com","password":"password123"}'
```

### Example: Fetch User Profile (GET)
```bash
curl http://localhost:4000/api/user/profile
```

### Example: Streaming Interview Questions (SSE)
```js
const eventSource = new EventSource('http://localhost:4000/api/mock-interview/stream');
eventSource.addEventListener('question', (event) => {
  const question = JSON.parse(event.data);
  console.log('Received question:', question);
});
eventSource.addEventListener('end', () => {
  eventSource.close();
  console.log('Interview complete!');
});
```

---

## OpenAPI Docs (Planned)
- [ ] Auto-generate OpenAPI/Swagger docs for all endpoints.
- [ ] Serve docs at `/api/docs` using `swagger-ui-express` or similar.
- [ ] Example usage and schema definitions will be included here once available.

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

### Task Breakdown (Granular)

### Setup
- [x] Scaffold Node.js project with TypeScript, strict mode (Initial structure and TypeScript setup complete)
- [ ] Configure ESLint, Prettier, husky
- [x] Set up Jest for backend tests (Jest and Supertest installed, config added, test suites scaffolded)
- [x] Set up environment variables (`.env` placeholder ready)
- [ ] Set up PostgreSQL and Prisma/TypeORM

### Core API Implementation
- [x] Implement all Auth endpoints (register, login, social, password) — **Mock/stubbed for frontend integration**
- [x] Implement User profile endpoints — **Mock/stubbed for frontend integration**
- [x] Implement Mock Interview endpoints — **Standard and streaming (SSE) implemented**
- [ ] Implement Dashboard endpoints
- [ ] Implement Study Plan endpoints
- [ ] Implement Practice Hub endpoints
- [ ] Implement Analytics endpoints
- [ ] Implement Achievements/support/search endpoints

### Modular API Dashboard
- [ ] Scaffold React app in `api-dashboard/`
- [ ] Build node/block component for each endpoint
- [ ] Implement drag-and-drop flow builder
- [ ] Integrate with backend for live API testing
- [ ] Add logging and error display
- [ ] Docs loader and mock data generator

### Testing & Docs
- [x] Write unit/integration tests for all controllers/services (Test suites for Auth, User, Mock Interview endpoints created)
- [ ] Auto-generate OpenAPI docs
- [x] Update README with API usage and dashboard instructions (README updated with components, progress, and structure)

### Deployment
- [ ] Dockerize backend
- [ ] Deploy to Render/Heroku/AWS

---

#### Progress Notes
- All main authentication and user endpoints are currently mocked for rapid frontend integration and demo purposes.
- Streaming API (SSE) is live for `/api/mock-interview/stream`, demonstrating real-time data delivery.
- Automated tests are present for all implemented endpoints; more will be added as new features are developed.
- The README and folder structure are kept up-to-date with every major backend milestone.

---

## Environment Variables

The following environment variables are required for backend operation:
- `PORT`: Port number for the Express server (default: 4000)
- `FIREBASE_PROJECT_ID`: Firebase project ID
- `FIREBASE_CLIENT_EMAIL`: Firebase service account client email
- `FIREBASE_PRIVATE_KEY`: Firebase service account private key
- `FIREBASE_DATABASE_URL`: (optional) Firebase database URL

Create a `.env` file in the backend root and fill in these values. **Never commit `.env` or secrets to version control.**

## Logging & Security

- All authentication and sensitive actions are logged (see logger setup in `src/utils/logger.ts` if present).
- Never log secrets or sensitive user data.
- All errors are handled gracefully and user-facing error messages are clear and actionable.
- Strict typing and input validation are enforced throughout the codebase.

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
