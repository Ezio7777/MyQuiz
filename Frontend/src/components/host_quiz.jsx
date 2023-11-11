import React, { useState } from "react";
import "../components_style/host_quiz.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Host_quiz = () => {
  // let token = localStorage.getItem("token");

  const [quizName, setQuizName] = useState("");
  const [noOfQuestion, setNoOfQuestion] = useState("");
  const [timeDuration, setTimeDuration] = useState("");

  const [errQuizName, setErrQuizName] = useState(false);
  const [errNoOfQuestion, setErrNoOfQuestion] = useState(false);
  const [errTimeDuration, setErrTimeDuration] = useState(false);

  function createHnadel(e) {
    e.preventDefault();
  }

  //Validation

  const onQuizNameChange = (event) => {
    let name = event.target.value;
    if (name.length > 3) {
      setErrQuizName(false);
    } else {
      setErrQuizName(true);
    }
    setQuizName(name);
  };

  const onQuestionNoChange = (event) => {
    let n = event.target.value;
    // Use regex
    if (/^(1?[0-9]|20)$/.test(n)) {
      setErrNoOfQuestion(false);
    } else {
      setErrNoOfQuestion(true);
    }
    setNoOfQuestion(n);
  };

  const onDurationChange = (event) => {
    let d = event.target.value;
    // Use regex
    if (/^(?:[1-9]|10)$/.test(d)) {
      setErrTimeDuration(false);
    } else {
      setErrTimeDuration(true);
    }
    setTimeDuration(d);
  };

  //create

  const Navigate = useNavigate();

  const onCreate = async () => {
    if (errQuizName || errNoOfQuestion || errTimeDuration) {
      alert("Enter Correct Details");
    } else {
      try {
        localStorage.setItem("quizName", JSON.stringify(quizName));
        localStorage.setItem("noOfQuestion", JSON.stringify(noOfQuestion));
        localStorage.setItem("timeDuration", JSON.stringify(timeDuration));
        Navigate("/question_add");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <div className="container host_quiz_body">
      <div className="login-box">
        <form onSubmit={createHnadel}>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              value={quizName}
              onChange={onQuizNameChange}
            />
            <label className="Quizz_Name_font">Quizz Name</label>
          </div>
          <div className="invalidInputs_injoin">
            {errQuizName ? (
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
              placeholder="0"
              value={noOfQuestion}
              onChange={onQuestionNoChange}
            />
            <label className="Quizz_Name_font">No of questions (1 - 20)</label>
          </div>
          <div className="invalidInputs_injoin">
            {errNoOfQuestion ? (
              <p className="error_join error_name">
                <i class="fa-solid fa-exclamation"></i> Enter between (1 - 20)
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
              placeholder="0"
              value={timeDuration}
              onChange={onDurationChange}
            />
            <label className="Quizz_Name_font">
              Time Duration (1 - 10 min)
            </label>
          </div>
          <div className="invalidInputs_injoin">
            {errTimeDuration ? (
              <p className="error_join error_name">
                <i class="fa-solid fa-exclamation"></i> Enter between (1 - 10)
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="host_btn">
            <button className="host_btn_in" onClick={onCreate}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Host_quiz;
