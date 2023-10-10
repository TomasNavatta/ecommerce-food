import ItemCount from '../Count/Count';
import '../stylesshets/productoFinal.css'

const ProductoFinal = ({ image, title, info, stock }) => {
    return(
     <div className='cardproductoFinalContainer'>
     <div class="cardProductoFinal">
  <img class="card-image" src={image} alt="Descripción de la imagen"/>
  <h2 class="card-title">{title}</h2>
  <p class="card-info">{info}</p>
  <ItemCount initial={1} stock={stock} onAndd={(quantity) => console.log('cantidad agregada', quantity)}/>
  <button class="card-button">Botón</button>
</div>
</div>   


       
    )
}

export default ProductoFinal;