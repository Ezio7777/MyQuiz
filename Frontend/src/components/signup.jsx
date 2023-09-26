import React from "react";
import "../components_style/signup.css";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div className="container whole-body">
      <div className="form-container">
        <p className="title">SignUp</p>
        <form className="form">
          <div className="input-group">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label for="email">Email</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
            />
          </div>
          <div className="input-group">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
            />
          </div>
          <button className="sign">SignUp</button>
        </form>
        <p className="signup">
          Already have an account?
          <Link rel="noopener noreferrer" to="/login" class="">
            {" "}
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default signup;
