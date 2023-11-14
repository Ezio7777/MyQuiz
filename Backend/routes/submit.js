const express = require("express");
const Router = express.Router();
const dashboard = require("../models/dashboard");
var jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUserr");

// ROUTE 1: Create a Quiz using:POST "/api/submit/dashboard".
Router.post("/dashboard", fetchUser, async (req, res) => {
  try {
    const dashboardId = req.body.user_id;
    const newJoin = {
      ...req.body,
    };
    const updatedDashboard = await dashboard.updateOne(
      { _id: dashboardId },
      { $push: { join: newJoin } },
      (err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Updated ${updatedDashboard} document`);
        }
      }
    );
    res.json({ updatedDashboard });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;
