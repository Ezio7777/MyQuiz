import React from "react";
import "../components_style/result.css";
import "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const data = location.state.data;

  const no_q = data.no_q;
  const name = data.quiz_name;
  const correct = data.correct;
  const wrong = data.wrong;
  const accuracy = data.accuracy;

  const navigate = useNavigate();
  const onDone = () => {
    navigate("/");
  };
  return (
    <div className="container result_body">
      <div className="result_head_body">
        <h1 className="result_head">Result</h1>
      </div>

      <div className="result_details_body">
        <p>Quiz Name - {name}</p>
      </div>
      <div className="result_details_body">
        <p>Total Question - {no_q}</p>
      </div>
      <div className="result_details_body">
        <p>Correct - {correct}</p>
      </div>
      <div className="result_details_body">
        <p>Wrong - {wrong}</p>
      </div>
      <div className="result_details_body">
        <p>Accuracy - {accuracy}%</p>
      </div>
      <div className="next_btn_body">
        <button className="next_btn btn" onClick={onDone}>
          Done <i class="fa-regular fa-circle-check"></i>
        </button>
      </div>
    </div>
  );
}

export default Result;
