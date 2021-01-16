import React from 'react';
import './EsadBody.css';
import logo from '../../images/esad.jpg';

class EsadBody extends React.Component {
    render() {
        return <div id="esadBody">
        
                <br/><br/><br/><br/><br/><br/>

                    <img src = {logo} alt= "Fotoğraf"/>
                        <article>
                            <h1>Muhammed Esad Simitcioglu</h1>
                            <article>
                                <h2>09 October 1999</h2>
                                <p id = "esadP">Hello there.My name is Esad Simitcioglu.I am a third year computer engineer student.</p>
                                <br/>
                                <a href="https://twitter.com/Esow_ss" id = "esadIcon" class="fa fa-twitter"></a>
                                <a href="https://www.linkedin.com/in/muhammed-esad-simitcio%C4%9Flu-4485ab190/" id = "esadIcon" class="fa fa-linkedin"></a>
                                <a href="https://github.com/EsadSimitcioglu" id = "esadIcon" class="fa fa-github fa-3x"></a>
                            </article>
                        </article>
                        <br/>
                </div>
                

    }
}

export default EsadBody;