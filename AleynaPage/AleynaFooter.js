import React from 'react';
import './AleynaFooter.css';
import logo from '../../images/logo_size_maroon.png'; // with import

class AleynaFooter extends React.Component{
    render(){
        return <div id = "AleynaFooter" >
                <p class = "footer-text">
                    <img class="footerimg" src= {logo} alt="Geleceğin Şovmenleri"/>
                    <br/>REMEMBER THE NAME <br/>
                    Geleceğin Şovmenleri &reg; - Fall 2020 - Özyeğin University
                </p>
                </div>
    }
}

export default AleynaFooter;