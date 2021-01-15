import React from 'react';
import './OzgeBody.css';
import logo from '../../images/ozge.JPG';




class OzgeBody extends React.Component {

    constructor(props){
        super(props);

        this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed = () => {

        
           return <form action="">
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

                        
                        <button type="submit" class="ozgeButton" id="submitButton" >Submit</button>
                </form>
        

       

    };

    

    
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
                <button id="button" onClick = {this.buttonPressed} class="ozgeButton"/ >Contact Form
                <br/><br/>

                

                
                       

                    

            <br/>

                </div>
            

    }
}

export default OzgeBody;