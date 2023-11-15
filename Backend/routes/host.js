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

// ROUTE 1: Create a Quiz using:POST "/api/host/createquiz".
Router.post("/createquiz", fetchUser, async (req, res) => {
  let success = false;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    await QuizCounter.updateOne(
      { _id: "6547ba752a935f3835211124" },
      {
        $inc: { value: 1 },
        $currentDate: { lastModified: true },
      }
    );
    let counter = await QuizCounter.findById("6547ba752a935f3835211124");
    const quizObj = {
      ...req.body,
      quiz_id: counter.value,
      creator_id: req.user.id,
    };
    quiz = await teacher.create(quizObj);
    res.json({ quiz });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;

{
  /*
//Unique no Generator (6-digit)
async function generateUniqueNumber() {
  let randomNum = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number

  try {
    //Checking that it already exist or not
    const existingNumber = await teacher.findOne({ quiz_id: randomNum });
    if (existingNumber) {
      // If the number already exists, generate a new one recursively
      return generateUniqueNumber();
    } else {
      // If the number is unique, return it
      return randomNum;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

*/
}
