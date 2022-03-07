import './Sidebar.css';
import LinkedIn from '../../utils/linkedinLogo.png';
import GitHub from '../../utils/githubLogo.png';
function Sidebar(){
    return(
        <div className="sideLinks">
            <a href="https://github.com/saltedTofu" ><img className="linkLogo" src={GitHub}></img></a>
            <a href="https://www.linkedin.com/in/tyler-dansby-rd-39541916b"><img className="linkLogo" src={LinkedIn}></img></a>
        </div>
    )
}

export default Sidebar;