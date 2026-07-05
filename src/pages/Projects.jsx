import Projectbox from '../components/Projectbox.jsx'
import '../css/projects.css'
import status_complete from '../assets/status_complete.svg'
import status_indev from '../assets/status_indev.svg'
import voyagobanner from '../assets/projects/voyago/voyagobanner.svg'
import ongoingstatus from '../assets/status_ongoing.svg'
import voyagoicon from '../assets/projects/voyago/voyagoicon.svg'
import bbicon from '../assets/projects/bigbrother/BigBrotherIcon.png'
import bbbanner from '../assets/projects/bigbrother/BigBrotherBanner.svg'
import claudebanner from '../assets/projects/claudestudyingpipeline/CaludeStudying.svg'

import semilogo from '../assets/SEMI_logo.svg'

import efsicon from '../assets/projects/efs/EFSIcon.png'
import efsbanner from '../assets/projects/efs/EFSBanner.svg'
import spacegooseicon from '../assets/projects/spacegoose/SpacegooseIcon.png'
import spacegoosebanner from '../assets/projects/spacegoose/SpacegooseBanner.svg'


function Projects(){
    const projects = [
        {
            title:'Voyago',
            pitch: 'Agentic AI travel planner',
            description: 'Voyago learns what you like, and collaboratively builds a trip tailored for you',
            banner: voyagobanner,
            icon: voyagoicon,
            status: ongoingstatus,
            statusAlt: 'this project is ongoing',
            links: [
                { type: "github", url: "https://github.com/fengyuan66/voyago"},
                { type: "voyagodemo", url: "https://voyago-vd.vercel.app/" },
            ]
        },
        {
            title:'Claude Studying Pipeline',
            pitch: 'Claude skills that remove microfriction in learning',
            description: 'Solution to facilitate a robust, efficient, and repeatable learning process for Harry this summer (adopted)',
            banner: claudebanner,
            icon: semilogo,
            status: status_complete,
            statusAlt: 'this project is complete and adopted into action',
            links: [
                { type: "claude", url: "https://drive.google.com/drive/folders/1cdbAVU6tEu2VdH6USjeUcAA9kvXzOpxd?usp=sharing"},
            ]
        },
        {
            title:'Spacegoose',
            pitch: 'Platformer languageless story video game',
            description: 'Run an intergalactic errand to rescue a golden goose\'s egg from a big evil duck! (Made for Hack Club Juice YSWS in 2025)',
            banner: spacegoosebanner,
            icon: spacegooseicon,
            status: status_complete,
            statusAlt: 'this project is complete and is ready to be played',
            links: [
                { type: "github", url: "https://github.com/FraserHackClub/SpaceGoose"},
                { type: "spacegoosedemo", url: "https://fraserhackclub.itch.io/spacegoose"},
            ]
        },
        {
            title:'Extravagant Flight Simulator (EFS)',
            pitch: 'Flight Simulating with context-aware generative AI',
            description: 'You never know what happens during your flight... Enhanced realism and flavour',
            banner: efsbanner,
            icon: efsicon,
            status: status_indev,
            statusAlt: 'this project is still in development',
            links: [
                
            ]
        },
        {
            title:'Big Brother',
            pitch: 'An AI agent that watches over you while you study so that you do not slack off',
            description: 'I am pretty desparate myself for such a partner when studying with friends or in public is not an option.',
            banner: bbbanner,
            icon: bbicon,
            status: status_indev,
            statusAlt: 'this project is still in development',
            links: [
                
            ]
        },
    ]

    return(
        <div>
            <div className="projects">
                <h1>This is what we do</h1>
            </div>
            <div className="briefing">
                <h1>Or, what <i>I</i> do...</h1>
            </div>
            <div className="projectrack">
                {projects.map((project) => (
                    <Projectbox key={project.title} {...project} />
                ))}
            </div>
        </div>
        
    )
}

export default Projects