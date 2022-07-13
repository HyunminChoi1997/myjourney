const { interview } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const subject = req.params.subject;
    return res.status(200).send(subject);
  },

  post: async (req, res) => {
    const subject = req.params.subject;
    return res.status(200).send(subject);
  },
};
