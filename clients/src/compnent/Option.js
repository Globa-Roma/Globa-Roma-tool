import React, {Component} from 'react'
import Options from './Options.css'
import { Link } from "react-router-dom";



class Option extends Component{

    render(){
        return (
            <div> 
                <h1>Globa Aroma</h1>
                <div className="links">
                    <button className="button">
                       <Link to="/register" className="link">Add A New Member</Link>
                    </button>
                    <button className="button">
                       <Link to="/" className="link">Send Message</Link>
                    </button>
                   
                </div>
                
    
            </div>
    )}
    
}

export default Option 
