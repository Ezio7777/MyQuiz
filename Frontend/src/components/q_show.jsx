import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../components_style/q_show.css";
import "react-router-dom";
import NavbarTimer from "./q_show_nav";
import Swal from "sweetalert2";
import BASE_URL from "../Server/base_url";

function Q_show() {
  const location = useLocation();
  const data = location.state.data;
  const duration = data.duration;
  const questions = data.questions;
  const quiz_name = data.quiz_name;
  const n = data.no_of_question;
  const quiz_id = data.quiz_id;
  const name = location.state.name;
  const navigate = useNavigate();

  const [submit, setSubmit] = useState(false);
  const [qNo, setQno] = useState(1);
  const [point, setPoint] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  //Timer Area

  const [min, setMin] = useState(duration);
  const [sec, setSec] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        if (sec === 0) {
          if (min === 0) {
            // Pomodoro session is over.
            setIsActive(false);
            if (activeButton == null) {
              setActiveButton(5);
              onSubmit();
            } else {
              setActiveButton(activeButton);
              if (questions[qNo - 1].correct == activeButton) {
                setPoint(point + 1);
              }
              onSubmit();
            }
          } else {
            // Move to the next minute
            setMin((prevMinutes) => prevMinutes - 1);
            setSec(59);
          }
        } else {
          // Decrease the seconds
          setSec((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    // Cleanup the interval on component unmount or when isActive becomes false
    return () => clearInterval(timer);
  }, [isActive, min, sec]);

  // Handel Ans Buttons
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  //Submit Button
  const onSubmit = async () => {
    // if (questions[qNo - 1].correct == activeButton) {
    //   increasePoint();
    // }

    const wrong = n - point;
    const acc = Math.round((point / n) * 100);

    const data2 = {
      name: name,
      quiz_id: quiz_id,
      no_q: data.no_of_question,
      quiz_name: quiz_name,
      correct: point,
      wrong: wrong,
      accuracy: acc,
    };

    const response = await fetch(`${BASE_URL}/api/submit/result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify(data2),
    });

    if (response) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Submit",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    navigate("/result", { state: { data: data2 } });
  };

  // HandelNext

  const onNext = async () => {
    ////////////////
    if (activeButton != null) {
      if (questions[qNo - 1].correct == activeButton) {
        setPoint(point + 1);
      }
      setActiveButton(null);
      setQno(qNo + 1);
      if (qNo == n) {
        setSubmit(true);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Choose one of the Answer",
        text: "",
      });
    }
  };

  //Prevent Unwanted Exit

  return (
    <>
      <NavbarTimer name={quiz_name} code={quiz_id} />
      <>
        {submit ? (
          <div className="submit_btn_body">
            <button className="next_btn btn" onClick={onSubmit}>
              Submit <i class="fa-regular fa-circle-check"></i>
            </button>
          </div>
        ) : (
          <div>
            <div className="container q_add_body">
              {/* Timer */}
              <div className="timer_body">
                <div
                  className={`timer ${sec < 10 && min == 0 ? "deadtime" : 0}`}
                >
                  <i class="fa-solid fa-stopwatch"></i>
                  {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
                </div>
              </div>
              {/* Question No */}

              <div className="question_no">
                <p>
                  Question No : {qNo} / {n}
                </p>
              </div>

              {/* QUESTION   */}
              <div className="  question ">
                <div className="question_input ">
                  <p>{questions[qNo - 1].question}</p>
                </div>
              </div>

              {/* Answers */}

              {/* ANS-1 */}
              <div className="ans">
                <button
                  className={`ans_input ${activeButton === 1 ? "active" : ""}`}
                  onClick={() => handleButtonClick(1)}
                >
                  {questions[qNo - 1].ans1}
                </button>
              </div>

              {/* ANS-2 */}
              <div className="ans">
                <button
                  className={`ans_input ${activeButton === 2 ? "active" : ""}`}
                  onClick={() => handleButtonClick(2)}
                >
                  {questions[qNo - 1].ans2}
                </button>
              </div>

              {/* ANS-3 */}
              <div className="ans">
                <button
                  className={`ans_input ${activeButton === 3 ? "active" : ""}`}
                  onClick={() => handleButtonClick(3)}
                >
                  {questions[qNo - 1].ans3}
                </button>
              </div>
              {/* ANS-4 */}
              <div className="ans">
                <button
                  className={`ans_input ${activeButton === 4 ? "active" : ""}`}
                  onClick={() => handleButtonClick(4)}
                >
                  {questions[qNo - 1].ans4}
                </button>
              </div>

              {/* Changing Section */}

              <div className="next_btn_body">
                <button className="next_btn btn" onClick={onNext}>
                  Next <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default Q_show;
