import RnDvideo from "../assets/R&D.mp4"
import Studyingvideo from "../assets/studying.mp4"
import Cyberpunkvideo from "../assets/cyberpunk_city.mp4"
import '../css/home.css'
function Home(){
    return(
        <div className="home">
            <h1>This is SEMI</h1>
            <h2>SEMI specialises in delivering AI solutions and automation for daily life</h2>
            <div className="whatwedo">
                <div className="card">
                    <video autoPlay loop muted playsInline className="herovideo" src={Studyingvideo} />
                    <h1 className="herotext">Automating Life</h1>
                    <p className="herodesc">Developing solutions that deliver efficiency in creation, academics, and beyond</p>
                </div> 
                <div className="card">
                    <video autoPlay loop muted playsInline className="herovideo" src={RnDvideo} />
                    <h1 className="herotext">Research & Development</h1>
                    <p className="herodesc">Exploring and documenting innovative approaches to achieve surprising outcomes</p>
                </div> 
                <div className="card">
                    <video autoPlay loop muted playsInline className="herovideo" src={Cyberpunkvideo} />
                    <h1 className="herotextspecial">Generative Interactive Media</h1>
                    <p className="herodesc">Incorproating generative AI in games, 3D worlds, and dynamic media</p>
                </div> 
            </div>
        </div>
    )
}
export default Home