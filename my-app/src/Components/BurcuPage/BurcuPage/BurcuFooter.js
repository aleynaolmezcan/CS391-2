import React from 'react';
import './BurcuFooter.css';
import logo from '../../images/logo_size_navy_blue.png';

class BurcuFooter extends React.Component{
    render(){ 
        return <div id = "burcuBody">
                <div class="burcuFooter">
                    <p class = "footerBurcuText">
                        <img class = "footerimg" src = {logo} alt = "Geleceğin Şovmenleri"></img>
                        <br/>REMEMBER THE NAME<br/>
                        Geleceğin Şovmenleri &reg; - Fall 2020 - Özyeğin University 
                        </p>
                    </div>
                    </div>
    }
}

export default BurcuFooter;
