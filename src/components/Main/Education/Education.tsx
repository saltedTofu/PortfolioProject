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
        <div id="education" className={`mainBodySection fade-in-section ${visible ? 'is-visible' : ''}`}>
            <h1 className="sectionTitle">Education/Experience</h1>
            <h3>School</h3>
                <p>University Of Houston, B.S. in Nutritional Sciences, Minor in Biology</p>
                <p>Graduated 2018</p>
            <h3>Developer Courses</h3>
                <p>Codecademy: Front-End Engineer Path, Typescript</p>
                <a target="_blank">certificate</a>
                <p>Udemy: Javascript Algorithms and Data Structures Masterclass</p>
                <a href={udemy} target="_blank">certificate</a>
            <h3>Work Experience</h3>
                <p>Clinical Dietitian - Houston Methodist Sugar Land Hospital</p>
                <p>Jan 2021-current</p>
                <p>Clinical Dietitian - Sodexo</p>
                <p>Jan 2020-Jan 2021</p>
        </div>
    )
    
}

export default Education;