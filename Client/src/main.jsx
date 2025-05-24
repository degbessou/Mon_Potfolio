import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Studies from './components/Studies'
import Informations from './components/Informations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner />
    <Navbar />
    <About />
    <Experiences />
    <Projects />
    <Studies />
    <Informations />
    <Contact />
    <Footer />
  </StrictMode>,
)
