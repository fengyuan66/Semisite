import '../css/contact.css'
import githubimg from '../assets/github.png'
import linkedinimg from '../assets/linkedin.webp'
import semilogo from '../assets/SEMI_logo.svg'
function Contact(){
    return(
        <div className="contact">
            <h1>Contact <strike>us</strike> me!</h1>
            <div className="maincontent">

                <div className="infobox">
                    <a href="https://github.com/fengyuan66" className="contactinfo">
                        <img src={githubimg} />
                        <h1>Github</h1>
                    </a>
                    <a href="https://www.linkedin.com/in/harry-liu-b768a0382/" className="contactinfo">
                        <img src={linkedinimg} />
                        <h1>Linkedin</h1>
                    </a>
                    <a href="mailto:fengyuan6666@gmail.com" className="contactinfo">
                        <img src={semilogo} />
                        <div className="emailbundle">
                            <h1>Email</h1>
                            <p>fengyuan6666@gmail.com</p>
                        </div>
                        
                    </a>
                    
                </div>

                <div className="formbox">
                    <form action="https://formspree.io/f/xnjkwabl" method="POST" className="form">

                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="name">Your name</label>
                        <input type="name" id="name" name="name" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="6" required />

                        <button type="submit">✈</button>
                    </form>
                </div>

            </div>

            
            
        </div>
    )
}

export default Contact

