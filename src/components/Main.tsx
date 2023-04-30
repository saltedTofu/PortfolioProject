import './styles/Main.css';
//Component Imports
import Contact from './Contact';
import Projects from './Projects';
import WhatDoIKnow from './WhatDoIKnow';
import WhoAmI from './WhoAmI';
import Education from './Education';

function Main(){
    return(
        <div id="main" >
            <h1 id="tylerDansby">Tyler Dansby, RD</h1>
            <WhoAmI />
            <WhatDoIKnow />
            <Education />
            <Projects />
            <Contact />
        </div>
    )
}

export default Main;