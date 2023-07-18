const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter its required fild"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please enter its required fild"],
    minLength: 6,
  },
});

const User = mongoose.model("cluster0", userSchema);

module.exports = User;
