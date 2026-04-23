<<<<<<< HEAD
Spendly 💰 — Frontend

Spendly is a personal finance management platform under development, built with focus on scalability, clean architecture, and real-world usability.

Originally designed as a digital banking simulation (Elo Bank), the project evolved into Spendly to better represent a practical financial product, focused on expense tracking, organization, and user-centered features.
=======
Spendly - Frontend

Frontend web do Spendly, uma aplicacao de gestao financeira pessoal.
>>>>>>> 207a87b (docs: align frontend branding with Spendly)

Este projeto contem, no estado atual, o fluxo de autenticacao e cadastro integrado ao backend.

Project status: Active development

Tech stack

<<<<<<< HEAD
Mastery of React, TypeScript, and modern frontend ecosystem
Clean component architecture and best practices
Integration with a secure backend (JWT-based authentication)
Ability to design and implement a real-world application
🚀 Tech Stack
React 19
TypeScript
Vite
Tailwind CSS v4
React Router DOM v7
Axios
🧠 Domain Evolution (Elo Bank → Spendly)

The project was initially built as a digital banking frontend to simulate real banking operations.

It was later refactored into Spendly, a personal finance platform, to:

Focus on a more realistic and widely used product
Improve portfolio relevance and real-world applicability
Enable future features such as expense tracking, dashboards, and financial insights
Maintain the technical structure while evolving the domain
✅ Progress
Phase 1 — Authentication (Completed)
Project structure setup
Login page with CPF and password validation
Controlled inputs with React state
API client configuration (Axios)
Customer registration page
Integration with backend (POST /customers)
Form validation aligned with backend rules
Error handling with API responses
Login integration with backend (POST /auth/login)
JWT token storage (localStorage)
Axios interceptor to attach Authorization header
Authentication flow fully integrated with backend
Phase 2 — Core Features (In progress)
Dashboard (initial structure)
Fetch authenticated user data (GET /customers/me)
Transactions (future: expense/income tracking)
Pix key management (subject to domain evolution)
Transaction history
🔐 Authentication Flow
=======
- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM v7
- Axios
>>>>>>> 207a87b (docs: align frontend branding with Spendly)

Implemented in this frontend

<<<<<<< HEAD
User submits CPF and password
Frontend calls POST /auth/login
Backend returns JWT token
Token is stored in localStorage
Axios interceptor attaches token to all requests
Protected requests include Authorization: Bearer <token>
Backend validates token and identifies the user
🌐 API Integration
Login

POST /auth/login
=======
- Login page with CPF/password validation
- Register page
- Integration with backend `POST /auth/login`
- Integration with backend `POST /customers`
- JWT token storage in `localStorage`
- Axios interceptor sending `Authorization: Bearer <token>`

Planned for future development

- Fetch authenticated user data (`GET /customers/me`)
- Additional personal finance modules

Authentication flow

1. User submits CPF and password
2. Frontend calls `POST /auth/login`
3. Backend returns JWT token
4. Token is stored in `localStorage`
5. Axios interceptor attaches `Authorization: Bearer <token>`

API integration snapshot

Login
>>>>>>> 207a87b (docs: align frontend branding with Spendly)

- Endpoint: `POST /auth/login`

Request example:

```json
{
  "cpf": "12345678901",
  "password": "123456"
}
```

Response example:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "type": "Bearer"
}
<<<<<<< HEAD
Get Current User

GET /customers/me
=======
```
>>>>>>> 207a87b (docs: align frontend branding with Spendly)

Register customer

- Endpoint: `POST /customers`

<<<<<<< HEAD
Backend:
https://github.com/paulojrtoledo/spendly-backend

📦 How to run locally
# Clone the repository
git clone https://github.com/paulojrtoledo/spendly-frontend.git

# Access the folder
cd spendly-frontend

# Install dependencies
=======
How to run locally

```bash
>>>>>>> 207a87b (docs: align frontend branding with Spendly)
npm install
npm run dev
```

Author

Paulo Emilio de Toledo Jr
