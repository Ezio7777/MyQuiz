const express = require("express");
const Router = express.Router();
const Teacher = require("../models/teacher");
// const Dashboard = require("../models/dashboard");
const fetchUser = require("../middleware/fetchUserr");

// ROUTE 1: Join a Quiz using:POST "/api/join/joinquiz".

Router.get("/joinquiz/:id", fetchUser, async (req, res) => {
  try {
    const quiz = await Teacher.findOne({ quiz_id: req.params.id }).select([
      "quiz_id",
      "quiz_name",
      "no_of_question",
      "duration",
      "questions",
    ]);
    const expiry = await Teacher.findOne({ quiz_id: req.params.id }).select(
      "expiry"
    );

    if (expiry == true) {
      res.json("expire");
    } else {
      res.json(quiz);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;
