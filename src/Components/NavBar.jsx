import logo from '../Images/MDSLogo.jpg';
import '../Styles/NavBar.css';

export const NavBar = () => {
  return (
    <nav>
        <div id="contenido">
          <div id="logoBox">

            <img 
            src={logo} 
            alt="Logo" 
            id='mdsLogo'
            />

          </div>

          <div id="opciones">
            
            <a>Acerca de</a>
            <a>Servicios</a>
            <a>Experiencia</a>
            <a>Contacto</a>

          </div>
        </div>
    </nav>
  )
}
