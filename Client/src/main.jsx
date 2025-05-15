import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Studies from './components/Studies'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <About />
    <Experiences />
    <Projects />
    <Studies />
  </StrictMode>,
)
