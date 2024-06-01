import React, { useState, useEffect } from "react";
import "../components_style/q_add.css";
// import { Link } from "react-router-dom";
import Qnav from "./q_add_nav";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BASE_URL from "../Server/base_url";

function Q_add() {
  const location = useLocation();
  const data = location.state.data;

  const name = data.quizName;
  const no_of_q = data.noOfQuestion;
  const duration = data.duration;
  const participants = data.participants;

  const navigate = useNavigate();

  const [data_store, setDataStore] = useState([]);

  const [qNo, setQno] = useState(1);

  const [errSize, setErrSize] = useState(false);

  const [question, setQuestion] = useState("");
  const [ans1, setans1] = useState("");
  const [ans2, setans2] = useState("");
  const [ans3, setans3] = useState("");
  const [ans4, setans4] = useState("");

  const [errQuestion, setErrQuestion] = useState(false);
  const [errAns1, setErrAns1] = useState(false);
  const [errAns2, setErrAns2] = useState(false);
  const [errAns3, setErrAns3] = useState(false);
  const [errAns4, setErrAns4] = useState(false);

  const [option, setOption] = useState();

  function inputHandel(e) {
    e.preventDefault();
  }
  // //Pre Button

  // const onPre = async () => {
  //   if (qNo >= 2) {
  //     setQno(qNo - 1);
  //     setQuestion(data_store[qNo - 2].question);
  //     setans1(data_store[qNo - 2].ans1);
  //     setans2(data_store[qNo - 2].ans2);
  //     setans3(data_store[qNo - 2].ans3);
  //     setans4(data_store[qNo - 2].ans4);
  //     setOption(data_store[qNo - 2].option);
  //     console.log(qNo + "pre");
  //   } else {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "There is no previous question",
  //       text: "",
  //     });
  //   }
  // };

  //ADD button
  const onAdd = async () => {
    if (
      question.length > 0 &&
      ans1.length > 0 &&
      ans2.length > 0 &&
      ans3.length > 0 &&
      ans4.length > 0 &&
      option
    ) {
      const single_data = {
        q_no: qNo,
        question: question,
        ans1: ans1,
        ans2: ans2,
        ans3: ans3,
        ans4: ans4,
        correct: option,
      };
      setDataStore([...data_store, single_data]);
      setQno(qNo + 1);
      setQuestion("");
      setans1("");
      setans2("");
      setans3("");
      setans4("");

      //Alert for adding question
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Question:${qNo} added`,
        showConfirmButton: false,
        timer: 1000,
      });

      //Checking Size
      if (qNo == no_of_q) {
        setErrSize(true);
      } else {
        setErrSize(false);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Fill all the input",
        text: "",
      });
    }
  };

  //Publish button
  const onPublish = async () => {
    if (qNo) {
      try {
        let data = {
          quiz_name: name,
          no_of_question: no_of_q,
          duration: duration,
          questions: data_store,
          publish: true,
          participants: participants,
        };
        const response = await fetch(`${BASE_URL}/api/host/createquiz`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },

          body: JSON.stringify(data),
        });

        // Handle the response data as needed
        const json = await response.json();
        const quiz_id = json.quiz_id;

        //sweetAlert
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Published",
          showConfirmButton: false,
          timer: 1500,
        });

        // //navigate to share_code page
        const share_data = {
          quiz_id: quiz_id,
          duration: duration,
          name: name,
          qNo: no_of_q,
        };
        navigate("/share_code", {
          state: { data: share_data },
        });
      } catch (error) {
        alert(error);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Fill all the input",
        text: "",
      });
    }
  };

  //Validation

  const onQuestionChange = (event) => {
    let data = event.target.value;
    if (data.length > 0) {
      setErrQuestion(false);
    } else {
      setErrQuestion(true);
    }
    setQuestion(data);
  };
  const onAns1Change = (event) => {
    let name = event.target.value;
    if (name.length > 0) {
      setErrAns1(false);
    } else {
      setErrAns1(true);
    }
    setans1(name);
  };
  const onAns2Change = (event) => {
    let name = event.target.value;
    if (name.length > 0) {
      setErrAns2(false);
    } else {
      setErrAns2(true);
    }
    setans2(name);
  };
  const onAns3Change = (event) => {
    let name = event.target.value;
    if (name.length > 0) {
      setErrAns3(false);
    } else {
      setErrAns3(true);
    }
    setans3(name);
  };
  const onAns4Change = (event) => {
    let name = event.target.value;
    if (name.length > 0) {
      setErrAns4(false);
    } else {
      setErrAns4(true);
    }
    setans4(name);
  };

  //Any value want to log in console
  useEffect(() => {
    console.log(data_store);
    // console.log(qNo);
  }, [data_store, qNo]);
  return (
    <>
      <Qnav />
      <>
        <form onSubmit={inputHandel}>
          {!errSize ? (
            <div className="container q_add_body">
              {/* Question No. */}
              <div className="question_no">
                <p>
                  Question No: {qNo}/{no_of_q}
                </p>
              </div>
              {/* QUESTION   */}
              <div className="  question ">
                <div className="question_input ">
                  <input
                    typradio
                    placeholder="Question"
                    value={question}
                    onChange={onQuestionChange}
                  />
                </div>
              </div>

              {/* Answers */}

              {/* ANS-1 */}
              <div className="ans">
                <div className="ans_input">
                  <input
                    type="text"
                    placeholder="Option-1"
                    value={ans1}
                    onChange={onAns1Change}
                  />
                </div>
                <div className="check_mark">
                  <input
                    type="radio"
                    class="ui-checkbox"
                    name="option"
                    value={1}
                    onChange={(e) => setOption(e.target.value)}
                  />
                </div>
              </div>

              {/* ANS-2 */}
              <div className="ans">
                <div className="ans_input">
                  <input
                    type="text"
                    placeholder="Option-2"
                    value={ans2}
                    onChange={onAns2Change}
                  />
                </div>
                <div className="check_mark">
                  <input
                    type="radio"
                    class="ui-checkbox"
                    name="option"
                    value={2}
                    onChange={(e) => setOption(e.target.value)}
                  />
                </div>
              </div>

              {/* ANS-3 */}
              <div className="ans">
                <div className="ans_input">
                  <input
                    type="text"
                    placeholder="Option-3"
                    value={ans3}
                    onChange={onAns3Change}
                  />
                </div>
                <div className="check_mark">
                  <input
                    type="radio"
                    class="ui-checkbox"
                    name="option"
                    value={3}
                    onChange={(e) => setOption(e.target.value)}
                  />
                </div>
              </div>

              {/* ANS-4 */}
              <div className="ans">
                <div className="ans_input">
                  <input
                    type="text"
                    placeholder="Option-4"
                    value={ans4}
                    onChange={onAns4Change}
                  />
                </div>
                <div className="check_mark">
                  <input
                    type="radio"
                    class="ui-checkbox"
                    name="option"
                    value={4}
                    onChange={(e) => setOption(e.target.value)}
                  />
                </div>
              </div>
              <div>
                {errQuestion ? (
                  <p className="error_q_add">
                    <i class="fa-solid fa-exclamation"></i> Fill the question
                  </p>
                ) : (
                  ""
                )}
                {errAns1 ? (
                  <p className="error_q_add">
                    <i class="fa-solid fa-exclamation"></i> Fill Option: 1
                  </p>
                ) : (
                  ""
                )}
                {errAns2 ? (
                  <p className="error_q_add">
                    <i class="fa-solid fa-exclamation"></i> Fill Option: 2
                  </p>
                ) : (
                  ""
                )}
                {errAns3 ? (
                  <p className="error_q_add">
                    <i class="fa-solid fa-exclamation"></i> Fill Option: 3
                  </p>
                ) : (
                  ""
                )}
                {errAns4 ? (
                  <p className="error_q_add">
                    <i class="fa-solid fa-exclamation"></i> Fill Option: 4
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="add_btn_body">
                <button className="add_btn btn" onClick={onAdd}>
                  Add <i class="fa-solid fa-circle-plus"></i>
                </button>
              </div>
            </div>
          ) : (
            <div className="publish_body container">
              <button className="done-btn btn btn-success" onClick={onPublish}>
                <i class="fa-regular fa-circle-check"></i> Publish
              </button>
            </div>
          )}
        </form>
      </>
    </>
  );
}

export default Q_add;
