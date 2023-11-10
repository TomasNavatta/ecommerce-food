import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import '../components/stylesshets/finalizarCompra.css'


const FinalizarCompra =() => {
  const {cart} = useContext(cartContext)
  return (
    <>
    {cart.length > 0 ?
      ( <div className="centerr">
      <div className="card">
        
        {cart.map((product) => (
          <div key={product.id} className="product-container">
            <img className="imgFinalizarCompra" src={product.image} alt={product.title} />
            <div className="product-details">
              <p>{product.title}</p>
              <p>${product.price}</p>
              <p>{product.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>) :
    (  <div className="vaciarCarrito">
    <h3>tu carrito esta vacio</h3>
    </div>)
    
    }
    </>

  );
};


export default FinalizarCompra;