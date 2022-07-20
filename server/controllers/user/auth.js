const { user } = require("../../models");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrpyt = require("bcrypt");

module.exports = () => {
  passport.serializeUser(function (userInfo, cb) {
    cb(null, userInfo.id);
  });

  passport.deserializeUser(async function (id, cb) {
    try {
      const result = await user.findByPk(id);
      return cb(null, result);
    } catch (err) {
      cb(err);
    }
  });

  // passport.serializeUser(function (user, cb) {
  //   process.nextTick(function () {
  //     return cb(null, {
  //       id: user.id,
  //       username: user.username,
  //     });
  //   });
  // });

  // passport.deserializeUser(function (user, cb) {
  //   process.nextTick(function () {
  //     return cb(null, user);
  //   });
  // });

  passport.use(
    new LocalStrategy(async function verify(username, password, cb) {
      try {
        const userInfo = await user.findOne({ where: { username } });
        if (!userInfo) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        const passwordVerify = await bcrpyt.compare(password, userInfo.password);

        if (!passwordVerify) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        return cb(null, userInfo);
      } catch (err) {
        return cb(err);
      }
    })
  );
};
