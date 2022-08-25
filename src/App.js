
import './App.css';
import {NavBar} from './componentes/NavBar'
import IndividualIntervalsExample from './componentes/carrusel';
import GridExample from './componentes/cards'
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <h2>NUESTRAS VARIEDADES</h2>
      <GridExample/>
      </div>


    </body>
    </div>
    
  );
}

export default App;


