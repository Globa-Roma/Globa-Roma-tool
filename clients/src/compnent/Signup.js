
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Select from 'react-select';
import { Link } from "react-router-dom";
import Signin from './Signin.css'



// The options 

const select = [
    {
        value: 1,
        label: "code"
    },
    {
        value: 2,
        label: "Painting"
    },
    {
        value: 3,
        label: "dance"
    },
    {
        value: 4,
        label: "Travel"
    },
    {
        value: 5,
        label: "Reading"
    }
]

const language = [
    {
        value: 1,
        label: "english"
    },
    {
        value: 2,
        label: "dutch"
    },
    {
        value: 3,
        label: "france"
    }
]


// multiselective style
const theme = theme => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary25: "#95C11F"
    }
});



class Signup extends Component {

    constructor() {
        super()
        this.state = {
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: [],
            other: "",
            interest: []
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeTelephone = this.changeTelephone.bind(this)
        this.changeCity = this.changeCity.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.changeOther = this.changeOther.bind(this)
        this.changeInterest = this.changeInterest.bind(this)
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
    changeLanguage = (language) =>{
        this.setState({ language });
    }
        
    changeOther(event) {
        this.setState({
            other: event.target.value
        })
    }
    changeInterest = (interest) => {
        this.setState({ interest });
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
            interest: this.state.interest

        }


        axios.post('http://localhost:3002/globa-aroma/register', regester)

             .then(res => console.log(res.data))

        this.setState({
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: [],
            other: "",
            interest: []
        })
    }

    // notify message
    notify = () => {
        toast.success('You regestered successfully!');
    }


    // render 
    render() {
        return (
            <div>
                <h1>Globa Aroma</h1>
                 <div className="formContainer">

                 <ToastContainer
                            draggable={false}
                            //transition={zoom}
                            autoClose={3000}
                        />
                       
                        <h2> Register here ...</h2>
                        <form className="form" onSubmit={this.collect}>
                            <input className="name" type="text" placeholder="Name" value={this.state.fullName} onChange={(event) => this.changeFullName(event)} maxLength={30} required></input>
                            <input className="email" type="text" placeholder="Email" value={this.state.email} onChange={(event) => this.changeEmail(event)} maxLength={20} required></input>
                            <input className="tele" type="number" placeholder="Telephone" value={this.state.telephone} onChange={(event) => this.changeTelephone(event)} required></input>
                            <input className="city" type="text" placeholder="City" value={this.state.city} onChange={(event) => this.changeCity(event)} maxLength={15} required></input>
                            <Select className="select" placeholder="Language" isMulti value={this.state.language} onChange={this.changeLanguage} options={language} theme={theme} required></Select>
                            <Select className="select" placeholder="Interset" isMulti value={this.state.interest} onChange={this.changeInterest} options={select} theme={theme} required></Select>
                            <textarea className="textarea" type="text" placeholder="100 words limit" value={this.state.other} onChange={(event) => this.changeOther(event)} maxLength={100}></textarea>
                            <button onClick={this.notify} type="submit" className="submit">Add</button>
                            <Link to="/globa-aroma/clients">
                                <button className="viewList"> 
                                <img src="https://img.icons8.com/material-rounded/24/000000/person-male.png"/>View List
                                </button>
                            </Link>
                        </form>
                        
                </div>
            </div>
        )
    }
}


export default Signup 
