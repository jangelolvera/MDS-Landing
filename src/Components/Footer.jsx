import "../Styles/Footer.css";
import mdsLogo from "../Images/MDSLogo.jpg";
import LinkedIn from "../Images/linkedin.png";

export const Footer = () => {
  return (
    <footer>
      <div id="footerContainer">
        <img src={mdsLogo} alt="mdsLogo" id="logoFoot" />

        <div id="linksBox">
          <a>Contacto</a>
          <a>Acerca de</a>
        </div>

        <a href="https://www.linkedin.com/company/mds-soluciones/">
          <img
            src={LinkedIn}
            alt="LinkedIn"
            id="linkLogo"
            
          />
        </a>
      </div>

      <hr></hr>

      <div id="creditBox">
        <a
          id="developed"
          href="https://www.linkedin.com/in/josé-angel-olvera-lópez/"
        >
          Desarrollado por: Angel Olvera
        </a>

        <div id="iconCredit">
          <a
            href="https://www.flaticon.es/iconos-gratis/linkedin"
            title="linkedin iconos"
          >
            Iconos creados por Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.es/iconos-gratis/correo-electronico"
            title="correo electrónico iconos"
          >
            Iconos creados por Uniconlabs - Flaticon
          </a>
        </div>
      </div>
    </footer>
  );
};
