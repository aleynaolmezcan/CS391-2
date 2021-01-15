import React from 'react';
import './BurcuForm.css';

class BurcuForm extends React.Component{
    render(){        return <body>
        <div class="form">
            <div class="form-input">
                <div class="close">+</div>
                <form action="">
                    <h3>&hearts;Leave a Message&hearts;</h3>
                    <label for="name" ><b>Name&hearts;</b></label>
                    <input type="text" id="name" placeholder="Enter Your Name" name="name" required></input>
      
                    <label for="surname"><b>Surname&hearts;</b></label>
                    <input type="text" id="surname" placeholder="Enter Your Surname" name="surname" required></input>
      
                    <label for="email"><b>Email&hearts;</b></label>
                    <input type="text" id="email" placeholder="Enter Your Email" name="email" required></input>
      
                    <label for="phone"><b>Phone Number&hearts;</b></label>
                    <input type="text" id="phone" placeholder="Enter Your Phone Number" name="phone" required></input>
      
                    <label for="msg"><b>Message&hearts;</b></label>
                    <input type="text" id="msg" placeholder="Enter Your Message" name="msg" required maxlength="55"></input>
      
                   
                    <button type="submit" class="button" id="submitButton" onclick="addtoLocal()">&hearts;Submit&hearts;</button>
                </form>
      
            </div>
        </div>
      </body>
    }
   }
   export default BurcuForm;