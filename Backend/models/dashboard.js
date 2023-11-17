const mongoose = require("mongoose");
const { Schema } = mongoose;

const DashboardSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  host: [],
  join: [],
});
const Dashboard = mongoose.model("dashboard", DashboardSchema);
module.exports = Dashboard;
