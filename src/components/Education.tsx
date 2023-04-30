import './styles/Education.css';
import {useState, useEffect} from 'react';
import Job from './Job';
import RetriumLogo from '../utils/RetriumLogo.png';
import HMSLLogo from '../utils/HMSLLogo.jpg';
import SodexoLogo from '../utils/SodexoLogo.png';

const Education = () => {
    const [visible,setVisible] = useState(true);

    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(document.getElementById('education')!);
        return () => observer.unobserve(document.getElementById('education')!);
    },[]);

    return(
        <div id="education" className={`mainBodySection fade-in-section ${visible ? 'is-visible' : ''}`}>
            <h1 className="sectionTitle">Experience & Education</h1>
            <div id="workExperience">
                <h3 className='educationExperienceTitle'>Work Experience</h3>
                <Job 
                    jobTitle="Full Stack Software Engineer"
                    company="Retrium"
                    dates="Oct 2022-Present"
                    logo={RetriumLogo}
                    tech={["React", "Node", "Express", "MongoDB"]}
                    logoAlt="Retrium Logo"
                    logoId="retriumLogo"
                />
                <br></br>
                <Job 
                    jobTitle="Clinical Dietitian"
                    company="Houston Methodist Sugar Land Hospital"
                    dates="Jan 2021-Oct 2022"
                    logo={HMSLLogo}
                    logoAlt="HMSL Logo"
                    logoId="HMSLLogo"
                />
                <br></br>
                <Job 
                    jobTitle="Clinical Dietitian"
                    company="Sodexo"
                    dates="Jan 2020-Jan 2021"
                    logo={SodexoLogo}
                    logoAlt="Sodexo Logo"
                    logoId="sodexoLogo"
                />
                <br></br>
            </div>
            <div id="school">
                <h3 className='educationExperienceTitle'>Education</h3>
                <p>University Of Houston, B.S. in Nutritional Sciences, Minor in Biology</p>
                <p className="subscript dates">Graduated 2018</p>
            </div>
            <div id="devCourses">
                <h3 className='educationExperienceTitle'>Developer Courses</h3>
                <p>Codecademy: Full-Stack Engineer Path</p>
                <br></br>
                <p>Codecademy: Typescript</p>
                <br></br>
                <p>Udemy: Javascript Algorithms and Data Structures Masterclass</p>
            </div>
        </div>
    )   
}

export default Education;