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
];
const FetchButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/showTodo");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Assuming the response is JSON
      setData(result);
      console.log(result);
    } catch (err) {
      console.error("Fetch error: ", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} type="submit" id="submit">
        Submit
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default FetchButton;

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);
//   const [email, setemail] = useState("sdmsmn");
//   const [todo, settodo] = useState("");
//   return (
//     <>
//       {email}
//       <NavBar username={"Suhas G Nayak"}></NavBar>
//       <div id="mainBody">
//         {todos.map((todo) => {
//           return (
//             <div
//               style={{
//                 display: "flex",
//                 gap: "10px",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//               }}
//               id="todoCard"
//             >
//               <h3 id="title">{todo.title}</h3>
//               <p id="description">{todo.description}</p>
//             </div>
//           );
//         })}
//         <InputTodo />
//       </div>
//     </>
//   );
// }

// function InputTodo() {
//   return (
//     <>
//       <div style={{}} id="inTodo">
//         <input
//           onChange={(e) => {
//             setemail(e.target.value);
//           }}
//           type="text"
//           name="todoTitle"
//         />
//         <input
//           onChange={(e) => {
//             setemail(e.target.value);
//           }}
//           type="text"
//           name="todoDescription"
//           id="Description"
//         />
//         <button
//           onClick={() => {
//             fetch("http://localhost:3000/showTodo").then((res) => {
//               console.log(res);
//             });
//           }}
//           type="submit"
//           id="submit"
//         >
//           Submit
//         </button>
//       </div>
//     </>
//   );
// }
// export default App;
