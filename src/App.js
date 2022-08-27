
import './App.css';
import {NavBar} from './componentes/NavBar'
import IndividualIntervalsExample from './componentes/carrusel';
import GridExample from './componentes/cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './componentes/ItemListConteiner';


function App() {
  return (
    
    <div>
      <header>
      <div>
      <NavBar/>
      
      </div>

    </header>
    <body>
      <div>
      <IndividualIntervalsExample/>
      </div>
      <div>
      <ItemListConteiner titulo="nuestras variedads"/>
      <GridExample/>
      </div>


    </body>
    </div>
    
  );
}

export default App;

