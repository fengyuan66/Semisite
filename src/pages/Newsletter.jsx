import '../css/newsletter.css'

function Newsletter(){
    return(
        <div className="newsletter">
            <h1>My Newsletter</h1>
            <p>There are currently no newsletters!</p>
            <div className="newslettersbox">
                <ul className="newsletterslist">
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="newsletterlink">
                        <div className="newsletterlinkbox">
                            2069-06-07 | My Summer on Mars
                        </div>
                        </a>
                        
                    </li>
                </ul>
                
            </div>
        </div>
    )
}
export default Newsletter