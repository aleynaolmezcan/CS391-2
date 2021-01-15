import React from 'react';
import './AbdullahFooter.css';
import logo from '../../images/logo_size_green.png'; // with import

class AbdullahFooter extends React.Component{
    render(){
        return <div id = "AbdullahFooter"> 
                    <p class = "footerAbdüText">
                    <img class = "footerimg" src = {logo} alt = "Geleceğin Şovmenleri"></img>
                    <br/>
                    REMEMBER THE NAME <br></br>
                    Geleceğin Şovmenleri &reg; - Fall 2020 - Özyeğin University
                    </p>
            </div>
        
    }
}

export default AbdullahFooter;