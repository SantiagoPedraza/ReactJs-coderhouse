import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualIntervalsExample from './componentes/carrusel';
import ItemDetailContainer from './componentes/ItemnDetailConteiner';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './componentes/Home';
import ItemListContainer from './componentes/ItemListContainer';
import { CartContext, CartProvider } from './context/CartContext';
import Cart from './componentes/Cart';



function App() {
  return (
    <CartProvider>
       <div>
    
      <BrowserRouter>

        <NavBar/>
        < IndividualIntervalsExample/>
        <h1>Nuestras variedades</h1>

        <Routes>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

     </BrowserRouter>

   
    
    
  </div>
  
</CartProvider>
    
     




  );
}

export default App;





