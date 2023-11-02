import React, { useState } from "react";
import "../components_style/join_code.css";
import { Link } from "react-router-dom";

const join_code = () => {
  // let token = localStorage.getItem("token");
  // const [displayName, setDisplayName] = useState("");
  // const [joinCode, setjoinCode] = useState("");

  // const onDisplayNameChange = (event) => {
  //   setDisplayName(event.target.value);
  // };
  // const onjoinCodeChange = (event) => {
  //   setjoinCode(event.target.value);
  // };

  return (
    <div className="container join_code_body">
      <div className="login-box">
        <form>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              // onChange={onDisplayNameChange}
            />
            <label>Display Name</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              placeholder="6-digit"
              // onChange={onjoinCodeChange}
            />
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
