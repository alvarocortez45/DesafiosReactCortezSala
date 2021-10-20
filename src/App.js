import './App.css';
import NavBar from './components/NavBar';

import "bootstrap/dist/css/bootstrap.min.css";
import { ItemList } from './components/containers/ItemListContainer';

function App() {

  
  return (
    <div className="App"   >
        <NavBar />
        
        
        <ItemList greeting= "LISTADO DE PRODUCTOS" />
        
    </div>
     
  );
}

export default App;
