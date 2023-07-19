const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const User = mongoose.model("cluster0", userSchema);

//mongo db hooks
//fire after user saves
// userSchema.post("save", function (doc, next) {
//   console.log("user created and saved", doc);
//   //   next();
// });

module.exports = User;
