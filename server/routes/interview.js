const express = require("express");
const router = express.Router();
const interviewControllers = require("../controllers/interview");

router.get("/:subject", interviewControllers.get);
router.post("/:subject", interviewControllers.post);

module.exports = router;
