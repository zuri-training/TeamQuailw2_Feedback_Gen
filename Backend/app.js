const express = require("express");
const app = express();

require('./src/user/user.model');

app.use(require('./src/user/user.route'));

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to TeamQuailw2 Feedback API" });
});

app.use("*", (req, res) => {
    res.send({ message: "Route Not found" });
});

module.exports = app;
