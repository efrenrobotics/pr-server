const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Defining Routes
const userRoutes = require("./routes/userRoutes");
const openAIRoutes = require("./routes/openAIRoutes");

// Enable api endpoints
app.use("/api/user", userRoutes);
app.use("/api/gen", openAIRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({
    ping: "pong",
  });
});

module.exports = app;
