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
            Clients: [],
            // itemCheckedLang: {
            //   English: false,
            //   Frans: false,
            //   Dutch: false
            // }
        };

        this.delete = this.delete.bind(this)
        this.changeSearch = this.changeSearch.bind(this)
        //this.toggleChange = this.toggleChange.bind(this)

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
    client.city.toLowerCase().includes(searchTerm))
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

// ckeckbox
// toggleChange=( e)=>{
//   var {name, checked} = e.target
//   this.setState((e)=>{
//     var select = e.itemCheckedLang
//     return select.language
   
//   });

//}


    // render if there is no client
          noClient =()=>{
            if (this.state.Clients.length == 0) 
            {return <h1 className="client">Loading....</h1>}
            
          }

          noClients =()=>{
            if (this.state.Clients.length == 0) 
            {return <h1 className="client">No</h1>}
            
          }

render(){

  //var display = Object.keys(this.state.itemCheckedLang).filter((x)=>this.state.itemCheckedLang[x])

        return(
          
        <div className="blog">
         
           <div className="clientSearch">
                <p className="head">Filter</p>
                <div className="search"> 
                  <input
                      className="searchInput"
                      placeholder="Search By Name or city"
                      onChange={this.changeSearch}
                  />
            </div>
              <div className="checkbox">
                    <p>Language</p>
                     <label>
                        <input type="checkbox" className="lang" name="english"  onChange={this.toggleChange}
                        />
                        <span>English</span>
                      </label>
                      <label>
                        <input type="checkbox" className="lang" name="frans" onChange={this.toggleChange}
                        />
                        <span>Frans</span>
                      </label>
                      <label>
                        <input type="checkbox" className="lang" name="dutch" onChange={this.toggleChange}
                        />
                        <span>Dutch</span>
                      </label>

                      <p>Interest</p>
                     <label>
                        <input type="checkbox"
                        className="lang"
                          // defaultChecked={this.state.isChecked}
                          // onChange={this.toggleChange}
                        />
                        <span>Code</span>
                      </label>
                      <label>
                        <input type="checkbox"
                        className="lang"
                          // defaultChecked={this.state.isChecked}
                          // onChange={this.toggleChange}
                        />
                        <span>Paint</span>
                      </label>
                      <label>
                        <input type="checkbox"
                        className="lang"
                          // defaultChecked={this.state.isChecked}
                          // onChange={this.toggleChange}
                        />
                        <span>Dance</span>
                      </label>
                      <label>
                        <input type="checkbox"
                        className="lang"
                          // defaultChecked={this.state.isChecked}
                          // onChange={this.toggleChange}
                        />
                        <span>Travel</span>
                      </label>
                      <label>
                        <input type="checkbox"
                        className="lang"
                          // defaultChecked={this.state.isChecked}
                          // onChange={this.toggleChange}
                        />
                        <span>Reading</span>
                      </label>
                      {/* {display} */}
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
                 <h2>Our Clients</h2>
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
  </div>  
  )}

}

    export default Client




