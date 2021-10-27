import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { ItemDetailContainer } from "../src/components/containers/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/containers/ItemListContainer/ItemListContainers";



function App() {

  
  return (
    <div className="App"   >
        <NavBar />
        
        
        <ItemListContainer />
        <ItemDetailContainer />
    </div>
     
  );
}

export default App;
