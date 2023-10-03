import './footer.css'
import logo from '../Navbar/assets/logo (3).png';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            <img className="logoFooter" src={logo}/>
          <div className='secciones'>
            <h3>Secciones</h3>
            <ul className='footerItem'>
        <li><a href=''>Home</a></li>
        <li><a href=''>Menú</a></li>
        <li><a href=''>Promociones</a></li>
        <li><a href=''>Nosotros</a></li>
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