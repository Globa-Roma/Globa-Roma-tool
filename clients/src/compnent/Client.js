import React,{useEffect, useState} from 'react';
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







