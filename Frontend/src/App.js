import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup";
import JoinCode from "./components/JoinCodeE.jsx";
import HostQuiz from "./components/host_quiz";
import ShareCode from "./components/share_code";
import QAdd from "./components/q_add";
import ContactUs from "./components/contact_us";
import About from "./components/about";
import QShow from "./components/q_show";
import Dashboard from "./components/dashboard.jsx";
import Leaderboard from "./components/leaderboard.jsx";
import Result from "./components/result.jsx";

import "./App.css";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
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
              <ContactUs />
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
              <JoinCode />
              <Footer />
            </>
          }
        />
        <Route
          path="/host"
          element={
            <>
              <Navbar />
              <HostQuiz />
              <Footer />
            </>
          }
        />
        <Route
          path="/question_add"
          element={
            <>
              <QAdd />
            </>
          }
        />
        <Route
          path="/share_code"
          element={
            <>
              <ShareCode />
            </>
          }
        />
        <Route
          path="/join/q_show"
          element={
            <>
              <QShow />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <>
              <Navbar />
              <Leaderboard />
            </>
          }
        />
        <Route
          path="/result"
          element={
            <>
              <Navbar />
              <Result />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
