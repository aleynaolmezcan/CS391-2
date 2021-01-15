import React from 'react';
import './AleynaBody.css';
import logo from '../../images/aleyna.jpg';

class Popup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname:"",
            email:"",
            phoneNumber:"",
            message:"",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        const {name, surname, email, phoneNumber, message} = this.state;

        var student = {
            "firstname": name,
            "surname": surname,
            "email": email,
            "phoneNumber": phoneNumber,
            "message": message
        }
        localStorage.setItem(student.email,JSON.stringify(student));
    }

    render() {
      return (
         <div class="aleynaPopup">
                    <div class="aleynaPopup_inner">
                            <form action="">
                                <h3>Contact Form</h3>
                                <label id = "aleynaLabel" for="name"><b>Name</b></label><b></b>
                                <input type="text" id = "name" onChange={evt => this.setState({ name: evt.target.value})} placeholder="Enter Your Name" name="name" required/><br/>
                
                                <label id = "aleynaLabel" for="surname"><b>Surname</b></label>
                                <input type="text" id = "surname" onChange={evt => this.setState({ surname: evt.target.value})} placeholder="Enter Your Surname" name="surname" required/><br/>
                
                                <label id = "aleynaLabel" for="email"><b>Email</b></label>
                                <input type="text" id = "email" onChange={evt => this.setState({ email: evt.target.value})}  placeholder="Enter Your Email" name="email" required/><br/>
                
                                <label id = "aleynaLabel" for="phone"><b>Phone Number</b></label>
                                <input type="text" id = "phone" onChange={evt => this.setState({ phoneNumber: evt.target.value})} placeholder="Enter Your Phone Number" name="phone" required/><br/>
                
                                <label id = "aleynaLabel" for="message"><b>Message</b></label>
                                <input type="text" id = "message" onChange={evt => this.setState({ message: evt.target.value})}  placeholder="Enter Your Message" name="message" maxlength="1500" required/><br/>
                
                                <button type="submit" id="submitButton" onClick= {this.handleSubmit} >Submit</button>
                                <button type="submit" id="closeButton" onClick={this.props.closePopup}>Close Me</button>

                            </form>
                    </div>
                </div>
      );
    }
  }


class AleynaBody extends React.Component {

    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    render(){
        return <div id = "aleynaBody">
                    <br/><br/>
                    <img id="aleynaimg" src={logo} width="200" height="200"/> 
                        <article>
                            <h1><b>Aleyna Ölmezcan</b></h1>
                            <h2><i>9 September 1999</i></h2>
                            <p>My name is Aleyna Ölmezcan. I am a third year Computer Engineering Student at Ozyegin University.</p>
                        </article>
                        <br/>

                        
                        <a href="https://www.instagram.com/olmezcanaleyna" id = "github" class="fa fa-instagram fa-3x" ></a>
                        <a href="https://twitter.com/olmezcanaleyna" id = "github" class="fa fa-twitter fa-3x" ></a>
                        <a href="https://github.com/aleynaolmezcan" id = "github" class="fa fa-github fa-3x" ></a>
                        <br/><br/>

                        <div>
                            <button id = "ContactButton" onClick={this.togglePopup.bind(this)}>Contact Form</button> <br/><br/><br/>
                            {this.state.showPopup ? 
                            <Popup text='Close Me'closePopup={this.togglePopup.bind(this)}/>: null}
                        </div>
                
                </div>
}
}

export default AleynaBody;
