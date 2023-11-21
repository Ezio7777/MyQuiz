const express = require("express");
const Router = express.Router();
const teacher = require("../models/teacher");
const fetchUser = require("../middleware/fetchUserr");

// ROUTE 1: Make a Quiz expired:POST "/api/unpublish/expire".
Router.post("/expire", fetchUser, async (req, res) => {
  try {
    const check = await teacher.findOne({ quiz_id: req.body.quiz_id });
    if (check) {
      const response = await teacher.updateOne(
        { quiz_id: req.body.quiz_id },
        { expiry: true }
      );
      if (response) {
        res.json(response);
      } else {
        console.log("not Expired");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
