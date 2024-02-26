# CommissionPlanSimulator
## Prerequisites
Install Node.js (12.x or higher)
Install Docker and Docker Compose
## Installation & Running
1. Clone the Repository
# Setup Environment

## Backend environment setup
cd backend
cp .env.example .env

## Start PostgreSQL Database
  docker-compose up -d db
## Install Dependencies & Run Backend
cd backend
npm install
npx prisma migrate dev
npm run dev

## Install Dependencies & Run Frontend
cd frontend
npm install
npm run dev
 # Access Application
Frontend: http://localhost:3000
Backend API: http://localhost:5000 
