const express = require("express");
const router = express.Router();
const { loginVerify } = require("./loginVerify");
const interviewControllers = require("../controllers/interview");

router.get("/:subject/all/:language", interviewControllers.getAll);
router.get(
  "/:subject/nomemo/:language",
  loginVerify,
  interviewControllers.getNomemo
);
router.get("/memo/:language", loginVerify, interviewControllers.getMemo);

router.post("/memo", loginVerify, interviewControllers.postMemo);
router.post("/:subject", loginVerify, interviewControllers.post);

module.exports = router;

/**
 * post("/memo")
 * body : interview_id : number
 *
 * post("/:subject")
 * body: question: string, answer: string, language: string,
 */

/**
 * Response Data Format to GET Requests
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
