const express = require("express");
const router = express.Router();
const { loginVerify } = require("./loginVerify");
const interviewControllers = require("../controllers/interview");

router.get("/:subject/all", interviewControllers.getAll);
router.get("/:subject/nomemo", loginVerify, interviewControllers.getNomemo);
router.get("/memo", loginVerify, interviewControllers.getMemo);

router.post("/:subject", loginVerify, interviewControllers.post);

module.exports = router;
