import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // backgroundColor: "gray",
            width: 300,
            margintop: "10px",
            border: "2px solid black",
            height: 210,
            display: "flex",
            alignItems: "center",
            gap: 15,
            justifyContent: "center",
            flexDirection: "column",
            padding: "5px",
          }}
        >
          <TextField
            onChange={(e) => {
              setusername(e.target.value);
            }}
            style={{
              width: "200px",
            }}
            id="username"
            label="username"
            variant="outlined"
          />
          <TextField
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            style={{
              width: "200px",
            }}
            id="password"
            label="Password"
            variant="outlined"
          />

          <Button
            onClick={() => {
              const username = document.getElementById("username").value;
              const password = document.getElementById("password").value;
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: username,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log(data);
                  localStorage.setItem("token", data.token);
                })
                .catch((error) => {
                  console.error("Error:", error); // Handle and log any errors
                });
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
export default Signup;
