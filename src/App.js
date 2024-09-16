import {User} from "./Components/User"
import './App.css';
import Saludo from "./Components/Saludo";
import Boton from "./Components/Boton";
import Lista from "./Components/Lista";

function App() {
  return (
    <div>
      <Lista items={['Elemento 1', 'Elemento 2', 'Elemento 3']} />
      <Boton texto="Haz Clik a qui"></Boton>
      <Saludo></Saludo>
      <User></User>
    </div>
  );
}

export default App;
