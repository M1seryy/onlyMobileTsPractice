const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json())
const cors = require("cors");

const port = process.env.PORT;
const login = process.env.LOGIN;
const password = process.env.PASSWORD;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const todoRoutes = require("./API/routes/TASKS/index");

app.use("/api/todo", todoRoutes);
const mongoose = require("mongoose");

const connection = mongoose.connect(
  `mongodb+srv://${login}:${password}@todo.p1xbwed.mongodb.net/`
);
connection
  .then(() => {
    app.listen(port, function () {
      console.log(`Server running. fUse our API on port:${process.env.PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
