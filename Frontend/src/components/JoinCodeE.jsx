import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components_style/join_code.css";
import Swal from "sweetalert2";
// import { useNavigation } from "@react-navigation/native";
// import QShow from "./q_show";
import BASE_URL from "../Server/base_url";

const JoinCode = ({ loadUser, onRouteChange }) => {
  // let token = localStorage.getItem("token");

  const [displayName, setDisplayName] = useState("");
  const [errDisplayName, setErrDisplayName] = useState(false);
  const [joinCode, setjoinCode] = useState("");
  const [errJoinCode, setErrjoinCode] = useState(false);

  function joinHandle(e) {
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

  const navigate = useNavigate();

  const onSubmitJoin = async () => {
    if (displayName.length > 3 && !/^\d{6,6}$/.test(JoinCode)) {
      const response = await fetch(
        `${BASE_URL}/api/join/joinquiz/${joinCode}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const json = await response.json();
      if (json == "DONE") {
        Swal.fire({
          icon: "warning",
          title: "You Already Attempt quiz",
          text: "",
        });
      } else if (json == null) {
        Swal.fire({
          icon: "warning",
          title: "Type correct code",
          text: "",
        });
      } else if (json == "expire") {
        Swal.fire({
          icon: "warning",
          title: "Quiz Expired",
          text: "",
        });
      } else if (json == "FULL") {
        Swal.fire({
          icon: "warning",
          title: "Seat Full",
          text: "",
        });
      } else if (json == "WRONG") {
        Swal.fire({
          icon: "warning",
          title: "Check The Code",
          text: "",
        });
      } else {
        navigate(`./q_show`, { state: { data: json, name: displayName } });
      }
      // console.log(json);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Enter correct Deatils",
        text: "",
      });
    }
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
            <button onClick={onSubmitJoin} className="join_btn_in">
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinCode;
