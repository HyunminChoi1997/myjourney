exports.loginVerify = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(401).send("Please log in");
  }
};
