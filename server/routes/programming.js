const express = require("express");
const router = express.Router();
const { loginVerify } = require("./loginVerify");
const programmingControllers = require("../controllers/programming");

router.get("/:subject", programmingControllers.getAll);

router.post("/:subject", loginVerify, programmingControllers.postBlog);

router.patch(
  "/:subject/:post_id",
  loginVerify,
  programmingControllers.patchBlog
);

router.delete(
  "/:subject/:post_id",
  loginVerify,
  programmingControllers.deleteBlog
);

module.exports = router;

/**
 * post("/:subject")
 * body: title: string, stateJson: text(string), stateHTML text(string)
 *
 * patch("/:subject/:post_id")
 * body: newTitle: string, newStateJson: text(string), newStateHTML text(string)
 */

/**
 * get
 * {
 *    "blogList": [
        {
            "id": 1,
            "title": "Test Title1",
            "subject": "algorithm",
            "stateJson": "`stringified JSON`",
            "stateHTML": "<div>Test</div>",
            "show": true,
            "createdAt": "2022-07-25T07:18:09.000Z",
            "updatedAt": "2022-07-25T07:18:09.000Z",
            "user_id": 1,
            "user": {
                "nickname": "최현민"
            }
        },
        ...
    ]
  }
 */
