import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'

function App() {

  return (
   <div>
    <Navbar />
    <Home />
    <Footer />
    
   </div>
  )
}

export default App
