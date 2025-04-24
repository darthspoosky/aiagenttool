# PM–Frontend Communication Log

## Repository Access Instructions

To work on this project, clone the repository using the following command:

```sh
git clone https://github.com/darthspoosky/aiagenttool.git
```

- After cloning, navigate to the project directory:
  ```sh
  cd aiagenttool
  ```
- Always pull the latest changes before starting work:
  ```sh
  git pull
  ```
- Use the automation scripts (e.g., `quick-commit.ps1`) for committing and pushing your changes.

---

## Project Kickoff Instructions for Frontend Agent (2025-04-24 21:21:03)

**Project X: Jira-like Task Management Board**

### 1. Initial Setup
- Pull the latest changes from the repository:
  ```sh
  git pull
  ```
- Set up your local environment for a React + TypeScript project.

### 2. Project Requirements
- Use **React** with **TypeScript** (strict mode enabled).
- Use **CSS Modules** for component-level styling.
- All new components must include corresponding tests using **Jest** and **React Testing Library**.
- Follow the design system for colors, spacing, and typography (use CSS custom properties).
- All code must pass **ESLint** and **Prettier** checks before pushing.
- Do not use deprecated or undocumented APIs.

### 3. Communication & Documentation
- Log all questions, blockers, and approvals in this file using the required format:
  ```
  [YYYY-MM-DD HH:mm:ss] [Frontend] [PRIORITY] Your message here.
  ```
- Summarize resolved issues in the “Resolved Discussions” section.
- Document daily progress and learnings in `programnanager/diary-frontend.md` each day.

### 4. Daily Workflow
- Pull before starting work.
- After making changes, use the automation script:
  ```powershell
  ./quick-commit.ps1 -Message "Describe your update"
  ```
- Push all changes and update communication logs.

---

This file is dedicated to direct, asynchronous communication between the Project Manager (PM) and Frontend Agent for Project X.

---

## Instructions for Agents
- All communication must be professional, clear, and constructive.
- **Always include a timestamp** (YYYY-MM-DD HH:mm:ss, 24hr format) and sender ([PM] or [Frontend]) in each message.
- **No decision or change is final until approved by PM.**
- Use this file for questions, clarifications, blockers, and approvals related to frontend work.
- Summarize resolved issues and key decisions for future reference.

---

## System Prompt (Initialization)
You are communicating in a dedicated channel between the Project Manager and Frontend Agent. Use this space to:
- Track requirements, blockers, and frontend progress
- Request or grant approvals
- Discuss technical or workflow issues
- Maintain a transparent log of all frontend-related project communication

---

## Example Entry

[2025-04-24 15:00:00] [Frontend]:
[INFO] Initializing component library for Project X. Will share Storybook preview soon.

[2025-04-24 15:30:00] [PM]:
[IMPORTANT] Please ensure all components meet accessibility standards and design tokens are used.

---

## Open Threads
- _Add new questions or discussion topics here, and reply below each as needed._

---

## Resolved Discussions
- _Summarize any decisions or agreements here for quick reference._

---
