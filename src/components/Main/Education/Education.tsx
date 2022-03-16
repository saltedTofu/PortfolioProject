import './Education.css';
import {useState, useEffect} from 'react';
import udemy from '../../../utils/Udemy.jpg';

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
        <div id="education" className={`fade-in-section ${visible ? 'is-visible' : ''}`}>
            <h1 className="sectionTitle">Education & Experience</h1>
            <h3>School</h3>
                <h4>University Of Houston, B.S. in Nutritional Sciences, Minor in Biology</h4>
                <h5>Graduated 2018</h5>
            <h3>Developer Courses</h3>
                <h4>Codecademy: Front-End Engineer Path, Typescript</h4>
                <a target="_blank">certificate</a>
                <h4>Udemy: Javascript Algorithms and Data Structures Masterclass</h4>
                <a href={udemy} target="_blank">certificate</a>
            <h3>Work Experience</h3>
                <h4>Clinical Dietitian - Houston Methodist Sugar Land Hospital</h4>
                <h5>Jan 2021-current</h5>
                <h4>Clinical Dietitian - Sodexo</h4>
                <h5>Jan 2020-Jan 2021</h5>
        </div>
    )
    
}

export default Education;