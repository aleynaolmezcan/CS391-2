import React from 'react';
import './BurcuBody.css';
import logo from '../../images/brcula.jpg'; 

class BurcuBody extends React.Component{
    render(){  return  <div id = "burcuBody">
                        <div class="box">
                                <br/><br/><br/>
                                <img id= "burcula" src={logo} alt="Geleceğin Şovmenleri" width="200" height="266"/>
                                <h1 id = "burcu1">Burcu Arslan</h1>
                                <h2 id = "burcu2">aka burcula&trade;</h2>
                                <h3 id = "burcu3"><i>Student Representative of Computer Science Department</i></h3>
                                <p id = "burcuP">Hi, my name is Burcu and I am a third year computer science student in Özyeğin University. I am especially interested in sound design and new age media.</p>
                                
                                <ul id = "burcuU1">
                                    <a href="https://www.instagram.com/olmezcanaleyna" id = "github" class="fa fa-instagram fa-3x" ></a>
                                    <a href="https://twitter.com/olmezcanaleyna" id = "github" class="fa fa-twitter fa-3x" ></a>
                                    <a href="https://github.com/aleynaolmezcan" id = "github" class="fa fa-github fa-3x" ></a>
                                </ul> 
                                    <a href="#" id="button" class="button">&hearts;Leave a Message&hearts;</a>
                                <br/>
                            </div>  
                        </div>
        
     }
 }

export default BurcuBody;