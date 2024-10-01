const express = require("express");
const cors = require("cors");
require("dotenv").config();

class ResData {
  constructor(message, status, data) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const data = new ResData("success", 200, "Assalomu alaykum");
  res.status(data.status).json(data);
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
