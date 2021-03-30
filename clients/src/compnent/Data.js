import React,{Component, setState, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
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
            posts: []
        };

      
      }

      componentDidMount =() =>{
            this.getBlogPost();
          };
    
    
         getBlogPost = () => {
            axios.get('http://localhost:3001/globa-aroma/clients')
              .then((res) => {
                const data = res.data;
                this.setState({ posts: res.data });
                console.log({ posts: data });
              })
              .catch((error) => {
                console.log(error);
              });
          }

       // render if there is no client
          noClient =()=>{
            if (!this.state.posts.length) 
            {return <h1 className="client">Loading .....</h1>}
          }

    // delete 

    onDelete = (id) => {
      axios.delete(`/globa-aroma/delete/${id}`).then((res) => {
        alert(res.data.id + " has been deleted successfully");
        this.getBlogPost();
        });
    };
     
    
    
    
    render(){

        return(
          
        <div className="blog">
          {this.noClient(this.state.posts)}
          {/* {this.displayBlogPost(this.state.posts)} */}
          
             
         <div className="clientsData">
             
                <Link className="add"  to="/globa-aroma/register">
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
                            <th> </th>
                        </tr>
                     </thead>
                     <tbody>

         

          {this.state.posts.map(person => ( 
                <tr>
                  <td>{person.fullName}</td>
                  <td>{person.email}</td>
                  <td>{person.telephone}</td>
                  <td>{person.city}</td>
                  <td className="lang">{person.language.map((lang, index ) =>{
                             return( <span key={index}> {lang.label}/</span> )
                            })}
                  </td>
                  <td>
                    
                   <td className="int">{person.interest.map((lang, index ) =>{
                             return( <span key={index}> {lang.label}/ </span> )
                            })}
                    </td> 
                    <td>
                      <a href={`/globa-aroma/detail/${person._id}`}> <img src="https://img.icons8.com/fluent-systems-filled/24/000000/ball-point-pen.png"/></a>
                      <a  onClick={() => this.onDelete(this.state.posts._id)}><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png"/></a>
                    </td>
                  </td>
              </tr>
              ))}
            
          </tbody>
      </table>
            
    </div> 
      </div>  )}

}

    

export default Client
