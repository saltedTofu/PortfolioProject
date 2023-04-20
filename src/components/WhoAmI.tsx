import './styles/WhoAmI.css';
import {useState, useEffect} from 'react';

function WhoAmI(){
    const [visible,setVisible] = useState(true);

    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(document.getElementById('aboutMe')!);
        return () => observer.unobserve(document.getElementById('aboutMe')!);
    },[]);

    return(
        <div id="aboutMe" className={`mainBodySection fade-in-section ${visible ? 'is-visible' : ''}`}>
                <h1 className="sectionTitle">Who Am I?</h1>
                <p id="aboutDescription">My name is Tyler Dansby and I am a Clinical Dietitian (RD) turned full-stack web developer with 1 year of professional software engineering experience. I began teaching myself to code in early 2021 in order to create tools to make my RD job and life easier. While learning Javascript, HTML, and CSS, I fell in love with coding/web development and continuously find myself learning and implementing new technologies. Currently I find myself working a lot with React.js and Typescript, (This page is made with React/Typescript). Please visit my Github page to learn more about me and see the kind of stuff I work on!</p>
                <a target="_blank" href='https://github.com/saltedTofu/PortfolioProject'>Github</a>
            </div>
    )
}

export default WhoAmI;