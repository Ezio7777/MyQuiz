import React from 'react'
import "../components_style/contact_us.css"

const contact_us = () => {
  

    return (
        
        <div id="overlay">
            <div class="footer-icons">
        <a href="https://github.com/guptasoumya22">
            <i class="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/soumyaa__22">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/soumya-gupta-522a02237">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/">
            <i class="fab fa-facebook"></i>
        </a>
    </div>
        <form>
            <h1>Contact Us</h1>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Your name"></input>
            <small className="error"></small>

            <label for="name">Email:</label>
            <input type="text" id="email" placeholder="Your email"></input>
            <small className="error"></small>

            <label for="name">Message:</label>
            <textarea id="message" placeholder="Your message" rows="6"></textarea>
            <small className="error"></small>

            <div className="center">
            <input type="submit" value="Send Message"></input>
            <p id="Success"></p>
            </div>
        </form>
    </div>
    
    )
}

export default contact_us