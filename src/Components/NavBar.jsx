import logo from "../Images/MDSLogo.jpg";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width="208" height="56" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              Acerca de
            </a>
            <a className="nav-link" href="#">
              Servicios
            </a>
            <a className="nav-link" href="#">
              Experiencia
            </a>
            <a className="nav-link" aria-disabled="true">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
