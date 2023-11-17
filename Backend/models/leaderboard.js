const mongoose = require("mongoose");
const { Schema } = mongoose;

const LeaderboardSchema = new Schema({
  creater_id: {
    type: String,
    required: true,
  },
  quiz_id: {
    type: String,
    required: true,
  },
  quiz_name: {
    type: String,
    required: true,
  },
  candidate: [],
});
const Leaderboard = mongoose.model("leaderboard", LeaderboardSchema);
module.exports = Leaderboard;
