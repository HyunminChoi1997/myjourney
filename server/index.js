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
    origin: [
      "https://www.fatfobcodes.ml",
      "https://fatfobcodes.ml",
      "http://localhost:7000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(
  session({
    name: "sessionID",
    secret: process.env.SC_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      HttpOnly: true,
      // secure: true //Https protocol
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  return res.status(200).send(process.env.BUCKET_NAME);
});

app.use("/user", user);
app.use("/interview", interview);

server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
