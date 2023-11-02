const mongoose = require("mongoose");
const { Schema } = mongoose;

const DashboardSchema = new Schema({
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  host: [],
  join: [],
});
const Dashboard = mongoose.model("quizcounter", DashboardSchema);
module.exports = Dashboard;
