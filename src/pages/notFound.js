import '../App.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return(
        <div className='notFoundContainer'>
        <div className='notFound'>
            <img src="../assets/not-found.png" alt="Not Found" />
            <li><Link to={"/"}><button className="buttonNotFound">Volver al inicio</button></Link></li>
        
        </div>
    </div>
    
        
    )
}

export default NotFound;