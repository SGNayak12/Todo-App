import React from 'react'
import { Outlet } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer style={{
        marginTop:"250px",
        textAlign:"center",
        // backgroundColor:"red",
        padding:"5px",
        borderTop:"2px solid black"
    }}>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
      <p>Contact us: contact@yourcompany.com</p>
    </footer>
    
    </>
  )
}

export default Footer