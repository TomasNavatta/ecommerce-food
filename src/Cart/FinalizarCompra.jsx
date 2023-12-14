import { useContext, useState } from "react";
import { cartContext } from "../context/CartContext";
import '../components/stylesshets/finalizarCompra.css'
import '../components/stylesshets/Formulario.css'
import { getFirestore, doc, getDoc, collection, getDocs, addDoc } from 'firebase/firestore'

const FinalizarCompra =() => {
  const {cart} = useContext(cartContext)
   const [order, setOrder] = useState("");
   const [nameOrder, setNameOrder ] = useState()
   const [phoneOrder, setPhoneOrder ] = useState()
   const [mailOrder, setMailOrder ] = useState()

   const totalOrder = cart.reduce((previous, current) => previous + current.amount * current.price, 0)



   const formsOrderName = (e) => {
    setNameOrder(e.target.value)
   
  };
  
  const formsOrderPhone = (e) => {
    setPhoneOrder(e.target.value)
   
  };
  
  const formsOrderMail = (e) => {
    setMailOrder(e.target.value)
   
  };


  const sendOrder = () => {
    const db = getFirestore()

    const orderCollection = collection(db, "orders")
    const orderData = {
      buyer:{
        nombre: nameOrder,
        phone: phoneOrder,
        mail:mailOrder

      },

     item:[...cart],
     total: totalOrder
  

    }
    addDoc(orderCollection, orderData).then(({id}) => {
      setOrder(id)
      console.log(order)
    })
    
  }
  return (
    <>
    {cart.length > 0 ?
      ( <div className="centerr">
      <div className="cards">
        
        {cart.map((product) => (
          <div key={product.id} className="product-container">
            <img className="imgFinalizarCompra" src={product.image} alt={product.title} />
            <div className="product-details">
              <p>{product.title}</p>
              <p>${product.amount * product.price}</p>
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
  <form className="formulario" >
      <label className='label' htmlFor="nombre">Nombre:</label>
      <input className='input'
        type="text"
        id="nombre"
        name="nombre"
        onChange={formsOrderName}
      
      />

      <label className='label' htmlFor="telefono">Teléfono:</label>
      <input className='input'
        type="tel"
        id="telefono"
        name="telefono"
        onChange={formsOrderPhone}
        
      />

      <label className='label' htmlFor="correo">Correo electrónico:</label>
      <input className='input'
        type="email"
        id="correo"
        name="correo"
        onChange={formsOrderMail}
      
      />


    </form>
    <div className="buttonComprar">
    <button className="comprar" onClick={sendOrder}>Comprar</button>

    </div>
   
    </>
   

  );
};


export default FinalizarCompra;