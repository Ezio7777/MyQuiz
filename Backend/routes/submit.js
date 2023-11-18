const express = require("express");
const Router = express.Router();
const dashboard = require("../models/dashboard");
const LeaderBoard = require("../models/leaderboard");
var jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUserr");

// ROUTE 1: Create a Quiz using:POST "/api/submit/result".
Router.post("/result", fetchUser, async (req, res) => {
  try {
    const dashboardId = req.body.user_id;
    const newJoin = {
      ...req.body,
    };
    const id = req.user.id;

    let id_check = await dashboard.findById(id);

    if (id_check == null) {
      await dashboard.create({ _id: id }, { join: [newJoin] }, { host: [] });
    } else {
      await dashboard.updateOne({ _id: id }, { $push: { join: newJoin } });
    }

    //LeaderBoard

    const candidate = await LeaderBoard.findOne({ quiz_id: req.body.quiz_id });

    const newScore = {
      name: req.body.name,
      correct: req.body.correct,
      wrong: req.body.wrong,
      accuracy: req.body.accuracy,
    };

    if (candidate) {
      await LeaderBoard.updateOne(
        { quiz_id: req.body.quiz_id },
        { $push: { candidate: newScore } }
      );
    } else {
      console.log("not save");
    }

    res.json({ id });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;
