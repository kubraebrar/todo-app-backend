Todo App Backend (Node.js & Prisma 7)
This project is a dockerized Todo List application developed using modern backend architecture. It features user registration, authentication, and secure data management.

Tech Stack
Node.js & Express.js: Server-side logic and REST API.

Prisma v7.x: Modern ORM for database interaction, utilizing the latest adapter-pg.

PostgreSQL: Relational database for persistent storage.

Docker & Docker Compose: Containerization of the application and database.

JSON Web Token (JWT): Secure user authentication.

Bcrypt.js: Secure password hashing.

Features
User Sign-Up: Secure registration with hashed passwords stored in PostgreSQL.

User Login: JWT-based authentication for secure access to personal data.

Docker Integration: Spin up the entire development environment with a single command.

Prisma 7 Ready: Implements the latest Prisma standards including manual adapter configuration.

Installation and Setup
Follow these steps to run the project locally:

Clone the Repository:

git clone https://github.com/kubraebrayrak/todo-app-backend.git
cd todo-app-backend
Configure Environment Variables:
Create a .env file in the root directory and add the following:

Kod snippet'i
DATABASE_URL="postgresql://postgres:postgres@database:5432/todoapp"
JWT_SECRET="your_secure_secret_key"
PORT=5000
Start with Docker:
To build and run the application and database containers:

docker compose up --build
Initialize the Database:
While the containers are running, synchronize your database schema:

npx prisma db push
The application will be accessible at http://localhost:5000.

Project Structure
chapter_4/
│
├── public/
│   └── index.html              
│
├── prisma/                     # Database schema, migrations, and seeds
│   ├── schema.prisma           # Database model definitions
│   └── migrations/             # SQL migration history
│
├── src/
│   └── middlewares/
│       └── authMiddleware.js    # Middleware for verifying JWT and protecting routes
│   └── routes/
│       └── authRoutes.js        # Routes for user registration and login
│       └── todoRoutes.js        # Routes for authenticated CRUD operations on todos
│   └── prismaClient.js          # Prisma client database setup and table creation
│   └── server.js                # Main server entry point that sets up routing and middleware
│
├── Dockerfile                   # Docker container setup instructions
├── docker-compose.yaml          # Docker setup config file
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lockfile for exact dependency versions
└── todo-app.rest                # REST client file for emulating API requests
