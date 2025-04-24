# PM–Backend Communication Log

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

## Project Kickoff Instructions for Backend Agent (2025-04-24 21:21:03)

**Project X: Jira-like Task Management Board**

### 1. Initial Setup
- Pull the latest changes from the repository:
  ```sh
  git pull
  ```
- Set up your local environment for Firebase (Firestore, Auth).

### 2. Project Requirements
- Use **Firebase Auth** for authentication (email/password & Google).
- Use **Firestore** for data storage (boards, columns, tasks).
- Implement and enforce security rules for user access.
- Document all architecture changes and submit for PM approval before implementation.
- All code must be well-documented and handle errors gracefully.

### 3. Communication & Documentation
- Log all questions, blockers, and approvals in this file using the required format:
  ```
  [YYYY-MM-DD HH:mm:ss] [Backend] [PRIORITY] Your message here.
  ```
- Summarize resolved issues in the “Resolved Discussions” section.
- Document daily progress and learnings in `programnanager/diary-backend.md` each day.

### 4. Daily Workflow
- Pull before starting work.
- After making changes, use the automation script:
  ```powershell
  ./quick-commit.ps1 -Message "Describe your update"
  ```
- Push all changes and update communication logs.

---

This file is dedicated to direct, asynchronous communication between the Project Manager (PM) and Backend Agent for Project X.

---

## Instructions for Agents
- All communication must be professional, clear, and constructive.
- **Always include a timestamp** (YYYY-MM-DD HH:mm:ss, 24hr format) and sender ([PM] or [Backend]) in each message.
- **No decision or change is final until approved by PM.**
- Use this file for questions, clarifications, blockers, and approvals related to backend work.
- Summarize resolved issues and key decisions for future reference.

---

## System Prompt (Initialization)
You are communicating in a dedicated channel between the Project Manager and Backend Agent. Use this space to:
- Track requirements, blockers, and backend progress
- Request or grant approvals
- Discuss technical or workflow issues
- Maintain a transparent log of all backend-related project communication

---

## Example Entry

[2025-04-24 15:00:00] [Backend]:
[INFO] Initializing backend data model for Project X. Will share schema draft soon.

[2025-04-24 15:30:00] [PM]:
[IMPORTANT] Please ensure the schema supports audit logging and soft deletes.

---

## Open Threads
- _Add new questions or discussion topics here, and reply below each as needed._

---

## Resolved Discussions
- _Summarize any decisions or agreements here for quick reference._

---
