const { user } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = {
  verified: (req, res) => {
    const { id, nickname, position } = req.user;
    const userInfo = { id, nickname, position };
    return res.status(200).send({ userInfo });
  },

  signupPost: async (req, res) => {
    const { username, nickname, password } = req.body;
    const position = "user";
    try {
      const idExist = await user.findOne({ where: { username } });
      if (idExist) {
        return res.status(409).send({ message: "Username Already Exists" });
      }

      const nicknameExist = await user.findOne({ where: { nickname } });
      if (nicknameExist) {
        return res.status(409).send({ message: "Nickname Already Exists" });
      }

      bcrypt.hash(password, Number(process.env.SALTROUND), async function (err, hash) {
        const payload = {
          username,
          nickname,
          password: hash,
          position,
        };
        await user.create(payload);
        return res.status(201).send({ message: "Signup Success" });
      });
    } catch (err) {
      return res.status(501).send({ error: err, message: "Something Went Wrong" });
    }
  },

  signinPost: (req, res) => {
    const { id, nickname, position } = req.user;
    const userInfo = { id, nickname, position };
    return res.status(200).send({ userInfo, message: "Successfully Logged In" });
  },

  signoutPost: (req, res) => {
    req.logout(function (err) {
      if (err) {
        return res.status(501).send({ err, message: "Something Went Wrong" });
      }
      return res.status(201).send({ message: "LoggedOut" });
    });
  },
};
