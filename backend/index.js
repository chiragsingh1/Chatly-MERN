const express = require("express");
const Data = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

app.get("/api/chat", (req, res) => {
  console.log("Sending Data");
  return res.send(Data);
});

app.listen(
  process.env.PORT || 5000,
  console.log(`Server running on port: ${5000}`)
);
