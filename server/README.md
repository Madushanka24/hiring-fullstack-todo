#  TODO App – Backend

This is the backend of the Fullstack TODO application, built with Node.js and Express.
It provides a RESTful API for managing TODO items and persists data using MongoDB.

---

##  Features

* RESTful API for TODO management
* Create, read, update, and delete TODOs
* Toggle TODO completion status
* MongoDB integration using Mongoose
* Simple and scalable project structure

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors

---

##  Setup Instructions

### 1. Navigate to backend folder

```bash
cd server
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create environment file

Create a `.env` file in the `server/` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 4. Run the server

```bash
npm run dev
```

The backend will run on:

```id="q1b0m4"
http://localhost:5000
```

---

##  API Endpoints

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| GET    | /api/todos       | Get all TODO items              |
| POST   | /api/todos       | Create a new TODO               |
| PUT    | /api/todos/      | Update TODO (title/description) |
| PATCH  | /api/todos//done | Toggle done status              |
| DELETE | /api/todos/      | Delete TODO                     |

---

## MongoDB Connection Notes

### Option 2: Local MongoDB

Make sure MongoDB is running locally, then use:

```env
MONGO_URI=mongodb://127.0.0.1:27017/todo-app
```

---

##  Data Model

```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "done": "boolean",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

---

##  Assumptions

* MongoDB instance (Atlas or local) is available and reachable
* Environment variables are correctly configured
* Client sends valid JSON request bodies
* Each TODO includes at least a `title` field

---

##  Limitations

* No authentication or authorization
* No input validation (can be improved with libraries like Joi/Zod)
* Minimal error handling (no centralized error middleware)
* No rate limiting or security hardening
* No automated tests

---

##  Possible Improvements

* Add request validation (Joi / Zod)
* Implement global error handling middleware
* Add authentication (JWT-based)
* Add logging (Winston / Morgan)
* Add rate limiting and security middleware (Helmet)
* Write unit and integration tests

##  Author

Madushanka Sandaruwan
