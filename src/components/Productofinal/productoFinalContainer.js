import { useEffect, useState } from 'react';
import { getProductById } from '../Products/products';
import ProductoFinal from './productoFinal';
import { useParams } from 'react-router-dom';

const ProductoFinalContainer = () => {
  const [product, setProduct] = useState(null)
  let{id} = useParams()

  useEffect(() => {
    getProductById(1)
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })
  },[id])

  return(
    <div>
     <ProductoFinal  {...product}/>


    </div>
  )
  }

export default ProductoFinalContainer;
