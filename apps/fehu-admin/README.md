# 🛠️ fehu-admin: Internal Administration Dashboard

This application is the internal management portal for administrators. It is strictly protected by **Role-Based Access Control (RBAC)** enforced by the `fehu-api` backend.

**NOTE:** Access to this application requires an **`admin`** role credential.

## 🔒 Security Focus

This frontend consumes sensitive, global application data. Every request to Admin-specific API endpoints (e.g., `/admin/users`) is protected by the NestJS `RolesGuard`, ensuring that non-admin users cannot access this data, even if they access this URL.

## 📊 Key Features

- **User Management:** Search, view, and manage all customer accounts.
- **Global Statistics:** Dashboards showing total system net worth, monthly transaction volume, and key performance indicators (KPIs).
- **Auditing:** Tools for reviewing flagged or complex transactions across all users.

## 🧱 Architecture & Stack

- **Framework:** React (TypeScript)
- **Tooling:** Vite.
- **Styling:** SCSS + CSS Modules, utilizing the same core design tokens as `fehu-web` for visual consistency.
- **Data Handling:** React Query for server state management.

## 🛠️ Local Setup

1.  Ensure the `fehu-api` backend is running (at `http://localhost:3000`).
2.  **Start the Admin Server:**
    ```bash
    pnpm dev
    ```
    The application will be available at its configured development URL (e.g., `http://localhost:5174`).
