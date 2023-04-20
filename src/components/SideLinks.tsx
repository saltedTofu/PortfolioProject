import './styles/SideLinks.css';
import Resume from '../utils/Resume.png';
import {useEffect} from 'react';
type props = {
    sideLinks:string,
    setSideLinks:(sideLinks:string) => void;
}
function SideLinks({sideLinks, setSideLinks}:props){
    useEffect(()=>{
        if(sideLinks==='closed'){
            document.getElementById('SideLinks')!.style.display='none';
        }
        else if(sideLinks==='open'){
            document.getElementById('SideLinks')!.style.display='flex';
        }
    },[sideLinks])

    return(
        <div id="SideLinks">
            <a onClick = {()=>{setSideLinks('closed')}} href={Resume} target="_blank">Resume</a>
            <a onClick = {()=>{setSideLinks('closed')}} href='#aboutMe'>About</a>
            <a onClick = {()=>{setSideLinks('closed')}} href='#skills'>Skills</a>
            <a onClick = {()=>{setSideLinks('closed')}} href='#projects'>Projects</a>
            <a onClick = {()=>{setSideLinks('closed')}} href='#education'>Education</a>
            <a onClick = {()=>{setSideLinks('closed')}} href='#contact'>Contact</a>
        </div>
    )
}

export default SideLinks;