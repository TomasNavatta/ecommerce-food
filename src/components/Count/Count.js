import { useState } from "react"
import '../stylesshets/count.css'

const ItemCount = ({stock, initial, onAndd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="countContainer">
            <div className="count">
                <button className="buttonCount"  onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="buttonCount" onClick={increment}>+</button>
            </div>
            <div className="centerButton">
                <button className="agregarCarrito" onClick={() => onAndd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;

