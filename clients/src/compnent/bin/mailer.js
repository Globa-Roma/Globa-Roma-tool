class Nodemailer extends Component {
    constructor(props) {
        super(props)
    this.state = {
        name: "",
        email: "",
        message: "",
        sent: false
    }
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
        this.resetForm = this.resetForm.bind(this)
   }

    // handle input

    handleName=(e)=>{
        this.setState({
            name: e.target.name
        })
     }
     handleEmail=(e)=>{
        this.setState({
            email: e.target.email
        })
     }
     handleMessage=(e)=>{
        this.setState({
            message: e.target.message
        })
     }


// reset form
     resetForm=()=>{
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    
        setTimeout(()=>{
            this.setState({
                sent: false
            })
        }, 3000)
    }

    // submition

    formSubmit=(e)=>{
        e.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
           }
        axios.post('/clients', data)
        .then(res=>{
            this.setState({
                sent:true,
            }, this.resetForm())
         })
        .catch(err =>{
            console.log(err)
        })
}

    render() {
        return (
            <div className="container">
                <p>send message</p>
                <form className="sendmail" onSubmit={this.formSubmit}>
                        <input className="who" type="text"  placeholder="name" value={this.state.name} onChange={this.handleName}></input>
                        <input className="from"  type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}></input>
                        <textarea className="what" type="text"  placeholder="Message" value={this.state.message} onChange={this.handleMessage}></textarea>
                        <button type="submit">Send</button>
                        <div className={this.state.sent ? 'msg msgAppear':'msg'}>message sent</div>
                </form>
            </div>
        )
    }
}

export default Nodemailer