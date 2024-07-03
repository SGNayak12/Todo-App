import "./App.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const [username, setusername] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:3000/admin/profile", {
      method: "GET",
      headers: {},
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
        setusername(data.username);
      });
  }, []);

  return (
    <>
      <div id="Nav-bar">
        <h3>TODO APP</h3>
        <div id="button">
          <Button
            onClick={() => {
              navigate("/signin");
            }}
            variant="contained"
          >
            Signin
          </Button>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            variant="contained"
          >
            Signup
          </Button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
