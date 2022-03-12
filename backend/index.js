const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.listen(
  process.env.PORT || 5000,
  console.log(`Server running on port: ${5000}`)
);
