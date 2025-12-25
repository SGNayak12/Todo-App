
# Todo App

A simple and modern Todo application built with React, Vite, and Tailwind CSS. This app allows you to add, edit, complete, and delete your todos, with persistent storage in the browser's localStorage.

## Features
- Add new todos
- Edit existing todos
- Mark todos as completed
- Delete todos
- Persistent storage using localStorage
- Responsive and clean UI with Tailwind CSS

## Tech Stack
- [React](https://react.dev/) (v18)
- [Vite](https://vitejs.dev/) (v5)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) for code linting

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```sh
	git clone <repo-url>
	cd Todo-App/frontend
	```
2. Install dependencies:
	```sh
	npm install
	# or
	yarn install
	```

### Running the App
To start the development server:
```sh
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production
To build the app for production:
```sh
npm run build
# or
yarn build
```

### Linting
To lint the codebase:
```sh
npm run lint
# or
yarn lint
```

## Project Structure
```
frontend/
├── public/                # Static assets
├── src/
│   ├── App.jsx            # Main app component
│   ├── index.css          # Tailwind CSS imports
│   ├── main.jsx           # Entry point
│   ├── assets/            # Images and other assets
│   ├── components/
│   │   ├── Todoform.jsx   # Form to add todos
│   │   ├── Todoitem.jsx   # Todo item component
│   │   └── index.js
│   └── contexts/
│       ├── todocontext.js # Context for todos
│       └── index.js
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── vite.config.js         # Vite config
└── README.md              # Project documentation
```
