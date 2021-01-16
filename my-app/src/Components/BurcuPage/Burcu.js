import React from 'react';
import BurcuHeader from './BurcuHeader';
import BurcuBody from './BurcuBody';
import BurcuFooter from './BurcuFooter';

export default class Burcu extends React.Component{


  componentDidMount() {
    document.body.style.backgroundColor = "#07033B";
  }


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