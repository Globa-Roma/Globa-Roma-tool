import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Nodemailer from './Nodemailer.css'

function Form() {
    const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


// refresh and reset function
function resfresh(){
    window.location.reload();
}

// notify alert
function notify() {
        toast.success('You regestered successfully!');
    
}
// submition
function formSubmit(e){
    e.preventDefault();
    alert(`here is the state ${name}, ${email},${message}`)
    let data = {
        name: name,
        email: email,
        message: message,
        subject: subject
       }
   
    axios.post('/clients', data)
    
    .then(res => console.log(res.data))
    .catch(err =>{
        console.log(err)
    })


    //resfresh()
    
}

    return (

        
      <form onSubmit={formSubmit}>

          <ToastContainer
                   draggable={false}
                   autoClose={2000}
          />

        <input
          className="input"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="First name"
          type="text"
          name="name"
          required
        />
        <input
          className="input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <input
          className="input"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          placeholder="subject"
          type="text"
          name="Subject"
          required
        />
        <textarea
         className="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Message"
          type="text"
          name="Message"
          required
        />
        <p><button className="send" onClick={notify} type="submit">Send</button></p>
      </form>
    );
  }
  export default Form;












    








