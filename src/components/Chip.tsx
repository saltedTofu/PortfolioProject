import PythonLogo from '../utils/PythonLogo.png'
import CSSLogo from '../utils/CSSLogo.png';
import TypeScriptLogo from '../utils/TypeScriptLogo.png';
import ReactLogo from '../utils/ReactLogo.png';
import NodeLogo from '../utils/NodeLogo.png';
import SQLLogo from '../utils/MySQLLogo.png';
import MongoDBLogo from '../utils/MongoDBLogo.png'
import ReduxLogo from '../utils/ReduxLogo.png';
import OpenAILogo from '../utils/OpenAILogo.png';
import ElectronLogo from '../utils/ElectronLogo.png';
import MUILogo from '../utils/MUILogo.png';
import FirebaseLogo from '../utils/FirebaseLogo.png';

import './styles/Chip.css';

interface Props{
    tech:string;
    variant: 'small' | 'large';
}

interface techToLogoMap{
    Python:string;
    React:string;
    CSS:string;
    Node:string;
    SQL:string;
    MongoDB:string;
    Typescript:string;
    Redux:string;
    MUI:string;
    Electron:string;
    GPT3:string;
    Firebase:string;

}

function Chip({tech, variant}:Props){

    const techToLogoMap:techToLogoMap = {
        Python: PythonLogo,
        React: ReactLogo,
        CSS: CSSLogo,
        Node: NodeLogo,
        SQL: SQLLogo,
        MongoDB: MongoDBLogo,
        Typescript: TypeScriptLogo,
        Redux: ReduxLogo,
        MUI: MUILogo,
        Electron: ElectronLogo,
        GPT3: OpenAILogo,
        Firebase: FirebaseLogo
    }

    const imageSource = techToLogoMap[tech as keyof techToLogoMap];

    const smallStyle = {
        marginTop:"25px",
        marginLeft:"5px",
        marginRight:"5px",
        padding:"10px",
        fontSize:"1.2rem",
        borderRadius: "25px",
        backgroundColor:"#43506d",
        display:"flex",
        FlexDirection: "row",
        alignItems: "center"
    }

    const largeStyle = {
        marginTop:"25px",
        marginLeft:"5px",
        marginRight:"5px",
        padding:"10px",
        fontSize:"1rem",
        borderRadius: "25px",
        backgroundColor:"#43506d",
        display:"flex",
        FlexDirection: "row",
        alignItems: "center"
    }

    const chipImage = {
        marginRight:'7px',
        width:'20px',
        height:'20px'
    }

    return(
        <div key={tech} style={variant==='small' ? smallStyle : largeStyle}>
            <img src={imageSource} alt="technology used" style={chipImage}></img>
            <p>{tech}</p>
        </div>
    )
}

export default Chip;