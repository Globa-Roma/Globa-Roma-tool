import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-select';
import Update from './Update.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";


export default class Edit extends Component {
  constructor(props) {
    super(props);

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this)
        this.onChangeCity = this.onChangeCity.bind(this)
        this.onChangeLanguage = this.onChangeLanguage.bind(this)
        this.onChangeOther = this.onChangeOther.bind(this)
        this.onChangeInterest = this.onChangeInterest.bind(this)
        this.onChangeSpheres = this.onChangeSpheres.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.state = {
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: "",
            other: "",
            interest: "",
            spheres: "",
            users: []
    }
  }

  componentDidMount() {
    axios.get('/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          fullName: response.data.fullName,
          email: response.data.email,
          telephone: response.data.telephone,
          city: response.data.city,
          language: response.data.language,
          other: response.data.other,
          interest: response.data.interest,
          spheres: response.data.spheres,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/clients')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user._id),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }
  onChangeTelephone(e) {
    this.setState({
      telephone: e.target.value
    })
  }
  onChangeInterest(event){
    this.setState({
        interest: event.target.value
    })
}
onChangeLanguage(event){
    this.setState({
        language: event.target.value
    })
}
  onChangeOther(e) {
    this.setState({
      other: e.target.value
    })
  }
  onChangeSpheres(e) {
    this.setState({
      spheres: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const editing = {
      fullName: this.state.fullName,
            email: this.state.email,
            telephone: this.state.telephone,
            city: this.state.city,
            language: this.state.language,
            other: this.state.other,
            interest: this.state.interest,
            spheres: this.state.spheres,
            date: this.state.date
    }

    console.log(editing);

    axios.post('/update/' + this.props.match.params.id, editing)
      .then(res => console.log(res.data));
  }

    // notify message
    notify = () => {
       toast.success('You Updated successfully!');
    }

                    render() {
                    return (
                    <div className="body">
                      <h2>Client Detail And Edit </h2>

                      <ToastContainer
                        draggable={false}
                        autoClose={4000}/>
                      <form className="form" onSubmit={this.onSubmit}>
                        
                            <input type="hidden" name="id" value={this.state._id}/>
                            <p>fullName</p><input className="names" type="text"  value={this.state.fullName || ''} onChange={(event) => this.onChangeFullName(event)} maxLength={30} ></input>
                            <p>email</p><input className="emails" type="text"  value={this.state.email} onChange={(event) => this.onChangeEmail(event)} maxLength={20} ></input>
                            <p>Telephone</p><input className="teles" type="number" value={this.state.telephone} onChange={(event) => this.onChangeTelephone(event)} ></input>
                            <p>City</p><input className="citys" type="text"  value={this.state.city} onChange={(event) => this.onChangeCity(event)} maxLength={15} ></input>
                            <p>Language</p><input className="selects" type="text"  value={this.state.language} onChange={(event) => this.onChangeLanguage(event)} required></input>
                            <p>Interest</p><input className="selects" type="text"  value={this.state.interest} onChange={(event) => this.onChangeInterest(event)} required></input>
                            <p>spheres</p><input className="selects" type="text"  value={this.state.spheres} onChange={(event) => this.onChangeSpheres(event)} ></input>
                            <p>Note</p><textarea className="textareas" type="text"  value={this.state.other} onChange={(event) => this.onChangeOther(event)} ></textarea> 
                            <p>Recient Active</p>
                            <div>
                              <DatePicker
                                className="date"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                              />
                            </div>
                            <button onClick={this.notify} type="submit" className="save">Save</button>
                            <Link to="/clients">
                                <button className="backlist"> 
                                <img src="https://img.icons8.com/material-rounded/24/000000/person-male.png"/>Back to List
                                </button>
                            </Link>
                        </form>
    </div>
    )
  }
}