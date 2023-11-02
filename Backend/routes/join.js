const express = require("express");
const Router = express.Router();
const teacher = require("../models/teacher");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Joi = require("joi");
const fetchUser = require("../middleware/fetchUserr");
const QuizCounter = require("../models/quiz_count");

let ValidationForJoinQuiz = [
  body("quiz_id", "Enter a valid quiz ID").isLength({ min: 6 }).isInt(),
  body("display_name", "Enter a name more than 3 letters").isLength({ min: 3 }),
];

// ROUTE 1: Join a Quiz using:POST "/api/join/joinquiz".

Router.post("/joinquiz", ValidationForJoinQuiz, fetchUser, async (req, res) => {
  let success = false;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  res.send("success");

  // try {
  //   const quiz = await Teacher.find({ quiz_id: req.params.id }).select([
  //     "quiz_name",
  //     "no_of_question",
  //     "duration",
  //     "questions",
  //   ]);
  //   res.json(quiz);
  // } catch (error) {
  //   console.error(error.message);
  //   res.status(500).send("Internal server error");
  // }
});

module.exports = Router;
