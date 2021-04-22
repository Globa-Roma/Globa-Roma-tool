import React, { Component } from 'react';
import axios from 'axios'
import sms from "./Sms.css"


class Sms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: ''
      },
      submitting: false,
      error: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch('/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  render() {
    return (
      <div className="telediv">
        <h2 className="teleTitle">Send Sms</h2>
      <form
        className="teleForm"
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}>
       
          <input
              className="telenum"
              type="tel"
              name="to"
              id="to"
              placeholder="Phone number"
              value={this.state.message.to}
              onChange={this.onHandleChange}
          />
       
          <textarea 
              className="teleMessage"
              name="body" 
              id="body"
              placeholder="Message"
              value={this.state.message.body}
              onChange={this.onHandleChange}
          />
        
        <button 
           type="submit" 
           disabled={this.state.submitting}
           className="telesubmit"
           >
            Send
        </button>
      </form>
      </div>
    );
  }
}


  export default Sms;




