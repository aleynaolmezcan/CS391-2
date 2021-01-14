import React from 'react';
import EsadHeader from "./EsadHeader";
import EsadBody from './EsadBody';
import EsadForm from './EsadForm';
import EsadFooter from './EsadFooter';

export default class Esad extends React.Component{
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