import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup";
import Join_code from "./components/join_code.jsx";
import Host_quiz from "./components/host_quiz";
import Share_code from "./components/share_code";
import Q_add from "./components/q_add";
import Contact_us from "./components/contact_us";
import About from "./components/about";
import Navbar_timer from "./components/navbar_timer";
import Q_show from "./components/q_show";

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact_us />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/join"
          element={
            <>
              <Navbar />
              <Join_code />
              <Footer />
            </>
          }
        />
        <Route
          path="/host"
          element={
            <>
              <Navbar />
              <Host_quiz />
              <Footer />
            </>
          }
        />
        <Route
          path="/question_add"
          element={
            <>
              <Navbar />
              <Q_add />
            </>
          }
        />
        <Route
          path="/share_code"
          element={
            <>
              <Navbar />
              <Share_code />
              <Footer />
            </>
          }
        />
        <Route
          path="/q_show"
          element={
            <>
              <Navbar_timer />
              <Q_show />
              <Q_show />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
