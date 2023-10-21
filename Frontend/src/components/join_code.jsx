import React from "react";
import "../components_style/join_code.css";
import { Link } from "react-router-dom";

const join_code = () => {
  return (
    <div className="container join_code_body">
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Display Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Join Code</label>
          </div>
          <center>
            <Link to="/q_show">
              Join
              <span></span>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default join_code;
