import '../css/employees.css'
import harryimg from '../assets/harry.svg'

function Employees(){
    return(
        <div className="employees">
            <h1>Meet our employee(s)!</h1>
            <div className="selfglaze">
                <div className="portrait">
                    <img src={harryimg} className="harryimg" />
                </div>
                <div className = "maincontentsection">
                    <h1>Harry Liu</h1>
                    <div className="titles">
                        <p><b>Vice-president of <fhc><a href="https://fraser.hackclub.com">Fraser Hack Club</a></fhc>, Executive at <bcydc><a href="https://bcydc.ca">BCYDC</a></bcydc>.</b><br/><br/>
                            For SEMI, he is also our:<br/><br/>
                            <rolelist>Junior Programmer, Senior Architecture Engineer, CEO, Social Media Lead, Actor, Custodian, Musician, Director of Office Environment, Therapist, Customer Engagement Manager, Outreach, General Executive, Slack Message Monitor, Discord Moderator, Internet Maintenance Crew (that’s right he’s so good he is our entire crew), CTO, Director, Procrastinator, Front-End Developer, Vibe Coder, Video Game Reviewer, Voice Actor / Sound Effect Actor. Digital Media Artist, Head of PR, Treasury Secretariat, Board of Director (singular), Diplomat, General of The Airforce, Product Manager, President, Dictator, R&D Scientist, Minimum(No)-Wage-Taker, Mathematician, Researcher, Dataset Developer, Game Designer, Chef, Head of Corporate Morale, HR Lead, Recycling Manager.</rolelist>
                        </p>
                    </div>
                </div>
            </div>

            <div className="testimony">
                <a>"Wow! He is so awesome. You should like… look at his projects and totally give him a job or something. I don’t care, please just get him to work elsewhere so that he could stop LARPing about this SEMI stuff and actually start working."</a>
            </div>

        </div>
    )
}

export default Employees