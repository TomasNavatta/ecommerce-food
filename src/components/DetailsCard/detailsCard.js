import { useEffect, useState } from 'react';
import { getProductById } from '../Products/products';
import Modals from '../modal/modal';

const DetailsCard = ({ isOpen, onClose, id }) => {
  const [product, setProduct] = useState(null)
  const ProductId = id
  useEffect(() => {
    getProductById(id)
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })
  },[id])

  return(
    <div>
     <Modals isOpen={isOpen} onClose={onClose} {...product} id={ProductId}/>


    </div>
  )
  }

export default DetailsCard;
