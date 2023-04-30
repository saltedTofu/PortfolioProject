import './styles/Education.css';

interface Props {
    jobTitle:string;
    company:string;
    dates:string;
    logo:string;
    tech?:string[];
    logoAlt:string;
    logoId:string;

}

function Job({jobTitle, company, dates, logo, tech, logoAlt, logoId}:Props){

    return(
        <div className="jobContainer">
            <img src={logo} alt={logoAlt} id={logoId}></img>
            <div className='jobInfo'>
                <p>{jobTitle} - {company}</p>
                <p className="subscript dates">{dates}</p>
                <div className="workTechList">
                    {tech && tech.map((technology)=>(
                        <div className="workTechChip"><p className="workTech">{technology}</p></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Job;
