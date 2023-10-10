import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import {AcercaDe} from './Components/AcercaDe';
import {Servicios} from './Components/Servicios';
import {Frames} from './Components/Frames';
import { Nav } from 'react-bootstrap';
import { Contacto } from './Components/Contacto';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contacto></Contacto>
  </React.StrictMode>,
)
