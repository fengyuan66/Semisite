import '../css/contact.css'


function Contact(){
    return(
        <div className="contact">
            <h1>Contact <strike>us</strike> me!</h1>
            <div className="maincontent">

                <div className="infobox">
                    <h1>TEST</h1>
                </div>

                <div className="formbox">
                    <form action="https://formspree.io/f/xnjkwabl" method="POST" className="form">

                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="name">Your name</label>
                        <input type="name" id="name" name="name" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="6" required />

                        <button type="submit">Send</button>
                    </form>
                </div>

            </div>

            
            
        </div>
    )
}

export default Contact

