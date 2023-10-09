import { FaShoppingBag } from "react-icons/fa";
    
import '../stylesshets/NavBar.css'
const CartWidget = () => {
    return(
        <div className='carrito'>
           <i className="imgCarrito" >< FaShoppingBag /></i>
            {/* <img className="imgCarrito" src={cart}/> */}
            0
           
        </div>
    )
}
export default CartWidget