import React, {useEffect, useState} from 'react'
import { Descriptions } from 'antd';



function PersonDetail(props){

    const [Clients, setClients] = useState({})

    useEffect(() => {

        setClients(props.detail)

    }, [props.detail])


    return(
        <div>
            
            <div>
            <Descriptions>
                <p label="Full-Name :"> {Clients.city} </p>
                
            </Descriptions>
            </div>
        </div>

    )
}

export default PersonDetail