import React, { useState } from "react";
import "../components_style/dashboard.css";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("join");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard-container container">
      <div className="option-section">
        <div
          className={`option ${selectedOption === "join" ? "selected" : ""}`}
          onClick={() => handleOptionChange("join")}
        >
          Total Quiz Attempt
        </div>
        <div
          className={`option ${selectedOption === "host" ? "selected" : ""}`}
          onClick={() => handleOptionChange("host")}
        >
          Total Quiz Host
        </div>
      </div>

      <div className="info-section">
        {selectedOption === "join" ? (
          <div className="join-info">
            <div className="column">
              <div className="info-title">Quiz Name</div>
              <div className="info-detail">OSS</div>
              <div className="info-detail">AP</div>
            </div>
            <div className="column">
              <div className="info-title">No. of Questions</div>
              <div className="info-detail">10</div>
              <div className="info-detail">20</div>
            </div>
            <div className="column">
              <div className="info-title">Total Points</div>
              <div className="info-detail">20</div>
              <div className="info-detail">40</div>
            </div>
          </div>
        ) : (
          <div className="host-info">
            <div className="column">
              <div className="info-title">Quiz Name</div>
              <div className="info-detail">OSS</div>
              <div className="info-detail">AP</div>
            </div>
            <div className="column">
              <div className="info-title">No. of Students</div>
              <div className="info-detail">50</div>
              <div className="info-detail">60</div>
            </div>
            <div className="column">
              <div className="info-title">Duration</div>
              <div className="info-detail">30 minutes</div>
              <div className="info-detail">50 minutes</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
