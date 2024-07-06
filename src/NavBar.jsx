import "./App.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar() {
  let [username, setusername] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/admin/profile", {
      method: "GET",
      headers: {
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setusername(data.username);
        console.log(data);
      });
  }, []);

  if (username) {
    return (
      <div id="Nav-bar">
        <h3>TODO APP</h3>
        <div id="button">
          <p>{username}</p>
          <Button
            onClick={() => {
              localStorage.setItem("token", null);
            }}
            variant="contained"
          >
            Logout
          </Button>
        </div>
      </div>
    );
  } else {
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
}

export default NavBar;
