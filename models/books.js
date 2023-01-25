const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    author: String,
    section: String,
    avaibility: Boolean,
});

module.exports = mongoose.model("Books", bookSchema);