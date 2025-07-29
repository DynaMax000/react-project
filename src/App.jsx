import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Landingpage from './components/Landingpage.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Eyes from './components/Eyes.jsx'  
import Featured from './components/Featured.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-800 text-white">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App