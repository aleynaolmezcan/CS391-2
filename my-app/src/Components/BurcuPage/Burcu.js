import React from 'react';
import BurcuHeader from './BurcuHeader';
import BurcuBody from './BurcuBody';
import BurcuFooter from './BurcuFooter';

export default class Burcu extends React.Component{
    render(){
        return <body>
        <div id = "burcuBody">

        
        <header>
          <BurcuHeader/>
        </header>
      <BurcuBody/>
      <footer>
        <BurcuFooter/>
      </footer>
      </div>
      </body>
    }
}