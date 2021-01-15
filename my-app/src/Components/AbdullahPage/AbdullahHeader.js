import React from 'react';
import './AbdullahHeader.css';
import logo from '../../images/logo_size_green.png'; // with import



class AbdullahHeader extends React.Component{
    render(){
        return <div id ="abdüHeader">
                    <a href= "/"><img id = "headerimgAbdullah" src={logo}  alt="Geleceğin Şovmenleri" /> </a>
                </div>
    }           
}

export default AbdullahHeader;