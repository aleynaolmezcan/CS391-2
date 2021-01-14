import React from 'react';
import './EsadForm.css';

class EsadForm extends React.Component {
    render() {
        return  <div id = "esadForm">

       
                    <form>
                        <h1>Your Message</h1>

                        <label for="name" class="LabelTextField"><b>Name</b></label>
                        <input type="text" placeholder="Enter Your Name" id="inputName" class="TextField" name="name" required/>

                        <label for="surname" class="LabelTextField"><b>Surname</b></label>
                        <input type="text" placeholder="Enter Your Surname" id="inputSurname" class="TextField" name="surname" required/>

                        <label for="email" class="LabelTextField"><b>Email</b></label>
                        <input type="text" placeholder="Enter Your Email" id="inputEmail" class="TextField" name="email" required/>

                        <br/><br/><br/>

                        <label for="phoneNumber" class="LabelTextField"><b>Phone Number</b></label>
                        <input type="text" placeholder="Enter Your Phone Number" id="inputPhoneNumber" class="TextField"name="phoneNumber"/>

                        <br/><br/><br/>

                        <label for="message" class="LabelTextField"><b>Message</b></label>
                        <br/><br/>

                        <textarea class ="TextField" placeholder="Enter Your Message" rows="4" cols="50"> </textarea>
                        <br/><br/><br/>

                        <button type="submit" class="btn" onclick="saveFunc()"> Submit</button>
                        <br/><br/>
                        
                </form>
            </div>


           
    }
}

export default EsadForm;