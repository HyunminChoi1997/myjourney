const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");

router.get("/", userControllers.get);
router.post("/signup", userControllers.up.post);
router.post("/signin", userControllers.in.post);

module.exports = router;
