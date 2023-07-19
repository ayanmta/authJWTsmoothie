const User = require("../models/user");
const router = require("../routes/authRoutes");
const jwt = require("jsonwebtoken");

const maxAge = 30 * 60 * 60 * 1000;
const handleError = (err) => {
  console.log(err.message, err.code);
};
const createToken = (id) => {
  return jwt.sign({ id }, "ayan-secret", { expiresIn: maxAge });
};

module.exports.signup_get = (req, res) => res.render("signup");
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(email, password);
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token);
    await user.save();
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    handleError(err);
  }
};

module.exports.login_get = (req, res) => res.render("signup");
module.exports.login_post = (req, res) => res.render("user login");
