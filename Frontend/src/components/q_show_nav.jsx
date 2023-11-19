import React, { useEffect, useState } from "react";
import "../components_style/q_show_nav.css";
// import { Link } from "react-router-dom";

function Navbar_timer(props) {
  const name = props.name;
  const code = props.code;

  return (
    <div className="container add_nav_container">
      <div className="heading_cont">
        <div className="heading_bg">
          <h1 className="heading_addnav">Quiz Name : {name}</h1>
        </div>
        <div className="heading_bg">
          <h1 className="heading_addnav">Code: {code}</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar_timer;
