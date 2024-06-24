import { grey } from "@mui/material/colors";
import { flexbox } from "@mui/system";
import React from "react";
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
const FetchButton = () => {
  const [data, setData] = useState([]);

  const handleClick = async () => {
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
    }
  };
  return (
    <>
      <button
        style={{
          marginTop: "200px",
          marginLeft: "100px",
          width: 120,
          height: 60,
          backgroundColor: grey,
          borderRadius: 10,
          borderStyle: "solid",
        }}
        onClick={handleClick}
        type="submit"
        id="submit"
      >
        Add Item
      </button>

      {data.map((value) => {
        return (
          <div
            style={{
              width: 250,
              height: 120,
              display: flexbox,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: "red",
              borderRadius: 10,
              borderStyle: "solid",
              borderWidth: "2px",
              borderColor: "black",
              padding: 5,
            }}
            key={Math.floor(Math.random() * 100)}
          >
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default FetchButton;
