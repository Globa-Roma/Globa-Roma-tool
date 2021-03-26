import React, { useEffect, useState} from 'react'
import axios from 'axios'


function Detail(props){

        
        const clientId = props.match.params.clientId
        const [Client, setClient]= useState([])
    
    useEffect(() => {
        axios.get(`/detail/client_by_id?id=${clientId}&type=single`)
            .then(res => {
                setClient(res.data[0])
            })

    }, [])

return(
        <div>
            <h1>{Client.fullName}</h1>
        </div>
    )
}

export default Detail