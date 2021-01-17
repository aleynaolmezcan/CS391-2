import React from 'react';
import './AbdullahForm.css';
import handleValidation from '../../utils.js';

class AbdullahForm extends React.Component {

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
    return <div className="message-form">
      <form id="action-form" onSubmit={this.contactSubmit.bind(this)}>

        <label for="name" className="inplabel"><b>Name</b></label><br />
        <input type="text" className="input" onChange={evt => this.setState({ name: evt.target.value })} id="name" minlength="3" maxlength="25" required />
        <br /><br />

        <label for="surname" className="inplabel"><b>Surname</b></label><br />
        <input type="text" className="input" onChange={evt => this.setState({ surname: evt.target.value })} id="surname" minlength="3" maxlength="25" required /> <br /><br />

        <label for="email" className="inplabel"><b>Email</b></label><br />
        <input type="email" className="input" onChange={evt => this.setState({ email: evt.target.value })} id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required /> <br /><br />

        <label for="phoneNumber" className="inplabel"><b>Phone Number</b></label><br />
        <input type="tel" className="input" onChange={evt => this.setState({ phoneNumber: evt.target.value })} id="phoneNumber" minlength="10" pattern="^\d*$" required /> <br /><br />

        <label for="message" className="inplabel"><b>Message</b></label><br />
        <textarea type="text" className="input" onChange={evt => this.setState({ message: evt.target.value })} id="message" maxlength="1000" name="message" required></textarea>
        <br /><br />

        <button type="submit" className="abdüButton" onClick={this.handleSubmit} >Submit</button>
        <br /><br />
      </form>


    </div>
  }
}

export default AbdullahForm;