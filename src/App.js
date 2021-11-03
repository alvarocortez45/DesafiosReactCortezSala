import "./App.css";
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {NavBar} from "./components/NavBar";
import { ItemDetailContainer } from "../src/components/containers/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/containers/ItemListContainer/ItemListContainers";
import {Contacto} from "./components/Contacto";
import {Cart} from "./components/Cart";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/productos">
                  <NavBar />
                  <ItemListContainer />
              </Route>
              <Route exact path="/productos/:id">
                  <NavBar />
                  <ItemListContainer />
              </Route>
              <Route exact path="/producto/:prodId">
                  <NavBar />
                  <ItemDetailContainer />
              </Route>
              <Route exact path="/Contacto">
                  <NavBar />
                  <Contacto />
              </Route>
              <Route>
                  <NavBar />
                  <Cart />
              </Route>
          </Switch>
      </Router>
  );
}



export default App;
