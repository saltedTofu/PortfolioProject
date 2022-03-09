import './Header.css';
import Logo from '../../utils/Logo.png';

function Header(){
    return(
        <div className="header">
            <div id="logoAndResume">
                <a id="logo" href="localhost:3000"><img alt='T logo' src={Logo} width='50px'></img></a>
                <a>Resume</a>
            </div>
            <div></div>
            <div id="pageLinks">
                <a href='#aboutMe'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#education'>Education</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    )
}

export default Header;