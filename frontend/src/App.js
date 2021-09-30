import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from "./cart/Cart";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
