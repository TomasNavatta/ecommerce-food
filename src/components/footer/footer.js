import './footer.css'
import logo from '../Navbar/assets/logo (3).png';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <img className="logoFooter" src={logo} alt='logo del footer'/>
          <div className='secciones'>
            <h3>Secciones</h3>
            <ul className='footerItem'>
        <li><Link  to={"/"} >Home</Link></li>
        <li><Link  to={"/category/menu"} >Menú</Link></li>
        <li><Link  to={"/category/promociones"} >Promociones</Link></li>
        <li><Link  to={"/category/nosotros"} >Nosotros</Link></li>
            </ul>
          </div>
          <div className='contacto'>
            <h3>Seguinos</h3>
            <ul className='footerItem'>
        <i><FaInstagram/></i>
        <i><FaTiktok/></i>
        <i><FaTwitter/></i>
            </ul>
          </div>
          <div className='derechosContainer'>
            <h6>Todos los derechos reservados © The Fast food Store 2023.</h6>
        </div>     
        </footer>
    )
}

export default Footer