import logo from "../Images/MDSLogo.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
  return (
    <>

      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src={logo} 
              alt="logo"
              width="150"
              height="40"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Acerca de</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Experiencia</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    </>
  );
};
