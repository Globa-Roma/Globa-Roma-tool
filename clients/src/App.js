
import { hot } from 'react-hot-loader/root';
import './App.css';
import Signup from './compnent/Signup'
//import Client from './compnent/Client'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <Router>
      
      <Route patth="/">
        <Signup />
        {/* <Client /> */}
      </Route>
     

    </Router>
     );
}


export default hot(App);
