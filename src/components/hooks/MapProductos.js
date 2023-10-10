
import '../stylesshets/firstSection.css'
import Products from '../Products/productos';
import Spinner from '../spinner/spinner';

const Producto = ({data}) => {
    return(
      <div className='divContainer'>
      <div className='mapContainer'>
        
     {
      data.length > 0 ?
      data.map(productos => <Products key={productos.id}{...productos} />)
      : <Spinner/>
     }
      </div>
      </div>
      )
        
}
export default Producto;