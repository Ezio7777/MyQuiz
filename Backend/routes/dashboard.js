const express = require("express");
const Router = express.Router();
const dashboard = require("../models/dashboard");
const teacher = require("../models/teacher");
const fetchUser = require("../middleware/fetchUserr");

// ROUTE 1:  "/api/dashboard/show".

Router.get("/show", fetchUser, async (req, res) => {
  try {
    const id = req.user.id;

    const attempt = await dashboard
      .findOne({ _id: id })
      .select(["join", "host"]);

    res.json(attempt);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// ROUTE 2:  "/api/dashboard/host".

Router.get("/host", fetchUser, async (req, res) => {
  try {
    const id = req.user.id;
    const host = await dashboard.findOne({ _id: id }).select("host");
    res.json(host);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;
