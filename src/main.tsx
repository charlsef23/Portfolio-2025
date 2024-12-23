import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import './styles/Navbar.css'
import './styles/Hero.css'
import './styles/About.css'
import './styles/Projects.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
