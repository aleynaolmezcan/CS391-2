import React from 'react';
import './EsadForm.css';





class EsadForm extends React.Component {


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
        return  <div id = "esadForm">
                    <form>
                        <h1>Your Message</h1>

                        <label for="name" class="LabelTextField"><b>Name</b></label>
                        <input type="text" onChange={evt => this.setState({ name: evt.target.value})} placeholder="Enter Your Name" id="inputName" class="TextField" name="name" required/>

                        <label for="surname" class="LabelTextField"><b>Surname</b></label>
                        <input type="text" onChange={evt => this.setState({ surname: evt.target.value})} placeholder="Enter Your Surname" id="inputSurname" class="TextField" name="surname" required/>

                        <label for="email" class="LabelTextField"><b>Email</b></label>
                        <input type="text" onChange={evt => this.setState({ email: evt.target.value})} placeholder="Enter Your Email" id="inputEmail" class="TextField" name="email" required/>

                        <br/><br/><br/>

                        <label for="phoneNumber" class="LabelTextField"><b>Phone Number</b></label>
                        <input type="text" onChange={evt => this.setState({ phoneNumber: evt.target.value})} placeholder="Enter Your Phone Number" id="inputPhoneNumber" class="TextField"name="phoneNumber"/>

                        <br/><br/><br/>

                        <label for="message" class="LabelTextField"><b>Message</b></label>
                        <br/><br/>

                        <textarea class ="TextField" onChange={evt => this.setState({ message: evt.target.value})} placeholder="Enter Your Message" rows="4" cols="50"> </textarea>
                        <br/><br/><br/>

                        <button type="submit" class="btn"  onClick= {this.handleSubmit}> Submit</button>
                        <br/><br/><br/><br/>
                        
                </form>
            </div>


           
    }
}

export default EsadForm;