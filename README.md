Spendly 💰 — Frontend

Spendly is a personal finance management platform under development, built with focus on scalability, clean architecture, and real-world usability.

Originally designed as a digital banking simulation (Elo Bank), the project evolved into Spendly to better represent a practical financial product, focused on expense tracking, organization, and user-centered features.

🚧 Project Status: Active development

🎯 Project Goal

Build a full stack application from scratch that demonstrates:

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

Complete authentication flow implemented:

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

Request:

{
  "cpf": "12345678901",
  "password": "123456"
}

Response:

{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "type": "Bearer"
}
Get Current User

GET /customers/me

Headers:

Authorization: Bearer <JWT_TOKEN>
🔗 Related Repository

Backend:
https://github.com/paulojrtoledo/spendly-backend

📦 How to run locally
# Clone the repository
git clone https://github.com/paulojrtoledo/spendly-frontend.git

# Access the folder
cd spendly-frontend

# Install dependencies
npm install

# Run development server
npm run dev
👤 Author

Paulo Emilio de Toledo Jr
