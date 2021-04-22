
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Select from 'react-select';
import { Link } from "react-router-dom";
import Signin from './Signin.css'




class Signup extends Component {

    constructor() {
        super()
        this.state = {
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: "",
            other: "",
            interest: "",
            spheres: ""
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeTelephone = this.changeTelephone.bind(this)
        this.changeCity = this.changeCity.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.changeOther = this.changeOther.bind(this)
        this.changeInterest = this.changeInterest.bind(this)
        this.changeSpheres = this.changeSpheres.bind(this)
        this.collect = this.collect.bind(this)
       }


    // onchange function
    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changeTelephone(event) {
        this.setState({
            telephone: event.target.value
        })
    }
    changeCity(event) {
        this.setState({
            city: event.target.value
        })
    }
    changeLanguage(event){
        this.setState({
            language: event.target.value
        })
    }
        
    changeOther(event) {
        this.setState({
            other: event.target.value
        })
    }
    changeInterest(event){
        this.setState({
            interest: event.target.value
        })
    }
    changeSpheres(event){
        this.setState({
            spheres: event.target.value
        })
    }



    // send data from frontend to backend

    collect = event => {

        // to prevent defualt way to back to home page
        event.preventDefault()
        const regester = {
            fullName: this.state.fullName,
            email: this.state.email,
            telephone: this.state.telephone,
            city: this.state.city,
            language: this.state.language,
            other: this.state.other,
            interest: this.state.interest,
            spheres: this.state.spheres
         }


        axios.post('/register', regester)
           .then(res => console.log(res.data))
          this.setState({
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: "",
            other: "",
            interest: "",
            spheres: ""
        })
    }

    // notify message
    notify = (e) => {
        
         if(this.state.city && this.state.language && this.state.fullName && this.state.interest && this.state.email && this.state.telephone){
            toast.success('You regestered successfully!');
         }
    }


    // render 
    render() {
        return (
            <div>
               
                 <div className="formContainer">

                 <ToastContainer
                   draggable={false}
                   autoClose={4000}
                   />
                       
                        <h2> Register here </h2>
                        <div className="div" className="animate__animated animate__backInLeft">
                        <form className="form"  onSubmit={this.collect}>
                            <input type="hidden" name="id" value={this.state._id}/>
                            <input className="name"  placeholder="Name" value={this.state.fullName} onChange={(event) => this.changeFullName(event)}  required></input>
                            <input className="email" type="email" placeholder="Email" value={this.state.email} onChange={(event) => this.changeEmail(event)} ></input>
                            <input className="tele" type="number" placeholder="Telephone" value={this.state.telephone} onChange={(event) => this.changeTelephone(event)} required></input>
                            <input className="city" type="text" placeholder="City" value={this.state.city} onChange={(event) => this.changeCity(event)} maxLength={15} required></input>
                            <input className="selects" type="text" placeholder="Language" value={this.state.language} onChange={(event) => this.changeLanguage(event)}  required></input>
                            <input className="selects" type="text" placeholder="Interest" value={this.state.interest} onChange={(event) => this.changeInterest(event)} required></input>
                            <input className="selects" type="text" placeholder="Spheres (Optional)" value={this.state.spheres} onChange={(event) => this.changeSpheres(event)} ></input>
                            <textarea className="textarea" type="text" placeholder="Note (Optional)" value={this.state.other} onChange={(event) => this.changeOther(event)} ></textarea>
                            <button onClick={this.notify} type="submit" className="submit">Add</button>
                            <Link to="/clients">
                                <button className="viewList"> 
                                <img src="https://img.icons8.com/material-rounded/24/000000/person-male.png"/>View List
                                </button>
                            </Link>
                        </form>
                    </div>
                        
                </div>
            </div>
        )
    }
}


export default Signup 
