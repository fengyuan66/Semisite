import Projectbox from '../components/Projectbox.jsx'
import '../css/projects.css'
import status_complete from '../assets/status_complete.svg'
import status_indev from '../assets/status_indev.svg'
import voyagobanner from '../assets/projects/voyago/voyagobanner.svg'
import ongoingstatus from '../assets/status_ongoing.svg'
import voyagoicon from '../assets/projects/voyago/voyagoicon.svg'
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
            ],
        }
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