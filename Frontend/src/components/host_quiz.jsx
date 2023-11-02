import React, { useState } from "react";
import "../components_style/host_quiz.css";
import { Link } from "react-router-dom";

const host_quiz = () => {
  // let token = localStorage.getItem("token");
  // const [quizName, setQuizName] = useState("");
  // const [noOfQuestion, setNoOfQuestion] = useState("");

  return (
    <div className="container host_quiz_body">
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" placeholder="name" />
            <label className="Quizz_Name_font">Quizz Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" placeholder="0" />
            <label className="Quizz_Name_font">
              No of questions (less than 20)
            </label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" placeholder="0" />
            <label className="Quizz_Name_font">
              Time Duration (less than 20 min)
            </label>
          </div>
          <center>
            <Link to="/question_add">
              Create
              <span></span>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default host_quiz;
