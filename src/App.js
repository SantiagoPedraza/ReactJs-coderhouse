import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridExample from './componentes/cards';
import IndividualIntervalsExample from './componentes/carrusel';
import ItemDetailContainer from './componentes/ItemnDetailConteiner';

function App() {
  return (
  <div>
    <NavBar/>
    <div>
    < IndividualIntervalsExample/>
    hr

    <h1>Nuestras variedades</h1>
    <GridExample/>
    hr
    <ItemDetailContainer idProducto={1}/>


    <ItemListContainer/>

    </div>

    
  </div>

  );
}

export default App;
