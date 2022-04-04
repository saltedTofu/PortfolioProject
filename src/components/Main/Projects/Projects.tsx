import Project from './Project/Project';
import RDCalc from '../../../utils/RDCalc.png';
import Pomodoro from '../../../utils/Pomodoro.png';
import Callouts from '../../../utils/Callouts.png';
import ClickChamp from '../../../utils/ClickChamp.png';
import {useState, useEffect} from 'react';
import './Projects.css';

function Projects(){
  const [visible,setVisible] = useState(true);

  useEffect(()=>{
      const observer = new IntersectionObserver(entries=>{
          entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(document.getElementById('projectExamplesWrapper')!);
      return () => observer.unobserve(document.getElementById('projectExamplesWrapper')!);
  },[]);

    return(
      <div id="projects" className="mainBodySection">
        <h1 className="sectionTitle">Projects</h1>
        <div id="projectExamplesWrapper" className={`fade-in-section ${visible ? 'is-visible' : ''}`}>
          <div>
              <Project 
              name='PomoCustom' 
              liveLink={'https://super-cool-site-by-saltedtofu.netlify.app/'}
              gitLink="https://github.com/saltedTofu/pomoCustom"
              tech={['React','Redux','MUI']} 
              img={Pomodoro}
              description='Pomodoro (Italian for tomato) is a study technique that takes advantage of switching between work periods and break periods to maximize focus and minimize distractions. This is a custom Pomodoro timer that allows the user to customize their work timer, rest timer, total number of rounds, as well as the overall theme of the webpage.'
              />
            </div>
            <div>
              <Project 
                name='Click Champ' 
                liveLink={'https://click-champ.herokuapp.com/'}
                gitLink="https://github.com/saltedTofu/click-champ"
                tech={['React','Node','Express', 'SQL']}
                img={ClickChamp}
                description='Click Champ is a full stack game where you can create an account, login, and increase your rank on the scoreboard by clicking the button. The project uses a SQL database for storing/retrieving user data. For encryption I used the crypto-js node library for hashing and salting the passwords before storing them. '
              />
            </div>
          <div>
            <Project 
                name='Callouts' 
                liveLink={'https://halocallouts.netlify.app/'}
                gitLink="https://github.com/saltedTofu/Callouts"
                tech={['React','CSS']}
                img={Callouts}
                description='This app is a tool for people who are trying to learn callout locations for the various competitive maps in Halo 3. Users will navigate to their desired map blueprint and mouse over sections of the map to show the name of the callout and an in-game screenshot on the right side panel. Users can use this app to learn callouts, to quiz themselves, or to use as a reference while playing Halo 3.'
                />
          </div>
          
          
            <div>
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
      </div>
    )
}

export default Projects;