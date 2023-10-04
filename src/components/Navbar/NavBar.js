import CartWidget from '../CartWidget/CartWidget';
import '../steelshets/NavBar.css';
import logo from './assets/logo (3).png';
import { FaRegUserCircle } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import {Link} from 'react-router-dom'




function NavBar() {
  return (
    <nav>
      <i className='menuBurger'><HiMiniBars3BottomLeft/></i>
      <img className="logo" src={logo} alt="Logo de la empresa" />
      <ul className='navItem'>
      <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/category/menu"}>Menú</Link></li>
        <li><Link to={"/category/promociones"}>promociones</Link></li>
        <li><Link to={"/category/nosotros"}>Nosotros</Link></li>
      </ul>
      <i className='SignUp'><FaRegUserCircle/></i>
      <CartWidget />
    </nav>
  );
}





export default NavBar;