var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const studentModel = require("../models/student.model")

router.get("/", (req, res, next) => {
    res.send("student route works")
});

router.post("/add", (req, res, next) => {

    let newStudent = new studentModel({
        // studentId: 100,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        dob: req.body.dob,
        department: req.body.department
    })

    newStudent.save((err, newStudent) => {
        if (err) res.send(err)
        else res.send({ message: "Student obj created", studentObj: newStudent })
    })
})

router.get("/searchByFirstName", (req,res,next) => {
    const firstNameQuery = req.query.firstName ;
    console.log(firstNameQuery)
    studentModel.find({firstName: firstNameQuery}, (err, response) => {
        if(err) res.send(err);
        else res.send({status:200, resultsFound:response.length, students:response})
    })
})

module.exports = router;