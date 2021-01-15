import React from 'react';
import AbdullahHeader from './AbdullahHeader.js';
import AbdullahBody from './AbdullahBody.js';
import AbdullahForm from './AbdullahForm.js';
import AbdullahFooter from './AbdullahFooter.js';


export default class Abdullah extends React.Component{
    render(){
        return <body>
                      <header>
                        <AbdullahHeader/>
                      </header>
                      <AbdullahBody/>
                      <AbdullahForm/>
                      <footer>
                      <AbdullahFooter/>
                      </footer>
                </body>
    }
}

 