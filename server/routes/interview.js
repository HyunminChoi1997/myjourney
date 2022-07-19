const express = require("express");
const router = express.Router();
const { loginVerify } = require("./loginVerify");
const interviewControllers = require("../controllers/interview");

router.get("/:subject/all", interviewControllers.getAll);
router.get("/:subject/nomemo", loginVerify, interviewControllers.getNomemo);
router.get("/memo", loginVerify, interviewControllers.getMemo);

router.post("/memo", loginVerify, interviewControllers.postMemo);
router.post("/:subject", loginVerify, interviewControllers.post);

module.exports = router;

/**
 * Response Data Format to GET Requests
 * Only diff with get("/post"). The object is flat without "user" key
 * {
    "interviewList": [
        {
            "id": 1,
            "question": "question1",
            "answer": "answer1",
            "subject": "front",
            "language": "EN",
            "show": true,
            "createdAt": "2022-07-19T08:52:40.000Z",
            "updatedAt": "2022-07-19T08:52:40.000Z",
            "user_id": 1,
            "user": {
                "nickname": "최현민"
            }
        },
        {
            "id": 2,
            "question": "question2",
            "answer": "answer2",
            "subject": "front",
            "language": "EN",
            "show": true,
            "createdAt": "2022-07-19T08:52:46.000Z",
            "updatedAt": "2022-07-19T08:52:46.000Z",
            "user_id": 1,
            "user": {
                "nickname": "최현민"
            }
        },
        {
            "id": 3,
            "question": "question3",
            "answer": "answer3",
            "subject": "front",
            "language": "EN",
            "show": true,
            "createdAt": "2022-07-19T08:52:49.000Z",
            "updatedAt": "2022-07-19T08:52:49.000Z",
            "user_id": 1,
            "user": {
                "nickname": "최현민"
            }
        },
      ]
}
 * 
 */
