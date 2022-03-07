import JSLogo from '../../../utils/JSLogo.png';
import CSSLogo from '../../../utils/CSSLogo.png';
import HTMLLogo from '../../../utils/HTMLLogo.png';
import TypeScriptLogo from '../../../utils/TypeScriptLogo.png';
import ReactLogo from '../../../utils/ReactLogo.png';
import GitLogo from '../../../utils/GitLogo.png';
import './WhatDoIKnow.css';

function WhatDoIKnow(){
    return(
        <div id="skills" className="mainBodySection">
            <h1 className="sectionTitle">What Do I Know?</h1>
            <div id="technologiesList">
                <div className="techLogoAndImg">
                    <img src={JSLogo} className="techLogo"></img>
                    <span>Javascript</span>
                </div>
                <div className="techLogoAndImg">
                    <img  src={HTMLLogo} className="techLogo"></img>
                    <span>HTML</span>
                </div>
                <div className="techLogoAndImg">
                    <img src={CSSLogo} className="techLogo"></img>
                    <span>CSS</span>
                </div>
                <div className="techLogoAndImg">
                    <img src={ReactLogo} className="techLogo"></img>
                    <span>React.js</span>
                </div>
                <div className="techLogoAndImg">
                    <img src={TypeScriptLogo} className="techLogo"></img>
                    <span>Typescript</span>
                </div>
                <div className="techLogoAndImg">
                    <img src={GitLogo} className="techLogo"></img>
                    <span>Git</span>
                </div>
            </div>
        </div>
    )
}

export default WhatDoIKnow;