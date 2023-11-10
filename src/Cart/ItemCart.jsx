import '../components/stylesshets/ItemCart.css'
import { cartContext } from '../context/CartContext';
import React, { useContext } from 'react';

export const ItemCart = ({image, title, amount, price, id}) => {
  const { deleteItemToCart, addItemToCart } = useContext(cartContext);

  const handleRemoveItem = () => {
    const product = { id, title, image, price };
    deleteItemToCart(product);
  };

  const handleAddItem = () => {
    const product = { id, title, image, price };
    addItemToCart(product);
  };
  return (
    <div className='cart-Item'>
    <img src={image} alt={title}  className='img-cartItem'/>
    <div className='data-Container'>
      <div className='left'>
        <p>{title}</p>
        <div className='center'>
      <div className='counters' >
      
      <button className='buttonn' onClick={handleRemoveItem}  ><p>-</p></button>
      <h4 className='number' >{amount}</h4>
      <button className='buttonn' onClick={handleAddItem} ><p>+</p></button>
     
  
  
</div>
<p className='h'>${amount * price}</p>

  </div>
      </div>
      
    </div>
  </div>
  )
}
