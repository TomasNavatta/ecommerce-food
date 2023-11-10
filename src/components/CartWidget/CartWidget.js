import { FaShoppingBag } from "react-icons/fa";   


import '../stylesshets/NavBar.css'
const CartWidget = () => {
    
    return(
        <div className='carrito'>
           <i className="imgCarrito" >< FaShoppingBag /></i>
            {/* <img className="imgCarrito" src={cart}/> */}
            
           
        </div>
    )
}
export default CartWidget