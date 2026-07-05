import '../css/about.css'
import harryimg from '../assets/harry.png'
import Footer from '../components/Footer.jsx'
function About(){
    return (
        <div>
            <div className="abttop">
                <img src={harryimg} />
                <h1>Hello! My name is Harry. Nice to meet you!</h1>
            </div>
            
            <div className="about">
                <div className="about_maincontent">
                    <div className="overview">
                        <h2>Achievements you would probably want to see from my journey thus far:</h2>
                        <ul>
                            <li>Spent 100 hours making a <a href="https://fraserhackclub.itch.io/spacegoose">game</a> with my friends to qualify for a hackathon in Shanghai</li>
                            <li>Helped Organize <a href="https://daydream.bcydc.ca/?_gl=1*15thrw8*_ga*MTY2MjU5MjYyLjE3ODMxOTU4MDg.*_ga_JD2FNNVXTR*czE3ODMyMTI4OTYkbzIkZzAkdDE3ODMyMTI4OTgkajU4JGwwJGgw">Daydream Vancouver</a>, a hackathon with 120 people.</li>
                            <li>Half a year later, organized <a href="https://campfire.hackclub.com/vancouver">Campfire Vancouver</a> as VP of Fraser Hack Club with 80 people attending</li>
                            <li>Trained a Random Forest AI pipeline to find Cattle Camps in South Sudan using free environmental data at a 10m^2 / pixel scale for a challenge from the UN(in iteration)</li>
                            <li>First time winning at a hackathon by making an agentic studying tool where you teach the AI.</li>
                        </ul>
                    </div>
                    <div className="msg1">
                        <p>I have been building several exciting projects for a few months now! Some more ambitious, some less. Some with better progress, some more turbulent. <br></br><br></br></p>
                        <p>Either way, the purpose of this site is to better document and share my work, my life, and perhaps a glimpse of who I am. </p>
                    </div>

                    <div className="interests">
                        <h2>Some things I like:</h2>
                        <ul>
                            <li>Flight simulators & aviation</li>
                            <li>Building hardware</li>
                            <li>Building software (I guess just building stuff I like in general)</li>
                            <li>Exploring new places, near or far</li>
                            <li>Going on mini-trips with my friends</li>
                            <li>Hiking and walking</li>
                            <li>Public transportation</li>
                            <li>Strategy games</li>
                            <li>Movies (some)</li>
                            <li>Guns and armoured vehicles</li>
                            <li>20th century Western Pop (ABBA, Michael Jackson, Falco, etc)</li>
                            <li>Experimental pop (Tally Hall)</li>
                            <li>Electronic music (Kraftwerk & YMO)</li>
                            <li>Music in general, then</li>
                            <li>Studying at library or with company</li>
                            <li>... and so much more</li>
                            
                        </ul>
                    </div>

                    <div className="msg1">
                        <p>SEMI was started as a <a href="https://trending.knowyourmeme.com/editorials/guides/what-does-larp-or-larping-mean-the-role-playing-terms-turned-slang-explained">LARP</a> when I was in grade 5 and jumped on the train of making projects with my friends. <br></br><b>Today, it is a symbol representing not myself, but my work, activity, and presence in the tech fields.</b></p>
                    </div>
                    

                </div>
                
            </div>
            <Footer />
            
        </div>
        
        
    )
}

export default About