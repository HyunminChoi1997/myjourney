require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const app = express();
const port = 8000;

const passport = require("passport");
const passportStrategy = require("./controllers/user/auth");
const user = require("./routes/user");
const interview = require("./routes/interview");

passportStrategy();
app.use(express.json());
app.use(
  cors({
    origin: ["https://www.fatfobcodes.ml", "https://fatfobcodes.ml", "http://localhost:7000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
const sessionOptions = {
  name: "sessionID",
  secret: process.env.SC_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 3600000,
  },
};

if (process.env.DEPLOY) {
  app.set("trust proxy", 1);
  sessionOptions.cookie.secure = true;
  sessionOptions.cookie.sameSite = "none";
}

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  return res.status(200).send("Hello");
});

app.use("/user", user);
app.use("/interview", interview);

server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
