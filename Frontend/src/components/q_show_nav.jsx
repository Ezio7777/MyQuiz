import React, { useEffect, useState } from "react";
import "../components_style/q_show_nav.css";
// import { Link } from "react-router-dom";

function Navbar_timer(props) {
  const name = props.name;
  const code = props.code;

  return (
    <div className="container timer_container">
      <div className="timer">
        <h1 className="timer_heading">
          {name}:{code}
        </h1>
        <h1 className="min_sec"></h1>
      </div>
    </div>
  );
}

export default Navbar_timer;
