import JSLogo from '../utils/JSLogo.png';
import CSSLogo from '../utils/CSSLogo.png';
import HTMLLogo from '../utils/HTMLLogo.png';
import TypeScriptLogo from '../utils/TypeScriptLogo.png';
import ReactLogo from '../utils/ReactLogo.png';
import GitLogo from '../utils/GitLogo.png';
import NodeLogo from '../utils/NodeLogo.png';
import SQLLogo from '../utils/MySQLLogo.png';
import PythonLogo from '../utils/PythonLogo.png'
import MongoLogo from '../utils/MongoDBLogo.png'
import {useState, useEffect} from 'react';
import './styles/WhatDoIKnow.css';
import TechnologyKnown from './TechnologyKnown';

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
                <TechnologyKnown 
                    logo={JSLogo}
                    imageAlt="Javascript Logo"
                    name="Javascript"
                    logoId="javascriptLogo"
                />
                <TechnologyKnown 
                    logo={HTMLLogo}
                    imageAlt="HTML Logo"
                    name="HTML"
                />
                <TechnologyKnown 
                    logo={CSSLogo}
                    imageAlt="CSS Logo"
                    name="CSS"
                />
                <TechnologyKnown 
                    logo={ReactLogo}
                    imageAlt="React Logo"
                    name="React.js"
                />
                <TechnologyKnown 
                    logo={TypeScriptLogo}
                    imageAlt="Typescript Logo"
                    name="Typescript"
                    logoId="typescriptLogo"
                />
                <TechnologyKnown 
                    logo={NodeLogo}
                    imageAlt="Node Logo"
                    name="Node.js"
                    logoId="nodeLogo"
                />
                <TechnologyKnown 
                    logo={SQLLogo}
                    imageAlt="SQL Logo"
                    name="SQL"
                    logoId="sqlLogo"
                />
                <TechnologyKnown 
                    logo={MongoLogo}
                    imageAlt="Mongo Logo"
                    name="MongoDB"
                    logoId="mongoLogo"
                />
                <TechnologyKnown 
                    logo={GitLogo}
                    imageAlt="Git Logo"
                    name="Git"
                    logoId="gitLogo"
                />
                <TechnologyKnown 
                    logo={PythonLogo}
                    imageAlt="Python Logo"
                    name="Python"
                    logoId="pythonLogo"
                />
            </div>
        </div>
    )
}

export default WhatDoIKnow;