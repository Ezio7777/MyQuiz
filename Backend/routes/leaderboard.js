const express = require("express");
const Router = express.Router();
const LeaderBoard = require("../models/leaderboard");
const fetchUser = require("../middleware/fetchUserr");

// ROUTE 1: Join a Quiz using:POST "/api/leaderboard/show".

Router.get("/show/:id", fetchUser, async (req, res) => {
  try {
    const candidate = await LeaderBoard.findOne({
      quiz_id: req.params.id,
    }).select(["candidate"]);
    res.json(candidate);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;
