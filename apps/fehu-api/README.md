# 🌐 fehu-api: NestJS Backend Service

This is the centralized, secure backend for the Fehu application. It acts as the single source of truth for all financial data, enforcing business logic, access control, and data integrity.

## 🧱 Architecture & Stack

- **Framework:** NestJS (TypeScript)
- **Database:** PostgreSQL (via TypeORM)
- **Authentication:** JWT Bearer Token Strategy
- **Authorization:** Role-Based Access Control (RBAC) using custom NestJS Guards and Decorators.
- **Tooling:** Class-Validator & Class-Transformer for DTO validation.

## 🔑 Key API Responsibilities

- **Authentication:** User registration, login, and secure token issuance.
- **Authorization:** RBAC via the `RolesGuard` to separate `/transactions` (Customer) from `/admin` endpoints.
- **Data CRUD:** Managing transactions, budgets, saving pots, and recurring bills.
- **Reporting:** Generating complex database queries for the **Insights** dashboards.

## 🔗 Core Endpoints (Interfaces)

| Controller     | Role       | Endpoint                | Purpose                                              |
| :------------- | :--------- | :---------------------- | :--------------------------------------------------- |
| `Auth`         | Public     | `POST /auth/login`      | Issues JWT token with embedded `role`.               |
| `Transactions` | `customer` | `GET /transactions`     | Retrieves user's transaction list (Owner-filtered).  |
| `Budgets`      | `customer` | `POST /budgets`         | Creates a new budget or saving pot goal.             |
| **`Admin`**    | `admin`    | `GET /admin/users`      | Retrieves a list of all users for management.        |
| **`Reports`**  | `customer` | `GET /reports/spending` | Generates category breakdown for the Insights chart. |

## 🛠️ Local Setup

1.  Ensure the PostgreSQL Docker container is running (via the root `docker-compose.yml`).
2.  **Start the API:**

    ```bash
    pnpm start:dev
    ```

    The API will be available at `http://localhost:3000`.

3.  **Database Migration:** Once entities are defined, run migrations to set up the schema:
    ```bash
    # Command pending ORM setup (e.g., TypeORM or Prisma commands)
    ```
