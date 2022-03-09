import './Education.css';
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
            <h1 className="sectionTitle">Education</h1>
            <h3>School</h3>
            <h4>University Of Houston, B.S. in Nutritional Sciences, Minor in Biology</h4>
            <h3>Developer Courses</h3>
            <h4>Codecademy: Front-End Engineer Path, Typescript (cert links)</h4>
            <h4>Udemy: Javascript Algorithms and Data Structures Masterclass (cert link)</h4>
            <h4>Clinical Dietitian - Houston Methodist Sugar Land Hospital</h4>
            <h4>Clinical Dietitian - Sodexo</h4>
        </div>
    )
    
}

export default Education;