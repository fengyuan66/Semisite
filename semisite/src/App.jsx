import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router-dom'
//pages import
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Employees from './pages/Employees.jsx'
import Projects from './pages/Projects.jsx'
import Newsletter from './pages/Newsletter.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
    </>
    
  )
}
export default App
