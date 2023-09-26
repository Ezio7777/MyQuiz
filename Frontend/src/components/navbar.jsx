import React from "react";
import "../components_style/navbar.css";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark navbar_bg">
        <div class="container">
          {/* Logo */}
          <Link class="navbar-brand" to="/">
            beQuick
          </Link>

          {/* Toggle-Btn */}
          <button
            class="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* SideBar */}
          <div
            class="sidebar offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* Sidebar-Header */}
            <div class="offcanvas-header text-white border-bottom">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                beQuick
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            {/* Sidebar-Body */}
            <div class="offcanvas-body d-flex flex-column p-4 flex-lg-row p-lg-0">
              <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3 menu">
                <li class="nav-item mx-2">
                  <Link class="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link class="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Login & Sign Up */}
              <div className=" d-flex flex-column flex-lg-row p-4 justify-content-center align-items-center gap-3 ">
                <Link class="text-white" to="/Login">
                  Login
                </Link>
                <Link
                  class="text-white text-decoration-none px-3 py-1 rounded-4"
                  id="signup"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;