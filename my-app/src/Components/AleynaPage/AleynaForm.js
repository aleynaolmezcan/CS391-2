import React from 'react';
import './AleynaForm.css';

 

class AleynaForm extends React.Component{

    

    render(){
        return <div class="pop-form">
                    <button id="ContactButton" onClick = {popUP} class="aleynaButton">Contact Form</button> <br/><br/><br/>
                    <div class="form-content">
                        <div class="close">+</div>
                            <form action="">
                                <h3>Contact Form</h3>
                                <label for="name"><b>Name</b></label>
                                <input type="text" id = "name" placeholder="Enter Your Name" name="name" required/>
                
                                <label for="surname"><b>Surname</b></label>
                                <input type="text" id = "surname"  placeholder="Enter Your Surname" name="surname" required/>
                
                                <label for="email"><b>Email</b></label>
                                <input type="text" id = "email"   placeholder="Enter Your Email" name="email" required/>
                
                                <label for="phone"><b>Phone Number</b></label>
                                <input type="text" id = "phone"  placeholder="Enter Your Phone Number" name="phone" required/>
                
                                <label for="message"><b>Message</b></label>
                                <input type="text" id = "message"  placeholder="Enter Your Message" name="message" maxlength="1500" required/>
                
                                <button type="submit" class="button" id="submitButton" onclick="addtoLocal()">Submit</button>
                            </form>
                            
    
                    </div>
                </div>

    }
}

export default AleynaForm;