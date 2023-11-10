
import '../stylesshets/firstSection.css'
import Products from '../Products/productos';
import Spinner from '../spinner/spinner';
import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'


const Producto = () => {
  const [data, setData] = useState([])
 useEffect(() => {
  const db = getFirestore()

  const productosColecction = collection(db, "productos")
  getDocs(productosColecction).then((snapshot) => {
  if(!snapshot.empty){
    setData(snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    }))
  }
  })
 }, [])

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