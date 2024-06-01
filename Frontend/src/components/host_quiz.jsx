import React, { useState } from "react";
import "../components_style/host_quiz.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BASE_URL from "../Server/base_url";

const Host_quiz = () => {
  // let token = localStorage.getItem("token");

  const [quizName, setQuizName] = useState("");
  const [noOfQuestion, setNoOfQuestion] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  const [participants, setParticipants] = useState("");

  const [errQuizName, setErrQuizName] = useState(false);
  const [errNoOfQuestion, setErrNoOfQuestion] = useState(false);
  const [errTimeDuration, setErrTimeDuration] = useState(false);
  const [errParticipants, setErrParticipants] = useState(false);

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
  const onParticipantsChange = (event) => {
    let p = event.target.value;
    // Use regex
    if (/^(?:[1-9]|[1-9][0-9]|100)$/.test(p)) {
      setErrParticipants(false);
    } else {
      setErrParticipants(true);
    }
    setParticipants(p);
  };

  //create

  const Navigate = useNavigate();

  const onCreate = async () => {
    if (
      quizName.length < 4 ||
      !/^(1?[0-9]|20)$/.test(noOfQuestion) ||
      !/^(?:[1-9]|10)$/.test(timeDuration) ||
      !/^(?:[1-9]|[1-9][0-9]|100)$/.test(participants)
    ) {
      Swal.fire({
        icon: "warning",
        title: "Enter Correct Details",
        text: "",
      });
    } else {
      try {
        const data = {
          quizName: quizName,
          noOfQuestion: noOfQuestion,
          duration: timeDuration,
          participants: participants,
        };
        Navigate("/question_add", { state: { data: data } });
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
            <label className="Quizz_Name_font">No of Questions (1 - 20)</label>
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
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              placeholder="0"
              value={participants}
              onChange={onParticipantsChange}
            />
            <label className="Quizz_Name_font">
              Total Participants (1 - 100)
            </label>
          </div>
          <div className="invalidInputs_injoin">
            {errParticipants ? (
              <p className="error_join error_name">
                <i class="fa-solid fa-exclamation"></i> Enter between (1 - 100)
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
