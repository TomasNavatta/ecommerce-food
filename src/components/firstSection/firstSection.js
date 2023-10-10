import * as React from 'react';
import { useState, useEffect } from 'react';
import '../stylesshets/firstSection.css'
import Producto from '../hooks/MapProductos';
import { getdata } from '../Products/products';

export default function MediaCard() {
  const[data, setData] = useState([])
  useEffect(() => {
    getdata()
    .then(response => {
      setData(response)
    })
    .catch(error => {
      console.error(error)
    })
  },[])
  return (
    <Producto data={data}/>
  );
}
