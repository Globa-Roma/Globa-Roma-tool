import React, { useEffect, useState, Component} from 'react'
import axios from 'axios'
import PersonDetail from './detailView/detailview'


function Detail(props){

       const clientId = props.match.params.clientId
        const [Clients, setClients]= useState({})
       
       
    
    useEffect(() => {
        axios.get(`/globa-aroma/detail/client_by_id?id=${clientId}&type=single`)
            .then(res => {
                setClients(res.data[0])
            }).catch(err =>{
                console.log(err.response.data)
            })

    }, [])

return(
        <div>
            <h1>client details ....</h1>
           <PersonDetail  detail={Clients}/>
          
           
        </div>
    )
}




export default Detail