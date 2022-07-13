const { user } = require("../../models");

module.exports = {
  get: async (req, res) => {
    return res.status(200).send("Good");
  },

  post: async (req, res) => {
    return res.status(200).send("Good");
  },
};
