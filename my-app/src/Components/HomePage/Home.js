import React from 'react';
import HomeHeader from './HomeHeader.js';
import Table from './Table.js';
import HomeFooter from './HomeFooter.js';


import './Home.css'

class Home extends React.Component {

  render() {
    return <body>
      <header>
        <HomeHeader />
      </header>
      <Table />
      <footer>
        <HomeFooter />
      </footer>
    </body>
  }
}

export default Home;