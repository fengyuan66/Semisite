
import '../css/projectbox.css'
import voyagodemo from '../assets/projects/voyago/voyagodemo.svg'
import github from '../assets/github.svg'



function Projectbox({ banner, icon, status, statusAlt, title, pitch, description, links}){
    const linkIcons = {
        github: github,
        voyagodemo: voyagodemo,
    }
    
    
    return(
        <div className="outerbox">
            <div className="imagebox">
                <img src={banner} alt='banner of ${title}, a project' />
            </div>
            <div className="headbox">
                <div className="iconbox">
                    <img src={icon} alt='icon of ${title}, a project' />
                </div>
                <div>
                    <div className="titlebox">
                        <h1>{title}</h1>
                    </div>
                    <div className="pitchbox">
                        <h2>{pitch}</h2>
                    </div>
                </div>
                <div className="status">
                    <img src={status} alt={statusAlt}></img>
                </div>
                
            </div>
            
            <div className="descbox">
                <p>{description}</p>
            </div>
            <div className="buttonrow">
                {links.map((link) => (
                <a href={link.url} key={link.url}>
                    <img src={linkIcons[link.type]} alt={link.type} />
                </a>
                ))}
                        
            </div>
            
        </div>
    )
}

export default Projectbox