import { useEffect, useState } from 'react';
import { getProductById } from '../Products/products';
import ProductoFinal from './productoFinal';
import { useParams } from 'react-router-dom';

const ProductoFinalContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Extraer id directamente de useParams()
  console.log('ID:', id);

  useEffect(() => {
    getProductById(id)
      .then(response => {
        setProduct(response);
        console.log('Response:', response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  console.log(product);

  return (
    <div>
      {/* Pasar directamente el id como una propiedad */}
      <ProductoFinal {...product} id={id} />
    </div>
  );
};

export default ProductoFinalContainer;
