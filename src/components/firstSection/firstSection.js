import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import productos from '../Products/products';
import './firstSection.css'
import Modal from '../modals/modal';

export default function MediaCard() {
  return (
    <div className='divContainer'>
       <div className='productos'>
    {productos.map((products) => (
      <div className='card'>
      <CardMedia
        sx={{ height: 140 }}
       img={products.img}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {products.title}
        </Typography>
        <div >
       {products.info}
        </div>
      </CardContent>
      <CardActions>
      <Button className="buttonCard" size="small">{<Modal/>}</Button>
      </CardActions>
    </div>
    ))}
    </div>

    </div>




   
  );
}
