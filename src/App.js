import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting={'Bienvenidos a mi E-commerce'}/>
    </div>
  );
}

export default App;
