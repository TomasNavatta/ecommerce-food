import '../stylesshets/footer.css'
import logo from '../Navbar/assets/logo (3).png';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        // <footer>
        //     <img className="logoFooter" src={logo} alt='logo del footer'/>
        //   <div className='secciones'>
        //     <h3>Secciones</h3>
        //     <ul className='footerItem'>
        // <li><Link  to={"/"} >Home</Link></li>
        // <li><Link  to={"/category/menu"} >Menú</Link></li>
        // <li><Link  to={"/category/promociones"} >Promociones</Link></li>
        // <li><Link  to={"/category/nosotros"} >Nosotros</Link></li>
        //     </ul>
        //   </div>
        //   <div className='contacto'>
        //     <h3>Seguinos</h3>
        //     <ul className='footerItem'>
        // <i><FaInstagram/></i>
        // <i><FaTiktok/></i>
        // <i><FaTwitter/></i>
        //     </ul>
        //   </div>
        //   <div className='derechosContainer'>
        //     <h6>Todos los derechos reservados © The Fast food Store 2023.</h6>
        // </div>     
        // </footer>

        <footer className='footer container'>
            <img className="logo-2" src={logo} alt='logo del footer'/>
            <div className='links'>
              <h4>Secciones</h4>
              <ul  className='footerItem'>
              <li><Link  to={"/"} >Home</Link></li>
        <li><Link  to={"/category/menu"} >Menú</Link></li>
         <li><Link  to={"/category/promociones"} >Promociones</Link></li>
         <li><Link  to={"/category/nosotros"} >Nosotros</Link></li>

              </ul>
            </div>
            <div className='links'>
              <h4>Contacto</h4>
          
              <ul  className='footerItem'>
              <li>lorem</li>
        <li>lorem</li>
         <li>lorem</li>
         <li>lorem</li>

              </ul>
            </div>
            <div className='links'>
              <h4>Seguinos</h4>
              <div className='socials'>
                <div className='social instagram'>
                <i><FaInstagram/></i>
                </div>
                <div className='social tiktok'>
                <i><FaTiktok/></i>
                </div>
                <div className='social twitter'>
                <i><FaTwitter/></i>
                </div>

              </div>
            </div>
            <div class="scroll-to-top">
              <a href='#'><i><BiUpArrowAlt/></i></a>
            </div>


        </footer>
    )
}

export default Footer