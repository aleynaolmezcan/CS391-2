import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React, { Component } from 'react';


import Abdullah from './Components/AbdullahPage/Abdullah';
import Home from './Components/HomePage/Home';
import Aleyna from './Components/AleynaPage/Aleyna';
import Burcu from './Components/BurcuPage/Burcu';
import Ozge from  './Components/OzgePage/Ozge';
import Esad from "./Components/EsadPage/Esad";
import Esma from "./Components/EsmaHocaPage/Esma";



function App() {
  return (

    <Router>
      <Route exact path="/" component = {Home}>
        <Home/>
      </Route>
      <Route exact path="/Abdullah" component = {Abdullah}>
        <Abdullah/>  
      </Route>
      <Route exact path="/Aleyna" component = {Aleyna}>
        <Aleyna/>  
        </Route>
        <Route exact path="/Burcu" component = {Burcu}>
        <Burcu/>  
        </Route>
        <Route exact path="/Esad" component = {Esad}>
        <Esad/>  
        </Route>
        <Route exact path="/Ozge" component = {Ozge}>
        <Ozge/>  
        </Route>
        <Route exact path="/Esma" component = {Esma}>
        <Esma/>  
        </Route>
    </Router>
    




    
     
    

   
    
    

 
    

   
        
   
      
      
    

    
    

   
    
    
    
  
  );
}

export default App;
