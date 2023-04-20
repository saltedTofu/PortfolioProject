import JSLogo from '../utils/JSLogo.png';
import CSSLogo from '../utils/CSSLogo.png';
import HTMLLogo from '../utils/HTMLLogo.png';
import TypeScriptLogo from '../utils/TypeScriptLogo.png';
import ReactLogo from '../utils/ReactLogo.png';
import GitLogo from '../utils/GitLogo.png';
import NodeLogo from '../utils/NodeLogo.png';
import SQLLogo from '../utils/MySQLLogo.png';
import PythonLogo from '../utils/PythonLogo.png'
import {useState, useEffect} from 'react';
import './styles/WhatDoIKnow.css';

function WhatDoIKnow(){
    const [visible,setVisible] = useState(true);

    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(document.getElementById('skills')!);
        return () => observer.unobserve(document.getElementById('skills')!);
    },[]);

    return(
        <div id="skills" className={`mainBodySection fade-in-section ${visible ? 'is-visible' : ''}`}>
            <h1 className="sectionTitle">Technologies</h1>
            <div id="technologiesList">
                <div className="techLogoAndImg">
                    <img alt="Javascript Logo"src={JSLogo} className="techLogo" id="javascriptLogo"></img>
                    <span>Javascript</span>
                </div>
                <div className="techLogoAndImg">
                    <img  alt='HTML Logo'src={HTMLLogo} className="techLogo"></img>
                    <span>HTML</span>
                </div>
                <div className="techLogoAndImg">
                    <img alt='CSS Logo' src={CSSLogo} className="techLogo"></img>
                    <span>CSS</span>
                </div>
                <div className="techLogoAndImg">
                    <img alt='React Logo' src={ReactLogo} className="techLogo"></img>
                    <span>React.js</span>
                </div>
                <div className="techLogoAndImg">
                    <img alt='Typescript Logo' src={TypeScriptLogo} className="techLogo" id="typescriptLogo"></img>
                    <span>Typescript</span>
                </div>
                <div className="techLogoAndImg">
                    <img alt='Node.js Logo' src={NodeLogo} className="techLogo" id="nodeLogo"></img>
                    <span>Node.js</span>
                </div>
                <div className="techLogoAndImg">
                    <img alt='SQL Logo' src={SQLLogo} className="techLogo" id="sqlLogo"></img>
                    <span>SQL</span>
                </div>
                <div className="techLogoAndImg">
                    <img alt='Git Logo' src={GitLogo} className="techLogo" id="gitLogo"></img>
                    <span>Git</span>
                </div>
                <div className="techLogoAndImg">
                    <img alt='Python Logo' src={PythonLogo} className="techLogo" id="pythonLogo"></img>
                    <span>Python</span>
                </div>
            </div>
        </div>
    )
}

export default WhatDoIKnow;