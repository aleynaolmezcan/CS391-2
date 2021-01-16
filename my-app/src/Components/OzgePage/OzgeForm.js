import React from 'react';
import './OzgeForm.css';


    function addtoLocal(){
        alert()
    }



class OzgeForm extends React.Component {
    render() {

        return <div class="ozgeForm">
                    <div class="form-content-ozge">
                        <div class="close">+</div>
                        <form action="">
                            <h3>Contact Form</h3>
                            <label for="name"><b>Name</b></label>
                            <input class = "ozgeInput" type="text" id= "name" placeholder="Name" name="name" required/>

                            <label for="surname"><b>Surname</b></label>
                            <input class = "ozgeInput" type="text" id= "surname" placeholder="Surname" name="surname" required/>

                            <label for="email"><b>Email</b></label>
                            <input class = "ozgeInput" type="text" id= "email" placeholder="Email" name="email" required/>

                            <label for="phone"><b>Phone Number</b></label>
                            <input class = "ozgeInput" type="text" id= "phone" placeholder="Phone Number" name="phone" required/>

                            <label for="message"><b>Message</b></label>
                            <input class = "ozgeInput" type="text" id= "message" placeholder="Your Message" name="message" required/>

                            
                            <button type="submit" class="ozgeButton" id="submitButton" onClick={addtoLocal}>Submit</button>
                        </form>

                    </div>
                </div>

    
    }
}

export default OzgeForm;