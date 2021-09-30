import './App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register'
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
            {/* <Route exact path="/profile" render={() => (
              localStorage.usertoken && localStorage.usertoken !== 'undefined' ? (
                <Profile />
              ) : (
                <Redirect to="/" />
              )
            )} /> */}
          </div>
      </Router>
    </div>
  );
}

export default App;
