const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuetionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  ans1: {
    type: String,
    required: true,
  },
  ans2: {
    type: String,
    required: true,
  },
  ans3: {
    type: String,
    required: true,
  },
  ans4: {
    type: String,
    required: true,
  },
  correct: {
    type: String,
    required: true,
  },
});
const Question = mongoose.model("question", QuetionSchema);
module.exports = Question;
