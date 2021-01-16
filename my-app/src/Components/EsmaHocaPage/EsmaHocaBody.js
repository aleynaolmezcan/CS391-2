import React from 'react';
import './EsmaHocaBody.css';
import logo from '../../images/esmahoca.png'; 

class EsmaHocaBody extends React.Component{
    render(){ 
        return (  
        <div id = "esmaBody">
            <div class="esmaBox">
                <img src={logo} id = "EsmaHoca" alt="" width="200" height="200"></img>        
                    <h1>Esma Meral</h1>
                    <h2>Our CS 391 Instructor ♡</h2>
                    <p>Welcome to OzU!</p><br></br>
                
                    <div id="links">
                        <li><a href="https://www.linkedin.com/in/esmameral/"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/esmameral"> <i class="fa fa-github"></i></a></li>
                    </div>

            </div>
        </div>
        )

}
}
export default EsmaHocaBody;