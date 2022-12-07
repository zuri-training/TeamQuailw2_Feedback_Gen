const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to TeamQuailw2 Feedback API" });
});

app.use("*", (req, res) => {
    res.send({ message: "Route Not found" });
});

module.exports = app;