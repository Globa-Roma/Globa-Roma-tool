import React,{Component} from 'react';
import  {Link} from "react-router-dom";
import axios from 'axios';
import Data from './Data.css'






class Client extends Component{
  constructor(props) {
    super(props);
    this.state = {
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: [],
            other: "",
            interest: [],
            Clients: []
        };

        this.delete = this.delete.bind(this)
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


  // delete

  delete(id) {
    axios.delete('/clients/'+id)
      .then(response => { console.log(response.data)});
      this.setState({
      clients: this.state.Clients.filter(el => el._id !== id)
    })
  }

    // render if there is no client
          noClient =()=>{
            if (this.state.Clients.length == 0) 
            {return <h1 className="client">Loading....</h1>}
            
          }


         

   


  render(){

        return(
          
        <div className="blog">
          {this.noClient(this.state.Clients)}
         
          <div className="clientsData">
             
                <Link className="add"  to="/register">
                  <button className="addButton">
                    <img className="addImage" src="https://img.icons8.com/material-rounded/24/000000/plus--v1.png"/>
                    Add Client
                    </button>
                  </Link>
                  <h2>Our Clients</h2>
                
                  
                  <table className=" table table-striped">
                     <thead>
                          <tr className="thead">
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Language</th>
                            <th>Interest</th>
                            <th></th>
                            <th></th>
                        </tr>
                     </thead>
                   <tbody>

              {this.state.Clients.map(person => ( 
                <tr>
                  
                  <td key={person.id}>{person.fullName}</td>
                  <td key={person.id}>{person.email}</td>
                  <td key={person.id}>{person.telephone}</td>
                  <td key={person.id}>{person.city}</td>
                  <td key={person.id} className="lang">{person.language.map((lang, index ) =>{
                             return( <span key={index}> {lang.label}/</span> )
                            })}
                  </td>
                  <td  key={person.id} className="int">{person.interest.map((lang, index ) =>{
                             return( <span key={person.id}> {lang.label}/ </span> )
                            })}
                    </td> 
                    <td>
                         <Link to={"/edit/"+person._id}> <img src="https://img.icons8.com/fluent-systems-filled/24/000000/ball-point-pen.png"/></Link>
                    </td>
                    <td>
                       <a href="" onClick={() => { this.delete(person._id) }}><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png"/></a>
                    </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
  </div>  
  )}
a
}

    export default Client




