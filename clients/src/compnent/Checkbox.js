import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';


class Email extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: "",
            other: "",
            interest: "",
            spheres:"",
            isComplete: false,
            Clients: [],
            emailArray:[]
         };

        this.handleCheckClick = this.handleCheckClick.bind(this)
       

      }

    
componentDidMount =() =>{
            this.getBlogPost();
        };
    
    
    getBlogPost = () => {
            axios.get('/clients')
              .then((res) => {
                const data = res.data;
                this.setState({ Clients: res.data });
                console.log({ Clients: data });
              })
              .catch((error) => {
                console.log(error);
              });
        }

// checkbox onchange
handleCheckClick = (e) => {
  const email = !this.state.Clients.email;
  this.setState({ email: !this.state.Clients.email});
  const result =  this.state.Clients.filter((client )=> 
                   client.email)
  const emailResult = result.map(person => ( person.email))
  this.state.emailArray.push(emailResult)
  console.log(emailResult)
}

render(){
         
        return(

         <div className="blog">
          
          <input name="reciver" 
                 type="checkbox" 
                 defaultChecked={this.state.isComplete} 
                 onChange={this.handleCheckClick} 
        
        />
  </div>  
  )}

}

    export default Email
    




