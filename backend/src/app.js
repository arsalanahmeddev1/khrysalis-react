const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// ERROR HANDLER
const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "src/config/config.env" });
}

// APP USE
app.use(
  "/public/uploads",
  express.static(path.resolve(__dirname, "../" + "public/uploads"))
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ROUTE IMPORT
const auth = require("./routes/auth");
const channel = require("./routes/channel");
const video = require("./routes/video");
const comment = require("./routes/comment");
const playlist = require("./routes/playlist");

// TESTING
app.get("/", (req, res) => {
  res.json("working");
});

// CONTROLLERS
app.use("/api/auth", auth);
app.use("/api/channel", channel);
app.use("/api/video", video);
app.use("/api/comment", comment);
app.use("/api/playlist", playlist);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
