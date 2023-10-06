import logo from '../Images/MDSLogo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/NavBar.css';


export const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="light"
        data-bs-theme="light"
        sticky="top"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width="150" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home">Acerca de</Nav.Link>
              <Nav.Link href="#features">Servicios</Nav.Link>
              <Nav.Link href="#pricing">Experiencia</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
