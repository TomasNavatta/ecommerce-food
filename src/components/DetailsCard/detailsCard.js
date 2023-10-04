import { useEffect, useState } from 'react';
import { getProductById } from '../Products/products';
import Modals from '../modal/modal';

const DetailsCard = ({ isOpen, onClose, id}) => {
 
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById('1')
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })
  },[])
  return(
    <div>
     <Modals isOpen={isOpen} onClose={onClose} id={id} {...product}/>


    </div>
  )
  }

export default DetailsCard;
