import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./NavBar";
import InputToDo from "./InputTodo";

let todos = [
  {
    title: "Reading",
    description: "from 10-12",
    id: 1,
  },
  {
    title: "Gym",
    description: "from 4-6",
    id: 1,
  },
  {
    title: "Sleep",
    description: "from 8-10",
    id: 1,
  },
  {
    title: "Sleep",
    description: "from 8-10",
    id: 1,
  },
  {
    title: "Sleep",
    description: "from 8-10",
    id: 1,
  },
  {
    title: "Sleep",
    description: "from 8-10",
    id: 1,
  },
];

function App() {
  const [todo, settodo] = useState("");
  return (
    <>
      <NavBar></NavBar>
      <div id="mainBody">
        {todos.map((todo) => {
          return (
            <div id="todoCard">
              <h3 id="title">{todo.title}</h3>
              <p id="description">{todo.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
