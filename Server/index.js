const dns = require("dns");
dns.setServers(["8.8.8.8"]);

const dotEnv = require("dotenv").config();

const express = require("express");
const dbConfig = require("./dbConfig");

const app = express();
dbConfig.connectDb();

app.get("/", (req, res) => {
  res.send("Hello from the the sever");
});

app.listen(8000, () => {
  console.log("Server started");
});
