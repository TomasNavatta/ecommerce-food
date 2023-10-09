import { useEffect, useState, useParams } from 'react';
import { getProductById } from '../Products/products';
import Modals from '../modal/modal';

const DetailsCard = ({ isOpen, onClose}) => {
 
  const [product, setProduct] = useState(null)
const {id} = useParams()
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
     <Modals isOpen={isOpen} onClose={onClose} {...product}/>


    </div>
  )
  }

export default DetailsCard;
