import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'
import {AcercaDe} from './Components/AcercaDe'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <NavBar/>
      <Home/>
      <AcercaDe/>

  </React.StrictMode>,
)
