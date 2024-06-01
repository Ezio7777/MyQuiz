import "../components_style/contact_us.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact_us = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4w92gwl",
        "template_3fueuke",
        form.current,
        "Xo2LfNQJlzLI6-zKe"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message Sent",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container contact_us_body">
      {/* icons */}
      <div class="footer-icons">
        <a href="https://github.com/Ezio7777/MyQuiz">
          <i class="fab fa-github"></i>
        </a>

        <a href="https://www.instagram.com/sunitxg_007">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/sunit-pal-1a792824a/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/Sunit Pal">
          <i class="fab fa-facebook"></i>
        </a>
      </div>

      {/* Form */}
      <div className="form-container">
        <p className="title">Contact Us</p>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="input-group">
            <label for="username">Name</label>
            <input type="text" name="user_name" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label for="username">Email</label>
            <input
              type="email"
              name="user_email"
              id="username"
              placeholder=""
            />
          </div>
          <div className="input-group">
            <label for="password">Message</label>
            <input
              type="text"
              name="message"
              id="password"
              className="message"
              placeholder=""
            />
          </div>
          <input className="sign" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact_us;
