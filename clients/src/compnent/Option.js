import React, {Component} from 'react'
import Options from './Options.css'
import { Link } from "react-router-dom";



class Option extends Component{

    render(){
        return (
            <div> 
                <h1>Globa Aroma</h1>
                <div className="links">
                    
                       <Link to="/globa-aroma/register" className="link">
                           <button className="button">Add A New Member</button>
                        </Link>
                    
                    
                       <Link to="/globa-aroma/clients" className="link">
                          <button className="button">Our client</button>
                       </Link>
                    
                   
                </div>
                
    
            </div>
    )}
    
}

export default Option 
