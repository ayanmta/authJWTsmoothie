const User = require("../models/user");
const router = require("../routes/authRoutes");

module.exports.signup_get = (req, res) => res.render("signup");
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    const user = await User.create({ email, password });
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send("error user signup");
  }
};

module.exports.login_get = (req, res) => res.render("signup");
module.exports.login_post = (req, res) => res.render("user login");
