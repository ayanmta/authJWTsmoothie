const { Router } = require("express");
const authController = require("../controllers/authControllers");

const router = Router();

router.get("/signup", authController.signup_get);
router.get("/login", authController.login_get);
router.post("/signup", authController.signup_post);
router.post("/login", authController.signup_post);

module.exports = router;
