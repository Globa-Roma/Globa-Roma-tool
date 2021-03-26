import React,{Component, setState, useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import Data from './Data.css'



class Client extends Component{

    state = {
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: [],
            other: "",
            interest: [],
            posts: [],
        };

      componentDidMount =() =>{
            this.getBlogPost();
          };
    
    
         getBlogPost = () => {
            axios.get('http://localhost:3001/globa-aroma/clients')
              .then((response) => {
                const data = response.data;
                this.setState({ posts: data });
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
            else{
                <h2>Our Clients</h2>
            }
          }
     
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
                
                  
                  <table class=" table table-striped">
                     <thead>
                          <tr className="thead">
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Language</th>
                            <th>Interest</th>
                            {/* <th>Details</th> */}
                            <th>       </th>
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
                       {/*<td>{person.detail}</td> */}
                    <td>
                      <a href={`/detail/${person._id}`}> <img src="https://img.icons8.com/fluent-systems-filled/24/000000/ball-point-pen.png"/></a>
                      <Link ><img src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png"/></Link>
                    </td>
                  </td>
              </tr>
              ))}
            
          </tbody>
      </table>
            
    </div>
      </div> )}

}

export default Client









 // displayBlogPost =(posts) =>{
        
        //     if (!posts.length) return <h1 className="warnning">Still You Do Not Have Any client</h1>;

        //    return posts.map((post, index) => (

        //      <div className="list">
        //         <input className="clientsData" type="text"  value={post.fullName} />
        //         <input className="clientsData" type="text"  value={post.email} />
        //         <input className="clientsData" type="text" value={post.telephone} />
        //         <input className="clientsData" type="text" value={post.city} />
        //         <input className="clientsData" type="text" value={post.language}/>
        //         <input className="clientsData" type="text" value={post.other} />
        //         <input className="clientsData" type="text" value={post.interest} />
               

                
        //       </div>
        //         ));
        //   }




        {/* <div className="clientsData">
                     
                     {this.state.posts.map(person => (
                    <div className="person" key={person.id}>
                        
                        <div><span>Full Name</span> {person.fullName}</div>
                        <div><span>Email</span> {person.email}</div>
                        <div><span>Tele number</span> {person.telephone}</div>
                        <span>Language</span> 
                        <ul>
                           
                            {person.language.map((lang, index ) =>{
                              return( <li key={index}> {lang.label} </li> )
                             })}
                        </ul>
                        <div><span>City</span>  {person.city}</div>
                        <span>Interest</span>   
                        <ul>
                            
                            {person.interest.map((int, index) =>{
                              return( <li key={index}> {int.label} </li>)
                             })}
                        </ul>
                        <div><span>Details</span>  {person.other}</div>
                    </div>

              ))}
            </div> */}