import React from "react";
import "../components_style/share_code.css";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BASE_URL from "../Server/base_url";

function Share_code() {
  const location = useLocation();
  const data = location.state.data;

  const code = data.quiz_id;
  const duration = data.duration;
  const name = data.name;
  const qNo = data.qNo;

  //Continue
  const navigate = useNavigate();
  const onContinue = async () => {
    navigate("/");
  };

  //Stop

  const onStop = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/unpublish/expire`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },

        body: JSON.stringify({ quiz_id: code }),
      });
      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Stop",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "warning",
          title: "Someting Wrong",
          text: "",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "warning",
        title: "Someting Wrong",
        text: "",
      });
    }
  };

  return (
    <div className="container copy_box_body">
      <div className="box_body">
        <div className="share_details_body">
          <p className="share_quiz_name">Quiz Name - {name}</p>
          <p className="share_qNo">Total question: {qNo}</p>
        </div>
        <div className="code-box ">
          <p>Code - {code} </p>
        </div>
        <div className="share_info">
          <p>Share this code with participants</p>
        </div>
        <div className="duration_info">
          <p>Duration - {duration} minute</p>
        </div>
        <div className="btn_container">
          <button className="button-copy btn" onClick={onStop}>
            STOP <i class="fa-solid fa-hand"></i>
          </button>
          <button className="button-copy btn cont_btn" onClick={onContinue}>
            Continue <i class="fa-solid fa-circle-up fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share_code;
