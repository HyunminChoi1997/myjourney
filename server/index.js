const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const sign = require("./routes/sign");
const interview = require("./routes/interview");

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://www.fatfobcodes.ml",
      "https://fatfobcodes.ml",
      "http://localhost:7000",
    ],
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.get("/", (req, res) => {
  return res.status(200).send("Server Currently Working");
});

app.use("/sign", sign);
app.use("/interview", interview);

server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
