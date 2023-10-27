import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu';
import Home from './pages/home/home';
import Promociones from './pages/promociones';
import Nosotros from './pages/nosotros';
import NotFound from './pages/notFound';
import DetailsCard from './components/DetailsCard/detailsCard';
import ProductoFinalContainer from './components/Productofinal/productoFinalContainer';
import { CartContext } from './context/CartContext';
import Cartprovider from './context/CartContext';






function App() {
  return (
    <div>
      <Cartprovider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route  path='/category/menu' element={<Menu/>} />
        <Route path='/category/promociones' element={<Promociones/>} />
        <Route path='/category/nosotros' element={<Nosotros/>} />
        <Route path='*'element={<NotFound/>}/>
          <Route path='/detalle/:id' element={<ProductoFinalContainer/>} />
        </Routes>
        </BrowserRouter> 
        </Cartprovider>
      
   
    </div>
      
    
  );
}

export default App;
