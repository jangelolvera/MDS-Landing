import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Home/>
    
  </React.StrictMode>,
)
