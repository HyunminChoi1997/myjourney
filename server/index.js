const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Hello!");
});

server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
