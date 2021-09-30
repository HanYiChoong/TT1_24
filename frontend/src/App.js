import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductsPage from "./pages/products";
import CartPage from './pages/Cart';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          {/* <NavBar /> */}
          <div className="container">
            {/* <Route exact path="/" component={RegisterPage} /> */}
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={ProductsPage} />
            <Route exact path="/cart" component={CartPage} />
          </div>
      </Router>
    </div>
  );
}

export default App;
