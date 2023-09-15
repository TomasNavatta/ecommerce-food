import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from './assets/logo (3).png';
import { FaRegUserCircle } from "react-icons/fa";




function NavBar() {
  return (
    <nav>
       <img className="logo" src={logo}/>
       <ul className='navItem'>
        <li><a href=''>Home</a></li>
        <li><a href=''>Menú</a></li>
        <li><a href=''>Promociones</a></li>
        <li><a href=''>Nosotros</a></li>
       </ul>
       <i className='SignUp'><FaRegUserCircle/></i>
            <CartWidget />
    </nav>

  );
}

export default NavBar;