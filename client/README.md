#  TODO App – Frontend

This is the frontend of the Fullstack TODO application, built using React.js.
It provides a clean and responsive user interface for managing tasks via a RESTful backend API.

---

##  Features

* Display all TODO items
* Add new TODOs (title + optional description)
* Edit existing TODOs
* Mark TODOs as completed/uncompleted
* Delete TODOs
* Visual distinction for completed tasks (faded + strikethrough)
* Simple and modern SaaS-style UI

---

##  Tech Stack

* React.js
* Axios (API communication)
* CSS (custom styling)

---

##  Setup Instructions

### 1. Navigate to frontend folder

```bash
cd client
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start the development server

```bash
npm start
```

The app will run on:

```
http://localhost:3000
```

---

##  Backend Requirement

This frontend depends on a running backend server.

Make sure your backend is running at:

```
http://localhost:5000
```

If your backend runs on a different URL, update the base URL in:

```
src/services/api.js
```

Example:

```js
baseURL: "http://localhost:5000/api"
```

---

##  API Integration

The frontend communicates with the backend using the following endpoints:

* `GET /api/todos` → Fetch all TODOs
* `POST /api/todos` → Create TODO
* `PUT /api/todos/:id` → Update TODO
* `PATCH /api/todos/:id/done` → Toggle done status
* `DELETE /api/todos/:id` → Delete TODO

---

##  Assumptions

* The backend API is already running and accessible
* MongoDB is properly connected on the backend
* Each TODO item follows the expected schema
* Network requests succeed under normal conditions

---

##  Limitations

* No authentication or user accounts
* No persistent frontend state management (e.g., Redux)
* No offline support
* Basic error handling (can be improved with notifications/toasts)
* No pagination or filtering for large datasets

---

##  Author

Madushanka Sandaruwan
