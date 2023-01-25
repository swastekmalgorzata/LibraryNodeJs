const express = require("express");
const mongoose = require("mongoose");
const books = require("../models/books");
const { findById } = require("../models/books");

const Book = require("../models/books");

const router = express.Router();

router.post("/", (req, res)=> {
    const book= new Book({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author,
        section: req.body.section,
        avaibility: true,
    });
    book.save()
    .then(result=> {
        res.status(201).json({
            message : " New book added",
            data: result
        });
    });
});

router.get("/", (req, res)=> {
    books.find()
    .then(result => {
        res.status(200).json({
            message: "List of all the books",
            data: result
        });
    });
});

router.get("/:title", (req, res) => {
    const tittle = req.params.title;
    books.where('title').equals(tittle)
    .then(result => {
        res.status(200).json({
            message:"Results for searching: " + tittle,
            data: result,
        });
    });
});
router.delete("/:id", (req,res)=>{
    const id = req.params.id;
    books.findByIdAndDelete(id)
    .then(result => {
        res.status(200).json({
            message: "Deleted book with id number " + id
        });
    });
});
router.patch("/changeAvability/:id", (req,res)=>{
    const id= req.params.id;
    const avaibility=req.body.avaibility;
    books.findOneAndUpdate({_id: id} , {avaibility:avaibility})
    .then(result =>{
        res.status(200).json({
            message: " Avaibility changed of book " + id + " has been changer to " + avaibility
        });
    });
});
router.put("/:id", (req, res) => {
    const id = req.params.id;
    Pollution.findByIdAndUpdate(id, 
        {title: req.body.title, author: req.body.author, section: req.body.section, avaibility: req.body.avaibility})
        .then(result => {
            res.status(200).json({message: "Changed info about book id " + id});
        })
});
module.exports = router;
