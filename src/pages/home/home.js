import Banners from "./banners";
import '../../components/stylesshets/home.css'
import ProductSection from "./ProductSection";
import Masinfo from "./MasInfo";
import Horario from "./Horario";
import Map from "./map";
import Footer from "../../components/footer/footer";

const Home = () => {
    return(
        <div className="home">
           <Banners />
           <ProductSection/>
           <Masinfo/>
           <Horario/>
           <Map/>
           <Footer/>
        </div>
    )
}

export default Home;