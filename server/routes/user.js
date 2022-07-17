const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");
const passport = require("passport");

router.get(
  //to check if the user is authenticated
  "/sign",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      return res.status(401).send(null);
    }
  },
  userControllers.get
);

router.post("/signup", userControllers.up.post);
router.post("/signin", passport.authenticate("local"), userControllers.in.post);
router.post("/signout", userControllers.out.post);

module.exports = router;
