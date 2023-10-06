import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import {AcercaDe} from './Components/AcercaDe';
import {Servicios} from './Components/Servicios';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <NavBar></NavBar>
    <Home></Home>
    <AcercaDe></AcercaDe>
    <Servicios></Servicios>
    
  </React.StrictMode>,
)
