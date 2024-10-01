const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/user", (req, res) => {
  res.json({
    message: "success",
    status: 200,
    data: [{ id: 1, name: "Nitro7", login: "nitro7", password: "123456" }],
  });
});

app.listen(Number(PORT), () => {
  console.log("http://localhost:" + PORT);
});
