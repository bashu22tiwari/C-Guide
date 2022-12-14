const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "answer",
    },
  ],
  query: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
