import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import {Router, Route,Routes,Outlet } from 'react-router-dom'
function App(){
return (
    <>
    
    
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </div>
   

    </>
  )
}

export default App