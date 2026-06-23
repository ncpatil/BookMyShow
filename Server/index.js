const dns = require("dns");
dns.setServers(["8.8.8.8"]);

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConfig = require("./dbConfig");
const dotEnv = require("dotenv");
dotEnv.config();

const app = express();
dbConfig.connectDb();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
const userRoutes = require("./routes/user.route.js");
app.use(express.json());
app.use("/api/auth", userRoutes);

app.listen(8000, () => {
  console.log("Server started");
});
