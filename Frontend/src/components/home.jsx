import React from "react";
import "../components_style/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  function checkAuthJoin() {
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/join");
    }
  }
  function checkAuthHost() {
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/host");
    }
  }
  return (
    <div className="container">
      <div className="row  body_color">
        {/* card1 */}
        <div className="col-lg-6 col-md-6 col-sm-12 card-center container-fluid">
          <div className="card card1">
            <div className="card1_logo ">
              <i className="fa-solid fa-right-to-bracket  fa-5x card1_icon"></i>
            </div>
            <div className="card1footer">
              <button className="card_button" onClick={checkAuthJoin}>
                Join a Quiz
              </button>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="col-lg-6 col-md-6 col-sm-12 card-center">
          <div className="card card2">
            <div className="card2_logo ">
              <i class="fa-solid fa-circle-plus fa-5x card2_icon"></i>
            </div>
            <div className="card2footer">
              <button className="card_button" onClick={checkAuthHost}>
                Create a Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
