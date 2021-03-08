
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Select from 'react-select';

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

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            interest: []
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeTelephone = this.changeTelephone.bind(this)
        this.changeCity = this.changeCity.bind(this)
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
            interest: this.state.interest
        }

        axios.post('http://localhost:3001/app', regester)
            .then(res => console.log(res.data))

        this.setState({
            fullName: "",
            email: "",
            telephone: "",
            city: "",
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
                <h1> client SignUp please ...</h1>
                <form onSubmit={this.collect}>
                    <input type="text" placeholder="name" value={this.state.fullName} onChange={(event) => this.changeFullName(event)}></input>
                    <input type="text" placeholder="email" value={this.state.email} onChange={(event) => this.changeEmail(event)} ></input>
                    <input type="text" placeholder="telephone" value={this.state.telephone} onChange={(event) => this.changeTelephone(event)} ></input>
                    <input type="text" placeholder="city" value={this.state.city} onChange={(event) => this.changeCity(event)} ></input>
                    <Select isMulti value={this.state.interest} onChange={this.changeInterest} options={select}></Select>
                    <button onClick={this.notify} type="submit" className="submit">submit</button>
                </form>
           </div>
        )
    }
}



export default Signup 