const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://student:student@cluster0.re8z6.mongodb.net/air?retryWrites=true&w=majority")

// importuję expressa
const express = require("express");

// importuję loggera
const morgan = require("morgan");

// importuję body parsera
const bodyParser = require("body-parser");

// tworzę instancję expresa
const app = express();

// uruchamiam logera
app.use(morgan("combined"));

// wyciągam część body i umieszczam w req.body
app.use(bodyParser.json());

// routy
const bookRoutes = require("./routes/books");
app.use("/", bookRoutes);

app.use((req, res) => {
    res.status(404).json({message: "Not found"});
});



// eksport apki
module.exports = app;