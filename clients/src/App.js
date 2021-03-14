
import { hot } from 'react-hot-loader/root';

import './App.css';
import Signup from './compnent/Signup'
import Option from './compnent/Option'
import Navbar from './compnent/Nav'
import Data from './compnent/Data'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path="/globa-aroma/register">
          <Signup />
        </Route>
        <Route path="/globa-aroma/option">
          <Option />
        </Route>
        <Route path="/globa-aroma/clients">
          <Data />
        </Route>
      </Switch>
    </div>
  </Router>
  
  );
}


export default hot(App);
