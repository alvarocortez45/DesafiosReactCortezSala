import "./App.css";
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {NavBar} from "./components/NavBar";
import { ItemDetailContainer } from "../src/components/containers/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/containers/ItemListContainer/ItemListContainers";
import {Contacto} from "./components/Contacto";
import {Cart} from "./components/Cart";
import CartContextProvider from "./components/Context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Router>
          <Switch>
              <Route exact path="/">
                  <NavBar />
              </Route>
              <Route exact path="/productos">
                    <ItemListContainer />
                </Route>

                <Route exact path="/productos/:id">
                    <ItemListContainer />
                </Route>

                <Route exact path="/producto/:prodId">
                    <ItemDetailContainer />
                </Route>

                <Route exact path="/contacto">
                    <Contacto />
                </Route>

                <Route exact path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </Router>
    </CartContextProvider>
  );
}

export default App;
