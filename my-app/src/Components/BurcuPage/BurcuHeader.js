import React from 'react';
import './BurcuHeader.css';
import logo from '../../images/logo_size_navy_blue.png'; 

class BurcuHeader extends React.Component{
    render(){
        return  <div id = "burcuBody">
                    <a href= "/"><div id = "burcuHeader"> <img src={logo}  alt="Geleceğin Şovmenleri" /> </div> </a>
            </div>
    }
}

export default BurcuHeader;