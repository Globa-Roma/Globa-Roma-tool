import React, { Component } from "react";
import Nodemailer from "./Nodemailer";
import Sms from "./Sms";
import VisiblityCss from './Visiblity.css'



class Visiblity extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Sms"
  };

  render() {
    if (this.state.whichComponentToShow === "Sms") {
      return (
        <div className="option">
             <div className="component">
                 <Nodemailer /> 
              </div>
             <button className="buttons"
               onClick={() => {this.setState({ whichComponentToShow: "Email" });}}
                >
                Sms
            </button>
           
        </div>
      );
    } else{
        return (
          <div className="option">
              <div className="component">
                 <Sms /> 
              </div>
              
              <button className="buttons"
                 onClick={() => {
                 this.setState({ whichComponentToShow: "Sms" });
                 }}
               >
               Email
            </button>
            
          </div>
        );
      } 
  }
}

export default Visiblity;

