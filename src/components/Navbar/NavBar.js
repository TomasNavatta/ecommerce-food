import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from './assets/logo.png';



function NavBar() {
  return (
    <Navbar expand="lg" >
      <Container>
        <img href="#home" className="logo" src={logo}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Promociones</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hamburguesass</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pizzas</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;