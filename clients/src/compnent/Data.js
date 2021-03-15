import React,{Component, setState, useState, useEffect} from 'react';

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
            {return <h1 className="warnning">Still You Do Not Have Any client</h1>}
            else{
              {return <h1 className="h1"> Our Clients</h1>}
            }
          }
     
    render(){
        return(
        <div className="blog">
          {/* {this.displayBlogPost(this.state.posts)} */}
          {this.noClient(this.state.posts)}

            <div className="clientsData">
                     
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
            </div>
        </div>
            )}

  
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