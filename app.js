const mongoose = require("mongoose");



const express = require("express");


const morgan = require("morgan");


const bodyParser = require("body-parser");


const app = express();


app.use(morgan("combined"));


app.use(bodyParser.json());


const bookRoutes = require("./routes/books");
app.use("/", bookRoutes);

app.use((req, res) => {
    res.status(404).json({message: "Not found"});
});



module.exports = app;
