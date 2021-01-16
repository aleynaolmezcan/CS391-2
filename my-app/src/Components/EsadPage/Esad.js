import React from 'react';
import EsadHeader from "./EsadHeader";
import EsadBody from './EsadBody';
import EsadForm from './EsadForm';
import EsadFooter from './EsadFooter';

export default class Esad extends React.Component{

    componentDidMount() {
        document.body.style.backgroundColor = "#995A6B";
    }


    render(){
        return <body>
                    <header>
                        <EsadHeader/>
                    </header>
                        <EsadBody/>
                        <EsadForm/>
                    <footer>
                        <EsadFooter/>
                    </footer>
      </body>
    }
}