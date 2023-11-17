import React from "react";
import "../components_style/dashboard.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Dashboard_host(props) {
  const data = props.data;

  const code = data.quiz_id;

  const navigate = useNavigate();

  const onLeaderboard = async () => {
    const response = await fetch(
      `http://localhost:5000/api/leaderboard/show/${code}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    if (json == null) {
      Swal.fire({
        icon: "warning",
        title: "Dont have enough data",
        text: "",
      });
    } else {
      navigate("/leaderboard", { state: { data: json } });
    }
  };
  return (
    <div class="details" onClick={onLeaderboard}>
      <div className="board">
        <div class=" boxes el-1 ">{data.quiz_name}</div>
      </div>
      <div className="board">
        <div class=" boxes el-2 ">{data.no_of_question}</div>
      </div>
      <div className="board">
        <div class=" boxes el-3 ">{data.duration} minute</div>
      </div>
      <div className="board">
        <div class=" boxes el-4 ">{data.quiz_id}</div>
      </div>
    </div>
  );
}

export default Dashboard_host;
