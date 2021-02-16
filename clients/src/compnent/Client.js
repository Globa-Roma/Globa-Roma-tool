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

  
}
export default Client;







