import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
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
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.state = {
            fullName: "",
            email: "",
            telephone: "",
            city: "",
            language: [],
            other: "",
            interest: [],
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
            users: response.data.map(user => user.fullName),
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
  onChangeInterest(e) {
    this.setState({
      interest: e.target.value
    })
  }
  onChangeLanguage(e) {
    this.setState({
      language: e.target.value
    })
  }
  onChangeOther(e) {
    this.setState({
      other: e.target.value
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
            date: this.state.date
    }

    console.log(editing);

    axios.post('/update/' + this.props.match.params.id, editing)
      .then(res => console.log(res.data));
      window.location = '/clients';
  }

  render() {
    return (
    <div>
      <h3>Edit </h3>
      <form className="form" onSubmit={this.onSubmit}>
                        
                             <input type="hidden" name="id" value={this.state._id}/>
                             <input className="name" type="text" placeholder="Name" value={this.state.fullName || ''} onChange={(event) => this.onChangeFullName(event)} maxLength={30} ></input>
                            <input className="email" type="text" placeholder="Email" value={this.state.email} onChange={(event) => this.onChangeEmail(event)} maxLength={20} ></input>
                            <input className="tele" type="number" placeholder="Telephone" value={this.state.telephone} onChange={(event) => this.onChangeTelephone(event)} ></input>
                            <input className="city" type="text" placeholder="City" value={this.state.city} onChange={(event) => this.onChangeCity(event)} maxLength={15} ></input>
                            <Select className="select" placeholder="Language" isMulti value={this.state.language} onChange={this.onChangeLanguage} options={language} theme={theme} ></Select>
                            <Select className="select" placeholder="Interset" isMulti value={this.state.interest} onChange={this.onChangeInterest} options={select} theme={theme} ></Select>
                            <textarea className="textarea" type="text" placeholder="100 words limit" value={this.state.other} onChange={(event) => this.onChangeOther(event)} maxLength={100}></textarea> 
                            <div>
                              <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                              />
                            </div>
                            <button onClick={this.notify} type="submit" className="submit">Save</button>
                        </form>
    </div>
    )
  }
}