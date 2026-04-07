const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const contributorRoutes = require("./routes/contributorRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contributors", contributorRoutes);

app.get("/", (req, res) => {
  res.send("Contribution Tracker API Running");
});

module.exports = app;
