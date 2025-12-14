# 💰 Fehu Monorepo (Customer-Facing & Admin Financial Management)

Fehu is a modern, full-stack personal finance management application built to provide users with clarity, control, and actionable insights into their financial health.

This repository is structured as a **Turborepo** monorepo, managing three distinct applications:

1.  **`fehu-web`**: The customer-facing single-page application (SPA).
2.  **`fehu-admin`**: The internal, role-gated administration dashboard.
3.  **`fehu-api`**: The centralized, secure backend API.

## 🚀 Core Technologies

| Layer        | Component                                | Description                                                                   |
| :----------- | :--------------------------------------- | :---------------------------------------------------------------------------- |
| **Monorepo** | **Turborepo**                            | High-performance build system for parallel execution and intelligent caching. |
| **Frontend** | **React + Vite + TypeScript**            | Modern, fast, and type-safe customer and admin UIs.                           |
| **Styling**  | **Sass (SCSS) + CSS Modules**            | Scalable, component-isolated styling with design tokens.                      |
| **Backend**  | **NestJS (TypeScript)**                  | Structured, enterprise-grade Node.js server framework.                        |
| **Database** | **PostgreSQL**                           | Highly reliable, ACID-compliant database for financial integrity.             |
| **Security** | **JWT Authentication** + **RBAC Guards** | Secure access control for customer data and administrative routes.            |

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (Recommended package manager for monorepos)
- Docker (For running the local PostgreSQL database)

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/Toreckk/Fehu.git](https://github.com/Toreckk/Fehu.git)
    cd Fehu
    ```

2.  **Install Dependencies (Root):**

    ```bash
    pnpm install
    ```

3.  **Configure Environment:**
    - Create a `.env` file in the root directory.
    - Add your PostgreSQL connection details.

    ```env
    # .env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=fehu_user
    DB_PASSWORD=secret_password
    DB_NAME=fehu_db
    JWT_SECRET=YOUR_SECURE_JWT_SECRET
    ```

### Running the Project (Local Development)

The entire application stack (API + Database + Both UIs) can be started with a single command:

1.  **Start Database (via Docker):**
    Ensure Docker is running, then run the services defined in `docker-compose.yml`.

    ```bash
    docker compose up -d db
    ```

2.  **Start All Apps (via Turborepo):**
    This concurrently starts the NestJS API, the Customer Web App, and the Admin Web App.
    ```bash
    pnpm dev
    ```

| Application                  | Local URL                                    |
| :--------------------------- | :------------------------------------------- |
| **`fehu-api`** (Backend)     | `http://localhost:3000`                      |
| **`fehu-web`** (Customer UI) | `http://localhost:5173` (Vite Default)       |
| **`fehu-admin`** (Admin UI)  | `http://localhost:5174` (Example Proxy Port) |

## 📦 Project Structure

The codebase is organized into three primary applications in the root directory:

| Folder            | Description                                                               |
| :---------------- | :------------------------------------------------------------------------ |
| `fehu-web`        | Customer-facing React SPA (Budgeting, Transactions, Insights).            |
| `fehu-admin`      | Internal Admin Dashboard (User Management, Global Stats).                 |
| `fehu-api`        | NestJS backend (Authentication, Data Access, Business Logic).             |
| `packages/common` | Shared TypeScript interfaces and utility types (crucial for type safety). |

## 📜 Next Steps

The current development focus is on implementing:

1.  **TypeORM Integration:** Connecting `fehu-api` to PostgreSQL.
2.  **Authentication & RBAC:** Implementing registration, JWT flow, and the `RolesGuard` for both customer and admin endpoints.
3.  **Customer Transaction Module:** Implementing the `transactions` schema and CRUD operations.

---
