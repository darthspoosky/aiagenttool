# Project X: Jira-like Task Management Board

## 1. Project Overview
A production-grade web application for managing projects, boards, tasks, and users—similar to Jira—built on React (frontend) and Firebase (backend). The goal is to provide real-time collaboration, robust security, and a seamless user experience for team-based task management.

---

## 2. Functionality & Screens

### 2.1. Authentication
- **Screens:** Login, Signup, Password Reset
- **Frontend:**
  - Forms for login/signup/reset
  - Social login (Google)
  - Auth state management (protected routes)
- **Backend:**
  - Firebase Auth (email/password, Google)
  - Password reset email
  - Enforce security rules (user access)

### 2.2. Dashboard (Boards List)
- **Screens:** Dashboard (list of boards user can access)
- **Frontend:**
  - List all boards for current user
  - Create new board modal/dialog
  - Delete board
- **Backend:**
  - Firestore: `boards` collection (linked to user)
  - Security: Only owner/collaborators can view/create/delete

### 2.3. Board View (Kanban)
- **Screens:** Board page with columns and tasks (Kanban)
- **Frontend:**
  - Display columns (To Do, In Progress, Done, customizable)
  - List tasks per column
  - Drag-and-drop tasks between columns
  - Add/edit/delete columns
  - Add/edit/delete tasks
  - Task dialog (details, comments, assignees, due date)
- **Backend:**
  - Firestore: `boards/{boardId}/columns/{columnId}/tasks/{taskId}`
  - Real-time listeners for board/column/task changes
  - Security: Only board members can modify

### 2.4. Task Details & Comments
- **Screens:** Task details modal/dialog
- **Frontend:**
  - View/edit task details
  - Add/edit/delete comments
  - Assign users, set due date, attach files (optional)
- **Backend:**
  - Firestore: Store task details, comments, attachments
  - Security: Only board members can comment/edit

### 2.5. Activity Log (Optional)
- **Screens:** Activity panel on board view
- **Frontend:**
  - Show latest activity (task moved, edited, commented)
- **Backend:**
  - Firestore: `boards/{boardId}/activity/{activityId}`
  - Cloud Functions: Log actions (optional)

### 2.6. User Management & Permissions
- **Screens:** Board settings, user invite dialogs
- **Frontend:**
  - Invite users by email
  - Set roles (admin, member)
  - Remove users from board
- **Backend:**
  - Firestore: Board membership/roles
  - Security rules for role-based access
  - Email invite via Firebase Functions (optional)

---

## 3. Frontend Requirements
- React (TypeScript), CSS Modules, React DnD
- Firebase JS SDK for Auth & Firestore
- Responsive, accessible UI (keyboard navigation, ARIA)
- State management: React Query or Context API
- Testing: Jest, React Testing Library
- Error boundaries, loading skeletons
- CI: Lint, test, build checks
- Deploy with Firebase Hosting

### Key Integration Points
- Use Firestore listeners for real-time updates
- Use Firebase Auth for login/session
- Handle permission errors gracefully (show messages)
- Use board/task IDs from backend for navigation/state

---

## 4. Backend Requirements
- **Firebase Auth:** Enable email/password and Google sign-in
- **Firestore:**
  - Structure: `boards`, `columns`, `tasks`, `users`, `activity`
  - Security rules to enforce per-user/board access
- **Cloud Functions (optional):**
  - Send board invites via email
  - Log activity for audit trail
  - Clean up data on board/user deletion
- **Storage (optional):** For file attachments
- **Hosting:** Serve frontend via Firebase Hosting

### Key Integration Points
- Provide clear Firestore data structure and security rules
- Expose functions for frontend to invite users, log activity
- Ensure all endpoints are secured (no public write access)
- Provide test data for frontend development

---

## 5. Screen-by-Screen Requirements Table
| Screen               | Frontend Responsibility                                 | Backend Responsibility                                 |
|----------------------|--------------------------------------------------------|--------------------------------------------------------|
| Auth (Login/Signup)  | Forms, validation, error display, route protection     | Firebase Auth, security rules                          |
| Dashboard            | List boards, create/delete, navigation                 | Firestore boards collection, per-user filtering        |
| Board View (Kanban)  | Render columns/tasks, drag-and-drop, CRUD              | Firestore structure, real-time updates, security       |
| Task Details         | Modal, edit, comments, assign, due date                | Firestore task/comments, file storage, permissions     |
| Activity Log         | Show activity feed                                     | Firestore activity, Cloud Functions (log actions)      |
| User Management      | Invite, remove, set roles                              | Board membership, roles, email invites, security rules |

---

## 6. Development & Deployment Plan
1. Set up Firebase project (enable Auth, Firestore, Hosting)
2. Scaffold React app with TypeScript, CSS Modules
3. Implement Auth screens & logic
4. Implement Dashboard (board list)
5. Implement Board View (columns, tasks, drag-and-drop)
6. Implement Task Details & Comments
7. Implement User Management
8. (Optional) Implement Activity Log, File Attachments
9. Add tests for all major components & flows
10. Set up CI for linting, testing, building
11. Deploy to Firebase Hosting

---

## 7. Component Inventory & Roadmap

### 7.1. Atomic Components
- **Button** (primary, secondary, icon, disabled)
- **Input** (text, password, email, textarea, with validation and error states)
- **Select** (dropdown, single/multi-select, searchable)
- **Checkbox** (standalone, in lists)
- **Radio** (grouped options)
- **Switch/Toggle**
- **Avatar** (user image, fallback initials)
- **Spinner** (loading indicator, inline and full-page)
- **Badge** (status, notification)
- **Tooltip** (help, info)
- **Icon** (SVG-based, accessible)
- **Alert** (info, success, warning, error)

### 7.2. Composite Components
- **Modal/Dialog** (focus trap, a11y, for forms/details)
- **Card** (board/task display, with header/footer)
- **Dropdown Menu** (actions, user menu)
- **Snackbar/Toast** (transient notifications)
- **Tabs** (navigation, settings)
- **Pagination** (for lists)
- **Breadcrumbs** (navigation)
- **List** (generic, virtualized for performance)
- **Accordion/Collapse** (expandable sections)
- **Progress Bar** (task/board completion)
- **Stepper** (multi-step forms)

### 7.3. Kanban-Specific Components
- **Board Container** (holds columns, drag-and-drop enabled)
- **Column** (with title, add/edit/delete, drag-and-drop)
- **Task Card** (draggable, editable, shows status/assignee/labels)
- **Task Details Modal** (comments, attachments, assignees, due date)
- **Comment List** (with avatars, timestamps)
- **Activity Feed** (board/task actions)
- **User Invite Dialog** (email input, role select)

### 7.4. Utility/Infrastructure Components
- **Form** (validation, error summary)
- **Protected Route** (auth check)
- **Error Boundary**
- **Loading Skeleton** (for async content)
- **Theme Provider** (design token context)

#### Notes:
- All components must use CSS Modules, design tokens, and pass a11y checks (keyboard, ARIA, color contrast).
- Each component should include Storybook stories and RTL tests.
- Update this list as new requirements emerge or components are refactored.

---

## 8. References & Further Reading
- [Firebase Docs](https://firebase.google.com/docs)
- [React DnD](https://react-dnd.github.io/react-dnd/about)
- [Jira UI Inspiration](https://www.atlassian.com/software/jira)

---

This document serves as a single source of truth for frontend and backend collaboration. Update as requirements evolve.
