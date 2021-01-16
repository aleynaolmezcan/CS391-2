import React from 'react';
import './OzgeHeader.css';
import logo from '../../images/logo_size_black.jpg';

class OzgeHeader extends React.Component {
    render() {
        return <div id = "ozgeHeader">
                     <a href="/"><img class="headerimgOzge" src= {logo} alt="Geleceğin Şovmenleri"/></a>
                </div>

    }
}

export default OzgeHeader;