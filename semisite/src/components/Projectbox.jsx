import voyagobanner from '../assets/projects/voyago/voyagobanner.svg'
import ongoingstatus from '../assets/status_ongoing.svg'
import voyagoicon from '../assets/projects/voyago/voyagoicon.svg'
import '../css/projectbox.css'

function Projectbox(){
    return(
        <div className="outerbox">
            <div className="imagebox">
                <img src={voyagobanner} alt="banner of voyago, a project" />
            </div>
            <div className="headbox">
                <div className="iconbox">
                    <img src={voyagoicon} alt="icon of voyago, a project" />
                </div>
                <div>
                    <div className="titlebox">
                        <h1>Voyago</h1>
                    </div>
                    <div className="pitchbox">
                        <h2>Agentic AI travel planner</h2>
                    </div>
                </div>
                <div className="status">
                    <img src={ongoingstatus} alt="this project is ongoing"></img>
                </div>
                
            </div>
            
            <div className="descbox">
                <p>Voyago learns what you like, and collaboratively builds a trip tailored for you</p>
            </div>
            <div className="buttonrow">

            </div>
            
        </div>
    )
}

export default Projectbox