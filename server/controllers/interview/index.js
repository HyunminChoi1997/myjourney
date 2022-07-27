const { user, interview, memorized } = require("../../models");

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
    if (req.user) {
      try {
        const { subject, language } = req.params;
        const user_id = req.user.id;

        const interviewList = await interview.findAll({
          include: [
            {
              model: user,
              attributes: ["nickname"],
            },
          ],
          where: { subject, show: true, language },
        });
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
    } else {
      try {
        const { subject, language } = req.params;
        const interviewList = await interview.findAll({
          include: [
            {
              model: user,
              attributes: ["nickname"],
            },
          ],
          where: { subject, show: true, language },
        });
        return res.status(200).send({ interviewList });
      } catch (err) {
        return res.status(501).send({ err, message: "Something Went Wrong" });
      }
    }
  },
  getNomemo: async (req, res) => {
    try {
      const subject = req.params.subject;
      const user_id = req.user.id;

      const interviewList = await interview.findAll({
        include: [
          {
            model: user,
            attributes: ["nickname"],
          },
        ],
        where: { subject, show: true },
      });
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
          {
            model: user,
            attributes: ["nickname"],
          },
        ],
        where: { user_id },
      });

      const interviewList = memorizedList.map((el) => {
        return { ...el.interview.dataValues, user: el.user.dataValues };
      });

      return res.status(200).send({ interviewList });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  post: async (req, res) => {
    try {
      const subject = req.params.subject;
      const { question, answer, language } = req.body;
      const payload = {
        question,
        answer,
        subject,
        language,
        show: false,
        user_id: req.user.id,
      };
      if (req.user.position === "admin") {
        payload.show = true;
      }
      const createdInfo = await interview.create(payload);
      return res
        .status(201)
        .send({ id: createdInfo.id, message: "Successfully Created" });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  postMemo: async (req, res) => {
    try {
      const user_id = req.user.id;
      const { interview_id } = req.body;

      const createdInfo = await memorized.create({ user_id, interview_id });
      return res.status(201).send({ id: createdInfo.id });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },

  patchInterview: async (req, res) => {
    try {
      const { subject, interview_id } = req.params;
      const { newQuestion, newAnswer, newLanguage } = req.body;
      const interviewInfo = await interview.findOne({
        where: { id: interview_id, subject },
      });

      if (!interviewInfo) {
        return res.status(404).send({ message: "Card does not exist" });
      }

      if (interviewInfo.user_id !== req.user.id) {
        return res
          .status(401)
          .send({ message: "This user did not create this card" });
      }

      interviewInfo.set({
        question: newQuestion,
        answer: newAnswer,
        language: newLanguage,
      });

      if (req.user.position !== "admin") {
        interviewInfo.set({ show: false });
      }

      await interviewInfo.save();
      return res
        .status(201)
        .send({ id: interviewInfo.id, message: "Updated Successfully" });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  deleteInterview: async (req, res) => {
    try {
      const { subject, interview_id } = req.params;
      await interview.destroy({ where: { id: interview_id, subject } });
      return res
        .status(201)
        .send({ id: interview_id, message: "Deleted Successfully" });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
};
