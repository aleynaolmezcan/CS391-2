import React from 'react';
import AleynaHeader from './AleynaHeader';
import AleynaBody from './AleynaBody';
import AleynaFooter from './AleynaFooter';


class Aleyna extends React.Component{
    render(){
        return <body>
                    <header>
                    <AleynaHeader/>
                    </header>
                    <AleynaBody/>
                    <footer>
                    <AleynaFooter/>
                    </footer>
                </body>
    }
}

export default Aleyna;