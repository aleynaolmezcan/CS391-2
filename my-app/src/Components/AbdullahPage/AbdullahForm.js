import React from 'react';
import './AbdullahForm.css';

class AbdullahForm extends React.Component{

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

    handleValidation(){
      let formIsValid = true;

      if(typeof this.state.name == "undefined"){
         if(/[^a-zA-Z]/.test(this.state.name)){
            formIsValid = false;
         }        
      }

      
 
       if(typeof this.state.surname !== "undefined"){
          if(/[^a-zA-Z]/.test(this.state.surname)){
             formIsValid = false;
          }        
       }
 
      

      if(typeof this.state.email !== "undefined"){
         let lastAtPos =this.state.email.lastIndexOf('@');
         let lastDotPos = this.state.email.lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && (this.state.email).indexOf('@@') == -1 && lastDotPos > 2 && ((this.state.email).length - lastDotPos) > 2)) {
            formIsValid = false;
          }
     } 
 
       if(typeof this.state.phoneNumber !== "undefined"){
          if(!(/[^a-zA-Z]/.test(this.state.phoneNumber))){
             formIsValid = false;
          }        
       }

     return formIsValid;
 }

    contactSubmit(e){
      
      e.preventDefault();
      if(this.handleValidation()){
        alert("Form submitted");
      }else{
        alert("Form has errors.")
      }

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


   
    render(){
        return  <div className = "message-form">
                    <form id ="action-form">

                            <label for="name" className ="inplabel"><b>Name</b></label><br/>
                            <input type="text" className="input" onChange={evt => this.setState({ name: evt.target.value})} id="name" minlength="3" maxlength="25" pattern="^[A-Za-z -]+$" required />
                            <br/><br/>

                            <label for="surname" className="inplabel"><b>Surname</b></label><br/>
                            <input type="text" className="input" onChange={evt => this.setState({ surname: evt.target.value})} id="surname" minlength="3" maxlength="25" pattern="^[A-Za-z -]+$" required/> <br/><br/>

                            <label for="email" className="inplabel"><b>Email</b></label><br/>
                            <input type="email" className="input" onChange={evt => this.setState({ email: evt.target.value})} id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/> <br/><br/>

                            <label for="phoneNumber" className="inplabel"><b>Phone Number</b></label><br/>
                            <input type="tel" className="input" onChange={evt => this.setState({ phoneNumber: evt.target.value})} id="phoneNumber" minlength="10" pattern="^\d*$" required/> <br/><br/>

                            <label for="message" className="inplabel"><b>Message</b></label><br/>
                            <textarea type="text" className="input" onChange={evt => this.setState({ message: evt.target.value})} id="message" maxlength="1000" name="message" required></textarea>
                            <br/><br/>

                            

                            <button type="submit" className="abdüButton" onClick= {this.handleSubmit} >Submit</button>
                            <br/><br/>
                    </form>


                </div>
    }
}

export default AbdullahForm;