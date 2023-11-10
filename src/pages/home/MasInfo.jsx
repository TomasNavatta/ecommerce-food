import { Link } from 'react-router-dom';
import '../../components/stylesshets/home.css'
const Masinfo = () => {
    return(
        <section className="info container">
            <div className="info-img">
                <img src='../assets/burguer-portada.png' />
            </div>
            <div className="info-txt">
                <h2>Informacion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aperiam laboriosam nihil tempore placeat sint
                      magnam impedit, maxime totam, esse excepturi amet et quod
                       suscipit dignissimos sit molestias
                     blanditiis vel consequatur.</p>
                     <Link to={"/category/nosotros"}><button className="btn-2">Mas Informacion</button></Link>
            </div>

        </section>

    )
} 

export default Masinfo;