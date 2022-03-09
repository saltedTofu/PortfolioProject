import './Header.css';
import Logo from '../../utils/Logo.png';

function Header(){

    const handleSideLinks = () =>{
        document.getElementById('lineOne')!.style.animation='lineOneMovement 2s linear';
        document.getElementById('lineTwo')!.style.animation='lineTwoMovement 2s linear';
        document.getElementById('lineThree')!.style.animation='lineThreeMovement 2s linear';
    }

    return(
        <div className="header">
            <div id="logoAndResume">
                <a id="logo" href="localhost:3000"><img alt='T logo' src={Logo} width='50px'></img></a>
                <a id="resumeLink">Resume</a>
            </div>
            <div></div>
            <div id="pageLinks">
                <a href='#aboutMe'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#education'>Education</a>
                <a href='#contact'>Contact</a>
            </div>
                <svg id="openSideLinks" onClick={()=>{handleSideLinks()}}>
                    <line id="lineOne" x1="10" y1="11" x2="40" y2="11" stroke="black" strokeWidth='3'/>
                    <line id="lineTwo" x1="10" y1="22" x2="40" y2="22" stroke="black" strokeWidth='3'/>
                    <line id="lineThree" x1="10" y1="33" x2="40" y2="33" stroke="black" strokeWidth='3'/>
                </svg>
            
        </div>
    )
}

export default Header;