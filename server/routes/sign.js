const express = require("express");
const router = express.Router();
const signControllers = require("../controllers/sign");

router.get("/", signControllers.get);
router.post("/", signControllers.post);

module.exports = router;
