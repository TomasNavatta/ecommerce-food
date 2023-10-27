import CardMedia from '@mui/material/CardMedia';
import '../stylesshets/firstSection.css'
import DetailsCard from '../DetailsCard/detailsCard';
import {useState} from 'react';


const Products = ({ id, image, title, info }) => {
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
   
            <div className='card' key={id}>
            <CardMedia
                
              className='styleImg'
             image={image}
             
              
            />
            <div>
                
              <h2>{title}</h2>
              <div className='infoCard' >
             {info}
              </div>
              
            </div>
            <div>
            <button className="buttonCard" onClick={handleOpenModal}> Ver Mas</button>
            <DetailsCard isOpen={modalOpen} onClose={handleCloseModal} id={id}   />
            </div>
          </div>
     
       
    )
}

export default Products