import React from 'react';
import './EsadHeader.css';
import logo from '../../images/logo_size_orange.png';



class EsadHeader extends React.Component {
    render() {
        return <div id = "esadHeader">
            <a href= "/"><img id="headerimgEsad" src= {logo} alt="Geleceğin Şovmenleri" margin-top="100px"/></a>
            </div>
            
    }
}

export default EsadHeader;