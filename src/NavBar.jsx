import UserCard from "./UserCard";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div id="Nav-bar">
        <h3>TODO APP</h3>
        <button
          onClick={() => {
            window.location = "/signup";
            console.log("Button clicked");
          }}
        >
          Signup
        </button>
        <button
          onClick={() => {
            console.log("Button clicked");
            window.location = "/signin";
          }}
        >
          Signin
        </button>
      </div>
    </>
  );
}

export default NavBar;
