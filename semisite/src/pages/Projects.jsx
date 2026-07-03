import Projectbox from '../components/Projectbox.jsx'
import '../css/projects.css'
import status_complete from '../assets/status_complete.svg'
import status_indev from '../assets/status_indev.svg'
function Projects(){
    return(
        <div>
            <div className="projects">
                <h1>This is what we do</h1>
            </div>
            <div className="briefing">
                <h1>Or, what <i>I</i> do...</h1>
            </div>
            <div className="projectrack">
                <Projectbox />
                <Projectbox />
                <Projectbox />
                <Projectbox />
                <Projectbox />
                <Projectbox />
            </div>
        </div>
        
    )
}

export default Projects