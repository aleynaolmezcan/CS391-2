import React from 'react';
import './EsadFooter.css';
import logo from '../../images/logo_size_orange.png';

class EsadFooter extends React.Component {
    render() {
        return <div id = "esadFooter">
            <p class="esad-footer-text">
            <a href="/"><img class="footerimg" src={logo} alt="Geleceğin Şovmenleri"/></a>
                <br/>REMEMBER THE NAME <br/>
                    Geleceğin Şovmenleri &reg; - Fall 2020 - Özyeğin University
            </p>

    </div>
    
        
    }
}

export default EsadFooter;