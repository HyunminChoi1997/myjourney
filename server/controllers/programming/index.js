const { user, progblog } = require("../../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const subject = req.params.subject;
      const blogList = await progblog.findAll({
        include: [
          {
            model: user,
            attributes: ["nickname"],
          },
        ],
        where: { subject, show: true },
      });
      return res.status(200).send({ blogList });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  postBlog: async (req, res) => {
    try {
      const subject = req.params.subject;
      const { title, stateJson, stateHTML } = req.body;
      const payload = {
        title,
        subject,
        stateJson,
        stateHTML,
        show: false,
        user_id: req.user.id,
      };
      if (req.user.position === "admin") {
        payload.show = true;
      }

      const createdInfo = await progblog.create(payload);
      return res
        .status(201)
        .send({ id: createdInfo.id, message: "Successfully Created" });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  patchBlog: async (req, res) => {
    try {
      const { subject, post_id } = req.params;
      const { newTitle, newStateJson, newStateHTML } = req.body;
      const blogInfo = await progblog.findOne({
        where: { id: post_id, subject },
      });

      if (!blogInfo) {
        return res.status(404).send({ message: "Post does not exist" });
      }

      if (blogInfo.user_id !== req.user.id) {
        return res
          .status(401)
          .send({ message: "This user did not create this post" });
      }

      blogInfo.set({
        title: newTitle,
        stateJson: newStateJson,
        stateHTML: newStateHTML,
      });

      if (req.user.position !== "admin") {
        blogInfo.set({ show: false });
      }
      await blogInfo.save();
      return res
        .status(201)
        .send({ id: blogInfo.id, message: "Updated Successfully" });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
  deleteBlog: async (req, res) => {
    try {
      const { subject, post_id } = req.params;
      await progblog.destroy({ where: { id: post_id, subject } });
      return res
        .status(201)
        .send({ id: post_id, message: "Deleted Successfully" });
    } catch (err) {
      return res.status(501).send({ err, message: "Something Went Wrong" });
    }
  },
};
