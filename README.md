﻿# Financial-Advisor
I've created a comprehensive AI finance adviser website with both frontend and backend components. Here's what I've set up:

Frontend:

Modern React + TypeScript setup with Vite
Clean component structure with Navbar, Footer, and FinanceAdviser components
Responsive design using Tailwind CSS
Beautiful UI with loading states and error handling
Dashboard with mock financial data visualization
React Router for navigation
Backend:

Express.js server with TypeScript
OpenAI integration for AI-powered financial advice
Proper error handling and input validation
CORS enabled for frontend communication
Environment variables for API keys
Type safety with TypeScript
Security:

API keys stored in .env file
.gitignore configured to exclude sensitive files
Input validation on both frontend and backend
CORS protection
To start the application:

In one terminal, start the frontend:

npm run dev
In another terminal, navigate to the backend folder and start the server:

cd backend
npm install
npm run dev
The application will be available at the local development URL. You can:

Ask financial questions on the home page
View the mock dashboard with financial metrics
Navigate between pages using the navbar
The frontend communicates with the backend API, which then uses OpenAI to generate financial advice. The response is displayed in a clean, user-friendly format.



In backend folder ther is a .env file 
you can use your api key here
