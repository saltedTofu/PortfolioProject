
import './SideLinks.css';
import Resume from '../../utils/Resume.png';

function SideLinks(){
    return(
        <div id="SideLinks">
            <a href={Resume} target="_blank">Resume</a>
            <a href='#aboutMe'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#education'>Education</a>
            <a href='#contact'>Contact</a>
        </div>
    )
}

export default SideLinks;