import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  CheckOut,
  LandingPage,
  Products,
  Error
} from './pages';
import './App.css';
import {NavBar, Footer} from './components';
// import particlesjs from './particlesjs';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>

        <Route exact path='/'>
          <LandingPage/>
        </Route>

        <Route path='/products'>
          <Products/>
        </Route>

        <Route path='/checkout'>
          <CheckOut/>
        </Route>

        <Route path='*'>
          <Error/>
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
