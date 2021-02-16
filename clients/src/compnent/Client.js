import React,{useEffect, useState} from 'react';
//import uuid from 'uuid'
import axios from 'axios';



function Client(){

    const[client, setClient] = useState([{
            fullName:"",
            email:"",
            telephone:"",
            city:"",
            interest:""  
        }]);

    useEffect(()=>{
        fetch('/')
        .then(response => setClient(response.data))
        .then(res => console.log(res))
    });

    
        return(
            <div className="blog">
                {
                    client.map((clients, index)=>{
                        <div>
                            <h4>Here my client</h4>
                            {clients.fullName}
                        </div>
                    })
                }
           </div>
            )

    /// client is object not array
            //var myObject = { 'a': 1, 'b': 2, 'c': 3 };
            // Object.keys(myObject).map(function(key, index) {
            //   myObject[key] *= 2;
            // });
            // console.log(myObject);
            // // => { 'a': 2, 'b': 4, 'c': 6 }
}
export default Client;







// class Blog extends Component {
//     constructor(props){

//     super(props);
//     this.state = {
   // posts= [
               //fullName:"",
    //         email:"",
    //         telephone:"",
    //         city:"",
    //         interest:"",
    //         ]
//         
//     }
//   };

//   componentDidMount = () => {
//     this.getBlogPost();
//   };

//   getBlogPost = () => {
//     axios.get('/client')
//       .then((response) => {
//         const data = response.data;
//         console.log(posts.data)
//         this.setState({ posts: data });
//       })
//       .catch((error) => {
//         console.log('warnning', error);
//       });
//   };

// displayBlogPost = (posts) => {

//     if (!posts.length) return null;
//     return posts.map((post, index) => (
//       <div key={index} className="blog-post__display">
//         <h3>{post.fullName}</h3>
//         <p>{post.email}</p>
//       </div>
//     ));
//   };

//   render(){
//     console.log('State: ', this.state);
//       return(
//             <div className="app">
//                 <div className="blog-">
//                 {this.displayBlogPost(this.posts)}
//                 </div>
//             </div>
//             )
//   }
  



// }
// export default Blog;
