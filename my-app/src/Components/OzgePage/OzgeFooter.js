import React from 'react';
import './OzgeFooter.css';
import logo from '../../images/logo_size_black.jpg';

class OzgeFooter extends React.Component {
    render() {
        return <div id = "ozgeFooter">
                    <p class="footer-text">
                        <a href="/"><img class="footerimg" src= {logo} alt="Geleceğin Şovmenleri"/></a>
                        <br/>REMEMBER THE NAME <br/>
                        Geleceğin Şovmenleri &reg; - Fall 2020 - Özyeğin University
                    </p>
                </div>
        
    }
}

export default OzgeFooter;