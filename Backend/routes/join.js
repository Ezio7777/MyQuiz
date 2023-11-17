const express = require("express");
const Router = express.Router();
const Teacher = require("../models/teacher");
const fetchUser = require("../middleware/fetchUserr");

// ROUTE 1: Join a Quiz using:POST "/api/join/joinquiz".

Router.get("/joinquiz/:id", fetchUser, async (req, res) => {
  try {
    const quiz = await Teacher.findOne({ quiz_id: req.params.id }).select([
      "quiz_name",
      "no_of_question",
      "duration",
      "questions",
    ]);
    res.json(quiz);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;
