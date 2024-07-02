import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";

function App(props) {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
