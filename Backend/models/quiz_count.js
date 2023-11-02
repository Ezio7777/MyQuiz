const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuizCounterSchema = new Schema({
  value: {
    type: Number,
  },
});
const QuizCount = mongoose.model("quizcounter", QuizCounterSchema);
module.exports = QuizCount;
