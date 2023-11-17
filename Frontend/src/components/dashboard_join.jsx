import React from "react";
import "../components_style/dashboard.css";

function Dashboard_join(props) {
  const data = props.data;
  return (
    <div class="details">
      <div className="board">
        <div class=" boxes el-1 ">{data.quiz_name}</div>
      </div>
      <div className="board">
        <div class=" boxes el-2 ">{data.no_q}</div>
      </div>
      <div className="board">
        <div class=" boxes el-3 ">{data.correct}</div>
      </div>
      <div className="board">
        <div class=" boxes el-4 ">{data.accuracy}%</div>
      </div>
    </div>
  );
}

export default Dashboard_join;
