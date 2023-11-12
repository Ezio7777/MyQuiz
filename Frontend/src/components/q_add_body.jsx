import React, { useState, useEffect } from "react";
import "react-router-dom";

function Q_add_body(props) {
  // let q_no = props.index + 1;

  const [data_store, setDataStore] = useState([]);

  const [qNo, setQno] = useState(1);

  // const [length, setLength] = useState();

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
    } else {
      alert("Fill all the input");
    }
  };
  useEffect(() => {
    console.log(data_store);
  }, [data_store]);

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

  return (
    <>
      <form onSubmit={inputHandel}>
        <div className="container q_add_body">
          {/* Question No. */}
          <div className="question_no">
            <p>Question No: {qNo}</p>
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
          <div className="done-cont">
            <button className="done-btn btn btn-success" to="/share_code">
              <i class="fa-regular fa-circle-check"></i> Publish
            </button>
          </div>

          {/* Changing Section
        <div className="chanaging_section">
          <div className="pre-next-cont">
            <div className="btn prev-btn">
              <i class="fa-solid fa-chevron-left"></i> Prev
            </div>
            <div className="btn next-btn">
              Next <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div> */}
        </div>
      </form>
    </>
  );
}

export default Q_add_body;
