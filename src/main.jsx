import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import {AcercaDe} from './Components/AcercaDe';
import {Servicios} from './Components/Servicios';
import {Frames} from './Components/Frames';
import { Nav } from 'react-bootstrap';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <NavBar/>

    <Home/>

    <AcercaDe/>

    <Servicios/>

    <Frames/>

    
  </React.StrictMode>,
)
