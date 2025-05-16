import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Studies from './components/Studies'
import Description from './components/Description'
import Description2 from './components/Description2'
import Contact from './components/Contact'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <About />
    <Experiences />
    <Projects />
    <Studies />
    <Description2 />
    <Description />
    <Contact />
    <Footer />
  </StrictMode>,
)
