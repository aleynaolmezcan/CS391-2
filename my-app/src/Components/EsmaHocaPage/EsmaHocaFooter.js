import React from 'react';
import './EsmaHocaFooter.css';
import logo from '../../images/logo_size_orange.png'; 

class EsmaHocaFooter extends React.Component{
    render(){ 
        return (<div id = "esmaFooter">
                    <p class="esma-footer-text">
                        <a id = "esmaA" href="/"><img class="esmaFooterimg" src={logo} alt="Geleceğin Şovmenleri"></img></a>
                        <br/>REMEMBER THE NAME <br/>
                        Geleceğin Şovmenleri &reg; - Fall 2020 - Özyeğin University
                    </p>
                </div>
        )
    }
}

export default EsmaHocaFooter;