# Spendly 💰 — Frontend

**Spendly** is a personal finance management platform under development, built with a focus on scalability, clean architecture, and real-world usability.

Originally designed as a digital banking simulation (Elo Bank), the project evolved into Spendly to better represent a practical financial product, focused on expense tracking, organization, and user-centered features.

> 🚧 **Project Status:** Active development

---

## 🎯 Project Goal

Build a full stack application from scratch that demonstrates:

- Mastery of **React, TypeScript, and modern frontend ecosystem**
- Clean component architecture and best practices
- Integration with a secure backend (**JWT-based authentication**)
- Ability to design and implement a real-world application

---

## 🚀 Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **React Router DOM v7**
- **Axios**

---

## 🧠 Domain Direction (Elo Bank → Spendly)

The project was initially built as a digital banking frontend to simulate real banking operations.

It was later refactored into **Spendly**, a personal finance platform, to:

- Focus on a more realistic and widely used product
- Improve portfolio relevance and real-world applicability
- Enable future features such as expense tracking, dashboards, and financial insights
- Maintain the technical structure while evolving the domain

---

## ✅ Progress

### Phase 1 — Authentication (Completed)

- Project structure setup
- Login page with CPF and password validation
- Controlled inputs with React state
- API client configuration (Axios)
- Customer registration page
- Integration with backend (`POST /customers`)
- Form validation aligned with backend rules
- Error handling with API responses
- Login integration with backend (`POST /auth/login`)
- JWT token storage (`localStorage`)
- Axios interceptor attaching `Authorization: Bearer <token>`
- Authentication flow fully integrated with backend

---

### Phase 2 — Core Features (In progress)

- Initial dashboard structure
- Fetch authenticated user data (`GET /customers/me`)
- Financial transactions (future: income/expense tracking)
- Transaction history
- Additional personal finance modules

---

## 🔐 Authentication Flow

1. User submits CPF and password  
2. Frontend calls `POST /auth/login`  
3. Backend returns JWT token  
4. Token is stored in `localStorage`  
5. Axios interceptor attaches `Authorization: Bearer <token>`  
6. Backend validates the token and identifies the user  

---

## 🌐 API Integration

### Login

- Endpoint: `POST /auth/login`

**Request:**
```json
{
  "cpf": "12345678901",
  "password": "123456"
}

Response:

{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "type": "Bearer"
}
Register Customer
Endpoint: POST /customers
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


---

## 🚀 Agora faz isso

1. Substitui o README inteiro
2. Salva
3. Resolve o conflito:

```bash
git add README.md
git rebase --continue
git push origin main
