import { cartContext } from '../../context/CartContext';
import ItemCount from '../Count/Count';
import '../stylesshets/productoFinal.css'
import React, { useState, useContext } from 'react';

const ProductoFinal = ({ image, title, info, stock, id }) => {
    const {addProduct} = useContext(cartContext)

   
    
    return(

<div className='divContainerProductoFinal'>
<div className="cardContainerProductoFinal">
    <div className='imgContainerProductoFinal'>
    <img src={image} alt="Imagen" className="card-img-top" />

    </div>
  
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{info}</p>
        <div className="extras">
        <h5 >Extras:</h5>
            <ul>
                <li className='extra'>
                    <input type="checkbox" id="extraCheddar" className="extraCheckbox" />
                    <label htmlFor="extraCheddar">Extra Cheddar</label>
                    <span className="price">$1000</span>
                </li>
                <li className='extra'>
                    <input type="checkbox" id="extraPanceta" className="extraCheckbox" />
                    <label htmlFor="extraPanceta">Extra Panceta</label>
                    <span className="price">$1000</span>
                </li>
                <li className='extra'>
                    <input type="checkbox" id="extraHuevo" className="extraCheckbox" />
                    <label htmlFor="extraHuevo">Extra Huevo</label>
                    <span className="price">$1000</span>
                </li>
            </ul>
            <ItemCount initial={1} stock={stock} onAndd={(quantity) => console.log('cantidad agregada', quantity)}/>
            <div className='buttonComprarproductoFinalContainer'>
            <button onClick={() => {
                  const Products = {
                    image,
                    title,
                    stock,
                    id
                  };
                   addProduct(Products)
                   console.log(Products)
            }
          } className="buttonComprarProductoFinal">Comprar</button>
            </div>
    
        </div>
    </div>
</div>
</div>




       
    )
}

export default ProductoFinal;