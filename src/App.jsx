import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Landingpage from './components/Landingpage.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Eyes from './components/Eyes.jsx'  

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 tex-white">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  )
}

export default App