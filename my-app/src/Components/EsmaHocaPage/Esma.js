import React from 'react';
import EsmaHocaHeader from './EsmaHocaHeader';
import EsmaHocaBody from './EsmaHocaBody';
import EsmaHocaFooter from './EsmaHocaFooter';




export default class Esma extends React.Component{

    componentDidMount() {
        document.body.style.backgroundColor = "#527DDA";
    }  

    render(){
        return (
            <body>
                <header>
                <EsmaHocaHeader/> 
                </header>
                <EsmaHocaBody/>
                <footer>
                <EsmaHocaFooter/>
                </footer>
            </body>
        )
    }
}