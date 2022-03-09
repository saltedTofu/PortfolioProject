import './Main.css';
import RDCalc from '../../utils/RDCalc.png';
import Pomodoro from '../../utils/Pomodoro.png';
import Callouts from '../../utils/Callouts.png';
//Component Imports
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import WhatDoIKnow from './WhatDoIKnow/WhatDoIKnow';
import WhoAmI from './WhoAmI/WhoAmI';


function Main(){
    return(
        <div id="main" >
            <h1>Tyler Dansby, RD</h1>
            <WhoAmI />
            <WhatDoIKnow />
            <Projects />
            <Contact />
        </div>
    )
}

export default Main;