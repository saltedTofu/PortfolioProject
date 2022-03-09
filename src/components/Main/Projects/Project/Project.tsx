import '../Projects.css';

type projectProps = {
    name:string;
    liveLink:string;
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
                    {tech.map(tech => (<div className="techChip"><p>{tech}</p></div>))}
                </div>
                <div id="gitAndLiveLinks">
                    <a href={gitLink}>Github</a>
                    <a href={liveLink}>Live</a>
                </div>
            </div>

        </div>
    )
}

export default Project;