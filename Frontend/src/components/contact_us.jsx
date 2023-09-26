import React from "react";
import "../components_style/contact_us.css";

const contact_us = () => {
  return (
    <div className="container contact_us_body">
      {/* icons */}
      <div class="footer-icons">
        <a href="https://github.com/Ezio7777/Be-Quick__">
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

      {/* Form */}
      <div className="form-container">
        <p className="title">Contact Us</p>
        <form className="form">
          <div className="input-group">
            <label for="username">Email</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label for="password">Message</label>
            <input
              type="text"
              name="password"
              id="password"
              className="message"
              placeholder=""
            />
          </div>
          <button className="sign">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default contact_us;
