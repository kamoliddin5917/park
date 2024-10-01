const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(Number(PORT), () => {
  console.log("http://localhost:" + PORT);
});
