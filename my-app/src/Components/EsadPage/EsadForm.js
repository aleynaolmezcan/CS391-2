import React from 'react';
import './EsadForm.css';





class EsadForm extends React.Component {


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

   handleValidation() {
      let formIsValid = true;

      if (typeof this.state.name == "undefined") {
         if (/[^a-zA-Z]/.test(this.state.name)) {
            formIsValid = false;
         }
      }



      if (typeof this.state.surname !== "undefined") {
         if (/[^a-zA-Z]/.test(this.state.surname)) {
            formIsValid = false;
         }
      }



      if (typeof this.state.email !== "undefined") {
         let lastAtPos = this.state.email.lastIndexOf('@');
         let lastDotPos = this.state.email.lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && (this.state.email).indexOf('@@') == -1 && lastDotPos > 2 && ((this.state.email).length - lastDotPos) > 2)) {
            formIsValid = false;
         }
      }

      if (typeof this.state.phoneNumber !== "undefined") {
         if (!(/[^a-zA-Z]/.test(this.state.phoneNumber))) {
            formIsValid = false;
         }
      }

      return formIsValid;
   }

   contactSubmit(e) {

      e.preventDefault();
      if (this.handleValidation()) {
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
      localStorage.setItem(student['primary key'], JSON.stringify(student));

   }


   render() {
      return <div id="esadForm">
         <form onSubmit={this.contactSubmit.bind(this)} >
            <h1>Your Message</h1>

            <label for="name" class="LabelTextField"><b>Name</b></label>
            <input type="text" onChange={evt => this.setState({ name: evt.target.value })} placeholder="Enter Your Name" id="inputName" class="TextField" name="name" required />

            <label for="surname" class="LabelTextField"><b>Surname</b></label>
            <input type="text" onChange={evt => this.setState({ surname: evt.target.value })} placeholder="Enter Your Surname" id="inputSurname" class="TextField" name="surname" required />

            <label for="email" class="LabelTextField"><b>Email</b></label>
            <input type="text" onChange={evt => this.setState({ email: evt.target.value })} placeholder="Enter Your Email" id="inputEmail" class="TextField" name="email" required />

            <br /><br /><br />

            <label for="phoneNumber" class="LabelTextField"><b>Phone Number</b></label>
            <input type="text" onChange={evt => this.setState({ phoneNumber: evt.target.value })} placeholder="Enter Your Phone Number" id="inputPhoneNumber" class="TextField" name="phoneNumber" />

            <br /><br /><br />

            <label for="message" class="LabelTextField"><b>Message</b></label>
            <br /><br />

            <textarea class="TextField" onChange={evt => this.setState({ message: evt.target.value })} placeholder="Enter Your Message" rows="4" cols="50"> </textarea>
            <br /><br /><br />

            <button type="submit" class="btn" onClick={this.handleSubmit}> Submit</button>
            <br /><br /><br /><br />

         </form>
      </div>



   }
}

export default EsadForm;