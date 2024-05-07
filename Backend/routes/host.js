const express = require("express");
const Router = express.Router();
const teacher = require("../models/teacher");
const fetchUser = require("../middleware/fetchUserr");
const QuizCounter = require("../models/quiz_count");
const dashboard = require("../models/dashboard");
const leaderboard = require("../models/leaderboard");

// ROUTE 1: Create a Quiz using:POST "/api/host/createquiz".
function generateRandomCode() {
  // Generate a random number between 0 and 999999
  let randomNumber = Math.floor(Math.random() * 1000000);

  // Convert the number to a string and pad it with leading zeros to ensure it is 6 digits long
  let randomCode = randomNumber.toString().padStart(6, "0");

  return randomCode;
}
Router.post("/createquiz", fetchUser, async (req, res) => {
  try {
    const quiz_id = generateRandomCode();
    console.log(quiz_id);
    const quizObj = {
      ...req.body,
      quiz_id: quiz_id,
      creator_id: req.user.id,
    };
    quiz = await teacher.create(quizObj);
    res.json({ quiz_id });

    //update dashboard
    const id = req.user.id;

    let id_check = await dashboard.findById(id);

    const newHost = {
      quiz_name: req.body.quiz_name,
      no_of_question: req.body.no_of_question,
      duration: req.body.duration,
      quiz_id: quiz_id,
      participants: req.body.participants,
      current_p: 0,
    };

    try {
      if (id_check == null) {
        await dashboard.create({ _id: id, join: [], host: [newHost] });
      } else {
        await dashboard.updateOne({ _id: id }, { $push: { host: newHost } });
      }
    } catch (error) {
      console.log(error);
    }

    //Create LeaderBoard for each quiz
    try {
      await leaderboard.create({
        creater_id: id,
        quiz_id: quiz_id,
        quiz_name: req.body.quiz_name,
        candidate: [],
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;
