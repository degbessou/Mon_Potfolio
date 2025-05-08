import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <About />
  </StrictMode>,
)
