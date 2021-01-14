import React from 'react';
import './AleynaHeader.css';
import logo from '../../images/logo_size_maroon.png';

class AleynaHeader extends React.Component{
    render(){
        return <div  id= "headerimgAleyna">
            <a href= "/"><img src={logo}  alt = "Geleceğin Şovmenleri" /></a>
            </div>
    }
}

export default AleynaHeader;