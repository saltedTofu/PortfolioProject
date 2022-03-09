import './Sidebar.css';
import LinkedIn from '../../utils/linkedinLogo.png';
import GitHub from '../../utils/githubLogo.png';
function Sidebar(){

    const handleMouseEnter = (div:string):void => {
        document.getElementById(div)!.style.animation = 'pulse 1s infinite';
    }
    const handleMouseOut = (div:string):void => {
        document.getElementById(div)!.style.animation = 'pulse 1s';
    }

    return(
        <div className="sideLinks">
            <a href="https://github.com/saltedTofu"><img className="linkLogo" src={GitHub} id="gitHubDiv" onMouseEnter={()=>{handleMouseEnter('gitHubDiv')}} onMouseOut={()=>{handleMouseOut('gitHubDiv')}}></img></a>
            <a href="https://www.linkedin.com/in/tyler-dansby-rd-39541916b"><img className="linkLogo" id="linkedInDiv" src={LinkedIn}onMouseEnter={()=>{handleMouseEnter('linkedInDiv')}} onMouseOut={()=>{handleMouseOut('linkedInDiv')}}></img></a>
        </div>
    )
}

export default Sidebar;