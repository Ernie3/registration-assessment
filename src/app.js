const config = require("../config.json");
const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ 
    extended: true 
}));
app.use(express.json());

// Health Check
app.use("/health", (req, res) => res.sendStatus(200));

// Views
app.use(express.static(path.join(__dirname, 'public')));
app.use("/registered", (req, res) => res.sendFile(path.join(__dirname, "public/registered.html")));

// API
const registration = require("./routes/registration");
app.use("/api/register", registration);

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.message);
});

const listener = app.listen(config.port, function() {
    console.log("Listening on +:" + listener.address().port);
});

module.exports = app;
