import React,{Component} from 'react';
import  {Link} from "react-router-dom";
import axios from 'axios';
import Data from './Data.css'
import Nodemailer from './Nodemailer'



class Client extends Component{

  
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
            Clients: [],
           
        };

        this.delete = this.delete.bind(this)
        this.changeSearch = this.changeSearch.bind(this)

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
      alert('Do you want to delete this client ????')
      this.setState({
      clients: this.state.Clients.filter(el => el._id !== id)
    })
  }


  // search engine

  filterContent(Clients, searchTerm){
    const result =  this.state.Clients.filter((client )=> 
    client.fullName.toLowerCase().includes(searchTerm) ||
    client.city.toLowerCase().includes(searchTerm)||
    client.language.toLowerCase().includes(searchTerm)||
    client.interest.toLowerCase().includes(searchTerm)||
    client.spheres.toLowerCase().includes(searchTerm))
    this.setState({Clients: result})
}
 changeSearch = (e) => {
    //console.log(e.currentTarget.value)
    const searchTerm = e.currentTarget.value;
        axios.get('/clients')
          .then((res) => {
            this.filterContent(res.data.Clients, searchTerm)
           })
          .catch((error) => {
            console.log(error);
          });
      }

    // render if there is no client
      noClient =()=>{
        if (this.state.Clients.length == 0) 
          {return <h1 className="client">Loading....</h1>}
          }


render(){
        return(
          
        <div className="blog">

          <div className="clientSearch">
              <div className="search"> 
                  <input
                      className="searchInput"
                      placeholder="Search By Name or city"
                      onChange={this.changeSearch}
                  />
            </div>

            <div className="mailer">
              <h3>Send email</h3>
              <Nodemailer/>
             
            </div>
      
           </div> 



          <div className="listing">
          <div className="clientsData">
          {this.noClient(this.state.Clients)}
             <Link className="add"  to="/register">
                  <button className="addButton">
                    <img className="addImage" src="https://img.icons8.com/material-rounded/24/000000/plus--v1.png"/>
                    Add Client
                    </button>
                  </Link>
                 <h2>Our Clients List</h2>
                  <table className=" table table-striped">
                    
                   
                     <thead>
                          <tr className="thead">
                            <th>Name</th>
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
                  <td key={person.email}>{person.email}</td>
                  <td key={person.telephone}>{person.telephone}</td>
                  <td key={person.city}>{person.city}</td>
                  <td key={person.language}>{person.language}</td>
                  <td key={person.interest}>{person.interest}</td> 
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
  </div>  
  )}

}

    export default Client




