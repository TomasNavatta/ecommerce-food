import productos from '../Products/products';
import '../stylesshets/firstSection.css'
import Products from '../Products/productos';

const Producto = () => {
    return(
      <div className='divContainer'>
      <div className='mapContainer'>
        
     {
      productos.map(productos => <Products key={productos.id}{...productos} />)
     }
      </div>
      </div>
      )
        
}
export default Producto;