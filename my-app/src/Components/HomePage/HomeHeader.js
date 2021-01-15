import React from 'react';
import './HomeHeader.css';
import headerLogo from '../../images/home_header.png';

class HomeHeader extends React.Component{
    render(){
        return <div id = "headerimg">
                    <img src = {headerLogo} ></img>
                </div> 
    }
    
}

export default HomeHeader;