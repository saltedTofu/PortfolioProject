import './styles/Education.css';
import {useState, useEffect} from 'react';

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
                <h3>Work Experience</h3>
                <p>Full Stack Software Engineer - Retrium</p>
                <p className="subscript dates">Oct 2022-Present</p>
                <br></br>
                <p>Clinical Dietitian - Houston Methodist Sugar Land Hospital</p>
                <p className="subscript dates">Jan 2021-Oct 2022</p>
                <br></br>
                <p>Clinical Dietitian - Sodexo</p>
                <p className="subscript dates">Jan 2020-Jan 2021</p>
            </div>
            <div id="school">
                <h3>Education</h3>
                <p>University Of Houston, B.S. in Nutritional Sciences, Minor in Biology</p>
                <p className="subscript dates">Graduated 2018</p>
            </div>
            <div id="devCourses">
                <h3>Developer Courses</h3>
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