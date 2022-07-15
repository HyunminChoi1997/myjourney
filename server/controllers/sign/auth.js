const { user } = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrpyt = require("bcrypt");

passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    let userInfo;
    try {
      userInfo = user.findOne({ where: username });
      if (!userInfo) {
        return cb(null, false, { message: "Incorrect username or password." });
      }
      const passwordVerify = await bcrpyt.compare(password, userInfo.password);

      if (!passwordVerify) {
        return cb(null, false, { message: "Incorrect username or password." });
      }

      return cb(null, userInfo);

      return;
    } catch (err) {
      return cb(err);
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});
