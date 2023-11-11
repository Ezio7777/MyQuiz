import React from "react";
// import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import "../components_style/q_show.css";
// import { Link } from "react-router-dom";
import NavbarTimer from "./q_show_nav";
import Q_show_body from "./q_show_body";

function Q_show() {
  let dummy = {
    _id: "6547be9ab63f5b86debf61a0",
    quiz_name: "APS-lab",
    no_of_question: 2,
    duration: 1,
    questions: [
      {
        question: "2+2 ?",
        ans1: "2",
        ans2: "3",
        ans3: "4",
        ans4: "1",
      },
      {
        question: "2+2",
        ans1: "2",
        ans2: "3",
        ans3: "4",
        ans4: "1",
      },
    ],
  };
  let questions = dummy.questions;
  return (
    <>
      <NavbarTimer />
      {questions.map((item, index) => (
        <Q_show_body data={item} key={index} />
      ))}
    </>
  );
}

export default Q_show;
