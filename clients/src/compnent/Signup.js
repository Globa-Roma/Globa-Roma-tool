
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Select from 'react-select';
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

const theme = theme => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary25: "green"
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
            language: "",
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
    changeLanguage(event) {
        this.setState({
            language: event.target.value
        })
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

        axios.post('http://localhost:3001/register', regester)
            .then(res => console.log(res.data))

        this.setState({
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: "",
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
            <div className="formContainer">
                <ToastContainer
                    draggable={false}
                    //transition={zoom}
                    autoClose={3000}
                />
                <h1> Register here ...</h1>
                <form className="form" onSubmit={this.collect}>
                    <input className="forms" type="text" placeholder="Name" value={this.state.fullName} onChange={(event) => this.changeFullName(event)}></input>
                    <input className="forms" type="text" placeholder="Email" value={this.state.email} onChange={(event) => this.changeEmail(event)} ></input>
                    <input className="forms" type="text" placeholder="Telephone" value={this.state.telephone} onChange={(event) => this.changeTelephone(event)} ></input>
                    <input className="forms" type="text" placeholder="City" value={this.state.city} onChange={(event) => this.changeCity(event)} ></input>
                    <input className="forms" type="text" placeholder="Language" value={this.state.language} onChange={(event) => this.changeLanguage(event)} ></input>
                    <Select className="select" isMulti value={this.state.interest} onChange={this.changeInterest} options={select} theme={theme}></Select>
                    <textarea className="textarea" type="text" placeholder="Other Details" value={this.state.other} onChange={(event) => this.changeOther(event)} ></textarea>
                    <button className="submit" onClick={this.notify} type="submit" className="submit">ADD</button>
                </form>
            </div>
        )
    }
}


export default Signup 