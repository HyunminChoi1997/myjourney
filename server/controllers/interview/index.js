const { interview, memorized } = require("../../models");

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

module.exports = {
  getAll: async (req, res) => {
    try {
      const subject = req.params.subject;
      const interviewList = await interview.findAll({ where: { subject } });
      return res.status(200).send({ interviewList });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  getNomemo: async (req, res) => {
    try {
      const subject = req.params.subject;
      const user_id = req.user.id;

      const interviewList = await interview.findAll({ where: { subject } });
      const memorizedList = await memorized.findAll({ where: { user_id } });

      const sortedMemorizedList = memorizedList.map((el) => el.interview_id);
      sortedMemorizedList.sort((a, b) => a - b);

      const filteredInterviewList = interviewList.filter(
        (el) => binarySearch(sortedMemorizedList, el.id) == -1
      );

      return res.status(200).send({ interviewList: filteredInterviewList });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  getMemo: async (req, res) => {
    try {
      const user_id = req.user.id;

      const memorizedList = await memorized.findAll({
        include: [
          {
            model: interview,
          },
        ],
        where: { user_id },
      });

      const interviewList = {
        ...memorizedList.interview,
      };

      return res.status(200).send({ interviewList });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  post: async (req, res) => {
    const subject = req.params.subject;
    const { question, answer } = req.body;
    const payload = { question, answer, subject };

    return res.status(200).send(subject);
  },
};
