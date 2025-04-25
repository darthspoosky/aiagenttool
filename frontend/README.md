# PrepTalk Frontend

## Overview
This is the frontend codebase for PrepTalk, structured using Atomic Design principles (Atoms, Molecules, Organisms, Templates, Pages). It is built with Next.js (TypeScript), CSS Modules, and a custom design system. This README provides:
- Folder structure
- Design system overview
- List of components (with design ideas)
- Page-by-page API requirements
- Task breakdown at the most granular level

---

## Folder Structure (Atomic Design)

```
frontend/
│
├── public/                # Static assets (images, fonts, etc.)
├── src/
│   ├── components/
│   │   ├── atoms/         # Smallest UI elements (Button, Input, Icon, etc.)
│   │   ├── molecules/     # Combinations of atoms (Card, FormRow, NavLink)
│   │   ├── organisms/     # Complex UI blocks (Navbar, HeroSection, DashboardCard)
│   │   ├── templates/     # Page-level layouts (DashboardLayout, AuthLayout)
│   │   └── index.ts       # Barrel export
│   ├── pages/             # Next.js pages (landing, dashboard, etc.)
│   ├── styles/            # CSS Modules & global tokens
│   ├── utils/             # Utility functions, hooks
│   ├── api/               # API client logic (fetchers, hooks)
│   └── design-system/     # Design tokens, theme, typography
│
├── .eslintrc.js           # Linting config
├── jest.config.js         # Testing config
├── tsconfig.json          # TypeScript config
└── ...
```

---

## Design System Overview
- **Colors, spacing, typography, radii** defined in `/src/design-system/tokens.css` as CSS custom properties.
- **All components use tokens via CSS Modules.**
- **Accessible, responsive, and tested.**

---

## Component List & Design Ideas

### Atomic Components (Implemented)
- **Button**: Variants (primary, secondary, danger), sizes (sm, md, lg), icons, loading, a11y
- **Input**: Text input, accessible, design token styled
- **Select**: Accessible dropdown, custom styles
- **Checkbox**: Accessible, custom styled
- **Radio**: Accessible, custom styled
- **Switch**: Toggle, accessible, custom styled
- **Avatar**: Circular, fallback, all sizes, a11y
- **Badge**: Status/label, color-coded, pill style
- **Spinner**: Loading indicator, size/color options
- **Tooltip**: Accessible hover/focus tooltip, 4 positions
- **Icon**: SVG icon set (check, close, info, warning, user, edit, delete), color/size props, a11y
- **Alert**: Info/success/warning/danger, dismissible, icons, accessible

> All atomic components are built with strict TypeScript, CSS Modules, Storybook stories, and RTL/Jest tests for accessibility and core behaviors.

### Coming Soon: Molecules & Organisms
- Card, FormRow, NavLink, ProgressBar, SocialLoginButtons, Navbar, HeroSection, and more.

### Templates
- **DashboardLayout**: Navbar + main content + notifications.
- **AuthLayout**: Welcome card + form + onboarding steps.

---

## Pages, GenAI Integrations & Required Backend APIs

### 1. Landing Page (`/`)
- **APIs:** Newsletter signup, testimonials fetch, feature list fetch
- **GenAI/Agentic Features:**
  - AI-powered chatbot for onboarding and FAQs (backend to provide conversational agent endpoint)
  - Dynamic testimonial summarization (backend to provide GenAI summary endpoint)
- **User Flow:**
  1. User lands on page ➔ interacts with AI chatbot or browses features.
  2. User submits newsletter signup ➔ receives AI-generated welcome email.

### 2. Login/Signup (`/login`, `/signup`)
- **APIs:** Auth (register, login, social login), onboarding data fetch
- **GenAI/Agentic Features:**
  - AI-driven onboarding assistant (backend to provide agentic onboarding flow, e.g., personalized prompts)
  - Adaptive security (backend to provide GenAI-powered fraud detection)
- **User Flow:**
  1. User enters credentials or uses social login.
  2. AI onboarding assistant guides user through setup.
  3. Backend applies GenAI fraud/risk checks.

### 3. Dashboard (`/dashboard`)
- **APIs:** User profile, progress, recommendations, notifications
- **GenAI/Agentic Features:**
  - Personalized recommendations (backend to provide GenAI recommendation endpoint)
  - AI-generated motivational messages/notifications
- **User Flow:**
  1. User views dashboard.
  2. Receives personalized, AI-generated insights and recommendations.

### 4. Study Plan (`/study-plan`)
- **APIs:** Study plan CRUD, adaptive recs, progress
- **GenAI/Agentic Features:**
  - AI-generated adaptive study plans (backend to generate plans based on user data)
  - Agentic revision suggestions (backend to orchestrate agentic review flows)
- **User Flow:**
  1. User creates/edits study plan.
  2. GenAI suggests improvements and adapts plan in real time.

### 5. Practice Hub (`/practice`)
- **APIs:** Question fetch, answer submit, session summary
- **GenAI/Agentic Features:**
  - AI-generated practice questions (backend to generate and score questions)
  - Real-time AI feedback on answers (backend to provide evaluation endpoint)
- **User Flow:**
  1. User starts a practice session.
  2. Receives GenAI-generated questions.
  3. Submits answers and receives instant AI feedback.

### 6. Analytics (`/analytics`)
- **APIs:** Performance data, error patterns, predictions
- **GenAI/Agentic Features:**
  - AI-powered analytics and predictions (backend to provide trend/pattern analysis)
  - Agentic root-cause analysis (backend to orchestrate multi-step diagnostic workflows)
- **User Flow:**
  1. User views analytics dashboard.
  2. GenAI highlights trends, predicts outcomes, and suggests actions.

### 7. Mock Interview (`/interview`)
- **APIs:** Interview session, question fetch, response submit, feedback
- **GenAI/Agentic Features:**
  - AI interviewer agent (backend to conduct and adapt interview)
  - Real-time, AI-generated feedback and scoring
- **User Flow:**
  1. User starts mock interview.
  2. AI agent asks questions, adapts based on responses.
  3. User receives instant, detailed GenAI feedback.

---

## Task Breakdown (Granular & Enhanced)

### Project Setup & Architecture
- [ ] Scaffold Next.js 14+ project with App Router, TypeScript (strict mode)
- [ ] Configure ESLint, Prettier, husky pre-commit hooks
- [ ] Set up CSS Modules and global design tokens (tokens-first, semantic, responsive)
- [ ] Add theme provider with light/dark/custom themes
- [ ] Set up Jest, React Testing Library, Storybook, Playwright (E2E)
- [ ] Set up GitHub Actions CI/CD pipeline (typecheck, lint, test, a11y, bundle size, preview deploy)
- [ ] Add i18n config (multi-language, RTL support)
- [ ] Add feature flag system (env-based and user-based)

### Component Library (Atomic Design)
- [ ] Implement all Atoms (Button, Input, Icon, Typography, Loader, etc.)
- [ ] Implement all Molecules (Card, FormRow, ProgressBar, NavLink, etc.)
- [ ] Implement all Organisms (Navbar, HeroSection, NotificationSystem, DashboardCard, etc.)
- [ ] Implement Templates (DashboardLayout, MultiStepLayout, etc.)
- [ ] Add compound components (Tabs, Accordion, MultiStepForm)
- [ ] Write Storybook stories, visual regression tests, and a11y tests for all

### State Management & Data Fetching
- [ ] Set up React Query (TanStack Query) for API data fetching & caching
- [ ] Set up Zustand for global UI state (e.g., modals, theme)
- [ ] Add React Context for auth, theme, i18n
- [ ] Auto-generate typesafe API client from OpenAPI spec
- [ ] Implement error boundaries at layout/page level

### Pages
- [ ] Build Landing Page (animated Hero, ValueProps, Testimonials, Features, FAQ, CTA, Footer)
- [ ] Build Auth Pages (login, signup, onboarding, 2FA)
- [ ] Build Dashboard (customizable widgets, streaks, quick actions)
- [ ] Build Study Plan page (timeline, weekly/daily, adaptive recs)
- [ ] Build Practice Hub (split-screen, instant feedback, reference material)
- [ ] Build Analytics page (charts, trends, error patterns, predictions)
- [ ] Build Mock Interview page (AI feedback, video, answer comparison)

### API Integration
- [ ] Create custom hooks for each API endpoint (React Query)
- [ ] Integrate page components with backend APIs (loading, error, optimistic updates)
- [ ] Handle skeleton loaders, error boundaries, and empty states

### Performance & Optimization
- [ ] Use dynamic imports for code splitting
- [ ] Optimize all images with Next.js Image
- [ ] Use Server Components for data-heavy/static UI
- [ ] Add virtualization for long lists (notifications, activities)

### Animation System
- [ ] Implement Framer Motion for all interactive and page transitions
- [ ] Add shared element/page transitions
- [ ] Respect reduced motion preferences

### Accessibility (A11y)
- [ ] Keyboard navigation for all interactive elements
- [ ] ARIA attributes and roles in all components
- [ ] Focus management for modals, popovers, and page transitions
- [ ] Color contrast and reduced motion compliance
- [ ] Live regions for notifications/dynamic content
- [ ] Automated a11y checks in CI/CD

### Internationalization (i18n)
- [ ] Integrate next-i18next for translations
- [ ] Add locale routing and RTL support
- [ ] Format dates, numbers, and currencies per locale

### Docs & Deployment
- [ ] Update README with setup, architecture, and contribution guidelines
- [ ] Document all components in Storybook with prop tables and usage notes
- [ ] Deploy to Vercel/Netlify with branch previews and production pipeline

---

## Getting Started (Enhanced)

1. `npm install`
2. `cp .env.example .env.local` and configure environment
3. `npm run dev` to start the dev server
4. `npm run test` to run unit tests
5. `npm run test:e2e` to run E2E tests
6. `npm run storybook` for component docs
7. `npm run analyze` to analyze bundle size

See `/src/design-system/tokens.css` for design tokens.

---

## Contribution Guidelines
- Use strict typing (no `any`)
- Write tests for all components/pages
- Use CSS Modules for all styles
- Keep all code accessible and responsive
- Follow atomic design folder structure

---

# PrepTalk Frontend: Enhanced Vision

## Table of Contents
1. Product & Experience Vision
2. Technical Architecture & Patterns
3. Component System & Design Tokens
4. Feature Roadmap & Phased Rollout
5. Implementation Steps & Best Practices
6. Technical Excellence & DevOps
7. Metrics & Feedback Loops
8. Conclusion

---

## 1. Product & Experience Vision

- **Personalized Learning Paths**: Adaptive difficulty, learning style detection, knowledge graph, spaced repetition
- **Interactive Learning**: Code playground, system design canvas, SQL sandbox, behavioral video Q&A
- **Community & Collaboration**: Study groups, peer reviews, leaderboards, expert sessions
- **Psychological Support**: Confidence tracking, stress management, celebration system, burnout detection

---

## 2. Technical Architecture & Patterns

- **Advanced State Management**: Server/client state split (React Query, Jotai, React Hook Form + Zod)
- **Persistence Layers**: Session/local storage, IndexedDB for offline content
- **Offline-First & Sync**: Background sync, conflict resolution
- **Next.js 14+ Patterns**: Parallel/intercepting/conditional routes, streaming server components
- **Progressive Enhancement**: Core functionality without JS, capability/connection-aware design
- **Advanced Animation**: Semantic, physics-based, micro-interactions, 3D elements, motion accessibility

---

## 3. Component System & Design Tokens

- **Atomic Design Evolution**: Atoms, molecules, organisms, templates, plus composite, smart, headless, polymorphic components
- **Design Tokens**: Semantic, contextual, responsive, animation tokens, custom property cascade
- **Specialized UI Patterns**: Time-pressure UI, focus mode, complex data viz, comparative UI, side-by-side study

---

## 4. Feature Roadmap & Phased Rollout

**Phase 1: Core Experience**
- Build core study tools, dashboard, analytics foundation

**Phase 2: Personalization Engine**
- Integrate ML for adaptive learning, knowledge graph, gap analysis

**Phase 3: Social & Community**
- Peer review, study groups, mentorship marketplace

**Phase 4: Advanced Simulation**
- Sophisticated mock interviews, company-specific tracks

---

## 5. Implementation Steps & Best Practices

### Project Setup
- Scaffold Next.js 14+ (App Router, TypeScript strict)
- Configure ESLint, Prettier, husky
- Set up CSS Modules, global/semantic/responsive tokens
- Add theme provider (light/dark/custom)
- Set up Jest, RTL, Storybook, Playwright (E2E)
- GitHub Actions CI/CD (typecheck, lint, test, a11y, bundle, preview deploy)
- i18n config (multi-language, RTL)
- Feature flag system (env/user-based)

### Component Library
- Build all atoms, molecules, organisms, templates
- Add compound, smart, headless, polymorphic components
- Storybook stories, visual regression, a11y tests

### State & Data
- React Query for API data, Zustand/Jotai for UI state
- Context for auth, theme, i18n
- OpenAPI-generated API client, error boundaries

### Pages & Features
- Landing (animated hero, value props, testimonials, features, FAQ, CTA, footer)
- Auth (login, signup, onboarding, 2FA)
- Dashboard (widgets, streaks, quick actions)
- Study Plan (timeline, adaptive recs)
- Practice Hub (split-screen, feedback)
- Analytics (charts, trends)
- Mock Interview (AI feedback, video)

### API Integration
- Custom React Query hooks per endpoint
- Skeleton loaders, error boundaries, optimistic updates

### Performance & Animation
- Dynamic imports/code splitting
- Next.js Image optimization
- Server components for heavy/static UI
- Virtualization for long lists
- Framer Motion for transitions, shared elements, reduced motion

### Accessibility & i18n
- Keyboard navigation, ARIA, focus management, color contrast
- Automated a11y checks in CI/CD
- next-i18next, locale routing, RTL, formatting

### Documentation & Deployment
- README, Storybook prop tables, usage notes
- Vercel/Netlify deploys, branch previews

---

## 6. Technical Excellence & DevOps

- **Testing**: Unit, integration, E2E, visual regression, performance, a11y, user flow
- **Monitoring**: Real user monitoring, session replay, error tracking, Core Web Vitals, feature analytics
- **DevOps**: Preview deployments, automated QA, feature flags, canary deploys, rollback support

---

## 7. Metrics & Feedback Loops

- **Metrics**: Engagement, learning, outcome, satisfaction
- **Feedback**: In-app channels, user testing, feature voting, beta program

---

## 8. Conclusion

This streamlined vision for PrepTalk transforms it into a comprehensive, personalized, and resilient learning system. The phased roadmap and technical excellence practices ensure the app is feature-rich, maintainable, and truly differentiated—adapting to each user's unique learning style and needs, while enabling rapid, metrics-driven iteration.
