import './Header.css';
import Logo from '../../utils/Logo.png';
import Resume from '../../utils/Resume.png';
import {useEffect} from 'react';

type props = {
    sideLinks:string,
    setSideLinks:(sideLinks:string) => void;
}

function Header({sideLinks, setSideLinks}:props){

    useEffect(()=>{
        if(sideLinks==='open'){
            document.getElementById('lineOne')!.style.animation='lineOneMovement 0.5s forwards';
            document.getElementById('lineTwo')!.style.animation='lineTwoMovement 0.5s forwards';
            document.getElementById('lineThree')!.style.animation='lineThreeMovement 0.5s forwards';
        }
        else if(sideLinks==='closed'){
            document.getElementById('lineOne')!.style.animation='lineOneMovementRev 0.5s forwards';
            document.getElementById('lineTwo')!.style.animation='lineTwoMovementRev 0.5s forwards';
            document.getElementById('lineThree')!.style.animation='lineThreeMovementRev 0.5s forwards';
        }
    },[sideLinks])

    const handleSideLinks = () =>{
        if(sideLinks==='closed'){
            setSideLinks('open');
        }
        else if(sideLinks==='open'){
            setSideLinks('closed');
        }
    }

    return(
        <div className="header">
            <div id="logoAndResume">
                <a id="logo" href='https://tylerdansby.com/'><img alt='T logo' src={Logo} id="logoNestedImg"></img></a>
                <a id="resumeLink" href={Resume} target="_blank" rel="noreferrer">Resume</a>
            </div>
            <div id="empty"></div>
            <div id="pageLinks">
                <a href='#aboutMe'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#education'>Education</a>
                <a href='#contact'>Contact</a>
            </div>
            <div id="svgWrapper">
                <svg id="openSideLinks" onClick={()=>{handleSideLinks()}}>
                    <line id="lineOne" x1="5" y1="15" x2="45" y2="15" stroke="black" strokeWidth='3'/>
                    <line id="lineTwo" x1="5" y1="25" x2="45" y2="25" stroke="black" strokeWidth='3'/>
                    <line id="lineThree" x1="5" y1="35" x2="45" y2="35" stroke="black" strokeWidth='3'/>
                </svg>
            </div>
        </div>
    )
}

export default Header;