const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const picsUri = require("./data/tokyo.json");

app.use(cors());

app.get("/api/tokyo", (req, res) => {
  res.json(picsUri);
});

app.listen(port);
