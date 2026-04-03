# 💰 FinanceAI Advisor

A full-stack AI-powered financial advisor web application built with **React + TypeScript** on the frontend and **Express.js + TypeScript** on the backend. Users can ask natural-language financial questions and receive intelligent, actionable advice powered by **OpenAI GPT-3.5 Turbo**.

![App Screenshot](https://github.com/user-attachments/assets/66af19c5-91b1-4247-a66e-2a26e8cd9559)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Pages & Components](#-pages--components)
- [Security](#-security)
- [Contributing](#-contributing)

---

## ✨ Features

- **AI-Powered Financial Advice** — Ask any financial question and get a clear, personalised response from an OpenAI GPT-3.5 Turbo model configured as a professional financial advisor.
- **Financial Dashboard** — View mock financial metrics including total balance, savings, investments, and monthly growth alongside a recent activity feed.
- **Responsive Design** — Fully responsive UI built with Tailwind CSS that looks great on desktop and mobile.
- **Loading & Error States** — Smooth loading spinners and user-friendly error messages for a polished experience.
- **24/7 Availability** — The backend API is stateless and always ready to answer questions.

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| TypeScript | 5.5 | Type safety |
| Vite | 5.4 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| React Router DOM | 6.22 | Client-side routing |
| Lucide React | 0.344 | Icon library |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | — | Runtime |
| Express.js | 4.18 | HTTP server framework |
| TypeScript | 5.3 | Type safety |
| OpenAI SDK | 4.28 | GPT-3.5 Turbo integration |
| dotenv | 16.4 | Environment variable management |
| CORS | 2.8 | Cross-origin request handling |
| tsx | 4.7 | TypeScript execution & watch mode |

---

## 📁 Project Structure

```
Financial-Advisor/
│
├── index.html                  # HTML entry point
├── package.json                # Frontend dependencies & scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript root config
├── tsconfig.app.json           # TypeScript app config
├── tsconfig.node.json          # TypeScript node config
│
├── src/                        # Frontend source
│   ├── main.tsx                # React app entry point
│   ├── App.tsx                 # Root component with router setup
│   ├── index.css               # Global styles
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Top navigation bar with logo & links
│   │   ├── Footer.tsx          # Footer with quick links & social icons
│   │   └── FinanceAdviser.tsx  # Query form + AI response display
│   │
│   └── pages/
│       ├── Home.tsx            # Home page — hosts FinanceAdviser + feature cards
│       └── Dashboard.tsx       # Dashboard — financial metrics & activity feed
│
└── backend/                    # Backend source
    ├── package.json            # Backend dependencies & scripts
    ├── tsconfig.json           # Backend TypeScript config
    ├── .env                    # Environment variables (not committed)
    │
    └── src/
        ├── server.ts           # Express server entry point
        ├── routes/
        │   └── api.ts          # API route definitions
        └── controllers/
            └── aiController.ts # OpenAI integration & advice logic
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- An **OpenAI API key** — get one at [platform.openai.com](https://platform.openai.com)

---

### Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Itinerant18/Financial-Advisor.git
   cd Financial-Advisor
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The frontend will be available at **http://localhost:5173**.

Other available scripts:
```bash
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

---

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Configure your OpenAI API key** (see [Environment Variables](#-environment-variables)).

4. **Start the backend server:**
   ```bash
   npm run dev
   ```

The backend API will be available at **http://localhost:3000**.

Other available scripts:
```bash
npm run build   # Compile TypeScript to JavaScript (outputs to dist/)
npm run start   # Run the compiled production build
```

---

## 🔐 Environment Variables

The backend reads its configuration from `backend/.env`. This file is excluded from version control via `.gitignore`.

Create `backend/.env` with the following content:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | ✅ Yes | Your OpenAI secret API key |
| `PORT` | ❌ Optional | Port the Express server listens on (defaults to `3000`) |

> ⚠️ **Never commit your `.env` file or API key to version control.**

---

## 📡 API Reference

### `POST /api/advice`

Sends a financial question to the AI and returns tailored advice.

**Request Body:**
```json
{
  "query": "How should I start investing with $1000?"
}
```

**Success Response (`200 OK`):**
```json
{
  "advice": "Starting with $1,000 is a great first step..."
}
```

**Error Responses:**

| Status | Body | Reason |
|---|---|---|
| `400 Bad Request` | `{ "error": "Query is required" }` | Missing `query` in request body |
| `500 Internal Server Error` | `{ "error": "Failed to generate financial advice" }` | OpenAI API error or server issue |

---

## 🖥 Pages & Components

### Pages

#### `/` — Home Page
- Displays a hero heading ("Your AI Financial Advisor") with a subtitle.
- Renders the **FinanceAdviser** component for asking questions.
- Shows three feature highlight cards: *Expert Advice*, *24/7 Availability*, *Personalized Solutions*.
- Manages `isLoading` and `response` state, calling `POST /api/advice` on form submission.

#### `/dashboard` — Financial Dashboard
- Displays four KPI cards: **Total Balance** ($24,500), **Total Savings** ($12,750), **Investments** ($8,250), **Monthly Growth** (+12.5%) with colour-coded icons.
- Shows a **Recent Activity** table with mock transaction history including dates, descriptions, and colour-coded amounts.

### Components

#### `Navbar`
- Indigo top bar with a `DollarSign` icon logo linking to `/`.
- Navigation link to Home.

#### `Footer`
- Three-column dark footer with brand description, quick links (Home, Dashboard, Privacy Policy, Terms of Service), and social media icons (Twitter, GitHub, LinkedIn).

#### `FinanceAdviser`
- Controlled `<textarea>` for entering the financial question.
- Submit button that shows a loading spinner (`Loader2`) while the API call is in progress; disabled when loading or the input is empty.
- Displays the AI response in a styled `<pre>`-like block when available.

### AI Controller Logic (`aiController.ts`)

- Validates that a `query` field exists in the request body.
- Sends a chat completion request to `gpt-3.5-turbo` with a system prompt instructing the model to act as a knowledgeable financial advisor with appropriate disclaimers.
- Returns the advice text as JSON.

---

## 🔒 Security

| Concern | Mitigation |
|---|---|
| API key exposure | Stored in `backend/.env`, excluded from git via `.gitignore` |
| Cross-origin requests | CORS middleware enabled on the Express server |
| Input validation | Backend checks for a non-empty `query` before calling OpenAI |
| TypeScript | End-to-end type safety reduces runtime errors on both frontend and backend |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the styling, add real data integrations, or extend the dashboard with charts, feel free to open a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use and modify it for your own projects.

---

<p align="center">Made with ❤️ using React, TypeScript & OpenAI</p>
