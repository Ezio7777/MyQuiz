import React, { useState } from "react";
import "../components_style/join_code.css";
import { Link } from "react-router-dom";
import QShow from "./q_show";

const JoinCode = ({ loadUser, onRouteChange }) => {
  // let token = localStorage.getItem("token");

  const [displayName, setDisplayName] = useState("");
  const [errDisplayName, setErrDisplayName] = useState(false);
  const [joinCode, setjoinCode] = useState("");
  const [errJoinCode, setErrjoinCode] = useState(false);

  function joinHandle(e) {
    if (displayName.length > 3 || /^\d{6,6}$/.test(JoinCode)) {
      alert("Enter Correct Values");
    }
    e.preventDefault();
  }

  const onDisplayNameChange = (event) => {
    let name = event.target.value;
    if (name.length > 3) {
      setErrDisplayName(false);
    } else {
      setErrDisplayName(true);
    }
    setDisplayName(name);
  };
  const onjoinCodeChange = (event) => {
    let code = event.target.value;
    // Use regex to allow only 6 digits
    if (/^\d{6,6}$/.test(code)) {
      setErrjoinCode(false);
    } else {
      setErrjoinCode(true);
    }
    setjoinCode(code);
  };

  const onSubmitJoin = async () => {
    const response = await fetch(
      `http://localhost:5000/api/join/joinquiz/${joinCode}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const json = response.json();
    console.log(json);
  };

  return (
    <div className="container join_code_body">
      <div className="login-box">
        <form onSubmit={joinHandle}>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              value={displayName}
              onChange={onDisplayNameChange}
            />
            <label>Display Name</label>
          </div>
          <div className="invalidInputs_injoin">
            {errDisplayName ? (
              <p className="error_join error_name">
                <i class="fa-solid fa-exclamation"></i> Invalid name
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              placeholder="6-digit"
              value={joinCode}
              onChange={onjoinCodeChange}
            />
            <label>Join Code</label>
          </div>

          <div className="invalidInputs_injoin">
            {errJoinCode ? (
              <p className="error_join code_error">
                <i class="fa-solid fa-exclamation"></i> Invalid Code
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="join_btn">
            <button onClick={onSubmitJoin}>
              <Link to="/q_show">
                Join
                <span></span>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinCode;