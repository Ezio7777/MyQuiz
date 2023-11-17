import React from "react";
import "../components_style/share_code.css";
import { useLocation, useNavigate } from "react-router-dom";

function Share_code() {
  const location = useLocation();
  const data = location.state.data;

  const code = data.quiz_id;
  const duration = data.duration;
  const name = data.name;
  const qNo = data.qNo;

  //STOP
  const navigate = useNavigate();
  const onStop = async () => {
    navigate("/");
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
        <div className="">
          <button className="button-copy btn" onClick={onStop}>
            STOP <i class="fa-solid fa-hand"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share_code;
