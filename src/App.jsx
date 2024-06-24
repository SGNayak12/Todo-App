import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import FetchButton from "./FetchButton";

function App(props) {
  return (
    <>
      <NavBar username={"Suhas G Nayak"}></NavBar>

      <div
        style={{
          marginTop: "20px",
        }}
        id="mainBody"
      >
        <FetchButton />
      </div>
    </>
  );
}

export default App;
