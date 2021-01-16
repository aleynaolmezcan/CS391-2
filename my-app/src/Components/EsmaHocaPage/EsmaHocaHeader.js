import React from 'react';
import './EsmaHocaHeader.css';
import logo from '../../images/logo_size_orange.png'; 

class EsmaHocaHeader extends React.Component{
    render(){ return <div id = "esmaHeader">
                        <a href = "/"><img src={logo}  alt="Geleceğin Şovmenleri" /> </a>
                        </div>
    }
}
export default EsmaHocaHeader;