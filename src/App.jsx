import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Landingpage from './components/Landingpage.jsx'

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 tex-white">
      <Navbar />
      <Landingpage />
    </div>
  )
}

export default App