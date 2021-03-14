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
            posts: [] 
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

          displayBlogPost =(posts) =>{
            
            if (!posts.length) return null;
        
        
            return posts.map((post, index) => (

            <div className="list">
                
                <input className="clientsData" type="text"  value={post.fullName} />
                <input className="clientsData" type="text"  value={post.email} />
                <input className="clientsData" type="text" value={post.telephone} />
                <input className="clientsData" type="text" value={post.city} />
                <input className="clientsData" type="text" value={post.language}/>
                <input className="clientsData" type="text" value={post.other} />
                <input className="clientsData" type="text" value={post.interest} />
               
              </div>
            ));
          }

    render(){
        return(
        <div className="blog">
          <h1> our client</h1>
          {this.displayBlogPost(this.state.posts)}
        </div>
            )}

  
}

export default Client