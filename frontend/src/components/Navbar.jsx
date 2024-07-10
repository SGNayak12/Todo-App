
import React from 'react'
import {Link,NavLink,Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate();
  return (
    <>
    <nav style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderBottom:"2px solid black"
    }}>
        <div id="siteName">
            <h1>Website Name</h1>
        </div>
        <div  id='routes'>
            <ul style={{
            display:"flex",
            listStyle:"none",
            alignItems:"center",
            gap:"15px",
            
        }
        }>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                
              
            </ul>
        </div>
        <div id='buttons'>
            <button onClick={()=>
                {
                    navigate("/signup")
                }
            }>Signup</button>
        </div>
    </nav>
        <Outlet/>

    
    </>
  )
}

export default Navbar