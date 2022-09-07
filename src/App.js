import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridExample from './componentes/cards';
import IndividualIntervalsExample from './componentes/carrusel';
import ItemDetailContainer from './componentes/ItemnDetailConteiner';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
  <div>
    
    <BrowserRouter>

      <NavBar/>
      < IndividualIntervalsExample/>
      <h1>Nuestras variedades</h1>

      <Routes>
        <Route path='/' element={<GridExample/>} />
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

    </BrowserRouter>

   
    
    
  </div>

  );
}

export default App;

