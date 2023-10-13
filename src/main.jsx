import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import {AcercaDe} from './Components/AcercaDe';
import {Servicios} from './Components/Servicios';
import {Frames} from './Components/Frames';
import { Nav } from 'react-bootstrap';
import { Contacto } from './Components/Contacto';
import { Footer } from './Components/Footer';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Home></Home>
    <AcercaDe></AcercaDe>
    <Servicios></Servicios>
    <Frames></Frames>
    <Contacto></Contacto>
    <Footer></Footer>
  </React.StrictMode>,
)
