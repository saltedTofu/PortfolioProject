import './Main.css';
//Component Imports
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import WhatDoIKnow from './WhatDoIKnow/WhatDoIKnow';
import WhoAmI from './WhoAmI/WhoAmI';
import Education from './Education/Education';

function Main(){
    return(
        <div id="main" >
            <h1>Tyler Dansby, RD</h1>
            <WhoAmI />
            <WhatDoIKnow />
            <Projects />
            <Education />
            <Contact />
        </div>
    )
}

export default Main;