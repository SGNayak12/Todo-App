import React, { useState } from 'react'

function Signup() {
  const [username,setusername]=useState('');
  const [Password,setPassword]=useState('');

  function Signup(){
      const username=document.getElementById('username').value;
      const password=document.getElementById('password').value;
      

  }
  return (
    <>
    <center>
        <div style={{
        width:"300px",
        height:"100px",
        padding:"5px",
        backgroundColor:"aliceblue",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        border:"2px solid black",
        gap:"4px",
        marginTop:"50px"
    }} id="signup">
       <input type="text" id="username" placeholder='username'/>
       <input type="password" id="password" placeholder='password' />
       <button onClick={()=>{
 
        
        
       }
       } type='submit'>Signup</button>
    </div>
    </center>
    
    </>
  )
}

export default Signup