import React from 'react';
import './BurcuBody.css';
import logo from '../../images/brcula.jpg';
import handleValidation from '../../utils.js';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      message: "",
      primaryKey: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  contactSubmit(e) {
    e.preventDefault();
    if (handleValidation(this.state.name, this.state.surname, this.state.email, this.state.phoneNumber)) {
      alert("Form submitted");
    } else {
      alert("Form has errors.")
    }
  }

  handleSubmit = e => {
    const { name, surname, email, phoneNumber, message } = this.state;

    const randomValue = Math.floor((Math.random() * 100) + 1);


    var student = {
      "primary key": randomValue,
      "firstname": name,
      "surname": surname,
      "email": email,
      "phoneNumber": phoneNumber,
      "message": message

    }
    localStorage.setItem(randomValue, JSON.stringify(student));

  }


  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h3>&hearts;Leave a Message&hearts;</h3>
          <form onSubmit={this.contactSubmit.bind(this)}>
            <label for="name" ><b>Name&hearts;</b></label>
            <input type="text" id="name" onChange={evt => this.setState({ name: evt.target.value })} placeholder="Enter Your Name" name="name" required></input>

            <label for="surname"><b>Surname&hearts;</b></label>
            <input type="text" id="surname" onChange={evt => this.setState({ surname: evt.target.value })} placeholder="Enter Your Surname" name="surname" required></input>

            <label for="email"><b>Email&hearts;</b></label>
            <input type="text" id="email" onChange={evt => this.setState({ email: evt.target.value })} placeholder="Enter Your Email" name="email" required></input>

            <label for="phone"><b>Phone Number&hearts;</b></label>
            <input type="text" id="phone" onChange={evt => this.setState({ phoneNumber: evt.target.value })} placeholder="Enter Your Phone Number" name="phone" required></input>

            <label for="msg"><b>Message&hearts;</b></label>
            <input type="text" id="msg" onChange={evt => this.setState({ message: evt.target.value })} placeholder="Enter Your Message" name="msg" required maxlength="55"></input>


            <button type="submit" class="button" id="submitButton" onClick={this.handleSubmit} >&hearts;Submit&hearts;</button>
            <button type="submit" class="button" id="submitButton" onClick={this.props.closePopup}>&hearts;Close Me&hearts;</button>

          </form>
        </div>
      </div>
    );
  }
}

class BurcuBody extends React.Component {

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

  render() {
    return <div id="burcuBody">
      <div class="box">
        <br /><br /><br />
        <img id="burcula" src={logo} alt="Geleceğin Şovmenleri" width="200" height="266" />
        <h1 id="burcu1">Burcu Arslan</h1>
        <h2 id="burcu2">aka burcula&trade;</h2>
        <h3 id="burcu3"><i>Student Representative of Computer Science Department</i></h3>
        <p id="burcuP">Hi, my name is Burcu and I am a third year computer science student in Özyeğin University. I am especially interested in sound design and new age media.</p>

        <ul id="burcuU1">
          <a href="https://www.instagram.com/olmezcanaleyna" id="github" class="fa fa-instagram fa-3x" ></a>
          <a href="https://twitter.com/olmezcanaleyna" id="github" class="fa fa-twitter fa-3x" ></a>
          <a href="https://github.com/aleynaolmezcan" id="github" class="fa fa-github fa-3x" ></a>
        </ul>

        <div>
          <button id="button" class="button" onClick={this.togglePopup.bind(this)}>&hearts;Leave a Message&hearts;</button>
          {this.state.showPopup ?
            <Popup text='Close Me' closePopup={this.togglePopup.bind(this)} /> : null}
        </div>

        <br />
      </div>
    </div>
  }
}

export default BurcuBody;