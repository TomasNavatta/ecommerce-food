import '../components/stylesshets/ItemCart.css'

export const ItemCart = ({image, title, amount, price, id}) => {
  return (
    <div className='cart-Item'>
    <img src={image} alt={title}  className='img-cartItem'/>
    <div className='data-Container'>
      <div className='left'>
        <p>{title}</p>
        <div className='center'>
      <div className='counters' >
      
      <button className='buttonn'  ><p>-</p></button>
      <h4 className='number' >{amount}</h4>
      <button className='buttonn' ><p>+</p></button>
     
  
  
</div>
<p className='h'>${amount * price}</p>

  </div>
      </div>
      
    </div>
  </div>
  )
}
