import React from 'react'
import './HomeFooter.css';
import logo from '../../images/home_footer.png';


class HomeFooter extends React.Component{

    render(){
        return <p id = "homeFooter" class="footer-text">
                    <img class="homeFotterImage" src= {logo} alt="Geleceğin Şovmenleri"></img>
                    <br/>REMEMBER THE NAME<br/>Geleceğin Şovmenleri &reg; - Fall 2020 - Özyeğin University
                </p>
    }
}

export default HomeFooter;