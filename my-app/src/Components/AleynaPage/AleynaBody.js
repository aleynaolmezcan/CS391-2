import React from 'react';
import './AleynaBody.css';
import logo from '../../images/aleyna.jpg';

class AleynaBody extends React.Component {

    popUP(){

        alert("merhabaa")
    
        document.getElementById('ContactButton').addEventListener('click', function(){
            document.querySelector('.pop-form').style.display = 'flex';
        });
    
        document.querySelector('.close').addEventListener('click', function(){
            document.querySelector('.pop-form').style.display = 'none';
        });
    } 

    render(){
        return <div id = "aleynaBody">
                    <br/><br/>
                    <img id="aleynaimg" src={logo} width="200" height="200"/> 
                        <article>
                            <h1><b>Aleyna Ölmezcan</b></h1>
                            <h2><i>9 September 1999</i></h2>
                            <p>My name is Aleyna Ölmezcan. I am a third year Computer Engineering Student at Ozyegin University.</p>
                        </article>
                        <br/>

                        
                        <a href="https://www.instagram.com/olmezcanaleyna" id = "github" class="fa fa-instagram fa-3x" ></a>
                        <a href="https://twitter.com/olmezcanaleyna" id = "github" class="fa fa-twitter fa-3x" ></a>
                        <a href="https://github.com/aleynaolmezcan" id = "github" class="fa fa-github fa-3x" ></a>
                        <br/>

                        <a href="#" id="ContactButton" class="aleynaButton">Contact Form</a> <br/><br/><br/>
                
                </div>
}
}


export default AleynaBody;
