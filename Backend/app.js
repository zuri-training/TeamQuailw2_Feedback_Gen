const express = require("express");
const app = express();
const passport = require('passport');
const userRoutes = require('./src/user/user.route');
const authRoutes = require('./src/user/auth.route');

app.use(express.json());
require('./src/config/passport');

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.get("/", (req, res) => {
    res.send({ message: "Welcome to TeamQuailw2 Feedback API" });
});

app.use("*", (req, res) => {
    res.send({ message: "Route Not found" });
});

module.exports = app;
