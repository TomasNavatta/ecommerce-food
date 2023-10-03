import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/footer/footer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu';
import Home from './pages/home';
import Promociones from './pages/promociones';
import Nosotros from './pages/nosotros';




function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/promociones' element={<Promociones/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        </Routes>
        </BrowserRouter> 
        {/* <footer>
      <Footer/>
      </footer> */}
    </div>
      
    
  );
}

export default App;
