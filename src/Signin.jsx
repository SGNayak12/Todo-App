import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./App.css";
function Signin() {
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
            style={{
              width: "200px",
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{
              width: "200px",
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />

          <Button variant="contained">Signin</Button>
        </div>
      </div>
    </>
  );
}
export default Signin;
