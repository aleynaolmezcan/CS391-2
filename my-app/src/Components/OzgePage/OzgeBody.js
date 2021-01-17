import React from 'react';
import './OzgeBody.css';
import logo from '../../images/ozge.JPG';



class Popup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname:"",
            email:"",
            phoneNumber:"",
            message:"",
            primaryKey:0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(){
      let formIsValid = true;

      if(typeof this.state.name !== "undefined"){
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

        const randomValue = Math.floor((Math.random() * 100) + 1);

        var student = {
            "primary key": randomValue,
            "firstname": name,
            "surname": surname,
            "email": email,
            "phoneNumber": phoneNumber,
            "message": message
        }
        localStorage.setItem(student['primary key'],JSON.stringify(student));

        

    }

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <form action="" onSubmit= {this.contactSubmit.bind(this)} >
                        <h3>Contact Form</h3>
                        <label for="name"><b>Name (Use English Characters)</b></label>
                        <input class = "ozgeInput" type="text" id= "name"  onChange={evt => this.setState({ name: evt.target.value})} placeholder="Name" name="name"  required/>

                        <label for="surname"><b>Surname (Use English Characters)</b></label>
                        <input class = "ozgeInput" type="text" id= "surname"  onChange={evt => this.setState({ surname: evt.target.value})} placeholder="Surname" name="surname"  required/>

                        <label for="email"><b>Email (Use English Characters)</b></label>
                        <input class = "ozgeInput" type="text" id= "email"  onChange={evt => this.setState({ email: evt.target.value})} placeholder="Email" name="email"  required/>

                        <label for="phone"><b>Phone Number (Use English Characters)</b></label>
                        <input class = "ozgeInput" type="text" id= "phone"  onChange={evt => this.setState({ phoneNumber: evt.target.value})} placeholder="Phone Number" name="phone"   required/>

                        <label for="message"><b>Message</b></label>
                        <input class = "ozgeInput" type="text" id= "message" onChange={evt => this.setState({ message: evt.target.value})} placeholder="Your Message" name="message" required/>

                        
                        <button type="submit" class="ozgeButton" onClick= {this.handleSubmit}>Submit</button>
                        <button type="submit" class="ozgeButton"  onClick={this.props.closePopup}>Close</button>

            </form>
            </div>
            </div>
      );
    }
  }


class OzgeBody extends React.Component {

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
        return <div id = "ozgeBody">
                 <div id="info">
                    <br/> <br/> <br/>
                    <img id = "ozgeImg" src= {logo} width="200" height="200"/>
                    <article>
                        <h1><b>Özge Yılgür</b></h1>
                        <h2><i>Fake it till you make it</i></h2>
                        <p>
                        <marquee>I'm Özge Yılgür. A superstar, part-time CS student at OzU. Listen 2 my album "A Slave 4 AI"from the spotify icon below!</marquee>
                        </p>
                    </article>
                 </div>
            
            <br/>

                <div id="social">
                    <a href="https://www.linkedin.com/in/özge-yılgür/" id = "social" class="fa fa-linkedin fa-3x"> </a>
                    <a href="https://open.spotify.com/user/ozgeyilgur?si=fAf6xHoVRkmReqg9YjfVWg" id = "social"  class="fa fa-spotify fa-3x"> </a>
                    <a href="https://github.com/ozg-y" id = "social"  class="fa fa-github-alt fa-3x"></a>
                </div>

                <br/><br/>

                <div>
                        <button class ="ozgeButton" onClick={this.togglePopup.bind(this)}>Contact Form</button>
                        {this.state.showPopup ? 
                        <Popup text='Close Me'closePopup={this.togglePopup.bind(this)}/>: null}
                </div>

                

                
              
            <br/><br/><br/><br/>

                </div>
            

    }
}

export default OzgeBody;