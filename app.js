const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use(express.static("public"));
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");
app.use(express.json());

// database connection
const dbURI =
  "mongodb+srv://aymehta:HfV7aaEgXzUmrxby@cluster0.oscns.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));

//set cookies
app.get("/setCookies", (req, res) => {
  res.cookie("newUserddd", "dayanMehta", { maxAge: 100000000 });
  res.send("you got the cookie");
});

app.get("/readCookies", (req, res) => {
  const cookies = req.cookies;
  console.log(cookies.newUserddd);
  res.json(cookies);
});
app.use(authRoutes);
