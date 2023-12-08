require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const tokyoController = require("./controllers/tokyoController");
const landingController = require("./controllers/landingController");
const signIn = require("./controllers/signIn");
const signUp = require("./controllers/signUp");
const port = process.env.PORT;
const secretKey = process.env.SECRET_KEY;

let users = []; // This Array is mockup DB
app.listen(port);

app.use(cors());

app.use(express.json());

app.get("/api/tokyo", tokyoController);

app.get("/api/landing", landingController);

app.post("/api/register", signUp);

app.post("/api/login", signIn);
