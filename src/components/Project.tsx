import './styles/Projects.css';
import Chip from './Chip';

type projectProps = {
    name:string;
    liveLink?:string;
    gitLink:string;
    tech:string[];
    img:string;
    description:string;
}

const Project = ({name, liveLink, gitLink, tech, img, description}:projectProps) => {
    return(
        <div id="projectExample">
            <img id="projectImage" width="600px" alt='Project' src={img}></img>
            <div id="rightSideInfo">
                <h3>{name}</h3>
                <div className="appDescription">
                    <p>{description}</p>
                </div>
                <div className="techInProject">
                    {tech.map(tech => (<Chip tech={tech} variant="small"/>))}
                </div>
                <div id="gitAndLiveLinks">
                    <a target="_blank" rel="noreferrer" href={gitLink}>Github</a>
                    {liveLink && (<a target="_blank" rel="noreferrer" href={liveLink}>Live</a>)}
                </div>
            </div>
            <div id="projectBorder"></div>
        </div>
    )
}

export default Project;