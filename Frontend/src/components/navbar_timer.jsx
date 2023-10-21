import React, { useEffect, useState } from "react";
import "../components_style/navbar_timer.css";
import { Link } from "react-router-dom";

function Navbar_timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinuites] = useState(0);

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinuites(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="container timer_container">
      <div className="timer">
        <h1 className="timer_heading">Time End :</h1>
        <h1 className="min_sec">
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>
      </div>
    </div>
  );
}

export default Navbar_timer;
