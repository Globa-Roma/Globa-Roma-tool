import React, {Component} from 'react'
import Options from './Options.css'
import { Link } from "react-router-dom";



class Option extends Component{

    render(){
        return (
            <div> 
                <h2>Globa - Aroma</h2>
                <div className="links">
                    
                       <Link to="/register" className="link" >
                           <button className="button" >Add A New Member</button>
                        </Link>
                    
                    
                       <Link to="/clients" className="link" >
                          <button className="button">Our client</button>
                       </Link>
                    
                   
                </div>
                
    
            </div>
    )}
    
}

export default Option 
