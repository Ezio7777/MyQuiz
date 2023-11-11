import React from "react";

function Q_show_body({ data }, { key }) {
  return (
    <div>
      <div className="container q_add_body">
        {/* Question No */}

        <div className="question_no">
          <p>Question No : {key}</p>
        </div>

        {/* QUESTION   */}
        <div className="  question ">
          <div className="question_input ">
            <p>{data.question}</p>
          </div>
        </div>

        {/* Answers */}

        {/* ANS-1 */}
        <div className="ans">
          <button className="ans_input">{data.ans1}</button>
        </div>

        {/* ANS-2 */}
        <div className="ans">
          <button className="ans_input">{data.ans2}</button>
        </div>

        {/* ANS-3 */}
        <div className="ans">
          <button className="ans_input">{data.ans3}</button>
        </div>

        {/* ANS-4 */}
        <div className="ans">
          <button className="ans_input">{data.ans4}</button>
        </div>

        <div className="end_line"></div>

        {/* Changing Section */}
      </div>
    </div>
  );
}

export default Q_show_body;
