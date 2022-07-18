const express = require("express");
const router = express.Router();
const { loginVerify } = require("./loginVerify");
const userControllers = require("../controllers/user");
const passport = require("passport");

router.get(
  //to check if the user is authenticated
  "/sign",
  loginVerify,
  userControllers.verified
);

router.post("/signup", userControllers.signupPost);
router.post(
  "/signin",
  passport.authenticate("local"),
  userControllers.signinPost
);
router.post("/signout", userControllers.signoutPost);

module.exports = router;
