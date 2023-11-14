import React from "react";
import { useNavigate } from "react-router-dom";

function Q_add_nav() {
  const Navigation = useNavigate();

  function onExit() {
    Navigation("/");
  }

  return (
    <div className="container timer_container">
      {/* <h1 className="timer_heading">{name}</h1> */}
      <div className=" d-flex flex-column flex-lg-row p-4 justify-content-center align-items-center gap-3 exit_body">
        <button
          class="text-white text-decoration-none px-3 py-1 rounded-4"
          id="signup"
          onClick={onExit}
        >
          Cancel <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <p></p>
    </div>
  );
}

export default Q_add_nav;
