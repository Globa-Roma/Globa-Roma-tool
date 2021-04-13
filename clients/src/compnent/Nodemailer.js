import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Nodemailer from './Nodemailer.css'

toast.configure()

const Form = () =>{

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");
    
    
  function onChange(e){
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };



// notify alert
function notify() {
     toast.success('Email succesfully send!');
    }


// submition
function formSubmit(e){
    e.preventDefault();

    const data = new FormData();

    data.append('file', file);
    data.append("filename", filename)
    data.append('name', name);
    data.append('email', email);
    data.append('messages', messages);
    data.append('subject', subject);

  
  
    console.log(data)
    axios.post('/clients', data)
    .then(res => console.log(res.data))
    .catch(err =>{
        console.log(err)
    })

    // make the input value empty
    data.append('file', "",);
    data.append("filename", "")
    data.append('name', "");
    data.append('email', "");
    data.append('messages', "");
    data.append('subject', "");
    }

    return (

      <div className="emailForm"> 
        <ToastContainer
                   draggable={false}
                   autoClose={false}
          />
      <h3>Send email</h3>
      <form 
      onSubmit={formSubmit}>
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
          value={messages}
          onChange={e => setMessages(e.target.value)}
          placeholder="Message"
          type="text"
          name="Message"
          required
        />
       <input 
          className="file"
          type='file'
          id='customFile'
          onChange={onChange}
          multiple="multiple"
          accept="pjp"
      />
      <p><button className="send" onClick={notify} type="submit">Send</button></p>
      </form>
     
   </div>  
      
    );
  }
  export default Form;












    








