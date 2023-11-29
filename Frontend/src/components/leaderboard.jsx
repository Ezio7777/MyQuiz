import React from "react";
import "../components_style/leaderboard.css";
import { useLocation } from "react-router-dom";
import Body from "./leaderboard_body";

const Leaderboard = () => {
  const location = useLocation();
  const unsort_candidate = location.state.data.candidate;

  //Sort Candidate basis on Points
  const candidate = unsort_candidate.sort((a, b) => b.correct - a.correct);
  console.log(candidate);

  const participants = location.state.participants;
  const current = candidate.length;

  return (
    <>
      <div className="leaderboard_body">
        <div class="h1_text">LeaderBoard</div>
        <div className="participants_l_body">
          <div className="participants_l">
            Participants: {current}/{participants}
          </div>
        </div>
        <div className="container aboutbody">
          <div class="head_board">
            <div className="board">
              <div class=" boxes el-1 ">Name</div>
            </div>
            <div className="board">
              <div class=" boxes el-2 ">Correct</div>
            </div>
            <div className="board">
              <div class=" boxes el-3 ">Wrong</div>
            </div>
            <div className="board">
              <div class=" boxes el-4 ">%Achieved</div>
            </div>
          </div>
          {candidate.map((each, index) => {
            return <Body key={index} data={each} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
