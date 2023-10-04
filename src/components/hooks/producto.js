import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import productos from '../Products/products';
import '../firstSection/firstSection.css'
import {useState} from 'react';
import DetailsCard from '../DetailsCard/detailsCard';


const Producto = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleOpenModal  = () => {
      setModalOpen(true)
      document.body.style.overflow='hidden'
    }
    const handleCloseModal = () => {
      setModalOpen(false);
      document.body.style.overflow='auto'
    }
    return(
        <div className='divContainer'>
        <div className='mapContainer'>
              {productos.map((products) => (
            <div className='card' key={products.id}>
            <CardMedia
                
              className='styleImg'
             image={products.image}
             
              
            />
            <CardContent>
                
              <h2>{products.title}</h2>
              <div className='infoCard' >
             {products.info}
              </div>
              
            </CardContent>
            <CardActions>
            <button className="buttonCard" size="small" onClick={handleOpenModal}>Ver Mas</button>
            <DetailsCard isOpen={modalOpen} onClose={handleCloseModal} />
            </CardActions>
          </div>
          ))}
        </div>
        </div>
      
    )
}
export default Producto;