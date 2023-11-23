const express = require("express");
const Router = express.Router();
const Teacher = require("../models/teacher");
const DashBoard = require("../models/dashboard");
const fetchUser = require("../middleware/fetchUserr");

// ROUTE 1: "/api/join/joinquiz".

Router.get("/joinquiz/:id", fetchUser, async (req, res) => {
  try {
    const candidate = await Teacher.findOne({
      quiz_id: req.params.id,
    }).select(["participants", "current_p"]);
    if (candidate == null) {
      res.json("WRONG");
    } else {
      if (candidate.participants != candidate.current_p) {
        const existCheck = await DashBoard.findOne({
          _id: req.user.id,
          "join.quiz_id": req.params.id,
        });
        if (existCheck == null) {
          const quiz = await Teacher.findOne({ quiz_id: req.params.id }).select(
            [
              "quiz_id",
              "quiz_name",
              "no_of_question",
              "duration",
              "questions",
              "creator_id",
            ]
          );
          const expiry = await Teacher.findOne({
            quiz_id: req.params.id,
          }).select("expiry");

          if (expiry.expiry == true) {
            res.json("expire");
          } else {
            await Teacher.updateOne(
              { quiz_id: req.params.id },
              { $inc: { current_p: 1 } }
            );
            await DashBoard.updateOne(
              { _id: quiz.creator_id, "host.quiz_id": req.params.id },
              { $inc: { current_p: 1 } }
            );
            res.json(quiz);
          }
        } else {
          res.json("DONE");
        }
      } else {
        res.json("FULL");
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;
