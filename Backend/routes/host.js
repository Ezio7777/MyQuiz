const express = require("express");
const Router = express.Router();
const teacher = require("../models/teacher");
const User = require("./models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Joi = require("joi");

let ValidationForCreateQuiz = [
  body("quiz_name", "Enter a valid quiz name").isLength({ min: 3 }),
  body("no_of_question", "Enter less than 20 no").isInt({ min: 1, max: 20 }),
  body("duration", "Enter less than 20 min").isInt({ min: 1, max: 20 }),
];

// ROUTE 1: Create a quizz using:POST "/api/host/create/".
Router.get("/create", ValidationForCreateQuiz, async (req, res) => {
  let success = false;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
  } catch (error) {}
});

//ROUTE 2

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

//Dynamic Link creator

// ROUTE 2: Adding questions in quizz using:POST "/api/host/create/add_q".
Router.get("/create/add_q", (req, res) => {
  const UniqueNo = generateUniqueNumber()
    .then((uniqueNumber) =>
      console.log(`Generated unique number: ${uniqueNumber}`)
    )
    .catch((error) => console.error(error));

  const customLink = `http://localhost:3000/join/${UniqueNo}`;
  res.json({ link: customLink });
});

module.exports = Router;
