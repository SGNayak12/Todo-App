import "./App.css";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div id="Nav-bar">
        <h3>TODO APP</h3>
        <div id="button">
          <Button
            onClick={() => {
              navigate("/signin");
              console.log("Button clicked");
            }}
            variant="contained"
          >
            Signin
          </Button>
          <Button
            onClick={() => {
              navigate("/signup");
              console.log("Button clicked");
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
