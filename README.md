📚 Project Name: nest-api-book
✨ Overview
This project is a robust, scalable RESTful API built with the NestJS framework. It uses TypeScript for strong typing and leverages the power of TypeORM for database interactions with PostgreSQL. Authentication is secured using JSON Web Tokens (JWT) and Passport.

🚀 Features
* Framework: NestJS (Node.js)
* Language: TypeScript
* Database: PostgreSQL (via TypeORM)
* Authentication: JWT (JSON Web Tokens) with Passport
* Password Hashing: bcrypt for secure user authentication
* Configuration: dotenv for environment variable management
* Code Quality: ESLint and Prettier for consistent code style

⚙️ Prerequisites
* Before running this project, ensure you have the following installed:
* Node.js (LTS version recommended)
* npm (comes with Node.js)
* PostgreSQL database instance running
* A .env file in the project root with your database credentials and JWT secret (e.g., DATABASE_URL, JWT_SECRET).

🛠️ Installation
Clone the repository:
```Bash
git clone https://github.com/kestenbaum/nest-api-book.git
cd nest-api-book
```

Install dependencies:
```Bash
npm install
```
Create Environment File: Create a file named .env in the root directory and define your environment variables.

📜Development
Starts the application in watch mode. Changes automatically reload.
```Bash
npm run start:dev
```
Starts the application in watch mode with the debugger enabled.
```Bash
npm run start:debug
```
Starts the application without watch mode.
```Bash
npm run start
```

📜Build & Production
Compiles the TypeScript source code into JavaScript in the dist folder.
```Bash
npm run build
```
Runs the compiled application from the dist/main file (production usage).
```Bash
npm run start:prod
```
