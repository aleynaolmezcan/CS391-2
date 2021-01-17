import React from 'react';
import OzgeHeader from  './OzgeHeader';
import OzgeBody from  './OzgeBody';
import OzgeFooter from './OzgeFooter';

export default class Ozge extends React.Component{

    componentDidMount() {
        document.body.style.backgroundColor = "#000000";
      }


    render(){
        return <body>
                    <header>
                    <OzgeHeader/>
                    </header>
                    <OzgeBody/>
                    
                    <footer>
                    <OzgeFooter/>
                    </footer>
                </body>
    }
}