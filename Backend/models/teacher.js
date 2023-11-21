const { bool, boolean } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeacherSchema = new Schema({
  quiz_id: {
    type: String,
    required: true,
    unique: true,
  },
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  quiz_name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  no_of_question: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  questions: {
    type: [],
    required: true,
  },
  expiry: {
    type: Boolean,
    default: false,
  },
  publish: {
    type: Boolean,
    required: true,
  },
  participants: {
    type: Number,
    default: 100,
    required: true,
  },
  current_p: {
    type: Number,
    default: 0,
  },
});
const Teacher = mongoose.model("teacher", TeacherSchema);
module.exports = Teacher;
