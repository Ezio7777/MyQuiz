import React from "react";
import "../components_style/q_show.css";
import { Link } from "react-router-dom";

function q_show() {
  return (
    <div className="container q_add_body">
      {/* Question No */}

      <div className="question_no">
        <p>Question No : 1</p>
      </div>

      {/* QUESTION   */}
      <div className="  question ">
        <div className="question_input ">
          <p>Question</p>
        </div>
      </div>

      {/* Answers */}

      {/* ANS-1 */}
      <div className="ans">
        <button className="ans_input">ans1</button>
      </div>

      {/* ANS-2 */}
      <div className="ans">
        <button className="ans_input">ans1</button>
      </div>

      {/* ANS-3 */}
      <div className="ans">
        <button className="ans_input">ans1</button>
      </div>

      {/* ANS-4 */}
      <div className="ans">
        <button className="ans_input">ans1</button>
      </div>

      <div className="end_line"></div>

      {/* Changing Section */}
    </div>
  );
}

export default q_show;
