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
    description: "from 12Am",
    id: 1,
  },
  {
    title: "wake up",
    description: "At 6AM",
    id: 1,
  },
  {
    title: "Todo",
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
  const [email, setemail] = useState("sdmsmn");
  const [todo, settodo] = useState("");
  return (
    <>
      {email}
      <NavBar username={"Suhas G Nayak"}></NavBar>
      <div id="mainBody">
        {todos.map((todo) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              id="todoCard"
            >
              <h3 id="title">{todo.title}</h3>
              <p id="description">{todo.description}</p>
            </div>
          );
        })}
        <InputTodo />
      </div>
    </>
  );
}

function InputTodo() {
  return (
    <>
      <div style={{}} id="inTodo">
        <input
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="text"
          name="todoTitle"
        />
        <input
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="text"
          name="todoDescription"
          id="Description"
        />
        <button
          onClick={() => {
            const todoTitle = document.getElementById("title").value;
            const todoDescription =
              document.getElementById("Description").value;

            const newTodo = {
              title: todoTitle,
              description: todoDescription,
            };
            todos.push({
              newTodo,
              // id: Math.floor(Math.random()),
            });
          }}
          type="submit"
          id="submit"
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default App;
