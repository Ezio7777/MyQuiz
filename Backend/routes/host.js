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

let ValidationForCreateQuiz = [
  body(
    "quiz_name",
    "Enter a quiz name which conatain more than 3 letters"
  ).isLength({ min: 3 }),
  body("no_of_question", "Enter between 1 to 20 number").isInt({
    min: 1,
    max: 20,
  }),
  body("duration", "Enter between 1 to 20 min").isInt({ min: 1, max: 20 }),
];

// ROUTE 1: Create a Quiz using:POST "/api/host/createquiz".
Router.post(
  "/createquiz",
  fetchUser,
  ValidationForCreateQuiz,
  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    res.send("hi");
  }
  //   try {
  //     await QuizCounter.updateOne(
  //       { _id: "653a2d4b8741a53ec501ef42" },
  //       {
  //         $inc: { value: 1 },
  //         $currentDate: { lastModified: true },
  //       }
  //     );
  //     let counter = await QuizCounter.findById("653a2d4b8741a53ec501ef42");
  //     const quizObj = {
  //       ...req.body,
  //       quiz_id: counter.value,
  //       creator_id: req.user.id,
  //     };
  //     quiz = await teacher.create(quizObj);
  //     res.json({ quiz });
  //   } catch (error) {
  //     console.error(error.message);
  //     res.status(500).send("Internal server error");
  //   }
  // }
);

module.exports = Router;

{
  /*let ValidationForCreateQuiz = [
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
});*/
}
