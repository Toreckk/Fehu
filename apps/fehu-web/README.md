# 💻 fehu-web: Customer Portal

This is the public, customer-facing application where users manage their personal finances. It is designed as a fast Single-Page Application (SPA) based on a mobile-first design system.

## ✨ Features

The application is built around four core navigation pillars:

- **Home/Dashboard:** At-a-glance net worth, current budget progress, and quick action access.
- **Transactions:** Comprehensive list with robust search, filter, and the critical **Transaction Detail View** for manual categorization/splitting.
- **Budgets:** Creation and tracking of monthly budgets and long-term saving pots.
- **Insights:** Data visualization (charts, graphs) and AI-powered spending alerts.
- **Security:** Access to MFA setup and linked bank management via the **Hamburger Menu**.

## 🧱 Architecture & Stack

- **Framework:** React (TypeScript)
- **Tooling:** Vite for lightning-fast bundling and development.
- **Styling:** SCSS + CSS Modules (BEM convention) for component-isolated styling.
- **Data Handling:** **React Query (TanStack Query)** for robust server state management and caching.
- **Routing:** React Router DOM.

## 🎨 Design Notes

The UI utilizes a high-contrast **Dark Mode** aesthetic with context-sensitive Floating Action Buttons (FABs) whose function adapts based on the current screen (e.g., `+` on Home opens a central menu; `+` on Transactions opens the Add Transaction form).

## 🛠️ Local Setup

1.  Ensure the `fehu-api` backend is running (at `http://localhost:3000`).
2.  **Start the Web Server:**
    ```bash
    pnpm dev
    ```
    The application will open in your browser (default: `http://localhost:5173`).
