const express = require("express");
const cors = require("cors");
const path = require("path");
const socket = require("socket.io");
const mongoose = require("mongoose");
const sanitize = require("mongo-sanitize");
const helmet = require("helmet");
const app = express();

// import routes
const concertsRoutes = require("./routes/concerts.routes");
const seatsRoutes = require("./routes/seats.routes");
const testimonialsRoutes = require("./routes/testimonials.routes");

// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(helmet());

app.use(
  cors({
    origin: "http://herorero.herokuapp.com/"
  })
);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(express.static(path.join(__dirname, "/client/build")));

app.use("/api", concertsRoutes);
app.use("/api", seatsRoutes);
app.use("/api", testimonialsRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use((req, res) => {
  res.status(404).send("404 not found...");
});

mongoose.connect(
  `mongodb+srv://dzikdrums:mongo4880po9@cluster-v42rn.mongodb.net/NewWaveDB?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port: 8000");
});

const io = socket(server);

io.on("connection", socket => {
  console.log("New socket!");
});
