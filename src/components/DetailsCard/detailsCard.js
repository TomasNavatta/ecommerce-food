import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Products/products';
import Modals from '../modal/modal';

const DetailsCard = ({ isOpen, onClose }) => {
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
     <Modals isOpen={isOpen} onClose={onClose} id={id} {...product}/>


    </div>
  )
  }

export default DetailsCard;
