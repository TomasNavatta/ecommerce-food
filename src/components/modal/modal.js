import { Link } from 'react-router-dom';
import ItemCount from '../Count/Count';
import '../stylesshets/modal.css'
import '../stylesshets/productoFinal.css'


const Modals = ({ isOpen, onClose, image, title, info, stock, id }) => {
  if (!isOpen) return null;

  return(
//     <div className="modal-background">
//     <div className="modal-container">
//     <span className='closeModal' onClick={onClose}>x</span>
//     <div className='imgContainer'>
//     <img className='styleImgDatails' src={image} alt='imagen hambuguesa detalles' />
//     </div>
   
//          <h2>{title}</h2>
       
//   <p>{info}</p> 
//   <p>stock:{stock}</p>
//   <ItemCount initial={1} stock={stock} onAndd={(quantity) => console.log('cantidad agregada', quantity)}/>
//         <button className='buttonModal' onClick={onClose}>cerrar</button>
//         <Link  to={`/detalle/${id}`}><button className="buttonModalComprar">comprar</button></Link> 
//     </div>
// </div>


<div className="modal-background">
<div className='cardModal'>
  <div className='imgContainer'>
  <span className='closeModal' onClick={onClose}>x</span>
  <img className='cardModalImage' src={image} alt="Descripción de la imagen"/>
    

  </div>

<h2 className='cardModalTitle'>{title}</h2>
<p className='cardModalInfo'>{info}</p>
<p>stock disponible: {stock}</p>

<div className='footerModal'>
<button className='buttonModal' onClick={onClose}>cerrar</button> 
<Link  to={`/detalle/${id}`}><button className="buttonModalComprar">Ver producto</button></Link>
</div>

</div>

</div>

  )
  }

export default Modals;
