import cart from './assets/cart.png'
import '../Navbar/NavBar.css'
const CartWidget = () => {
    return(
        <div className='carrito'>
            <img className="imgCarrito" src={cart}/>
            0
           
        </div>
    )
}
export default CartWidget