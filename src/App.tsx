import React from 'react';
import logo from './logo.svg';
import JSLogo from './utils/JSLogo.png';
import CSSLogo from './utils/CSSLogo.png';
import HTMLLogo from './utils/HTMLLogo.png';
import TypeScriptLogo from './utils/TypeScriptLogo.png';
import ReactLogo from './utils/ReactLogo.png';
import GitLogo from './utils/GitLogo.png';
import RDCalc from './utils/RDCalc.png';
import Pomodoro from './utils/Pomodoro.png';
import Callouts from './utils/Callouts.png';

import './App.css';

function App() {
  return (
    <div className="App">
       <div className="header">
            <div id="logoAndResume">
                <a id="logo">Logo</a>
                <a>Resume</a>
            </div>
            <div></div>
            <div id="pageLinks">
                <a>About</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        </div>
        <div className="sideLinks">
            <a href="https://github.com/saltedTofu" >Github</a>
            <a href="https://www.linkedin.com/in/tyler-dansby-rd-39541916b">LinkedIn</a>
        </div>
        <div id="main">
            <div id="aboutMe" className="mainBodySection">
                <h1 className="sectionTitle">Who Am I?</h1>
                <p id="aboutDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div id="skills" className="mainBodySection">
                <h1 className="sectionTitle">What Do I Know?</h1>
                <div id="technologies">
                    <h2>technologies</h2>
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
                            <img src={GitLogo} className="techLogo"></img>
                            <span>Git</span>
                        </div>
                        <div className="techLogoAndImg">
                            <img src={TypeScriptLogo} className="techLogo"></img>
                            <span>Typescript</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="projects" className="mainBodySection">
                <h1 className="sectionTitle">Projects</h1>
                <div id="projectExamplesWrapper">
                    <div className="projectExample" id="rdCalc">
                      <a href="https://github.com/saltedTofu/RDCalc">Dietitian Calc</a>
                      <img width="250px" src={RDCalc}></img>
                      <div className="techInProject">
                        <p>JS</p>
                        <p>HTML</p>
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="projectExample" id="haloCallouts">
                      <a href="https://github.com/saltedTofu/Callouts">Callouts</a>
                      <img width="250px" src={Callouts}></img>
                      <div className="techInProject">
                        <p>React.js</p>
                      </div>
                    </div>
                    <div className="projectExample" id="Pomodoro">
                      <a href="https://github.com/saltedTofu/pomoCustom">Pomodoro</a>
                      <img width="250px" src={Pomodoro}></img>
                      <div className="techInProject">
                        <p>React.js</p>
                        <p>Redux</p>
                      </div>
                    </div>
                </div>
                
            </div>
            <div id="contact" className="mainBodySection">
                <h1 className="sectionTitle">Contact</h1>
                <a>Tdansby7@gmail.com</a>
                <a>Github</a>
                <a>LinkedIn</a>
            </div>
        </div>
        <div id="footer">
            <p>Tyler Dansby 2022</p>
        </div>
        </div>
  );
}

export default App;
