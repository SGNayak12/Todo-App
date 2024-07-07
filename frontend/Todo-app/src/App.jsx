import Navbar from "./Navbar";
import Signup from "./Signup";
import {Router, Routes, Route } from "react-router-dom";
function App(){
    return (
        <>
        
        
         
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" />
          <Route path="/Signup" element={<Signup />} />
         
        </Routes>
      </Router>
         
     
      
        </>
    );
}


export default App;