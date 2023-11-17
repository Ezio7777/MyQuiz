import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
import "../components_style/q_show.css";
import "react-router-dom";
import NavbarTimer from "./q_show_nav";
import Swal from "sweetalert2";

function Q_show() {
  const location = useLocation();
  const data = location.state.data;
  // const duration = data.duration;
  const questions = data.questions;
  const quiz_name = data.quiz_name;
  const n = data.no_of_question;
  const quiz_id = data.quiz_id;
  const name = location.state.name;

  //Timer Area

  const timer = useRef(null);
  const progressBar = useRef(null);

  // Handel Ans Buttons
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  // Points
  const [point, setPoint] = useState(0);

  useEffect(() => {
    console.log(point);
  }, [point]);

  //Question No
  const [qNo, setQno] = useState(1);

  //Submit Button
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const onSubmit = async () => {
    if (activeButton != null) {
      if (questions[qNo - 1].correct == activeButton) {
        setPoint((prevPoint) => prevPoint + 1);
      }

      const wrong = n - point;
      const acc = (point / n) * 100;

      const data2 = {
        name: name,
        quiz_id: quiz_id,
        no_q: data.no_of_question,
        quiz_name: quiz_name,
        correct: point,
        wrong: wrong,
        accuracy: acc,
      };

      const response = await fetch("http://localhost:5000/api/submit/result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },

        body: JSON.stringify(data2),
      });

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // Handle the response data as needed
      // const responseData = await response.json();
      // console.log("Response:", responseData);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Submit",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/result", { state: { data: data2 } });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Choose one of the Answer",
        text: "",
      });
    }
  };

  // HandelNext

  const onNext = () => {
    //Timer
    // if(timer.current){
    //   clearTimeout(timer.current);
    // }
    // flushSync(()=>{
    //   setActiveButton(activeButton);
    // })

    if (activeButton != null) {
      if (questions[qNo - 1].correct == activeButton) {
        setPoint((prevPoint) => prevPoint + 1);
      }
      console.log(point);
      setActiveButton(null);
      setQno(qNo + 1);
      if (qNo == n - 1) {
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

  return (
    <>
      <NavbarTimer name={quiz_name} code={quiz_id} />
      <>
        <div>
          <div className="container q_add_body">
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
            {submit ? (
              <div className="next_btn_body">
                <button className="next_btn btn" onClick={onSubmit}>
                  Submit <i class="fa-regular fa-circle-check"></i>
                </button>
              </div>
            ) : (
              <div className="next_btn_body">
                <button className="next_btn btn" onClick={onNext}>
                  Next <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
}

export default Q_show;
