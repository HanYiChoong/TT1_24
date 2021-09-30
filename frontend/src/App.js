import LoginPage from './pages/login';
import RegisterPage from './pages/register'
import ProductsPage from "./pages/products"
import CartContent from "./pages/Cart"
import CheckoutPage from "./pages/checkout"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <div className="container">
          <Route exact path="/" component={ProductsPage} />
          {/* <Route exact path="/" component={RegisterPage} /> */}
          {/* <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" render={() => (
            localStorage.usertoken && localStorage.usertoken !== 'undefined' ? (
              <Redirect to="/" />
            ) : (
              <LoginPage />
            )
          )} />

          <Route exact path="/" render={() => (
            localStorage.usertoken && localStorage.usertoken !== 'undefined' ? (
              <ProductsPage />
            ) : (
              <Redirect to="/login" />
            )
          )} />

          <Route exact path="/cart" render={() => (
            localStorage.usertoken && localStorage.usertoken !== 'undefined' ? (
              <CartContent />
            ) : (
              <Redirect to="/login" />
            )
          )} />

          <Route exact path="/checkout" render={() => (
            localStorage.usertoken && localStorage.usertoken !== 'undefined' ? (
              <CheckoutPage />
            ) : (
              <Redirect to="/login" />
            )
          )} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
