# Todo-App ✅

A simple Todo application with a React (Vite + Tailwind) frontend and an Express backend. The frontend currently persists todos in localStorage; the backend exposes REST endpoints and persists to `todo.json` (and contains a MongoDB user model placeholder).

---

## 🧭 Project structure

- Backend/
  - `index.js` — Express server with CRUD endpoints and simple file-backed storage (`todo.json`).
  - `todo.json` — current persistent store (JSON file) used by backend.
  - `package.json` — backend dependencies.

- frontend/
  - `src/` — React app source
    - `App.jsx` — app container and state handling
    - `components/` — `TodoForm`, `TodoItem`
    - `contexts/` — `todocontext` (provider + hook)
  - Tailwind + Vite configuration and dev scripts
  - `package.json` — frontend dependencies & scripts

---

## 🔧 Technologies

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- DB (optional): MongoDB (mongoose is included in backend deps)

---

## ⚡ Features

- Add, edit, toggle complete and delete todos in the UI
- Frontend persists todos to `localStorage` by default
- Backend provides REST endpoints to list, create, update and delete todos (file-backed)

---

## 🚀 Getting started (development)

### Prerequisites

- Node.js (>= 18 recommended)
- npm (or yarn)
- MongoDB (optional — backend currently connects to `mongodb://127.0.0.1:27017/TodoDB` if available)

### Install dependencies

Open two terminals (one for backend, one for frontend):

Backend:

```bash
cd Backend
npm install
# then run
node index.js
# or install nodemon globally and run
# npx nodemon index.js
```

Frontend:

```bash
cd frontend
npm install
npm run dev
# open http://localhost:5173 (vite default) in your browser
```

**Note:** Backend package.json currently does not include `start`/`dev` scripts. You can add:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---

## 🧾 Backend API

Base address: `http://localhost:3000`

- GET /todos
  - Returns array of todos
- GET /todos/:id
  - Returns a single todo by numeric id
- POST /createTodo
  - Create a new todo
  - Body (JSON): `{ "title": "My title", "description": "Details" }`
- PUT /todos/:id
  - Update an existing todo
  - Body (JSON): `{ "title": "Updated title", "description": "Updated" }`
- DELETE /todos/:id
  - Deletes a todo

Example cURL (create):

```bash
curl -X POST http://localhost:3000/createTodo \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy groceries","description":"Eggs, Milk"}'
```

Response (201) example:

```json
{
  "id": 123456,
  "title": "Buy groceries",
  "description": "Eggs, Milk"
}
```

---

## 💡 Current behavior & notes

- The frontend currently uses `localStorage` for todo persistence and does not call backend endpoints. If you want a synced app, integrate `fetch` or `axios` calls in the frontend and use the backend endpoints.
- The backend reads/writes `todo.json` and does not currently write to MongoDB. There is an unused Mongoose user schema in `index.js` that appears intended for authentication later.

---

## ✅ Suggested improvements (short roadmap)

- Add `start` / `dev` scripts to backend `package.json` and add CORS middleware
- Connect frontend to backend (replace localStorage with API calls)
- Improve data validation and error handling on backend
- Add tests (frontend unit / backend integration)
- Add authentication (JWT + user management) if multi-user support is needed
- Add prettier / eslint rules and CI

---

## 🙋‍♂️ Contributing

Contributions are welcome. Please open issues or PRs describing the change, add tests where applicable, and follow the code style in each folder.

---

## 📄 License

Add a license (e.g. MIT) if you plan to open source this project.

---

If you'd like, I can:
- add `start/dev` scripts to the backend
- implement CORS and a small fetch wrapper in the frontend to integrate with the backend
- add a sample `.env` and instructions for MongoDB connection

Tell me which of the above you'd like me to do next and I'll proceed. ✨
