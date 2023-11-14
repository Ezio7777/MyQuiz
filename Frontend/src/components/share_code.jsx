import React from "react";
import "../components_style/share_code.css";

function Share_code() {
  const code = 123456;
  const name = JSON.parse(localStorage.getItem("quizName"));
  const qNo = JSON.parse(localStorage.getItem("noOfQuestion"));
  return (
    <div className="container copy_box_body">
      <div className="box_body row">
        <div className="share_details_body">
          <p className="share_quiz_name">{name}</p>
          <p className="share_qNo">Total question: {qNo}</p>
        </div>
        <div className="code-box col-lg-12">
          <p>{code} </p>
        </div>
        <div className="details col-lg-12">
          <p>Share this code with participants</p>
        </div>
        <div className="col-lg-12">
          <button className="button-copy btn">Copy</button>
        </div>
      </div>
    </div>
  );
}

export default Share_code;
