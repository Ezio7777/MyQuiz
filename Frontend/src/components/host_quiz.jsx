import React from "react";
import "../components_style/host_quiz.css";
import { Link } from "react-router-dom";

const host_quiz = () => {
  return (
    <div className="container host_quiz_body">
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label className="Quizz_Name_font">Quizz Name</label>
          </div>
          <div>
            <select className="form-select" id="validationDefault04" required>
              <option selected disabled value="">
                No. of quiz
              </option>
              <option>
                <p>5 Questions</p>
              </option>
              <option>
                <p>10 Questions</p>
              </option>
              <option>
                <p>15 Questions</p>
              </option>
              <option>
                <p>20 Questions</p>
              </option>
            </select>
          </div>
          <div>
            <select className="form-select" id="validationDefault04" required>
              <option selected disabled value="">
                Time Duration
              </option>
              <option>
                <p>5 min</p>
              </option>
              <option>
                <p>10 min</p>
              </option>
              <option>
                <p>15 min</p>
              </option>
              <option>
                <p>20 min</p>
              </option>
            </select>
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