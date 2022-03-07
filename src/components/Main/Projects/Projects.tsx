import Project from './Project/Project';
import RDCalc from '../../../utils/RDCalc.png';
import Pomodoro from '../../../utils/Pomodoro.png';
import Callouts from '../../../utils/Callouts.png';

import './Projects.css';

function Projects(){
    return(
        <div id="projects" className="mainBodySection">
          <h1 className="sectionTitle">Projects</h1>
          <div id="projectExamplesWrapper">
              <Project 
                name='Callouts' 
                liveLink={'https://halocallouts.netlify.app/'}
                gitLink="https://github.com/saltedTofu/Callouts"
                tech={['React','CSS']}
                img={Callouts}
                description='This project is intended to be a tool for people who are trying to learn callout locations for the various competitive maps in Halo 3. Users can select which of the seven maps they want to learn via the nav bar or by scrolling through the page. Each map component shows a blueprint of the map and a list of all the callouts for the map on the left hand side. When the user mouses over either the callout name on the callout list or the location on the blueprint, they are both highlighted in green. The right hand side of each map component will show an in-game screenshot of whichever location is being viewed. For smaller resolution devices, the maps will show the blueprint with the callout names printed on it. Users can use this app to learn callouts, to quiz themselves, or to reference while playing Halo 3.'
                />
              <Project 
                name='PomoCustom' 
                liveLink={'https://super-cool-site-by-saltedtofu.netlify.app/'}
                gitLink="https://github.com/saltedTofu/pomoCustom"
                tech={['React','Redux','MUI']} 
                img={Pomodoro}
                description='Pomodoro (Italian for tomato) is a study technique that takes advantage of switching between work periods and break periods to maximize focus and minimize distractions. This is a custom Pomodoro timer that allows the user to customize their work timer, rest timer, total number of rounds, as well as the overall theme of the webpage. It also includes an SVG progress bar element that moves a character across the screen to represent the total percentage completion of all rounds. Lastly the user is able to paste a youtube URL to embed a video to play while studying.'
                />
              <Project 
                name='Dietitian Calc' 
                liveLink={'https://dietitiancalc.com/'}
                gitLink="https://github.com/saltedTofu/RDCalc"
                tech={['JS','HTML','CSS']}
                img={RDCalc}
                description='This project is intended to be a tool for dietitians to make day to day calculations easier. Dietitian Calc uses vanilla JS, HTML, and CSS. There are 3 pages in total (nutrition needs, tube feeding, and TPN/PPN) for the user to pick the calculator they want to use.'
              />
          </div>
        </div>
    )
}

export default Projects;