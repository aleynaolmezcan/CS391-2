import esmaLogo from '../../images/esmahoca.png';
import aleynaLogo from '../../images/aleyna.jpg';
import özgeLogo from '../../images/ozge.JPG';
import burcuLogo from '../../images/brcula.jpg';
import esadLogo from '../../images/esad.jpg';
import abdüLogo from '../../images/abdullah.jpg';
import  './HomeBody.css';


import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Table = () => {

    
    return (

        <div id = "container">
            <Container> 
                <Row className = "row" >
                    <Col className = "column" md="4"  lg="3"><a href= "/Aleyna"><img style={{animation: `spin 15s linear infinite`}}id = "aleynaimg" src={aleynaLogo} alt="Aleyna" width="250" height="250" /></a>Aleyna Ölmezcan</Col>
                    <Col className = "column" md="4"  lg="3"><a href= "/Esma"><img id = "esmahocaimg" src={esmaLogo} alt="Esma Hoca" width="250" height="250" /></a>Esma Meral</Col>
                    <Col className = "column" md="4"  lg="3"><a href= "/Burcu"><img style={{animation: `spin 15s linear infinite`}} id = "burcuimg" src={burcuLogo} alt="Burcu" width="250" height="250" /></a>Burcu Arslan</Col>
                    <Col className = "column" md="4"  lg="3"><a href= "/Abdullah"><img style={{animation: `spin 15s linear infinite`}} id = "abduimg" src={abdüLogo} alt="Abdullah" width="250" height="250" /></a>Abdullah Saydemir</Col>
                    <Col className = "column" md="4"  lg="3"><a href= "/Esad"><img style={{animation: `spin 15s linear infinite`}} id = "esadimg" src={esadLogo} alt="Esad" width="250" height="250" /></a>Esad Simitcioğlu</Col>
                    <Col className = "column" md="4"  lg="3"><a href= "/Ozge"><img style={{animation: `spin 15s linear infinite`}} id = "ozgeimg" src={özgeLogo} alt="Özge" width="250" height="250" /></a>Özge Yılgür</Col>
                </Row>
            </Container>
        </div>
    
    );
}

export default Table;











/*</Table><Container id = "container"> 
            <Row class = "row" >
                <Col class = "column"  sm="6" md="4"  lg="2"><a href= "/Aleyna"><img id = "aleynaimg" src={aleynaLogo} alt="Aleyna" width="250" height="250" /></a></Col>
                <Col class = "column" sm="6" md="4"  lg="2"><img id = "esmahocaimg" src={esmaLogo} alt="Esma" width="250" height="250" /></Col>
                <Col class = "column" sm="6" md="4"  lg="2"><a href= "/Burcu"><img id = "burcuimg" src={burcuLogo} alt="Burcu" width="250" height="250" /></a></Col>
            </Row>
            <Row class = "row" >
                <Col class = "column" sm="6" md="4"  lg="2"><a href= "/Abdullah"><img id = "abduimg" src={abdüLogo} alt="Abdullah" width="250" height="250" /></a></Col>
                <Col class = "column" sm="6" md="4"  lg="2"><a href= "/Esad"><img id = "esadimg" src={esadLogo} alt="Esad" width="250" height="250" /></a></Col>
                <Col class = "column" sm="6" md="4"  lg="2"><a href= "/Ozge"><img id = "ozgeimg" src={özgeLogo} alt="Özge" width="250" height="250" /></a></Col>
            </Row>
        </Container>
        */



































/* import React from 'react';
import './HomeBody.css';
import esmaLogo from '../../images/esmahoca.png';
import aleynaLogo from '../../images/aleyna.jpg';
import özgeLogo from '../../images/ozge.JPG';
import burcuLogo from '../../images/brcula.jpg';
import esadLogo from '../../images/esad.jpg';
import abdüLogo from '../../images/abdullah.jpg';

class HomeBody extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            speed: 15
        }
    }


    render(){
        return <div id="container" class="row">
                    <div class="column">
                        <div class="item"><a href= "/Aleyna"><img style={{animation: `spin ${this.state.speed}s linear infinite`}} id= "aleynaimg" src={aleynaLogo} alt="Geleceğin Şovmenleri" width="250" height="250"></img></a> 
                        </div>
                    </div>
                    <div class="column">
                        <div class="item"><img id= "esmahocaimg" src={esmaLogo} alt="Geleceğin Şovmenleri" width="250" height="250"></img>
                        </div>
                    </div>
                    <div class="column">
                        <div class="item"><img style={{animation: `spin ${this.state.speed}s linear infinite`}} id= "esadimg" src={esadLogo} alt="Geleceğin Şovmenleri" width="250" height="250"></img>
                        </div>
                    </div>
                    <div class="column">
                        <div class="item"><a href= "/Abdullah"><img style={{animation: `spin ${this.state.speed}s linear infinite`}} id= "abduimg" src={abdüLogo} alt="Geleceğin Şovmenleri" width="250" height="250"></img></a> 
                        </div>
                    </div>
                    <div class="column">
                        <div class="item"><a href= "/Burcu"><img style={{animation: `spin ${this.state.speed}s linear infinite`}} id= "burcuimg" src={burcuLogo} alt="Geleceğin Şovmenleri" width="250" height="250"></img></a>
                        </div>
                    </div>
                    
                </div>



    }
}

export default HomeBody;

/*

<div class="column">
                        <div class="item"><img id= "ozgeimg" src={özgeLogo} alt="Geleceğin Şovmenleri"  width="250" height="250"> </img>
                        </div>
                    </div>

*/