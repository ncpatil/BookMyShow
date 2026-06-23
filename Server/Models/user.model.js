const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userScheama = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      enum: ["admin", "partner", "user"],
      required: true,
      default: "user",
    },
  },
  { timestamps: true },
);
const User = mongoose.model("user", userScheama);
module.exports = User;
