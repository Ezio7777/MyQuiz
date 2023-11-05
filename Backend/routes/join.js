const express = require("express");
const Router = express.Router();
const Teacher = require("../models/teacher");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Joi = require("joi");
const fetchUser = require("../middleware/fetchUserr");
const QuizCounter = require("../models/quiz_count");

// let ValidationForJoinQuiz = [
//   body("quiz_id", "Enter a valid quiz ID").isLength({ min: 6 }).isInt(),
//   body("display_name", "Enter a name more than 3 letters").isLength({ min: 3 }),
// ];

// ROUTE 1: Join a Quiz using:POST "/api/join/joinquiz".

Router.get("/joinquiz/:id", fetchUser, async (req, res) => {
  try {
    console.log("hi");
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
