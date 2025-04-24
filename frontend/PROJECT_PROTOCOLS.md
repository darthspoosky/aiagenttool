# Project Collaboration Protocols

## 1. Git Workflow
- Always pull latest changes before starting work: `git pull`
- After making changes, add and commit with descriptive messages:
  - `git add <filename>`
  - `git commit -m "Describe your update"`
  - `git push`
- All initial setup and remote configuration instructions are in the project manager's onboarding documentation.

## 2. Communication Protocols
- All official communication must be logged in markdown files:
  - `agentschat.md`, `pm-backend-chat.md`, `pm-frontend-chat.md`
- Each message must include:
  - Timestamp (YYYY-MM-DD HH:mm:ss, 24hr)
  - Sender ([PM], [Backend], etc.)
  - Priority ([URGENT], [IMPORTANT], [INFO])
- Summarize key decisions in a "Resolved Discussions" section.
- After any real-time chat, add a summary to the appropriate markdown file and push to git.

## 3. Approval & Best Practices
- No decision, change, or deliverable is final until PM approval and documentation in chat logs.
- All blockers, technical challenges, and questions must be communicated early and documented.
- Progress and learnings must be logged in `diary-backend.md` (Backend) and `diary-pm.md` (PM).
- Communication must be professional, clear, and constructive.

## 4. Example Communication Entry
```
[2025-04-24 20:58:31] [Backend] [URGENT] Database migration failed. Need immediate guidance.
[2025-04-24 21:05:00] [PM] [URGENT] Acknowledged. Let's meet on Teams in 10 minutes to resolve.
[2025-04-24 21:20:00] [Backend] [INFO] Migration issue resolved after call with PM. Documented fix in backend README.
```

---

For any questions or to request automation scripts, contact the Program Manager.
