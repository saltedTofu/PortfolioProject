import './styles/WhatDoIKnow.css';

interface Props{
    logo:string;
    imageAlt:string;
    name:string;
    logoId?:string;

}
function TechnologyKnown({logo, imageAlt, name, logoId}:Props){
    return(
        <div className="techLogoAndImg">
            <img alt={imageAlt} src={logo} className="techLogo" id={logoId}></img>
            <span>{name}</span>
        </div>
    )
}

export default TechnologyKnown