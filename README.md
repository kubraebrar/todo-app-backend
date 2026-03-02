#  Todo App Backend (Node.js & Prisma 7)

This project is a **Dockerized Todo List backend application** built with a modern server architecture. It provides secure user authentication, authorization, and personal task management using industry-standard tools.

---

##  Tech Stack
- Node.js & Express.js — REST API backend
- Prisma v7.x — ORM with adapter-pg
- PostgreSQL — Database
- Docker & Docker Compose — Containerization
- JWT — Authentication
- Bcrypt.js — Password hashing

---

## Features
- User registration with hashed passwords
- JWT authentication
- Protected routes
- Dockerized setup
- Prisma v7 compatible architecture

---

##  Installation

### 1. Clone Repo
```bash
git clone https://github.com/kubraebrayrak/todo-app-backend.git
cd todo-app-backend
```

---

### 2. Create `.env` file
```env
DATABASE_URL="postgresql://postgres:postgres@database:5432/todoapp"
JWT_SECRET="your_secure_secret_key"
PORT=5000
```

---

### 3. Run Containers
```bash
docker compose up --build
```

---

### 4. Sync Database
```bash
npx prisma db push
```

---

###  Run App
```
http://localhost:5000
```

---

##  Project Structure
```
chapter_4/
│
├── public/
│   └── index.html
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── todoRoutes.js
│   ├── prismaClient.js
│   └── server.js
├── Dockerfile
├── docker-compose.yaml
├── package.json
├── package-lock.json
└── todo-app.rest
```

---

