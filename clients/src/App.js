import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './compnent/Signup'
import Option from './compnent/Option'
import Navbar from './compnent/Nav'
import Data from './compnent/Data'
import Login from "./compnent/Login"
import Update from "./compnent/Update"





function App() {
 
  return (
    <Router>
    <Navbar />
    <div className="container">
      <Switch>
      <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Signup />
        </Route>
        
        <Route path="/option">
          <Option />
        </Route>
        
        <Route path="/clients">
          <Data />
        </Route>

        <Route path="/edit/:id" component={Update} />

      </Switch>
    </div>
  </Router>
  
  );
}


export default App;
